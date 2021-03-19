/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Tooltip = {}, global.Vue));
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

  function removeElement(el) {
    if (typeof el.remove !== 'undefined') {
      el.remove();
    } else if (typeof el.parentNode !== 'undefined' && el.parentNode !== null) {
      el.parentNode.removeChild(el);
    }
  }
  function createAbsoluteElement(el) {
    var root = document.createElement('div');
    root.style.position = 'absolute';
    root.style.left = '0px';
    root.style.top = '0px';
    root.style.width = '100%';
    var wrapper = document.createElement('div');
    root.appendChild(wrapper);
    wrapper.appendChild(el);
    document.body.appendChild(root);
    return root;
  }

  var script = {
    name: 'BTooltip',
    props: {
      active: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: function _default() {
          return config.defaultTooltipType;
        }
      },
      label: String,
      delay: {
        type: Number,
        default: function _default() {
          return config.defaultTooltipDelay;
        }
      },
      position: {
        type: String,
        default: 'is-top',
        validator: function validator(value) {
          return ['is-top', 'is-bottom', 'is-left', 'is-right'].indexOf(value) > -1;
        }
      },
      triggers: {
        type: Array,
        default: function _default() {
          return ['hover'];
        }
      },
      always: Boolean,
      square: Boolean,
      dashed: Boolean,
      multilined: Boolean,
      size: {
        type: String,
        default: 'is-medium'
      },
      appendToBody: Boolean,
      animated: {
        type: Boolean,
        default: true
      },
      animation: {
        type: String,
        default: 'fade'
      },
      contentClass: String,
      autoClose: {
        type: [Array, Boolean],
        default: true
      }
    },
    data: function data() {
      return {
        isActive: false,
        triggerStyle: {},
        timer: null,
        _bodyEl: undefined // Used to append to body

      };
    },
    computed: {
      rootClasses: function rootClasses() {
        return ['b-tooltip', this.type, this.position, this.size, {
          'is-square': this.square,
          'is-always': this.always,
          'is-multiline': this.multilined,
          'is-dashed': this.dashed
        }];
      },
      newAnimation: function newAnimation() {
        return this.animated ? this.animation : undefined;
      }
    },
    watch: {
      isActive: function isActive(value) {
        if (this.appendToBody) {
          this.updateAppendToBody();
        }
      }
    },
    methods: {
      updateAppendToBody: function updateAppendToBody() {
        var tooltip = this.$refs.tooltip;
        var trigger = this.$refs.trigger;

        if (tooltip && trigger) {
          // update wrapper tooltip
          var tooltipEl = this.$data._bodyEl.children[0];
          tooltipEl.classList.forEach(function (item) {
            return tooltipEl.classList.remove(item);
          });

          if (this.$vnode && this.$vnode.data && this.$vnode.data.staticClass) {
            tooltipEl.classList.add(this.$vnode.data.staticClass);
          }

          this.rootClasses.forEach(function (item) {
            if (_typeof(item) === 'object') {
              for (var key in item) {
                if (item[key]) {
                  tooltipEl.classList.add(key);
                }
              }
            } else {
              tooltipEl.classList.add(item);
            }
          });
          tooltipEl.style.width = "".concat(trigger.clientWidth, "px");
          tooltipEl.style.height = "".concat(trigger.clientHeight, "px");
          var rect = trigger.getBoundingClientRect();
          var top = rect.top + window.scrollY;
          var left = rect.left + window.scrollX;
          var wrapper = this.$data._bodyEl;
          wrapper.style.position = 'absolute';
          wrapper.style.top = "".concat(top, "px");
          wrapper.style.left = "".concat(left, "px");
          wrapper.style.zIndex = this.isActive || this.always ? '99' : '-1';
          this.triggerStyle = {
            zIndex: this.isActive || this.always ? '100' : undefined
          };
        }
      },
      onClick: function onClick() {
        var _this = this;

        if (this.triggers.indexOf('click') < 0) return; // if not active, toggle after clickOutside event
        // this fixes toggling programmatic

        this.$nextTick(function () {
          setTimeout(function () {
            return _this.open();
          });
        });
      },
      onHover: function onHover() {
        if (this.triggers.indexOf('hover') < 0) return;
        this.open();
      },
      onContextMenu: function onContextMenu(e) {
        if (this.triggers.indexOf('contextmenu') < 0) return;
        e.preventDefault();
        this.open();
      },
      onFocus: function onFocus() {
        if (this.triggers.indexOf('focus') < 0) return;
        this.open();
      },
      open: function open() {
        var _this2 = this;

        if (this.delay) {
          this.timer = setTimeout(function () {
            _this2.isActive = true;
            _this2.timer = null;
          }, this.delay);
        } else {
          this.isActive = true;
        }
      },
      close: function close() {
        if (typeof this.autoClose === 'boolean') {
          this.isActive = !this.autoClose;
          if (this.autoClose && this.timer) clearTimeout(this.timer);
        }
      },

      /**
      * Close tooltip if clicked outside.
      */
      clickedOutside: function clickedOutside(event) {
        if (this.isActive) {
          if (Array.isArray(this.autoClose)) {
            if (this.autoClose.includes('outside')) {
              if (!this.isInWhiteList(event.target)) {
                this.isActive = false;
                return;
              }
            }

            if (this.autoClose.includes('inside')) {
              if (this.isInWhiteList(event.target)) this.isActive = false;
            }
          }
        }
      },

      /**
       * Keypress event that is bound to the document
       */
      keyPress: function keyPress(_ref) {
        var key = _ref.key;

        if (this.isActive && (key === 'Escape' || key === 'Esc')) {
          if (Array.isArray(this.autoClose)) {
            if (this.autoClose.indexOf('escape') >= 0) this.isActive = false;
          }
        }
      },

      /**
      * White-listed items to not close when clicked.
      */
      isInWhiteList: function isInWhiteList(el) {
        if (el === this.$refs.content) return true; // All chidren from content

        if (this.$refs.content !== undefined) {
          var children = this.$refs.content.querySelectorAll('*');
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var child = _step.value;

              if (el === child) {
                return true;
              }
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

        return false;
      }
    },
    mounted: function mounted() {
      if (this.appendToBody && typeof window !== 'undefined') {
        this.$data._bodyEl = createAbsoluteElement(this.$refs.content);
        this.updateAppendToBody();
      }
    },
    created: function created() {
      if (typeof window !== 'undefined') {
        document.addEventListener('click', this.clickedOutside);
        document.addEventListener('keyup', this.keyPress);
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (typeof window !== 'undefined') {
        document.removeEventListener('click', this.clickedOutside);
        document.removeEventListener('keyup', this.keyPress);
      }

      if (this.appendToBody) {
        removeElement(this.$data._bodyEl);
      }
    }
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("span", {
      ref: "tooltip",
      class: $options.rootClasses
    }, [
      vue.createVNode(vue.Transition, { name: $options.newAnimation }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createVNode("div", {
            ref: "content",
            class: ['tooltip-content', $props.contentClass]
          }, [
            ($props.label)
              ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                  vue.createTextVNode(vue.toDisplayString($props.label), 1 /* TEXT */)
                ], 64 /* STABLE_FRAGMENT */))
              : (_ctx.$slots.content)
                ? vue.renderSlot(_ctx.$slots, "content", { key: 1 })
                : vue.createCommentVNode("v-if", true)
          ], 2 /* CLASS */), [
            [vue.vShow, $props.active && ($data.isActive || $props.always)]
          ])
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["name"]),
      vue.createVNode("div", {
        ref: "trigger",
        class: "tooltip-trigger",
        style: $data.triggerStyle,
        onClick: _cache[1] || (_cache[1] = (...args) => ($options.onClick && $options.onClick(...args))),
        onContextmenu: _cache[2] || (_cache[2] = (...args) => ($options.onContextMenu && $options.onContextMenu(...args))),
        onMouseenter: _cache[3] || (_cache[3] = (...args) => ($options.onHover && $options.onHover(...args))),
        onFocusCapture: _cache[4] || (_cache[4] = (...args) => ($options.onFocus && $options.onFocus(...args))),
        onBlurCapture: _cache[5] || (_cache[5] = (...args) => ($options.close && $options.close(...args))),
        onMouseleave: _cache[6] || (_cache[6] = (...args) => ($options.close && $options.close(...args)))
      }, [
        vue.renderSlot(_ctx.$slots, "default", { ref: "slot" })
      ], 36 /* STYLE, HYDRATE_EVENTS */)
    ], 2 /* CLASS */))
  }

  script.render = render;
  script.__file = "src/components/tooltip/Tooltip.vue";

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

  exports.BTooltip = script;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
