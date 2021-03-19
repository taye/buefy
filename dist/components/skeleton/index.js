/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Skeleton = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

    var script = {
      name: 'BSkeleton',
      functional: true,
      props: {
        active: {
          type: Boolean,
          default: true
        },
        animated: {
          type: Boolean,
          default: true
        },
        width: [Number, String],
        height: [Number, String],
        circle: Boolean,
        rounded: {
          type: Boolean,
          default: true
        },
        count: {
          type: Number,
          default: 1
        },
        position: {
          type: String,
          default: '',
          validator: function validator(value) {
            return ['', 'is-centered', 'is-right'].indexOf(value) > -1;
          }
        },
        size: String
      },
      render: function render(context) {
        if (!context.props.active) return;
        var items = [];
        var width = context.props.width;
        var height = context.props.height;

        for (var i = 0; i < context.props.count; i++) {
          items.push(vue.h('div', {
            staticClass: 'b-skeleton-item',
            class: {
              'is-rounded': context.props.rounded
            },
            key: i,
            style: {
              height: height === undefined ? null : isNaN(height) ? height : height + 'px',
              width: width === undefined ? null : isNaN(width) ? width : width + 'px',
              borderRadius: context.props.circle ? '50%' : null
            }
          }));
        }

        return vue.h('div', {
          staticClass: 'b-skeleton',
          class: [context.props.size, context.props.position, {
            'is-animated': context.props.animated
          }]
        }, items);
      }
    };

    const render = () => {};


    script.render = render;
    script.__file = "src/components/skeleton/Skeleton.vue";

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
        registerComponent(Vue, script);
      }
    };
    use(Plugin);

    exports.BSkeleton = script;
    exports.default = Plugin;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
