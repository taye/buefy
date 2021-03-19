/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Collapse = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

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

  function getSlot(slots, name, props) {
    var value = slots[name];
    return typeof value === 'function' ? value(props) : value;
  }

  var script = {
    name: 'BCollapse',
    // deprecated, to replace with default 'value' in the next breaking change
    model: {
      prop: 'open',
      event: 'update:open'
    },
    props: {
      open: {
        type: Boolean,
        default: true
      },
      animation: {
        type: String,
        default: 'fade'
      },
      ariaId: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'is-top',
        validator: function validator(value) {
          return ['is-top', 'is-bottom'].indexOf(value) > -1;
        }
      }
    },
    data: function data() {
      return {
        isOpen: this.open
      };
    },
    watch: {
      open: function open(value) {
        this.isOpen = value;
      }
    },
    methods: {
      /**
      * Toggle and emit events
      */
      toggle: function toggle() {
        this.isOpen = !this.isOpen;
        this.$emit('update:open', this.isOpen);
        this.$emit(this.isOpen ? 'open' : 'close');
      }
    },
    render: function render() {
      var trigger = vue.h('div', {
        staticClass: 'collapse-trigger',
        on: {
          click: this.toggle
        }
      }, (this.$scopedSlots || this.$slots).trigger ? [(this.$scopedSlots || this.$slots).trigger({
        open: this.isOpen
      })] : [getSlot(this.$slots, 'trigger')]);
      var content = vue.h('transition', {
        props: {
          name: this.animation
        }
      }, [vue.h('div', {
        staticClass: 'collapse-content',
        attrs: {
          'id': this.ariaId,
          'aria-expanded': this.isOpen
        },
        directives: [{
          name: 'show',
          value: this.isOpen
        }]
      }, getSlot(this.$slots, 'default'))]);
      return vue.h('div', {
        staticClass: 'collapse'
      }, this.position === 'is-top' ? [trigger, content] : [content, trigger]);
    }
  };

  const render = () => {};


  script.render = render;
  script.__file = "src/components/collapse/Collapse.vue";

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

  exports.BCollapse = script;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
