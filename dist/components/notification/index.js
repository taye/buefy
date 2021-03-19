/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Notification = {}, global.Vue));
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

  var MessageMixin = {
    components: _defineProperty({}, script$2.name, script$2),
    // deprecated, to replace with default 'value' in the next breaking change
    model: {
      prop: 'active',
      event: 'update:active'
    },
    props: {
      active: {
        type: Boolean,
        default: true
      },
      title: String,
      closable: {
        type: Boolean,
        default: true
      },
      message: String,
      type: String,
      hasIcon: Boolean,
      size: String,
      icon: String,
      iconPack: String,
      iconSize: String,
      autoClose: {
        type: Boolean,
        default: false
      },
      duration: {
        type: Number,
        default: 2000
      }
    },
    data: function data() {
      return {
        isActive: this.active
      };
    },
    watch: {
      active: function active(value) {
        this.isActive = value;
      },
      isActive: function isActive(value) {
        if (value) {
          this.setAutoClose();
        } else {
          if (this.timer) {
            clearTimeout(this.timer);
          }
        }
      }
    },
    computed: {
      /**
       * Icon name (MDI) based on type.
       */
      computedIcon: function computedIcon() {
        if (this.icon) {
          return this.icon;
        }

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
      }
    },
    methods: {
      /**
       * Close the Message and emit events.
       */
      close: function close() {
        this.isActive = false;
        this.$emit('close');
        this.$emit('update:active', false);
      },

      /**
       * Set timer to auto close message
       */
      setAutoClose: function setAutoClose() {
        var _this = this;

        if (this.autoClose) {
          this.timer = setTimeout(function () {
            if (_this.isActive) {
              _this.close();
            }
          }, this.duration);
        }
      }
    },
    mounted: function mounted() {
      this.setAutoClose();
    }
  };

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
    const _component_b_icon = vue.resolveComponent("b-icon");

    return (vue.openBlock(), vue.createBlock(vue.Transition, { name: $props.animation }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createVNode("article", {
          class: ["notification", [_ctx.type, $props.position]]
        }, [
          (_ctx.closable)
            ? (vue.openBlock(), vue.createBlock("button", {
                key: 0,
                class: "delete",
                type: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.close && _ctx.close(...args))),
                "aria-label": $props.ariaCloseLabel
              }, null, 8 /* PROPS */, ["aria-label"]))
            : vue.createCommentVNode("v-if", true),
          (_ctx.$slots.default || _ctx.message)
            ? (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
                (_ctx.computedIcon && _ctx.hasIcon)
                  ? (vue.openBlock(), vue.createBlock("div", _hoisted_2, [
                      vue.createVNode(_component_b_icon, {
                        icon: _ctx.computedIcon,
                        pack: _ctx.iconPack,
                        both: "",
                        size: "is-large",
                        "aria-hidden": ""
                      }, null, 8 /* PROPS */, ["icon", "pack"])
                    ]))
                  : vue.createCommentVNode("v-if", true),
                vue.createVNode("div", _hoisted_3, [
                  (_ctx.$slots.default)
                    ? vue.renderSlot(_ctx.$slots, "default", { key: 0 })
                    : (vue.openBlock(), vue.createBlock("p", {
                        key: 1,
                        class: "text",
                        innerHTML: _ctx.message
                      }, null, 8 /* PROPS */, ["innerHTML"]))
                ])
              ]))
            : vue.createCommentVNode("v-if", true)
        ], 2 /* CLASS */), [
          [vue.vShow, _ctx.isActive]
        ])
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["name"]))
  }

  script$1.render = render$1;
  script$1.__file = "src/components/notification/Notification.vue";

  var NoticeMixin = {
    props: {
      type: {
        type: String,
        default: 'is-dark'
      },
      message: [String, Array],
      duration: Number,
      queue: {
        type: Boolean,
        default: undefined
      },
      indefinite: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'is-top',
        validator: function validator(value) {
          return ['is-top-right', 'is-top', 'is-top-left', 'is-bottom-right', 'is-bottom', 'is-bottom-left'].indexOf(value) > -1;
        }
      },
      container: String
    },
    data: function data() {
      return {
        isActive: false,
        parentTop: null,
        parentBottom: null,
        newContainer: this.container || config.defaultContainerElement
      };
    },
    computed: {
      correctParent: function correctParent() {
        switch (this.position) {
          case 'is-top-right':
          case 'is-top':
          case 'is-top-left':
            return this.parentTop;

          case 'is-bottom-right':
          case 'is-bottom':
          case 'is-bottom-left':
            return this.parentBottom;
        }
      },
      transition: function transition() {
        switch (this.position) {
          case 'is-top-right':
          case 'is-top':
          case 'is-top-left':
            return {
              enter: 'fadeInDown',
              leave: 'fadeOut'
            };

          case 'is-bottom-right':
          case 'is-bottom':
          case 'is-bottom-left':
            return {
              enter: 'fadeInUp',
              leave: 'fadeOut'
            };
        }
      }
    },
    methods: {
      shouldQueue: function shouldQueue() {
        var queue = this.queue !== undefined ? this.queue : config.defaultNoticeQueue;
        if (!queue) return false;
        return this.parentTop.childElementCount > 0 || this.parentBottom.childElementCount > 0;
      },
      close: function close() {
        var _this = this;

        clearTimeout(this.timer);
        this.isActive = false;
        this.$emit('close'); // Timeout for the animation complete before destroying

        setTimeout(function () {
          _this.$destroy();

          removeElement(_this.$el);
        }, 150);
      },
      showNotice: function showNotice() {
        var _this2 = this;

        if (this.shouldQueue()) {
          // Call recursively if should queue
          setTimeout(function () {
            return _this2.showNotice();
          }, 250);
          return;
        }

        this.correctParent.insertAdjacentElement('afterbegin', this.$el);
        this.isActive = true;

        if (!this.indefinite) {
          this.timer = setTimeout(function () {
            return _this2.close();
          }, this.newDuration);
        }
      },
      setupContainer: function setupContainer() {
        this.parentTop = document.querySelector((this.newContainer ? this.newContainer : 'body') + '>.notices.is-top');
        this.parentBottom = document.querySelector((this.newContainer ? this.newContainer : 'body') + '>.notices.is-bottom');
        if (this.parentTop && this.parentBottom) return;

        if (!this.parentTop) {
          this.parentTop = document.createElement('div');
          this.parentTop.className = 'notices is-top';
        }

        if (!this.parentBottom) {
          this.parentBottom = document.createElement('div');
          this.parentBottom.className = 'notices is-bottom';
        }

        var container = document.querySelector(this.newContainer) || document.body;
        container.appendChild(this.parentTop);
        container.appendChild(this.parentBottom);

        if (this.newContainer) {
          this.parentTop.classList.add('has-custom-container');
          this.parentBottom.classList.add('has-custom-container');
        }
      }
    },
    beforeMount: function beforeMount() {
      this.setupContainer();
    },
    mounted: function mounted() {
      this.showNotice();
    }
  };

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
    const _component_b_notification = vue.resolveComponent("b-notification");

    return (vue.openBlock(), vue.createBlock(_component_b_notification, vue.mergeProps(_ctx.$options.propsData, { onClose: _ctx.close }), {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3 /* FORWARDED */
    }, 16 /* FULL_PROPS */, ["onClose"]))
  }

  script.render = render;
  script.__file = "src/components/notification/NotificationNotice.vue";

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
  var NotificationProgrammatic = {
    open: function open(params) {
      var parent;

      if (typeof params === 'string') {
        params = {
          message: params
        };
      }

      var defaultParam = {
        position: 'is-top-right'
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

  exports.BNotification = script$1;
  exports.NotificationProgrammatic = NotificationProgrammatic;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
