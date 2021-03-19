/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Modal = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

    var findFocusable = function findFocusable(element) {
      var programmatic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!element) {
        return null;
      }

      if (programmatic) {
        return element.querySelectorAll("*[tabindex=\"-1\"]");
      }

      return element.querySelectorAll("a[href]:not([tabindex=\"-1\"]),\n                                     area[href],\n                                     input:not([disabled]),\n                                     select:not([disabled]),\n                                     textarea:not([disabled]),\n                                     button:not([disabled]),\n                                     iframe,\n                                     object,\n                                     embed,\n                                     *[tabindex]:not([tabindex=\"-1\"]),\n                                     *[contenteditable]");
    };

    var onKeyDown;

    var bind = function bind(el, _ref) {
      var _ref$value = _ref.value,
          value = _ref$value === void 0 ? true : _ref$value;

      if (value) {
        var focusable = findFocusable(el);
        var focusableProg = findFocusable(el, true);

        if (focusable && focusable.length > 0) {
          onKeyDown = function onKeyDown(event) {
            // Need to get focusable each time since it can change between key events
            // ex. changing month in a datepicker
            focusable = findFocusable(el);
            focusableProg = findFocusable(el, true);
            var firstFocusable = focusable[0];
            var lastFocusable = focusable[focusable.length - 1];

            if (event.target === firstFocusable && event.shiftKey && event.key === 'Tab') {
              event.preventDefault();
              lastFocusable.focus();
            } else if ((event.target === lastFocusable || Array.from(focusableProg).indexOf(event.target) >= 0) && !event.shiftKey && event.key === 'Tab') {
              event.preventDefault();
              firstFocusable.focus();
            }
          };

          el.addEventListener('keydown', onKeyDown);
        }
      }
    };

    var unbind = function unbind(el) {
      el.removeEventListener('keydown', onKeyDown);
    };

    var directive = {
      bind: bind,
      unbind: unbind
    };

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

    var config = {
      defaultContainerElement: null,
      defaultIconPack: 'mdi',
      defaultIconComponent: null,
      defaultIconPrev: 'chevron-left',
      defaultIconNext: 'chevron-right',
      defaultLocale: undefined,
      defaultDialogConfirmText: null,
      defaultDialogCancelText: null,
      defaultSnackbarDuration: 3500,
      defaultSnackbarPosition: null,
      defaultToastDuration: 2000,
      defaultToastPosition: null,
      defaultNotificationDuration: 2000,
      defaultNotificationPosition: null,
      defaultTooltipType: 'is-primary',
      defaultTooltipDelay: null,
      defaultInputAutocomplete: 'on',
      defaultDateFormatter: null,
      defaultDateParser: null,
      defaultDateCreator: null,
      defaultTimeCreator: null,
      defaultDayNames: null,
      defaultMonthNames: null,
      defaultFirstDayOfWeek: null,
      defaultUnselectableDaysOfWeek: null,
      defaultTimeFormatter: null,
      defaultTimeParser: null,
      defaultModalCanCancel: ['escape', 'x', 'outside', 'button'],
      defaultModalScroll: null,
      defaultDatepickerMobileNative: true,
      defaultTimepickerMobileNative: true,
      defaultNoticeQueue: true,
      defaultInputHasCounter: true,
      defaultTaginputHasCounter: true,
      defaultUseHtml5Validation: true,
      defaultDropdownMobileModal: true,
      defaultFieldLabelPosition: null,
      defaultDatepickerYearsRange: [-100, 10],
      defaultDatepickerNearbyMonthDays: true,
      defaultDatepickerNearbySelectableMonthDays: false,
      defaultDatepickerShowWeekNumber: false,
      defaultDatepickerWeekNumberClickable: false,
      defaultDatepickerMobileModal: true,
      defaultTrapFocus: true,
      defaultAutoFocus: true,
      defaultButtonRounded: false,
      defaultSwitchRounded: true,
      defaultCarouselInterval: 3500,
      defaultTabsExpanded: false,
      defaultTabsAnimated: true,
      defaultTabsType: null,
      defaultStatusIcon: true,
      defaultProgrammaticPromise: false,
      defaultLinkTags: ['a', 'button', 'input', 'router-link', 'nuxt-link', 'n-link', 'RouterLink', 'NuxtLink', 'NLink'],
      defaultImageWebpFallback: null,
      defaultImageLazy: true,
      defaultImageResponsive: true,
      defaultImageRatio: null,
      defaultImageSrcsetFormatter: null,
      customIconPacks: null
    };
    var VueInstance;

    var script = {
      name: 'BModal',
      directives: {
        trapFocus: directive
      },
      // deprecated, to replace with default 'value' in the next breaking change
      model: {
        prop: 'active',
        event: 'update:active'
      },
      props: {
        active: Boolean,
        component: [Object, Function, String],
        content: [String, Array],
        programmatic: Boolean,
        props: Object,
        events: Object,
        width: {
          type: [String, Number],
          default: 960
        },
        hasModalCard: Boolean,
        animation: {
          type: String,
          default: 'zoom-out'
        },
        canCancel: {
          type: [Array, Boolean],
          default: function _default() {
            return config.defaultModalCanCancel;
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
        },
        fullScreen: Boolean,
        trapFocus: {
          type: Boolean,
          default: function _default() {
            return config.defaultTrapFocus;
          }
        },
        autoFocus: {
          type: Boolean,
          default: function _default() {
            return config.defaultAutoFocus;
          }
        },
        customClass: String,
        ariaRole: {
          type: String,
          validator: function validator(value) {
            return ['dialog', 'alertdialog'].indexOf(value) >= 0;
          }
        },
        ariaModal: Boolean,
        ariaLabel: {
          type: String,
          validator: function validator(value) {
            return Boolean(value);
          }
        },
        destroyOnHide: {
          type: Boolean,
          default: true
        }
      },
      data: function data() {
        return {
          isActive: this.active || false,
          savedScrollTop: null,
          newWidth: typeof this.width === 'number' ? this.width + 'px' : this.width,
          animating: !this.active,
          destroyed: !this.active
        };
      },
      computed: {
        cancelOptions: function cancelOptions() {
          return typeof this.canCancel === 'boolean' ? this.canCancel ? config.defaultModalCanCancel : [] : this.canCancel;
        },
        showX: function showX() {
          return this.cancelOptions.indexOf('x') >= 0;
        },
        customStyle: function customStyle() {
          if (!this.fullScreen) {
            return {
              maxWidth: this.newWidth
            };
          }

          return null;
        }
      },
      watch: {
        active: function active(value) {
          this.isActive = value;
        },
        isActive: function isActive(value) {
          var _this = this;

          if (value) this.destroyed = false;
          this.handleScroll();
          this.$nextTick(function () {
            if (value && _this.$el && _this.$el.focus && _this.autoFocus) {
              _this.$el.focus();
            }
          });
        }
      },
      methods: {
        handleScroll: function handleScroll() {
          if (typeof window === 'undefined') return;

          if (this.scroll === 'clip') {
            if (this.isActive) {
              document.documentElement.classList.add('is-clipped');
            } else {
              document.documentElement.classList.remove('is-clipped');
            }

            return;
          }

          this.savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;

          if (this.isActive) {
            document.body.classList.add('is-noscroll');
          } else {
            document.body.classList.remove('is-noscroll');
          }

          if (this.isActive) {
            document.body.style.top = "-".concat(this.savedScrollTop, "px");
            return;
          }

          document.documentElement.scrollTop = this.savedScrollTop;
          document.body.style.top = null;
          this.savedScrollTop = null;
        },

        /**
        * Close the Modal if canCancel and call the onCancel prop (function).
        */
        cancel: function cancel(method) {
          if (this.cancelOptions.indexOf(method) < 0) return;
          this.$emit('cancel', arguments);
          this.onCancel.apply(null, arguments);
          this.close();
        },

        /**
        * Call the onCancel prop (function).
        * Emit events, and destroy modal if it's programmatic.
        */
        close: function close() {
          var _this2 = this;

          this.$emit('close');
          this.$emit('update:active', false); // Timeout for the animation complete before destroying

          if (this.programmatic) {
            this.isActive = false;
            setTimeout(function () {
              _this2.$destroy();

              removeElement(_this2.$el);
            }, 150);
          }
        },

        /**
        * Keypress event that is bound to the document.
        */
        keyPress: function keyPress(_ref) {
          var key = _ref.key;
          if (this.isActive && (key === 'Escape' || key === 'Esc')) this.cancel('escape');
        },

        /**
        * Transition after-enter hook
        */
        afterEnter: function afterEnter() {
          this.animating = false;
          this.$emit('after-enter');
        },

        /**
        * Transition before-leave hook
        */
        beforeLeave: function beforeLeave() {
          this.animating = true;
        },

        /**
        * Transition after-leave hook
        */
        afterLeave: function afterLeave() {
          if (this.destroyOnHide) {
            this.destroyed = true;
          }

          this.$emit('after-leave');
        }
      },
      created: function created() {
        if (typeof window !== 'undefined') {
          document.addEventListener('keyup', this.keyPress);
        }
      },
      beforeMount: function beforeMount() {
        // Insert the Modal component in body tag
        // only if it's programmatic
        this.programmatic && document.body.appendChild(this.$el);
      },
      mounted: function mounted() {
        if (this.programmatic) this.isActive = true;else if (this.isActive) this.handleScroll();
      },
      beforeDestroy: function beforeDestroy() {
        if (typeof window !== 'undefined') {
          document.removeEventListener('keyup', this.keyPress); // reset scroll

          document.documentElement.classList.remove('is-clipped');
          var savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;
          document.body.classList.remove('is-noscroll');
          document.documentElement.scrollTop = savedScrollTop;
          document.body.style.top = null;
        }
      }
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _directive_trap_focus = vue.resolveDirective("trap-focus");

      return (vue.openBlock(), vue.createBlock(vue.Transition, {
        name: $props.animation,
        onAfterEnter: $options.afterEnter,
        onBeforeLeave: $options.beforeLeave,
        onAfterLeave: $options.afterLeave
      }, {
        default: vue.withCtx(() => [
          (!$data.destroyed)
            ? vue.withDirectives((vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: ["modal is-active", [{'is-full-screen': $props.fullScreen}, $props.customClass]],
                tabindex: "-1",
                role: $props.ariaRole,
                "aria-label": $props.ariaLabel,
                "aria-modal": $props.ariaModal
              }, [
                vue.createVNode("div", {
                  class: "modal-background",
                  onClick: _cache[1] || (_cache[1] = $event => ($options.cancel('outside')))
                }),
                vue.createVNode("div", {
                  class: ["animation-content", { 'modal-content': !$props.hasModalCard }],
                  style: $options.customStyle
                }, [
                  ($props.component)
                    ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.component), vue.mergeProps({ key: 0 }, $props.props, vue.toHandlers($props.events), {
                        "can-cancel": $props.canCancel,
                        onClose: $options.close
                      }), null, 16 /* FULL_PROPS */, ["can-cancel", "onClose"]))
                    : ($props.content)
                      ? (vue.openBlock(), vue.createBlock("div", {
                          key: 1,
                          innerHTML: $props.content
                        }, null, 8 /* PROPS */, ["innerHTML"]))
                      : vue.renderSlot(_ctx.$slots, "default", {
                          key: 2,
                          canCancel: $props.canCancel,
                          close: $options.close
                        }),
                  ($options.showX)
                    ? vue.withDirectives((vue.openBlock(), vue.createBlock("button", {
                        key: 3,
                        type: "button",
                        class: "modal-close is-large",
                        onClick: _cache[2] || (_cache[2] = $event => ($options.cancel('x')))
                      }, null, 512 /* NEED_PATCH */)), [
                        [vue.vShow, !$data.animating]
                      ])
                    : vue.createCommentVNode("v-if", true)
                ], 6 /* CLASS, STYLE */)
              ], 10 /* CLASS, PROPS */, ["role", "aria-label", "aria-modal"])), [
                [vue.vShow, $data.isActive],
                [_directive_trap_focus, $props.trapFocus]
              ])
            : vue.createCommentVNode("v-if", true)
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["name", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]))
    }

    script.render = render;
    script.__file = "src/components/modal/Modal.vue";

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
    var ModalProgrammatic = {
      open: function open(params) {
        var parent;

        if (typeof params === 'string') {
          params = {
            content: params
          };
        }

        var defaultParam = {
          programmatic: true
        };

        if (params.parent) {
          parent = params.parent;
          delete params.parent;
        }

        var slot;

        if (Array.isArray(params.content)) {
          slot = params.content;
          delete params.content;
        }

        var propsData = merge(defaultParam, params);
        var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance;
        var ModalComponent = (vm.extend || vm.component)(script);
        var component = new ModalComponent({
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
        registerComponent(Vue, script);
        registerComponentProgrammatic(Vue, 'modal', ModalProgrammatic);
      }
    };
    use(Plugin);

    exports.BModal = script;
    exports.ModalProgrammatic = ModalProgrammatic;
    exports.default = Plugin;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
