'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MessageMixin = require('./MessageMixin-a36fe065.js');
var vue = require('vue');
var config = require('./config-1bc87110.js');
var NoticeMixin = require('./NoticeMixin-c28b24dd.js');
var helpers = require('./helpers.js');
var plugins = require('./plugins-c99a13c9.js');
require('./_rollupPluginBabelHelpers-a6b1b170.js');
require('./Icon-59750035.js');

var script$1 = {
  name: 'BNotification',
  mixins: [MessageMixin.MessageMixin],
  props: {
    position: String,
    ariaCloseLabel: String,
    animation: {
      type: String,
      default: 'fade'
    }
  }
};

const _hoisted_1 = {
  key: 1,
  class: "media"
};
const _hoisted_2 = {
  key: 0,
  class: "media-left"
};
const _hoisted_3 = { class: "media-content" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = vue.resolveComponent("b-icon");

  return (vue.openBlock(), vue.createBlock(vue.Transition, { name: $props.animation }, {
    default: vue.withCtx(() => [
      vue.withDirectives(vue.createVNode("article", {
        class: ["notification", [_ctx.type, $props.position]]
      }, [
        (_ctx.closable)
          ? (vue.openBlock(), vue.createBlock("button", {
              key: 0,
              class: "delete",
              type: "button",
              onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.close && _ctx.close(...args))),
              "aria-label": $props.ariaCloseLabel
            }, null, 8 /* PROPS */, ["aria-label"]))
          : vue.createCommentVNode("v-if", true),
        (_ctx.$slots.default || _ctx.message)
          ? (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
              (_ctx.computedIcon && _ctx.hasIcon)
                ? (vue.openBlock(), vue.createBlock("div", _hoisted_2, [
                    vue.createVNode(_component_b_icon, {
                      icon: _ctx.computedIcon,
                      pack: _ctx.iconPack,
                      both: "",
                      size: "is-large",
                      "aria-hidden": ""
                    }, null, 8 /* PROPS */, ["icon", "pack"])
                  ]))
                : vue.createCommentVNode("v-if", true),
              vue.createVNode("div", _hoisted_3, [
                (_ctx.$slots.default)
                  ? vue.renderSlot(_ctx.$slots, "default", { key: 0 })
                  : (vue.openBlock(), vue.createBlock("p", {
                      key: 1,
                      class: "text",
                      innerHTML: _ctx.message
                    }, null, 8 /* PROPS */, ["innerHTML"]))
              ])
            ]))
          : vue.createCommentVNode("v-if", true)
      ], 2 /* CLASS */), [
        [vue.vShow, _ctx.isActive]
      ])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["name"]))
}

script$1.render = render$1;
script$1.__file = "src/components/notification/Notification.vue";

var script = {
  name: 'BNotificationNotice',
  mixins: [NoticeMixin.NoticeMixin],
  data: function data() {
    return {
      newDuration: this.duration || config.config.defaultNotificationDuration
    };
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_notification = vue.resolveComponent("b-notification");

  return (vue.openBlock(), vue.createBlock(_component_b_notification, vue.mergeProps(_ctx.$options.propsData, { onClose: _ctx.close }), {
    default: vue.withCtx(() => [
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 16 /* FULL_PROPS */, ["onClose"]))
}

script.render = render;
script.__file = "src/components/notification/NotificationNotice.vue";

var localVueInstance;
var NotificationProgrammatic = {
  open: function open(params) {
    var parent;

    if (typeof params === 'string') {
      params = {
        message: params
      };
    }

    var defaultParam = {
      position: config.config.defaultNotificationPosition || 'is-top-right'
    };

    if (params.parent) {
      parent = params.parent;
      delete params.parent;
    }

    var slot;

    if (Array.isArray(params.message)) {
      slot = params.message;
      delete params.message;
    } // fix animation


    params.active = false;
    var propsData = helpers.merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || config.VueInstance;
    var NotificationNoticeComponent = vm.extend(script);
    var component = new NotificationNoticeComponent({
      parent: parent,
      el: document.createElement('div'),
      propsData: propsData
    });

    if (slot) {
      component.$slots.default = slot;
      component.$forceUpdate();
    } // fix animation


    component.$children[0].isActive = true;
    return component;
  }
};
var Plugin = {
  install: function install(Vue) {
    localVueInstance = Vue;
    plugins.registerComponent(Vue, script$1);
    plugins.registerComponentProgrammatic(Vue, 'notification', NotificationProgrammatic);
  }
};
plugins.use(Plugin);

exports.BNotification = script$1;
exports.NotificationProgrammatic = NotificationProgrammatic;
exports.default = Plugin;
