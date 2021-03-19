/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Datetimepicker = {}, global.Vue));
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
   * Checks if the flag is set
   * @param val
   * @param flag
   * @returns {boolean}
   */

  function hasFlag(val, flag) {
    return (val & flag) === flag;
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
  /**
   * Mobile detection
   * https://www.abeautifulsite.net/detecting-mobile-devices-with-javascript
   */

  var isMobile = {
    Android: function Android() {
      return typeof window !== 'undefined' && window.navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function BlackBerry() {
      return typeof window !== 'undefined' && window.navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function iOS() {
      return typeof window !== 'undefined' && window.navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function Opera() {
      return typeof window !== 'undefined' && window.navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function Windows() {
      return typeof window !== 'undefined' && window.navigator.userAgent.match(/IEMobile/i);
    },
    any: function any() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
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
  function isVueComponent(c) {
    return c && c._isVue;
  }
  function toCssWidth(width) {
    return width === undefined ? null : isNaN(width) ? width : width + 'px';
  }
  /**
   * Return month names according to a specified locale
   * @param  {String} locale A bcp47 localerouter. undefined will use the user browser locale
   * @param  {String} format long (ex. March), short (ex. Mar) or narrow (M)
   * @return {Array<String>} An array of month names
   */

  function getMonthNames() {
    var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'long';
    var dates = [];

    for (var i = 0; i < 12; i++) {
      dates.push(new Date(2000, i, 15));
    }

    var dtf = new Intl.DateTimeFormat(locale, {
      month: format,
      timeZone: 'UTC'
    });
    return dates.map(function (d) {
      return dtf.format(d);
    });
  }
  /**
   * Return weekday names according to a specified locale
   * @param  {String} locale A bcp47 localerouter. undefined will use the user browser locale
   * @param  {Number} first day of week index
   * @param  {String} format long (ex. Thursday), short (ex. Thu) or narrow (T)
   * @return {Array<String>} An array of weekday names
   */

  function getWeekdayNames() {
    var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'narrow';
    var dates = [];
    var dt = new Date(2000, 0, 1);
    var dayOfWeek = dt.getDay();
    dt.setDate(dt.getDate() - dayOfWeek);

    for (var i = 0; i < 7; i++) {
      dates.push(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + i));
    }

    var dtf = new Intl.DateTimeFormat(locale, {
      weekday: format,
      timeZone: 'UTC'
    });
    return dates.map(function (d) {
      return dtf.format(d);
    });
  }
  /**
   * Accept a regex with group names and return an object
   * ex. matchWithGroups(/((?!=<year>)\d+)\/((?!=<month>)\d+)\/((?!=<day>)\d+)/, '2000/12/25')
   * will return { year: 2000, month: 12, day: 25 }
   * @param  {String} includes injections of (?!={groupname}) for each group
   * @param  {String} the string to run regex
   * @return {Object} an object with a property for each group having the group's match as the value
   */

  function matchWithGroups(pattern, str) {
    var matches = str.match(pattern);
    return pattern // get the pattern as a string
    .toString() // suss out the groups
    .match(/<(.+?)>/g) // remove the braces
    .map(function (group) {
      var groupMatches = group.match(/<(.+)>/);

      if (!groupMatches || groupMatches.length <= 0) {
        return null;
      }

      return group.match(/<(.+)>/)[1];
    }) // create an object with a property for each group having the group's match as the value
    .reduce(function (acc, curr, index, arr) {
      if (matches && matches.length > index) {
        acc[curr] = matches[index + 1];
      } else {
        acc[curr] = null;
      }

      return acc;
    }, {});
  }
  function isCustomElement(vm) {
    return 'shadowRoot' in vm.$root.$options;
  }
  var isDefined = function isDefined(d) {
    return d !== undefined;
  };
  function getSlot(slots, name, props) {
    var value = slots[name];
    return typeof value === 'function' ? value(props) : value;
  }

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

  var items = 1;
  var sorted$1 = 3;
  var ProviderParentMixin = (function (itemName) {
    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var mixin = {
      provide: function provide() {
        return _defineProperty({}, 'b' + itemName, this);
      }
    };

    if (hasFlag(flags, items)) {
      mixin.data = function () {
        return {
          childItems: []
        };
      };

      mixin.methods = {
        _registerItem: function _registerItem(item) {
          this.childItems.push(item);
        },
        _unregisterItem: function _unregisterItem(item) {
          this.childItems = this.childItems.filter(function (i) {
            return i !== item;
          });
        }
      };

      if (hasFlag(flags, sorted$1)) {
        mixin.watch = {
          /**
           * When items are added/removed deep search in the elements default's slot
           * And mark the items with their index
           */
          childItems: function childItems(items) {
            if (items.length > 0 && this.$scopedSlots.default) {
              var tag = items[0].$vnode.tag;
              var index = 0;

              var deepSearch = function deepSearch(children) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  var _loop = function _loop() {
                    var child = _step.value;

                    if (child.tag === tag) {
                      // An item with the same tag will for sure be found
                      var it = items.find(function (i) {
                        return i.$vnode === child;
                      });

                      if (it) {
                        it.index = index++;
                      }
                    } else if (child.tag) {
                      var sub = child.componentInstance ? child.componentInstance.$scopedSlots.default ? child.componentInstance.$scopedSlots.default() : child.componentInstance.$children : child.children;

                      if (Array.isArray(sub) && sub.length > 0) {
                        deepSearch(sub.map(function (e) {
                          return e.$vnode;
                        }));
                      }
                    }
                  };

                  for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    _loop();
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

                return false;
              };

              deepSearch(this.$scopedSlots.default());
            }
          }
        };
        mixin.computed = {
          /**
           * When items are added/removed sort them according to their position
           */
          sortedItems: function sortedItems() {
            return this.childItems.slice().sort(function (i1, i2) {
              return i1.index - i2.index;
            });
          }
        };
      }
    }

    return mixin;
  });

  var DEFAULT_CLOSE_OPTIONS = ['escape', 'outside'];
  var script$c = {
    name: 'BDropdown',
    directives: {
      trapFocus: directive
    },
    mixins: [ProviderParentMixin('dropdown')],
    props: {
      value: {
        type: [String, Number, Boolean, Object, Array, Function],
        default: null
      },
      disabled: Boolean,
      inline: Boolean,
      scrollable: Boolean,
      maxHeight: {
        type: [String, Number],
        default: 200
      },
      position: {
        type: String,
        validator: function validator(value) {
          return ['is-top-right', 'is-top-left', 'is-bottom-left', 'is-bottom-right'].indexOf(value) > -1;
        }
      },
      triggers: {
        type: Array,
        default: function _default() {
          return ['click'];
        }
      },
      mobileModal: {
        type: Boolean,
        default: function _default() {
          return config.defaultDropdownMobileModal;
        }
      },
      ariaRole: {
        type: String,
        validator: function validator(value) {
          return ['menu', 'list', 'dialog'].indexOf(value) > -1;
        },
        default: null
      },
      animation: {
        type: String,
        default: 'fade'
      },
      multiple: Boolean,
      trapFocus: {
        type: Boolean,
        default: function _default() {
          return config.defaultTrapFocus;
        }
      },
      closeOnClick: {
        type: Boolean,
        default: true
      },
      canClose: {
        type: [Array, Boolean],
        default: true
      },
      expanded: Boolean,
      appendToBody: Boolean,
      appendToBodyCopyParent: Boolean
    },
    data: function data() {
      return {
        selected: this.value,
        style: {},
        isActive: false,
        isHoverable: false,
        _bodyEl: undefined // Used to append to body

      };
    },
    computed: {
      rootClasses: function rootClasses() {
        return [this.position, {
          'is-disabled': this.disabled,
          'is-hoverable': this.hoverable,
          'is-inline': this.inline,
          'is-active': this.isActive || this.inline,
          'is-mobile-modal': this.isMobileModal,
          'is-expanded': this.expanded
        }];
      },
      isMobileModal: function isMobileModal() {
        return this.mobileModal && !this.inline;
      },
      cancelOptions: function cancelOptions() {
        return typeof this.canClose === 'boolean' ? this.canClose ? DEFAULT_CLOSE_OPTIONS : [] : this.canClose;
      },
      contentStyle: function contentStyle() {
        return {
          maxHeight: this.scrollable ? toCssWidth(this.maxHeight) : null,
          overflow: this.scrollable ? 'auto' : null
        };
      },
      hoverable: function hoverable() {
        return this.triggers.indexOf('hover') >= 0;
      }
    },
    watch: {
      /**
      * When v-model is changed set the new selected item.
      */
      value: function value(_value) {
        this.selected = _value;
      },

      /**
      * Emit event when isActive value is changed.
      */
      isActive: function isActive(value) {
        var _this = this;

        this.$emit('active-change', value);

        if (this.appendToBody) {
          this.$nextTick(function () {
            _this.updateAppendToBody();
          });
        }
      }
    },
    methods: {
      /**
       * Click listener from DropdownItem.
       *   1. Set new selected item.
       *   2. Emit input event to update the user v-model.
       *   3. Close the dropdown.
       */
      selectItem: function selectItem(value) {
        if (this.multiple) {
          if (this.selected) {
            if (this.selected.indexOf(value) === -1) {
              // Add value
              this.selected = [].concat(_toConsumableArray(this.selected), [value]);
            } else {
              // Remove value
              this.selected = this.selected.filter(function (val) {
                return val !== value;
              });
            }
          } else {
            this.selected = [value];
          }

          this.$emit('change', this.selected);
        } else {
          if (this.selected !== value) {
            this.selected = value;
            this.$emit('change', this.selected);
          }
        }

        this.$emit('input', this.selected);

        if (!this.multiple) {
          this.isActive = !this.closeOnClick;

          if (this.hoverable && this.closeOnClick) {
            this.isHoverable = false;
          }
        }
      },

      /**
      * White-listed items to not close when clicked.
      */
      isInWhiteList: function isInWhiteList(el) {
        if (el === this.$refs.dropdownMenu) return true;
        if (el === this.$refs.trigger) return true; // All chidren from dropdown

        if (this.$refs.dropdownMenu !== undefined) {
          var children = this.$refs.dropdownMenu.querySelectorAll('*');
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
        } // All children from trigger


        if (this.$refs.trigger !== undefined) {
          var _children = this.$refs.trigger.querySelectorAll('*');

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = _children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _child = _step2.value;

              if (el === _child) {
                return true;
              }
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

        return false;
      },

      /**
      * Close dropdown if clicked outside.
      */
      clickedOutside: function clickedOutside(event) {
        if (this.cancelOptions.indexOf('outside') < 0) return;
        if (this.inline) return;
        var target = isCustomElement(this) ? event.composedPath()[0] : event.target;
        if (!this.isInWhiteList(target)) this.isActive = false;
      },

      /**
       * Keypress event that is bound to the document
       */
      keyPress: function keyPress(_ref) {
        var key = _ref.key;

        if (this.isActive && (key === 'Escape' || key === 'Esc')) {
          if (this.cancelOptions.indexOf('escape') < 0) return;
          this.isActive = false;
        }
      },
      onClick: function onClick() {
        if (this.triggers.indexOf('click') < 0) return;
        this.toggle();
      },
      onContextMenu: function onContextMenu() {
        if (this.triggers.indexOf('contextmenu') < 0) return;
        this.toggle();
      },
      onHover: function onHover() {
        if (this.triggers.indexOf('hover') < 0) return;
        this.isHoverable = true;
      },
      onFocus: function onFocus() {
        if (this.triggers.indexOf('focus') < 0) return;
        this.toggle();
      },

      /**
      * Toggle dropdown if it's not disabled.
      */
      toggle: function toggle() {
        var _this2 = this;

        if (this.disabled) return;

        if (!this.isActive) {
          // if not active, toggle after clickOutside event
          // this fixes toggling programmatic
          this.$nextTick(function () {
            var value = !_this2.isActive;
            _this2.isActive = value; // Vue 2.6.x ???

            setTimeout(function () {
              return _this2.isActive = value;
            });
          });
        } else {
          this.isActive = !this.isActive;
        }
      },
      updateAppendToBody: function updateAppendToBody() {
        var dropdown = this.$refs.dropdown;
        var dropdownMenu = this.$refs.dropdownMenu;
        var trigger = this.$refs.trigger;

        if (dropdownMenu && trigger) {
          // update wrapper dropdown
          var dropdownWrapper = this.$data._bodyEl.children[0];
          dropdownWrapper.classList.forEach(function (item) {
            return dropdownWrapper.classList.remove(item);
          });
          dropdownWrapper.classList.add('dropdown');
          dropdownWrapper.classList.add('dropdown-menu-animation');

          if (this.$vnode && this.$vnode.data && this.$vnode.data.staticClass) {
            dropdownWrapper.classList.add(this.$vnode.data.staticClass);
          }

          this.rootClasses.forEach(function (item) {
            // skip position prop
            if (item && _typeof(item) === 'object') {
              for (var key in item) {
                if (item[key]) {
                  dropdownWrapper.classList.add(key);
                }
              }
            }
          });

          if (this.appendToBodyCopyParent) {
            var parentNode = this.$refs.dropdown.parentNode;
            var parent = this.$data._bodyEl;
            parent.classList.forEach(function (item) {
              return parent.classList.remove(item);
            });
            parentNode.classList.forEach(function (item) {
              parent.classList.add(item);
            });
            parentNode.style.zIndex = this.isActive ? '-1' : '0';
          }

          var rect = trigger.getBoundingClientRect();
          var top = rect.top + window.scrollY;
          var left = rect.left + window.scrollX;

          if (!this.position || this.position.indexOf('bottom') >= 0) {
            top += trigger.clientHeight;
          } else {
            top -= dropdownMenu.clientHeight;
          }

          if (this.position && this.position.indexOf('left') >= 0) {
            left -= dropdownMenu.clientWidth - trigger.clientWidth;
          }

          this.style = {
            position: 'absolute',
            top: "".concat(top, "px"),
            left: "".concat(left, "px"),
            zIndex: '99',
            width: this.expanded ? "".concat(dropdown.offsetWidth, "px") : undefined
          };
        }
      }
    },
    mounted: function mounted() {
      if (this.appendToBody) {
        this.$data._bodyEl = createAbsoluteElement(this.$refs.dropdownMenu);
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

  function render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _directive_trap_focus = vue.resolveDirective("trap-focus");

    return (vue.openBlock(), vue.createBlock("div", {
      class: ["dropdown dropdown-menu-animation", $options.rootClasses],
      ref: "dropdown"
    }, [
      (!$props.inline)
        ? (vue.openBlock(), vue.createBlock("div", {
            key: 0,
            role: "button",
            ref: "trigger",
            class: "dropdown-trigger",
            onClick: _cache[1] || (_cache[1] = (...args) => ($options.onClick && $options.onClick(...args))),
            onContextmenu: _cache[2] || (_cache[2] = vue.withModifiers((...args) => ($options.onContextMenu && $options.onContextMenu(...args)), ["prevent"])),
            onMouseenter: _cache[3] || (_cache[3] = (...args) => ($options.onHover && $options.onHover(...args))),
            onFocusCapture: _cache[4] || (_cache[4] = (...args) => ($options.onFocus && $options.onFocus(...args))),
            "aria-haspopup": "true"
          }, [
            vue.renderSlot(_ctx.$slots, "trigger", { active: $data.isActive })
          ], 544 /* HYDRATE_EVENTS, NEED_PATCH */))
        : vue.createCommentVNode("v-if", true),
      vue.createVNode(vue.Transition, { name: $props.animation }, {
        default: vue.withCtx(() => [
          ($options.isMobileModal)
            ? vue.withDirectives((vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: "background",
                "aria-hidden": !$data.isActive
              }, null, 8 /* PROPS */, ["aria-hidden"])), [
                [vue.vShow, $data.isActive]
              ])
            : vue.createCommentVNode("v-if", true)
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["name"]),
      vue.createVNode(vue.Transition, { name: $props.animation }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createVNode("div", {
            ref: "dropdownMenu",
            class: "dropdown-menu",
            style: $data.style,
            "aria-hidden": !$data.isActive
          }, [
            vue.createVNode("div", {
              class: "dropdown-content",
              role: $props.ariaRole,
              style: $options.contentStyle
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 12 /* STYLE, PROPS */, ["role"])
          ], 12 /* STYLE, PROPS */, ["aria-hidden"]), [
            [vue.vShow, (!$props.disabled && ($data.isActive || $data.isHoverable)) || $props.inline],
            [_directive_trap_focus, $props.trapFocus]
          ])
        ]),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["name"])
    ], 2 /* CLASS */))
  }

  script$c.render = render$c;
  script$c.__file = "src/components/dropdown/Dropdown.vue";

  var sorted = 1;
  var optional = 2;
  var InjectedChildMixin = (function (parentItemName) {
    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var mixin = {
      inject: {
        parent: {
          from: 'b' + parentItemName,
          default: false
        }
      },
      created: function created() {
        if (!this.parent) {
          if (!hasFlag(flags, optional)) {
            this.$destroy();
            throw new Error('You should wrap ' + this.$options.name + ' in a ' + parentItemName);
          }
        } else if (this.parent._registerItem) {
          this.parent._registerItem(this);
        }
      },
      beforeDestroy: function beforeDestroy() {
        if (this.parent && this.parent._unregisterItem) {
          this.parent._unregisterItem(this);
        }
      }
    };

    if (hasFlag(flags, sorted)) {
      mixin.data = function () {
        return {
          index: null
        };
      };
    }

    return mixin;
  });

  var script$b = {
    name: 'BDropdownItem',
    mixins: [InjectedChildMixin('dropdown')],
    props: {
      value: {
        type: [String, Number, Boolean, Object, Array, Function],
        default: null
      },
      separator: Boolean,
      disabled: Boolean,
      custom: Boolean,
      focusable: {
        type: Boolean,
        default: true
      },
      paddingless: Boolean,
      hasLink: Boolean,
      ariaRole: {
        type: String,
        default: ''
      }
    },
    computed: {
      anchorClasses: function anchorClasses() {
        return {
          'is-disabled': this.parent.disabled || this.disabled,
          'is-paddingless': this.paddingless,
          'is-active': this.isActive
        };
      },
      itemClasses: function itemClasses() {
        return {
          'dropdown-item': !this.hasLink,
          'is-disabled': this.disabled,
          'is-paddingless': this.paddingless,
          'is-active': this.isActive,
          'has-link': this.hasLink
        };
      },
      ariaRoleItem: function ariaRoleItem() {
        return this.ariaRole === 'menuitem' || this.ariaRole === 'listitem' ? this.ariaRole : null;
      },
      isClickable: function isClickable() {
        return !this.parent.disabled && !this.separator && !this.disabled && !this.custom;
      },
      isActive: function isActive() {
        if (this.parent.selected === null) return false;
        if (this.parent.multiple) return this.parent.selected.indexOf(this.value) >= 0;
        return this.value === this.parent.selected;
      },
      isFocusable: function isFocusable() {
        return this.hasLink ? false : this.focusable;
      }
    },
    methods: {
      /**
      * Click listener, select the item.
      */
      selectItem: function selectItem() {
        if (!this.isClickable) return;
        this.parent.selectItem(this.value);
        this.$emit('click');
      }
    }
  };

  const _hoisted_1$8 = {
    key: 0,
    class: "dropdown-divider"
  };

  function render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return ($props.separator)
      ? (vue.openBlock(), vue.createBlock("hr", _hoisted_1$8))
      : (!$props.custom && !$props.hasLink)
        ? (vue.openBlock(), vue.createBlock("a", {
            key: 1,
            class: ["dropdown-item", $options.anchorClasses],
            onClick: _cache[1] || (_cache[1] = (...args) => ($options.selectItem && $options.selectItem(...args))),
            role: $options.ariaRoleItem,
            tabindex: $options.isFocusable ? 0 : null
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 10 /* CLASS, PROPS */, ["role", "tabindex"]))
        : (vue.openBlock(), vue.createBlock("div", {
            key: 2,
            class: $options.itemClasses,
            onClick: _cache[2] || (_cache[2] = (...args) => ($options.selectItem && $options.selectItem(...args))),
            role: $options.ariaRoleItem,
            tabindex: $options.isFocusable ? 0 : null
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 10 /* CLASS, PROPS */, ["role", "tabindex"]))
  }

  script$b.render = render$b;
  script$b.__file = "src/components/dropdown/DropdownItem.vue";

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

  var script$a = {
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

  function render$a(_ctx, _cache, $props, $setup, $data, $options) {
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

  script$a.render = render$a;
  script$a.__file = "src/components/icon/Icon.vue";

  var script$9 = {
    name: 'BInput',
    components: _defineProperty({}, script$a.name, script$a),
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

  function render$9(_ctx, _cache, $props, $setup, $data, $options) {
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

  script$9.render = render$9;
  script$9.__file = "src/components/input/Input.vue";

  var script$8 = {
    name: 'BFieldBody',
    props: {
      message: {
        type: [String, Array]
      },
      type: {
        type: [String, Object]
      }
    },
    render: function render() {
      var _this = this;

      var first = true;
      return vue.h('div', {
        attrs: {
          'class': 'field-body'
        }
      }, getSlot(this.$slots, 'default').map(function (element) {
        // skip returns and comments
        if (!element.tag) {
          return element;
        }

        var message;

        if (first) {
          message = _this.message;
          first = false;
        }

        return vue.h('b-field', {
          attrs: {
            type: _this.type,
            message: message
          }
        }, [element]);
      }));
    }
  };

  const render$8 = () => {};


  script$8.render = render$8;
  script$8.__file = "src/components/field/FieldBody.vue";

  var script$7 = {
    name: 'BField',
    components: _defineProperty({}, script$8.name, script$8),
    provide: function provide() {
      return {
        'BField': this
      };
    },
    inject: {
      parent: {
        from: 'BField',
        default: false
      }
    },
    // Used internally only when using Field in Field
    props: {
      type: [String, Object],
      label: String,
      labelFor: String,
      message: [String, Array, Object],
      grouped: Boolean,
      groupMultiline: Boolean,
      position: String,
      expanded: Boolean,
      horizontal: Boolean,
      addons: {
        type: Boolean,
        default: true
      },
      customClass: String,
      labelPosition: {
        type: String,
        default: function _default() {
          return config.defaultFieldLabelPosition;
        }
      }
    },
    data: function data() {
      return {
        newType: this.type,
        newMessage: this.message,
        fieldLabelSize: null,
        _isField: true // Used internally by Input and Select

      };
    },
    computed: {
      rootClasses: function rootClasses() {
        return [{
          'is-expanded': this.expanded,
          'is-horizontal': this.horizontal,
          'is-floating-in-label': this.hasLabel && !this.horizontal && this.labelPosition === 'inside',
          'is-floating-label': this.hasLabel && !this.horizontal && this.labelPosition === 'on-border'
        }, this.numberInputClasses];
      },
      innerFieldClasses: function innerFieldClasses() {
        return [this.fieldType(), this.newPosition, {
          'is-grouped-multiline': this.groupMultiline
        }];
      },
      hasInnerField: function hasInnerField() {
        return this.grouped || this.groupMultiline || this.hasAddons();
      },

      /**
      * Correct Bulma class for the side of the addon or group.
      *
      * This is not kept like the others (is-small, etc.),
      * because since 'has-addons' is set automatically it
      * doesn't make sense to teach users what addons are exactly.
      */
      newPosition: function newPosition() {
        if (this.position === undefined) return;
        var position = this.position.split('-');
        if (position.length < 1) return;
        var prefix = this.grouped ? 'is-grouped-' : 'has-addons-';
        if (this.position) return prefix + position[1];
      },

      /**
      * Formatted message in case it's an array
      * (each element is separated by <br> tag)
      */
      formattedMessage: function formattedMessage() {
        if (this.parent && this.parent.hasInnerField) {
          return ''; // Message will be displayed in parent field
        }

        if (typeof this.newMessage === 'string') {
          return [this.newMessage];
        }

        var messages = [];

        if (Array.isArray(this.newMessage)) {
          this.newMessage.forEach(function (message) {
            if (typeof message === 'string') {
              messages.push(message);
            } else {
              for (var key in message) {
                if (message[key]) {
                  messages.push(key);
                }
              }
            }
          });
        } else {
          for (var key in this.newMessage) {
            if (this.newMessage[key]) {
              messages.push(key);
            }
          }
        }

        return messages.filter(function (m) {
          if (m) return m;
        });
      },
      hasLabel: function hasLabel() {
        return this.label || getSlot(this.$slots, 'label');
      },
      hasMessage: function hasMessage() {
        return (!this.parent || !this.parent.hasInnerField) && this.newMessage || getSlot(this.$slots, 'message');
      },
      numberInputClasses: function numberInputClasses() {
        if (getSlot(this.$slots, 'default')) {
          var numberinput = getSlot(this.$slots, 'default').filter(function (node) {
            return node.tag && node.tag.toLowerCase().indexOf('numberinput') >= 0;
          })[0];

          if (numberinput) {
            var classes = ['has-numberinput'];
            var controlsPosition = numberinput.componentOptions.propsData.controlsPosition;
            var size = numberinput.componentOptions.propsData.size;

            if (controlsPosition) {
              classes.push("has-numberinput-".concat(controlsPosition));
            }

            if (size) {
              classes.push("has-numberinput-".concat(size));
            }

            return classes;
          }
        }

        return null;
      }
    },
    watch: {
      /**
      * Set internal type when prop change.
      */
      type: function type(value) {
        this.newType = value;
      },

      /**
      * Set internal message when prop change.
      */
      message: function message(value) {
        this.newMessage = value;
      },

      /**
      * Set parent message if we use Field in Field.
      */
      newMessage: function newMessage(value) {
        if (this.parent && this.parent.hasInnerField) {
          if (!this.parent.type) {
            this.parent.newType = this.newType;
          }

          this.parent.newMessage = value;
        }
      }
    },
    methods: {
      /**
      * Field has addons if there are more than one slot
      * (element / component) in the Field.
      * Or is grouped when prop is set.
      * Is a method to be called when component re-render.
      */
      fieldType: function fieldType() {
        if (this.grouped) return 'is-grouped';
        if (this.hasAddons()) return 'has-addons';
      },
      hasAddons: function hasAddons() {
        var renderedNode = 0;

        if (getSlot(this.$slots, 'default')) {
          renderedNode = getSlot(this.$slots, 'default').reduce(function (i, node) {
            return node.tag ? i + 1 : i;
          }, 0);
        }

        return renderedNode > 1 && this.addons && !this.horizontal;
      }
    },
    mounted: function mounted() {
      if (this.horizontal) {
        // Bulma docs: .is-normal for any .input or .button
        var elements = this.$el.querySelectorAll('.input, .select, .button, .textarea, .b-slider');

        if (elements.length > 0) {
          this.fieldLabelSize = 'is-normal';
        }
      }
    }
  };

  const _hoisted_1$7 = {
    key: 3,
    class: "field-body"
  };

  function render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_b_field_body = vue.resolveComponent("b-field-body");
    const _component_b_field = vue.resolveComponent("b-field");

    return (vue.openBlock(), vue.createBlock("div", {
      class: ["field", $options.rootClasses]
    }, [
      ($props.horizontal)
        ? (vue.openBlock(), vue.createBlock("div", {
            key: 0,
            class: ["field-label", [$props.customClass, $data.fieldLabelSize]]
          }, [
            ($options.hasLabel)
              ? (vue.openBlock(), vue.createBlock("label", {
                  key: 0,
                  for: $props.labelFor,
                  class: [$props.customClass, "label"]
                }, [
                  (_ctx.$slots.label)
                    ? vue.renderSlot(_ctx.$slots, "label", { key: 0 })
                    : (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 1 }, [
                        vue.createTextVNode(vue.toDisplayString($props.label), 1 /* TEXT */)
                      ], 64 /* STABLE_FRAGMENT */))
                ], 10 /* CLASS, PROPS */, ["for"]))
              : vue.createCommentVNode("v-if", true)
          ], 2 /* CLASS */))
        : (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 1 }, [
            ($options.hasLabel)
              ? (vue.openBlock(), vue.createBlock("label", {
                  key: 0,
                  for: $props.labelFor,
                  class: [$props.customClass, "label"]
                }, [
                  (_ctx.$slots.label)
                    ? vue.renderSlot(_ctx.$slots, "label", { key: 0 })
                    : (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 1 }, [
                        vue.createTextVNode(vue.toDisplayString($props.label), 1 /* TEXT */)
                      ], 64 /* STABLE_FRAGMENT */))
                ], 10 /* CLASS, PROPS */, ["for"]))
              : vue.createCommentVNode("v-if", true)
          ], 64 /* STABLE_FRAGMENT */)),
      ($props.horizontal)
        ? (vue.openBlock(), vue.createBlock(_component_b_field_body, {
            key: 2,
            message: $data.newMessage ? $options.formattedMessage : '',
            type: $data.newType
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "default")
            ]),
            _: 3 /* FORWARDED */
          }, 8 /* PROPS */, ["message", "type"]))
        : ($options.hasInnerField)
          ? (vue.openBlock(), vue.createBlock("div", _hoisted_1$7, [
              vue.createVNode(_component_b_field, {
                addons: false,
                type: $data.newType,
                class: $options.innerFieldClasses
              }, {
                default: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "default")
                ]),
                _: 3 /* FORWARDED */
              }, 8 /* PROPS */, ["type", "class"])
            ]))
          : vue.renderSlot(_ctx.$slots, "default", { key: 4 }),
      ($options.hasMessage && !$props.horizontal)
        ? (vue.openBlock(), vue.createBlock("p", {
            key: 5,
            class: ["help", $data.newType]
          }, [
            (_ctx.$slots.message)
              ? vue.renderSlot(_ctx.$slots, "message", { key: 0 })
              : (vue.openBlock(true), vue.createBlock(vue.Fragment, { key: 1 }, vue.renderList($options.formattedMessage, (mess, i) => {
                  return (vue.openBlock(), vue.createBlock(vue.Fragment, null, [
                    vue.createTextVNode(vue.toDisplayString(mess) + " ", 1 /* TEXT */),
                    ((i + 1) < $options.formattedMessage.length)
                      ? (vue.openBlock(), vue.createBlock("br", { key: i }))
                      : vue.createCommentVNode("v-if", true)
                  ], 64 /* STABLE_FRAGMENT */))
                }), 256 /* UNKEYED_FRAGMENT */))
          ], 2 /* CLASS */))
        : vue.createCommentVNode("v-if", true)
    ], 2 /* CLASS */))
  }

  script$7.render = render$7;
  script$7.__file = "src/components/field/Field.vue";

  var script$6 = {
    name: 'BSelect',
    components: _defineProperty({}, script$a.name, script$a),
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

  const _hoisted_1$6 = {
    key: 0,
    value: null,
    disabled: "",
    hidden: ""
  };

  function render$6(_ctx, _cache, $props, $setup, $data, $options) {
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
                  ? (vue.openBlock(), vue.createBlock("option", _hoisted_1$6, vue.toDisplayString($props.placeholder), 1 /* TEXT */))
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

  script$6.render = render$6;
  script$6.__file = "src/components/select/Select.vue";

  var script$5 = {
    name: 'BDatepickerTableRow',
    inject: {
      $datepicker: {
        name: '$datepicker',
        default: false
      }
    },
    props: {
      selectedDate: {
        type: [Date, Array]
      },
      hoveredDateRange: Array,
      day: {
        type: Number
      },
      week: {
        type: Array,
        required: true
      },
      month: {
        type: Number,
        required: true
      },
      minDate: Date,
      maxDate: Date,
      disabled: Boolean,
      unselectableDates: Array,
      unselectableDaysOfWeek: Array,
      selectableDates: Array,
      events: Array,
      indicators: String,
      dateCreator: Function,
      nearbyMonthDays: Boolean,
      nearbySelectableMonthDays: Boolean,
      showWeekNumber: Boolean,
      weekNumberClickable: Boolean,
      range: Boolean,
      multiple: Boolean,
      rulesForFirstWeek: Number,
      firstDayOfWeek: Number
    },
    watch: {
      day: function day(_day) {
        var _this = this;

        var refName = "day-".concat(this.month, "-").concat(_day);
        this.$nextTick(function () {
          if (_this.$refs[refName] && _this.$refs[refName].length > 0) {
            if (_this.$refs[refName][0]) {
              _this.$refs[refName][0].focus();
            }
          }
        }); // $nextTick needed when month is changed
      }
    },
    methods: {
      firstWeekOffset: function firstWeekOffset(year, dow, doy) {
        // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        var fwd = 7 + dow - doy; // first-week day local weekday -- which local weekday is fwd

        var firstJanuary = new Date(year, 0, fwd);
        var fwdlw = (7 + firstJanuary.getDay() - dow) % 7;
        return -fwdlw + fwd - 1;
      },
      daysInYear: function daysInYear(year) {
        return this.isLeapYear(year) ? 366 : 365;
      },
      isLeapYear: function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      },
      getSetDayOfYear: function getSetDayOfYear(input) {
        return Math.round((input - new Date(input.getFullYear(), 0, 1)) / 864e5) + 1;
      },
      weeksInYear: function weeksInYear(year, dow, doy) {
        var weekOffset = this.firstWeekOffset(year, dow, doy);
        var weekOffsetNext = this.firstWeekOffset(year + 1, dow, doy);
        return (this.daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      },
      getWeekNumber: function getWeekNumber(mom) {
        var dow = this.firstDayOfWeek; // first day of week
        // Rules for the first week : 1 for the 1st January, 4 for the 4th January

        var doy = this.rulesForFirstWeek;
        var weekOffset = this.firstWeekOffset(mom.getFullYear(), dow, doy);
        var week = Math.floor((this.getSetDayOfYear(mom) - weekOffset - 1) / 7) + 1;
        var resWeek;
        var resYear;

        if (week < 1) {
          resYear = mom.getFullYear() - 1;
          resWeek = week + this.weeksInYear(resYear, dow, doy);
        } else if (week > this.weeksInYear(mom.getFullYear(), dow, doy)) {
          resWeek = week - this.weeksInYear(mom.getFullYear(), dow, doy);
          resYear = mom.getFullYear() + 1;
        } else {
          resYear = mom.getFullYear();
          resWeek = week;
        }

        return resWeek;
      },
      clickWeekNumber: function clickWeekNumber(week) {
        if (this.weekNumberClickable) {
          this.$datepicker.$emit('week-number-click', week);
        }
      },

      /*
       * Check that selected day is within earliest/latest params and
       * is within this month
       */
      selectableDate: function selectableDate(day) {
        var validity = [];

        if (this.minDate) {
          validity.push(day >= this.minDate);
        }

        if (this.maxDate) {
          validity.push(day <= this.maxDate);
        }

        if (this.nearbyMonthDays && !this.nearbySelectableMonthDays) {
          validity.push(day.getMonth() === this.month);
        }

        if (this.selectableDates) {
          for (var i = 0; i < this.selectableDates.length; i++) {
            var enabledDate = this.selectableDates[i];

            if (day.getDate() === enabledDate.getDate() && day.getFullYear() === enabledDate.getFullYear() && day.getMonth() === enabledDate.getMonth()) {
              return true;
            } else {
              validity.push(false);
            }
          }
        }

        if (this.unselectableDates) {
          for (var _i = 0; _i < this.unselectableDates.length; _i++) {
            var disabledDate = this.unselectableDates[_i];
            validity.push(day.getDate() !== disabledDate.getDate() || day.getFullYear() !== disabledDate.getFullYear() || day.getMonth() !== disabledDate.getMonth());
          }
        }

        if (this.unselectableDaysOfWeek) {
          for (var _i2 = 0; _i2 < this.unselectableDaysOfWeek.length; _i2++) {
            var dayOfWeek = this.unselectableDaysOfWeek[_i2];
            validity.push(day.getDay() !== dayOfWeek);
          }
        }

        return validity.indexOf(false) < 0;
      },

      /*
      * Emit select event with chosen date as payload
      */
      emitChosenDate: function emitChosenDate(day) {
        if (this.disabled) return;

        if (this.selectableDate(day)) {
          this.$emit('select', day);
        }
      },
      eventsDateMatch: function eventsDateMatch(day) {
        if (!this.events || !this.events.length) return false;
        var dayEvents = [];

        for (var i = 0; i < this.events.length; i++) {
          if (this.events[i].date.getDay() === day.getDay()) {
            dayEvents.push(this.events[i]);
          }
        }

        if (!dayEvents.length) {
          return false;
        }

        return dayEvents;
      },

      /*
      * Build classObject for cell using validations
      */
      classObject: function classObject(day) {
        function dateMatch(dateOne, dateTwo, multiple) {
          // if either date is null or undefined, return false
          // if using multiple flag, return false
          if (!dateOne || !dateTwo || multiple) {
            return false;
          }

          if (Array.isArray(dateTwo)) {
            return dateTwo.some(function (date) {
              return dateOne.getDate() === date.getDate() && dateOne.getFullYear() === date.getFullYear() && dateOne.getMonth() === date.getMonth();
            });
          }

          return dateOne.getDate() === dateTwo.getDate() && dateOne.getFullYear() === dateTwo.getFullYear() && dateOne.getMonth() === dateTwo.getMonth();
        }

        function dateWithin(dateOne, dates, multiple) {
          if (!Array.isArray(dates) || multiple) {
            return false;
          }

          return dateOne > dates[0] && dateOne < dates[1];
        }

        return _defineProperty({
          'is-selected': dateMatch(day, this.selectedDate) || dateWithin(day, this.selectedDate, this.multiple),
          'is-first-selected': dateMatch(day, Array.isArray(this.selectedDate) && this.selectedDate[0], this.multiple),
          'is-within-selected': dateWithin(day, this.selectedDate, this.multiple),
          'is-last-selected': dateMatch(day, Array.isArray(this.selectedDate) && this.selectedDate[1], this.multiple),
          'is-within-hovered-range': this.hoveredDateRange && this.hoveredDateRange.length === 2 && (dateMatch(day, this.hoveredDateRange) || dateWithin(day, this.hoveredDateRange)),
          'is-first-hovered': dateMatch(day, Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[0]),
          'is-within-hovered': dateWithin(day, this.hoveredDateRange),
          'is-last-hovered': dateMatch(day, Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[1]),
          'is-today': dateMatch(day, this.dateCreator()),
          'is-selectable': this.selectableDate(day) && !this.disabled,
          'is-unselectable': !this.selectableDate(day) || this.disabled,
          'is-invisible': !this.nearbyMonthDays && day.getMonth() !== this.month,
          'is-nearby': this.nearbySelectableMonthDays && day.getMonth() !== this.month,
          'has-event': this.eventsDateMatch(day)
        }, this.indicators, this.eventsDateMatch(day));
      },
      setRangeHoverEndDate: function setRangeHoverEndDate(day) {
        if (this.range) {
          this.$emit('rangeHoverEndDate', day);
        }
      },
      manageKeydown: function manageKeydown(event, weekDay) {
        // https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent/key/Key_Values#Navigation_keys
        var key = event.key;
        var preventDefault = true;

        switch (key) {
          case 'Tab':
            {
              preventDefault = false;
              break;
            }

          case ' ':
          case 'Space':
          case 'Spacebar':
          case 'Enter':
            {
              this.emitChosenDate(weekDay);
              break;
            }

          case 'ArrowLeft':
          case 'Left':
            {
              this.changeFocus(weekDay, -1);
              break;
            }

          case 'ArrowRight':
          case 'Right':
            {
              this.changeFocus(weekDay, 1);
              break;
            }

          case 'ArrowUp':
          case 'Up':
            {
              this.changeFocus(weekDay, -7);
              break;
            }

          case 'ArrowDown':
          case 'Down':
            {
              this.changeFocus(weekDay, 7);
              break;
            }
        }

        if (preventDefault) {
          event.preventDefault();
        }
      },
      changeFocus: function changeFocus(day, inc) {
        var nextDay = new Date(day.getTime());
        nextDay.setDate(day.getDate() + inc);

        while ((!this.minDate || nextDay > this.minDate) && (!this.maxDate || nextDay < this.maxDate) && !this.selectableDate(nextDay)) {
          nextDay.setDate(day.getDate() + Math.sign(inc));
        }

        this.setRangeHoverEndDate(nextDay);
        this.$emit('change-focus', nextDay);
      }
    }
  };

  const _hoisted_1$5 = { class: "datepicker-row" };
  const _hoisted_2$5 = {
    key: 0,
    class: "events"
  };
  const _hoisted_3$4 = {
    key: 0,
    class: "events"
  };

  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", _hoisted_1$5, [
      ($props.showWeekNumber)
        ? (vue.openBlock(), vue.createBlock("a", {
            key: 0,
            class: ["datepicker-cell is-week-number", {'is-clickable': $props.weekNumberClickable }],
            onClick: _cache[1] || (_cache[1] = vue.withModifiers($event => ($options.clickWeekNumber($options.getWeekNumber($props.week[6]))), ["prevent"]))
          }, [
            vue.createVNode("span", null, vue.toDisplayString($options.getWeekNumber($props.week[6])), 1 /* TEXT */)
          ], 2 /* CLASS */))
        : vue.createCommentVNode("v-if", true),
      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.week, (weekDay, index) => {
        return (vue.openBlock(), vue.createBlock(vue.Fragment, null, [
          ($options.selectableDate(weekDay) && !$props.disabled)
            ? (vue.openBlock(), vue.createBlock("a", {
                ref: `day-${weekDay.getMonth()}-${weekDay.getDate()}`,
                key: index + 'selectable',
                class: [$options.classObject(weekDay), "datepicker-cell"],
                role: "button",
                href: "#",
                disabled: $props.disabled ? '' : null,
                onClick: vue.withModifiers($event => ($options.emitChosenDate(weekDay)), ["prevent"]),
                onMouseenter: $event => ($options.setRangeHoverEndDate(weekDay)),
                onKeydown: $event => ($options.manageKeydown($event, weekDay)),
                tabindex: $props.day === weekDay.getDate() ? null : -1
              }, [
                vue.createVNode("span", null, vue.toDisplayString(weekDay.getDate()), 1 /* TEXT */),
                ($options.eventsDateMatch(weekDay))
                  ? (vue.openBlock(), vue.createBlock("div", _hoisted_2$5, [
                      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.eventsDateMatch(weekDay), (event, index) => {
                        return (vue.openBlock(), vue.createBlock("div", {
                          class: ["event", event.type],
                          key: index
                        }, null, 2 /* CLASS */))
                      }), 128 /* KEYED_FRAGMENT */))
                    ]))
                  : vue.createCommentVNode("v-if", true)
              ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled", "onClick", "onMouseenter", "onKeydown", "tabindex"]))
            : (vue.openBlock(), vue.createBlock("div", {
                key: index,
                class: [$options.classObject(weekDay), "datepicker-cell"]
              }, [
                vue.createVNode("span", null, vue.toDisplayString(weekDay.getDate()), 1 /* TEXT */),
                ($options.eventsDateMatch(weekDay))
                  ? (vue.openBlock(), vue.createBlock("div", _hoisted_3$4, [
                      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.eventsDateMatch(weekDay), (event, index) => {
                        return (vue.openBlock(), vue.createBlock("div", {
                          class: ["event", event.type],
                          key: index
                        }, null, 2 /* CLASS */))
                      }), 128 /* KEYED_FRAGMENT */))
                    ]))
                  : vue.createCommentVNode("v-if", true)
              ], 2 /* CLASS */))
        ], 64 /* STABLE_FRAGMENT */))
      }), 256 /* UNKEYED_FRAGMENT */))
    ]))
  }

  script$5.render = render$5;
  script$5.__file = "src/components/datepicker/DatepickerTableRow.vue";

  var script$4 = {
    name: 'BDatepickerTable',
    components: _defineProperty({}, script$5.name, script$5),
    props: {
      value: {
        type: [Date, Array]
      },
      dayNames: Array,
      monthNames: Array,
      firstDayOfWeek: Number,
      events: Array,
      indicators: String,
      minDate: Date,
      maxDate: Date,
      focused: Object,
      disabled: Boolean,
      dateCreator: Function,
      unselectableDates: Array,
      unselectableDaysOfWeek: Array,
      selectableDates: Array,
      nearbyMonthDays: Boolean,
      nearbySelectableMonthDays: Boolean,
      showWeekNumber: Boolean,
      weekNumberClickable: Boolean,
      rulesForFirstWeek: Number,
      range: Boolean,
      multiple: Boolean
    },
    data: function data() {
      return {
        selectedBeginDate: undefined,
        selectedEndDate: undefined,
        hoveredEndDate: undefined
      };
    },
    computed: {
      multipleSelectedDates: {
        get: function get() {
          return this.multiple && this.value ? this.value : [];
        },
        set: function set(value) {
          this.$emit('input', value);
        }
      },
      visibleDayNames: function visibleDayNames() {
        var visibleDayNames = [];
        var index = this.firstDayOfWeek;

        while (visibleDayNames.length < this.dayNames.length) {
          var currentDayName = this.dayNames[index % this.dayNames.length];
          visibleDayNames.push(currentDayName);
          index++;
        }

        if (this.showWeekNumber) visibleDayNames.unshift('');
        return visibleDayNames;
      },
      hasEvents: function hasEvents() {
        return this.events && this.events.length;
      },

      /*
      * Return array of all events in the specified month
      */
      eventsInThisMonth: function eventsInThisMonth() {
        if (!this.events) return [];
        var monthEvents = [];

        for (var i = 0; i < this.events.length; i++) {
          var event = this.events[i];

          if (!event.hasOwnProperty('date')) {
            event = {
              date: event
            };
          }

          if (!event.hasOwnProperty('type')) {
            event.type = 'is-primary';
          }

          if (event.date.getMonth() === this.focused.month && event.date.getFullYear() === this.focused.year) {
            monthEvents.push(event);
          }
        }

        return monthEvents;
      },

      /*
      * Return array of all weeks in the specified month
      */
      weeksInThisMonth: function weeksInThisMonth() {
        this.validateFocusedDay();
        var month = this.focused.month;
        var year = this.focused.year;
        var weeksInThisMonth = [];
        var startingDay = 1;

        while (weeksInThisMonth.length < 6) {
          var newWeek = this.weekBuilder(startingDay, month, year);
          weeksInThisMonth.push(newWeek);
          startingDay += 7;
        }

        return weeksInThisMonth;
      },
      hoveredDateRange: function hoveredDateRange() {
        if (!this.range) {
          return [];
        }

        if (!isNaN(this.selectedEndDate)) {
          return [];
        }

        if (this.hoveredEndDate < this.selectedBeginDate) {
          return [this.hoveredEndDate, this.selectedBeginDate].filter(isDefined);
        }

        return [this.selectedBeginDate, this.hoveredEndDate].filter(isDefined);
      }
    },
    methods: {
      /*
      * Emit input event with selected date as payload for v-model in parent
      */
      updateSelectedDate: function updateSelectedDate(date) {
        if (!this.range && !this.multiple) {
          this.$emit('input', date);
        } else if (this.range) {
          this.handleSelectRangeDate(date);
        } else if (this.multiple) {
          this.handleSelectMultipleDates(date);
        }
      },

      /*
      * If both begin and end dates are set, reset the end date and set the begin date.
      * If only begin date is selected, emit an array of the begin date and the new date.
      * If not set, only set the begin date.
      */
      handleSelectRangeDate: function handleSelectRangeDate(date) {
        if (this.selectedBeginDate && this.selectedEndDate) {
          this.selectedBeginDate = date;
          this.selectedEndDate = undefined;
          this.$emit('range-start', date);
        } else if (this.selectedBeginDate && !this.selectedEndDate) {
          if (this.selectedBeginDate > date) {
            this.selectedEndDate = this.selectedBeginDate;
            this.selectedBeginDate = date;
          } else {
            this.selectedEndDate = date;
          }

          this.$emit('range-end', date);
          this.$emit('input', [this.selectedBeginDate, this.selectedEndDate]);
        } else {
          this.selectedBeginDate = date;
          this.$emit('range-start', date);
        }
      },

      /*
      * If selected date already exists list of selected dates, remove it from the list
      * Otherwise, add date to list of selected dates
      */
      handleSelectMultipleDates: function handleSelectMultipleDates(date) {
        var multipleSelect = this.multipleSelectedDates.filter(function (selectedDate) {
          return selectedDate.getDate() === date.getDate() && selectedDate.getFullYear() === date.getFullYear() && selectedDate.getMonth() === date.getMonth();
        });

        if (multipleSelect.length) {
          this.multipleSelectedDates = this.multipleSelectedDates.filter(function (selectedDate) {
            return selectedDate.getDate() !== date.getDate() || selectedDate.getFullYear() !== date.getFullYear() || selectedDate.getMonth() !== date.getMonth();
          });
        } else {
          this.multipleSelectedDates = [].concat(_toConsumableArray(this.multipleSelectedDates), [date]);
        }
      },

      /*
       * Return array of all days in the week that the startingDate is within
       */
      weekBuilder: function weekBuilder(startingDate, month, year) {
        var thisMonth = new Date(year, month);
        var thisWeek = [];
        var dayOfWeek = new Date(year, month, startingDate).getDay();
        var end = dayOfWeek >= this.firstDayOfWeek ? dayOfWeek - this.firstDayOfWeek : 7 - this.firstDayOfWeek + dayOfWeek;
        var daysAgo = 1;

        for (var i = 0; i < end; i++) {
          thisWeek.unshift(new Date(thisMonth.getFullYear(), thisMonth.getMonth(), startingDate - daysAgo));
          daysAgo++;
        }

        thisWeek.push(new Date(year, month, startingDate));
        var daysForward = 1;

        while (thisWeek.length < 7) {
          thisWeek.push(new Date(year, month, startingDate + daysForward));
          daysForward++;
        }

        return thisWeek;
      },
      validateFocusedDay: function validateFocusedDay() {
        var focusedDate = new Date(this.focused.year, this.focused.month, this.focused.day);
        if (this.selectableDate(focusedDate)) return;
        var day = 0; // Number of days in the current month

        var monthDays = new Date(this.focused.year, this.focused.month + 1, 0).getDate();
        var firstFocusable = null;

        while (!firstFocusable && ++day < monthDays) {
          var date = new Date(this.focused.year, this.focused.month, day);

          if (this.selectableDate(date)) {
            firstFocusable = focusedDate;
            var focused = {
              day: date.getDate(),
              month: date.getMonth(),
              year: date.getFullYear()
            };
            this.$emit('update:focused', focused);
          }
        }
      },

      /*
       * Check that selected day is within earliest/latest params and
       * is within this month
       */
      selectableDate: function selectableDate(day) {
        var validity = [];

        if (this.minDate) {
          validity.push(day >= this.minDate);
        }

        if (this.maxDate) {
          validity.push(day <= this.maxDate);
        }

        if (this.nearbyMonthDays && !this.nearbySelectableMonthDays) {
          validity.push(day.getMonth() === this.focused.month);
        }

        if (this.selectableDates) {
          for (var i = 0; i < this.selectableDates.length; i++) {
            var enabledDate = this.selectableDates[i];

            if (day.getDate() === enabledDate.getDate() && day.getFullYear() === enabledDate.getFullYear() && day.getMonth() === enabledDate.getMonth()) {
              return true;
            } else {
              validity.push(false);
            }
          }
        }

        if (this.unselectableDates) {
          for (var _i = 0; _i < this.unselectableDates.length; _i++) {
            var disabledDate = this.unselectableDates[_i];
            validity.push(day.getDate() !== disabledDate.getDate() || day.getFullYear() !== disabledDate.getFullYear() || day.getMonth() !== disabledDate.getMonth());
          }
        }

        if (this.unselectableDaysOfWeek) {
          for (var _i2 = 0; _i2 < this.unselectableDaysOfWeek.length; _i2++) {
            var dayOfWeek = this.unselectableDaysOfWeek[_i2];
            validity.push(day.getDay() !== dayOfWeek);
          }
        }

        return validity.indexOf(false) < 0;
      },
      eventsInThisWeek: function eventsInThisWeek(week) {
        return this.eventsInThisMonth.filter(function (event) {
          var stripped = new Date(Date.parse(event.date));
          stripped.setHours(0, 0, 0, 0);
          var timed = stripped.getTime();
          return week.some(function (weekDate) {
            return weekDate.getTime() === timed;
          });
        });
      },
      setRangeHoverEndDate: function setRangeHoverEndDate(day) {
        this.hoveredEndDate = day;
      },
      changeFocus: function changeFocus(day) {
        var focused = {
          day: day.getDate(),
          month: day.getMonth(),
          year: day.getFullYear()
        };
        this.$emit('update:focused', focused);
      }
    }
  };

  const _hoisted_1$4 = { class: "datepicker-table" };
  const _hoisted_2$4 = { class: "datepicker-header" };

  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_b_datepicker_table_row = vue.resolveComponent("b-datepicker-table-row");

    return (vue.openBlock(), vue.createBlock("section", _hoisted_1$4, [
      vue.createVNode("header", _hoisted_2$4, [
        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.visibleDayNames, (day, index) => {
          return (vue.openBlock(), vue.createBlock("div", {
            key: index,
            class: "datepicker-cell"
          }, [
            vue.createVNode("span", null, vue.toDisplayString(day), 1 /* TEXT */)
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ]),
      vue.createVNode("div", {
        class: ["datepicker-body", {'has-events':$options.hasEvents}]
      }, [
        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.weeksInThisMonth, (week, index) => {
          return (vue.openBlock(), vue.createBlock(_component_b_datepicker_table_row, {
            key: index,
            "selected-date": $props.value,
            day: $props.focused.day,
            week: week,
            month: $props.focused.month,
            "min-date": $props.minDate,
            "max-date": $props.maxDate,
            disabled: $props.disabled,
            "unselectable-dates": $props.unselectableDates,
            "unselectable-days-of-week": $props.unselectableDaysOfWeek,
            "selectable-dates": $props.selectableDates,
            events: $options.eventsInThisWeek(week),
            indicators: $props.indicators,
            "date-creator": $props.dateCreator,
            "nearby-month-days": $props.nearbyMonthDays,
            "nearby-selectable-month-days": $props.nearbySelectableMonthDays,
            "show-week-number": $props.showWeekNumber,
            "week-number-clickable": $props.weekNumberClickable,
            "first-day-of-week": $props.firstDayOfWeek,
            "rules-for-first-week": $props.rulesForFirstWeek,
            range: $props.range,
            "hovered-date-range": $options.hoveredDateRange,
            onSelect: $options.updateSelectedDate,
            onRangeHoverEndDate: $options.setRangeHoverEndDate,
            multiple: $props.multiple,
            onChangeFocus: $options.changeFocus
          }, null, 8 /* PROPS */, ["selected-date", "day", "week", "month", "min-date", "max-date", "disabled", "unselectable-dates", "unselectable-days-of-week", "selectable-dates", "events", "indicators", "date-creator", "nearby-month-days", "nearby-selectable-month-days", "show-week-number", "week-number-clickable", "first-day-of-week", "rules-for-first-week", "range", "hovered-date-range", "onSelect", "onRangeHoverEndDate", "multiple", "onChangeFocus"]))
        }), 128 /* KEYED_FRAGMENT */))
      ], 2 /* CLASS */)
    ]))
  }

  script$4.render = render$4;
  script$4.__file = "src/components/datepicker/DatepickerTable.vue";

  var script$3 = {
    name: 'BDatepickerMonth',
    props: {
      value: {
        type: [Date, Array]
      },
      monthNames: Array,
      events: Array,
      indicators: String,
      minDate: Date,
      maxDate: Date,
      focused: Object,
      disabled: Boolean,
      dateCreator: Function,
      unselectableDates: Array,
      unselectableDaysOfWeek: Array,
      selectableDates: Array,
      range: Boolean,
      multiple: Boolean
    },
    data: function data() {
      return {
        selectedBeginDate: undefined,
        selectedEndDate: undefined,
        hoveredEndDate: undefined,
        multipleSelectedDates: this.multiple && this.value ? this.value : []
      };
    },
    computed: {
      hasEvents: function hasEvents() {
        return this.events && this.events.length;
      },

      /*
      * Return array of all events in the specified month
      */
      eventsInThisYear: function eventsInThisYear() {
        if (!this.events) return [];
        var yearEvents = [];

        for (var i = 0; i < this.events.length; i++) {
          var event = this.events[i];

          if (!event.hasOwnProperty('date')) {
            event = {
              date: event
            };
          }

          if (!event.hasOwnProperty('type')) {
            event.type = 'is-primary';
          }

          if (event.date.getFullYear() === this.focused.year) {
            yearEvents.push(event);
          }
        }

        return yearEvents;
      },
      monthDates: function monthDates() {
        var year = this.focused.year;
        var months = [];

        for (var i = 0; i < 12; i++) {
          var d = new Date(year, i, 1);
          d.setHours(0, 0, 0, 0);
          months.push(d);
        }

        return months;
      },
      focusedMonth: function focusedMonth() {
        return this.focused.month;
      },
      hoveredDateRange: function hoveredDateRange() {
        if (!this.range) {
          return [];
        }

        if (!isNaN(this.selectedEndDate)) {
          return [];
        }

        if (this.hoveredEndDate < this.selectedBeginDate) {
          return [this.hoveredEndDate, this.selectedBeginDate].filter(isDefined);
        }

        return [this.selectedBeginDate, this.hoveredEndDate].filter(isDefined);
      }
    },
    watch: {
      focusedMonth: function focusedMonth(month) {
        var _this = this;

        var refName = "month-".concat(month);

        if (this.$refs[refName] && this.$refs[refName].length > 0) {
          this.$nextTick(function () {
            if (_this.$refs[refName][0]) {
              _this.$refs[refName][0].focus();
            }
          }); // $nextTick needed when year is changed
        }
      }
    },
    methods: {
      selectMultipleDates: function selectMultipleDates(date) {
        var multipleSelect = this.multipleSelectedDates.filter(function (selectedDate) {
          return selectedDate.getDate() === date.getDate() && selectedDate.getFullYear() === date.getFullYear() && selectedDate.getMonth() === date.getMonth();
        });

        if (multipleSelect.length) {
          this.multipleSelectedDates = this.multipleSelectedDates.filter(function (selectedDate) {
            return selectedDate.getDate() !== date.getDate() || selectedDate.getFullYear() !== date.getFullYear() || selectedDate.getMonth() !== date.getMonth();
          });
        } else {
          this.multipleSelectedDates.push(date);
        }

        this.$emit('input', this.multipleSelectedDates);
      },
      selectableDate: function selectableDate(day) {
        var validity = [];

        if (this.minDate) {
          validity.push(day >= this.minDate);
        }

        if (this.maxDate) {
          validity.push(day <= this.maxDate);
        }

        validity.push(day.getFullYear() === this.focused.year);

        if (this.selectableDates) {
          for (var i = 0; i < this.selectableDates.length; i++) {
            var enabledDate = this.selectableDates[i];

            if (day.getFullYear() === enabledDate.getFullYear() && day.getMonth() === enabledDate.getMonth()) {
              return true;
            } else {
              validity.push(false);
            }
          }
        }

        if (this.unselectableDates) {
          for (var _i = 0; _i < this.unselectableDates.length; _i++) {
            var disabledDate = this.unselectableDates[_i];
            validity.push(day.getFullYear() !== disabledDate.getFullYear() || day.getMonth() !== disabledDate.getMonth());
          }
        }

        if (this.unselectableDaysOfWeek) {
          for (var _i2 = 0; _i2 < this.unselectableDaysOfWeek.length; _i2++) {
            var dayOfWeek = this.unselectableDaysOfWeek[_i2];
            validity.push(day.getDay() !== dayOfWeek);
          }
        }

        return validity.indexOf(false) < 0;
      },
      eventsDateMatch: function eventsDateMatch(day) {
        if (!this.eventsInThisYear.length) return false;
        var monthEvents = [];

        for (var i = 0; i < this.eventsInThisYear.length; i++) {
          if (this.eventsInThisYear[i].date.getMonth() === day.getMonth()) {
            monthEvents.push(this.events[i]);
          }
        }

        if (!monthEvents.length) {
          return false;
        }

        return monthEvents;
      },

      /*
      * Build classObject for cell using validations
      */
      classObject: function classObject(day) {
        function dateMatch(dateOne, dateTwo, multiple) {
          // if either date is null or undefined, return false
          if (!dateOne || !dateTwo || multiple) {
            return false;
          }

          if (Array.isArray(dateTwo)) {
            return dateTwo.some(function (date) {
              return dateOne.getFullYear() === date.getFullYear() && dateOne.getMonth() === date.getMonth();
            });
          }

          return dateOne.getFullYear() === dateTwo.getFullYear() && dateOne.getMonth() === dateTwo.getMonth();
        }

        function dateWithin(dateOne, dates, multiple) {
          if (!Array.isArray(dates) || multiple) {
            return false;
          }

          return dateOne > dates[0] && dateOne < dates[1];
        }

        function dateMultipleSelected(dateOne, dates, multiple) {
          if (!Array.isArray(dates) || !multiple) {
            return false;
          }

          return dates.some(function (date) {
            return dateOne.getDate() === date.getDate() && dateOne.getFullYear() === date.getFullYear() && dateOne.getMonth() === date.getMonth();
          });
        }

        return {
          'is-selected': dateMatch(day, this.value, this.multiple) || dateWithin(day, this.value, this.multiple) || dateMultipleSelected(day, this.multipleSelectedDates, this.multiple),
          'is-first-selected': dateMatch(day, Array.isArray(this.value) && this.value[0], this.multiple),
          'is-within-selected': dateWithin(day, this.value, this.multiple),
          'is-last-selected': dateMatch(day, Array.isArray(this.value) && this.value[1], this.multiple),
          'is-within-hovered-range': this.hoveredDateRange && this.hoveredDateRange.length === 2 && (dateMatch(day, this.hoveredDateRange) || dateWithin(day, this.hoveredDateRange)),
          'is-first-hovered': dateMatch(day, Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[0]),
          'is-within-hovered': dateWithin(day, this.hoveredDateRange),
          'is-last-hovered': dateMatch(day, Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[1]),
          'is-today': dateMatch(day, this.dateCreator()),
          'is-selectable': this.selectableDate(day) && !this.disabled,
          'is-unselectable': !this.selectableDate(day) || this.disabled
        };
      },
      manageKeydown: function manageKeydown(_ref, date) {
        var key = _ref.key;

        // https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent/key/Key_Values#Navigation_keys
        switch (key) {
          case ' ':
          case 'Space':
          case 'Spacebar':
          case 'Enter':
            {
              this.updateSelectedDate(date);
              break;
            }

          case 'ArrowLeft':
          case 'Left':
            {
              this.changeFocus(date, -1);
              break;
            }

          case 'ArrowRight':
          case 'Right':
            {
              this.changeFocus(date, 1);
              break;
            }

          case 'ArrowUp':
          case 'Up':
            {
              this.changeFocus(date, -3);
              break;
            }

          case 'ArrowDown':
          case 'Down':
            {
              this.changeFocus(date, 3);
              break;
            }
        }
      },

      /*
      * Emit input event with selected date as payload for v-model in parent
      */
      updateSelectedDate: function updateSelectedDate(date) {
        if (!this.range && !this.multiple) {
          this.emitChosenDate(date);
        } else if (this.range) {
          this.handleSelectRangeDate(date);
        } else if (this.multiple) {
          this.selectMultipleDates(date);
        }
      },

      /*
       * Emit select event with chosen date as payload
       */
      emitChosenDate: function emitChosenDate(day) {
        if (this.disabled) return;

        if (!this.multiple) {
          if (this.selectableDate(day)) {
            this.$emit('input', day);
          }
        } else {
          this.selectMultipleDates(day);
        }
      },

      /*
      * If both begin and end dates are set, reset the end date and set the begin date.
      * If only begin date is selected, emit an array of the begin date and the new date.
      * If not set, only set the begin date.
      */
      handleSelectRangeDate: function handleSelectRangeDate(date) {
        if (this.disabled) return;

        if (this.selectedBeginDate && this.selectedEndDate) {
          this.selectedBeginDate = date;
          this.selectedEndDate = undefined;
          this.$emit('range-start', date);
        } else if (this.selectedBeginDate && !this.selectedEndDate) {
          if (this.selectedBeginDate > date) {
            this.selectedEndDate = this.selectedBeginDate;
            this.selectedBeginDate = date;
          } else {
            this.selectedEndDate = date;
          }

          this.$emit('range-end', date);
          this.$emit('input', [this.selectedBeginDate, this.selectedEndDate]);
        } else {
          this.selectedBeginDate = date;
          this.$emit('range-start', date);
        }
      },
      setRangeHoverEndDate: function setRangeHoverEndDate(day) {
        if (this.range) {
          this.hoveredEndDate = day;
        }
      },
      changeFocus: function changeFocus(month, inc) {
        var nextMonth = month;
        nextMonth.setMonth(month.getMonth() + inc);
        this.$emit('change-focus', nextMonth);
      }
    }
  };

  const _hoisted_1$3 = { class: "datepicker-table" };
  const _hoisted_2$3 = { class: "datepicker-months" };
  const _hoisted_3$3 = {
    key: 0,
    class: "events"
  };

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("section", _hoisted_1$3, [
      vue.createVNode("div", {
        class: ["datepicker-body", {'has-events':$options.hasEvents}]
      }, [
        vue.createVNode("div", _hoisted_2$3, [
          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.monthDates, (date, index) => {
            return (vue.openBlock(), vue.createBlock(vue.Fragment, null, [
              ($options.selectableDate(date) && !$props.disabled)
                ? (vue.openBlock(), vue.createBlock("a", {
                    ref: `month-${date.getMonth()}`,
                    key: index + 'selectable',
                    class: [[
                              $options.classObject(date),
                              {'has-event': $options.eventsDateMatch(date)},
                              $props.indicators
                          ], "datepicker-cell"],
                    role: "button",
                    href: "#",
                    disabled: $props.disabled ? '' : null,
                    onClick: vue.withModifiers($event => ($options.updateSelectedDate(date)), ["prevent"]),
                    onMouseenter: $event => ($options.setRangeHoverEndDate(date)),
                    onKeydown: vue.withModifiers($event => ($options.manageKeydown($event, date)), ["prevent"]),
                    tabindex: $props.focused.month === date.getMonth() ? null : -1
                  }, [
                    vue.createTextVNode(vue.toDisplayString($props.monthNames[date.getMonth()]) + " ", 1 /* TEXT */),
                    ($options.eventsDateMatch(date))
                      ? (vue.openBlock(), vue.createBlock("div", _hoisted_3$3, [
                          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.eventsDateMatch(date), (event, index) => {
                            return (vue.openBlock(), vue.createBlock("div", {
                              class: ["event", event.type],
                              key: index
                            }, null, 2 /* CLASS */))
                          }), 128 /* KEYED_FRAGMENT */))
                        ]))
                      : vue.createCommentVNode("v-if", true)
                  ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled", "onClick", "onMouseenter", "onKeydown", "tabindex"]))
                : (vue.openBlock(), vue.createBlock("div", {
                    key: index,
                    class: [$options.classObject(date), "datepicker-cell"]
                  }, vue.toDisplayString($props.monthNames[date.getMonth()]), 3 /* TEXT, CLASS */))
            ], 64 /* STABLE_FRAGMENT */))
          }), 256 /* UNKEYED_FRAGMENT */))
        ])
      ], 2 /* CLASS */)
    ]))
  }

  script$3.render = render$3;
  script$3.__file = "src/components/datepicker/DatepickerMonth.vue";

  var _components$2;

  var defaultDateFormatter = function defaultDateFormatter(date, vm) {
    var targetDates = Array.isArray(date) ? date : [date];
    var dates = targetDates.map(function (date) {
      var d = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
      return !vm.isTypeMonth ? vm.dtf.format(d) : vm.dtfMonth.format(d);
    });
    return !vm.multiple ? dates.join(' - ') : dates.join(', ');
  };

  var defaultDateParser = function defaultDateParser(date, vm) {
    if (vm.dtf.formatToParts && typeof vm.dtf.formatToParts === 'function') {
      var formatRegex = (vm.isTypeMonth ? vm.dtfMonth : vm.dtf).formatToParts(new Date(2000, 11, 25)).map(function (part) {
        if (part.type === 'literal') {
          return part.value;
        }

        return "((?!=<".concat(part.type, ">)\\d+)");
      }).join('');
      var dateGroups = matchWithGroups(formatRegex, date); // We do a simple validation for the group.
      // If it is not valid, it will fallback to Date.parse below

      if (dateGroups.year && dateGroups.year.length === 4 && dateGroups.month && dateGroups.month <= 12) {
        if (vm.isTypeMonth) return new Date(dateGroups.year, dateGroups.month - 1);else if (dateGroups.day && dateGroups.day <= 31) {
          return new Date(dateGroups.year, dateGroups.month - 1, dateGroups.day, 12);
        }
      }
    } // Fallback if formatToParts is not supported or if we were not able to parse a valid date


    if (!vm.isTypeMonth) return new Date(Date.parse(date));

    if (date) {
      var s = date.split('/');
      var year = s[0].length === 4 ? s[0] : s[1];
      var month = s[0].length === 2 ? s[0] : s[1];

      if (year && month) {
        return new Date(parseInt(year, 10), parseInt(month - 1, 10), 1, 0, 0, 0, 0);
      }
    }

    return null;
  };

  var script$2 = {
    name: 'BDatepicker',
    components: (_components$2 = {}, _defineProperty(_components$2, script$4.name, script$4), _defineProperty(_components$2, script$3.name, script$3), _defineProperty(_components$2, script$9.name, script$9), _defineProperty(_components$2, script$7.name, script$7), _defineProperty(_components$2, script$6.name, script$6), _defineProperty(_components$2, script$a.name, script$a), _defineProperty(_components$2, script$c.name, script$c), _defineProperty(_components$2, script$b.name, script$b), _components$2),
    mixins: [FormElementMixin],
    inheritAttrs: false,
    provide: function provide() {
      return {
        $datepicker: this
      };
    },
    props: {
      value: {
        type: [Date, Array]
      },
      dayNames: {
        type: Array,
        default: function _default() {
          if (!Array.isArray(config.defaultDayNames)) {
            return undefined;
          }

          return config.defaultDayNames;
        }
      },
      monthNames: {
        type: Array,
        default: function _default() {
          if (!Array.isArray(config.defaultMonthNames)) {
            return undefined;
          }

          return config.defaultMonthNames;
        }
      },
      firstDayOfWeek: {
        type: Number,
        default: function _default() {
          if (typeof config.defaultFirstDayOfWeek === 'number') {
            return config.defaultFirstDayOfWeek;
          } else {
            return 0;
          }
        }
      },
      inline: Boolean,
      minDate: Date,
      maxDate: Date,
      focusedDate: Date,
      placeholder: String,
      editable: Boolean,
      disabled: Boolean,
      horizontalTimePicker: Boolean,
      unselectableDates: Array,
      unselectableDaysOfWeek: {
        type: Array,
        default: function _default() {
          return config.defaultUnselectableDaysOfWeek;
        }
      },
      selectableDates: Array,
      dateFormatter: {
        type: Function,
        default: function _default(date, vm) {
          if (typeof config.defaultDateFormatter === 'function') {
            return config.defaultDateFormatter(date);
          } else {
            return defaultDateFormatter(date, vm);
          }
        }
      },
      dateParser: {
        type: Function,
        default: function _default(date, vm) {
          if (typeof config.defaultDateParser === 'function') {
            return config.defaultDateParser(date);
          } else {
            return defaultDateParser(date, vm);
          }
        }
      },
      dateCreator: {
        type: Function,
        default: function _default() {
          if (typeof config.defaultDateCreator === 'function') {
            return config.defaultDateCreator();
          } else {
            return new Date();
          }
        }
      },
      mobileNative: {
        type: Boolean,
        default: function _default() {
          return config.defaultDatepickerMobileNative;
        }
      },
      position: String,
      iconRight: String,
      events: Array,
      indicators: {
        type: String,
        default: 'dots'
      },
      openOnFocus: Boolean,
      iconPrev: {
        type: String,
        default: function _default() {
          return config.defaultIconPrev;
        }
      },
      iconNext: {
        type: String,
        default: function _default() {
          return config.defaultIconNext;
        }
      },
      yearsRange: {
        type: Array,
        default: function _default() {
          return config.defaultDatepickerYearsRange;
        }
      },
      type: {
        type: String,
        validator: function validator(value) {
          return ['month'].indexOf(value) >= 0;
        }
      },
      nearbyMonthDays: {
        type: Boolean,
        default: function _default() {
          return config.defaultDatepickerNearbyMonthDays;
        }
      },
      nearbySelectableMonthDays: {
        type: Boolean,
        default: function _default() {
          return config.defaultDatepickerNearbySelectableMonthDays;
        }
      },
      showWeekNumber: {
        type: Boolean,
        default: function _default() {
          return config.defaultDatepickerShowWeekNumber;
        }
      },
      weekNumberClickable: {
        type: Boolean,
        default: function _default() {
          return config.defaultDatepickerWeekNumberClickable;
        }
      },
      rulesForFirstWeek: {
        type: Number,
        default: function _default() {
          return 4;
        }
      },
      range: {
        type: Boolean,
        default: false
      },
      closeOnClick: {
        type: Boolean,
        default: true
      },
      multiple: {
        type: Boolean,
        default: false
      },
      mobileModal: {
        type: Boolean,
        default: function _default() {
          return config.defaultDatepickerMobileModal;
        }
      },
      focusable: {
        type: Boolean,
        default: true
      },
      trapFocus: {
        type: Boolean,
        default: function _default() {
          return config.defaultTrapFocus;
        }
      },
      appendToBody: Boolean,
      ariaNextLabel: String,
      ariaPreviousLabel: String
    },
    data: function data() {
      var focusedDate = (Array.isArray(this.value) ? this.value[0] : this.value) || this.focusedDate || this.dateCreator();

      if (!this.value && this.maxDate && this.maxDate.getFullYear() < focusedDate.getFullYear()) {
        focusedDate.setFullYear(this.maxDate.getFullYear());
      }

      return {
        dateSelected: this.value,
        focusedDateData: {
          day: focusedDate.getDate(),
          month: focusedDate.getMonth(),
          year: focusedDate.getFullYear()
        },
        _elementRef: 'input',
        _isDatepicker: true
      };
    },
    computed: {
      computedValue: {
        get: function get() {
          return this.dateSelected;
        },
        set: function set(value) {
          var _this = this;

          this.updateInternalState(value);
          if (!this.multiple) this.togglePicker(false);
          this.$emit('input', value);

          if (this.useHtml5Validation) {
            this.$nextTick(function () {
              _this.checkHtml5Validity();
            });
          }
        }
      },
      formattedValue: function formattedValue() {
        return this.formatValue(this.computedValue);
      },
      localeOptions: function localeOptions() {
        return new Intl.DateTimeFormat(this.locale, {
          year: 'numeric',
          month: 'numeric'
        }).resolvedOptions();
      },
      dtf: function dtf() {
        return new Intl.DateTimeFormat(this.locale, {
          timeZone: 'UTC'
        });
      },
      dtfMonth: function dtfMonth() {
        return new Intl.DateTimeFormat(this.locale, {
          year: this.localeOptions.year || 'numeric',
          month: this.localeOptions.month || '2-digit',
          timeZone: 'UTC'
        });
      },
      newMonthNames: function newMonthNames() {
        if (Array.isArray(this.monthNames)) {
          return this.monthNames;
        }

        return getMonthNames(this.locale);
      },
      newDayNames: function newDayNames() {
        if (Array.isArray(this.dayNames)) {
          return this.dayNames;
        }

        return getWeekdayNames(this.locale);
      },
      listOfMonths: function listOfMonths() {
        var minMonth = 0;
        var maxMonth = 12;

        if (this.minDate && this.focusedDateData.year === this.minDate.getFullYear()) {
          minMonth = this.minDate.getMonth();
        }

        if (this.maxDate && this.focusedDateData.year === this.maxDate.getFullYear()) {
          maxMonth = this.maxDate.getMonth();
        }

        return this.newMonthNames.map(function (name, index) {
          return {
            name: name,
            index: index,
            disabled: index < minMonth || index > maxMonth
          };
        });
      },

      /*
       * Returns an array of years for the year dropdown. If earliest/latest
       * dates are set by props, range of years will fall within those dates.
       */
      listOfYears: function listOfYears() {
        var latestYear = this.focusedDateData.year + this.yearsRange[1];

        if (this.maxDate && this.maxDate.getFullYear() < latestYear) {
          latestYear = Math.max(this.maxDate.getFullYear(), this.focusedDateData.year);
        }

        var earliestYear = this.focusedDateData.year + this.yearsRange[0];

        if (this.minDate && this.minDate.getFullYear() > earliestYear) {
          earliestYear = Math.min(this.minDate.getFullYear(), this.focusedDateData.year);
        }

        var arrayOfYears = [];

        for (var i = earliestYear; i <= latestYear; i++) {
          arrayOfYears.push(i);
        }

        return arrayOfYears.reverse();
      },
      showPrev: function showPrev() {
        if (!this.minDate) return false;

        if (this.isTypeMonth) {
          return this.focusedDateData.year <= this.minDate.getFullYear();
        }

        var dateToCheck = new Date(this.focusedDateData.year, this.focusedDateData.month);
        var date = new Date(this.minDate.getFullYear(), this.minDate.getMonth());
        return dateToCheck <= date;
      },
      showNext: function showNext() {
        if (!this.maxDate) return false;

        if (this.isTypeMonth) {
          return this.focusedDateData.year >= this.maxDate.getFullYear();
        }

        var dateToCheck = new Date(this.focusedDateData.year, this.focusedDateData.month);
        var date = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth());
        return dateToCheck >= date;
      },
      isMobile: function isMobile$1() {
        return this.mobileNative && isMobile.any();
      },
      isTypeMonth: function isTypeMonth() {
        return this.type === 'month';
      },
      ariaRole: function ariaRole() {
        if (!this.inline) {
          return 'dialog';
        }
      }
    },
    watch: {
      /**
       * When v-model is changed:
       *   1. Update internal value.
       *   2. If it's invalid, validate again.
       */
      value: function value(_value) {
        this.updateInternalState(_value);
        if (!this.multiple) this.togglePicker(false);
      },
      focusedDate: function focusedDate(value) {
        if (value) {
          this.focusedDateData = {
            day: value.getDate(),
            month: value.getMonth(),
            year: value.getFullYear()
          };
        }
      },

      /*
       * Emit input event on month and/or year change
       */
      'focusedDateData.month': function focusedDateDataMonth(value) {
        this.$emit('change-month', value);
      },
      'focusedDateData.year': function focusedDateDataYear(value) {
        this.$emit('change-year', value);
      }
    },
    methods: {
      /*
       * Parse string into date
       */
      onChange: function onChange(value) {
        var date = this.dateParser(value, this);

        if (date && (!isNaN(date) || Array.isArray(date) && date.length === 2 && !isNaN(date[0]) && !isNaN(date[1]))) {
          this.computedValue = date;
        } else {
          // Force refresh input value when not valid date
          this.computedValue = null;

          if (this.$refs.input) {
            this.$refs.input.newValue = this.computedValue;
          }
        }
      },

      /*
       * Format date into string
       */
      formatValue: function formatValue(value) {
        if (Array.isArray(value)) {
          var isArrayWithValidDates = Array.isArray(value) && value.every(function (v) {
            return !isNaN(v);
          });
          return isArrayWithValidDates ? this.dateFormatter(_toConsumableArray(value), this) : null;
        }

        return value && !isNaN(value) ? this.dateFormatter(value, this) : null;
      },

      /*
       * Either decrement month by 1 if not January or decrement year by 1
       * and set month to 11 (December) or decrement year when 'month'
       */
      prev: function prev() {
        if (this.disabled) return;

        if (this.isTypeMonth) {
          this.focusedDateData.year -= 1;
        } else {
          if (this.focusedDateData.month > 0) {
            this.focusedDateData.month -= 1;
          } else {
            this.focusedDateData.month = 11;
            this.focusedDateData.year -= 1;
          }
        }
      },

      /*
       * Either increment month by 1 if not December or increment year by 1
       * and set month to 0 (January) or increment year when 'month'
       */
      next: function next() {
        if (this.disabled) return;

        if (this.isTypeMonth) {
          this.focusedDateData.year += 1;
        } else {
          if (this.focusedDateData.month < 11) {
            this.focusedDateData.month += 1;
          } else {
            this.focusedDateData.month = 0;
            this.focusedDateData.year += 1;
          }
        }
      },
      formatNative: function formatNative(value) {
        return this.isTypeMonth ? this.formatYYYYMM(value) : this.formatYYYYMMDD(value);
      },

      /*
       * Format date into string 'YYYY-MM-DD'
       */
      formatYYYYMMDD: function formatYYYYMMDD(value) {
        var date = new Date(value);

        if (value && !isNaN(date)) {
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          return year + '-' + ((month < 10 ? '0' : '') + month) + '-' + ((day < 10 ? '0' : '') + day);
        }

        return '';
      },

      /*
       * Format date into string 'YYYY-MM'
       */
      formatYYYYMM: function formatYYYYMM(value) {
        var date = new Date(value);

        if (value && !isNaN(date)) {
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          return year + '-' + ((month < 10 ? '0' : '') + month);
        }

        return '';
      },

      /*
       * Parse date from string
       */
      onChangeNativePicker: function onChangeNativePicker(event) {
        var date = event.target.value;
        var s = date ? date.split('-') : [];

        if (s.length === 3) {
          var year = parseInt(s[0], 10);
          var month = parseInt(s[1]) - 1;
          var day = parseInt(s[2]);
          this.computedValue = new Date(year, month, day);
        } else {
          this.computedValue = null;
        }
      },
      updateInternalState: function updateInternalState(value) {
        var currentDate = Array.isArray(value) ? !value.length ? this.dateCreator() : value[0] : !value ? this.dateCreator() : value;
        this.focusedDateData = {
          day: currentDate.getDate(),
          month: currentDate.getMonth(),
          year: currentDate.getFullYear()
        };
        this.dateSelected = value;
      },

      /*
       * Toggle datepicker
       */
      togglePicker: function togglePicker(active) {
        if (this.$refs.dropdown) {
          if (this.closeOnClick) {
            this.$refs.dropdown.isActive = typeof active === 'boolean' ? active : !this.$refs.dropdown.isActive;
          }
        }
      },

      /*
       * Call default onFocus method and show datepicker
       */
      handleOnFocus: function handleOnFocus(event) {
        this.onFocus(event);

        if (this.openOnFocus) {
          this.togglePicker(true);
        }
      },

      /*
       * Toggle dropdown
       */
      toggle: function toggle() {
        if (this.mobileNative && this.isMobile) {
          var input = this.$refs.input.$refs.input;
          input.focus();
          input.click();
          return;
        }

        this.$refs.dropdown.toggle();
      },

      /*
       * Avoid dropdown toggle when is already visible
       */
      onInputClick: function onInputClick(event) {
        if (this.$refs.dropdown.isActive) {
          event.stopPropagation();
        }
      },

      /**
       * Keypress event that is bound to the document.
       */
      keyPress: function keyPress(_ref) {
        var key = _ref.key;

        if (this.$refs.dropdown && this.$refs.dropdown.isActive && (key === 'Escape' || key === 'Esc')) {
          this.togglePicker(false);
        }
      },

      /**
       * Emit 'blur' event on dropdown is not active (closed)
       */
      onActiveChange: function onActiveChange(value) {
        if (!value) {
          this.onBlur();
        }
      },
      changeFocus: function changeFocus(day) {
        this.focusedDateData = {
          day: day.getDate(),
          month: day.getMonth(),
          year: day.getFullYear()
        };
      }
    },
    created: function created() {
      if (typeof window !== 'undefined') {
        document.addEventListener('keyup', this.keyPress);
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (typeof window !== 'undefined') {
        document.removeEventListener('keyup', this.keyPress);
      }
    }
  };

  const _hoisted_1$2 = { class: "datepicker-header" };
  const _hoisted_2$2 = { class: "pagination-list" };
  const _hoisted_3$2 = { key: 1 };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_b_input = vue.resolveComponent("b-input");
    const _component_b_icon = vue.resolveComponent("b-icon");
    const _component_b_select = vue.resolveComponent("b-select");
    const _component_b_field = vue.resolveComponent("b-field");
    const _component_b_datepicker_table = vue.resolveComponent("b-datepicker-table");
    const _component_b_datepicker_month = vue.resolveComponent("b-datepicker-month");
    const _component_b_dropdown_item = vue.resolveComponent("b-dropdown-item");
    const _component_b_dropdown = vue.resolveComponent("b-dropdown");

    return (vue.openBlock(), vue.createBlock("div", {
      class: ["datepicker control", [_ctx.size, {'is-expanded': _ctx.expanded}]]
    }, [
      (!$options.isMobile || $props.inline)
        ? (vue.openBlock(), vue.createBlock(_component_b_dropdown, {
            key: 0,
            ref: "dropdown",
            position: $props.position,
            disabled: $props.disabled,
            inline: $props.inline,
            "mobile-modal": $props.mobileModal,
            "trap-focus": $props.trapFocus,
            "aria-role": $options.ariaRole,
            "aria-modal": !$props.inline,
            "append-to-body": $props.appendToBody,
            "append-to-body-copy-parent": "",
            onActiveChange: $options.onActiveChange
          }, vue.createSlots({
            default: vue.withCtx(() => [
              vue.createVNode(_component_b_dropdown_item, {
                disabled: $props.disabled,
                focusable: $props.focusable,
                custom: "",
                class: {'dropdown-horizonal-timepicker': $props.horizontalTimePicker}
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode("div", null, [
                    vue.createVNode("header", _hoisted_1$2, [
                      (_ctx.$slots.header !== undefined && _ctx.$slots.header.length)
                        ? vue.renderSlot(_ctx.$slots, "header", { key: 0 })
                        : (vue.openBlock(), vue.createBlock("div", {
                            key: 1,
                            class: ["pagination field is-centered", _ctx.size]
                          }, [
                            vue.withDirectives(vue.createVNode("a", {
                              class: "pagination-previous",
                              role: "button",
                              href: "#",
                              disabled: $props.disabled ? '' : null,
                              "aria-label": $props.ariaPreviousLabel,
                              onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => ($options.prev && $options.prev(...args)), ["prevent"])),
                              onKeydown: [
                                _cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers((...args) => ($options.prev && $options.prev(...args)), ["prevent"]), ["enter"])),
                                _cache[5] || (_cache[5] = vue.withKeys(vue.withModifiers((...args) => ($options.prev && $options.prev(...args)), ["prevent"]), ["space"]))
                              ]
                            }, [
                              vue.createVNode(_component_b_icon, {
                                icon: $props.iconPrev,
                                pack: _ctx.iconPack,
                                both: "",
                                type: "is-primary is-clickable"
                              }, null, 8 /* PROPS */, ["icon", "pack"])
                            ], 40 /* PROPS, HYDRATE_EVENTS */, ["disabled", "aria-label"]), [
                              [vue.vShow, !$options.showPrev && !$props.disabled]
                            ]),
                            vue.withDirectives(vue.createVNode("a", {
                              class: "pagination-next",
                              role: "button",
                              href: "#",
                              disabled: $props.disabled ? '' : null,
                              "aria-label": $props.ariaNextLabel,
                              onClick: _cache[6] || (_cache[6] = vue.withModifiers((...args) => ($options.next && $options.next(...args)), ["prevent"])),
                              onKeydown: [
                                _cache[7] || (_cache[7] = vue.withKeys(vue.withModifiers((...args) => ($options.next && $options.next(...args)), ["prevent"]), ["enter"])),
                                _cache[8] || (_cache[8] = vue.withKeys(vue.withModifiers((...args) => ($options.next && $options.next(...args)), ["prevent"]), ["space"]))
                              ]
                            }, [
                              vue.createVNode(_component_b_icon, {
                                icon: $props.iconNext,
                                pack: _ctx.iconPack,
                                both: "",
                                type: "is-primary is-clickable"
                              }, null, 8 /* PROPS */, ["icon", "pack"])
                            ], 40 /* PROPS, HYDRATE_EVENTS */, ["disabled", "aria-label"]), [
                              [vue.vShow, !$options.showNext && !$props.disabled]
                            ]),
                            vue.createVNode("div", _hoisted_2$2, [
                              vue.createVNode(_component_b_field, null, {
                                default: vue.withCtx(() => [
                                  (!$options.isTypeMonth)
                                    ? (vue.openBlock(), vue.createBlock(_component_b_select, {
                                        key: 0,
                                        modelValue: $data.focusedDateData.month,
                                        "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => ($data.focusedDateData.month = $event)),
                                        disabled: $props.disabled,
                                        size: _ctx.size
                                      }, {
                                        default: vue.withCtx(() => [
                                          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.listOfMonths, (month) => {
                                            return (vue.openBlock(), vue.createBlock("option", {
                                              value: month.index,
                                              key: month.name,
                                              disabled: month.disabled ? '' : null
                                            }, vue.toDisplayString(month.name), 9 /* TEXT, PROPS */, ["value", "disabled"]))
                                          }), 128 /* KEYED_FRAGMENT */))
                                        ]),
                                        _: 1 /* STABLE */
                                      }, 8 /* PROPS */, ["modelValue", "disabled", "size"]))
                                    : vue.createCommentVNode("v-if", true),
                                  vue.createVNode(_component_b_select, {
                                    modelValue: $data.focusedDateData.year,
                                    "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => ($data.focusedDateData.year = $event)),
                                    disabled: $props.disabled,
                                    size: _ctx.size
                                  }, {
                                    default: vue.withCtx(() => [
                                      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.listOfYears, (year) => {
                                        return (vue.openBlock(), vue.createBlock("option", {
                                          value: year,
                                          key: year
                                        }, vue.toDisplayString(year), 9 /* TEXT, PROPS */, ["value"]))
                                      }), 128 /* KEYED_FRAGMENT */))
                                    ]),
                                    _: 1 /* STABLE */
                                  }, 8 /* PROPS */, ["modelValue", "disabled", "size"])
                                ]),
                                _: 1 /* STABLE */
                              })
                            ])
                          ], 2 /* CLASS */))
                    ]),
                    (!$options.isTypeMonth)
                      ? (vue.openBlock(), vue.createBlock("div", {
                          key: 0,
                          class: ["datepicker-content", {'content-horizonal-timepicker': $props.horizontalTimePicker}]
                        }, [
                          vue.createVNode(_component_b_datepicker_table, {
                            modelValue: $options.computedValue,
                            "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => ($options.computedValue = $event)),
                            "day-names": $options.newDayNames,
                            "month-names": $options.newMonthNames,
                            "first-day-of-week": $props.firstDayOfWeek,
                            "rules-for-first-week": $props.rulesForFirstWeek,
                            "min-date": $props.minDate,
                            "max-date": $props.maxDate,
                            focused: $data.focusedDateData,
                            disabled: $props.disabled,
                            "unselectable-dates": $props.unselectableDates,
                            "unselectable-days-of-week": $props.unselectableDaysOfWeek,
                            "selectable-dates": $props.selectableDates,
                            events: $props.events,
                            indicators: $props.indicators,
                            "date-creator": $props.dateCreator,
                            "type-month": $options.isTypeMonth,
                            "nearby-month-days": $props.nearbyMonthDays,
                            "nearby-selectable-month-days": $props.nearbySelectableMonthDays,
                            "show-week-number": $props.showWeekNumber,
                            "week-number-clickable": $props.weekNumberClickable,
                            range: $props.range,
                            multiple: $props.multiple,
                            onRangeStart: _cache[12] || (_cache[12] = date => _ctx.$emit('range-start', date)),
                            onRangeEnd: _cache[13] || (_cache[13] = date => _ctx.$emit('range-end', date)),
                            onClose: _cache[14] || (_cache[14] = $event => ($options.togglePicker(false))),
                            "onUpdate:focused": _cache[15] || (_cache[15] = $event => ($data.focusedDateData = $event))
                          }, null, 8 /* PROPS */, ["modelValue", "day-names", "month-names", "first-day-of-week", "rules-for-first-week", "min-date", "max-date", "focused", "disabled", "unselectable-dates", "unselectable-days-of-week", "selectable-dates", "events", "indicators", "date-creator", "type-month", "nearby-month-days", "nearby-selectable-month-days", "show-week-number", "week-number-clickable", "range", "multiple"])
                        ], 2 /* CLASS */))
                      : (vue.openBlock(), vue.createBlock("div", _hoisted_3$2, [
                          vue.createVNode(_component_b_datepicker_month, {
                            modelValue: $options.computedValue,
                            "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => ($options.computedValue = $event)),
                            "month-names": $options.newMonthNames,
                            "min-date": $props.minDate,
                            "max-date": $props.maxDate,
                            focused: $data.focusedDateData,
                            disabled: $props.disabled,
                            "unselectable-dates": $props.unselectableDates,
                            "unselectable-days-of-week": $props.unselectableDaysOfWeek,
                            "selectable-dates": $props.selectableDates,
                            events: $props.events,
                            indicators: $props.indicators,
                            "date-creator": $props.dateCreator,
                            range: $props.range,
                            multiple: $props.multiple,
                            onRangeStart: _cache[17] || (_cache[17] = date => _ctx.$emit('range-start', date)),
                            onRangeEnd: _cache[18] || (_cache[18] = date => _ctx.$emit('range-end', date)),
                            onClose: _cache[19] || (_cache[19] = $event => ($options.togglePicker(false))),
                            onChangeFocus: $options.changeFocus,
                            "onUpdate:focused": _cache[20] || (_cache[20] = $event => ($data.focusedDateData = $event))
                          }, null, 8 /* PROPS */, ["modelValue", "month-names", "min-date", "max-date", "focused", "disabled", "unselectable-dates", "unselectable-days-of-week", "selectable-dates", "events", "indicators", "date-creator", "range", "multiple", "onChangeFocus"])
                        ]))
                  ]),
                  (_ctx.$slots.default !== undefined && _ctx.$slots.default.length)
                    ? (vue.openBlock(), vue.createBlock("footer", {
                        key: 0,
                        class: ["datepicker-footer", {'footer-horizontal-timepicker': $props.horizontalTimePicker}]
                      }, [
                        vue.renderSlot(_ctx.$slots, "default")
                      ], 2 /* CLASS */))
                    : vue.createCommentVNode("v-if", true)
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["disabled", "focusable", "class"])
            ]),
            _: 2 /* DYNAMIC */
          }, [
            (!$props.inline)
              ? {
                  name: "trigger",
                  fn: vue.withCtx(() => [
                    vue.renderSlot(_ctx.$slots, "trigger", {}, () => [
                      vue.createVNode(_component_b_input, vue.mergeProps({
                        ref: "input",
                        autocomplete: "off",
                        value: $options.formattedValue,
                        placeholder: $props.placeholder,
                        size: _ctx.size,
                        icon: _ctx.icon,
                        "icon-right": $props.iconRight,
                        "icon-pack": _ctx.iconPack,
                        rounded: _ctx.rounded,
                        loading: _ctx.loading,
                        disabled: $props.disabled,
                        readonly: !$props.editable
                      }, _ctx.$attrs, {
                        "use-html5-validation": false,
                        onClick: $options.onInputClick,
                        onKeyup: _cache[1] || (_cache[1] = vue.withKeys($event => ($options.togglePicker(true)), ["native","enter"])),
                        onChange: _cache[2] || (_cache[2] = $event => ($options.onChange($event.target.value))),
                        onFocus: $options.handleOnFocus
                      }), null, 16 /* FULL_PROPS */, ["value", "placeholder", "size", "icon", "icon-right", "icon-pack", "rounded", "loading", "disabled", "readonly", "onClick", "onFocus"])
                    ])
                  ])
                }
              : undefined
          ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["position", "disabled", "inline", "mobile-modal", "trap-focus", "aria-role", "aria-modal", "append-to-body", "onActiveChange"]))
        : (vue.openBlock(), vue.createBlock(_component_b_input, vue.mergeProps({
            key: 1,
            ref: "input",
            type: !$options.isTypeMonth ? 'date' : 'month',
            autocomplete: "off",
            value: $options.formatNative($options.computedValue),
            placeholder: $props.placeholder,
            size: _ctx.size,
            icon: _ctx.icon,
            "icon-pack": _ctx.iconPack,
            rounded: _ctx.rounded,
            loading: _ctx.loading,
            max: $options.formatNative($props.maxDate),
            min: $options.formatNative($props.minDate),
            disabled: $props.disabled,
            readonly: false
          }, _ctx.$attrs, {
            "use-html5-validation": false,
            onChange: $options.onChangeNativePicker,
            onFocus: _ctx.onFocus,
            onBlur: _ctx.onBlur
          }), null, 16 /* FULL_PROPS */, ["type", "value", "placeholder", "size", "icon", "icon-pack", "rounded", "loading", "max", "min", "disabled", "onChange", "onFocus", "onBlur"]))
    ], 2 /* CLASS */))
  }

  script$2.render = render$2;
  script$2.__file = "src/components/datepicker/Datepicker.vue";

  var AM$1 = 'AM';
  var PM$1 = 'PM';
  var HOUR_FORMAT_24 = '24';
  var HOUR_FORMAT_12 = '12';

  var defaultTimeFormatter = function defaultTimeFormatter(date, vm) {
    return vm.dtf.format(date);
  };

  var defaultTimeParser = function defaultTimeParser(timeString, vm) {
    if (timeString) {
      var d = null;

      if (vm.computedValue && !isNaN(vm.computedValue)) {
        d = new Date(vm.computedValue);
      } else {
        d = vm.timeCreator();
        d.setMilliseconds(0);
      }

      if (vm.dtf.formatToParts && typeof vm.dtf.formatToParts === 'function') {
        var formatRegex = vm.dtf.formatToParts(d).map(function (part) {
          if (part.type === 'literal') {
            return part.value.replace(/ /g, '\\s?');
          } else if (part.type === 'dayPeriod') {
            return "((?!=<".concat(part.type, ">)(").concat(vm.amString, "|").concat(vm.pmString, "|").concat(AM$1, "|").concat(PM$1, "|").concat(AM$1.toLowerCase(), "|").concat(PM$1.toLowerCase(), ")?)");
          }

          return "((?!=<".concat(part.type, ">)\\d+)");
        }).join('');
        var timeGroups = matchWithGroups(formatRegex, timeString); // We do a simple validation for the group.
        // If it is not valid, it will fallback to Date.parse below

        timeGroups.hour = timeGroups.hour ? parseInt(timeGroups.hour, 10) : null;
        timeGroups.minute = timeGroups.minute ? parseInt(timeGroups.minute, 10) : null;
        timeGroups.second = timeGroups.second ? parseInt(timeGroups.second, 10) : null;

        if (timeGroups.hour && timeGroups.hour >= 0 && timeGroups.hour < 24 && timeGroups.minute && timeGroups.minute >= 0 && timeGroups.minute < 59) {
          if (timeGroups.dayPeriod && (timeGroups.dayPeriod.toLowerCase() === vm.pmString.toLowerCase() || timeGroups.dayPeriod.toLowerCase() === PM$1.toLowerCase()) && timeGroups.hour < 12) {
            timeGroups.hour += 12;
          }

          d.setHours(timeGroups.hour);
          d.setMinutes(timeGroups.minute);
          d.setSeconds(timeGroups.second || 0);
          return d;
        }
      } // Fallback if formatToParts is not supported or if we were not able to parse a valid date


      var am = false;

      if (vm.hourFormat === HOUR_FORMAT_12) {
        var dateString12 = timeString.split(' ');
        timeString = dateString12[0];
        am = dateString12[1] === vm.amString || dateString12[1] === AM$1;
      }

      var time = timeString.split(':');
      var hours = parseInt(time[0], 10);
      var minutes = parseInt(time[1], 10);
      var seconds = vm.enableSeconds ? parseInt(time[2], 10) : 0;

      if (isNaN(hours) || hours < 0 || hours > 23 || vm.hourFormat === HOUR_FORMAT_12 && (hours < 1 || hours > 12) || isNaN(minutes) || minutes < 0 || minutes > 59) {
        return null;
      }

      d.setSeconds(seconds);
      d.setMinutes(minutes);

      if (vm.hourFormat === HOUR_FORMAT_12) {
        if (am && hours === 12) {
          hours = 0;
        } else if (!am && hours !== 12) {
          hours += 12;
        }
      }

      d.setHours(hours);
      return new Date(d.getTime());
    }

    return null;
  };

  var TimepickerMixin = {
    mixins: [FormElementMixin],
    inheritAttrs: false,
    props: {
      value: Date,
      inline: Boolean,
      minTime: Date,
      maxTime: Date,
      placeholder: String,
      editable: Boolean,
      disabled: Boolean,
      hourFormat: {
        type: String,
        validator: function validator(value) {
          return value === HOUR_FORMAT_24 || value === HOUR_FORMAT_12;
        }
      },
      incrementHours: {
        type: Number,
        default: 1
      },
      incrementMinutes: {
        type: Number,
        default: 1
      },
      incrementSeconds: {
        type: Number,
        default: 1
      },
      timeFormatter: {
        type: Function,
        default: function _default(date, vm) {
          if (typeof config.defaultTimeFormatter === 'function') {
            return config.defaultTimeFormatter(date);
          } else {
            return defaultTimeFormatter(date, vm);
          }
        }
      },
      timeParser: {
        type: Function,
        default: function _default(date, vm) {
          if (typeof config.defaultTimeParser === 'function') {
            return config.defaultTimeParser(date);
          } else {
            return defaultTimeParser(date, vm);
          }
        }
      },
      mobileNative: {
        type: Boolean,
        default: function _default() {
          return config.defaultTimepickerMobileNative;
        }
      },
      timeCreator: {
        type: Function,
        default: function _default() {
          if (typeof config.defaultTimeCreator === 'function') {
            return config.defaultTimeCreator();
          } else {
            return new Date();
          }
        }
      },
      position: String,
      unselectableTimes: Array,
      openOnFocus: Boolean,
      enableSeconds: Boolean,
      defaultMinutes: Number,
      defaultSeconds: Number,
      focusable: {
        type: Boolean,
        default: true
      },
      tzOffset: {
        type: Number,
        default: 0
      },
      appendToBody: Boolean,
      resetOnMeridianChange: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        dateSelected: this.value,
        hoursSelected: null,
        minutesSelected: null,
        secondsSelected: null,
        meridienSelected: null,
        _elementRef: 'input',
        AM: AM$1,
        PM: PM$1,
        HOUR_FORMAT_24: HOUR_FORMAT_24,
        HOUR_FORMAT_12: HOUR_FORMAT_12
      };
    },
    computed: {
      computedValue: {
        get: function get() {
          return this.dateSelected;
        },
        set: function set(value) {
          this.dateSelected = value;
          this.$emit('input', this.dateSelected);
        }
      },
      localeOptions: function localeOptions() {
        return new Intl.DateTimeFormat(this.locale, {
          hour: 'numeric',
          minute: 'numeric',
          second: this.enableSeconds ? 'numeric' : undefined
        }).resolvedOptions();
      },
      dtf: function dtf() {
        return new Intl.DateTimeFormat(this.locale, {
          hour: this.localeOptions.hour || 'numeric',
          minute: this.localeOptions.minute || 'numeric',
          second: this.enableSeconds ? this.localeOptions.second || 'numeric' : undefined,
          hour12: !this.isHourFormat24,
          timeZone: 'UTC'
        });
      },
      newHourFormat: function newHourFormat() {
        return this.hourFormat || (this.localeOptions.hour12 ? HOUR_FORMAT_12 : HOUR_FORMAT_24);
      },
      sampleTime: function sampleTime() {
        var d = this.timeCreator();
        d.setHours(10);
        d.setSeconds(0);
        d.setMinutes(0);
        d.setMilliseconds(0);
        return d;
      },
      hourLiteral: function hourLiteral() {
        if (this.dtf.formatToParts && typeof this.dtf.formatToParts === 'function') {
          var d = this.sampleTime;
          var parts = this.dtf.formatToParts(d);
          var literal = parts.find(function (part, idx) {
            return idx > 0 && parts[idx - 1].type === 'hour';
          });

          if (literal) {
            return literal.value;
          }
        }

        return ':';
      },
      minuteLiteral: function minuteLiteral() {
        if (this.dtf.formatToParts && typeof this.dtf.formatToParts === 'function') {
          var d = this.sampleTime;
          var parts = this.dtf.formatToParts(d);
          var literal = parts.find(function (part, idx) {
            return idx > 0 && parts[idx - 1].type === 'minute';
          });

          if (literal) {
            return literal.value;
          }
        }

        return ':';
      },
      secondLiteral: function secondLiteral() {
        if (this.dtf.formatToParts && typeof this.dtf.formatToParts === 'function') {
          var d = this.sampleTime;
          var parts = this.dtf.formatToParts(d);
          var literal = parts.find(function (part, idx) {
            return idx > 0 && parts[idx - 1].type === 'second';
          });

          if (literal) {
            return literal.value;
          }
        }
      },
      amString: function amString() {
        if (this.dtf.formatToParts && typeof this.dtf.formatToParts === 'function') {
          var d = this.sampleTime;
          d.setHours(10);
          var dayPeriod = this.dtf.formatToParts(d).find(function (part) {
            return part.type === 'dayPeriod';
          });

          if (dayPeriod) {
            return dayPeriod.value;
          }
        }

        return this.AM;
      },
      pmString: function pmString() {
        if (this.dtf.formatToParts && typeof this.dtf.formatToParts === 'function') {
          var d = this.sampleTime;
          d.setHours(20);
          var dayPeriod = this.dtf.formatToParts(d).find(function (part) {
            return part.type === 'dayPeriod';
          });

          if (dayPeriod) {
            return dayPeriod.value;
          }
        }

        return this.PM;
      },
      hours: function hours() {
        if (!this.incrementHours || this.incrementHours < 1) throw new Error('Hour increment cannot be null or less than 1.');
        var hours = [];
        var numberOfHours = this.isHourFormat24 ? 24 : 12;

        for (var i = 0; i < numberOfHours; i += this.incrementHours) {
          var value = i;
          var label = value;

          if (!this.isHourFormat24) {
            value = i + 1;
            label = value;

            if (this.meridienSelected === this.amString || this.meridienSelected === this.AM) {
              if (value === 12) {
                value = 0;
              }
            } else if (this.meridienSelected === this.pmString || this.meridienSelected === this.PM) {
              if (value !== 12) {
                value += 12;
              }
            }
          }

          hours.push({
            label: this.formatNumber(label),
            value: value
          });
        }

        return hours;
      },
      minutes: function minutes() {
        if (!this.incrementMinutes || this.incrementMinutes < 1) throw new Error('Minute increment cannot be null or less than 1.');
        var minutes = [];

        for (var i = 0; i < 60; i += this.incrementMinutes) {
          minutes.push({
            label: this.formatNumber(i, true),
            value: i
          });
        }

        return minutes;
      },
      seconds: function seconds() {
        if (!this.incrementSeconds || this.incrementSeconds < 1) throw new Error('Second increment cannot be null or less than 1.');
        var seconds = [];

        for (var i = 0; i < 60; i += this.incrementSeconds) {
          seconds.push({
            label: this.formatNumber(i, true),
            value: i
          });
        }

        return seconds;
      },
      meridiens: function meridiens() {
        return [this.amString, this.pmString];
      },
      isMobile: function isMobile$1() {
        return this.mobileNative && isMobile.any();
      },
      isHourFormat24: function isHourFormat24() {
        return this.newHourFormat === HOUR_FORMAT_24;
      }
    },
    watch: {
      hourFormat: function hourFormat() {
        if (this.hoursSelected !== null) {
          this.meridienSelected = this.hoursSelected >= 12 ? this.pmString : this.amString;
        }
      },

      /**
       * When v-model is changed:
       *   1. Update internal value.
       *   2. If it's invalid, validate again.
       */
      value: {
        handler: function handler(value) {
          this.updateInternalState(value);
          !this.isValid && this.$refs.input.checkHtml5Validity();
        },
        immediate: true
      }
    },
    methods: {
      onMeridienChange: function onMeridienChange(value) {
        if (this.hoursSelected !== null && this.resetOnMeridianChange) {
          this.hoursSelected = null;
          this.minutesSelected = null;
          this.secondsSelected = null;
          this.computedValue = null;
        } else if (this.hoursSelected !== null) {
          if (value === this.pmString || value === PM$1) {
            this.hoursSelected += 12;
          } else if (value === this.amString || value === AM$1) {
            this.hoursSelected -= 12;
          }
        }

        this.updateDateSelected(this.hoursSelected, this.minutesSelected, this.enableSeconds ? this.secondsSelected : 0, value);
      },
      onHoursChange: function onHoursChange(value) {
        if (!this.minutesSelected && typeof this.defaultMinutes !== 'undefined') {
          this.minutesSelected = this.defaultMinutes;
        }

        if (!this.secondsSelected && typeof this.defaultSeconds !== 'undefined') {
          this.secondsSelected = this.defaultSeconds;
        }

        this.updateDateSelected(parseInt(value, 10), this.minutesSelected, this.enableSeconds ? this.secondsSelected : 0, this.meridienSelected);
      },
      onMinutesChange: function onMinutesChange(value) {
        if (!this.secondsSelected && this.defaultSeconds) {
          this.secondsSelected = this.defaultSeconds;
        }

        this.updateDateSelected(this.hoursSelected, parseInt(value, 10), this.enableSeconds ? this.secondsSelected : 0, this.meridienSelected);
      },
      onSecondsChange: function onSecondsChange(value) {
        this.updateDateSelected(this.hoursSelected, this.minutesSelected, parseInt(value, 10), this.meridienSelected);
      },
      updateDateSelected: function updateDateSelected(hours, minutes, seconds, meridiens) {
        if (hours != null && minutes != null && (!this.isHourFormat24 && meridiens !== null || this.isHourFormat24)) {
          var time = null;

          if (this.computedValue && !isNaN(this.computedValue)) {
            time = new Date(this.computedValue);
          } else {
            time = this.timeCreator();
            time.setMilliseconds(0);
          }

          time.setHours(hours);
          time.setMinutes(minutes);
          time.setSeconds(seconds);
          this.computedValue = new Date(time.getTime());
        }
      },
      updateInternalState: function updateInternalState(value) {
        if (value) {
          this.hoursSelected = value.getHours();
          this.minutesSelected = value.getMinutes();
          this.secondsSelected = value.getSeconds();
          this.meridienSelected = value.getHours() >= 12 ? this.pmString : this.amString;
        } else {
          this.hoursSelected = null;
          this.minutesSelected = null;
          this.secondsSelected = null;
          this.meridienSelected = this.amString;
        }

        this.dateSelected = value;
      },
      isHourDisabled: function isHourDisabled(hour) {
        var _this = this;

        var disabled = false;

        if (this.minTime) {
          var minHours = this.minTime.getHours();
          var noMinutesAvailable = this.minutes.every(function (minute) {
            return _this.isMinuteDisabledForHour(hour, minute.value);
          });
          disabled = hour < minHours || noMinutesAvailable;
        }

        if (this.maxTime) {
          if (!disabled) {
            var maxHours = this.maxTime.getHours();
            disabled = hour > maxHours;
          }
        }

        if (this.unselectableTimes) {
          if (!disabled) {
            var unselectable = this.unselectableTimes.filter(function (time) {
              if (_this.enableSeconds && _this.secondsSelected !== null) {
                return time.getHours() === hour && time.getMinutes() === _this.minutesSelected && time.getSeconds() === _this.secondsSelected;
              } else if (_this.minutesSelected !== null) {
                return time.getHours() === hour && time.getMinutes() === _this.minutesSelected;
              }

              return false;
            });

            if (unselectable.length > 0) {
              disabled = true;
            } else {
              disabled = this.minutes.every(function (minute) {
                return _this.unselectableTimes.filter(function (time) {
                  return time.getHours() === hour && time.getMinutes() === minute.value;
                }).length > 0;
              });
            }
          }
        }

        return disabled;
      },
      isMinuteDisabledForHour: function isMinuteDisabledForHour(hour, minute) {
        var disabled = false;

        if (this.minTime) {
          var minHours = this.minTime.getHours();
          var minMinutes = this.minTime.getMinutes();
          disabled = hour === minHours && minute < minMinutes;
        }

        if (this.maxTime) {
          if (!disabled) {
            var maxHours = this.maxTime.getHours();
            var maxMinutes = this.maxTime.getMinutes();
            disabled = hour === maxHours && minute > maxMinutes;
          }
        }

        return disabled;
      },
      isMinuteDisabled: function isMinuteDisabled(minute) {
        var _this2 = this;

        var disabled = false;

        if (this.hoursSelected !== null) {
          if (this.isHourDisabled(this.hoursSelected)) {
            disabled = true;
          } else {
            disabled = this.isMinuteDisabledForHour(this.hoursSelected, minute);
          }

          if (this.unselectableTimes) {
            if (!disabled) {
              var unselectable = this.unselectableTimes.filter(function (time) {
                if (_this2.enableSeconds && _this2.secondsSelected !== null) {
                  return time.getHours() === _this2.hoursSelected && time.getMinutes() === minute && time.getSeconds() === _this2.secondsSelected;
                } else {
                  return time.getHours() === _this2.hoursSelected && time.getMinutes() === minute;
                }
              });
              disabled = unselectable.length > 0;
            }
          }
        }

        return disabled;
      },
      isSecondDisabled: function isSecondDisabled(second) {
        var _this3 = this;

        var disabled = false;

        if (this.minutesSelected !== null) {
          if (this.isMinuteDisabled(this.minutesSelected)) {
            disabled = true;
          } else {
            if (this.minTime) {
              var minHours = this.minTime.getHours();
              var minMinutes = this.minTime.getMinutes();
              var minSeconds = this.minTime.getSeconds();
              disabled = this.hoursSelected === minHours && this.minutesSelected === minMinutes && second < minSeconds;
            }

            if (this.maxTime) {
              if (!disabled) {
                var maxHours = this.maxTime.getHours();
                var maxMinutes = this.maxTime.getMinutes();
                var maxSeconds = this.maxTime.getSeconds();
                disabled = this.hoursSelected === maxHours && this.minutesSelected === maxMinutes && second > maxSeconds;
              }
            }
          }

          if (this.unselectableTimes) {
            if (!disabled) {
              var unselectable = this.unselectableTimes.filter(function (time) {
                return time.getHours() === _this3.hoursSelected && time.getMinutes() === _this3.minutesSelected && time.getSeconds() === second;
              });
              disabled = unselectable.length > 0;
            }
          }
        }

        return disabled;
      },

      /*
       * Parse string into date
       */
      onChange: function onChange(value) {
        var date = this.timeParser(value, this);
        this.updateInternalState(date);

        if (date && !isNaN(date)) {
          this.computedValue = date;
        } else {
          // Force refresh input value when not valid date
          this.computedValue = null;
          this.$refs.input.newValue = this.computedValue;
        }
      },

      /*
       * Toggle timepicker
       */
      toggle: function toggle(active) {
        if (this.$refs.dropdown) {
          this.$refs.dropdown.isActive = typeof active === 'boolean' ? active : !this.$refs.dropdown.isActive;
        }
      },

      /*
       * Close timepicker
       */
      close: function close() {
        this.toggle(false);
      },

      /*
       * Call default onFocus method and show timepicker
       */
      handleOnFocus: function handleOnFocus() {
        this.onFocus();

        if (this.openOnFocus) {
          this.toggle(true);
        }
      },

      /*
       * Format date into string 'HH-MM-SS'
       */
      formatHHMMSS: function formatHHMMSS(value) {
        var date = new Date(value);

        if (value && !isNaN(date)) {
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var seconds = date.getSeconds();
          return this.formatNumber(hours, true) + ':' + this.formatNumber(minutes, true) + ':' + this.formatNumber(seconds, true);
        }

        return '';
      },

      /*
       * Parse time from string
       */
      onChangeNativePicker: function onChangeNativePicker(event) {
        var date = event.target.value;

        if (date) {
          var time = null;

          if (this.computedValue && !isNaN(this.computedValue)) {
            time = new Date(this.computedValue);
          } else {
            time = new Date();
            time.setMilliseconds(0);
          }

          var t = date.split(':');
          time.setHours(parseInt(t[0], 10));
          time.setMinutes(parseInt(t[1], 10));
          time.setSeconds(t[2] ? parseInt(t[2], 10) : 0);
          this.computedValue = new Date(time.getTime());
        } else {
          this.computedValue = null;
        }
      },
      formatNumber: function formatNumber(value, prependZero) {
        return this.isHourFormat24 || prependZero ? this.pad(value) : value;
      },
      pad: function pad(value) {
        return (value < 10 ? '0' : '') + value;
      },

      /*
       * Format date into string
       */
      formatValue: function formatValue(date) {
        if (date && !isNaN(date)) {
          return this.timeFormatter(date, this);
        } else {
          return null;
        }
      },

      /**
       * Keypress event that is bound to the document.
       */
      keyPress: function keyPress(_ref) {
        var key = _ref.key;

        if (this.$refs.dropdown && this.$refs.dropdown.isActive && (key === 'Escape' || key === 'Esc')) {
          this.toggle(false);
        }
      },

      /**
       * Emit 'blur' event on dropdown is not active (closed)
       */
      onActiveChange: function onActiveChange(value) {
        if (!value) {
          this.onBlur();
        }
      }
    },
    created: function created() {
      if (typeof window !== 'undefined') {
        document.addEventListener('keyup', this.keyPress);
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (typeof window !== 'undefined') {
        document.removeEventListener('keyup', this.keyPress);
      }
    }
  };

  var _components$1;
  var script$1 = {
    name: 'BTimepicker',
    components: (_components$1 = {}, _defineProperty(_components$1, script$9.name, script$9), _defineProperty(_components$1, script$7.name, script$7), _defineProperty(_components$1, script$6.name, script$6), _defineProperty(_components$1, script$a.name, script$a), _defineProperty(_components$1, script$c.name, script$c), _defineProperty(_components$1, script$b.name, script$b), _components$1),
    mixins: [TimepickerMixin],
    inheritAttrs: false,
    data: function data() {
      return {
        _isTimepicker: true
      };
    },
    computed: {
      nativeStep: function nativeStep() {
        if (this.enableSeconds) return '1';
      }
    }
  };

  const _hoisted_1$1 = { class: "control is-colon" };
  const _hoisted_2$1 = { class: "control is-colon" };
  const _hoisted_3$1 = { class: "control is-colon" };
  const _hoisted_4$1 = {
    key: 0,
    class: "timepicker-footer"
  };

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_b_input = vue.resolveComponent("b-input");
    const _component_b_select = vue.resolveComponent("b-select");
    const _component_b_field = vue.resolveComponent("b-field");
    const _component_b_dropdown_item = vue.resolveComponent("b-dropdown-item");
    const _component_b_dropdown = vue.resolveComponent("b-dropdown");

    return (vue.openBlock(), vue.createBlock("div", {
      class: ["timepicker control", [_ctx.size, {'is-expanded': _ctx.expanded}]]
    }, [
      (!_ctx.isMobile || _ctx.inline)
        ? (vue.openBlock(), vue.createBlock(_component_b_dropdown, {
            key: 0,
            ref: "dropdown",
            position: _ctx.position,
            disabled: _ctx.disabled,
            inline: _ctx.inline,
            "append-to-body": _ctx.appendToBody,
            "append-to-body-copy-parent": "",
            onActiveChange: _ctx.onActiveChange
          }, vue.createSlots({
            default: vue.withCtx(() => [
              vue.createVNode(_component_b_dropdown_item, {
                disabled: _ctx.disabled,
                focusable: _ctx.focusable,
                custom: ""
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_b_field, {
                    grouped: "",
                    position: "is-centered"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_b_select, {
                        modelValue: _ctx.hoursSelected,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (_ctx.hoursSelected = $event)),
                        onChange: _cache[4] || (_cache[4] = $event => (_ctx.onHoursChange($event.target.value))),
                        disabled: _ctx.disabled,
                        placeholder: "00"
                      }, {
                        default: vue.withCtx(() => [
                          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.hours, (hour) => {
                            return (vue.openBlock(), vue.createBlock("option", {
                              value: hour.value,
                              key: hour.value,
                              disabled: _ctx.isHourDisabled(hour.value) ? '' : null
                            }, vue.toDisplayString(hour.label), 9 /* TEXT, PROPS */, ["value", "disabled"]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ]),
                        _: 1 /* STABLE */
                      }, 8 /* PROPS */, ["modelValue", "disabled"]),
                      vue.createVNode("span", _hoisted_1$1, vue.toDisplayString(_ctx.hourLiteral), 1 /* TEXT */),
                      vue.createVNode(_component_b_select, {
                        modelValue: _ctx.minutesSelected,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (_ctx.minutesSelected = $event)),
                        onChange: _cache[6] || (_cache[6] = $event => (_ctx.onMinutesChange($event.target.value))),
                        disabled: _ctx.disabled,
                        placeholder: "00"
                      }, {
                        default: vue.withCtx(() => [
                          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.minutes, (minute) => {
                            return (vue.openBlock(), vue.createBlock("option", {
                              value: minute.value,
                              key: minute.value,
                              disabled: _ctx.isMinuteDisabled(minute.value) ? '' : null
                            }, vue.toDisplayString(minute.label), 9 /* TEXT, PROPS */, ["value", "disabled"]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ]),
                        _: 1 /* STABLE */
                      }, 8 /* PROPS */, ["modelValue", "disabled"]),
                      (_ctx.enableSeconds)
                        ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                            vue.createVNode("span", _hoisted_2$1, vue.toDisplayString(_ctx.minuteLiteral), 1 /* TEXT */),
                            vue.createVNode(_component_b_select, {
                              modelValue: _ctx.secondsSelected,
                              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (_ctx.secondsSelected = $event)),
                              onChange: _cache[8] || (_cache[8] = $event => (_ctx.onSecondsChange($event.target.value))),
                              disabled: _ctx.disabled,
                              placeholder: "00"
                            }, {
                              default: vue.withCtx(() => [
                                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.seconds, (second) => {
                                  return (vue.openBlock(), vue.createBlock("option", {
                                    value: second.value,
                                    key: second.value,
                                    disabled: _ctx.isSecondDisabled(second.value) ? '' : null
                                  }, vue.toDisplayString(second.label), 9 /* TEXT, PROPS */, ["value", "disabled"]))
                                }), 128 /* KEYED_FRAGMENT */))
                              ]),
                              _: 1 /* STABLE */
                            }, 8 /* PROPS */, ["modelValue", "disabled"]),
                            vue.createVNode("span", _hoisted_3$1, vue.toDisplayString(_ctx.secondLiteral), 1 /* TEXT */)
                          ], 64 /* STABLE_FRAGMENT */))
                        : vue.createCommentVNode("v-if", true),
                      (!_ctx.isHourFormat24)
                        ? (vue.openBlock(), vue.createBlock(_component_b_select, {
                            key: 1,
                            modelValue: _ctx.meridienSelected,
                            "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (_ctx.meridienSelected = $event)),
                            onChange: _cache[10] || (_cache[10] = $event => (_ctx.onMeridienChange($event.target.value))),
                            disabled: _ctx.disabled
                          }, {
                            default: vue.withCtx(() => [
                              (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.meridiens, (meridien) => {
                                return (vue.openBlock(), vue.createBlock("option", {
                                  value: meridien,
                                  key: meridien
                                }, vue.toDisplayString(meridien), 9 /* TEXT, PROPS */, ["value"]))
                              }), 128 /* KEYED_FRAGMENT */))
                            ]),
                            _: 1 /* STABLE */
                          }, 8 /* PROPS */, ["modelValue", "disabled"]))
                        : vue.createCommentVNode("v-if", true)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  (_ctx.$slots.default !== undefined && _ctx.$slots.default.length)
                    ? (vue.openBlock(), vue.createBlock("footer", _hoisted_4$1, [
                        vue.renderSlot(_ctx.$slots, "default")
                      ]))
                    : vue.createCommentVNode("v-if", true)
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["disabled", "focusable"])
            ]),
            _: 2 /* DYNAMIC */
          }, [
            (!_ctx.inline)
              ? {
                  name: "trigger",
                  fn: vue.withCtx(() => [
                    vue.renderSlot(_ctx.$slots, "trigger", {}, () => [
                      vue.createVNode(_component_b_input, vue.mergeProps({
                        ref: "input",
                        autocomplete: "off",
                        value: _ctx.formatValue(_ctx.computedValue),
                        placeholder: _ctx.placeholder,
                        size: _ctx.size,
                        icon: _ctx.icon,
                        "icon-pack": _ctx.iconPack,
                        loading: _ctx.loading,
                        disabled: _ctx.disabled,
                        readonly: !_ctx.editable,
                        rounded: _ctx.rounded
                      }, _ctx.$attrs, {
                        "use-html5-validation": _ctx.useHtml5Validation,
                        onKeyup: _cache[1] || (_cache[1] = vue.withKeys($event => (_ctx.toggle(true)), ["native","enter"])),
                        onChange: _cache[2] || (_cache[2] = $event => (_ctx.onChange($event.target.value))),
                        onFocus: _ctx.handleOnFocus
                      }), null, 16 /* FULL_PROPS */, ["value", "placeholder", "size", "icon", "icon-pack", "loading", "disabled", "readonly", "rounded", "use-html5-validation", "onFocus"])
                    ])
                  ])
                }
              : undefined
          ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["position", "disabled", "inline", "append-to-body", "onActiveChange"]))
        : (vue.openBlock(), vue.createBlock(_component_b_input, vue.mergeProps({
            key: 1,
            ref: "input",
            type: "time",
            step: $options.nativeStep,
            autocomplete: "off",
            value: _ctx.formatHHMMSS(_ctx.computedValue),
            placeholder: _ctx.placeholder,
            size: _ctx.size,
            icon: _ctx.icon,
            "icon-pack": _ctx.iconPack,
            rounded: _ctx.rounded,
            loading: _ctx.loading,
            max: _ctx.formatHHMMSS(_ctx.maxTime),
            min: _ctx.formatHHMMSS(_ctx.minTime),
            disabled: _ctx.disabled,
            readonly: false,
            "reset-on-meridian-change": _ctx.isReset
          }, _ctx.$attrs, {
            "use-html5-validation": _ctx.useHtml5Validation,
            onChange: _cache[11] || (_cache[11] = $event => (_ctx.onChange($event.target.value))),
            onFocus: _ctx.handleOnFocus,
            onBlur: _cache[12] || (_cache[12] = $event => (_ctx.onBlur() && _ctx.checkHtml5Validity()))
          }), null, 16 /* FULL_PROPS */, ["step", "value", "placeholder", "size", "icon", "icon-pack", "rounded", "loading", "max", "min", "disabled", "reset-on-meridian-change", "use-html5-validation", "onFocus"]))
    ], 2 /* CLASS */))
  }

  script$1.render = render$1;
  script$1.__file = "src/components/timepicker/Timepicker.vue";

  var _components;
  var AM = 'AM';
  var PM = 'PM';
  var script = {
    name: 'BDatetimepicker',
    components: (_components = {}, _defineProperty(_components, script$2.name, script$2), _defineProperty(_components, script$1.name, script$1), _components),
    mixins: [FormElementMixin],
    inheritAttrs: false,
    props: {
      value: {
        type: Date
      },
      editable: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      horizontalTimePicker: Boolean,
      disabled: Boolean,
      icon: String,
      iconPack: String,
      inline: Boolean,
      openOnFocus: Boolean,
      position: String,
      mobileNative: {
        type: Boolean,
        default: true
      },
      minDatetime: Date,
      maxDatetime: Date,
      datetimeFormatter: {
        type: Function
      },
      datetimeParser: {
        type: Function
      },
      datetimeCreator: {
        type: Function,
        default: function _default(date) {
          if (typeof config.defaultDatetimeCreator === 'function') {
            return config.defaultDatetimeCreator(date);
          } else {
            return date;
          }
        }
      },
      datepicker: Object,
      timepicker: Object,
      tzOffset: {
        type: Number,
        default: 0
      },
      focusable: {
        type: Boolean,
        default: true
      },
      appendToBody: Boolean
    },
    data: function data() {
      return {
        newValue: this.adjustValue(this.value)
      };
    },
    computed: {
      computedValue: {
        get: function get() {
          return this.newValue;
        },
        set: function set(value) {
          if (value) {
            var val = new Date(value.getTime());

            if (this.newValue) {
              // restore time part
              if ((value.getDate() !== this.newValue.getDate() || value.getMonth() !== this.newValue.getMonth() || value.getFullYear() !== this.newValue.getFullYear()) && value.getHours() === 0 && value.getMinutes() === 0 && value.getSeconds() === 0) {
                val.setHours(this.newValue.getHours(), this.newValue.getMinutes(), this.newValue.getSeconds(), 0);
              }
            } else {
              val = this.datetimeCreator(value);
            } // check min and max range


            if (this.minDatetime && val < this.adjustValue(this.minDatetime)) {
              val = this.adjustValue(this.minDatetime);
            } else if (this.maxDatetime && val > this.adjustValue(this.maxDatetime)) {
              val = this.adjustValue(this.maxDatetime);
            }

            this.newValue = new Date(val.getTime());
          } else {
            this.newValue = this.adjustValue(this.value);
          }

          var adjustedValue = this.adjustValue(this.newValue, true); // reverse adjust

          this.$emit('input', adjustedValue);
        }
      },
      localeOptions: function localeOptions() {
        return new Intl.DateTimeFormat(this.locale, {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: this.enableSeconds() ? 'numeric' : undefined
        }).resolvedOptions();
      },
      dtf: function dtf() {
        return new Intl.DateTimeFormat(this.locale, {
          year: this.localeOptions.year || 'numeric',
          month: this.localeOptions.month || 'numeric',
          day: this.localeOptions.day || 'numeric',
          hour: this.localeOptions.hour || 'numeric',
          minute: this.localeOptions.minute || 'numeric',
          second: this.enableSeconds() ? this.localeOptions.second || 'numeric' : undefined,
          hour12: !this.isHourFormat24(),
          timeZone: 'UTC'
        });
      },
      isMobileNative: function isMobileNative() {
        return this.mobileNative && this.tzOffset === 0;
      },
      isMobile: function isMobile$1() {
        return this.isMobileNative && isMobile.any();
      },
      minDate: function minDate() {
        if (!this.minDatetime) {
          return this.datepicker ? this.adjustValue(this.datepicker.minDate) : null;
        }

        var adjMinDatetime = this.adjustValue(this.minDatetime);
        return new Date(adjMinDatetime.getFullYear(), adjMinDatetime.getMonth(), adjMinDatetime.getDate(), 0, 0, 0, 0);
      },
      maxDate: function maxDate() {
        if (!this.maxDatetime) {
          return this.datepicker ? this.adjustValue(this.datepicker.maxDate) : null;
        }

        var adjMaxDatetime = this.adjustValue(this.maxDatetime);
        return new Date(adjMaxDatetime.getFullYear(), adjMaxDatetime.getMonth(), adjMaxDatetime.getDate(), 0, 0, 0, 0);
      },
      minTime: function minTime() {
        if (!this.minDatetime || this.newValue === null || typeof this.newValue === 'undefined') {
          return this.timepicker ? this.adjustValue(this.timepicker.minTime) : null;
        }

        var adjMinDatetime = this.adjustValue(this.minDatetime);

        if (adjMinDatetime.getFullYear() === this.newValue.getFullYear() && adjMinDatetime.getMonth() === this.newValue.getMonth() && adjMinDatetime.getDate() === this.newValue.getDate()) {
          return adjMinDatetime;
        }
      },
      maxTime: function maxTime() {
        if (!this.maxDatetime || this.newValue === null || typeof this.newValue === 'undefined') {
          return this.timepicker ? this.adjustValue(this.timepicker.maxTime) : null;
        }

        var adjMaxDatetime = this.adjustValue(this.maxDatetime);

        if (adjMaxDatetime.getFullYear() === this.newValue.getFullYear() && adjMaxDatetime.getMonth() === this.newValue.getMonth() && adjMaxDatetime.getDate() === this.newValue.getDate()) {
          return adjMaxDatetime;
        }
      },
      datepickerSize: function datepickerSize() {
        return this.datepicker && this.datepicker.size ? this.datepicker.size : this.size;
      },
      timepickerSize: function timepickerSize() {
        return this.timepicker && this.timepicker.size ? this.timepicker.size : this.size;
      },
      timepickerDisabled: function timepickerDisabled() {
        return this.timepicker && this.timepicker.disabled ? this.timepicker.disabled : this.disabled;
      }
    },
    watch: {
      value: function value(val) {
        this.newValue = this.adjustValue(this.value);
      },
      tzOffset: function tzOffset(val) {
        this.newValue = this.adjustValue(this.value);
      }
    },
    methods: {
      enableSeconds: function enableSeconds() {
        if (this.$refs.timepicker) {
          return this.$refs.timepicker.enableSeconds;
        }

        return false;
      },
      isHourFormat24: function isHourFormat24() {
        if (this.$refs.timepicker) {
          return this.$refs.timepicker.isHourFormat24;
        }

        return !this.localeOptions.hour12;
      },
      adjustValue: function adjustValue(value) {
        var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (!value) return value;

        if (reverse) {
          return new Date(value.getTime() - this.tzOffset * 60000);
        } else {
          return new Date(value.getTime() + this.tzOffset * 60000);
        }
      },
      defaultDatetimeParser: function defaultDatetimeParser(date) {
        if (typeof this.datetimeParser === 'function') {
          return this.datetimeParser(date);
        } else if (typeof config.defaultDatetimeParser === 'function') {
          return config.defaultDatetimeParser(date);
        } else {
          if (this.dtf.formatToParts && typeof this.dtf.formatToParts === 'function') {
            var dayPeriods = [AM, PM, AM.toLowerCase(), PM.toLowerCase()];

            if (this.$refs.timepicker) {
              dayPeriods.push(this.$refs.timepicker.amString);
              dayPeriods.push(this.$refs.timepicker.pmString);
            }

            var parts = this.dtf.formatToParts(new Date());
            var formatRegex = parts.map(function (part, idx) {
              if (part.type === 'literal') {
                if (idx + 1 < parts.length && parts[idx + 1].type === 'hour') {
                  return "[^\\d]+";
                }

                return part.value.replace(/ /g, '\\s?');
              } else if (part.type === 'dayPeriod') {
                return "((?!=<".concat(part.type, ">)(").concat(dayPeriods.join('|'), ")?)");
              }

              return "((?!=<".concat(part.type, ">)\\d+)");
            }).join('');
            var datetimeGroups = matchWithGroups(formatRegex, date); // We do a simple validation for the group.
            // If it is not valid, it will fallback to Date.parse below

            if (datetimeGroups.year && datetimeGroups.year.length === 4 && datetimeGroups.month && datetimeGroups.month <= 12 && datetimeGroups.day && datetimeGroups.day <= 31 && datetimeGroups.hour && datetimeGroups.hour >= 0 && datetimeGroups.hour < 24 && datetimeGroups.minute && datetimeGroups.minute >= 0 && datetimeGroups.minute < 59) {
              var d = new Date(datetimeGroups.year, datetimeGroups.month - 1, datetimeGroups.day, datetimeGroups.hour, datetimeGroups.minute, datetimeGroups.second || 0);
              return d;
            }
          }

          return new Date(Date.parse(date));
        }
      },
      defaultDatetimeFormatter: function defaultDatetimeFormatter(date) {
        if (typeof this.datetimeFormatter === 'function') {
          return this.datetimeFormatter(date);
        } else if (typeof config.defaultDatetimeFormatter === 'function') {
          return config.defaultDatetimeFormatter(date);
        } else {
          return this.dtf.format(date);
        }
      },

      /*
      * Parse date from string
      */
      onChangeNativePicker: function onChangeNativePicker(event) {
        var date = event.target.value;
        var s = date ? date.split(/\D/) : [];

        if (s.length >= 5) {
          var year = parseInt(s[0], 10);
          var month = parseInt(s[1], 10) - 1;
          var day = parseInt(s[2], 10);
          var hours = parseInt(s[3], 10);
          var minutes = parseInt(s[4], 10); // Seconds are omitted intentionally; they are unsupported by input
          // type=datetime-local and cause the control to fail native validation

          this.computedValue = new Date(year, month, day, hours, minutes);
        } else {
          this.computedValue = null;
        }
      },
      formatNative: function formatNative(value) {
        var date = new Date(value);

        if (value && !isNaN(date)) {
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var seconds = date.getSeconds();
          return year + '-' + ((month < 10 ? '0' : '') + month) + '-' + ((day < 10 ? '0' : '') + day) + 'T' + ((hours < 10 ? '0' : '') + hours) + ':' + ((minutes < 10 ? '0' : '') + minutes) + ':' + ((seconds < 10 ? '0' : '') + seconds);
        }

        return '';
      },
      toggle: function toggle() {
        this.$refs.datepicker.toggle();
      }
    },
    mounted: function mounted() {
      if (!this.isMobile || this.inline) {
        // $refs attached, it's time to refresh datepicker (input)
        if (this.newValue) {
          this.$refs.datepicker.$forceUpdate();
        }
      }
    }
  };

  const _hoisted_1 = { class: "level is-mobile" };
  const _hoisted_2 = {
    key: 0,
    class: "level-item has-text-centered"
  };
  const _hoisted_3 = { class: "level-item has-text-centered" };
  const _hoisted_4 = {
    key: 1,
    class: "level-item has-text-centered"
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_b_timepicker = vue.resolveComponent("b-timepicker");
    const _component_b_datepicker = vue.resolveComponent("b-datepicker");
    const _component_b_input = vue.resolveComponent("b-input");

    return (!$options.isMobile || $props.inline)
      ? (vue.openBlock(), vue.createBlock(_component_b_datepicker, vue.mergeProps({
          key: 0,
          ref: "datepicker",
          modelValue: $options.computedValue,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($options.computedValue = $event))
        }, $props.datepicker, {
          rounded: _ctx.rounded,
          "open-on-focus": $props.openOnFocus,
          position: $props.position,
          loading: _ctx.loading,
          inline: $props.inline,
          editable: $props.editable,
          expanded: _ctx.expanded,
          "close-on-click": false,
          "date-formatter": $options.defaultDatetimeFormatter,
          "date-parser": $options.defaultDatetimeParser,
          "min-date": $options.minDate,
          "max-date": $options.maxDate,
          icon: $props.icon,
          "icon-pack": $props.iconPack,
          size: $options.datepickerSize,
          placeholder: $props.placeholder,
          "horizontal-time-picker": $props.horizontalTimePicker,
          range: false,
          disabled: $props.disabled,
          "mobile-native": $options.isMobileNative,
          locale: _ctx.locale,
          focusable: $props.focusable,
          "append-to-body": $props.appendToBody,
          onFocus: _ctx.onFocus,
          onBlur: _ctx.onBlur,
          onChangeMonth: _cache[3] || (_cache[3] = $event => (_ctx.$emit('change-month', $event))),
          onChangeYear: _cache[4] || (_cache[4] = $event => (_ctx.$emit('change-year', $event)))
        }), {
          default: vue.withCtx(() => [
            vue.createVNode("nav", _hoisted_1, [
              (_ctx.$slots.left !== undefined)
                ? (vue.openBlock(), vue.createBlock("div", _hoisted_2, [
                    vue.renderSlot(_ctx.$slots, "left")
                  ]))
                : vue.createCommentVNode("v-if", true),
              vue.createVNode("div", _hoisted_3, [
                vue.createVNode(_component_b_timepicker, vue.mergeProps({ ref: "timepicker" }, $props.timepicker, {
                  modelValue: $options.computedValue,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($options.computedValue = $event)),
                  inline: "",
                  editable: $props.editable,
                  "min-time": $options.minTime,
                  "max-time": $options.maxTime,
                  size: $options.timepickerSize,
                  disabled: $options.timepickerDisabled,
                  focusable: $props.focusable,
                  "mobile-native": $options.isMobileNative,
                  locale: _ctx.locale
                }), null, 16 /* FULL_PROPS */, ["modelValue", "editable", "min-time", "max-time", "size", "disabled", "focusable", "mobile-native", "locale"])
              ]),
              (_ctx.$slots.right !== undefined)
                ? (vue.openBlock(), vue.createBlock("div", _hoisted_4, [
                    vue.renderSlot(_ctx.$slots, "right")
                  ]))
                : vue.createCommentVNode("v-if", true)
            ])
          ]),
          _: 1 /* STABLE */
        }, 16 /* FULL_PROPS */, ["modelValue", "rounded", "open-on-focus", "position", "loading", "inline", "editable", "expanded", "date-formatter", "date-parser", "min-date", "max-date", "icon", "icon-pack", "size", "placeholder", "horizontal-time-picker", "disabled", "mobile-native", "locale", "focusable", "append-to-body", "onFocus", "onBlur"]))
      : (vue.openBlock(), vue.createBlock(_component_b_input, vue.mergeProps({
          key: 1,
          ref: "input",
          type: "datetime-local",
          autocomplete: "off",
          value: $options.formatNative($options.computedValue),
          placeholder: $props.placeholder,
          size: _ctx.size,
          icon: $props.icon,
          "icon-pack": $props.iconPack,
          rounded: _ctx.rounded,
          loading: _ctx.loading,
          max: $options.formatNative($options.maxDate),
          min: $options.formatNative($options.minDate),
          disabled: $props.disabled,
          readonly: false
        }, _ctx.$attrs, {
          "use-html5-validation": _ctx.useHtml5Validation,
          onChange: $options.onChangeNativePicker,
          onFocus: _ctx.onFocus,
          onBlur: _ctx.onBlur
        }), null, 16 /* FULL_PROPS */, ["value", "placeholder", "size", "icon", "icon-pack", "rounded", "loading", "max", "min", "disabled", "use-html5-validation", "onChange", "onFocus", "onBlur"]))
  }

  script.render = render;
  script.__file = "src/components/datetimepicker/Datetimepicker.vue";

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

  exports.BDatetimepicker = script;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
