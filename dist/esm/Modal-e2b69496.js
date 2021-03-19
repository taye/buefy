import { d as directive } from './trapFocus-d909e804.js';
import { removeElement } from './helpers.js';
import { c as config } from './config-63b70aae.js';
import { resolveDirective, openBlock, createBlock, Transition, withCtx, withDirectives, createVNode, resolveDynamicComponent, mergeProps, toHandlers, renderSlot, vShow, createCommentVNode } from 'vue';

var script = {
  name: 'BModal',
  directives: {
    trapFocus: directive
  },
  // deprecated, to replace with default 'value' in the next breaking change
  model: {
    prop: 'active',
    event: 'update:active'
  },
  props: {
    active: Boolean,
    component: [Object, Function, String],
    content: [String, Array],
    programmatic: Boolean,
    props: Object,
    events: Object,
    width: {
      type: [String, Number],
      default: 960
    },
    hasModalCard: Boolean,
    animation: {
      type: String,
      default: 'zoom-out'
    },
    canCancel: {
      type: [Array, Boolean],
      default: function _default() {
        return config.defaultModalCanCancel;
      }
    },
    onCancel: {
      type: Function,
      default: function _default() {}
    },
    scroll: {
      type: String,
      default: function _default() {
        return config.defaultModalScroll ? config.defaultModalScroll : 'clip';
      },
      validator: function validator(value) {
        return ['clip', 'keep'].indexOf(value) >= 0;
      }
    },
    fullScreen: Boolean,
    trapFocus: {
      type: Boolean,
      default: function _default() {
        return config.defaultTrapFocus;
      }
    },
    autoFocus: {
      type: Boolean,
      default: function _default() {
        return config.defaultAutoFocus;
      }
    },
    customClass: String,
    ariaRole: {
      type: String,
      validator: function validator(value) {
        return ['dialog', 'alertdialog'].indexOf(value) >= 0;
      }
    },
    ariaModal: Boolean,
    ariaLabel: {
      type: String,
      validator: function validator(value) {
        return Boolean(value);
      }
    },
    destroyOnHide: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      isActive: this.active || false,
      savedScrollTop: null,
      newWidth: typeof this.width === 'number' ? this.width + 'px' : this.width,
      animating: !this.active,
      destroyed: !this.active
    };
  },
  computed: {
    cancelOptions: function cancelOptions() {
      return typeof this.canCancel === 'boolean' ? this.canCancel ? config.defaultModalCanCancel : [] : this.canCancel;
    },
    showX: function showX() {
      return this.cancelOptions.indexOf('x') >= 0;
    },
    customStyle: function customStyle() {
      if (!this.fullScreen) {
        return {
          maxWidth: this.newWidth
        };
      }

      return null;
    }
  },
  watch: {
    active: function active(value) {
      this.isActive = value;
    },
    isActive: function isActive(value) {
      var _this = this;

      if (value) this.destroyed = false;
      this.handleScroll();
      this.$nextTick(function () {
        if (value && _this.$el && _this.$el.focus && _this.autoFocus) {
          _this.$el.focus();
        }
      });
    }
  },
  methods: {
    handleScroll: function handleScroll() {
      if (typeof window === 'undefined') return;

      if (this.scroll === 'clip') {
        if (this.isActive) {
          document.documentElement.classList.add('is-clipped');
        } else {
          document.documentElement.classList.remove('is-clipped');
        }

        return;
      }

      this.savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;

      if (this.isActive) {
        document.body.classList.add('is-noscroll');
      } else {
        document.body.classList.remove('is-noscroll');
      }

      if (this.isActive) {
        document.body.style.top = "-".concat(this.savedScrollTop, "px");
        return;
      }

      document.documentElement.scrollTop = this.savedScrollTop;
      document.body.style.top = null;
      this.savedScrollTop = null;
    },

    /**
    * Close the Modal if canCancel and call the onCancel prop (function).
    */
    cancel: function cancel(method) {
      if (this.cancelOptions.indexOf(method) < 0) return;
      this.$emit('cancel', arguments);
      this.onCancel.apply(null, arguments);
      this.close();
    },

    /**
    * Call the onCancel prop (function).
    * Emit events, and destroy modal if it's programmatic.
    */
    close: function close() {
      var _this2 = this;

      this.$emit('close');
      this.$emit('update:active', false); // Timeout for the animation complete before destroying

      if (this.programmatic) {
        this.isActive = false;
        setTimeout(function () {
          _this2.$destroy();

          removeElement(_this2.$el);
        }, 150);
      }
    },

    /**
    * Keypress event that is bound to the document.
    */
    keyPress: function keyPress(_ref) {
      var key = _ref.key;
      if (this.isActive && (key === 'Escape' || key === 'Esc')) this.cancel('escape');
    },

    /**
    * Transition after-enter hook
    */
    afterEnter: function afterEnter() {
      this.animating = false;
      this.$emit('after-enter');
    },

    /**
    * Transition before-leave hook
    */
    beforeLeave: function beforeLeave() {
      this.animating = true;
    },

    /**
    * Transition after-leave hook
    */
    afterLeave: function afterLeave() {
      if (this.destroyOnHide) {
        this.destroyed = true;
      }

      this.$emit('after-leave');
    }
  },
  created: function created() {
    if (typeof window !== 'undefined') {
      document.addEventListener('keyup', this.keyPress);
    }
  },
  beforeMount: function beforeMount() {
    // Insert the Modal component in body tag
    // only if it's programmatic
    this.programmatic && document.body.appendChild(this.$el);
  },
  mounted: function mounted() {
    if (this.programmatic) this.isActive = true;else if (this.isActive) this.handleScroll();
  },
  beforeDestroy: function beforeDestroy() {
    if (typeof window !== 'undefined') {
      document.removeEventListener('keyup', this.keyPress); // reset scroll

      document.documentElement.classList.remove('is-clipped');
      var savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;
      document.body.classList.remove('is-noscroll');
      document.documentElement.scrollTop = savedScrollTop;
      document.body.style.top = null;
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_trap_focus = resolveDirective("trap-focus");

  return (openBlock(), createBlock(Transition, {
    name: $props.animation,
    onAfterEnter: $options.afterEnter,
    onBeforeLeave: $options.beforeLeave,
    onAfterLeave: $options.afterLeave
  }, {
    default: withCtx(() => [
      (!$data.destroyed)
        ? withDirectives((openBlock(), createBlock("div", {
            key: 0,
            class: ["modal is-active", [{'is-full-screen': $props.fullScreen}, $props.customClass]],
            tabindex: "-1",
            role: $props.ariaRole,
            "aria-label": $props.ariaLabel,
            "aria-modal": $props.ariaModal
          }, [
            createVNode("div", {
              class: "modal-background",
              onClick: _cache[1] || (_cache[1] = $event => ($options.cancel('outside')))
            }),
            createVNode("div", {
              class: ["animation-content", { 'modal-content': !$props.hasModalCard }],
              style: $options.customStyle
            }, [
              ($props.component)
                ? (openBlock(), createBlock(resolveDynamicComponent($props.component), mergeProps({ key: 0 }, $props.props, toHandlers($props.events), {
                    "can-cancel": $props.canCancel,
                    onClose: $options.close
                  }), null, 16 /* FULL_PROPS */, ["can-cancel", "onClose"]))
                : ($props.content)
                  ? (openBlock(), createBlock("div", {
                      key: 1,
                      innerHTML: $props.content
                    }, null, 8 /* PROPS */, ["innerHTML"]))
                  : renderSlot(_ctx.$slots, "default", {
                      key: 2,
                      canCancel: $props.canCancel,
                      close: $options.close
                    }),
              ($options.showX)
                ? withDirectives((openBlock(), createBlock("button", {
                    key: 3,
                    type: "button",
                    class: "modal-close is-large",
                    onClick: _cache[2] || (_cache[2] = $event => ($options.cancel('x')))
                  }, null, 512 /* NEED_PATCH */)), [
                    [vShow, !$data.animating]
                  ])
                : createCommentVNode("v-if", true)
            ], 6 /* CLASS, STYLE */)
          ], 10 /* CLASS, PROPS */, ["role", "aria-label", "aria-modal"])), [
            [vShow, $data.isActive],
            [_directive_trap_focus, $props.trapFocus]
          ])
        : createCommentVNode("v-if", true)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["name", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]))
}

script.render = render;
script.__file = "src/components/modal/Modal.vue";

export { script as s };
