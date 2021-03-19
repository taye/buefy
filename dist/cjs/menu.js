'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a6b1b170.js');
var Icon = require('./Icon-59750035.js');
var config = require('./config-1bc87110.js');
var plugins = require('./plugins-c99a13c9.js');
require('./helpers.js');

var script$2 = {
  name: 'BMenu',
  props: {
    accordion: {
      type: Boolean,
      default: true
    },
    activable: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      _isMenu: true // Used by MenuItem

    };
  }
};

const _hoisted_1$1 = { class: "menu" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script$2.render = render$2;
script$2.__file = "src/components/menu/Menu.vue";

var script$1 = {
  name: 'BMenuList',
  functional: true,
  props: {
    label: String,
    icon: String,
    iconPack: String,
    ariaRole: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'is-small'
    }
  },
  render: function render(context) {
    var vlabel = null;
    var slots = context.slots();

    if (context.props.label || slots.label) {
      vlabel = vue.h('p', {
        attrs: {
          'class': 'menu-label'
        }
      }, context.props.label ? context.props.icon ? [vue.h('b-icon', {
        props: {
          'icon': context.props.icon,
          'pack': context.props.iconPack,
          'size': context.props.size
        }
      }), vue.h('span', {}, context.props.label)] : context.props.label : slots.label);
    }

    var vnode = vue.h('ul', {
      attrs: {
        'class': 'menu-list',
        'role': context.props.ariaRole === 'menu' ? context.props.ariaRole : null
      }
    }, slots.default);
    return vlabel ? [vlabel, vnode] : vnode;
  }
};

const render$1 = () => {};


script$1.render = render$1;
script$1.__file = "src/components/menu/MenuList.vue";

var script = {
  name: 'BMenuItem',
  components: _rollupPluginBabelHelpers._defineProperty({}, Icon.script.name, Icon.script),
  inheritAttrs: false,
  // deprecated, to replace with default 'value' in the next breaking change
  model: {
    prop: 'active',
    event: 'update:active'
  },
  props: {
    label: String,
    active: Boolean,
    expanded: Boolean,
    disabled: Boolean,
    iconPack: String,
    icon: String,
    animation: {
      type: String,
      default: 'slide'
    },
    tag: {
      type: String,
      default: 'a',
      validator: function validator(value) {
        return config.config.defaultLinkTags.indexOf(value) >= 0;
      }
    },
    ariaRole: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'is-small'
    }
  },
  data: function data() {
    return {
      newActive: this.active,
      newExpanded: this.expanded
    };
  },
  computed: {
    ariaRoleMenu: function ariaRoleMenu() {
      return this.ariaRole === 'menuitem' ? this.ariaRole : null;
    }
  },
  watch: {
    active: function active(value) {
      this.newActive = value;
    },
    expanded: function expanded(value) {
      this.newExpanded = value;
    }
  },
  methods: {
    onClick: function onClick(event) {
      if (this.disabled) return;
      var menu = this.getMenu();
      this.reset(this.$parent, menu);
      this.newExpanded = !this.newExpanded;
      this.$emit('update:expanded', this.newExpanded);

      if (menu && menu.activable) {
        this.newActive = true;
        this.$emit('update:active', this.newActive);
      }
    },
    reset: function reset(parent, menu) {
      var _this = this;

      var items = parent.$children.filter(function (c) {
        return c.name === _this.name;
      });
      items.forEach(function (item) {
        if (item !== _this) {
          _this.reset(item, menu);

          if (!parent.$data._isMenu || parent.$data._isMenu && parent.accordion) {
            item.newExpanded = false;
            item.$emit('update:expanded', item.newActive);
          }

          if (menu && menu.activable) {
            item.newActive = false;
            item.$emit('update:active', item.newActive);
          }
        }
      });
    },
    getMenu: function getMenu() {
      var parent = this.$parent;

      while (parent && !parent.$data._isMenu) {
        parent = parent.$parent;
      }

      return parent;
    }
  }
};

const _hoisted_1 = { key: 1 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = vue.resolveComponent("b-icon");

  return (vue.openBlock(), vue.createBlock("li", { role: $options.ariaRoleMenu }, [
    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.tag), vue.mergeProps(_ctx.$attrs, {
      class: {
                'is-active': $data.newActive,
                'is-expanded': $data.newExpanded,
                'is-disabled': $props.disabled,
                'icon-text': $props.icon,
            },
      onClick: _cache[1] || (_cache[1] = $event => ($options.onClick($event)))
    }, vue.toHandlers(_ctx.$listeners)), {
      default: vue.withCtx(() => [
        ($props.icon)
          ? (vue.openBlock(), vue.createBlock(_component_b_icon, {
              key: 0,
              icon: $props.icon,
              pack: $props.iconPack,
              size: $props.size
            }, null, 8 /* PROPS */, ["icon", "pack", "size"]))
          : vue.createCommentVNode("v-if", true),
        ($props.label)
          ? (vue.openBlock(), vue.createBlock("span", _hoisted_1, vue.toDisplayString($props.label), 1 /* TEXT */))
          : vue.renderSlot(_ctx.$slots, "label", {
              key: 2,
              expanded: $data.newExpanded,
              active: $data.newActive
            })
      ]),
      _: 1 /* STABLE */
    }, 16 /* FULL_PROPS */, ["class"])),
    vue.createCommentVNode(" sub menu items "),
    (_ctx.$slots.default)
      ? (vue.openBlock(), vue.createBlock(vue.Transition, {
          key: 0,
          name: $props.animation
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createVNode("ul", null, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 512 /* NEED_PATCH */), [
              [vue.vShow, $data.newExpanded]
            ])
          ]),
          _: 3 /* FORWARDED */
        }, 8 /* PROPS */, ["name"]))
      : vue.createCommentVNode("v-if", true)
  ], 8 /* PROPS */, ["role"]))
}

script.render = render;
script.__file = "src/components/menu/MenuItem.vue";

var Plugin = {
  install: function install(Vue) {
    plugins.registerComponent(Vue, script$2);
    plugins.registerComponent(Vue, script$1);
    plugins.registerComponent(Vue, script);
  }
};
plugins.use(Plugin);

exports.BMenu = script$2;
exports.BMenuItem = script;
exports.BMenuList = script$1;
exports.default = Plugin;
