/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Taginput = {}, global.Vue));
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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
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

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /**
   * Get value of an object property/path even if it's nested
   */

  function getValueByPath(obj, path) {
    return path.split('.').reduce(function (o, i) {
      return o ? o[i] : null;
    }, obj);
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
  function isVueComponent(c) {
    return c && c._isVue;
  }
  function toCssWidth(width) {
    return width === undefined ? null : isNaN(width) ? width : width + 'px';
  }
  function isCustomElement(vm) {
    return 'shadowRoot' in vm.$root.$options;
  }
  function getSlot(slots, name, props) {
    var value = slots[name];
    return typeof value === 'function' ? value(props) : value;
  }

  var script$4 = {
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

  const _hoisted_1$2 = {
    key: 0,
    class: "tags has-addons"
  };
  const _hoisted_2$1 = /*#__PURE__*/vue.createVNode("a", null, null, -1 /* HOISTED */);

  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_b_icon = vue.resolveComponent("b-icon");

    return ($props.attached && $props.closable)
      ? (vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [
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
            _hoisted_2$1
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

  script$4.render = render$4;
  script$4.__file = "src/components/tag/Tag.vue";

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

  var script$3 = {
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

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
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

  script$3.render = render$3;
  script$3.__file = "src/components/icon/Icon.vue";

  var script$2 = {
    name: 'BInput',
    components: _defineProperty({}, script$3.name, script$3),
    mixins: [FormElementMixin],
    inheritAttrs: false,
    props: {
      value: [Number, String],
      type: {
        type: String,
        default: 'text'
      },
      lazy: {
        type: Boolean,
        default: false
      },
      passwordReveal: Boolean,
      iconClickable: Boolean,
      hasCounter: {
        type: Boolean,
        default: function _default() {
          return config.defaultInputHasCounter;
        }
      },
      customClass: {
        type: String,
        default: ''
      },
      iconRight: String,
      iconRightClickable: Boolean,
      iconRightType: String
    },
    data: function data() {
      return {
        newValue: this.value,
        newType: this.type,
        newAutocomplete: this.autocomplete || config.defaultInputAutocomplete,
        isPasswordVisible: false,
        _elementRef: this.type === 'textarea' ? 'textarea' : 'input'
      };
    },
    computed: {
      computedValue: {
        get: function get() {
          return this.newValue;
        },
        set: function set(value) {
          this.newValue = value;
          this.$emit('input', value);
        }
      },
      rootClasses: function rootClasses() {
        return [this.iconPosition, this.size, {
          'is-expanded': this.expanded,
          'is-loading': this.loading,
          'is-clearfix': !this.hasMessage
        }];
      },
      inputClasses: function inputClasses() {
        return [this.statusType, this.size, {
          'is-rounded': this.rounded
        }];
      },
      hasIconRight: function hasIconRight() {
        return this.passwordReveal || this.loading || this.statusIcon && this.statusTypeIcon || this.iconRight;
      },
      rightIcon: function rightIcon() {
        if (this.passwordReveal) {
          return this.passwordVisibleIcon;
        } else if (this.iconRight) {
          return this.iconRight;
        }

        return this.statusTypeIcon;
      },
      rightIconType: function rightIconType() {
        if (this.passwordReveal) {
          return 'is-primary';
        } else if (this.iconRight) {
          return this.iconRightType || null;
        }

        return this.statusType;
      },

      /**
      * Position of the icon or if it's both sides.
      */
      iconPosition: function iconPosition() {
        var iconClasses = '';

        if (this.icon) {
          iconClasses += 'has-icons-left ';
        }

        if (this.hasIconRight) {
          iconClasses += 'has-icons-right';
        }

        return iconClasses;
      },

      /**
      * Icon name (MDI) based on the type.
      */
      statusTypeIcon: function statusTypeIcon() {
        switch (this.statusType) {
          case 'is-success':
            return 'check';

          case 'is-danger':
            return 'alert-circle';

          case 'is-info':
            return 'information';

          case 'is-warning':
            return 'alert';
        }
      },

      /**
      * Check if have any message prop from parent if it's a Field.
      */
      hasMessage: function hasMessage() {
        return !!this.statusMessage;
      },

      /**
      * Current password-reveal icon name.
      */
      passwordVisibleIcon: function passwordVisibleIcon() {
        return !this.isPasswordVisible ? 'eye' : 'eye-off';
      },

      /**
      * Get value length
      */
      valueLength: function valueLength() {
        if (typeof this.computedValue === 'string') {
          return this.computedValue.length;
        } else if (typeof this.computedValue === 'number') {
          return this.computedValue.toString().length;
        }

        return 0;
      }
    },
    watch: {
      /**
      * When v-model is changed:
      *   1. Set internal value.
      */
      value: function value(_value) {
        this.newValue = _value;
      }
    },
    methods: {
      /**
      * Toggle the visibility of a password-reveal input
      * by changing the type and focus the input right away.
      */
      togglePasswordVisibility: function togglePasswordVisibility() {
        var _this = this;

        this.isPasswordVisible = !this.isPasswordVisible;
        this.newType = this.isPasswordVisible ? 'text' : 'password';
        this.$nextTick(function () {
          _this.focus();
        });
      },
      iconClick: function iconClick(emit, event) {
        var _this2 = this;

        this.$emit(emit, event);
        this.$nextTick(function () {
          _this2.focus();
        });
      },
      rightIconClick: function rightIconClick(event) {
        if (this.passwordReveal) {
          this.togglePasswordVisibility();
        } else if (this.iconRightClickable) {
          this.iconClick('icon-right-click', event);
        }
      },
      onInput: function onInput(event) {
        if (!this.lazy) {
          var value = event.target.value;
          this.updateValue(value);
        }
      },
      onChange: function onChange(event) {
        if (this.lazy) {
          var value = event.target.value;
          this.updateValue(value);
        }
      },
      updateValue: function updateValue(value) {
        this.computedValue = value;
        !this.isValid && this.checkHtml5Validity();
      }
    }
  };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_b_icon = vue.resolveComponent("b-icon");

    return (vue.openBlock(), vue.createBlock("div", {
      class: ["control", $options.rootClasses]
    }, [
      ($props.type !== 'textarea')
        ? (vue.openBlock(), vue.createBlock("input", vue.mergeProps({
            key: 0,
            ref: "input",
            class: ["input", [$options.inputClasses, $props.customClass]],
            type: $data.newType,
            autocomplete: $data.newAutocomplete,
            maxlength: _ctx.maxlength,
            value: $options.computedValue
          }, _ctx.$attrs, {
            onInput: _cache[1] || (_cache[1] = (...args) => ($options.onInput && $options.onInput(...args))),
            onChange: _cache[2] || (_cache[2] = (...args) => ($options.onChange && $options.onChange(...args))),
            onBlur: _cache[3] || (_cache[3] = (...args) => (_ctx.onBlur && _ctx.onBlur(...args))),
            onFocus: _cache[4] || (_cache[4] = (...args) => (_ctx.onFocus && _ctx.onFocus(...args)))
          }), null, 16 /* FULL_PROPS */, ["type", "autocomplete", "maxlength", "value"]))
        : (vue.openBlock(), vue.createBlock("textarea", vue.mergeProps({
            key: 1,
            ref: "textarea",
            class: ["textarea", [$options.inputClasses, $props.customClass]],
            maxlength: _ctx.maxlength,
            value: $options.computedValue
          }, _ctx.$attrs, {
            onInput: _cache[5] || (_cache[5] = (...args) => ($options.onInput && $options.onInput(...args))),
            onChange: _cache[6] || (_cache[6] = (...args) => ($options.onChange && $options.onChange(...args))),
            onBlur: _cache[7] || (_cache[7] = (...args) => (_ctx.onBlur && _ctx.onBlur(...args))),
            onFocus: _cache[8] || (_cache[8] = (...args) => (_ctx.onFocus && _ctx.onFocus(...args)))
          }), null, 16 /* FULL_PROPS */, ["maxlength", "value"])),
      (_ctx.icon)
        ? (vue.openBlock(), vue.createBlock(_component_b_icon, {
            key: 2,
            class: ["is-left", {'is-clickable': $props.iconClickable}],
            icon: _ctx.icon,
            pack: _ctx.iconPack,
            size: _ctx.iconSize,
            onClick: _cache[9] || (_cache[9] = $event => ($options.iconClick('icon-click', $event)))
          }, null, 8 /* PROPS */, ["class", "icon", "pack", "size"]))
        : vue.createCommentVNode("v-if", true),
      (!_ctx.loading && $options.hasIconRight)
        ? (vue.openBlock(), vue.createBlock(_component_b_icon, {
            key: 3,
            class: ["is-right", { 'is-clickable': $props.passwordReveal || $props.iconRightClickable }],
            icon: $options.rightIcon,
            pack: _ctx.iconPack,
            size: _ctx.iconSize,
            type: $options.rightIconType,
            both: "",
            onClick: $options.rightIconClick
          }, null, 8 /* PROPS */, ["class", "icon", "pack", "size", "type", "onClick"]))
        : vue.createCommentVNode("v-if", true),
      (_ctx.maxlength && $props.hasCounter && $props.type !== 'number')
        ? (vue.openBlock(), vue.createBlock("small", {
            key: 4,
            class: ["help counter", { 'is-invisible': !_ctx.isFocused }]
          }, vue.toDisplayString($options.valueLength) + " / " + vue.toDisplayString(_ctx.maxlength), 3 /* TEXT, CLASS */))
        : vue.createCommentVNode("v-if", true)
    ], 2 /* CLASS */))
  }

  script$2.render = render$2;
  script$2.__file = "src/components/input/Input.vue";

  var script$1 = {
    name: 'BAutocomplete',
    components: _defineProperty({}, script$2.name, script$2),
    mixins: [FormElementMixin],
    inheritAttrs: false,
    props: {
      value: [Number, String],
      data: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      field: {
        type: String,
        default: 'value'
      },
      keepFirst: Boolean,
      clearOnSelect: Boolean,
      openOnFocus: Boolean,
      customFormatter: Function,
      checkInfiniteScroll: Boolean,
      keepOpen: Boolean,
      clearable: Boolean,
      maxHeight: [String, Number],
      dropdownPosition: {
        type: String,
        default: 'auto'
      },
      groupField: String,
      groupOptions: String,
      iconRight: String,
      iconRightClickable: Boolean,
      appendToBody: Boolean,
      confirmKeys: {
        type: Array,
        default: function _default() {
          return ['Tab', 'Enter'];
        }
      }
    },
    data: function data() {
      return {
        selected: null,
        hovered: null,
        isActive: false,
        newValue: this.value,
        newAutocomplete: this.autocomplete || 'off',
        isListInViewportVertically: true,
        hasFocus: false,
        style: {},
        _isAutocomplete: true,
        _elementRef: 'input',
        _bodyEl: undefined // Used to append to body

      };
    },
    computed: {
      computedData: function computedData() {
        var _this = this;

        if (this.groupField) {
          if (this.groupOptions) {
            var newData = [];
            this.data.forEach(function (option) {
              var group = getValueByPath(option, _this.groupField);
              var items = getValueByPath(option, _this.groupOptions);
              newData.push({
                group: group,
                items: items
              });
            });
            return newData;
          } else {
            var tmp = {};
            this.data.forEach(function (option) {
              var group = getValueByPath(option, _this.groupField);
              if (!tmp[group]) tmp[group] = [];
              tmp[group].push(option);
            });
            var _newData = [];
            Object.keys(tmp).forEach(function (group) {
              _newData.push({
                group: group,
                items: tmp[group]
              });
            });
            return _newData;
          }
        }

        return [{
          items: this.data
        }];
      },
      isEmpty: function isEmpty() {
        if (!this.computedData) return true;
        return !this.computedData.some(function (element) {
          return element.items && element.items.length;
        });
      },

      /**
       * White-listed items to not close when clicked.
       * Add input, dropdown and all children.
       */
      whiteList: function whiteList() {
        var whiteList = [];
        whiteList.push(this.$refs.input.$el.querySelector('input'));
        whiteList.push(this.$refs.dropdown); // Add all children from dropdown

        if (this.$refs.dropdown !== undefined) {
          var children = this.$refs.dropdown.querySelectorAll('*');
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

        if (this.$parent.$data._isTaginput) {
          // Add taginput container
          whiteList.push(this.$parent.$el); // Add .tag and .delete

          var tagInputChildren = this.$parent.$el.querySelectorAll('*');
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = tagInputChildren[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var tagInputChild = _step2.value;
              whiteList.push(tagInputChild);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }

        return whiteList;
      },

      /**
       * Check if exists default slot
       */
      hasDefaultSlot: function hasDefaultSlot() {
        return !!this.$scopedSlots.default;
      },

      /**
       * Check if exists group slot
       */
      hasGroupSlot: function hasGroupSlot() {
        return !!this.$scopedSlots.group;
      },

      /**
       * Check if exists "empty" slot
       */
      hasEmptySlot: function hasEmptySlot() {
        return !!getSlot(this.$slots, 'empty');
      },

      /**
       * Check if exists "header" slot
       */
      hasHeaderSlot: function hasHeaderSlot() {
        return !!getSlot(this.$slots, 'header');
      },

      /**
       * Check if exists "footer" slot
       */
      hasFooterSlot: function hasFooterSlot() {
        return !!getSlot(this.$slots, 'footer');
      },

      /**
       * Apply dropdownPosition property
       */
      isOpenedTop: function isOpenedTop() {
        return this.dropdownPosition === 'top' || this.dropdownPosition === 'auto' && !this.isListInViewportVertically;
      },
      newIconRight: function newIconRight() {
        if (this.clearable && this.newValue) {
          return 'close-circle';
        }

        return this.iconRight;
      },
      newIconRightClickable: function newIconRightClickable() {
        if (this.clearable) {
          return true;
        }

        return this.iconRightClickable;
      },
      contentStyle: function contentStyle() {
        return {
          maxHeight: toCssWidth(this.maxHeight)
        };
      }
    },
    watch: {
      /**
       * When dropdown is toggled, check the visibility to know when
       * to open upwards.
       */
      isActive: function isActive(active) {
        var _this2 = this;

        if (this.dropdownPosition === 'auto') {
          if (active) {
            this.calcDropdownInViewportVertical();
          } else {
            // Timeout to wait for the animation to finish before recalculating
            setTimeout(function () {
              _this2.calcDropdownInViewportVertical();
            }, 100);
          }
        }
      },

      /**
       * When updating input's value
       *   1. Emit changes
       *   2. If value isn't the same as selected, set null
       *   3. Close dropdown if value is clear or else open it
       */
      newValue: function newValue(value) {
        this.$emit('input', value); // Check if selected is invalid

        var currentValue = this.getValue(this.selected);

        if (currentValue && currentValue !== value) {
          this.setSelected(null, false);
        } // Close dropdown if input is clear or else open it


        if (this.hasFocus && (!this.openOnFocus || value)) {
          this.isActive = !!value;
        }
      },

      /**
       * When v-model is changed:
       *   1. Update internal value.
       *   2. If it's invalid, validate again.
       */
      value: function value(_value) {
        this.newValue = _value;
      },

      /**
       * Select first option if "keep-first
       */
      data: function data(value) {
        var _this3 = this;

        // Keep first option always pre-selected
        if (this.keepFirst) {
          this.$nextTick(function () {
            if (_this3.isActive) {
              _this3.selectFirstOption(_this3.computedData);
            }
          });
        }
      }
    },
    methods: {
      /**
       * Set which option is currently hovered.
       */
      setHovered: function setHovered(option) {
        if (option === undefined) return;
        this.hovered = option;
      },

      /**
       * Set which option is currently selected, update v-model,
       * update input value and close dropdown.
       */
      setSelected: function setSelected(option) {
        var _this4 = this;

        var closeDropdown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        if (option === undefined) return;
        this.selected = option;
        this.$emit('select', this.selected, event);

        if (this.selected !== null) {
          this.newValue = this.clearOnSelect ? '' : this.getValue(this.selected);
          this.setHovered(null);
        }

        closeDropdown && this.$nextTick(function () {
          _this4.isActive = false;
        });
        this.checkValidity();
      },

      /**
       * Select first option
       */
      selectFirstOption: function selectFirstOption(element) {
        var _this5 = this;

        this.$nextTick(function () {
          if (element.length) {
            // If has visible data or open on focus, keep updating the hovered
            var option = element[0].items[0];

            if (_this5.openOnFocus || _this5.newValue !== '' && _this5.hovered !== option) {
              _this5.setHovered(option);
            }
          } else {
            _this5.setHovered(null);
          }
        });
      },
      keydown: function keydown(event) {
        var key = event.key; // cannot destructure preventDefault (https://stackoverflow.com/a/49616808/2774496)
        // Close dropdown on Tab & no hovered

        this.isActive = key !== 'Tab';
        if (this.hovered === null) return;

        if (this.confirmKeys.indexOf(key) >= 0) {
          // If adding by comma, don't add the comma to the input
          if (key === ',') event.preventDefault(); // Close dropdown on select by Tab

          var closeDropdown = !this.keepOpen || key === 'Tab';
          this.setSelected(this.hovered, closeDropdown, event);
        }
      },

      /**
       * Close dropdown if clicked outside.
       */
      clickedOutside: function clickedOutside(event) {
        var target = isCustomElement(this) ? event.composedPath()[0] : event.target;

        if (!this.hasFocus && this.whiteList.indexOf(target) < 0) {
          if (this.keepFirst && this.hovered) {
            this.setSelected(this.hovered, true);
          } else {
            this.isActive = false;
          }
        }
      },

      /**
       * Return display text for the input.
       * If object, get value from path, or else just the value.
       */
      getValue: function getValue(option) {
        if (option === null) return;

        if (typeof this.customFormatter !== 'undefined') {
          return this.customFormatter(option);
        }

        return _typeof(option) === 'object' ? getValueByPath(option, this.field) : option;
      },

      /**
       * Check if the scroll list inside the dropdown
       * reached it's end.
       */
      checkIfReachedTheEndOfScroll: function checkIfReachedTheEndOfScroll(list) {
        if (list.clientHeight !== list.scrollHeight && list.scrollTop + list.clientHeight >= list.scrollHeight) {
          this.$emit('infinite-scroll');
        }
      },

      /**
       * Calculate if the dropdown is vertically visible when activated,
       * otherwise it is openened upwards.
       */
      calcDropdownInViewportVertical: function calcDropdownInViewportVertical() {
        var _this6 = this;

        this.$nextTick(function () {
          /**
           * this.$refs.dropdown may be undefined
           * when Autocomplete is conditional rendered
           */
          if (_this6.$refs.dropdown === undefined) return;

          var rect = _this6.$refs.dropdown.getBoundingClientRect();

          _this6.isListInViewportVertically = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

          if (_this6.appendToBody) {
            _this6.updateAppendToBody();
          }
        });
      },

      /**
       * Arrows keys listener.
       * If dropdown is active, set hovered option, or else just open.
       */
      keyArrows: function keyArrows(direction) {
        var sum = direction === 'down' ? 1 : -1;

        if (this.isActive) {
          var data = this.computedData.map(function (d) {
            return d.items;
          }).reduce(function (a, b) {
            return [].concat(_toConsumableArray(a), _toConsumableArray(b));
          }, []);
          var index = data.indexOf(this.hovered) + sum;
          index = index > data.length - 1 ? data.length - 1 : index;
          index = index < 0 ? 0 : index;
          this.setHovered(data[index]);
          var list = this.$refs.dropdown.querySelector('.dropdown-content');
          var element = list.querySelectorAll('a.dropdown-item:not(.is-disabled)')[index];
          if (!element) return;
          var visMin = list.scrollTop;
          var visMax = list.scrollTop + list.clientHeight - element.clientHeight;

          if (element.offsetTop < visMin) {
            list.scrollTop = element.offsetTop;
          } else if (element.offsetTop >= visMax) {
            list.scrollTop = element.offsetTop - list.clientHeight + element.clientHeight;
          }
        } else {
          this.isActive = true;
        }
      },

      /**
       * Focus listener.
       * If value is the same as selected, select all text.
       */
      focused: function focused(event) {
        if (this.getValue(this.selected) === this.newValue) {
          this.$el.querySelector('input').select();
        }

        if (this.openOnFocus) {
          this.isActive = true;

          if (this.keepFirst) {
            this.selectFirstOption(this.computedData);
          }
        }

        this.hasFocus = true;
        this.$emit('focus', event);
      },

      /**
       * Blur listener.
       */
      onBlur: function onBlur(event) {
        this.hasFocus = false;
        this.$emit('blur', event);
      },
      onInput: function onInput(event) {
        var currentValue = this.getValue(this.selected);
        if (currentValue && currentValue === this.newValue) return;
        this.$emit('typing', this.newValue);
        this.checkValidity();
      },
      rightIconClick: function rightIconClick(event) {
        if (this.clearable) {
          this.newValue = '';
          this.setSelected(null, false);

          if (this.openOnFocus) {
            this.$refs.input.$el.focus();
          }
        } else {
          this.$emit('icon-right-click', event);
        }
      },
      checkValidity: function checkValidity() {
        var _this7 = this;

        if (this.useHtml5Validation) {
          this.$nextTick(function () {
            _this7.checkHtml5Validity();
          });
        }
      },
      updateAppendToBody: function updateAppendToBody() {
        var dropdownMenu = this.$refs.dropdown;
        var trigger = this.$refs.input.$el;

        if (dropdownMenu && trigger) {
          // update wrapper dropdown
          var root = this.$data._bodyEl;
          root.classList.forEach(function (item) {
            return root.classList.remove(item);
          });
          root.classList.add('autocomplete');
          root.classList.add('control');

          if (this.expandend) {
            root.classList.add('is-expandend');
          }

          var rect = trigger.getBoundingClientRect();
          var top = rect.top + window.scrollY;
          var left = rect.left + window.scrollX;

          if (!this.isOpenedTop) {
            top += trigger.clientHeight;
          } else {
            top -= dropdownMenu.clientHeight;
          }

          this.style = {
            position: 'absolute',
            top: "".concat(top, "px"),
            left: "".concat(left, "px"),
            width: "".concat(trigger.clientWidth, "px"),
            maxWidth: "".concat(trigger.clientWidth, "px"),
            zIndex: '99'
          };
        }
      }
    },
    created: function created() {
      if (typeof window !== 'undefined') {
        document.addEventListener('click', this.clickedOutside);

        if (this.dropdownPosition === 'auto') {
          window.addEventListener('resize', this.calcDropdownInViewportVertical);
        }
      }
    },
    mounted: function mounted() {
      var _this8 = this;

      if (this.checkInfiniteScroll && this.$refs.dropdown && this.$refs.dropdown.querySelector('.dropdown-content')) {
        var list = this.$refs.dropdown.querySelector('.dropdown-content');
        list.addEventListener('scroll', function () {
          return _this8.checkIfReachedTheEndOfScroll(list);
        });
      }

      if (this.appendToBody) {
        this.$data._bodyEl = createAbsoluteElement(this.$refs.dropdown);
        this.updateAppendToBody();
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (typeof window !== 'undefined') {
        document.removeEventListener('click', this.clickedOutside);

        if (this.dropdownPosition === 'auto') {
          window.removeEventListener('resize', this.calcDropdownInViewportVertical);
        }
      }

      if (this.checkInfiniteScroll && this.$refs.dropdown && this.$refs.dropdown.querySelector('.dropdown-content')) {
        var list = this.$refs.dropdown.querySelector('.dropdown-content');
        list.removeEventListener('scroll', this.checkIfReachedTheEndOfScroll);
      }

      if (this.appendToBody) {
        removeElement(this.$data._bodyEl);
      }
    }
  };

  const _hoisted_1$1 = {
    key: 0,
    class: "dropdown-item"
  };
  const _hoisted_2 = {
    key: 1,
    class: "has-text-weight-bold"
  };
  const _hoisted_3 = { key: 1 };
  const _hoisted_4 = {
    key: 1,
    class: "dropdown-item is-disabled"
  };
  const _hoisted_5 = {
    key: 2,
    class: "dropdown-item"
  };

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_b_input = vue.resolveComponent("b-input");

    return (vue.openBlock(), vue.createBlock("div", {
      class: ["autocomplete control", { 'is-expanded': _ctx.expanded }]
    }, [
      vue.createVNode(_component_b_input, vue.mergeProps({
        modelValue: $data.newValue,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.newValue = $event)),
        ref: "input",
        type: "text",
        size: _ctx.size,
        loading: _ctx.loading,
        rounded: _ctx.rounded,
        icon: _ctx.icon,
        "icon-right": $options.newIconRight,
        "icon-right-clickable": $options.newIconRightClickable,
        "icon-pack": _ctx.iconPack,
        maxlength: _ctx.maxlength,
        autocomplete: $data.newAutocomplete,
        "use-html5-validation": false
      }, _ctx.$attrs, {
        onInput: $options.onInput,
        onFocus: $options.focused,
        onBlur: $options.onBlur,
        onKeyup: _cache[2] || (_cache[2] = vue.withKeys(vue.withModifiers($event => ($data.isActive = false), ["prevent"]), ["native","esc"])),
        onKeydown: [
          vue.withKeys($options.keydown, ["native"]),
          _cache[3] || (_cache[3] = vue.withKeys(vue.withModifiers($event => ($options.keyArrows('up')), ["prevent"]), ["native","up"])),
          _cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers($event => ($options.keyArrows('down')), ["prevent"]), ["native","down"]))
        ],
        onIconRightClick: $options.rightIconClick,
        onIconClick: _cache[5] || (_cache[5] = (event) => _ctx.$emit('icon-click', event))
      }), null, 16 /* FULL_PROPS */, ["modelValue", "size", "loading", "rounded", "icon", "icon-right", "icon-right-clickable", "icon-pack", "maxlength", "autocomplete", "onInput", "onFocus", "onBlur", "onKeydown", "onIconRightClick"]),
      vue.createVNode(vue.Transition, { name: "fade" }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createVNode("div", {
            class: ["dropdown-menu", { 'is-opened-top': $options.isOpenedTop && !$props.appendToBody }],
            style: $data.style,
            ref: "dropdown"
          }, [
            vue.withDirectives(vue.createVNode("div", {
              class: "dropdown-content",
              style: $options.contentStyle
            }, [
              ($options.hasHeaderSlot)
                ? (vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [
                    vue.renderSlot(_ctx.$slots, "header")
                  ]))
                : vue.createCommentVNode("v-if", true),
              (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.computedData, (element, groupindex) => {
                return (vue.openBlock(), vue.createBlock(vue.Fragment, null, [
                  (element.group)
                    ? (vue.openBlock(), vue.createBlock("div", {
                        key: groupindex + 'group',
                        class: "dropdown-item"
                      }, [
                        ($options.hasGroupSlot)
                          ? vue.renderSlot(_ctx.$slots, "group", {
                              key: 0,
                              group: element.group,
                              index: groupindex
                            })
                          : (vue.openBlock(), vue.createBlock("span", _hoisted_2, vue.toDisplayString(element.group), 1 /* TEXT */))
                      ]))
                    : vue.createCommentVNode("v-if", true),
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(element.items, (option, index) => {
                    return (vue.openBlock(), vue.createBlock("a", {
                      key: groupindex + ':' + index,
                      class: ["dropdown-item", { 'is-hovered': option === $data.hovered }],
                      onClick: $event => ($options.setSelected(option, undefined, $event))
                    }, [
                      ($options.hasDefaultSlot)
                        ? vue.renderSlot(_ctx.$slots, "default", {
                            key: 0,
                            option: option,
                            index: index
                          })
                        : (vue.openBlock(), vue.createBlock("span", _hoisted_3, vue.toDisplayString($options.getValue(option, true)), 1 /* TEXT */))
                    ], 10 /* CLASS, PROPS */, ["onClick"]))
                  }), 128 /* KEYED_FRAGMENT */))
                ], 64 /* STABLE_FRAGMENT */))
              }), 256 /* UNKEYED_FRAGMENT */)),
              ($options.isEmpty && $options.hasEmptySlot)
                ? (vue.openBlock(), vue.createBlock("div", _hoisted_4, [
                    vue.renderSlot(_ctx.$slots, "empty")
                  ]))
                : vue.createCommentVNode("v-if", true),
              ($options.hasFooterSlot)
                ? (vue.openBlock(), vue.createBlock("div", _hoisted_5, [
                    vue.renderSlot(_ctx.$slots, "footer")
                  ]))
                : vue.createCommentVNode("v-if", true)
            ], 4 /* STYLE */), [
              [vue.vShow, $data.isActive]
            ])
          ], 6 /* CLASS, STYLE */), [
            [vue.vShow, $data.isActive && (!$options.isEmpty || $options.hasEmptySlot || $options.hasHeaderSlot)]
          ])
        ]),
        _: 1 /* STABLE */
      })
    ], 2 /* CLASS */))
  }

  script$1.render = render$1;
  script$1.__file = "src/components/autocomplete/Autocomplete.vue";

  var _components;
  var script = {
    name: 'BTaginput',
    components: (_components = {}, _defineProperty(_components, script$1.name, script$1), _defineProperty(_components, script$4.name, script$4), _components),
    mixins: [FormElementMixin],
    inheritAttrs: false,
    props: {
      value: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      data: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      type: String,
      closeType: String,
      rounded: {
        type: Boolean,
        default: false
      },
      attached: {
        type: Boolean,
        default: false
      },
      maxtags: {
        type: [Number, String],
        required: false
      },
      hasCounter: {
        type: Boolean,
        default: function _default() {
          return config.defaultTaginputHasCounter;
        }
      },
      field: {
        type: String,
        default: 'value'
      },
      autocomplete: Boolean,
      groupField: String,
      groupOptions: String,
      nativeAutocomplete: String,
      openOnFocus: Boolean,
      disabled: Boolean,
      ellipsis: Boolean,
      closable: {
        type: Boolean,
        default: true
      },
      ariaCloseLabel: String,
      confirmKeys: {
        type: Array,
        default: function _default() {
          return [',', 'Tab', 'Enter'];
        }
      },
      removeOnKeys: {
        type: Array,
        default: function _default() {
          return ['Backspace'];
        }
      },
      allowNew: Boolean,
      onPasteSeparators: {
        type: Array,
        default: function _default() {
          return [','];
        }
      },
      beforeAdding: {
        type: Function,
        default: function _default() {
          return true;
        }
      },
      allowDuplicates: {
        type: Boolean,
        default: false
      },
      checkInfiniteScroll: {
        type: Boolean,
        default: false
      },
      createTag: {
        type: Function,
        default: function _default(tag) {
          return tag;
        }
      },
      appendToBody: Boolean
    },
    data: function data() {
      return {
        tags: Array.isArray(this.value) ? this.value.slice(0) : this.value || [],
        newTag: '',
        isComposing: false,
        _elementRef: 'autocomplete',
        _isTaginput: true
      };
    },
    computed: {
      rootClasses: function rootClasses() {
        return {
          'is-expanded': this.expanded
        };
      },
      containerClasses: function containerClasses() {
        return {
          'is-focused': this.isFocused,
          'is-focusable': this.hasInput
        };
      },
      valueLength: function valueLength() {
        return this.newTag.trim().length;
      },
      hasDefaultSlot: function hasDefaultSlot() {
        return !!(this.$scopedSlots || this.$slots).default;
      },
      hasEmptySlot: function hasEmptySlot() {
        return !!getSlot(this.$slots, 'empty');
      },
      hasHeaderSlot: function hasHeaderSlot() {
        return !!getSlot(this.$slots, 'header');
      },
      hasFooterSlot: function hasFooterSlot() {
        return !!getSlot(this.$slots, 'footer');
      },

      /**
       * Show the input field if a maxtags hasn't been set or reached.
       */
      hasInput: function hasInput() {
        return this.maxtags == null || this.tagsLength < this.maxtags;
      },
      tagsLength: function tagsLength() {
        return this.tags.length;
      },

      /**
       * If Taginput has onPasteSeparators prop,
       * returning new RegExp used to split pasted string.
       */
      separatorsAsRegExp: function separatorsAsRegExp() {
        var sep = this.onPasteSeparators;
        return sep.length ? new RegExp(sep.map(function (s) {
          return s ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') : null;
        }).join('|'), 'g') : null;
      }
    },
    watch: {
      /**
       * When v-model is changed set internal value.
       */
      value: function value(_value) {
        this.tags = Array.isArray(_value) ? _value.slice(0) : _value || [];
      },
      hasInput: function hasInput() {
        if (!this.hasInput) this.onBlur();
      }
    },
    methods: {
      addTag: function addTag(tag) {
        var tagToAdd = tag || this.newTag.trim();

        if (tagToAdd) {
          if (!this.autocomplete) {
            var reg = this.separatorsAsRegExp;

            if (reg && tagToAdd.match(reg)) {
              tagToAdd.split(reg).map(function (t) {
                return t.trim();
              }).filter(function (t) {
                return t.length !== 0;
              }).map(this.addTag);
              return;
            }
          } // Add the tag input if it is not blank
          // or previously added (if not allowDuplicates).


          var add = !this.allowDuplicates ? this.tags.indexOf(tagToAdd) === -1 : true;

          if (add && this.beforeAdding(tagToAdd)) {
            this.tags.push(this.createTag(tagToAdd));
            this.$emit('input', this.tags);
            this.$emit('add', tagToAdd);
          }
        }

        this.newTag = '';
      },
      getNormalizedTagText: function getNormalizedTagText(tag) {
        if (_typeof(tag) === 'object') {
          tag = getValueByPath(tag, this.field);
        }

        return "".concat(tag);
      },
      customOnBlur: function customOnBlur(event) {
        // Add tag on-blur if not select only
        if (!this.autocomplete) this.addTag();
        this.onBlur(event);
      },
      onSelect: function onSelect(option) {
        var _this = this;

        if (!option) return;
        this.addTag(option);
        this.$nextTick(function () {
          _this.newTag = '';
        });
      },
      removeTag: function removeTag(index, event) {
        var tag = this.tags.splice(index, 1)[0];
        this.$emit('input', this.tags);
        this.$emit('remove', tag);
        if (event) event.stopPropagation();

        if (this.openOnFocus && this.$refs.autocomplete) {
          this.$refs.autocomplete.focus();
        }

        return tag;
      },
      removeLastTag: function removeLastTag() {
        if (this.tagsLength > 0) {
          this.removeTag(this.tagsLength - 1);
        }
      },
      keydown: function keydown(event) {
        var key = event.key; // cannot destructure preventDefault (https://stackoverflow.com/a/49616808/2774496)

        if (this.removeOnKeys.indexOf(key) !== -1 && !this.newTag.length) {
          this.removeLastTag();
        } // Stop if is to accept select only


        if (this.autocomplete && !this.allowNew) return;

        if (this.confirmKeys.indexOf(key) >= 0) {
          // Allow Tab to advance to next field regardless
          if (key !== 'Tab') event.preventDefault();
          if (key === 'Enter' && this.isComposing) return;
          this.addTag();
        }
      },
      onTyping: function onTyping(event) {
        this.$emit('typing', event.trim());
      },
      emitInfiniteScroll: function emitInfiniteScroll() {
        this.$emit('infinite-scroll');
      }
    }
  };

  const _hoisted_1 = {
    key: 0,
    class: "help counter"
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_b_tag = vue.resolveComponent("b-tag");
    const _component_b_autocomplete = vue.resolveComponent("b-autocomplete");

    return (vue.openBlock(), vue.createBlock("div", {
      class: ["taginput control", $options.rootClasses]
    }, [
      vue.createVNode("div", {
        class: ["taginput-container", [_ctx.statusType, _ctx.size, $options.containerClasses]],
        disabled: $props.disabled ? '' : null,
        onClick: _cache[4] || (_cache[4] = $event => ($options.hasInput && _ctx.focus($event)))
      }, [
        vue.renderSlot(_ctx.$slots, "selected", { tags: $data.tags }, () => [
          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($data.tags, (tag, index) => {
            return (vue.openBlock(), vue.createBlock(_component_b_tag, {
              key: $options.getNormalizedTagText(tag) + index,
              type: $props.type,
              "close-type": $props.closeType,
              size: _ctx.size,
              rounded: $props.rounded,
              attached: $props.attached,
              tabstop: false,
              disabled: $props.disabled,
              ellipsis: $props.ellipsis,
              closable: $props.closable,
              "aria-close-label": $props.ariaCloseLabel,
              title: $props.ellipsis && $options.getNormalizedTagText(tag),
              onClose: $event => ($options.removeTag(index, $event))
            }, {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "tag", { tag: tag }, () => [
                  vue.createTextVNode(vue.toDisplayString($options.getNormalizedTagText(tag)), 1 /* TEXT */)
                ])
              ]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["type", "close-type", "size", "rounded", "attached", "disabled", "ellipsis", "closable", "aria-close-label", "title", "onClose"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        ($options.hasInput)
          ? (vue.openBlock(), vue.createBlock(_component_b_autocomplete, vue.mergeProps({
              key: 0,
              ref: "autocomplete",
              modelValue: $data.newTag,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.newTag = $event))
            }, _ctx.$attrs, {
              data: $props.data,
              field: $props.field,
              icon: _ctx.icon,
              "icon-pack": _ctx.iconPack,
              maxlength: _ctx.maxlength,
              "has-counter": false,
              size: _ctx.size,
              disabled: $props.disabled,
              loading: _ctx.loading,
              autocomplete: $props.nativeAutocomplete,
              "open-on-focus": $props.openOnFocus,
              "keep-open": $props.openOnFocus,
              "keep-first": !$props.allowNew,
              "group-field": $props.groupField,
              "group-options": $props.groupOptions,
              "use-html5-validation": _ctx.useHtml5Validation,
              "check-infinite-scroll": $props.checkInfiniteScroll,
              "append-to-body": $props.appendToBody,
              "confirm-keys": $props.confirmKeys,
              onTyping: $options.onTyping,
              onFocus: _ctx.onFocus,
              onBlur: $options.customOnBlur,
              onKeydown: vue.withKeys($options.keydown, ["native"]),
              onCompositionstart: _cache[2] || (_cache[2] = $event => ($data.isComposing = true)),
              onCompositionend: _cache[3] || (_cache[3] = $event => ($data.isComposing = false)),
              onSelect: $options.onSelect,
              onInfiniteScroll: $options.emitInfiniteScroll
            }), vue.createSlots({ _: 2 /* DYNAMIC */ }, [
              ($options.hasHeaderSlot)
                ? {
                    name: "header",
                    fn: vue.withCtx(() => [
                      vue.renderSlot(_ctx.$slots, "header")
                    ])
                  }
                : undefined,
              ($options.hasDefaultSlot)
                ? {
                    name: "default",
                    fn: vue.withCtx((props) => [
                      vue.renderSlot(_ctx.$slots, "default", {
                        option: props.option,
                        index: props.index
                      })
                    ])
                  }
                : undefined,
              ($options.hasEmptySlot)
                ? {
                    name: "empty",
                    fn: vue.withCtx(() => [
                      vue.renderSlot(_ctx.$slots, "empty")
                    ])
                  }
                : undefined,
              ($options.hasFooterSlot)
                ? {
                    name: "footer",
                    fn: vue.withCtx(() => [
                      vue.renderSlot(_ctx.$slots, "footer")
                    ])
                  }
                : undefined
            ]), 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["modelValue", "data", "field", "icon", "icon-pack", "maxlength", "size", "disabled", "loading", "autocomplete", "open-on-focus", "keep-open", "keep-first", "group-field", "group-options", "use-html5-validation", "check-infinite-scroll", "append-to-body", "confirm-keys", "onTyping", "onFocus", "onBlur", "onKeydown", "onSelect", "onInfiniteScroll"]))
          : vue.createCommentVNode("v-if", true)
      ], 10 /* CLASS, PROPS */, ["disabled"]),
      ($props.hasCounter && ($props.maxtags || _ctx.maxlength))
        ? (vue.openBlock(), vue.createBlock("small", _hoisted_1, [
            (_ctx.maxlength && $options.valueLength > 0)
              ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                  vue.createTextVNode(vue.toDisplayString($options.valueLength) + " / " + vue.toDisplayString(_ctx.maxlength), 1 /* TEXT */)
                ], 64 /* STABLE_FRAGMENT */))
              : ($props.maxtags)
                ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 1 }, [
                    vue.createTextVNode(vue.toDisplayString($options.tagsLength) + " / " + vue.toDisplayString($props.maxtags), 1 /* TEXT */)
                  ], 64 /* STABLE_FRAGMENT */))
                : vue.createCommentVNode("v-if", true)
          ]))
        : vue.createCommentVNode("v-if", true)
    ], 2 /* CLASS */))
  }

  script.render = render;
  script.__file = "src/components/taginput/Taginput.vue";

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

  exports.BTaginput = script;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
