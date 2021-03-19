import { _ as _defineProperty } from './_rollupPluginBabelHelpers-0979e6ce.js';
import { d as directive } from './trapFocus-d909e804.js';
import { s as script$2 } from './Icon-9c398a60.js';
import { s as script$1 } from './Modal-e2b69496.js';
import { c as config, V as VueInstance } from './config-63b70aae.js';
import { removeElement, merge } from './helpers.js';
import { resolveComponent, resolveDirective, openBlock, createBlock, Transition, withCtx, withDirectives, createVNode, toDisplayString, createCommentVNode, renderSlot, mergeProps, withKeys, vModelDynamic } from 'vue';
import { a as registerComponent, r as registerComponentProgrammatic, u as use } from './plugins-a0a180cf.js';

var script = {
  name: 'BDialog',
  components: _defineProperty({}, script$2.name, script$2),
  directives: {
    trapFocus: directive
  },
  extends: script$1,
  props: {
    title: String,
    message: [String, Array],
    icon: String,
    iconPack: String,
    hasIcon: Boolean,
    type: {
      type: String,
      default: 'is-primary'
    },
    size: String,
    confirmText: {
      type: String,
      default: function _default() {
        return config.defaultDialogConfirmText ? config.defaultDialogConfirmText : 'OK';
      }
    },
    cancelText: {
      type: String,
      default: function _default() {
        return config.defaultDialogCancelText ? config.defaultDialogCancelText : 'Cancel';
      }
    },
    hasInput: Boolean,
    // Used internally to know if it's prompt
    inputAttrs: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    onConfirm: {
      type: Function,
      default: function _default() {}
    },
    closeOnConfirm: {
      type: Boolean,
      default: true
    },
    container: {
      type: String,
      default: function _default() {
        return config.defaultContainerElement;
      }
    },
    focusOn: {
      type: String,
      default: 'confirm'
    },
    trapFocus: {
      type: Boolean,
      default: function _default() {
        return config.defaultTrapFocus;
      }
    },
    ariaRole: {
      type: String,
      validator: function validator(value) {
        return ['dialog', 'alertdialog'].indexOf(value) >= 0;
      }
    },
    ariaModal: Boolean
  },
  data: function data() {
    var prompt = this.hasInput ? this.inputAttrs.value || '' : '';
    return {
      prompt: prompt,
      isActive: false,
      validationMessage: ''
    };
  },
  computed: {
    dialogClass: function dialogClass() {
      return [this.size, {
        'has-custom-container': this.container !== null
      }];
    },

    /**
    * Icon name (MDI) based on the type.
    */
    iconByType: function iconByType() {
      switch (this.type) {
        case 'is-info':
          return 'information';

        case 'is-success':
          return 'check-circle';

        case 'is-warning':
          return 'alert';

        case 'is-danger':
          return 'alert-circle';

        default:
          return null;
      }
    },
    showCancel: function showCancel() {
      return this.cancelOptions.indexOf('button') >= 0;
    }
  },
  methods: {
    /**
    * If it's a prompt Dialog, validate the input.
    * Call the onConfirm prop (function) and close the Dialog.
    */
    confirm: function confirm() {
      var _this = this;

      if (this.$refs.input !== undefined) {
        if (!this.$refs.input.checkValidity()) {
          this.validationMessage = this.$refs.input.validationMessage;
          this.$nextTick(function () {
            return _this.$refs.input.select();
          });
          return;
        }
      }

      this.$emit('confirm', this.prompt);
      this.onConfirm(this.prompt, this);
      if (this.closeOnConfirm) this.close();
    },

    /**
    * Close the Dialog.
    */
    close: function close() {
      var _this2 = this;

      this.isActive = false; // Timeout for the animation complete before destroying

      setTimeout(function () {
        _this2.$destroy();

        removeElement(_this2.$el);
      }, 150);
    }
  },
  beforeMount: function beforeMount() {
    var _this3 = this;

    // Insert the Dialog component in the element container
    if (typeof window !== 'undefined') {
      this.$nextTick(function () {
        var container = document.querySelector(_this3.container) || document.body;
        container.appendChild(_this3.$el);
      });
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.isActive = true;

    if (typeof this.inputAttrs.required === 'undefined') {
      this.$set(this.inputAttrs, 'required', true);
    }

    this.$nextTick(function () {
      // Handle which element receives focus
      if (_this4.hasInput) {
        _this4.$refs.input.focus();
      } else if (_this4.focusOn === 'cancel' && _this4.showCancel) {
        _this4.$refs.cancelButton.focus();
      } else {
        _this4.$refs.confirmButton.focus();
      }
    });
  }
};

const _hoisted_1 = { class: "modal-card animation-content" };
const _hoisted_2 = {
  key: 0,
  class: "modal-card-head"
};
const _hoisted_3 = { class: "modal-card-title" };
const _hoisted_4 = { class: "media" };
const _hoisted_5 = {
  key: 0,
  class: "media-left"
};
const _hoisted_6 = { class: "media-content" };
const _hoisted_7 = {
  key: 0,
  class: "field"
};
const _hoisted_8 = { class: "control" };
const _hoisted_9 = { class: "help is-danger" };
const _hoisted_10 = { class: "modal-card-foot" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  const _directive_trap_focus = resolveDirective("trap-focus");

  return (openBlock(), createBlock(Transition, { name: _ctx.animation }, {
    default: withCtx(() => [
      ($data.isActive)
        ? withDirectives((openBlock(), createBlock("div", {
            key: 0,
            class: ["dialog modal is-active", $options.dialogClass],
            role: $props.ariaRole,
            "aria-modal": $props.ariaModal
          }, [
            createVNode("div", {
              class: "modal-background",
              onClick: _cache[1] || (_cache[1] = $event => (_ctx.cancel('outside')))
            }),
            createVNode("div", _hoisted_1, [
              ($props.title)
                ? (openBlock(), createBlock("header", _hoisted_2, [
                    createVNode("p", _hoisted_3, toDisplayString($props.title), 1 /* TEXT */)
                  ]))
                : createCommentVNode("v-if", true),
              createVNode("section", {
                class: ["modal-card-body", { 'is-titleless': !$props.title, 'is-flex': $props.hasIcon }]
              }, [
                createVNode("div", _hoisted_4, [
                  ($props.hasIcon && ($props.icon || $options.iconByType))
                    ? (openBlock(), createBlock("div", _hoisted_5, [
                        createVNode(_component_b_icon, {
                          icon: $props.icon ? $props.icon : $options.iconByType,
                          pack: $props.iconPack,
                          type: $props.type,
                          both: !$props.icon,
                          size: "is-large"
                        }, null, 8 /* PROPS */, ["icon", "pack", "type", "both"])
                      ]))
                    : createCommentVNode("v-if", true),
                  createVNode("div", _hoisted_6, [
                    createVNode("p", null, [
                      (_ctx.$slots.default)
                        ? renderSlot(_ctx.$slots, "default", { key: 0 })
                        : (openBlock(), createBlock("div", {
                            key: 1,
                            innerHTML: $props.message
                          }, null, 8 /* PROPS */, ["innerHTML"]))
                    ]),
                    ($props.hasInput)
                      ? (openBlock(), createBlock("div", _hoisted_7, [
                          createVNode("div", _hoisted_8, [
                            withDirectives(createVNode("input", mergeProps({
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($data.prompt = $event)),
                              class: ["input", { 'is-danger': $data.validationMessage }],
                              ref: "input"
                            }, $props.inputAttrs, {
                              onKeyup: _cache[3] || (_cache[3] = withKeys((...args) => ($options.confirm && $options.confirm(...args)), ["enter"]))
                            }), null, 16 /* FULL_PROPS */), [
                              [vModelDynamic, $data.prompt]
                            ])
                          ]),
                          createVNode("p", _hoisted_9, toDisplayString($data.validationMessage), 1 /* TEXT */)
                        ]))
                      : createCommentVNode("v-if", true)
                  ])
                ])
              ], 2 /* CLASS */),
              createVNode("footer", _hoisted_10, [
                ($options.showCancel)
                  ? (openBlock(), createBlock("button", {
                      key: 0,
                      class: "button",
                      ref: "cancelButton",
                      onClick: _cache[4] || (_cache[4] = $event => (_ctx.cancel('button')))
                    }, toDisplayString($props.cancelText), 513 /* TEXT, NEED_PATCH */))
                  : createCommentVNode("v-if", true),
                createVNode("button", {
                  class: ["button", $props.type],
                  ref: "confirmButton",
                  onClick: _cache[5] || (_cache[5] = (...args) => ($options.confirm && $options.confirm(...args)))
                }, toDisplayString($props.confirmText), 3 /* TEXT, CLASS */)
              ])
            ])
          ], 10 /* CLASS, PROPS */, ["role", "aria-modal"])), [
            [_directive_trap_focus, $props.trapFocus]
          ])
        : createCommentVNode("v-if", true)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["name"]))
}

script.render = render;
script.__file = "src/components/dialog/Dialog.vue";

var localVueInstance;

function open(propsData) {
  var slot;

  if (Array.isArray(propsData.message)) {
    slot = propsData.message;
    delete propsData.message;
  }

  var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance;
  var DialogComponent = vm.extend(script);
  var component = new DialogComponent({
    el: document.createElement('div'),
    propsData: propsData
  });

  if (slot) {
    component.$slots.default = slot;
    component.$forceUpdate();
  }

  if (!config.defaultProgrammaticPromise) {
    return component;
  } else {
    return new Promise(function (resolve) {
      component.$on('confirm', function (event) {
        return resolve({
          result: event || true,
          dialog: component
        });
      });
      component.$on('cancel', function () {
        return resolve({
          result: false,
          dialog: component
        });
      });
    });
  }
}

var DialogProgrammatic = {
  alert: function alert(params) {
    if (typeof params === 'string') {
      params = {
        message: params
      };
    }

    var defaultParam = {
      canCancel: false
    };
    var propsData = merge(defaultParam, params);
    return open(propsData);
  },
  confirm: function confirm(params) {
    var defaultParam = {};
    var propsData = merge(defaultParam, params);
    return open(propsData);
  },
  prompt: function prompt(params) {
    var defaultParam = {
      hasInput: true,
      confirmText: 'Done'
    };
    var propsData = merge(defaultParam, params);
    return open(propsData);
  }
};
var Plugin = {
  install: function install(Vue) {
    localVueInstance = Vue;
    registerComponent(Vue, script);
    registerComponentProgrammatic(Vue, 'dialog', DialogProgrammatic);
  }
};
use(Plugin);

export default Plugin;
export { script as BDialog, DialogProgrammatic };
