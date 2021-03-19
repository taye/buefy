'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a6b1b170.js');
var Icon = require('./Icon-59750035.js');
var SlotComponent = require('./SlotComponent-2eefe90f.js');
var InjectedChildMixin = require('./InjectedChildMixin-28e1211a.js');
var helpers = require('./helpers.js');
var vue = require('vue');

var TabbedMixin = (function (cmp) {
  var _components;

  return {
    mixins: [InjectedChildMixin.ProviderParentMixin(cmp, InjectedChildMixin.Sorted)],
    components: (_components = {}, _rollupPluginBabelHelpers._defineProperty(_components, Icon.script.name, Icon.script), _rollupPluginBabelHelpers._defineProperty(_components, SlotComponent.SlotComponent.name, SlotComponent.SlotComponent), _components),
    props: {
      value: {
        type: [String, Number],
        default: undefined
      },
      size: String,
      animated: {
        type: Boolean,
        default: true
      },
      animation: String,
      vertical: {
        type: Boolean,
        default: false
      },
      position: String,
      destroyOnHide: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        activeId: this.value,
        // Internal state
        defaultSlots: [],
        contentHeight: 0,
        isTransitioning: false
      };
    },
    mounted: function mounted() {
      if (typeof this.value === 'number') {
        // Backward compatibility: converts the index value to an id
        var value = helpers.bound(this.value, 0, this.items.length - 1);
        this.activeId = this.items[value].value;
      } else {
        this.activeId = this.value;
      }
    },
    computed: {
      activeItem: function activeItem() {
        var _this = this;

        return this.activeId === undefined ? this.items[0] : this.activeId === null ? null : this.childItems.find(function (i) {
          return i.value === _this.activeId;
        });
      },
      items: function items() {
        return this.sortedItems;
      }
    },
    watch: {
      /**
       * When v-model is changed set the new active tab.
       */
      value: function value(_value) {
        if (typeof _value === 'number') {
          // Backward compatibility: converts the index value to an id
          _value = helpers.bound(_value, 0, this.items.length - 1);
          this.activeId = this.items[_value].value;
        } else {
          this.activeId = _value;
        }
      },

      /**
       * Sync internal state with external state
       */
      activeId: function activeId(val, oldValue) {
        var oldTab = oldValue !== undefined && oldValue !== null ? this.childItems.find(function (i) {
          return i.value === oldValue;
        }) : null;

        if (oldTab && this.activeItem) {
          oldTab.deactivate(this.activeItem.index);
          this.activeItem.activate(oldTab.index);
        }

        val = this.activeItem ? typeof this.value === 'number' ? this.items.indexOf(this.activeItem) : this.activeItem.value : undefined;

        if (val !== this.value) {
          this.$emit('input', val);
        }
      }
    },
    methods: {
      /**
      * Child click listener, emit input event and change active child.
      */
      childClick: function childClick(child) {
        this.activeId = child.value;
      }
    }
  };
});

function render(_ctx, _cache) {
  return (_ctx.parent.animated)
    ? (vue.openBlock(), vue.createBlock(vue.Transition, {
        key: 0,
        name: _ctx.parent.animated ? _ctx.parent.animation || _ctx.transitionName : null,
        onBeforeEnter: _cache[1] || (_cache[1] = $event => (_ctx.parent.isTransitioning = true)),
        onAfterEnter: _cache[2] || (_cache[2] = $event => (_ctx.parent.isTransitioning = false))
      }, {
        default: vue.withCtx(() => [
          (_ctx.parent.destroyOnHide ? _ctx.show : true)
            ? vue.withDirectives((vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: _ctx.elementClass
              }, [
                vue.renderSlot(_ctx.$slots, "default")
              ], 2 /* CLASS */)), [
                [vue.vShow, _ctx.show]
              ])
            : vue.createCommentVNode("v-if", true)
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["name"]))
    : (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 1 }, [
        (_ctx.parent.destroyOnHide ? _ctx.show : true)
          ? vue.withDirectives((vue.openBlock(), vue.createBlock("div", {
              key: 0,
              class: _ctx.elementClass
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 2 /* CLASS */)), [
              [vue.vShow, _ctx.show]
            ])
          : vue.createCommentVNode("v-if", true)
      ], 64 /* STABLE_FRAGMENT */))
}

const script = {};


script.render = render;
script.__file = "src/utils/TabbedChildMixinRender.vue";

var TabbedChildMixin = (function (parentCmp) {
  return vue.defineComponent({
    mixins: [InjectedChildMixin.InjectedChildMixin(parentCmp, InjectedChildMixin.Sorted$1), script],
    props: {
      label: String,
      icon: String,
      iconPack: String,
      visible: {
        type: Boolean,
        default: true
      },
      value: {
        type: String,
        default: function _default() {
          return Math.random().toString();
        }
      },
      headerClass: {
        type: [String, Array, Object],
        default: null
      }
    },
    data: function data() {
      return {
        transitionName: null,
        elementClass: 'item'
      };
    },
    computed: {
      isActive: function isActive() {
        return this.parent.activeItem === this;
      },
      show: function show() {
        return this.isActive && this.visible;
      }
    },
    methods: {
      /**
       * Activate element, alter animation name based on the index.
       */
      activate: function activate(oldIndex) {
        this.transitionName = this.index < oldIndex ? this.parent.vertical ? 'slide-down' : 'slide-next' : this.parent.vertical ? 'slide-up' : 'slide-prev';
      },

      /**
       * Deactivate element, alter animation name based on the index.
       */
      deactivate: function deactivate(newIndex) {
        this.transitionName = newIndex < this.index ? this.parent.vertical ? 'slide-down' : 'slide-next' : this.parent.vertical ? 'slide-up' : 'slide-prev';
      }
    }
  });
});

exports.TabbedChildMixin = TabbedChildMixin;
exports.TabbedMixin = TabbedMixin;
