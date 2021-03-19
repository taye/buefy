/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Loading = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

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

  /**
   * Merge function to replace Object.assign with deep merging possibility
   */

  var isObject = function isObject(item) {
    return _typeof(item) === 'object' && !Array.isArray(item);
  };

  var mergeFn = function mergeFn(target, source) {
    var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (deep || !Object.assign) {
      var isDeep = function isDeep(prop) {
        return isObject(source[prop]) && target !== null && target.hasOwnProperty(prop) && isObject(target[prop]);
      };

      var replaced = Object.getOwnPropertyNames(source).map(function (prop) {
        return _defineProperty({}, prop, isDeep(prop) ? mergeFn(target[prop], source[prop], deep) : source[prop]);
      }).reduce(function (a, b) {
        return _objectSpread2({}, a, {}, b);
      }, {});
      return _objectSpread2({}, target, {}, replaced);
    } else {
      return Object.assign(target, source);
    }
  };

  var merge = mergeFn;
  function removeElement(el) {
    if (typeof el.remove !== 'undefined') {
      el.remove();
    } else if (typeof el.parentNode !== 'undefined' && el.parentNode !== null) {
      el.parentNode.removeChild(el);
    }
  }

  // Polyfills for SSR
  var isSSR = typeof window === 'undefined';
  var HTMLElement = isSSR ? Object : window.HTMLElement;

  var script = {
    name: 'BLoading',
    // deprecated, to replace with default 'value' in the next breaking change
    model: {
      prop: 'active',
      event: 'update:active'
    },
    props: {
      active: Boolean,
      programmatic: Boolean,
      container: [Object, Function, HTMLElement],
      isFullPage: {
        type: Boolean,
        default: true
      },
      animation: {
        type: String,
        default: 'fade'
      },
      canCancel: {
        type: Boolean,
        default: false
      },
      onCancel: {
        type: Function,
        default: function _default() {}
      }
    },
    data: function data() {
      return {
        isActive: this.active || false,
        displayInFullPage: this.isFullPage
      };
    },
    watch: {
      active: function active(value) {
        this.isActive = value;
      },
      isFullPage: function isFullPage(value) {
        this.displayInFullPage = value;
      }
    },
    methods: {
      /**
      * Close the Modal if canCancel.
      */
      cancel: function cancel() {
        if (!this.canCancel || !this.isActive) return;
        this.close();
      },

      /**
      * Emit events, and destroy modal if it's programmatic.
      */
      close: function close() {
        var _this = this;

        this.onCancel.apply(null, arguments);
        this.$emit('close');
        this.$emit('update:active', false); // Timeout for the animation complete before destroying

        if (this.programmatic) {
          this.isActive = false;
          setTimeout(function () {
            _this.$destroy();

            removeElement(_this.$el);
          }, 150);
        }
      },

      /**
      * Keypress event that is bound to the document.
      */
      keyPress: function keyPress(_ref) {
        var key = _ref.key;
        if (key === 'Escape' || key === 'Esc') this.cancel();
      }
    },
    created: function created() {
      if (typeof window !== 'undefined') {
        document.addEventListener('keyup', this.keyPress);
      }
    },
    beforeMount: function beforeMount() {
      // Insert the Loading component in body tag
      // only if it's programmatic
      if (this.programmatic) {
        if (!this.container) {
          document.body.appendChild(this.$el);
        } else {
          this.displayInFullPage = false;
          this.$emit('update:is-full-page', false);
          this.container.appendChild(this.$el);
        }
      }
    },
    mounted: function mounted() {
      if (this.programmatic) this.isActive = true;
    },
    beforeDestroy: function beforeDestroy() {
      if (typeof window !== 'undefined') {
        document.removeEventListener('keyup', this.keyPress);
      }
    }
  };

  const _hoisted_1 = /*#__PURE__*/vue.createVNode("div", { class: "loading-icon" }, null, -1 /* HOISTED */);

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock(vue.Transition, { name: $props.animation }, {
      default: vue.withCtx(() => [
        ($data.isActive)
          ? (vue.openBlock(), vue.createBlock("div", {
              key: 0,
              class: ["loading-overlay is-active", { 'is-full-page': $data.displayInFullPage }]
            }, [
              vue.createVNode("div", {
                class: "loading-background",
                onClick: _cache[1] || (_cache[1] = (...args) => ($options.cancel && $options.cancel(...args)))
              }),
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                _hoisted_1
              ])
            ], 2 /* CLASS */))
          : vue.createCommentVNode("v-if", true)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["name"]))
  }

  script.render = render;
  script.__file = "src/components/loading/Loading.vue";

  var VueInstance;

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
  var registerComponentProgrammatic = function registerComponentProgrammatic(VueApp, property, component) {
    if (VueApp.prototype) {
      // Vue 2
      if (!VueApp.prototype.$buefy) VueApp.prototype.$buefy = {};
      VueApp.prototype.$buefy[property] = component;
    } else {
      // Vue 3
      patchHooks(component);
      var provided = VueApp.config.globalProperties.$buefy;

      if (!provided) {
        provided = VueApp.config.globalProperties.$buefy = {};
        VueApp.provide('$buefy', provided);
      }

      provided[property] = component;
    }
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

  var localVueInstance;
  var LoadingProgrammatic = {
    open: function open(params) {
      var defaultParam = {
        programmatic: true
      };
      var propsData = merge(defaultParam, params);
      var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance;
      var LoadingComponent = vm.extend(script);
      return new LoadingComponent({
        el: document.createElement('div'),
        propsData: propsData
      });
    }
  };
  var Plugin = {
    install: function install(Vue) {
      localVueInstance = Vue;
      registerComponent(Vue, script);
      registerComponentProgrammatic(Vue, 'loading', LoadingProgrammatic);
    }
  };
  use(Plugin);

  exports.BLoading = script;
  exports.LoadingProgrammatic = LoadingProgrammatic;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
