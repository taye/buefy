'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var config = require('./config-1bc87110.js');
var NoticeMixin = require('./NoticeMixin-c28b24dd.js');
var vue = require('vue');
var helpers = require('./helpers.js');
var plugins = require('./plugins-c99a13c9.js');
require('./_rollupPluginBabelHelpers-a6b1b170.js');

var script = {
  name: 'BToast',
  mixins: [NoticeMixin.NoticeMixin],
  data: function data() {
    return {
      newDuration: this.duration || config.config.defaultToastDuration
    };
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock(vue.Transition, {
    "enter-active-class": _ctx.transition.enter,
    "leave-active-class": _ctx.transition.leave
  }, {
    default: vue.withCtx(() => [
      vue.withDirectives(vue.createVNode("div", {
        class: ["toast", [_ctx.type, _ctx.position]],
        "aria-hidden": !_ctx.isActive,
        role: "alert"
      }, [
        (_ctx.$slots.default)
          ? vue.renderSlot(_ctx.$slots, "default", { key: 0 })
          : (vue.openBlock(), vue.createBlock("div", {
              key: 1,
              innerHTML: _ctx.message
            }, null, 8 /* PROPS */, ["innerHTML"]))
      ], 10 /* CLASS, PROPS */, ["aria-hidden"]), [
        [vue.vShow, _ctx.isActive]
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
      position: config.config.defaultToastPosition || 'is-top'
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

    var propsData = helpers.merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || config.VueInstance;
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
    plugins.registerComponentProgrammatic(Vue, 'toast', ToastProgrammatic);
  }
};
plugins.use(Plugin);

exports.BToast = script;
exports.ToastProgrammatic = ToastProgrammatic;
exports.default = Plugin;
