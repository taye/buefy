'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var config = require('./config-1bc87110.js');
var NoticeMixin = require('./NoticeMixin-c28b24dd.js');
var vue = require('vue');
var helpers = require('./helpers.js');
var plugins = require('./plugins-c99a13c9.js');
require('./_rollupPluginBabelHelpers-a6b1b170.js');

var script = {
  name: 'BSnackbar',
  mixins: [NoticeMixin.NoticeMixin],
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
      newDuration: this.duration || config.config.defaultSnackbarDuration
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
  return (vue.openBlock(), vue.createBlock(vue.Transition, {
    "enter-active-class": _ctx.transition.enter,
    "leave-active-class": _ctx.transition.leave
  }, {
    default: vue.withCtx(() => [
      vue.withDirectives(vue.createVNode("div", {
        class: ["snackbar", [_ctx.type,_ctx.position]],
        role: $props.actionText ? 'alertdialog' : 'alert'
      }, [
        (_ctx.$slots.default)
          ? vue.renderSlot(_ctx.$slots, "default", { key: 0 })
          : (vue.openBlock(), vue.createBlock("div", {
              key: 1,
              class: "text",
              innerHTML: _ctx.message
            }, null, 8 /* PROPS */, ["innerHTML"])),
        ($props.cancelText)
          ? (vue.openBlock(), vue.createBlock("div", {
              key: 2,
              class: "action is-light is-cancel",
              onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.close && _ctx.close(...args)))
            }, [
              vue.createVNode("button", _hoisted_1, vue.toDisplayString($props.cancelText), 1 /* TEXT */)
            ]))
          : vue.createCommentVNode("v-if", true),
        ($props.actionText)
          ? (vue.openBlock(), vue.createBlock("div", {
              key: 3,
              class: ["action", _ctx.type],
              onClick: _cache[2] || (_cache[2] = (...args) => ($options.action && $options.action(...args)))
            }, [
              vue.createVNode("button", _hoisted_2, vue.toDisplayString($props.actionText), 1 /* TEXT */)
            ], 2 /* CLASS */))
          : vue.createCommentVNode("v-if", true)
      ], 10 /* CLASS, PROPS */, ["role"]), [
        [vue.vShow, _ctx.isActive]
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
      position: config.config.defaultSnackbarPosition || 'is-bottom-right'
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
    plugins.registerComponentProgrammatic(Vue, 'snackbar', SnackbarProgrammatic);
  }
};
plugins.use(Plugin);

exports.BSnackbar = script;
exports.SnackbarProgrammatic = SnackbarProgrammatic;
exports.default = Plugin;
