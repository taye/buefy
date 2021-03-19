/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Tag = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

    var script$1 = {
      name: 'BTag',
      props: {
        attached: Boolean,
        closable: Boolean,
        type: String,
        size: String,
        rounded: Boolean,
        disabled: Boolean,
        ellipsis: Boolean,
        tabstop: {
          type: Boolean,
          default: true
        },
        ariaCloseLabel: String,
        closeType: String,
        closeIcon: String,
        closeIconPack: String,
        closeIconType: String
      },
      methods: {
        /**
        * Emit close event when delete button is clicked
        * or delete key is pressed.
        */
        close: function close(event) {
          if (this.disabled) return;
          this.$emit('close', event);
        }
      }
    };

    const _hoisted_1 = {
      key: 0,
      class: "tags has-addons"
    };
    const _hoisted_2 = /*#__PURE__*/vue.createVNode("a", null, null, -1 /* HOISTED */);

    function render$1(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_b_icon = vue.resolveComponent("b-icon");

      return ($props.attached && $props.closable)
        ? (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
            vue.createVNode("span", {
              class: ["tag", [$props.type, $props.size, { 'is-rounded': $props.rounded }]]
            }, [
              vue.createVNode("span", {
                class: { 'has-ellipsis': $props.ellipsis }
              }, [
                vue.renderSlot(_ctx.$slots, "default")
              ], 2 /* CLASS */)
            ], 2 /* CLASS */),
            vue.createVNode("a", {
              class: ["tag", [$props.size,
                         $props.closeType,
                         {'is-rounded': $props.rounded},
                         $props.closeIcon ? 'has-delete-icon' : 'is-delete']],
              role: "button",
              "aria-label": $props.ariaCloseLabel,
              tabindex: $props.tabstop ? 0 : false,
              disabled: $props.disabled ? '' : null,
              onClick: _cache[1] || (_cache[1] = (...args) => ($options.close && $options.close(...args))),
              onKeyup: _cache[2] || (_cache[2] = vue.withKeys(vue.withModifiers((...args) => ($options.close && $options.close(...args)), ["prevent"]), ["delete"]))
            }, [
              ($props.closeIcon)
                ? (vue.openBlock(), vue.createBlock(_component_b_icon, {
                    key: 0,
                    "custom-class": "",
                    icon: $props.closeIcon,
                    size: $props.size,
                    type: $props.closeIconType,
                    pack: $props.closeIconPack
                  }, null, 8 /* PROPS */, ["icon", "size", "type", "pack"]))
                : vue.createCommentVNode("v-if", true),
              _hoisted_2
            ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["aria-label", "tabindex", "disabled"])
          ]))
        : (vue.openBlock(), vue.createBlock("span", {
            key: 1,
            class: ["tag", [$props.type, $props.size, { 'is-rounded': $props.rounded }]]
          }, [
            vue.createVNode("span", {
              class: { 'has-ellipsis': $props.ellipsis }
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 2 /* CLASS */),
            ($props.closable)
              ? (vue.openBlock(), vue.createBlock("a", {
                  key: 0,
                  role: "button",
                  "aria-label": $props.ariaCloseLabel,
                  class: ["delete is-small", $props.closeType],
                  disabled: $props.disabled ? '' : null,
                  tabindex: $props.tabstop ? 0 : false,
                  onClick: _cache[3] || (_cache[3] = (...args) => ($options.close && $options.close(...args))),
                  onKeyup: _cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers((...args) => ($options.close && $options.close(...args)), ["prevent"]), ["delete"]))
                }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["aria-label", "disabled", "tabindex"]))
              : vue.createCommentVNode("v-if", true)
          ], 2 /* CLASS */))
    }

    script$1.render = render$1;
    script$1.__file = "src/components/tag/Tag.vue";

    var script = {
      name: 'BTaglist',
      props: {
        attached: Boolean
      }
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createBlock("div", {
        class: ["tags", { 'has-addons': $props.attached }]
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2 /* CLASS */))
    }

    script.render = render;
    script.__file = "src/components/tag/Taglist.vue";

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _iterableToArrayLimit(arr, i) {
      if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return;
      }

      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    var use = function use(plugin) {
      if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(plugin);
      }
    };
    var registerComponent = function registerComponent(VueApp, component) {
      if (!VueApp.prototype) {
        patchHooks(component);
      }

      VueApp.component(component.name, component);
    };

    function patchHooks(component) {
      var deprecatedHooks = [['beforeDestroy', 'beforeUnmount'], ['destroyed', 'umounted']];
      deprecatedHooks.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            v2Name = _ref2[0],
            v3Name = _ref2[1];

        var v2Value = component[v2Name];
        if (!v2Value) return;
        component[v3Name] = v2Value;
        component[v2Name] = undefined;
      });

      if (component.mixins) {
        component.mixins.forEach(function (mixin) {
          return patchHooks(mixin);
        });
      }
    }

    var Plugin = {
      install: function install(Vue) {
        registerComponent(Vue, script$1);
        registerComponent(Vue, script);
      }
    };
    use(Plugin);

    exports.BTag = script$1;
    exports.BTaglist = script;
    exports.default = Plugin;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
