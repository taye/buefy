import { c as config, V as VueInstance } from './config-63b70aae.js';
import { N as NoticeMixin } from './NoticeMixin-a83d413b.js';
import { openBlock, createBlock, Transition, withCtx, withDirectives, createVNode, renderSlot, vShow } from 'vue';
import { merge } from './helpers.js';
import { r as registerComponentProgrammatic, u as use } from './plugins-a0a180cf.js';
import './_rollupPluginBabelHelpers-0979e6ce.js';

var script = {
  name: 'BToast',
  mixins: [NoticeMixin],
  data: function data() {
    return {
      newDuration: this.duration || config.defaultToastDuration
    };
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Transition, {
    "enter-active-class": _ctx.transition.enter,
    "leave-active-class": _ctx.transition.leave
  }, {
    default: withCtx(() => [
      withDirectives(createVNode("div", {
        class: ["toast", [_ctx.type, _ctx.position]],
        "aria-hidden": !_ctx.isActive,
        role: "alert"
      }, [
        (_ctx.$slots.default)
          ? renderSlot(_ctx.$slots, "default", { key: 0 })
          : (openBlock(), createBlock("div", {
              key: 1,
              innerHTML: _ctx.message
            }, null, 8 /* PROPS */, ["innerHTML"]))
      ], 10 /* CLASS, PROPS */, ["aria-hidden"]), [
        [vShow, _ctx.isActive]
      ])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["enter-active-class", "leave-active-class"]))
}

script.render = render;
script.__file = "src/components/toast/Toast.vue";

var localVueInstance;
var ToastProgrammatic = {
  open: function open(params) {
    var parent;

    if (typeof params === 'string') {
      params = {
        message: params
      };
    }

    var defaultParam = {
      position: config.defaultToastPosition || 'is-top'
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
    var ToastComponent = vm.extend(script);
    var component = new ToastComponent({
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
    registerComponentProgrammatic(Vue, 'toast', ToastProgrammatic);
  }
};
use(Plugin);

export default Plugin;
export { script as BToast, ToastProgrammatic };
