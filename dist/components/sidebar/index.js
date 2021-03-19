/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Sidebar = {}, global.Vue));
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

  function removeElement(el) {
    if (typeof el.remove !== 'undefined') {
      el.remove();
    } else if (typeof el.parentNode !== 'undefined' && el.parentNode !== null) {
      el.parentNode.removeChild(el);
    }
  }
  function isCustomElement(vm) {
    return 'shadowRoot' in vm.$root.$options;
  }

  var script = {
    name: 'BSidebar',
    // deprecated, to replace with default 'value' in the next breaking change
    model: {
      prop: 'open',
      event: 'update:open'
    },
    props: {
      open: Boolean,
      type: [String, Object],
      overlay: Boolean,
      position: {
        type: String,
        default: 'fixed',
        validator: function validator(value) {
          return ['fixed', 'absolute', 'static'].indexOf(value) >= 0;
        }
      },
      fullheight: Boolean,
      fullwidth: Boolean,
      right: Boolean,
      mobile: {
        type: String
      },
      reduce: Boolean,
      expandOnHover: Boolean,
      expandOnHoverFixed: Boolean,
      canCancel: {
        type: [Array, Boolean],
        default: function _default() {
          return ['escape', 'outside'];
        }
      },
      onCancel: {
        type: Function,
        default: function _default() {}
      },
      scroll: {
        type: String,
        default: function _default() {
          return 'clip';
        },
        validator: function validator(value) {
          return ['clip', 'keep'].indexOf(value) >= 0;
        }
      }
    },
    data: function data() {
      return {
        isOpen: this.open,
        transitionName: null,
        animating: true,
        savedScrollTop: null
      };
    },
    computed: {
      rootClasses: function rootClasses() {
        return [this.type, {
          'is-fixed': this.isFixed,
          'is-static': this.isStatic,
          'is-absolute': this.isAbsolute,
          'is-fullheight': this.fullheight,
          'is-fullwidth': this.fullwidth,
          'is-right': this.right,
          'is-mini': this.reduce,
          'is-mini-expand': this.expandOnHover,
          'is-mini-expand-fixed': this.expandOnHover && this.expandOnHoverFixed,
          'is-mini-mobile': this.mobile === 'reduce',
          'is-hidden-mobile': this.mobile === 'hide',
          'is-fullwidth-mobile': this.mobile === 'fullwidth'
        }];
      },
      cancelOptions: function cancelOptions() {
        return typeof this.canCancel === 'boolean' ? this.canCancel ? ['escape', 'outside'] : [] : this.canCancel;
      },
      isStatic: function isStatic() {
        return this.position === 'static';
      },
      isFixed: function isFixed() {
        return this.position === 'fixed';
      },
      isAbsolute: function isAbsolute() {
        return this.position === 'absolute';
      }
    },
    watch: {
      open: {
        handler: function handler(value) {
          this.isOpen = value;

          if (this.overlay) {
            this.handleScroll();
          }

          var open = this.right ? !value : value;
          this.transitionName = !open ? 'slide-prev' : 'slide-next';
        },
        immediate: true
      }
    },
    methods: {
      /**
      * White-listed items to not close when clicked.
      * Add sidebar content and all children.
      */
      getWhiteList: function getWhiteList() {
        var whiteList = [];
        whiteList.push(this.$refs.sidebarContent); // Add all chidren from dropdown

        if (this.$refs.sidebarContent !== undefined) {
          var children = this.$refs.sidebarContent.querySelectorAll('*');
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var child = _step.value;
              whiteList.push(child);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        return whiteList;
      },

      /**
      * Keypress event that is bound to the document.
      */
      keyPress: function keyPress(_ref) {
        var key = _ref.key;

        if (this.isFixed) {
          if (this.isOpen && (key === 'Escape' || key === 'Esc')) this.cancel('escape');
        }
      },

      /**
      * Close the Sidebar if canCancel and call the onCancel prop (function).
      */
      cancel: function cancel(method) {
        if (this.cancelOptions.indexOf(method) < 0) return;
        if (this.isStatic) return;
        this.onCancel.apply(null, arguments);
        this.close();
      },

      /**
      * Call the onCancel prop (function) and emit events
      */
      close: function close() {
        this.isOpen = false;
        this.$emit('close');
        this.$emit('update:open', false);
      },

      /**
       * Close fixed sidebar if clicked outside.
       */
      clickedOutside: function clickedOutside(event) {
        if (this.isFixed) {
          if (this.isOpen && !this.animating) {
            var target = isCustomElement(this) ? event.composedPath()[0] : event.target;

            if (this.getWhiteList().indexOf(target) < 0) {
              this.cancel('outside');
            }
          }
        }
      },

      /**
      * Transition before-enter hook
      */
      beforeEnter: function beforeEnter() {
        this.animating = true;
      },

      /**
      * Transition after-leave hook
      */
      afterEnter: function afterEnter() {
        this.animating = false;
      },
      handleScroll: function handleScroll() {
        if (typeof window === 'undefined') return;

        if (this.scroll === 'clip') {
          if (this.open) {
            document.documentElement.classList.add('is-clipped');
          } else {
            document.documentElement.classList.remove('is-clipped');
          }

          return;
        }

        this.savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;

        if (this.open) {
          document.body.classList.add('is-noscroll');
        } else {
          document.body.classList.remove('is-noscroll');
        }

        if (this.open) {
          document.body.style.top = "-".concat(this.savedScrollTop, "px");
          return;
        }

        document.documentElement.scrollTop = this.savedScrollTop;
        document.body.style.top = null;
        this.savedScrollTop = null;
      }
    },
    created: function created() {
      if (typeof window !== 'undefined') {
        document.addEventListener('keyup', this.keyPress);
        document.addEventListener('click', this.clickedOutside);
      }
    },
    mounted: function mounted() {
      if (typeof window !== 'undefined') {
        if (this.isFixed) {
          document.body.appendChild(this.$el);
        }
      }

      if (this.overlay && this.open) {
        this.handleScroll();
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (typeof window !== 'undefined') {
        document.removeEventListener('keyup', this.keyPress);
        document.removeEventListener('click', this.clickedOutside);

        if (this.overlay) {
          // reset scroll
          document.documentElement.classList.remove('is-clipped');
          var savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;
          document.body.classList.remove('is-noscroll');
          document.documentElement.scrollTop = savedScrollTop;
          document.body.style.top = null;
        }
      }

      if (this.isFixed) {
        removeElement(this.$el);
      }
    }
  };

  const _hoisted_1 = { class: "b-sidebar" };
  const _hoisted_2 = {
    key: 0,
    class: "sidebar-background"
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
      ($props.overlay && $data.isOpen)
        ? (vue.openBlock(), vue.createBlock("div", _hoisted_2))
        : vue.createCommentVNode("v-if", true),
      vue.createVNode(vue.Transition, {
        name: $data.transitionName,
        onBeforeEnter: $options.beforeEnter,
        onAfterEnter: $options.afterEnter
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createVNode("div", {
            ref: "sidebarContent",
            class: ["sidebar-content", $options.rootClasses]
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 2 /* CLASS */), [
            [vue.vShow, $data.isOpen]
          ])
        ]),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["name", "onBeforeEnter", "onAfterEnter"])
    ]))
  }

  script.render = render;
  script.__file = "src/components/sidebar/Sidebar.vue";

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

  exports.BSidebar = script;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
