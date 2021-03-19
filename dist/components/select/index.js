/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Select = {}, global.Vue));
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
  function isVueComponent(c) {
    return c && c._isVue;
  }
  function getSlot(slots, name, props) {
    var value = slots[name];
    return typeof value === 'function' ? value(props) : value;
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

  var script$1 = {
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

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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

  script$1.render = render$1;
  script$1.__file = "src/components/icon/Icon.vue";

  var FormElementMixin = {
    props: {
      size: String,
      expanded: Boolean,
      loading: Boolean,
      rounded: Boolean,
      icon: String,
      iconPack: String,
      // Native options to use in HTML5 validation
      autocomplete: String,
      maxlength: [Number, String],
      useHtml5Validation: {
        type: Boolean,
        default: function _default() {
          return config.defaultUseHtml5Validation;
        }
      },
      validationMessage: String,
      locale: {
        type: [String, Array],
        default: function _default() {
          return config.defaultLocale;
        }
      },
      statusIcon: {
        type: Boolean,
        default: function _default() {
          return config.defaultStatusIcon;
        }
      }
    },
    data: function data() {
      return {
        isValid: true,
        isFocused: false,
        newIconPack: this.iconPack || config.defaultIconPack
      };
    },
    computed: {
      /**
       * Find parent Field, max 3 levels deep.
       */
      parentField: function parentField() {
        var parent = this.$parent;

        for (var i = 0; i < 3; i++) {
          if (parent && !parent.$data._isField) {
            parent = parent.$parent;
          }
        }

        return parent;
      },

      /**
       * Get the type prop from parent if it's a Field.
       */
      statusType: function statusType() {
        var _ref = this.parentField || {},
            newType = _ref.newType;

        if (!newType) return;

        if (typeof newType === 'string') {
          return newType;
        } else {
          for (var key in newType) {
            if (newType[key]) {
              return key;
            }
          }
        }
      },

      /**
       * Get the message prop from parent if it's a Field.
       */
      statusMessage: function statusMessage() {
        if (!this.parentField) return;
        return this.parentField.newMessage || getSlot(this.parentField.$slots, 'message');
      },

      /**
       * Fix icon size for inputs, large was too big
       */
      iconSize: function iconSize() {
        switch (this.size) {
          case 'is-small':
            return this.size;

          case 'is-medium':
            return;

          case 'is-large':
            return this.newIconPack === 'mdi' ? 'is-medium' : '';
        }
      }
    },
    methods: {
      /**
       * Focus method that work dynamically depending on the component.
       */
      focus: function focus() {
        var el = this.getElement();
        if (el === undefined) return;
        this.$nextTick(function () {
          if (el) el.focus();
        });
      },
      onBlur: function onBlur($event) {
        this.isFocused = false;
        this.$emit('blur', $event);
        this.checkHtml5Validity();
      },
      onFocus: function onFocus($event) {
        this.isFocused = true;
        this.$emit('focus', $event);
      },
      getElement: function getElement() {
        var el = this.$refs[this.$data._elementRef];

        while (isVueComponent(el)) {
          el = el.$refs[el.$data._elementRef];
        }

        return el;
      },
      setInvalid: function setInvalid() {
        var type = 'is-danger';
        var message = this.validationMessage || this.getElement().validationMessage;
        this.setValidity(type, message);
      },
      setValidity: function setValidity(type, message) {
        var _this = this;

        this.$nextTick(function () {
          if (_this.parentField) {
            // Set type only if not defined
            if (!_this.parentField.type) {
              _this.parentField.newType = type;
            } // Set message only if not defined


            if (!_this.parentField.message) {
              _this.parentField.newMessage = message;
            }
          }
        });
      },

      /**
       * Check HTML5 validation, set isValid property.
       * If validation fail, send 'is-danger' type,
       * and error message to parent if it's a Field.
       */
      checkHtml5Validity: function checkHtml5Validity() {
        if (!this.useHtml5Validation) return;
        var el = this.getElement();
        if (el === undefined) return;

        if (!el.checkValidity()) {
          this.setInvalid();
          this.isValid = false;
        } else {
          this.setValidity(null, null);
          this.isValid = true;
        }

        return this.isValid;
      }
    }
  };

  var script = {
    name: 'BSelect',
    components: _defineProperty({}, script$1.name, script$1),
    mixins: [FormElementMixin],
    inheritAttrs: false,
    props: {
      value: {
        type: [String, Number, Boolean, Object, Array, Function, Date],
        default: null
      },
      placeholder: String,
      multiple: Boolean,
      nativeSize: [String, Number]
    },
    data: function data() {
      return {
        selected: this.value,
        _elementRef: 'select'
      };
    },
    computed: {
      computedValue: {
        get: function get() {
          return this.selected;
        },
        set: function set(value) {
          this.selected = value;
          this.$emit('input', value);
          !this.isValid && this.checkHtml5Validity();
        }
      },
      spanClasses: function spanClasses() {
        return [this.size, this.statusType, {
          'is-fullwidth': this.expanded,
          'is-loading': this.loading,
          'is-multiple': this.multiple,
          'is-rounded': this.rounded,
          'is-empty': this.selected === null
        }];
      }
    },
    watch: {
      /**
      * When v-model is changed:
      *   1. Set the selected option.
      *   2. If it's invalid, validate again.
      */
      value: function value(_value) {
        this.selected = _value;
        !this.isValid && this.checkHtml5Validity();
      }
    }
  };

  const _hoisted_1 = {
    key: 0,
    value: null,
    disabled: "",
    hidden: ""
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_b_icon = vue.resolveComponent("b-icon");

    return (vue.openBlock(), vue.createBlock("div", {
      class: ["control", { 'is-expanded': _ctx.expanded, 'has-icons-left': _ctx.icon }]
    }, [
      vue.createVNode("span", {
        class: ["select", $options.spanClasses]
      }, [
        vue.withDirectives(vue.createVNode("select", vue.mergeProps({
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($options.computedValue = $event)),
          ref: "select",
          multiple: $props.multiple,
          size: $props.nativeSize
        }, _ctx.$attrs, {
          onBlur: _cache[2] || (_cache[2] = $event => (_ctx.$emit('blur', $event) && _ctx.checkHtml5Validity())),
          onFocus: _cache[3] || (_cache[3] = $event => (_ctx.$emit('focus', $event)))
        }), [
          ($props.placeholder)
            ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                ($options.computedValue == null)
                  ? (vue.openBlock(), vue.createBlock("option", _hoisted_1, vue.toDisplayString($props.placeholder), 1 /* TEXT */))
                  : vue.createCommentVNode("v-if", true)
              ], 64 /* STABLE_FRAGMENT */))
            : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "default")
        ], 16 /* FULL_PROPS */, ["multiple", "size"]), [
          [vue.vModelSelect, $options.computedValue]
        ])
      ], 2 /* CLASS */),
      (_ctx.icon)
        ? (vue.openBlock(), vue.createBlock(_component_b_icon, {
            key: 0,
            class: "is-left",
            icon: _ctx.icon,
            pack: _ctx.iconPack,
            size: _ctx.iconSize
          }, null, 8 /* PROPS */, ["icon", "pack", "size"]))
        : vue.createCommentVNode("v-if", true)
    ], 2 /* CLASS */))
  }

  script.render = render;
  script.__file = "src/components/select/Select.vue";

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

  exports.BSelect = script;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
