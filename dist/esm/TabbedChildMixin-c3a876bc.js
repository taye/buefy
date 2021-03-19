import { _ as _defineProperty } from './_rollupPluginBabelHelpers-0979e6ce.js';
import { s as script$1 } from './Icon-9c398a60.js';
import { S as SlotComponent } from './SlotComponent-07d8e7a2.js';
import { P as ProviderParentMixin, S as Sorted, I as InjectedChildMixin, a as Sorted$1 } from './InjectedChildMixin-9132fdb9.js';
import { bound } from './helpers.js';
import { openBlock, createBlock, Transition, withCtx, withDirectives, renderSlot, vShow, createCommentVNode, Fragment, defineComponent } from 'vue';

var TabbedMixin = (function (cmp) {
  var _components;

  return {
    mixins: [ProviderParentMixin(cmp, Sorted)],
    components: (_components = {}, _defineProperty(_components, script$1.name, script$1), _defineProperty(_components, SlotComponent.name, SlotComponent), _components),
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
        var value = bound(this.value, 0, this.items.length - 1);
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
          _value = bound(_value, 0, this.items.length - 1);
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
    ? (openBlock(), createBlock(Transition, {
        key: 0,
        name: _ctx.parent.animated ? _ctx.parent.animation || _ctx.transitionName : null,
        onBeforeEnter: _cache[1] || (_cache[1] = $event => (_ctx.parent.isTransitioning = true)),
        onAfterEnter: _cache[2] || (_cache[2] = $event => (_ctx.parent.isTransitioning = false))
      }, {
        default: withCtx(() => [
          (_ctx.parent.destroyOnHide ? _ctx.show : true)
            ? withDirectives((openBlock(), createBlock("div", {
                key: 0,
                class: _ctx.elementClass
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2 /* CLASS */)), [
                [vShow, _ctx.show]
              ])
            : createCommentVNode("v-if", true)
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["name"]))
    : (openBlock(), createBlock(Fragment, { key: 1 }, [
        (_ctx.parent.destroyOnHide ? _ctx.show : true)
          ? withDirectives((openBlock(), createBlock("div", {
              key: 0,
              class: _ctx.elementClass
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2 /* CLASS */)), [
              [vShow, _ctx.show]
            ])
          : createCommentVNode("v-if", true)
      ], 64 /* STABLE_FRAGMENT */))
}

const script = {};


script.render = render;
script.__file = "src/utils/TabbedChildMixinRender.vue";

var TabbedChildMixin = (function (parentCmp) {
  return defineComponent({
    mixins: [InjectedChildMixin(parentCmp, Sorted$1), script],
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

export { TabbedMixin as T, TabbedChildMixin as a };
