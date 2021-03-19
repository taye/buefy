/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Dialog = {}, global.Vue));
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

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
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

  var mdiIcons = {
    sizes: {
      'default': 'mdi-24px',
      'is-small': null,
      'is-medium': 'mdi-36px',
      'is-large': 'mdi-48px'
    },
    iconPrefix: 'mdi-'
  };

  var faIcons = function faIcons() {
    var faIconPrefix = config && config.defaultIconComponent ? '' : 'fa-';
    return {
      sizes: {
        'default': null,
        'is-small': null,
        'is-medium': faIconPrefix + 'lg',
        'is-large': faIconPrefix + '2x'
      },
      iconPrefix: faIconPrefix,
      internalIcons: {
        'information': 'info-circle',
        'alert': 'exclamation-triangle',
        'alert-circle': 'exclamation-circle',
        'chevron-right': 'angle-right',
        'chevron-left': 'angle-left',
        'chevron-down': 'angle-down',
        'eye-off': 'eye-slash',
        'menu-down': 'caret-down',
        'menu-up': 'caret-up',
        'close-circle': 'times-circle'
      }
    };
  };

  var getIcons = function getIcons() {
    var icons = {
      mdi: mdiIcons,
      fa: faIcons(),
      fas: faIcons(),
      far: faIcons(),
      fad: faIcons(),
      fab: faIcons(),
      fal: faIcons()
    };

    if (config && config.customIconPacks) {
      icons = merge(icons, config.customIconPacks, true);
    }

    return icons;
  };

  var script$2 = {
    name: 'BIcon',
    props: {
      type: [String, Object],
      component: String,
      pack: String,
      icon: String,
      size: String,
      customSize: String,
      customClass: String,
      both: Boolean // This is used internally to show both MDI and FA icon

    },
    computed: {
      iconConfig: function iconConfig() {
        var allIcons = getIcons();
        return allIcons[this.newPack];
      },
      iconPrefix: function iconPrefix() {
        if (this.iconConfig && this.iconConfig.iconPrefix) {
          return this.iconConfig.iconPrefix;
        }

        return '';
      },

      /**
      * Internal icon name based on the pack.
      * If pack is 'fa', gets the equivalent FA icon name of the MDI,
      * internal icons are always MDI.
      */
      newIcon: function newIcon() {
        return "".concat(this.iconPrefix).concat(this.getEquivalentIconOf(this.icon));
      },
      newPack: function newPack() {
        return this.pack || config.defaultIconPack;
      },
      newType: function newType() {
        if (!this.type) return;
        var splitType = [];

        if (typeof this.type === 'string') {
          splitType = this.type.split('-');
        } else {
          for (var key in this.type) {
            if (this.type[key]) {
              splitType = key.split('-');
              break;
            }
          }
        }

        if (splitType.length <= 1) return;

        var _splitType = splitType,
            _splitType2 = _toArray(_splitType),
            type = _splitType2.slice(1);

        return "has-text-".concat(type.join('-'));
      },
      newCustomSize: function newCustomSize() {
        return this.customSize || this.customSizeByPack;
      },
      customSizeByPack: function customSizeByPack() {
        if (this.iconConfig && this.iconConfig.sizes) {
          if (this.size && this.iconConfig.sizes[this.size] !== undefined) {
            return this.iconConfig.sizes[this.size];
          } else if (this.iconConfig.sizes.default) {
            return this.iconConfig.sizes.default;
          }
        }

        return null;
      },
      useIconComponent: function useIconComponent() {
        return this.component || config.defaultIconComponent;
      }
    },
    methods: {
      /**
      * Equivalent icon name of the MDI.
      */
      getEquivalentIconOf: function getEquivalentIconOf(value) {
        // Only transform the class if the both prop is set to true
        if (!this.both) {
          return value;
        }

        if (this.iconConfig && this.iconConfig.internalIcons && this.iconConfig.internalIcons[value]) {
          return this.iconConfig.internalIcons[value];
        }

        return value;
      }
    }
  };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("span", {
      class: ["icon", [$options.newType, $props.size]]
    }, [
      (!$options.useIconComponent)
        ? (vue.openBlock(), vue.createBlock("i", {
            key: 0,
            class: [$options.newPack, $options.newIcon, $options.newCustomSize, $props.customClass]
          }, null, 2 /* CLASS */))
        : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($options.useIconComponent), {
            key: 1,
            icon: [$options.newPack, $options.newIcon],
            size: $options.newCustomSize,
            class: [$props.customClass]
          }, null, 8 /* PROPS */, ["icon", "size", "class"]))
    ], 2 /* CLASS */))
  }

  script$2.render = render$2;
  script$2.__file = "src/components/icon/Icon.vue";

  var script$1 = {
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

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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

  script$1.render = render$1;
  script$1.__file = "src/components/modal/Modal.vue";

  var script = {
    name: 'BDialog',
    components: _defineProperty({}, script$2.name, script$2),
    directives: {
      trapFocus: directive
    },
    extends: script$1,
    props: {
      title: String,
      message: [String, Array],
      icon: String,
      iconPack: String,
      hasIcon: Boolean,
      type: {
        type: String,
        default: 'is-primary'
      },
      size: String,
      confirmText: {
        type: String,
        default: function _default() {
          return 'OK';
        }
      },
      cancelText: {
        type: String,
        default: function _default() {
          return 'Cancel';
        }
      },
      hasInput: Boolean,
      // Used internally to know if it's prompt
      inputAttrs: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      onConfirm: {
        type: Function,
        default: function _default() {}
      },
      closeOnConfirm: {
        type: Boolean,
        default: true
      },
      container: {
        type: String,
        default: function _default() {
          return config.defaultContainerElement;
        }
      },
      focusOn: {
        type: String,
        default: 'confirm'
      },
      trapFocus: {
        type: Boolean,
        default: function _default() {
          return config.defaultTrapFocus;
        }
      },
      ariaRole: {
        type: String,
        validator: function validator(value) {
          return ['dialog', 'alertdialog'].indexOf(value) >= 0;
        }
      },
      ariaModal: Boolean
    },
    data: function data() {
      var prompt = this.hasInput ? this.inputAttrs.value || '' : '';
      return {
        prompt: prompt,
        isActive: false,
        validationMessage: ''
      };
    },
    computed: {
      dialogClass: function dialogClass() {
        return [this.size, {
          'has-custom-container': this.container !== null
        }];
      },

      /**
      * Icon name (MDI) based on the type.
      */
      iconByType: function iconByType() {
        switch (this.type) {
          case 'is-info':
            return 'information';

          case 'is-success':
            return 'check-circle';

          case 'is-warning':
            return 'alert';

          case 'is-danger':
            return 'alert-circle';

          default:
            return null;
        }
      },
      showCancel: function showCancel() {
        return this.cancelOptions.indexOf('button') >= 0;
      }
    },
    methods: {
      /**
      * If it's a prompt Dialog, validate the input.
      * Call the onConfirm prop (function) and close the Dialog.
      */
      confirm: function confirm() {
        var _this = this;

        if (this.$refs.input !== undefined) {
          if (!this.$refs.input.checkValidity()) {
            this.validationMessage = this.$refs.input.validationMessage;
            this.$nextTick(function () {
              return _this.$refs.input.select();
            });
            return;
          }
        }

        this.$emit('confirm', this.prompt);
        this.onConfirm(this.prompt, this);
        if (this.closeOnConfirm) this.close();
      },

      /**
      * Close the Dialog.
      */
      close: function close() {
        var _this2 = this;

        this.isActive = false; // Timeout for the animation complete before destroying

        setTimeout(function () {
          _this2.$destroy();

          removeElement(_this2.$el);
        }, 150);
      }
    },
    beforeMount: function beforeMount() {
      var _this3 = this;

      // Insert the Dialog component in the element container
      if (typeof window !== 'undefined') {
        this.$nextTick(function () {
          var container = document.querySelector(_this3.container) || document.body;
          container.appendChild(_this3.$el);
        });
      }
    },
    mounted: function mounted() {
      var _this4 = this;

      this.isActive = true;

      if (typeof this.inputAttrs.required === 'undefined') {
        this.$set(this.inputAttrs, 'required', true);
      }

      this.$nextTick(function () {
        // Handle which element receives focus
        if (_this4.hasInput) {
          _this4.$refs.input.focus();
        } else if (_this4.focusOn === 'cancel' && _this4.showCancel) {
          _this4.$refs.cancelButton.focus();
        } else {
          _this4.$refs.confirmButton.focus();
        }
      });
    }
  };

  const _hoisted_1 = { class: "modal-card animation-content" };
  const _hoisted_2 = {
    key: 0,
    class: "modal-card-head"
  };
  const _hoisted_3 = { class: "modal-card-title" };
  const _hoisted_4 = { class: "media" };
  const _hoisted_5 = {
    key: 0,
    class: "media-left"
  };
  const _hoisted_6 = { class: "media-content" };
  const _hoisted_7 = {
    key: 0,
    class: "field"
  };
  const _hoisted_8 = { class: "control" };
  const _hoisted_9 = { class: "help is-danger" };
  const _hoisted_10 = { class: "modal-card-foot" };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_b_icon = vue.resolveComponent("b-icon");
    const _directive_trap_focus = vue.resolveDirective("trap-focus");

    return (vue.openBlock(), vue.createBlock(vue.Transition, { name: _ctx.animation }, {
      default: vue.withCtx(() => [
        ($data.isActive)
          ? vue.withDirectives((vue.openBlock(), vue.createBlock("div", {
              key: 0,
              class: ["dialog modal is-active", $options.dialogClass],
              role: $props.ariaRole,
              "aria-modal": $props.ariaModal
            }, [
              vue.createVNode("div", {
                class: "modal-background",
                onClick: _cache[1] || (_cache[1] = $event => (_ctx.cancel('outside')))
              }),
              vue.createVNode("div", _hoisted_1, [
                ($props.title)
                  ? (vue.openBlock(), vue.createBlock("header", _hoisted_2, [
                      vue.createVNode("p", _hoisted_3, vue.toDisplayString($props.title), 1 /* TEXT */)
                    ]))
                  : vue.createCommentVNode("v-if", true),
                vue.createVNode("section", {
                  class: ["modal-card-body", { 'is-titleless': !$props.title, 'is-flex': $props.hasIcon }]
                }, [
                  vue.createVNode("div", _hoisted_4, [
                    ($props.hasIcon && ($props.icon || $options.iconByType))
                      ? (vue.openBlock(), vue.createBlock("div", _hoisted_5, [
                          vue.createVNode(_component_b_icon, {
                            icon: $props.icon ? $props.icon : $options.iconByType,
                            pack: $props.iconPack,
                            type: $props.type,
                            both: !$props.icon,
                            size: "is-large"
                          }, null, 8 /* PROPS */, ["icon", "pack", "type", "both"])
                        ]))
                      : vue.createCommentVNode("v-if", true),
                    vue.createVNode("div", _hoisted_6, [
                      vue.createVNode("p", null, [
                        (_ctx.$slots.default)
                          ? vue.renderSlot(_ctx.$slots, "default", { key: 0 })
                          : (vue.openBlock(), vue.createBlock("div", {
                              key: 1,
                              innerHTML: $props.message
                            }, null, 8 /* PROPS */, ["innerHTML"]))
                      ]),
                      ($props.hasInput)
                        ? (vue.openBlock(), vue.createBlock("div", _hoisted_7, [
                            vue.createVNode("div", _hoisted_8, [
                              vue.withDirectives(vue.createVNode("input", vue.mergeProps({
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($data.prompt = $event)),
                                class: ["input", { 'is-danger': $data.validationMessage }],
                                ref: "input"
                              }, $props.inputAttrs, {
                                onKeyup: _cache[3] || (_cache[3] = vue.withKeys((...args) => ($options.confirm && $options.confirm(...args)), ["enter"]))
                              }), null, 16 /* FULL_PROPS */), [
                                [vue.vModelDynamic, $data.prompt]
                              ])
                            ]),
                            vue.createVNode("p", _hoisted_9, vue.toDisplayString($data.validationMessage), 1 /* TEXT */)
                          ]))
                        : vue.createCommentVNode("v-if", true)
                    ])
                  ])
                ], 2 /* CLASS */),
                vue.createVNode("footer", _hoisted_10, [
                  ($options.showCancel)
                    ? (vue.openBlock(), vue.createBlock("button", {
                        key: 0,
                        class: "button",
                        ref: "cancelButton",
                        onClick: _cache[4] || (_cache[4] = $event => (_ctx.cancel('button')))
                      }, vue.toDisplayString($props.cancelText), 513 /* TEXT, NEED_PATCH */))
                    : vue.createCommentVNode("v-if", true),
                  vue.createVNode("button", {
                    class: ["button", $props.type],
                    ref: "confirmButton",
                    onClick: _cache[5] || (_cache[5] = (...args) => ($options.confirm && $options.confirm(...args)))
                  }, vue.toDisplayString($props.confirmText), 3 /* TEXT, CLASS */)
                ])
              ])
            ], 10 /* CLASS, PROPS */, ["role", "aria-modal"])), [
              [_directive_trap_focus, $props.trapFocus]
            ])
          : vue.createCommentVNode("v-if", true)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["name"]))
  }

  script.render = render;
  script.__file = "src/components/dialog/Dialog.vue";

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

  function open(propsData) {
    var slot;

    if (Array.isArray(propsData.message)) {
      slot = propsData.message;
      delete propsData.message;
    }

    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance;
    var DialogComponent = vm.extend(script);
    var component = new DialogComponent({
      el: document.createElement('div'),
      propsData: propsData
    });

    if (slot) {
      component.$slots.default = slot;
      component.$forceUpdate();
    }

    {
      return component;
    }
  }

  var DialogProgrammatic = {
    alert: function alert(params) {
      if (typeof params === 'string') {
        params = {
          message: params
        };
      }

      var defaultParam = {
        canCancel: false
      };
      var propsData = merge(defaultParam, params);
      return open(propsData);
    },
    confirm: function confirm(params) {
      var defaultParam = {};
      var propsData = merge(defaultParam, params);
      return open(propsData);
    },
    prompt: function prompt(params) {
      var defaultParam = {
        hasInput: true,
        confirmText: 'Done'
      };
      var propsData = merge(defaultParam, params);
      return open(propsData);
    }
  };
  var Plugin = {
    install: function install(Vue) {
      localVueInstance = Vue;
      registerComponent(Vue, script);
      registerComponentProgrammatic(Vue, 'dialog', DialogProgrammatic);
    }
  };
  use(Plugin);

  exports.BDialog = script;
  exports.DialogProgrammatic = DialogProgrammatic;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
