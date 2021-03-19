import { c as config, V as VueInstance } from './config-63b70aae.js';
import { N as NoticeMixin } from './NoticeMixin-a83d413b.js';
import { openBlock, createBlock, Transition, withCtx, withDirectives, createVNode, renderSlot, toDisplayString, createCommentVNode, vShow } from 'vue';
import { merge } from './helpers.js';
import { r as registerComponentProgrammatic, u as use } from './plugins-a0a180cf.js';
import './_rollupPluginBabelHelpers-0979e6ce.js';

var script = {
  name: 'BSnackbar',
  mixins: [NoticeMixin],
  props: {
    actionText: {
      type: String,
      default: 'OK'
    },
    onAction: {
      type: Function,
      default: function _default() {}
    },
    cancelText: {
      type: String | null,
      default: null
    }
  },
  data: function data() {
    return {
      newDuration: this.duration || config.defaultSnackbarDuration
    };
  },
  methods: {
    /**
    * Click listener.
    * Call action prop before closing (from Mixin).
    */
    action: function action() {
      this.onAction();
      this.close();
    }
  }
};

const _hoisted_1 = { class: "button" };
const _hoisted_2 = { class: "button" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Transition, {
    "enter-active-class": _ctx.transition.enter,
    "leave-active-class": _ctx.transition.leave
  }, {
    default: withCtx(() => [
      withDirectives(createVNode("div", {
        class: ["snackbar", [_ctx.type,_ctx.position]],
        role: $props.actionText ? 'alertdialog' : 'alert'
      }, [
        (_ctx.$slots.default)
          ? renderSlot(_ctx.$slots, "default", { key: 0 })
          : (openBlock(), createBlock("div", {
              key: 1,
              class: "text",
              innerHTML: _ctx.message
            }, null, 8 /* PROPS */, ["innerHTML"])),
        ($props.cancelText)
          ? (openBlock(), createBlock("div", {
              key: 2,
              class: "action is-light is-cancel",
              onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.close && _ctx.close(...args)))
            }, [
              createVNode("button", _hoisted_1, toDisplayString($props.cancelText), 1 /* TEXT */)
            ]))
          : createCommentVNode("v-if", true),
        ($props.actionText)
          ? (openBlock(), createBlock("div", {
              key: 3,
              class: ["action", _ctx.type],
              onClick: _cache[2] || (_cache[2] = (...args) => ($options.action && $options.action(...args)))
            }, [
              createVNode("button", _hoisted_2, toDisplayString($props.actionText), 1 /* TEXT */)
            ], 2 /* CLASS */))
          : createCommentVNode("v-if", true)
      ], 10 /* CLASS, PROPS */, ["role"]), [
        [vShow, _ctx.isActive]
      ])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["enter-active-class", "leave-active-class"]))
}

script.render = render;
script.__file = "src/components/snackbar/Snackbar.vue";

var localVueInstance;
var SnackbarProgrammatic = {
  open: function open(params) {
    var parent;

    if (typeof params === 'string') {
      params = {
        message: params
      };
    }

    var defaultParam = {
      type: 'is-success',
      position: config.defaultSnackbarPosition || 'is-bottom-right'
    };

    if (params.parent) {
      parent = params.parent;
      delete params.parent;
    }

    var slot;

    if (Array.isArray(params.message)) {
      slot = params.message;
      delete params.message;
    }

    var propsData = merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance;
    var SnackbarComponent = vm.extend(script);
    var component = new SnackbarComponent({
      parent: parent,
      el: document.createElement('div'),
      propsData: propsData
    });

    if (slot) {
      component.$slots.default = slot;
      component.$forceUpdate();
    }

    return component;
  }
};
var Plugin = {
  install: function install(Vue) {
    localVueInstance = Vue;
    registerComponentProgrammatic(Vue, 'snackbar', SnackbarProgrammatic);
  }
};
use(Plugin);

export default Plugin;
export { script as BSnackbar, SnackbarProgrammatic };
