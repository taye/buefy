import { M as MessageMixin } from './MessageMixin-0e6eb7c0.js';
import { resolveComponent, openBlock, createBlock, Transition, withCtx, withDirectives, createVNode, createCommentVNode, renderSlot, vShow, mergeProps } from 'vue';
import { c as config, V as VueInstance } from './config-63b70aae.js';
import { N as NoticeMixin } from './NoticeMixin-a83d413b.js';
import { merge } from './helpers.js';
import { a as registerComponent, r as registerComponentProgrammatic, u as use } from './plugins-a0a180cf.js';
import './_rollupPluginBabelHelpers-0979e6ce.js';
import './Icon-9c398a60.js';

var script$1 = {
  name: 'BNotification',
  mixins: [MessageMixin],
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
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock(Transition, { name: $props.animation }, {
    default: withCtx(() => [
      withDirectives(createVNode("article", {
        class: ["notification", [_ctx.type, $props.position]]
      }, [
        (_ctx.closable)
          ? (openBlock(), createBlock("button", {
              key: 0,
              class: "delete",
              type: "button",
              onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.close && _ctx.close(...args))),
              "aria-label": $props.ariaCloseLabel
            }, null, 8 /* PROPS */, ["aria-label"]))
          : createCommentVNode("v-if", true),
        (_ctx.$slots.default || _ctx.message)
          ? (openBlock(), createBlock("div", _hoisted_1, [
              (_ctx.computedIcon && _ctx.hasIcon)
                ? (openBlock(), createBlock("div", _hoisted_2, [
                    createVNode(_component_b_icon, {
                      icon: _ctx.computedIcon,
                      pack: _ctx.iconPack,
                      both: "",
                      size: "is-large",
                      "aria-hidden": ""
                    }, null, 8 /* PROPS */, ["icon", "pack"])
                  ]))
                : createCommentVNode("v-if", true),
              createVNode("div", _hoisted_3, [
                (_ctx.$slots.default)
                  ? renderSlot(_ctx.$slots, "default", { key: 0 })
                  : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "text",
                      innerHTML: _ctx.message
                    }, null, 8 /* PROPS */, ["innerHTML"]))
              ])
            ]))
          : createCommentVNode("v-if", true)
      ], 2 /* CLASS */), [
        [vShow, _ctx.isActive]
      ])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["name"]))
}

script$1.render = render$1;
script$1.__file = "src/components/notification/Notification.vue";

var script = {
  name: 'BNotificationNotice',
  mixins: [NoticeMixin],
  data: function data() {
    return {
      newDuration: this.duration || config.defaultNotificationDuration
    };
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_notification = resolveComponent("b-notification");

  return (openBlock(), createBlock(_component_b_notification, mergeProps(_ctx.$options.propsData, { onClose: _ctx.close }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
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
      position: config.defaultNotificationPosition || 'is-top-right'
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
    var propsData = merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance;
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
    registerComponent(Vue, script$1);
    registerComponentProgrammatic(Vue, 'notification', NotificationProgrammatic);
  }
};
use(Plugin);

export default Plugin;
export { script$1 as BNotification, NotificationProgrammatic };
