/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
import { openBlock, createBlock, resolveDynamicComponent, resolveComponent, mergeProps, createCommentVNode, toDisplayString, createVNode, withKeys, withModifiers, Transition, withCtx, withDirectives, renderSlot, Fragment, renderList, vShow, toHandlers, vModelCheckbox, h, resolveDirective, createTextVNode, createSlots, vModelSelect, vModelDynamic, vModelRadio, defineComponent, toHandlerKey, ref } from 'vue';

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
 * +/- function to native math sign
 */
function signPoly(value) {
  if (value < 0) return -1;
  return value > 0 ? 1 : 0;
}

var sign = Math.sign || signPoly;
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
 * Native modulo bug with negative numbers
 * @param n
 * @param mod
 * @returns {number}
 */


function mod(n, mod) {
  return (n % mod + mod) % mod;
}
/**
 * Asserts a value is beetween min and max
 * @param val
 * @param min
 * @param max
 * @returns {number}
 */


function bound(val, min, max) {
  return Math.max(min, Math.min(max, val));
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
 * Extension of indexOf method by equality function if specified
 */

function indexOf(array, obj, fn) {
  if (!array) return -1;
  if (!fn || typeof fn !== 'function') return array.indexOf(obj);

  for (var i = 0; i < array.length; i++) {
    if (fn(array[i], obj)) {
      return i;
    }
  }

  return -1;
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
/**
 * Escape regex characters
 * http://stackoverflow.com/a/6969486
 */

function escapeRegExpChars(value) {
  if (!value) return value; // eslint-disable-next-line

  return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
function multiColumnSort(inputArray, sortingPriority) {
  // clone it to prevent the any watchers from triggering every sorting iteration
  var array = JSON.parse(JSON.stringify(inputArray));

  var fieldSorter = function fieldSorter(fields) {
    return function (a, b) {
      return fields.map(function (o) {
        var dir = 1;

        if (o[0] === '-') {
          dir = -1;
          o = o.substring(1);
        }

        var aValue = getValueByPath(a, o);
        var bValue = getValueByPath(b, o);
        return aValue > bValue ? dir : aValue < bValue ? -dir : 0;
      }).reduce(function (p, n) {
        return p || n;
      }, 0);
    };
  };

  return array.sort(fieldSorter(sortingPriority));
}
function createNewEvent(eventName) {
  var event;

  if (typeof Event === 'function') {
    event = new Event(eventName);
  } else {
    event = document.createEvent('Event');
    event.initEvent(eventName, true, true);
  }

  return event;
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
/**
 * Based on
 * https://github.com/fregante/supports-webp
 */

function isWebpSupported() {
  return new Promise(function (resolve) {
    var image = new Image();

    image.onerror = function () {
      return resolve(false);
    };

    image.onload = function () {
      return resolve(image.width === 1);
    };

    image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
  }).catch(function () {
    return false;
  });
}
function isCustomElement(vm) {
  return 'shadowRoot' in vm.$root.$options;
}
var isDefined = function isDefined(d) {
  return d !== undefined;
};
function getSlot$1(slots, name, props) {
  var value = slots[name];
  return typeof value === 'function' ? value(props) : value;
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
var setOptions = function setOptions(options) {
  config = options;
};
var setVueInstance = function setVueInstance(Vue) {
  VueInstance = Vue;
};
var VueInstance;

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
      return this.parentField.newMessage || getSlot$1(this.parentField.$slots, 'message');
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

var script$11 = {
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

function render$11(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("span", {
    class: ["icon", [$options.newType, $props.size]]
  }, [
    (!$options.useIconComponent)
      ? (openBlock(), createBlock("i", {
          key: 0,
          class: [$options.newPack, $options.newIcon, $options.newCustomSize, $props.customClass]
        }, null, 2 /* CLASS */))
      : (openBlock(), createBlock(resolveDynamicComponent($options.useIconComponent), {
          key: 1,
          icon: [$options.newPack, $options.newIcon],
          size: $options.newCustomSize,
          class: [$props.customClass]
        }, null, 8 /* PROPS */, ["icon", "size", "class"]))
  ], 2 /* CLASS */))
}

script$11.render = render$11;
script$11.__file = "src/components/icon/Icon.vue";

var script$10 = {
  name: 'BInput',
  components: _defineProperty({}, script$11.name, script$11),
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

function render$10(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock("div", {
    class: ["control", $options.rootClasses]
  }, [
    ($props.type !== 'textarea')
      ? (openBlock(), createBlock("input", mergeProps({
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
      : (openBlock(), createBlock("textarea", mergeProps({
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
      ? (openBlock(), createBlock(_component_b_icon, {
          key: 2,
          class: ["is-left", {'is-clickable': $props.iconClickable}],
          icon: _ctx.icon,
          pack: _ctx.iconPack,
          size: _ctx.iconSize,
          onClick: _cache[9] || (_cache[9] = $event => ($options.iconClick('icon-click', $event)))
        }, null, 8 /* PROPS */, ["class", "icon", "pack", "size"]))
      : createCommentVNode("v-if", true),
    (!_ctx.loading && $options.hasIconRight)
      ? (openBlock(), createBlock(_component_b_icon, {
          key: 3,
          class: ["is-right", { 'is-clickable': $props.passwordReveal || $props.iconRightClickable }],
          icon: $options.rightIcon,
          pack: _ctx.iconPack,
          size: _ctx.iconSize,
          type: $options.rightIconType,
          both: "",
          onClick: $options.rightIconClick
        }, null, 8 /* PROPS */, ["class", "icon", "pack", "size", "type", "onClick"]))
      : createCommentVNode("v-if", true),
    (_ctx.maxlength && $props.hasCounter && $props.type !== 'number')
      ? (openBlock(), createBlock("small", {
          key: 4,
          class: ["help counter", { 'is-invisible': !_ctx.isFocused }]
        }, toDisplayString($options.valueLength) + " / " + toDisplayString(_ctx.maxlength), 3 /* TEXT, CLASS */))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$10.render = render$10;
script$10.__file = "src/components/input/Input.vue";

var script$$ = {
  name: 'BAutocomplete',
  components: _defineProperty({}, script$10.name, script$10),
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
      return !!getSlot$1(this.$slots, 'empty');
    },

    /**
     * Check if exists "header" slot
     */
    hasHeaderSlot: function hasHeaderSlot() {
      return !!getSlot$1(this.$slots, 'header');
    },

    /**
     * Check if exists "footer" slot
     */
    hasFooterSlot: function hasFooterSlot() {
      return !!getSlot$1(this.$slots, 'footer');
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

const _hoisted_1$F = {
  key: 0,
  class: "dropdown-item"
};
const _hoisted_2$l = {
  key: 1,
  class: "has-text-weight-bold"
};
const _hoisted_3$f = { key: 1 };
const _hoisted_4$a = {
  key: 1,
  class: "dropdown-item is-disabled"
};
const _hoisted_5$7 = {
  key: 2,
  class: "dropdown-item"
};

function render$$(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_input = resolveComponent("b-input");

  return (openBlock(), createBlock("div", {
    class: ["autocomplete control", { 'is-expanded': _ctx.expanded }]
  }, [
    createVNode(_component_b_input, mergeProps({
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
      onKeyup: _cache[2] || (_cache[2] = withKeys(withModifiers($event => ($data.isActive = false), ["prevent"]), ["native","esc"])),
      onKeydown: [
        withKeys($options.keydown, ["native"]),
        _cache[3] || (_cache[3] = withKeys(withModifiers($event => ($options.keyArrows('up')), ["prevent"]), ["native","up"])),
        _cache[4] || (_cache[4] = withKeys(withModifiers($event => ($options.keyArrows('down')), ["prevent"]), ["native","down"]))
      ],
      onIconRightClick: $options.rightIconClick,
      onIconClick: _cache[5] || (_cache[5] = (event) => _ctx.$emit('icon-click', event))
    }), null, 16 /* FULL_PROPS */, ["modelValue", "size", "loading", "rounded", "icon", "icon-right", "icon-right-clickable", "icon-pack", "maxlength", "autocomplete", "onInput", "onFocus", "onBlur", "onKeydown", "onIconRightClick"]),
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        withDirectives(createVNode("div", {
          class: ["dropdown-menu", { 'is-opened-top': $options.isOpenedTop && !$props.appendToBody }],
          style: $data.style,
          ref: "dropdown"
        }, [
          withDirectives(createVNode("div", {
            class: "dropdown-content",
            style: $options.contentStyle
          }, [
            ($options.hasHeaderSlot)
              ? (openBlock(), createBlock("div", _hoisted_1$F, [
                  renderSlot(_ctx.$slots, "header")
                ]))
              : createCommentVNode("v-if", true),
            (openBlock(true), createBlock(Fragment, null, renderList($options.computedData, (element, groupindex) => {
              return (openBlock(), createBlock(Fragment, null, [
                (element.group)
                  ? (openBlock(), createBlock("div", {
                      key: groupindex + 'group',
                      class: "dropdown-item"
                    }, [
                      ($options.hasGroupSlot)
                        ? renderSlot(_ctx.$slots, "group", {
                            key: 0,
                            group: element.group,
                            index: groupindex
                          })
                        : (openBlock(), createBlock("span", _hoisted_2$l, toDisplayString(element.group), 1 /* TEXT */))
                    ]))
                  : createCommentVNode("v-if", true),
                (openBlock(true), createBlock(Fragment, null, renderList(element.items, (option, index) => {
                  return (openBlock(), createBlock("a", {
                    key: groupindex + ':' + index,
                    class: ["dropdown-item", { 'is-hovered': option === $data.hovered }],
                    onClick: $event => ($options.setSelected(option, undefined, $event))
                  }, [
                    ($options.hasDefaultSlot)
                      ? renderSlot(_ctx.$slots, "default", {
                          key: 0,
                          option: option,
                          index: index
                        })
                      : (openBlock(), createBlock("span", _hoisted_3$f, toDisplayString($options.getValue(option, true)), 1 /* TEXT */))
                  ], 10 /* CLASS, PROPS */, ["onClick"]))
                }), 128 /* KEYED_FRAGMENT */))
              ], 64 /* STABLE_FRAGMENT */))
            }), 256 /* UNKEYED_FRAGMENT */)),
            ($options.isEmpty && $options.hasEmptySlot)
              ? (openBlock(), createBlock("div", _hoisted_4$a, [
                  renderSlot(_ctx.$slots, "empty")
                ]))
              : createCommentVNode("v-if", true),
            ($options.hasFooterSlot)
              ? (openBlock(), createBlock("div", _hoisted_5$7, [
                  renderSlot(_ctx.$slots, "footer")
                ]))
              : createCommentVNode("v-if", true)
          ], 4 /* STYLE */), [
            [vShow, $data.isActive]
          ])
        ], 6 /* CLASS, STYLE */), [
          [vShow, $data.isActive && (!$options.isEmpty || $options.hasEmptySlot || $options.hasHeaderSlot)]
        ])
      ]),
      _: 1 /* STABLE */
    })
  ], 2 /* CLASS */))
}

script$$.render = render$$;
script$$.__file = "src/components/autocomplete/Autocomplete.vue";

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

var Plugin$D = {
  install: function install(Vue) {
    registerComponent(Vue, script$$);
  }
};
use(Plugin$D);

var script$_ = {
  name: 'BButton',
  components: _defineProperty({}, script$11.name, script$11),
  inheritAttrs: false,
  props: {
    type: [String, Object],
    size: String,
    label: String,
    iconPack: String,
    iconLeft: String,
    iconRight: String,
    rounded: {
      type: Boolean,
      default: function _default() {
        return config.defaultButtonRounded;
      }
    },
    loading: Boolean,
    outlined: Boolean,
    expanded: Boolean,
    inverted: Boolean,
    focused: Boolean,
    active: Boolean,
    hovered: Boolean,
    selected: Boolean,
    nativeType: {
      type: String,
      default: 'button',
      validator: function validator(value) {
        return ['button', 'submit', 'reset'].indexOf(value) >= 0;
      }
    },
    tag: {
      type: String,
      default: 'button',
      validator: function validator(value) {
        return config.defaultLinkTags.indexOf(value) >= 0;
      }
    }
  },
  computed: {
    computedTag: function computedTag() {
      if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
        return 'button';
      }

      return this.tag;
    },
    iconSize: function iconSize() {
      if (!this.size || this.size === 'is-medium') {
        return 'is-small';
      } else if (this.size === 'is-large') {
        return 'is-medium';
      }

      return this.size;
    }
  }
};

const _hoisted_1$E = { key: 1 };
const _hoisted_2$k = { key: 2 };

function render$_(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock(resolveDynamicComponent($options.computedTag), mergeProps({ class: "button" }, _ctx.$attrs, {
    type: $props.nativeType,
    class: [$props.size, $props.type, {
            'is-rounded': $props.rounded,
            'is-loading': $props.loading,
            'is-outlined': $props.outlined,
            'is-fullwidth': $props.expanded,
            'is-inverted': $props.inverted,
            'is-focused': $props.focused,
            'is-active': $props.active,
            'is-hovered': $props.hovered,
            'is-selected': $props.selected
        }]
  }, toHandlers(_ctx.$listeners)), {
    default: withCtx(() => [
      ($props.iconLeft)
        ? (openBlock(), createBlock(_component_b_icon, {
            key: 0,
            pack: $props.iconPack,
            icon: $props.iconLeft,
            size: $options.iconSize
          }, null, 8 /* PROPS */, ["pack", "icon", "size"]))
        : createCommentVNode("v-if", true),
      ($props.label)
        ? (openBlock(), createBlock("span", _hoisted_1$E, toDisplayString($props.label), 1 /* TEXT */))
        : (_ctx.$slots.default)
          ? (openBlock(), createBlock("span", _hoisted_2$k, [
              renderSlot(_ctx.$slots, "default")
            ]))
          : createCommentVNode("v-if", true),
      ($props.iconRight)
        ? (openBlock(), createBlock(_component_b_icon, {
            key: 3,
            pack: $props.iconPack,
            icon: $props.iconRight,
            size: $options.iconSize
          }, null, 8 /* PROPS */, ["pack", "icon", "size"]))
        : createCommentVNode("v-if", true)
    ]),
    _: 1 /* STABLE */
  }, 16 /* FULL_PROPS */, ["type", "class"]))
}

script$_.render = render$_;
script$_.__file = "src/components/button/Button.vue";

var Plugin$C = {
  install: function install(Vue) {
    registerComponent(Vue, script$_);
  }
};
use(Plugin$C);

var items = 1;
var sorted$1 = 3;
var Sorted$1 = sorted$1;
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

var script$Z = {
  name: 'BCarousel',
  components: _defineProperty({}, script$11.name, script$11),
  mixins: [ProviderParentMixin('carousel', Sorted$1)],
  props: {
    value: {
      type: Number,
      default: 0
    },
    animated: {
      type: String,
      default: 'slide'
    },
    interval: Number,
    hasDrag: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    pauseHover: {
      type: Boolean,
      default: true
    },
    pauseInfo: {
      type: Boolean,
      default: true
    },
    pauseInfoType: {
      type: String,
      default: 'is-white'
    },
    pauseText: {
      type: String,
      default: 'Pause'
    },
    arrow: {
      type: Boolean,
      default: true
    },
    arrowHover: {
      type: Boolean,
      default: true
    },
    repeat: {
      type: Boolean,
      default: true
    },
    iconPack: String,
    iconSize: String,
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
    indicator: {
      type: Boolean,
      default: true
    },
    indicatorBackground: Boolean,
    indicatorCustom: Boolean,
    indicatorCustomSize: {
      type: String,
      default: 'is-small'
    },
    indicatorInside: {
      type: Boolean,
      default: true
    },
    indicatorMode: {
      type: String,
      default: 'click'
    },
    indicatorPosition: {
      type: String,
      default: 'is-bottom'
    },
    indicatorStyle: {
      type: String,
      default: 'is-dots'
    },
    overlay: Boolean,
    progress: Boolean,
    progressType: {
      type: String,
      default: 'is-primary'
    },
    withCarouselList: Boolean
  },
  data: function data() {
    return {
      transition: 'next',
      activeChild: this.value || 0,
      isPause: false,
      dragX: false,
      timer: null
    };
  },
  computed: {
    indicatorClasses: function indicatorClasses() {
      return [{
        'has-background': this.indicatorBackground,
        'has-custom': this.indicatorCustom,
        'is-inside': this.indicatorInside
      }, this.indicatorCustom && this.indicatorCustomSize, this.indicatorInside && this.indicatorPosition];
    },
    // checking arrows
    hasPrev: function hasPrev() {
      return this.repeat || this.activeChild !== 0;
    },
    hasNext: function hasNext() {
      return this.repeat || this.activeChild < this.childItems.length - 1;
    }
  },
  watch: {
    /**
     * When v-model is changed set the new active item.
     */
    value: function value(_value) {
      this.changeActive(_value);
    },

    /**
     * When carousel-items are updated, set active one.
     */
    sortedItems: function sortedItems(items) {
      if (this.activeChild >= items.length && this.activeChild > 0) {
        this.changeActive(this.activeChild - 1);
      }
    },

    /**
     *  When autoplay is changed, start or pause timer accordingly
     */
    autoplay: function autoplay(status) {
      status ? this.startTimer() : this.pauseTimer();
    },

    /**
     *  Since the timer can get paused at the end, if repeat is changed we need to restart it
     */
    repeat: function repeat(status) {
      if (status) {
        this.startTimer();
      }
    }
  },
  methods: {
    startTimer: function startTimer() {
      var _this = this;

      if (!this.autoplay || this.timer) return;
      this.isPause = false;
      this.timer = setInterval(function () {
        if (!_this.repeat && _this.activeChild >= _this.childItems.length - 1) {
          _this.pauseTimer();
        } else {
          _this.next();
        }
      }, this.interval || config.defaultCarouselInterval);
    },
    pauseTimer: function pauseTimer() {
      this.isPause = true;

      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    restartTimer: function restartTimer() {
      this.pauseTimer();
      this.startTimer();
    },
    checkPause: function checkPause() {
      if (this.pauseHover && this.autoplay) {
        this.pauseTimer();
      }
    },

    /**
     * Change the active item and emit change event.
     * action only for animated slide, there true = next, false = prev
     */
    changeActive: function changeActive(newIndex) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (this.activeChild === newIndex || isNaN(newIndex)) return;
      direction = direction || newIndex - this.activeChild;
      newIndex = this.repeat ? mod(newIndex, this.childItems.length) : bound(newIndex, 0, this.childItems.length - 1);
      this.transition = direction > 0 ? 'prev' : 'next'; // Transition names are reversed from the actual direction for correct effect

      this.activeChild = newIndex;

      if (newIndex !== this.value) {
        this.$emit('input', newIndex);
      }

      this.restartTimer();
      this.$emit('change', newIndex); // BC
    },
    // Indicator trigger when change active item.
    modeChange: function modeChange(trigger, value) {
      if (this.indicatorMode === trigger) {
        return this.changeActive(value);
      }
    },
    prev: function prev() {
      this.changeActive(this.activeChild - 1, -1);
    },
    next: function next() {
      this.changeActive(this.activeChild + 1, 1);
    },
    // handle drag event
    dragStart: function dragStart(event) {
      if (!this.hasDrag || !event.target.draggable) return;
      this.dragX = event.touches ? event.changedTouches[0].pageX : event.pageX;

      if (event.touches) {
        this.pauseTimer();
      } else {
        event.preventDefault();
      }
    },
    dragEnd: function dragEnd(event) {
      if (this.dragX === false) return;
      var detected = event.touches ? event.changedTouches[0].pageX : event.pageX;
      var diffX = detected - this.dragX;

      if (Math.abs(diffX) > 30) {
        if (diffX < 0) {
          this.next();
        } else {
          this.prev();
        }
      } else {
        event.target.click();
        this.sortedItems[this.activeChild].$emit('click');
        this.$emit('click');
      }

      if (event.touches) {
        this.startTimer();
      }

      this.dragX = false;
    }
  },
  mounted: function mounted() {
    this.startTimer();
  },
  beforeDestroy: function beforeDestroy() {
    this.pauseTimer();
  }
};

const _hoisted_1$D = {
  key: 1,
  class: "carousel-pause"
};

function render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock("div", {
    class: ["carousel", {'is-overlay': $props.overlay}],
    onMouseenter: _cache[5] || (_cache[5] = (...args) => ($options.checkPause && $options.checkPause(...args))),
    onMouseleave: _cache[6] || (_cache[6] = (...args) => ($options.startTimer && $options.startTimer(...args)))
  }, [
    ($props.progress)
      ? (openBlock(), createBlock("progress", {
          key: 0,
          class: ["progress", $props.progressType],
          value: $data.activeChild,
          max: _ctx.childItems.length - 1
        }, toDisplayString(_ctx.childItems.length - 1), 11 /* TEXT, CLASS, PROPS */, ["value", "max"]))
      : createCommentVNode("v-if", true),
    createVNode("div", {
      class: "carousel-items",
      onMousedown: _cache[1] || (_cache[1] = (...args) => ($options.dragStart && $options.dragStart(...args))),
      onMouseup: _cache[2] || (_cache[2] = (...args) => ($options.dragEnd && $options.dragEnd(...args))),
      onTouchstart: _cache[3] || (_cache[3] = withModifiers((...args) => ($options.dragStart && $options.dragStart(...args)), ["stop"])),
      onTouchend: _cache[4] || (_cache[4] = withModifiers((...args) => ($options.dragEnd && $options.dragEnd(...args)), ["stop"]))
    }, [
      renderSlot(_ctx.$slots, "default"),
      ($props.arrow)
        ? (openBlock(), createBlock("div", {
            key: 0,
            class: ["carousel-arrow", {'is-hovered': $props.arrowHover}]
          }, [
            withDirectives(createVNode(_component_b_icon, {
              class: "has-icons-left",
              onClick: $options.prev,
              pack: $props.iconPack,
              icon: $props.iconPrev,
              size: $props.iconSize,
              both: ""
            }, null, 8 /* PROPS */, ["onClick", "pack", "icon", "size"]), [
              [vShow, $options.hasPrev]
            ]),
            withDirectives(createVNode(_component_b_icon, {
              class: "has-icons-right",
              onClick: $options.next,
              pack: $props.iconPack,
              icon: $props.iconNext,
              size: $props.iconSize,
              both: ""
            }, null, 8 /* PROPS */, ["onClick", "pack", "icon", "size"]), [
              [vShow, $options.hasNext]
            ])
          ], 2 /* CLASS */))
        : createCommentVNode("v-if", true)
    ], 32 /* HYDRATE_EVENTS */),
    ($props.autoplay && $props.pauseHover && $props.pauseInfo && $data.isPause)
      ? (openBlock(), createBlock("div", _hoisted_1$D, [
          createVNode("span", {
            class: ["tag", $props.pauseInfoType]
          }, toDisplayString($props.pauseText), 3 /* TEXT, CLASS */)
        ]))
      : createCommentVNode("v-if", true),
    ($props.withCarouselList && !$props.indicator)
      ? renderSlot(_ctx.$slots, "list", {
          key: 2,
          active: $data.activeChild,
          switch: $options.changeActive
        })
      : createCommentVNode("v-if", true),
    ($props.indicator)
      ? (openBlock(), createBlock("div", {
          key: 3,
          class: ["carousel-indicator", $options.indicatorClasses]
        }, [
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.sortedItems, (item, index) => {
            return (openBlock(), createBlock("a", {
              class: ["indicator-item", {'is-active': item.isActive}],
              onMouseover: $event => ($options.modeChange('hover', index)),
              onClick: $event => ($options.modeChange('click', index)),
              key: item._uid
            }, [
              renderSlot(_ctx.$slots, "indicators", { i: index }, () => [
                createVNode("span", {
                  class: ["indicator-style", $props.indicatorStyle]
                }, null, 2 /* CLASS */)
              ])
            ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["onMouseover", "onClick"]))
          }), 128 /* KEYED_FRAGMENT */))
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    ($props.overlay)
      ? renderSlot(_ctx.$slots, "overlay", { key: 4 })
      : createCommentVNode("v-if", true)
  ], 34 /* CLASS, HYDRATE_EVENTS */))
}

script$Z.render = render$Z;
script$Z.__file = "src/components/carousel/Carousel.vue";

var sorted = 1;
var optional = 2;
var Sorted = sorted;
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

var script$Y = {
  name: 'BCarouselItem',
  mixins: [InjectedChildMixin('carousel', Sorted)],
  data: function data() {
    return {
      transitionName: null
    };
  },
  computed: {
    transition: function transition() {
      if (this.parent.animated === 'fade') {
        return 'fade';
      } else if (this.parent.transition) {
        return 'slide-' + this.parent.transition;
      }
    },
    isActive: function isActive() {
      return this.parent.activeChild === this.index;
    }
  }
};

const _hoisted_1$C = { class: "carousel-item" };

function render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Transition, { name: $options.transition }, {
    default: withCtx(() => [
      withDirectives(createVNode("div", _hoisted_1$C, [
        renderSlot(_ctx.$slots, "default")
      ], 512 /* NEED_PATCH */), [
        [vShow, $options.isActive]
      ])
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["name"]))
}

script$Y.render = render$Y;
script$Y.__file = "src/components/carousel/CarouselItem.vue";

var script$X = {
  name: 'BCarouselList',
  components: _defineProperty({}, script$11.name, script$11),
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: Number,
      default: 0
    },
    scrollValue: {
      type: Number,
      default: 0
    },
    hasDrag: {
      type: Boolean,
      default: true
    },
    hasGrayscale: Boolean,
    hasOpacity: Boolean,
    repeat: Boolean,
    itemsToShow: {
      type: Number,
      default: 4
    },
    itemsToList: {
      type: Number,
      default: 1
    },
    asIndicator: Boolean,
    arrow: {
      type: Boolean,
      default: true
    },
    arrowHover: {
      type: Boolean,
      default: true
    },
    iconPack: String,
    iconSize: String,
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
    breakpoints: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      activeItem: this.value,
      scrollIndex: this.asIndicator ? this.scrollValue : this.value,
      delta: 0,
      dragX: false,
      hold: 0,
      windowWidth: 0,
      touch: false,
      observer: null,
      refresh_: 0
    };
  },
  computed: {
    dragging: function dragging() {
      return this.dragX !== false;
    },
    listClass: function listClass() {
      return [{
        'has-grayscale': this.settings.hasGrayscale,
        'has-opacity': this.settings.hasOpacity,
        'is-dragging': this.dragging
      }];
    },
    itemStyle: function itemStyle() {
      return "width: ".concat(this.itemWidth, "px;");
    },
    translation: function translation() {
      return -bound(this.delta + this.scrollIndex * this.itemWidth, 0, (this.data.length - this.settings.itemsToShow) * this.itemWidth);
    },
    total: function total() {
      return this.data.length - this.settings.itemsToShow;
    },
    hasPrev: function hasPrev() {
      return this.settings.repeat || this.scrollIndex > 0;
    },
    hasNext: function hasNext() {
      return this.settings.repeat || this.scrollIndex < this.total;
    },
    breakpointKeys: function breakpointKeys() {
      return Object.keys(this.breakpoints).sort(function (a, b) {
        return b - a;
      });
    },
    settings: function settings() {
      var _this = this;

      var breakpoint = this.breakpointKeys.filter(function (breakpoint) {
        if (_this.windowWidth >= breakpoint) {
          return true;
        }
      })[0];

      if (breakpoint) {
        return _objectSpread2({}, this.$props, {}, this.breakpoints[breakpoint]);
      }

      return this.$props;
    },
    itemWidth: function itemWidth() {
      if (this.windowWidth) {
        // Ensure component is mounted

        /* eslint-disable-next-line */
        this.refresh_; // We force the computed property to refresh if this prop is changed

        var rect = this.$el.getBoundingClientRect();
        return rect.width / this.settings.itemsToShow;
      }

      return 0;
    }
  },
  watch: {
    /**
     * When v-model is changed set the new active item.
     */
    value: function value(_value) {
      this.switchTo(this.asIndicator ? _value - (this.itemsToShow - 3) / 2 : _value);

      if (this.activeItem !== _value) {
        this.activeItem = bound(_value, 0, this.data.length - 1);
      }
    },
    scrollValue: function scrollValue(value) {
      this.switchTo(value);
    }
  },
  methods: {
    resized: function resized() {
      this.windowWidth = window.innerWidth;
    },
    switchTo: function switchTo(newIndex) {
      if (newIndex === this.scrollIndex || isNaN(newIndex)) {
        return;
      }

      if (this.settings.repeat) {
        newIndex = mod(newIndex, this.total + 1);
      }

      newIndex = bound(newIndex, 0, this.total);
      this.scrollIndex = newIndex;

      if (!this.asIndicator && this.value !== newIndex) {
        this.$emit('input', newIndex);
      } else if (this.scrollIndex !== newIndex) {
        this.$emit('updated:scroll', newIndex);
      }
    },
    next: function next() {
      this.switchTo(this.scrollIndex + this.settings.itemsToList);
    },
    prev: function prev() {
      this.switchTo(this.scrollIndex - this.settings.itemsToList);
    },
    checkAsIndicator: function checkAsIndicator(value, event) {
      if (!this.asIndicator) return;
      var dragEndX = event.touches ? event.touches[0].clientX : event.clientX;
      if (this.hold - Date.now() > 2000 || Math.abs(this.dragX - dragEndX) > 10) return;
      this.dragX = false;
      this.hold = 0;
      event.preventDefault(); // Make the item appear in the middle

      this.activeItem = value;
      this.$emit('switch', value);
    },
    // handle drag event
    dragStart: function dragStart(event) {
      if (this.dragging || !this.settings.hasDrag || event.button !== 0 && event.type !== 'touchstart') return;
      this.hold = Date.now();
      this.touch = !!event.touches;
      this.dragX = this.touch ? event.touches[0].clientX : event.clientX;
      window.addEventListener(this.touch ? 'touchmove' : 'mousemove', this.dragMove);
      window.addEventListener(this.touch ? 'touchend' : 'mouseup', this.dragEnd);
    },
    dragMove: function dragMove(event) {
      if (!this.dragging) return;
      var dragEndX = event.touches ? event.touches[0].clientX : event.clientX;
      this.delta = this.dragX - dragEndX;

      if (!event.touches) {
        event.preventDefault();
      }
    },
    dragEnd: function dragEnd() {
      if (!this.dragging && !this.hold) return;

      if (this.hold) {
        var signCheck = sign(this.delta);
        var results = Math.round(Math.abs(this.delta / this.itemWidth) + 0.15); // Hack

        this.switchTo(this.scrollIndex + signCheck * results);
      }

      this.delta = 0;
      this.dragX = false;
      window.removeEventListener(this.touch ? 'touchmove' : 'mousemove', this.dragMove);
      window.removeEventListener(this.touch ? 'touchend' : 'mouseup', this.dragEnd);
    },
    refresh: function refresh() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.refresh_++;
      });
    }
  },
  mounted: function mounted() {
    if (typeof window !== 'undefined') {
      if (window.ResizeObserver) {
        this.observer = new ResizeObserver(this.refresh);
        this.observer.observe(this.$el);
      }

      window.addEventListener('resize', this.resized);
      document.addEventListener('animationend', this.refresh);
      document.addEventListener('transitionend', this.refresh);
      document.addEventListener('transitionstart', this.refresh);
      this.resized();
    }

    if (this.$attrs.config) {
      throw new Error('The config prop was removed, you need to use v-bind instead');
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (typeof window !== 'undefined') {
      if (window.ResizeObserver) {
        this.observer.disconnect();
      }

      window.removeEventListener('resize', this.resized);
      document.removeEventListener('animationend', this.refresh);
      document.removeEventListener('transitionend', this.refresh);
      document.removeEventListener('transitionstart', this.refresh);
      this.dragEnd();
    }
  }
};

const _hoisted_1$B = { class: "image" };

function render$X(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock("div", {
    class: ["carousel-list", {'has-shadow': $data.scrollIndex > 0}],
    onMousedown: _cache[1] || (_cache[1] = withModifiers((...args) => ($options.dragStart && $options.dragStart(...args)), ["prevent"])),
    onTouchstart: _cache[2] || (_cache[2] = (...args) => ($options.dragStart && $options.dragStart(...args)))
  }, [
    createVNode("div", {
      class: ["carousel-slides", $options.listClass],
      style: 'transform:translateX('+$options.translation+'px)'
    }, [
      (openBlock(true), createBlock(Fragment, null, renderList($props.data, (list, index) => {
        return (openBlock(), createBlock("div", {
          class: ["carousel-slide", {'is-active': $props.asIndicator ? $data.activeItem === index : $data.scrollIndex === index}],
          onMouseup: $event => ($options.checkAsIndicator(index, $event)),
          onTouchend: $event => ($options.checkAsIndicator(index, $event)),
          key: index,
          style: $options.itemStyle
        }, [
          renderSlot(_ctx.$slots, "item", mergeProps({
            index: index,
            active: $data.activeItem,
            scroll: $data.scrollIndex
          }, list, { list: list }), () => [
            createVNode("figure", _hoisted_1$B, [
              createVNode("img", {
                src: list.image,
                alt: list.alt,
                title: list.title
              }, null, 8 /* PROPS */, ["src", "alt", "title"])
            ])
          ])
        ], 46 /* CLASS, STYLE, PROPS, HYDRATE_EVENTS */, ["onMouseup", "onTouchend"]))
      }), 128 /* KEYED_FRAGMENT */))
    ], 6 /* CLASS, STYLE */),
    ($props.arrow)
      ? (openBlock(), createBlock("div", {
          key: 0,
          class: ["carousel-arrow", {'is-hovered': $options.settings.arrowHover}]
        }, [
          withDirectives(createVNode(_component_b_icon, {
            class: "has-icons-left",
            onClick: withModifiers($options.prev, ["prevent"]),
            pack: $options.settings.iconPack,
            icon: $options.settings.iconPrev,
            size: $options.settings.iconSize,
            both: ""
          }, null, 8 /* PROPS */, ["onClick", "pack", "icon", "size"]), [
            [vShow, $options.hasPrev]
          ]),
          withDirectives(createVNode(_component_b_icon, {
            class: "has-icons-right",
            onClick: withModifiers($options.next, ["prevent"]),
            pack: $options.settings.iconPack,
            icon: $options.settings.iconNext,
            size: $options.settings.iconSize,
            both: ""
          }, null, 8 /* PROPS */, ["onClick", "pack", "icon", "size"]), [
            [vShow, $options.hasNext]
          ])
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true)
  ], 34 /* CLASS, HYDRATE_EVENTS */))
}

script$X.render = render$X;
script$X.__file = "src/components/carousel/CarouselList.vue";

var Plugin$B = {
  install: function install(Vue) {
    registerComponent(Vue, script$Z);
    registerComponent(Vue, script$Y);
    registerComponent(Vue, script$X);
  }
};
use(Plugin$B);

var CheckRadioMixin = {
  props: {
    value: [String, Number, Boolean, Function, Object, Array],
    nativeValue: [String, Number, Boolean, Function, Object, Array],
    type: String,
    disabled: Boolean,
    required: Boolean,
    name: String,
    size: String
  },
  data: function data() {
    return {
      newValue: this.value
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
    }
  },
  watch: {
    /**
    * When v-model change, set internal value.
    */
    value: function value(_value) {
      this.newValue = _value;
    }
  },
  methods: {
    focus: function focus() {
      // MacOS FireFox and Safari do not focus when clicked
      this.$refs.input.focus();
    }
  }
};

var script$W = {
  name: 'BCheckbox',
  mixins: [CheckRadioMixin],
  props: {
    indeterminate: Boolean,
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: false
    }
  }
};

const _hoisted_1$A = { class: "control-label" };

function render$W(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("label", {
    class: ["b-checkbox checkbox", [_ctx.size, { 'is-disabled': _ctx.disabled }]],
    ref: "label",
    disabled: _ctx.disabled ? '' : null,
    onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.focus && _ctx.focus(...args))),
    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers($event => (_ctx.$refs.label.click()), ["prevent"]), ["enter"]))
  }, [
    withDirectives(createVNode("input", {
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.computedValue = $event)),
      indeterminate: $props.indeterminate,
      type: "checkbox",
      ref: "input",
      onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"])),
      disabled: _ctx.disabled ? '' : null,
      required: _ctx.required,
      name: _ctx.name,
      value: _ctx.nativeValue,
      "true-value": $props.trueValue,
      "false-value": $props.falseValue
    }, null, 8 /* PROPS */, ["indeterminate", "disabled", "required", "name", "value", "true-value", "false-value"]), [
      [vModelCheckbox, _ctx.computedValue]
    ]),
    createVNode("span", {
      class: ["check", _ctx.type]
    }, null, 2 /* CLASS */),
    createVNode("span", _hoisted_1$A, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled"]))
}

script$W.render = render$W;
script$W.__file = "src/components/checkbox/Checkbox.vue";

var script$V = {
  name: 'BCheckboxButton',
  mixins: [CheckRadioMixin],
  props: {
    type: {
      type: String,
      default: 'is-primary'
    },
    expanded: Boolean
  },
  data: function data() {
    return {
      isFocused: false
    };
  },
  computed: {
    checked: function checked() {
      if (Array.isArray(this.newValue)) {
        return this.newValue.indexOf(this.nativeValue) >= 0;
      }

      return this.newValue === this.nativeValue;
    }
  }
};

function render$V(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["control", { 'is-expanded': $props.expanded }]
  }, [
    createVNode("label", {
      class: ["b-checkbox checkbox button", [$options.checked ? $props.type : null, _ctx.size, {
                'is-disabled': _ctx.disabled,
                'is-focused': $data.isFocused
            }]],
      ref: "label",
      disabled: _ctx.disabled ? true : null,
      onClick: _cache[5] || (_cache[5] = (...args) => (_ctx.focus && _ctx.focus(...args))),
      onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers($event => (_ctx.$refs.label.click()), ["prevent"]), ["enter"]))
    }, [
      renderSlot(_ctx.$slots, "default"),
      withDirectives(createVNode("input", {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.computedValue = $event)),
        type: "checkbox",
        ref: "input",
        onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"])),
        disabled: _ctx.disabled ? '' : null,
        required: _ctx.required,
        name: _ctx.name,
        value: _ctx.nativeValue,
        onFocus: _cache[3] || (_cache[3] = $event => ($data.isFocused = true)),
        onBlur: _cache[4] || (_cache[4] = $event => ($data.isFocused = false))
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["disabled", "required", "name", "value"]), [
        [vModelCheckbox, _ctx.computedValue]
      ])
    ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled"])
  ], 2 /* CLASS */))
}

script$V.render = render$V;
script$V.__file = "src/components/checkbox/CheckboxButton.vue";

var Plugin$A = {
  install: function install(Vue) {
    registerComponent(Vue, script$W);
    registerComponent(Vue, script$V);
  }
};
use(Plugin$A);

var script$U = {
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
    var trigger = h('div', {
      staticClass: 'collapse-trigger',
      on: {
        click: this.toggle
      }
    }, (this.$scopedSlots || this.$slots).trigger ? [(this.$scopedSlots || this.$slots).trigger({
      open: this.isOpen
    })] : [getSlot$1(this.$slots, 'trigger')]);
    var content = h('transition', {
      props: {
        name: this.animation
      }
    }, [h('div', {
      staticClass: 'collapse-content',
      attrs: {
        'id': this.ariaId,
        'aria-expanded': this.isOpen
      },
      directives: [{
        name: 'show',
        value: this.isOpen
      }]
    }, getSlot$1(this.$slots, 'default'))]);
    return h('div', {
      staticClass: 'collapse'
    }, this.position === 'is-top' ? [trigger, content] : [content, trigger]);
  }
};

const render$U = () => {};


script$U.render = render$U;
script$U.__file = "src/components/collapse/Collapse.vue";

var Plugin$z = {
  install: function install(Vue) {
    registerComponent(Vue, script$U);
  }
};
use(Plugin$z);

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

var bind$1 = function bind(el, _ref) {
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

var unbind$1 = function unbind(el) {
  el.removeEventListener('keydown', onKeyDown);
};

var directive$1 = {
  bind: bind$1,
  unbind: unbind$1
};

var DEFAULT_CLOSE_OPTIONS = ['escape', 'outside'];
var script$T = {
  name: 'BDropdown',
  directives: {
    trapFocus: directive$1
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

function render$T(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_trap_focus = resolveDirective("trap-focus");

  return (openBlock(), createBlock("div", {
    class: ["dropdown dropdown-menu-animation", $options.rootClasses],
    ref: "dropdown"
  }, [
    (!$props.inline)
      ? (openBlock(), createBlock("div", {
          key: 0,
          role: "button",
          ref: "trigger",
          class: "dropdown-trigger",
          onClick: _cache[1] || (_cache[1] = (...args) => ($options.onClick && $options.onClick(...args))),
          onContextmenu: _cache[2] || (_cache[2] = withModifiers((...args) => ($options.onContextMenu && $options.onContextMenu(...args)), ["prevent"])),
          onMouseenter: _cache[3] || (_cache[3] = (...args) => ($options.onHover && $options.onHover(...args))),
          onFocusCapture: _cache[4] || (_cache[4] = (...args) => ($options.onFocus && $options.onFocus(...args))),
          "aria-haspopup": "true"
        }, [
          renderSlot(_ctx.$slots, "trigger", { active: $data.isActive })
        ], 544 /* HYDRATE_EVENTS, NEED_PATCH */))
      : createCommentVNode("v-if", true),
    createVNode(Transition, { name: $props.animation }, {
      default: withCtx(() => [
        ($options.isMobileModal)
          ? withDirectives((openBlock(), createBlock("div", {
              key: 0,
              class: "background",
              "aria-hidden": !$data.isActive
            }, null, 8 /* PROPS */, ["aria-hidden"])), [
              [vShow, $data.isActive]
            ])
          : createCommentVNode("v-if", true)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["name"]),
    createVNode(Transition, { name: $props.animation }, {
      default: withCtx(() => [
        withDirectives(createVNode("div", {
          ref: "dropdownMenu",
          class: "dropdown-menu",
          style: $data.style,
          "aria-hidden": !$data.isActive
        }, [
          createVNode("div", {
            class: "dropdown-content",
            role: $props.ariaRole,
            style: $options.contentStyle
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 12 /* STYLE, PROPS */, ["role"])
        ], 12 /* STYLE, PROPS */, ["aria-hidden"]), [
          [vShow, (!$props.disabled && ($data.isActive || $data.isHoverable)) || $props.inline],
          [_directive_trap_focus, $props.trapFocus]
        ])
      ]),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["name"])
  ], 2 /* CLASS */))
}

script$T.render = render$T;
script$T.__file = "src/components/dropdown/Dropdown.vue";

var script$S = {
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

const _hoisted_1$z = {
  key: 0,
  class: "dropdown-divider"
};

function render$S(_ctx, _cache, $props, $setup, $data, $options) {
  return ($props.separator)
    ? (openBlock(), createBlock("hr", _hoisted_1$z))
    : (!$props.custom && !$props.hasLink)
      ? (openBlock(), createBlock("a", {
          key: 1,
          class: ["dropdown-item", $options.anchorClasses],
          onClick: _cache[1] || (_cache[1] = (...args) => ($options.selectItem && $options.selectItem(...args))),
          role: $options.ariaRoleItem,
          tabindex: $options.isFocusable ? 0 : null
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10 /* CLASS, PROPS */, ["role", "tabindex"]))
      : (openBlock(), createBlock("div", {
          key: 2,
          class: $options.itemClasses,
          onClick: _cache[2] || (_cache[2] = (...args) => ($options.selectItem && $options.selectItem(...args))),
          role: $options.ariaRoleItem,
          tabindex: $options.isFocusable ? 0 : null
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10 /* CLASS, PROPS */, ["role", "tabindex"]))
}

script$S.render = render$S;
script$S.__file = "src/components/dropdown/DropdownItem.vue";

var script$R = {
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
    return h('div', {
      attrs: {
        'class': 'field-body'
      }
    }, getSlot$1(this.$slots, 'default').map(function (element) {
      // skip returns and comments
      if (!element.tag) {
        return element;
      }

      var message;

      if (first) {
        message = _this.message;
        first = false;
      }

      return h('b-field', {
        attrs: {
          type: _this.type,
          message: message
        }
      }, [element]);
    }));
  }
};

const render$R = () => {};


script$R.render = render$R;
script$R.__file = "src/components/field/FieldBody.vue";

var script$Q = {
  name: 'BField',
  components: _defineProperty({}, script$R.name, script$R),
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
      return this.label || getSlot$1(this.$slots, 'label');
    },
    hasMessage: function hasMessage() {
      return (!this.parent || !this.parent.hasInnerField) && this.newMessage || getSlot$1(this.$slots, 'message');
    },
    numberInputClasses: function numberInputClasses() {
      if (getSlot$1(this.$slots, 'default')) {
        var numberinput = getSlot$1(this.$slots, 'default').filter(function (node) {
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

      if (getSlot$1(this.$slots, 'default')) {
        renderedNode = getSlot$1(this.$slots, 'default').reduce(function (i, node) {
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

const _hoisted_1$y = {
  key: 3,
  class: "field-body"
};

function render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_field_body = resolveComponent("b-field-body");
  const _component_b_field = resolveComponent("b-field");

  return (openBlock(), createBlock("div", {
    class: ["field", $options.rootClasses]
  }, [
    ($props.horizontal)
      ? (openBlock(), createBlock("div", {
          key: 0,
          class: ["field-label", [$props.customClass, $data.fieldLabelSize]]
        }, [
          ($options.hasLabel)
            ? (openBlock(), createBlock("label", {
                key: 0,
                for: $props.labelFor,
                class: [$props.customClass, "label"]
              }, [
                (_ctx.$slots.label)
                  ? renderSlot(_ctx.$slots, "label", { key: 0 })
                  : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString($props.label), 1 /* TEXT */)
                    ], 64 /* STABLE_FRAGMENT */))
              ], 10 /* CLASS, PROPS */, ["for"]))
            : createCommentVNode("v-if", true)
        ], 2 /* CLASS */))
      : (openBlock(), createBlock(Fragment, { key: 1 }, [
          ($options.hasLabel)
            ? (openBlock(), createBlock("label", {
                key: 0,
                for: $props.labelFor,
                class: [$props.customClass, "label"]
              }, [
                (_ctx.$slots.label)
                  ? renderSlot(_ctx.$slots, "label", { key: 0 })
                  : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString($props.label), 1 /* TEXT */)
                    ], 64 /* STABLE_FRAGMENT */))
              ], 10 /* CLASS, PROPS */, ["for"]))
            : createCommentVNode("v-if", true)
        ], 64 /* STABLE_FRAGMENT */)),
    ($props.horizontal)
      ? (openBlock(), createBlock(_component_b_field_body, {
          key: 2,
          message: $data.newMessage ? $options.formattedMessage : '',
          type: $data.newType
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3 /* FORWARDED */
        }, 8 /* PROPS */, ["message", "type"]))
      : ($options.hasInnerField)
        ? (openBlock(), createBlock("div", _hoisted_1$y, [
            createVNode(_component_b_field, {
              addons: false,
              type: $data.newType,
              class: $options.innerFieldClasses
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3 /* FORWARDED */
            }, 8 /* PROPS */, ["type", "class"])
          ]))
        : renderSlot(_ctx.$slots, "default", { key: 4 }),
    ($options.hasMessage && !$props.horizontal)
      ? (openBlock(), createBlock("p", {
          key: 5,
          class: ["help", $data.newType]
        }, [
          (_ctx.$slots.message)
            ? renderSlot(_ctx.$slots, "message", { key: 0 })
            : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList($options.formattedMessage, (mess, i) => {
                return (openBlock(), createBlock(Fragment, null, [
                  createTextVNode(toDisplayString(mess) + " ", 1 /* TEXT */),
                  ((i + 1) < $options.formattedMessage.length)
                    ? (openBlock(), createBlock("br", { key: i }))
                    : createCommentVNode("v-if", true)
                ], 64 /* STABLE_FRAGMENT */))
              }), 256 /* UNKEYED_FRAGMENT */))
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$Q.render = render$Q;
script$Q.__file = "src/components/field/Field.vue";

// These should match the variables in clockpicker.scss
var indicatorSize = 40;
var paddingInner = 5;
var script$P = {
  name: 'BClockpickerFace',
  props: {
    pickerSize: Number,
    min: Number,
    max: Number,
    double: Boolean,
    value: Number,
    faceNumbers: Array,
    disabledValues: Function
  },
  data: function data() {
    return {
      isDragging: false,
      inputValue: this.value,
      prevAngle: 720
    };
  },
  computed: {
    /**
    * How many number indicators are shown on the face
    */
    count: function count() {
      return this.max - this.min + 1;
    },

    /**
    * How many number indicators are shown per ring on the face
    */
    countPerRing: function countPerRing() {
      return this.double ? this.count / 2 : this.count;
    },

    /**
    * Radius of the clock face
    */
    radius: function radius() {
      return this.pickerSize / 2;
    },

    /**
    * Radius of the outer ring of number indicators
    */
    outerRadius: function outerRadius() {
      return this.radius - paddingInner - indicatorSize / 2;
    },

    /**
    * Radius of the inner ring of number indicators
    */
    innerRadius: function innerRadius() {
      return Math.max(this.outerRadius * 0.6, this.outerRadius - paddingInner - indicatorSize); // 48px gives enough room for the outer ring of numbers
    },

    /**
    * The angle for each selectable value
    * For hours this ends up being 30 degrees, for minutes 6 degrees
    */
    degreesPerUnit: function degreesPerUnit() {
      return 360 / this.countPerRing;
    },

    /**
    * Used for calculating x/y grid location based on degrees
    */
    degrees: function degrees() {
      return this.degreesPerUnit * Math.PI / 180;
    },

    /**
    * Calculates the angle the clock hand should be rotated for the
    * selected value
    */
    handRotateAngle: function handRotateAngle() {
      var currentAngle = this.prevAngle;

      while (currentAngle < 0) {
        currentAngle += 360;
      }

      var targetAngle = this.calcHandAngle(this.displayedValue);
      var degreesDiff = this.shortestDistanceDegrees(currentAngle, targetAngle);
      var angle = this.prevAngle + degreesDiff;
      return angle;
    },

    /**
    * Determines how long the selector hand is based on if the
    * selected value is located along the outer or inner ring
    */
    handScale: function handScale() {
      return this.calcHandScale(this.displayedValue);
    },
    handStyle: function handStyle() {
      return {
        transform: "rotate(".concat(this.handRotateAngle, "deg) scaleY(").concat(this.handScale, ")"),
        transition: '.3s cubic-bezier(.25,.8,.50,1)'
      };
    },

    /**
    * The value the hand should be pointing at
    */
    displayedValue: function displayedValue() {
      return this.inputValue == null ? this.min : this.inputValue;
    }
  },
  watch: {
    value: function value(_value) {
      if (_value !== this.inputValue) {
        this.prevAngle = this.handRotateAngle;
      }

      this.inputValue = _value;
    }
  },
  methods: {
    isDisabled: function isDisabled(value) {
      return this.disabledValues && this.disabledValues(value);
    },

    /**
    * Calculates the distance between two points
    */
    euclidean: function euclidean(p0, p1) {
      var dx = p1.x - p0.x;
      var dy = p1.y - p0.y;
      return Math.sqrt(dx * dx + dy * dy);
    },
    shortestDistanceDegrees: function shortestDistanceDegrees(start, stop) {
      var modDiff = (stop - start) % 360;
      var shortestDistance = 180 - Math.abs(Math.abs(modDiff) - 180);
      return (modDiff + 360) % 360 < 180 ? shortestDistance * 1 : shortestDistance * -1;
    },

    /**
    * Calculates the angle of the line from the center point
    * to the given point.
    */
    coordToAngle: function coordToAngle(center, p1) {
      var value = 2 * Math.atan2(p1.y - center.y - this.euclidean(center, p1), p1.x - center.x);
      return Math.abs(value * 180 / Math.PI);
    },

    /**
    * Generates the inline style translate() property for a
    * number indicator, which determines it's location on the
    * clock face
    */
    getNumberTranslate: function getNumberTranslate(value) {
      var _this$getNumberCoords = this.getNumberCoords(value),
          x = _this$getNumberCoords.x,
          y = _this$getNumberCoords.y;

      return "translate(".concat(x, "px, ").concat(y, "px)");
    },

    /***
    * Calculates the coordinates on the clock face for a number
    * indicator value
    */
    getNumberCoords: function getNumberCoords(value) {
      var radius = this.isInnerRing(value) ? this.innerRadius : this.outerRadius;
      return {
        x: Math.round(radius * Math.sin((value - this.min) * this.degrees)),
        y: Math.round(-radius * Math.cos((value - this.min) * this.degrees))
      };
    },
    getFaceNumberClasses: function getFaceNumberClasses(num) {
      return {
        'active': num.value === this.displayedValue,
        'disabled': this.isDisabled(num.value)
      };
    },

    /**
    * Determines if a value resides on the inner ring
    */
    isInnerRing: function isInnerRing(value) {
      return this.double && value - this.min >= this.countPerRing;
    },
    calcHandAngle: function calcHandAngle(value) {
      var angle = this.degreesPerUnit * (value - this.min);
      if (this.isInnerRing(value)) angle -= 360;
      return angle;
    },
    calcHandScale: function calcHandScale(value) {
      return this.isInnerRing(value) ? this.innerRadius / this.outerRadius : 1;
    },
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      this.isDragging = true;
      this.onDragMove(e);
    },
    onMouseUp: function onMouseUp() {
      this.isDragging = false;

      if (!this.isDisabled(this.inputValue)) {
        this.$emit('change', this.inputValue);
      }
    },
    onDragMove: function onDragMove(e) {
      e.preventDefault();
      if (!this.isDragging && e.type !== 'click') return;

      var _this$$refs$clock$get = this.$refs.clock.getBoundingClientRect(),
          width = _this$$refs$clock$get.width,
          top = _this$$refs$clock$get.top,
          left = _this$$refs$clock$get.left;

      var _ref = 'touches' in e ? e.touches[0] : e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      var center = {
        x: width / 2,
        y: -width / 2
      };
      var coords = {
        x: clientX - left,
        y: top - clientY
      };
      var handAngle = Math.round(this.coordToAngle(center, coords) + 360) % 360;
      var insideClick = this.double && this.euclidean(center, coords) < (this.outerRadius + this.innerRadius) / 2 - 16;
      var value = Math.round(handAngle / this.degreesPerUnit) + this.min + (insideClick ? this.countPerRing : 0); // Necessary to fix edge case when selecting left part of max value

      if (handAngle >= 360 - this.degreesPerUnit / 2) {
        value = insideClick ? this.max : this.min;
      }

      this.update(value);
    },
    update: function update(value) {
      if (this.inputValue !== value && !this.isDisabled(value)) {
        this.prevAngle = this.handRotateAngle;
        this.inputValue = value;
        this.$emit('input', value);
      }
    }
  }
};

const _hoisted_1$x = {
  class: "b-clockpicker-face-outer-ring",
  ref: "clock"
};

function render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: "b-clockpicker-face",
    onMousedown: _cache[1] || (_cache[1] = (...args) => ($options.onMouseDown && $options.onMouseDown(...args))),
    onMouseup: _cache[2] || (_cache[2] = (...args) => ($options.onMouseUp && $options.onMouseUp(...args))),
    onMousemove: _cache[3] || (_cache[3] = (...args) => ($options.onDragMove && $options.onDragMove(...args))),
    onTouchstart: _cache[4] || (_cache[4] = (...args) => ($options.onMouseDown && $options.onMouseDown(...args))),
    onTouchend: _cache[5] || (_cache[5] = (...args) => ($options.onMouseUp && $options.onMouseUp(...args))),
    onTouchmove: _cache[6] || (_cache[6] = (...args) => ($options.onDragMove && $options.onDragMove(...args)))
  }, [
    createVNode("div", _hoisted_1$x, [
      createVNode("div", {
        class: "b-clockpicker-face-hand",
        style: $options.handStyle
      }, null, 4 /* STYLE */),
      (openBlock(true), createBlock(Fragment, null, renderList($props.faceNumbers, (num, index) => {
        return (openBlock(), createBlock("span", {
          key: index,
          class: ["b-clockpicker-face-number", $options.getFaceNumberClasses(num)],
          style: { transform: $options.getNumberTranslate(num.value) }
        }, [
          createVNode("span", null, toDisplayString(num.label), 1 /* TEXT */)
        ], 6 /* CLASS, STYLE */))
      }), 128 /* KEYED_FRAGMENT */))
    ], 512 /* NEED_PATCH */)
  ], 32 /* HYDRATE_EVENTS */))
}

script$P.render = render$P;
script$P.__file = "src/components/clockpicker/ClockpickerFace.vue";

var _components$9;
var outerPadding = 12;
var script$O = {
  name: 'BClockpicker',
  components: (_components$9 = {}, _defineProperty(_components$9, script$P.name, script$P), _defineProperty(_components$9, script$10.name, script$10), _defineProperty(_components$9, script$Q.name, script$Q), _defineProperty(_components$9, script$11.name, script$11), _defineProperty(_components$9, script$T.name, script$T), _defineProperty(_components$9, script$S.name, script$S), _components$9),
  mixins: [TimepickerMixin],
  props: {
    pickerSize: {
      type: Number,
      default: 290
    },
    incrementMinutes: {
      type: Number,
      default: 5
    },
    autoSwitch: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'is-primary'
    },
    hoursLabel: {
      type: String,
      default: function _default() {
        return config.defaultClockpickerHoursLabel || 'Hours';
      }
    },
    minutesLabel: {
      type: String,
      default: function _default() {
        return config.defaultClockpickerMinutesLabel || 'Min';
      }
    }
  },
  data: function data() {
    return {
      isSelectingHour: true,
      isDragging: false,
      _isClockpicker: true
    };
  },
  computed: {
    hoursDisplay: function hoursDisplay() {
      if (this.hoursSelected == null) return '--';
      if (this.isHourFormat24) return this.pad(this.hoursSelected);
      var display = this.hoursSelected;

      if (this.meridienSelected === this.pmString || this.meridienSelected === this.PM) {
        display -= 12;
      }

      if (display === 0) display = 12;
      return display;
    },
    minutesDisplay: function minutesDisplay() {
      return this.minutesSelected == null ? '--' : this.pad(this.minutesSelected);
    },
    minFaceValue: function minFaceValue() {
      return this.isSelectingHour && !this.isHourFormat24 && (this.meridienSelected === this.pmString || this.meridienSelected === this.PM) ? 12 : 0;
    },
    maxFaceValue: function maxFaceValue() {
      return this.isSelectingHour ? !this.isHourFormat24 && (this.meridienSelected === this.amString || this.meridienSelected === this.AM) ? 11 : 23 : 59;
    },
    faceSize: function faceSize() {
      return this.pickerSize - outerPadding * 2;
    },
    faceDisabledValues: function faceDisabledValues() {
      return this.isSelectingHour ? this.isHourDisabled : this.isMinuteDisabled;
    }
  },
  methods: {
    onClockInput: function onClockInput(value) {
      if (this.isSelectingHour) {
        this.hoursSelected = value;
        this.onHoursChange(value);
      } else {
        this.minutesSelected = value;
        this.onMinutesChange(value);
      }
    },
    onClockChange: function onClockChange(value) {
      if (this.autoSwitch && this.isSelectingHour) {
        this.isSelectingHour = !this.isSelectingHour;
      }
    },
    onMeridienClick: function onMeridienClick(value) {
      if (this.meridienSelected !== value) {
        this.meridienSelected = value;
        this.onMeridienChange(value);
      }
    }
  }
};

const _hoisted_1$w = {
  key: 0,
  class: "card-header"
};
const _hoisted_2$j = { class: "b-clockpicker-header card-header-title" };
const _hoisted_3$e = { class: "b-clockpicker-time" };
const _hoisted_4$9 = {
  key: 0,
  class: "b-clockpicker-period"
};
const _hoisted_5$6 = { class: "card-content" };
const _hoisted_6$5 = {
  key: 0,
  class: "b-clockpicker-time"
};
const _hoisted_7$4 = {
  key: 1,
  class: "b-clockpicker-period"
};
const _hoisted_8$3 = {
  key: 1,
  class: "b-clockpicker-footer card-footer"
};

function render$O(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_input = resolveComponent("b-input");
  const _component_b_clockpicker_face = resolveComponent("b-clockpicker-face");
  const _component_b_dropdown = resolveComponent("b-dropdown");

  return (openBlock(), createBlock("div", {
    class: ["b-clockpicker control", [_ctx.size, $props.type, {'is-expanded': _ctx.expanded}]]
  }, [
    (!_ctx.isMobile || _ctx.inline)
      ? (openBlock(), createBlock(_component_b_dropdown, {
          key: 0,
          ref: "dropdown",
          position: _ctx.position,
          disabled: _ctx.disabled,
          inline: _ctx.inline,
          "append-to-body": _ctx.appendToBody,
          "append-to-body-copy-parent": "",
          onActiveChange: _ctx.onActiveChange
        }, createSlots({
          default: withCtx(() => [
            createVNode("div", {
              class: "card",
              disabled: _ctx.disabled ? '' : null,
              custom: ""
            }, [
              (_ctx.inline)
                ? (openBlock(), createBlock("header", _hoisted_1$w, [
                    createVNode("div", _hoisted_2$j, [
                      createVNode("div", _hoisted_3$e, [
                        createVNode("span", {
                          class: ["b-clockpicker-btn", { active: $data.isSelectingHour }],
                          onClick: _cache[5] || (_cache[5] = $event => ($data.isSelectingHour = true))
                        }, toDisplayString($options.hoursDisplay), 3 /* TEXT, CLASS */),
                        createVNode("span", null, toDisplayString(_ctx.hourLiteral), 1 /* TEXT */),
                        createVNode("span", {
                          class: ["b-clockpicker-btn", { active: !$data.isSelectingHour }],
                          onClick: _cache[6] || (_cache[6] = $event => ($data.isSelectingHour = false))
                        }, toDisplayString($options.minutesDisplay), 3 /* TEXT, CLASS */)
                      ]),
                      (!_ctx.isHourFormat24)
                        ? (openBlock(), createBlock("div", _hoisted_4$9, [
                            createVNode("div", {
                              class: ["b-clockpicker-btn", {
                                    active: _ctx.meridienSelected === _ctx.amString || _ctx.meridienSelected === _ctx.AM
                                }],
                              onClick: _cache[7] || (_cache[7] = $event => ($options.onMeridienClick(_ctx.amString)))
                            }, toDisplayString(_ctx.amString), 3 /* TEXT, CLASS */),
                            createVNode("div", {
                              class: ["b-clockpicker-btn", {
                                    active: _ctx.meridienSelected === _ctx.pmString || _ctx.meridienSelected === _ctx.PM
                                }],
                              onClick: _cache[8] || (_cache[8] = $event => ($options.onMeridienClick(_ctx.pmString)))
                            }, toDisplayString(_ctx.pmString), 3 /* TEXT, CLASS */)
                          ]))
                        : createCommentVNode("v-if", true)
                    ])
                  ]))
                : createCommentVNode("v-if", true),
              createVNode("div", _hoisted_5$6, [
                createVNode("div", {
                  class: "b-clockpicker-body",
                  style: { width: $options.faceSize + 'px', height: $options.faceSize + 'px' }
                }, [
                  (!_ctx.inline)
                    ? (openBlock(), createBlock("div", _hoisted_6$5, [
                        createVNode("div", {
                          class: ["b-clockpicker-btn", { active: $data.isSelectingHour }],
                          onClick: _cache[9] || (_cache[9] = $event => ($data.isSelectingHour = true))
                        }, toDisplayString($props.hoursLabel), 3 /* TEXT, CLASS */),
                        createVNode("span", {
                          class: ["b-clockpicker-btn", { active: !$data.isSelectingHour }],
                          onClick: _cache[10] || (_cache[10] = $event => ($data.isSelectingHour = false))
                        }, toDisplayString($props.minutesLabel), 3 /* TEXT, CLASS */)
                      ]))
                    : createCommentVNode("v-if", true),
                  (!_ctx.isHourFormat24 && !_ctx.inline)
                    ? (openBlock(), createBlock("div", _hoisted_7$4, [
                        createVNode("div", {
                          class: ["b-clockpicker-btn", {
                                    active: _ctx.meridienSelected === _ctx.amString || _ctx.meridienSelected === _ctx.AM
                                }],
                          onClick: _cache[11] || (_cache[11] = $event => ($options.onMeridienClick(_ctx.amString)))
                        }, toDisplayString(_ctx.amString), 3 /* TEXT, CLASS */),
                        createVNode("div", {
                          class: ["b-clockpicker-btn", {
                                    active: _ctx.meridienSelected === _ctx.pmString || _ctx.meridienSelected === _ctx.PM
                                }],
                          onClick: _cache[12] || (_cache[12] = $event => ($options.onMeridienClick(_ctx.pmString)))
                        }, toDisplayString(_ctx.pmString), 3 /* TEXT, CLASS */)
                      ]))
                    : createCommentVNode("v-if", true),
                  createVNode(_component_b_clockpicker_face, {
                    "picker-size": $options.faceSize,
                    min: $options.minFaceValue,
                    max: $options.maxFaceValue,
                    "face-numbers": $data.isSelectingHour ? _ctx.hours : _ctx.minutes,
                    "disabled-values": $options.faceDisabledValues,
                    double: $data.isSelectingHour && _ctx.isHourFormat24,
                    value: $data.isSelectingHour ? _ctx.hoursSelected : _ctx.minutesSelected,
                    onInput: $options.onClockInput,
                    onChange: $options.onClockChange
                  }, null, 8 /* PROPS */, ["picker-size", "min", "max", "face-numbers", "disabled-values", "double", "value", "onInput", "onChange"])
                ], 4 /* STYLE */)
              ]),
              (_ctx.$slots.default !== undefined && _ctx.$slots.default.length)
                ? (openBlock(), createBlock("footer", _hoisted_8$3, [
                    renderSlot(_ctx.$slots, "default")
                  ]))
                : createCommentVNode("v-if", true)
            ], 8 /* PROPS */, ["disabled"])
          ]),
          _: 2 /* DYNAMIC */
        }, [
          (!_ctx.inline)
            ? {
                name: "trigger",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "trigger", {}, () => [
                    createVNode(_component_b_input, mergeProps({
                      ref: "input",
                      slot: "trigger",
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
                      onClick: _cache[1] || (_cache[1] = withModifiers($event => (_ctx.toggle(true)), ["stop"])),
                      onKeyup: _cache[2] || (_cache[2] = withKeys($event => (_ctx.toggle(true)), ["native","enter"])),
                      onChange: _cache[3] || (_cache[3] = $event => (_ctx.onChange($event.target.value))),
                      onFocus: _ctx.handleOnFocus,
                      onBlur: _cache[4] || (_cache[4] = $event => (_ctx.checkHtml5Validity()))
                    }), null, 16 /* FULL_PROPS */, ["value", "placeholder", "size", "icon", "icon-pack", "loading", "disabled", "readonly", "rounded", "use-html5-validation", "onFocus"])
                  ])
                ])
              }
            : undefined
        ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["position", "disabled", "inline", "append-to-body", "onActiveChange"]))
      : (openBlock(), createBlock(_component_b_input, mergeProps({
          key: 1,
          ref: "input",
          type: "time",
          autocomplete: "off",
          value: _ctx.formatHHMMSS(_ctx.computedValue),
          placeholder: _ctx.placeholder,
          size: _ctx.size,
          icon: _ctx.icon,
          "icon-pack": _ctx.iconPack,
          loading: _ctx.loading,
          max: _ctx.formatHHMMSS(_ctx.maxTime),
          min: _ctx.formatHHMMSS(_ctx.minTime),
          disabled: _ctx.disabled,
          readonly: false
        }, _ctx.$attrs, {
          "use-html5-validation": _ctx.useHtml5Validation,
          onClick: _cache[13] || (_cache[13] = withModifiers($event => (_ctx.toggle(true)), ["stop"])),
          onKeyup: _cache[14] || (_cache[14] = withKeys($event => (_ctx.toggle(true)), ["native","enter"])),
          onChange: _ctx.onChangeNativePicker,
          onFocus: _ctx.handleOnFocus,
          onBlur: _cache[15] || (_cache[15] = $event => (_ctx.onBlur() && _ctx.checkHtml5Validity()))
        }), null, 16 /* FULL_PROPS */, ["value", "placeholder", "size", "icon", "icon-pack", "loading", "max", "min", "disabled", "use-html5-validation", "onChange", "onFocus"]))
  ], 2 /* CLASS */))
}

script$O.render = render$O;
script$O.__file = "src/components/clockpicker/Clockpicker.vue";

var Plugin$y = {
  install: function install(Vue) {
    registerComponent(Vue, script$O);
  }
};
use(Plugin$y);

var script$N = {
  name: 'BSelect',
  components: _defineProperty({}, script$11.name, script$11),
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

const _hoisted_1$v = {
  key: 0,
  value: null,
  disabled: "",
  hidden: ""
};

function render$N(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock("div", {
    class: ["control", { 'is-expanded': _ctx.expanded, 'has-icons-left': _ctx.icon }]
  }, [
    createVNode("span", {
      class: ["select", $options.spanClasses]
    }, [
      withDirectives(createVNode("select", mergeProps({
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($options.computedValue = $event)),
        ref: "select",
        multiple: $props.multiple,
        size: $props.nativeSize
      }, _ctx.$attrs, {
        onBlur: _cache[2] || (_cache[2] = $event => (_ctx.$emit('blur', $event) && _ctx.checkHtml5Validity())),
        onFocus: _cache[3] || (_cache[3] = $event => (_ctx.$emit('focus', $event)))
      }), [
        ($props.placeholder)
          ? (openBlock(), createBlock(Fragment, { key: 0 }, [
              ($options.computedValue == null)
                ? (openBlock(), createBlock("option", _hoisted_1$v, toDisplayString($props.placeholder), 1 /* TEXT */))
                : createCommentVNode("v-if", true)
            ], 64 /* STABLE_FRAGMENT */))
          : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ], 16 /* FULL_PROPS */, ["multiple", "size"]), [
        [vModelSelect, $options.computedValue]
      ])
    ], 2 /* CLASS */),
    (_ctx.icon)
      ? (openBlock(), createBlock(_component_b_icon, {
          key: 0,
          class: "is-left",
          icon: _ctx.icon,
          pack: _ctx.iconPack,
          size: _ctx.iconSize
        }, null, 8 /* PROPS */, ["icon", "pack", "size"]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$N.render = render$N;
script$N.__file = "src/components/select/Select.vue";

var script$M = {
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

const _hoisted_1$u = { class: "datepicker-row" };
const _hoisted_2$i = {
  key: 0,
  class: "events"
};
const _hoisted_3$d = {
  key: 0,
  class: "events"
};

function render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$u, [
    ($props.showWeekNumber)
      ? (openBlock(), createBlock("a", {
          key: 0,
          class: ["datepicker-cell is-week-number", {'is-clickable': $props.weekNumberClickable }],
          onClick: _cache[1] || (_cache[1] = withModifiers($event => ($options.clickWeekNumber($options.getWeekNumber($props.week[6]))), ["prevent"]))
        }, [
          createVNode("span", null, toDisplayString($options.getWeekNumber($props.week[6])), 1 /* TEXT */)
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (openBlock(true), createBlock(Fragment, null, renderList($props.week, (weekDay, index) => {
      return (openBlock(), createBlock(Fragment, null, [
        ($options.selectableDate(weekDay) && !$props.disabled)
          ? (openBlock(), createBlock("a", {
              ref: `day-${weekDay.getMonth()}-${weekDay.getDate()}`,
              key: index + 'selectable',
              class: [$options.classObject(weekDay), "datepicker-cell"],
              role: "button",
              href: "#",
              disabled: $props.disabled ? '' : null,
              onClick: withModifiers($event => ($options.emitChosenDate(weekDay)), ["prevent"]),
              onMouseenter: $event => ($options.setRangeHoverEndDate(weekDay)),
              onKeydown: $event => ($options.manageKeydown($event, weekDay)),
              tabindex: $props.day === weekDay.getDate() ? null : -1
            }, [
              createVNode("span", null, toDisplayString(weekDay.getDate()), 1 /* TEXT */),
              ($options.eventsDateMatch(weekDay))
                ? (openBlock(), createBlock("div", _hoisted_2$i, [
                    (openBlock(true), createBlock(Fragment, null, renderList($options.eventsDateMatch(weekDay), (event, index) => {
                      return (openBlock(), createBlock("div", {
                        class: ["event", event.type],
                        key: index
                      }, null, 2 /* CLASS */))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]))
                : createCommentVNode("v-if", true)
            ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled", "onClick", "onMouseenter", "onKeydown", "tabindex"]))
          : (openBlock(), createBlock("div", {
              key: index,
              class: [$options.classObject(weekDay), "datepicker-cell"]
            }, [
              createVNode("span", null, toDisplayString(weekDay.getDate()), 1 /* TEXT */),
              ($options.eventsDateMatch(weekDay))
                ? (openBlock(), createBlock("div", _hoisted_3$d, [
                    (openBlock(true), createBlock(Fragment, null, renderList($options.eventsDateMatch(weekDay), (event, index) => {
                      return (openBlock(), createBlock("div", {
                        class: ["event", event.type],
                        key: index
                      }, null, 2 /* CLASS */))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]))
                : createCommentVNode("v-if", true)
            ], 2 /* CLASS */))
      ], 64 /* STABLE_FRAGMENT */))
    }), 256 /* UNKEYED_FRAGMENT */))
  ]))
}

script$M.render = render$M;
script$M.__file = "src/components/datepicker/DatepickerTableRow.vue";

var script$L = {
  name: 'BDatepickerTable',
  components: _defineProperty({}, script$M.name, script$M),
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

const _hoisted_1$t = { class: "datepicker-table" };
const _hoisted_2$h = { class: "datepicker-header" };

function render$L(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_datepicker_table_row = resolveComponent("b-datepicker-table-row");

  return (openBlock(), createBlock("section", _hoisted_1$t, [
    createVNode("header", _hoisted_2$h, [
      (openBlock(true), createBlock(Fragment, null, renderList($options.visibleDayNames, (day, index) => {
        return (openBlock(), createBlock("div", {
          key: index,
          class: "datepicker-cell"
        }, [
          createVNode("span", null, toDisplayString(day), 1 /* TEXT */)
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    createVNode("div", {
      class: ["datepicker-body", {'has-events':$options.hasEvents}]
    }, [
      (openBlock(true), createBlock(Fragment, null, renderList($options.weeksInThisMonth, (week, index) => {
        return (openBlock(), createBlock(_component_b_datepicker_table_row, {
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

script$L.render = render$L;
script$L.__file = "src/components/datepicker/DatepickerTable.vue";

var script$K = {
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

const _hoisted_1$s = { class: "datepicker-table" };
const _hoisted_2$g = { class: "datepicker-months" };
const _hoisted_3$c = {
  key: 0,
  class: "events"
};

function render$K(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("section", _hoisted_1$s, [
    createVNode("div", {
      class: ["datepicker-body", {'has-events':$options.hasEvents}]
    }, [
      createVNode("div", _hoisted_2$g, [
        (openBlock(true), createBlock(Fragment, null, renderList($options.monthDates, (date, index) => {
          return (openBlock(), createBlock(Fragment, null, [
            ($options.selectableDate(date) && !$props.disabled)
              ? (openBlock(), createBlock("a", {
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
                  onClick: withModifiers($event => ($options.updateSelectedDate(date)), ["prevent"]),
                  onMouseenter: $event => ($options.setRangeHoverEndDate(date)),
                  onKeydown: withModifiers($event => ($options.manageKeydown($event, date)), ["prevent"]),
                  tabindex: $props.focused.month === date.getMonth() ? null : -1
                }, [
                  createTextVNode(toDisplayString($props.monthNames[date.getMonth()]) + " ", 1 /* TEXT */),
                  ($options.eventsDateMatch(date))
                    ? (openBlock(), createBlock("div", _hoisted_3$c, [
                        (openBlock(true), createBlock(Fragment, null, renderList($options.eventsDateMatch(date), (event, index) => {
                          return (openBlock(), createBlock("div", {
                            class: ["event", event.type],
                            key: index
                          }, null, 2 /* CLASS */))
                        }), 128 /* KEYED_FRAGMENT */))
                      ]))
                    : createCommentVNode("v-if", true)
                ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled", "onClick", "onMouseenter", "onKeydown", "tabindex"]))
              : (openBlock(), createBlock("div", {
                  key: index,
                  class: [$options.classObject(date), "datepicker-cell"]
                }, toDisplayString($props.monthNames[date.getMonth()]), 3 /* TEXT, CLASS */))
          ], 64 /* STABLE_FRAGMENT */))
        }), 256 /* UNKEYED_FRAGMENT */))
      ])
    ], 2 /* CLASS */)
  ]))
}

script$K.render = render$K;
script$K.__file = "src/components/datepicker/DatepickerMonth.vue";

var _components$8;

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

var script$J = {
  name: 'BDatepicker',
  components: (_components$8 = {}, _defineProperty(_components$8, script$L.name, script$L), _defineProperty(_components$8, script$K.name, script$K), _defineProperty(_components$8, script$10.name, script$10), _defineProperty(_components$8, script$Q.name, script$Q), _defineProperty(_components$8, script$N.name, script$N), _defineProperty(_components$8, script$11.name, script$11), _defineProperty(_components$8, script$T.name, script$T), _defineProperty(_components$8, script$S.name, script$S), _components$8),
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

const _hoisted_1$r = { class: "datepicker-header" };
const _hoisted_2$f = { class: "pagination-list" };
const _hoisted_3$b = { key: 1 };

function render$J(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_input = resolveComponent("b-input");
  const _component_b_icon = resolveComponent("b-icon");
  const _component_b_select = resolveComponent("b-select");
  const _component_b_field = resolveComponent("b-field");
  const _component_b_datepicker_table = resolveComponent("b-datepicker-table");
  const _component_b_datepicker_month = resolveComponent("b-datepicker-month");
  const _component_b_dropdown_item = resolveComponent("b-dropdown-item");
  const _component_b_dropdown = resolveComponent("b-dropdown");

  return (openBlock(), createBlock("div", {
    class: ["datepicker control", [_ctx.size, {'is-expanded': _ctx.expanded}]]
  }, [
    (!$options.isMobile || $props.inline)
      ? (openBlock(), createBlock(_component_b_dropdown, {
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
        }, createSlots({
          default: withCtx(() => [
            createVNode(_component_b_dropdown_item, {
              disabled: $props.disabled,
              focusable: $props.focusable,
              custom: "",
              class: {'dropdown-horizonal-timepicker': $props.horizontalTimePicker}
            }, {
              default: withCtx(() => [
                createVNode("div", null, [
                  createVNode("header", _hoisted_1$r, [
                    (_ctx.$slots.header !== undefined && _ctx.$slots.header.length)
                      ? renderSlot(_ctx.$slots, "header", { key: 0 })
                      : (openBlock(), createBlock("div", {
                          key: 1,
                          class: ["pagination field is-centered", _ctx.size]
                        }, [
                          withDirectives(createVNode("a", {
                            class: "pagination-previous",
                            role: "button",
                            href: "#",
                            disabled: $props.disabled ? '' : null,
                            "aria-label": $props.ariaPreviousLabel,
                            onClick: _cache[3] || (_cache[3] = withModifiers((...args) => ($options.prev && $options.prev(...args)), ["prevent"])),
                            onKeydown: [
                              _cache[4] || (_cache[4] = withKeys(withModifiers((...args) => ($options.prev && $options.prev(...args)), ["prevent"]), ["enter"])),
                              _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => ($options.prev && $options.prev(...args)), ["prevent"]), ["space"]))
                            ]
                          }, [
                            createVNode(_component_b_icon, {
                              icon: $props.iconPrev,
                              pack: _ctx.iconPack,
                              both: "",
                              type: "is-primary is-clickable"
                            }, null, 8 /* PROPS */, ["icon", "pack"])
                          ], 40 /* PROPS, HYDRATE_EVENTS */, ["disabled", "aria-label"]), [
                            [vShow, !$options.showPrev && !$props.disabled]
                          ]),
                          withDirectives(createVNode("a", {
                            class: "pagination-next",
                            role: "button",
                            href: "#",
                            disabled: $props.disabled ? '' : null,
                            "aria-label": $props.ariaNextLabel,
                            onClick: _cache[6] || (_cache[6] = withModifiers((...args) => ($options.next && $options.next(...args)), ["prevent"])),
                            onKeydown: [
                              _cache[7] || (_cache[7] = withKeys(withModifiers((...args) => ($options.next && $options.next(...args)), ["prevent"]), ["enter"])),
                              _cache[8] || (_cache[8] = withKeys(withModifiers((...args) => ($options.next && $options.next(...args)), ["prevent"]), ["space"]))
                            ]
                          }, [
                            createVNode(_component_b_icon, {
                              icon: $props.iconNext,
                              pack: _ctx.iconPack,
                              both: "",
                              type: "is-primary is-clickable"
                            }, null, 8 /* PROPS */, ["icon", "pack"])
                          ], 40 /* PROPS, HYDRATE_EVENTS */, ["disabled", "aria-label"]), [
                            [vShow, !$options.showNext && !$props.disabled]
                          ]),
                          createVNode("div", _hoisted_2$f, [
                            createVNode(_component_b_field, null, {
                              default: withCtx(() => [
                                (!$options.isTypeMonth)
                                  ? (openBlock(), createBlock(_component_b_select, {
                                      key: 0,
                                      modelValue: $data.focusedDateData.month,
                                      "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => ($data.focusedDateData.month = $event)),
                                      disabled: $props.disabled,
                                      size: _ctx.size
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList($options.listOfMonths, (month) => {
                                          return (openBlock(), createBlock("option", {
                                            value: month.index,
                                            key: month.name,
                                            disabled: month.disabled ? '' : null
                                          }, toDisplayString(month.name), 9 /* TEXT, PROPS */, ["value", "disabled"]))
                                        }), 128 /* KEYED_FRAGMENT */))
                                      ]),
                                      _: 1 /* STABLE */
                                    }, 8 /* PROPS */, ["modelValue", "disabled", "size"]))
                                  : createCommentVNode("v-if", true),
                                createVNode(_component_b_select, {
                                  modelValue: $data.focusedDateData.year,
                                  "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => ($data.focusedDateData.year = $event)),
                                  disabled: $props.disabled,
                                  size: _ctx.size
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList($options.listOfYears, (year) => {
                                      return (openBlock(), createBlock("option", {
                                        value: year,
                                        key: year
                                      }, toDisplayString(year), 9 /* TEXT, PROPS */, ["value"]))
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
                    ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ["datepicker-content", {'content-horizonal-timepicker': $props.horizontalTimePicker}]
                      }, [
                        createVNode(_component_b_datepicker_table, {
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
                    : (openBlock(), createBlock("div", _hoisted_3$b, [
                        createVNode(_component_b_datepicker_month, {
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
                  ? (openBlock(), createBlock("footer", {
                      key: 0,
                      class: ["datepicker-footer", {'footer-horizontal-timepicker': $props.horizontalTimePicker}]
                    }, [
                      renderSlot(_ctx.$slots, "default")
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true)
              ]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["disabled", "focusable", "class"])
          ]),
          _: 2 /* DYNAMIC */
        }, [
          (!$props.inline)
            ? {
                name: "trigger",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "trigger", {}, () => [
                    createVNode(_component_b_input, mergeProps({
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
                      onKeyup: _cache[1] || (_cache[1] = withKeys($event => ($options.togglePicker(true)), ["native","enter"])),
                      onChange: _cache[2] || (_cache[2] = $event => ($options.onChange($event.target.value))),
                      onFocus: $options.handleOnFocus
                    }), null, 16 /* FULL_PROPS */, ["value", "placeholder", "size", "icon", "icon-right", "icon-pack", "rounded", "loading", "disabled", "readonly", "onClick", "onFocus"])
                  ])
                ])
              }
            : undefined
        ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["position", "disabled", "inline", "mobile-modal", "trap-focus", "aria-role", "aria-modal", "append-to-body", "onActiveChange"]))
      : (openBlock(), createBlock(_component_b_input, mergeProps({
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

script$J.render = render$J;
script$J.__file = "src/components/datepicker/Datepicker.vue";

var Plugin$x = {
  install: function install(Vue) {
    registerComponent(Vue, script$J);
  }
};
use(Plugin$x);

var _components$7;
var script$I = {
  name: 'BTimepicker',
  components: (_components$7 = {}, _defineProperty(_components$7, script$10.name, script$10), _defineProperty(_components$7, script$Q.name, script$Q), _defineProperty(_components$7, script$N.name, script$N), _defineProperty(_components$7, script$11.name, script$11), _defineProperty(_components$7, script$T.name, script$T), _defineProperty(_components$7, script$S.name, script$S), _components$7),
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

const _hoisted_1$q = { class: "control is-colon" };
const _hoisted_2$e = { class: "control is-colon" };
const _hoisted_3$a = { class: "control is-colon" };
const _hoisted_4$8 = {
  key: 0,
  class: "timepicker-footer"
};

function render$I(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_input = resolveComponent("b-input");
  const _component_b_select = resolveComponent("b-select");
  const _component_b_field = resolveComponent("b-field");
  const _component_b_dropdown_item = resolveComponent("b-dropdown-item");
  const _component_b_dropdown = resolveComponent("b-dropdown");

  return (openBlock(), createBlock("div", {
    class: ["timepicker control", [_ctx.size, {'is-expanded': _ctx.expanded}]]
  }, [
    (!_ctx.isMobile || _ctx.inline)
      ? (openBlock(), createBlock(_component_b_dropdown, {
          key: 0,
          ref: "dropdown",
          position: _ctx.position,
          disabled: _ctx.disabled,
          inline: _ctx.inline,
          "append-to-body": _ctx.appendToBody,
          "append-to-body-copy-parent": "",
          onActiveChange: _ctx.onActiveChange
        }, createSlots({
          default: withCtx(() => [
            createVNode(_component_b_dropdown_item, {
              disabled: _ctx.disabled,
              focusable: _ctx.focusable,
              custom: ""
            }, {
              default: withCtx(() => [
                createVNode(_component_b_field, {
                  grouped: "",
                  position: "is-centered"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_b_select, {
                      modelValue: _ctx.hoursSelected,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (_ctx.hoursSelected = $event)),
                      onChange: _cache[4] || (_cache[4] = $event => (_ctx.onHoursChange($event.target.value))),
                      disabled: _ctx.disabled,
                      placeholder: "00"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.hours, (hour) => {
                          return (openBlock(), createBlock("option", {
                            value: hour.value,
                            key: hour.value,
                            disabled: _ctx.isHourDisabled(hour.value) ? '' : null
                          }, toDisplayString(hour.label), 9 /* TEXT, PROPS */, ["value", "disabled"]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ]),
                      _: 1 /* STABLE */
                    }, 8 /* PROPS */, ["modelValue", "disabled"]),
                    createVNode("span", _hoisted_1$q, toDisplayString(_ctx.hourLiteral), 1 /* TEXT */),
                    createVNode(_component_b_select, {
                      modelValue: _ctx.minutesSelected,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (_ctx.minutesSelected = $event)),
                      onChange: _cache[6] || (_cache[6] = $event => (_ctx.onMinutesChange($event.target.value))),
                      disabled: _ctx.disabled,
                      placeholder: "00"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.minutes, (minute) => {
                          return (openBlock(), createBlock("option", {
                            value: minute.value,
                            key: minute.value,
                            disabled: _ctx.isMinuteDisabled(minute.value) ? '' : null
                          }, toDisplayString(minute.label), 9 /* TEXT, PROPS */, ["value", "disabled"]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ]),
                      _: 1 /* STABLE */
                    }, 8 /* PROPS */, ["modelValue", "disabled"]),
                    (_ctx.enableSeconds)
                      ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("span", _hoisted_2$e, toDisplayString(_ctx.minuteLiteral), 1 /* TEXT */),
                          createVNode(_component_b_select, {
                            modelValue: _ctx.secondsSelected,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (_ctx.secondsSelected = $event)),
                            onChange: _cache[8] || (_cache[8] = $event => (_ctx.onSecondsChange($event.target.value))),
                            disabled: _ctx.disabled,
                            placeholder: "00"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.seconds, (second) => {
                                return (openBlock(), createBlock("option", {
                                  value: second.value,
                                  key: second.value,
                                  disabled: _ctx.isSecondDisabled(second.value) ? '' : null
                                }, toDisplayString(second.label), 9 /* TEXT, PROPS */, ["value", "disabled"]))
                              }), 128 /* KEYED_FRAGMENT */))
                            ]),
                            _: 1 /* STABLE */
                          }, 8 /* PROPS */, ["modelValue", "disabled"]),
                          createVNode("span", _hoisted_3$a, toDisplayString(_ctx.secondLiteral), 1 /* TEXT */)
                        ], 64 /* STABLE_FRAGMENT */))
                      : createCommentVNode("v-if", true),
                    (!_ctx.isHourFormat24)
                      ? (openBlock(), createBlock(_component_b_select, {
                          key: 1,
                          modelValue: _ctx.meridienSelected,
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (_ctx.meridienSelected = $event)),
                          onChange: _cache[10] || (_cache[10] = $event => (_ctx.onMeridienChange($event.target.value))),
                          disabled: _ctx.disabled
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.meridiens, (meridien) => {
                              return (openBlock(), createBlock("option", {
                                value: meridien,
                                key: meridien
                              }, toDisplayString(meridien), 9 /* TEXT, PROPS */, ["value"]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ]),
                          _: 1 /* STABLE */
                        }, 8 /* PROPS */, ["modelValue", "disabled"]))
                      : createCommentVNode("v-if", true)
                  ]),
                  _: 1 /* STABLE */
                }),
                (_ctx.$slots.default !== undefined && _ctx.$slots.default.length)
                  ? (openBlock(), createBlock("footer", _hoisted_4$8, [
                      renderSlot(_ctx.$slots, "default")
                    ]))
                  : createCommentVNode("v-if", true)
              ]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["disabled", "focusable"])
          ]),
          _: 2 /* DYNAMIC */
        }, [
          (!_ctx.inline)
            ? {
                name: "trigger",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "trigger", {}, () => [
                    createVNode(_component_b_input, mergeProps({
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
                      onKeyup: _cache[1] || (_cache[1] = withKeys($event => (_ctx.toggle(true)), ["native","enter"])),
                      onChange: _cache[2] || (_cache[2] = $event => (_ctx.onChange($event.target.value))),
                      onFocus: _ctx.handleOnFocus
                    }), null, 16 /* FULL_PROPS */, ["value", "placeholder", "size", "icon", "icon-pack", "loading", "disabled", "readonly", "rounded", "use-html5-validation", "onFocus"])
                  ])
                ])
              }
            : undefined
        ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["position", "disabled", "inline", "append-to-body", "onActiveChange"]))
      : (openBlock(), createBlock(_component_b_input, mergeProps({
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

script$I.render = render$I;
script$I.__file = "src/components/timepicker/Timepicker.vue";

var _components$6;
var AM = 'AM';
var PM = 'PM';
var script$H = {
  name: 'BDatetimepicker',
  components: (_components$6 = {}, _defineProperty(_components$6, script$J.name, script$J), _defineProperty(_components$6, script$I.name, script$I), _components$6),
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

const _hoisted_1$p = { class: "level is-mobile" };
const _hoisted_2$d = {
  key: 0,
  class: "level-item has-text-centered"
};
const _hoisted_3$9 = { class: "level-item has-text-centered" };
const _hoisted_4$7 = {
  key: 1,
  class: "level-item has-text-centered"
};

function render$H(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_timepicker = resolveComponent("b-timepicker");
  const _component_b_datepicker = resolveComponent("b-datepicker");
  const _component_b_input = resolveComponent("b-input");

  return (!$options.isMobile || $props.inline)
    ? (openBlock(), createBlock(_component_b_datepicker, mergeProps({
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
        default: withCtx(() => [
          createVNode("nav", _hoisted_1$p, [
            (_ctx.$slots.left !== undefined)
              ? (openBlock(), createBlock("div", _hoisted_2$d, [
                  renderSlot(_ctx.$slots, "left")
                ]))
              : createCommentVNode("v-if", true),
            createVNode("div", _hoisted_3$9, [
              createVNode(_component_b_timepicker, mergeProps({ ref: "timepicker" }, $props.timepicker, {
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
              ? (openBlock(), createBlock("div", _hoisted_4$7, [
                  renderSlot(_ctx.$slots, "right")
                ]))
              : createCommentVNode("v-if", true)
          ])
        ]),
        _: 1 /* STABLE */
      }, 16 /* FULL_PROPS */, ["modelValue", "rounded", "open-on-focus", "position", "loading", "inline", "editable", "expanded", "date-formatter", "date-parser", "min-date", "max-date", "icon", "icon-pack", "size", "placeholder", "horizontal-time-picker", "disabled", "mobile-native", "locale", "focusable", "append-to-body", "onFocus", "onBlur"]))
    : (openBlock(), createBlock(_component_b_input, mergeProps({
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

script$H.render = render$H;
script$H.__file = "src/components/datetimepicker/Datetimepicker.vue";

var Plugin$w = {
  install: function install(Vue) {
    registerComponent(Vue, script$H);
  }
};
use(Plugin$w);

var script$G = {
  name: 'BModal',
  directives: {
    trapFocus: directive$1
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
        return config.defaultModalScroll ? config.defaultModalScroll : 'clip';
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

function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_trap_focus = resolveDirective("trap-focus");

  return (openBlock(), createBlock(Transition, {
    name: $props.animation,
    onAfterEnter: $options.afterEnter,
    onBeforeLeave: $options.beforeLeave,
    onAfterLeave: $options.afterLeave
  }, {
    default: withCtx(() => [
      (!$data.destroyed)
        ? withDirectives((openBlock(), createBlock("div", {
            key: 0,
            class: ["modal is-active", [{'is-full-screen': $props.fullScreen}, $props.customClass]],
            tabindex: "-1",
            role: $props.ariaRole,
            "aria-label": $props.ariaLabel,
            "aria-modal": $props.ariaModal
          }, [
            createVNode("div", {
              class: "modal-background",
              onClick: _cache[1] || (_cache[1] = $event => ($options.cancel('outside')))
            }),
            createVNode("div", {
              class: ["animation-content", { 'modal-content': !$props.hasModalCard }],
              style: $options.customStyle
            }, [
              ($props.component)
                ? (openBlock(), createBlock(resolveDynamicComponent($props.component), mergeProps({ key: 0 }, $props.props, toHandlers($props.events), {
                    "can-cancel": $props.canCancel,
                    onClose: $options.close
                  }), null, 16 /* FULL_PROPS */, ["can-cancel", "onClose"]))
                : ($props.content)
                  ? (openBlock(), createBlock("div", {
                      key: 1,
                      innerHTML: $props.content
                    }, null, 8 /* PROPS */, ["innerHTML"]))
                  : renderSlot(_ctx.$slots, "default", {
                      key: 2,
                      canCancel: $props.canCancel,
                      close: $options.close
                    }),
              ($options.showX)
                ? withDirectives((openBlock(), createBlock("button", {
                    key: 3,
                    type: "button",
                    class: "modal-close is-large",
                    onClick: _cache[2] || (_cache[2] = $event => ($options.cancel('x')))
                  }, null, 512 /* NEED_PATCH */)), [
                    [vShow, !$data.animating]
                  ])
                : createCommentVNode("v-if", true)
            ], 6 /* CLASS, STYLE */)
          ], 10 /* CLASS, PROPS */, ["role", "aria-label", "aria-modal"])), [
            [vShow, $data.isActive],
            [_directive_trap_focus, $props.trapFocus]
          ])
        : createCommentVNode("v-if", true)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["name", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]))
}

script$G.render = render$G;
script$G.__file = "src/components/modal/Modal.vue";

var script$F = {
  name: 'BDialog',
  components: _defineProperty({}, script$11.name, script$11),
  directives: {
    trapFocus: directive$1
  },
  extends: script$G,
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
        return config.defaultDialogConfirmText ? config.defaultDialogConfirmText : 'OK';
      }
    },
    cancelText: {
      type: String,
      default: function _default() {
        return config.defaultDialogCancelText ? config.defaultDialogCancelText : 'Cancel';
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

const _hoisted_1$o = { class: "modal-card animation-content" };
const _hoisted_2$c = {
  key: 0,
  class: "modal-card-head"
};
const _hoisted_3$8 = { class: "modal-card-title" };
const _hoisted_4$6 = { class: "media" };
const _hoisted_5$5 = {
  key: 0,
  class: "media-left"
};
const _hoisted_6$4 = { class: "media-content" };
const _hoisted_7$3 = {
  key: 0,
  class: "field"
};
const _hoisted_8$2 = { class: "control" };
const _hoisted_9$1 = { class: "help is-danger" };
const _hoisted_10$1 = { class: "modal-card-foot" };

function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  const _directive_trap_focus = resolveDirective("trap-focus");

  return (openBlock(), createBlock(Transition, { name: _ctx.animation }, {
    default: withCtx(() => [
      ($data.isActive)
        ? withDirectives((openBlock(), createBlock("div", {
            key: 0,
            class: ["dialog modal is-active", $options.dialogClass],
            role: $props.ariaRole,
            "aria-modal": $props.ariaModal
          }, [
            createVNode("div", {
              class: "modal-background",
              onClick: _cache[1] || (_cache[1] = $event => (_ctx.cancel('outside')))
            }),
            createVNode("div", _hoisted_1$o, [
              ($props.title)
                ? (openBlock(), createBlock("header", _hoisted_2$c, [
                    createVNode("p", _hoisted_3$8, toDisplayString($props.title), 1 /* TEXT */)
                  ]))
                : createCommentVNode("v-if", true),
              createVNode("section", {
                class: ["modal-card-body", { 'is-titleless': !$props.title, 'is-flex': $props.hasIcon }]
              }, [
                createVNode("div", _hoisted_4$6, [
                  ($props.hasIcon && ($props.icon || $options.iconByType))
                    ? (openBlock(), createBlock("div", _hoisted_5$5, [
                        createVNode(_component_b_icon, {
                          icon: $props.icon ? $props.icon : $options.iconByType,
                          pack: $props.iconPack,
                          type: $props.type,
                          both: !$props.icon,
                          size: "is-large"
                        }, null, 8 /* PROPS */, ["icon", "pack", "type", "both"])
                      ]))
                    : createCommentVNode("v-if", true),
                  createVNode("div", _hoisted_6$4, [
                    createVNode("p", null, [
                      (_ctx.$slots.default)
                        ? renderSlot(_ctx.$slots, "default", { key: 0 })
                        : (openBlock(), createBlock("div", {
                            key: 1,
                            innerHTML: $props.message
                          }, null, 8 /* PROPS */, ["innerHTML"]))
                    ]),
                    ($props.hasInput)
                      ? (openBlock(), createBlock("div", _hoisted_7$3, [
                          createVNode("div", _hoisted_8$2, [
                            withDirectives(createVNode("input", mergeProps({
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($data.prompt = $event)),
                              class: ["input", { 'is-danger': $data.validationMessage }],
                              ref: "input"
                            }, $props.inputAttrs, {
                              onKeyup: _cache[3] || (_cache[3] = withKeys((...args) => ($options.confirm && $options.confirm(...args)), ["enter"]))
                            }), null, 16 /* FULL_PROPS */), [
                              [vModelDynamic, $data.prompt]
                            ])
                          ]),
                          createVNode("p", _hoisted_9$1, toDisplayString($data.validationMessage), 1 /* TEXT */)
                        ]))
                      : createCommentVNode("v-if", true)
                  ])
                ])
              ], 2 /* CLASS */),
              createVNode("footer", _hoisted_10$1, [
                ($options.showCancel)
                  ? (openBlock(), createBlock("button", {
                      key: 0,
                      class: "button",
                      ref: "cancelButton",
                      onClick: _cache[4] || (_cache[4] = $event => (_ctx.cancel('button')))
                    }, toDisplayString($props.cancelText), 513 /* TEXT, NEED_PATCH */))
                  : createCommentVNode("v-if", true),
                createVNode("button", {
                  class: ["button", $props.type],
                  ref: "confirmButton",
                  onClick: _cache[5] || (_cache[5] = (...args) => ($options.confirm && $options.confirm(...args)))
                }, toDisplayString($props.confirmText), 3 /* TEXT, CLASS */)
              ])
            ])
          ], 10 /* CLASS, PROPS */, ["role", "aria-modal"])), [
            [_directive_trap_focus, $props.trapFocus]
          ])
        : createCommentVNode("v-if", true)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["name"]))
}

script$F.render = render$F;
script$F.__file = "src/components/dialog/Dialog.vue";

var localVueInstance$5;

function open(propsData) {
  var slot;

  if (Array.isArray(propsData.message)) {
    slot = propsData.message;
    delete propsData.message;
  }

  var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance$5 || VueInstance;
  var DialogComponent = vm.extend(script$F);
  var component = new DialogComponent({
    el: document.createElement('div'),
    propsData: propsData
  });

  if (slot) {
    component.$slots.default = slot;
    component.$forceUpdate();
  }

  if (!config.defaultProgrammaticPromise) {
    return component;
  } else {
    return new Promise(function (resolve) {
      component.$on('confirm', function (event) {
        return resolve({
          result: event || true,
          dialog: component
        });
      });
      component.$on('cancel', function () {
        return resolve({
          result: false,
          dialog: component
        });
      });
    });
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
var Plugin$v = {
  install: function install(Vue) {
    localVueInstance$5 = Vue;
    registerComponent(Vue, script$F);
    registerComponentProgrammatic(Vue, 'dialog', DialogProgrammatic);
  }
};
use(Plugin$v);

var Plugin$u = {
  install: function install(Vue) {
    registerComponent(Vue, script$T);
    registerComponent(Vue, script$S);
  }
};
use(Plugin$u);

var Plugin$t = {
  install: function install(Vue) {
    registerComponent(Vue, script$Q);
  }
};
use(Plugin$t);

var Plugin$s = {
  install: function install(Vue) {
    registerComponent(Vue, script$11);
  }
};
use(Plugin$s);

var script$E = {
  name: 'BImage',
  props: {
    src: String,
    alt: String,
    srcFallback: String,
    webpFallback: {
      type: String,
      default: function _default() {
        return config.defaultImageWebpFallback;
      }
    },
    lazy: {
      type: Boolean,
      default: function _default() {
        return config.defaultImageLazy;
      }
    },
    responsive: {
      type: Boolean,
      default: function _default() {
        return config.defaultImageResponsive;
      }
    },
    ratio: {
      type: String,
      default: function _default() {
        return config.defaultImageRatio;
      }
    },
    placeholder: String,
    srcset: String,
    srcsetSizes: Array,
    srcsetFormatter: {
      type: Function,
      default: function _default(src, size, vm) {
        if (typeof config.defaultImageSrcsetFormatter === 'function') {
          return config.defaultImageSrcsetFormatter(src, size);
        } else {
          return vm.formatSrcset(src, size);
        }
      }
    },
    rounded: {
      type: Boolean,
      default: false
    },
    captionFirst: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      clientWidth: 0,
      webpSupportVerified: false,
      webpSupported: false,
      useNativeLazy: false,
      observer: null,
      inViewPort: false,
      bulmaKnownRatio: ['square', '1by1', '5by4', '4by3', '3by2', '5by3', '16by9', 'b2y1', '3by1', '4by5', '3by4', '2by3', '3by5', '9by16', '1by2', '1by3'],
      loaded: false,
      failed: false
    };
  },
  computed: {
    ratioPattern: function ratioPattern() {
      return new RegExp(/([0-9]+)by([0-9]+)/);
    },
    hasRatio: function hasRatio() {
      return this.ratio && this.ratioPattern.test(this.ratio);
    },
    figureClasses: function figureClasses() {
      var classes = {
        image: this.responsive
      };

      if (this.hasRatio && this.bulmaKnownRatio.indexOf(this.ratio) >= 0) {
        classes["is-".concat(this.ratio)] = true;
      }

      return classes;
    },
    figureStyles: function figureStyles() {
      if (this.hasRatio && this.bulmaKnownRatio.indexOf(this.ratio) < 0) {
        var ratioValues = this.ratioPattern.exec(this.ratio);
        return {
          paddingTop: "".concat(ratioValues[2] / ratioValues[1] * 100, "%")
        };
      }
    },
    imgClasses: function imgClasses() {
      return {
        'is-rounded': this.rounded,
        'has-ratio': this.hasRatio
      };
    },
    srcExt: function srcExt() {
      return this.getExt(this.src);
    },
    isWepb: function isWepb() {
      return this.srcExt === 'webp';
    },
    computedSrc: function computedSrc() {
      var src = this.src;

      if (this.failed && this.srcFallback) {
        src = this.srcFallback;
      }

      if (!this.webpSupported && this.isWepb && this.webpFallback) {
        if (this.webpFallback.startsWith('.')) {
          return src.replace(/\.webp/gi, "".concat(this.webpFallback));
        }

        return this.webpFallback;
      }

      return src;
    },
    computedWidth: function computedWidth() {
      if (this.responsive && this.clientWidth > 0) {
        return this.clientWidth;
      }
    },
    computedNativeLazy: function computedNativeLazy() {
      if (this.lazy && this.useNativeLazy) {
        return 'lazy';
      }
    },
    isDisplayed: function isDisplayed() {
      return (this.webpSupportVerified || !this.isWepb) && (!this.lazy || this.useNativeLazy || this.inViewPort);
    },
    placeholderExt: function placeholderExt() {
      if (this.placeholder) {
        return this.getExt(this.placeholder);
      }
    },
    isPlaceholderWepb: function isPlaceholderWepb() {
      if (this.placeholder) {
        return this.placeholderExt === 'webp';
      }
    },
    computedPlaceholder: function computedPlaceholder() {
      if (!this.webpSupported && this.isPlaceholderWepb && this.webpFallback && this.webpFallback.startsWith('.')) {
        return this.placeholder.replace(/\.webp/gi, "".concat(this.webpFallback));
      }

      return this.placeholder;
    },
    isPlaceholderDisplayed: function isPlaceholderDisplayed() {
      return !this.loaded && (getSlot$1(this.$slots, 'placeholder') || this.placeholder && (this.webpSupportVerified || !this.isPlaceholderWepb));
    },
    computedSrcset: function computedSrcset() {
      var _this = this;

      if (this.srcset) {
        if (!this.webpSupported && this.isWepb && this.webpFallback && this.webpFallback.startsWith('.')) {
          return this.srcset.replace(/\.webp/gi, "".concat(this.webpFallback));
        }

        return this.srcset;
      }

      if (this.srcsetSizes && Array.isArray(this.srcsetSizes) && this.srcsetSizes.length > 0) {
        return this.srcsetSizes.map(function (size) {
          return "".concat(_this.srcsetFormatter(_this.computedSrc, size, _this), " ").concat(size, "w");
        }).join(',');
      }
    },
    computedSizes: function computedSizes() {
      if (this.computedSrcset && this.computedWidth) {
        return "".concat(this.computedWidth, "px");
      }
    },
    isCaptionFirst: function isCaptionFirst() {
      return getSlot$1(this.$slots, 'caption') && this.captionFirst;
    },
    isCaptionLast: function isCaptionLast() {
      return getSlot$1(this.$slots, 'caption') && !this.captionFirst;
    }
  },
  methods: {
    getExt: function getExt(filename) {
      var clean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (filename) {
        var noParam = clean ? filename.split('?')[0] : filename;
        return noParam.split('.').pop();
      }

      return '';
    },
    setWidth: function setWidth() {
      this.clientWidth = this.$el.clientWidth;
    },
    formatSrcset: function formatSrcset(src, size) {
      var ext = this.getExt(src, false);
      var name = src.split('.').slice(0, -1).join('.');
      return "".concat(name, "-").concat(size, ".").concat(ext);
    },
    onLoad: function onLoad(event) {
      this.loaded = true;
      this.emit('load', event);
    },
    onError: function onError(event) {
      this.emit('error', event);

      if (!this.failed) {
        this.failed = true;
      }
    },
    emit: function emit(eventName, event) {
      var target = event.target;
      this.$emit(eventName, event, target.currentSrc || target.src || this.computedSrc);
    }
  },
  created: function created() {
    var _this2 = this;

    if (this.isWepb) {
      isWebpSupported().then(function (supported) {
        _this2.webpSupportVerified = true;
        _this2.webpSupported = supported;
      });
    }

    if (this.lazy) {
      // We use native lazy loading if supported
      // We try to use Intersection Observer if native lazy loading is not supported
      // We use the lazy attribute anyway if we cannot detect support (SSR for example).
      var nativeLazySupported = typeof window !== 'undefined' && 'HTMLImageElement' in window && 'loading' in HTMLImageElement.prototype;
      var intersectionObserverSupported = typeof window !== 'undefined' && 'IntersectionObserver' in window;

      if (!nativeLazySupported && intersectionObserverSupported) {
        this.observer = new IntersectionObserver(function (events) {
          var _events$ = events[0],
              target = _events$.target,
              isIntersecting = _events$.isIntersecting;

          if (isIntersecting && !_this2.inViewPort) {
            _this2.inViewPort = true;

            _this2.observer.unobserve(target);
          }
        });
      } else {
        this.useNativeLazy = true;
      }
    }
  },
  mounted: function mounted() {
    if (this.lazy && this.observer) {
      this.observer.observe(this.$el);
    }

    this.setWidth();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.setWidth);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }

    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.setWidth);
    }
  }
};

const _hoisted_1$n = { key: 0 };
const _hoisted_2$b = { key: 1 };

function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("figure", {
    class: ["b-image-wrapper", $options.figureClasses],
    style: $options.figureStyles
  }, [
    ($options.isCaptionFirst)
      ? (openBlock(), createBlock("figcaption", _hoisted_1$n, [
          renderSlot(_ctx.$slots, "caption")
        ]))
      : createCommentVNode("v-if", true),
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        ($options.isDisplayed)
          ? (openBlock(), createBlock("img", {
              key: 0,
              srcset: $options.computedSrcset,
              src: $options.computedSrc,
              alt: $props.alt,
              class: $options.imgClasses,
              width: $options.computedWidth,
              sizes: $options.computedSizes,
              loading: $options.computedNativeLazy,
              onLoad: _cache[1] || (_cache[1] = (...args) => ($options.onLoad && $options.onLoad(...args))),
              onError: _cache[2] || (_cache[2] = (...args) => ($options.onError && $options.onError(...args)))
            }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["srcset", "src", "alt", "width", "sizes", "loading"]))
          : createCommentVNode("v-if", true)
      ]),
      _: 1 /* STABLE */
    }),
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        ($options.isPlaceholderDisplayed)
          ? renderSlot(_ctx.$slots, "placeholder", { key: 0 }, () => [
              createVNode("img", {
                src: $options.computedPlaceholder,
                alt: $props.alt,
                class: [$options.imgClasses, "placeholder"]
              }, null, 10 /* CLASS, PROPS */, ["src", "alt"])
            ])
          : createCommentVNode("v-if", true)
      ]),
      _: 1 /* STABLE */
    }),
    ($options.isCaptionLast)
      ? (openBlock(), createBlock("figcaption", _hoisted_2$b, [
          renderSlot(_ctx.$slots, "caption")
        ]))
      : createCommentVNode("v-if", true)
  ], 6 /* CLASS, STYLE */))
}

script$E.render = render$E;
script$E.__file = "src/components/image/Image.vue";

var Plugin$r = {
  install: function install(Vue) {
    registerComponent(Vue, script$E);
  }
};
use(Plugin$r);

var Plugin$q = {
  install: function install(Vue) {
    registerComponent(Vue, script$10);
  }
};
use(Plugin$q);

// Polyfills for SSR
var isSSR = typeof window === 'undefined';
var HTMLElement = isSSR ? Object : window.HTMLElement;
var File = isSSR ? Object : window.File;

var script$D = {
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

const _hoisted_1$m = /*#__PURE__*/createVNode("div", { class: "loading-icon" }, null, -1 /* HOISTED */);

function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Transition, { name: $props.animation }, {
    default: withCtx(() => [
      ($data.isActive)
        ? (openBlock(), createBlock("div", {
            key: 0,
            class: ["loading-overlay is-active", { 'is-full-page': $data.displayInFullPage }]
          }, [
            createVNode("div", {
              class: "loading-background",
              onClick: _cache[1] || (_cache[1] = (...args) => ($options.cancel && $options.cancel(...args)))
            }),
            renderSlot(_ctx.$slots, "default", {}, () => [
              _hoisted_1$m
            ])
          ], 2 /* CLASS */))
        : createCommentVNode("v-if", true)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["name"]))
}

script$D.render = render$D;
script$D.__file = "src/components/loading/Loading.vue";

var localVueInstance$4;
var LoadingProgrammatic = {
  open: function open(params) {
    var defaultParam = {
      programmatic: true
    };
    var propsData = merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance$4 || VueInstance;
    var LoadingComponent = vm.extend(script$D);
    return new LoadingComponent({
      el: document.createElement('div'),
      propsData: propsData
    });
  }
};
var Plugin$p = {
  install: function install(Vue) {
    localVueInstance$4 = Vue;
    registerComponent(Vue, script$D);
    registerComponentProgrammatic(Vue, 'loading', LoadingProgrammatic);
  }
};
use(Plugin$p);

var script$C = {
  name: 'BMenu',
  props: {
    accordion: {
      type: Boolean,
      default: true
    },
    activable: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      _isMenu: true // Used by MenuItem

    };
  }
};

const _hoisted_1$l = { class: "menu" };

function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$l, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$C.render = render$C;
script$C.__file = "src/components/menu/Menu.vue";

var script$B = {
  name: 'BMenuList',
  functional: true,
  props: {
    label: String,
    icon: String,
    iconPack: String,
    ariaRole: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'is-small'
    }
  },
  render: function render(context) {
    var vlabel = null;
    var slots = context.slots();

    if (context.props.label || slots.label) {
      vlabel = h('p', {
        attrs: {
          'class': 'menu-label'
        }
      }, context.props.label ? context.props.icon ? [h('b-icon', {
        props: {
          'icon': context.props.icon,
          'pack': context.props.iconPack,
          'size': context.props.size
        }
      }), h('span', {}, context.props.label)] : context.props.label : slots.label);
    }

    var vnode = h('ul', {
      attrs: {
        'class': 'menu-list',
        'role': context.props.ariaRole === 'menu' ? context.props.ariaRole : null
      }
    }, slots.default);
    return vlabel ? [vlabel, vnode] : vnode;
  }
};

const render$B = () => {};


script$B.render = render$B;
script$B.__file = "src/components/menu/MenuList.vue";

var script$A = {
  name: 'BMenuItem',
  components: _defineProperty({}, script$11.name, script$11),
  inheritAttrs: false,
  // deprecated, to replace with default 'value' in the next breaking change
  model: {
    prop: 'active',
    event: 'update:active'
  },
  props: {
    label: String,
    active: Boolean,
    expanded: Boolean,
    disabled: Boolean,
    iconPack: String,
    icon: String,
    animation: {
      type: String,
      default: 'slide'
    },
    tag: {
      type: String,
      default: 'a',
      validator: function validator(value) {
        return config.defaultLinkTags.indexOf(value) >= 0;
      }
    },
    ariaRole: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'is-small'
    }
  },
  data: function data() {
    return {
      newActive: this.active,
      newExpanded: this.expanded
    };
  },
  computed: {
    ariaRoleMenu: function ariaRoleMenu() {
      return this.ariaRole === 'menuitem' ? this.ariaRole : null;
    }
  },
  watch: {
    active: function active(value) {
      this.newActive = value;
    },
    expanded: function expanded(value) {
      this.newExpanded = value;
    }
  },
  methods: {
    onClick: function onClick(event) {
      if (this.disabled) return;
      var menu = this.getMenu();
      this.reset(this.$parent, menu);
      this.newExpanded = !this.newExpanded;
      this.$emit('update:expanded', this.newExpanded);

      if (menu && menu.activable) {
        this.newActive = true;
        this.$emit('update:active', this.newActive);
      }
    },
    reset: function reset(parent, menu) {
      var _this = this;

      var items = parent.$children.filter(function (c) {
        return c.name === _this.name;
      });
      items.forEach(function (item) {
        if (item !== _this) {
          _this.reset(item, menu);

          if (!parent.$data._isMenu || parent.$data._isMenu && parent.accordion) {
            item.newExpanded = false;
            item.$emit('update:expanded', item.newActive);
          }

          if (menu && menu.activable) {
            item.newActive = false;
            item.$emit('update:active', item.newActive);
          }
        }
      });
    },
    getMenu: function getMenu() {
      var parent = this.$parent;

      while (parent && !parent.$data._isMenu) {
        parent = parent.$parent;
      }

      return parent;
    }
  }
};

const _hoisted_1$k = { key: 1 };

function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock("li", { role: $options.ariaRoleMenu }, [
    (openBlock(), createBlock(resolveDynamicComponent($props.tag), mergeProps(_ctx.$attrs, {
      class: {
                'is-active': $data.newActive,
                'is-expanded': $data.newExpanded,
                'is-disabled': $props.disabled,
                'icon-text': $props.icon,
            },
      onClick: _cache[1] || (_cache[1] = $event => ($options.onClick($event)))
    }, toHandlers(_ctx.$listeners)), {
      default: withCtx(() => [
        ($props.icon)
          ? (openBlock(), createBlock(_component_b_icon, {
              key: 0,
              icon: $props.icon,
              pack: $props.iconPack,
              size: $props.size
            }, null, 8 /* PROPS */, ["icon", "pack", "size"]))
          : createCommentVNode("v-if", true),
        ($props.label)
          ? (openBlock(), createBlock("span", _hoisted_1$k, toDisplayString($props.label), 1 /* TEXT */))
          : renderSlot(_ctx.$slots, "label", {
              key: 2,
              expanded: $data.newExpanded,
              active: $data.newActive
            })
      ]),
      _: 1 /* STABLE */
    }, 16 /* FULL_PROPS */, ["class"])),
    createCommentVNode(" sub menu items "),
    (_ctx.$slots.default)
      ? (openBlock(), createBlock(Transition, {
          key: 0,
          name: $props.animation
        }, {
          default: withCtx(() => [
            withDirectives(createVNode("ul", null, [
              renderSlot(_ctx.$slots, "default")
            ], 512 /* NEED_PATCH */), [
              [vShow, $data.newExpanded]
            ])
          ]),
          _: 3 /* FORWARDED */
        }, 8 /* PROPS */, ["name"]))
      : createCommentVNode("v-if", true)
  ], 8 /* PROPS */, ["role"]))
}

script$A.render = render$A;
script$A.__file = "src/components/menu/MenuItem.vue";

var Plugin$o = {
  install: function install(Vue) {
    registerComponent(Vue, script$C);
    registerComponent(Vue, script$B);
    registerComponent(Vue, script$A);
  }
};
use(Plugin$o);

var MessageMixin = {
  components: _defineProperty({}, script$11.name, script$11),
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

var script$z = {
  name: 'BMessage',
  mixins: [MessageMixin],
  props: {
    ariaCloseLabel: String
  },
  data: function data() {
    return {
      newIconSize: this.iconSize || this.size || 'is-large'
    };
  }
};

const _hoisted_1$j = {
  key: 0,
  class: "message-header"
};
const _hoisted_2$a = { key: 0 };
const _hoisted_3$7 = { key: 1 };
const _hoisted_4$5 = {
  key: 1,
  class: "message-body"
};
const _hoisted_5$4 = { class: "media" };
const _hoisted_6$3 = {
  key: 0,
  class: "media-left"
};
const _hoisted_7$2 = { class: "media-content" };

function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock(Transition, { name: "fade" }, {
    default: withCtx(() => [
      (_ctx.isActive)
        ? (openBlock(), createBlock("article", {
            key: 0,
            class: ["message", [_ctx.type, _ctx.size]]
          }, [
            (_ctx.$slots.header || _ctx.title)
              ? (openBlock(), createBlock("header", _hoisted_1$j, [
                  (_ctx.$slots.header)
                    ? (openBlock(), createBlock("div", _hoisted_2$a, [
                        renderSlot(_ctx.$slots, "header")
                      ]))
                    : (_ctx.title)
                      ? (openBlock(), createBlock("p", _hoisted_3$7, toDisplayString(_ctx.title), 1 /* TEXT */))
                      : createCommentVNode("v-if", true),
                  (_ctx.closable)
                    ? (openBlock(), createBlock("button", {
                        key: 2,
                        type: "button",
                        class: "delete",
                        onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.close && _ctx.close(...args))),
                        "aria-label": $props.ariaCloseLabel
                      }, null, 8 /* PROPS */, ["aria-label"]))
                    : createCommentVNode("v-if", true)
                ]))
              : createCommentVNode("v-if", true),
            (_ctx.$slots.default)
              ? (openBlock(), createBlock("section", _hoisted_4$5, [
                  createVNode("div", _hoisted_5$4, [
                    (_ctx.computedIcon && _ctx.hasIcon)
                      ? (openBlock(), createBlock("div", _hoisted_6$3, [
                          createVNode(_component_b_icon, {
                            icon: _ctx.computedIcon,
                            pack: _ctx.iconPack,
                            class: _ctx.type,
                            both: "",
                            size: $data.newIconSize
                          }, null, 8 /* PROPS */, ["icon", "pack", "class", "size"])
                        ]))
                      : createCommentVNode("v-if", true),
                    createVNode("div", _hoisted_7$2, [
                      renderSlot(_ctx.$slots, "default")
                    ])
                  ])
                ]))
              : createCommentVNode("v-if", true)
          ], 2 /* CLASS */))
        : createCommentVNode("v-if", true)
    ]),
    _: 1 /* STABLE */
  }))
}

script$z.render = render$z;
script$z.__file = "src/components/message/Message.vue";

var Plugin$n = {
  install: function install(Vue) {
    registerComponent(Vue, script$z);
  }
};
use(Plugin$n);

var localVueInstance$3;
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
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance$3 || VueInstance;
    var ModalComponent = (vm.extend || vm.component)(script$G);
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
var Plugin$m = {
  install: function install(Vue) {
    localVueInstance$3 = Vue;
    registerComponent(Vue, script$G);
    registerComponentProgrammatic(Vue, 'modal', ModalProgrammatic);
  }
};
use(Plugin$m);

var script$y = {
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

const _hoisted_1$i = {
  key: 1,
  class: "media"
};
const _hoisted_2$9 = {
  key: 0,
  class: "media-left"
};
const _hoisted_3$6 = { class: "media-content" };

function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock(Transition, { name: $props.animation }, {
    default: withCtx(() => [
      withDirectives(createVNode("article", {
        class: ["notification", [_ctx.type, $props.position]]
      }, [
        (_ctx.closable)
          ? (openBlock(), createBlock("button", {
              key: 0,
              class: "delete",
              type: "button",
              onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.close && _ctx.close(...args))),
              "aria-label": $props.ariaCloseLabel
            }, null, 8 /* PROPS */, ["aria-label"]))
          : createCommentVNode("v-if", true),
        (_ctx.$slots.default || _ctx.message)
          ? (openBlock(), createBlock("div", _hoisted_1$i, [
              (_ctx.computedIcon && _ctx.hasIcon)
                ? (openBlock(), createBlock("div", _hoisted_2$9, [
                    createVNode(_component_b_icon, {
                      icon: _ctx.computedIcon,
                      pack: _ctx.iconPack,
                      both: "",
                      size: "is-large",
                      "aria-hidden": ""
                    }, null, 8 /* PROPS */, ["icon", "pack"])
                  ]))
                : createCommentVNode("v-if", true),
              createVNode("div", _hoisted_3$6, [
                (_ctx.$slots.default)
                  ? renderSlot(_ctx.$slots, "default", { key: 0 })
                  : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "text",
                      innerHTML: _ctx.message
                    }, null, 8 /* PROPS */, ["innerHTML"]))
              ])
            ]))
          : createCommentVNode("v-if", true)
      ], 2 /* CLASS */), [
        [vShow, _ctx.isActive]
      ])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["name"]))
}

script$y.render = render$y;
script$y.__file = "src/components/notification/Notification.vue";

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

var script$x = {
  name: 'BNotificationNotice',
  mixins: [NoticeMixin],
  data: function data() {
    return {
      newDuration: this.duration || config.defaultNotificationDuration
    };
  }
};

function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_notification = resolveComponent("b-notification");

  return (openBlock(), createBlock(_component_b_notification, mergeProps(_ctx.$options.propsData, { onClose: _ctx.close }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 16 /* FULL_PROPS */, ["onClose"]))
}

script$x.render = render$x;
script$x.__file = "src/components/notification/NotificationNotice.vue";

var localVueInstance$2;
var NotificationProgrammatic = {
  open: function open(params) {
    var parent;

    if (typeof params === 'string') {
      params = {
        message: params
      };
    }

    var defaultParam = {
      position: config.defaultNotificationPosition || 'is-top-right'
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
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance$2 || VueInstance;
    var NotificationNoticeComponent = vm.extend(script$x);
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
var Plugin$l = {
  install: function install(Vue) {
    localVueInstance$2 = Vue;
    registerComponent(Vue, script$y);
    registerComponentProgrammatic(Vue, 'notification', NotificationProgrammatic);
  }
};
use(Plugin$l);

var script$w = {
  name: 'NavbarBurger',
  props: {
    isOpened: {
      type: Boolean,
      default: false
    }
  }
};

const _hoisted_1$h = /*#__PURE__*/createVNode("span", { "aria-hidden": "true" }, null, -1 /* HOISTED */);
const _hoisted_2$8 = /*#__PURE__*/createVNode("span", { "aria-hidden": "true" }, null, -1 /* HOISTED */);
const _hoisted_3$5 = /*#__PURE__*/createVNode("span", { "aria-hidden": "true" }, null, -1 /* HOISTED */);

function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("a", mergeProps({
    role: "button",
    class: ["navbar-burger burger", { 'is-active': $props.isOpened }],
    "aria-label": "menu",
    "aria-expanded": $props.isOpened
  }, toHandlers(_ctx.$listeners)), [
    _hoisted_1$h,
    _hoisted_2$8,
    _hoisted_3$5
  ], 16 /* FULL_PROPS */, ["aria-expanded"]))
}

script$w.render = render$w;
script$w.__file = "src/components/navbar/NavbarBurger.vue";

var isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.msMaxTouchPoints > 0);
var events = isTouch ? ['touchstart', 'click'] : ['click'];
var instances = [];

function processArgs(bindingValue) {
  var isFunction = typeof bindingValue === 'function';

  if (!isFunction && _typeof(bindingValue) !== 'object') {
    throw new Error("v-click-outside: Binding value should be a function or an object, typeof ".concat(bindingValue, " given"));
  }

  return {
    handler: isFunction ? bindingValue : bindingValue.handler,
    middleware: bindingValue.middleware || function (isClickOutside) {
      return isClickOutside;
    },
    events: bindingValue.events || events
  };
}

function onEvent(_ref) {
  var el = _ref.el,
      event = _ref.event,
      handler = _ref.handler,
      middleware = _ref.middleware;
  var isClickOutside = event.target !== el && !el.contains(event.target);

  if (!isClickOutside) {
    return;
  }

  if (middleware(event, el)) {
    handler(event, el);
  }
}

function bind(el, _ref2) {
  var value = _ref2.value;

  var _processArgs = processArgs(value),
      _handler = _processArgs.handler,
      middleware = _processArgs.middleware,
      events = _processArgs.events;

  var instance = {
    el: el,
    eventHandlers: events.map(function (eventName) {
      return {
        event: eventName,
        handler: function handler(event) {
          return onEvent({
            event: event,
            el: el,
            handler: _handler,
            middleware: middleware
          });
        }
      };
    })
  };
  instance.eventHandlers.forEach(function (_ref3) {
    var event = _ref3.event,
        handler = _ref3.handler;
    return document.addEventListener(event, handler);
  });
  instances.push(instance);
}

function update(el, _ref4) {
  var value = _ref4.value;

  var _processArgs2 = processArgs(value),
      _handler2 = _processArgs2.handler,
      middleware = _processArgs2.middleware,
      events = _processArgs2.events; // `filter` instead of `find` for compat with IE


  var instance = instances.filter(function (instance) {
    return instance.el === el;
  })[0];
  instance.eventHandlers.forEach(function (_ref5) {
    var event = _ref5.event,
        handler = _ref5.handler;
    return document.removeEventListener(event, handler);
  });
  instance.eventHandlers = events.map(function (eventName) {
    return {
      event: eventName,
      handler: function handler(event) {
        return onEvent({
          event: event,
          el: el,
          handler: _handler2,
          middleware: middleware
        });
      }
    };
  });
  instance.eventHandlers.forEach(function (_ref6) {
    var event = _ref6.event,
        handler = _ref6.handler;
    return document.addEventListener(event, handler);
  });
}

function unbind(el) {
  // `filter` instead of `find` for compat with IE
  var instance = instances.filter(function (instance) {
    return instance.el === el;
  })[0];
  instance.eventHandlers.forEach(function (_ref7) {
    var event = _ref7.event,
        handler = _ref7.handler;
    return document.removeEventListener(event, handler);
  });
}

var directive = {
  bind: bind,
  update: update,
  unbind: unbind,
  instances: instances
};

var FIXED_TOP_CLASS = 'is-fixed-top';
var BODY_FIXED_TOP_CLASS = 'has-navbar-fixed-top';
var BODY_SPACED_FIXED_TOP_CLASS = 'has-spaced-navbar-fixed-top';
var FIXED_BOTTOM_CLASS = 'is-fixed-bottom';
var BODY_FIXED_BOTTOM_CLASS = 'has-navbar-fixed-bottom';
var BODY_SPACED_FIXED_BOTTOM_CLASS = 'has-spaced-navbar-fixed-bottom';
var BODY_CENTERED_CLASS = 'has-navbar-centered';

var isFilled = function isFilled(str) {
  return !!str;
};

var script$v = {
  name: 'BNavbar',
  components: {
    NavbarBurger: script$w
  },
  directives: {
    clickOutside: directive
  },
  // deprecated, to replace with default 'value' in the next breaking change
  model: {
    prop: 'active',
    event: 'update:active'
  },
  props: {
    type: [String, Object],
    transparent: {
      type: Boolean,
      default: false
    },
    fixedTop: {
      type: Boolean,
      default: false
    },
    fixedBottom: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    },
    wrapperClass: {
      type: String
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    mobileBurger: {
      type: Boolean,
      default: true
    },
    spaced: Boolean,
    shadow: Boolean
  },
  data: function data() {
    return {
      internalIsActive: this.active,
      _isNavBar: true // Used internally by NavbarItem

    };
  },
  computed: {
    isOpened: function isOpened() {
      return this.internalIsActive;
    },
    computedClasses: function computedClasses() {
      var _ref;

      return [this.type, (_ref = {}, _defineProperty(_ref, FIXED_TOP_CLASS, this.fixedTop), _defineProperty(_ref, FIXED_BOTTOM_CLASS, this.fixedBottom), _defineProperty(_ref, BODY_CENTERED_CLASS, this.centered), _defineProperty(_ref, 'is-spaced', this.spaced), _defineProperty(_ref, 'has-shadow', this.shadow), _defineProperty(_ref, 'is-transparent', this.transparent), _ref)];
    }
  },
  watch: {
    active: {
      handler: function handler(active) {
        this.internalIsActive = active;
      },
      immediate: true
    },
    fixedTop: function fixedTop(isSet) {
      // toggle body class only on update to handle multiple navbar
      this.setBodyFixedTopClass(isSet);
    },
    bottomTop: function bottomTop(isSet) {
      // toggle body class only on update to handle multiple navbar
      this.setBodyFixedBottomClass(isSet);
    }
  },
  methods: {
    toggleActive: function toggleActive() {
      this.internalIsActive = !this.internalIsActive;
      this.emitUpdateParentEvent();
    },
    closeMenu: function closeMenu() {
      if (this.closeOnClick && this.internalIsActive) {
        this.internalIsActive = false;
        this.emitUpdateParentEvent();
      }
    },
    emitUpdateParentEvent: function emitUpdateParentEvent() {
      this.$emit('update:active', this.internalIsActive);
    },
    setBodyClass: function setBodyClass(className) {
      if (typeof window !== 'undefined') {
        document.body.classList.add(className);
      }
    },
    removeBodyClass: function removeBodyClass(className) {
      if (typeof window !== 'undefined') {
        document.body.classList.remove(className);
      }
    },
    checkIfFixedPropertiesAreColliding: function checkIfFixedPropertiesAreColliding() {
      var areColliding = this.fixedTop && this.fixedBottom;

      if (areColliding) {
        throw new Error('You should choose if the BNavbar is fixed bottom or fixed top, but not both');
      }
    },
    genNavbar: function genNavbar(createElement) {
      var navBarSlots = [this.genNavbarBrandNode(createElement), this.genNavbarSlotsNode(createElement)];

      if (!isFilled(this.wrapperClass)) {
        return this.genNavbarSlots(createElement, navBarSlots);
      } // It wraps the slots into a div with the provided wrapperClass prop


      var navWrapper = createElement('div', {
        class: this.wrapperClass
      }, navBarSlots);
      return this.genNavbarSlots(createElement, [navWrapper]);
    },
    genNavbarSlots: function genNavbarSlots(createElement, slots) {
      return createElement('nav', {
        staticClass: 'navbar',
        class: this.computedClasses,
        attrs: {
          role: 'navigation',
          'aria-label': 'main navigation'
        },
        directives: [{
          name: 'click-outside',
          value: this.closeMenu
        }]
      }, slots);
    },
    genNavbarBrandNode: function genNavbarBrandNode(createElement) {
      return createElement('div', {
        class: 'navbar-brand'
      }, [getSlot$1(this.$slots, 'brand'), this.genBurgerNode(createElement)]);
    },
    genBurgerNode: function genBurgerNode(createElement) {
      if (this.mobileBurger) {
        var defaultBurgerNode = createElement('navbar-burger', {
          props: {
            isOpened: this.isOpened
          },
          on: {
            click: this.toggleActive
          }
        });
        var hasBurgerSlot = !!this.$scopedSlots.burger;
        return hasBurgerSlot ? this.$scopedSlots.burger({
          isOpened: this.isOpened,
          toggleActive: this.toggleActive
        }) : defaultBurgerNode;
      }
    },
    genNavbarSlotsNode: function genNavbarSlotsNode(createElement) {
      return createElement('div', {
        staticClass: 'navbar-menu',
        class: {
          'is-active': this.isOpened
        }
      }, [this.genMenuPosition(createElement, 'start'), this.genMenuPosition(createElement, 'end')]);
    },
    genMenuPosition: function genMenuPosition(createElement, positionName) {
      return createElement('div', {
        staticClass: "navbar-".concat(positionName)
      }, getSlot$1(this.$slots, positionName));
    },
    setBodyFixedTopClass: function setBodyFixedTopClass(isSet) {
      this.checkIfFixedPropertiesAreColliding();

      if (isSet) {
        // TODO Apply only one of the classes once PR is merged in Bulma:
        // https://github.com/jgthms/bulma/pull/2737
        this.setBodyClass(BODY_FIXED_TOP_CLASS);
        this.spaced && this.setBodyClass(BODY_SPACED_FIXED_TOP_CLASS);
      } else {
        this.removeBodyClass(BODY_FIXED_TOP_CLASS);
        this.removeBodyClass(BODY_SPACED_FIXED_TOP_CLASS);
      }
    },
    setBodyFixedBottomClass: function setBodyFixedBottomClass(isSet) {
      this.checkIfFixedPropertiesAreColliding();

      if (isSet) {
        // TODO Apply only one of the classes once PR is merged in Bulma:
        // https://github.com/jgthms/bulma/pull/2737
        this.setBodyClass(BODY_FIXED_BOTTOM_CLASS);
        this.spaced && this.setBodyClass(BODY_SPACED_FIXED_BOTTOM_CLASS);
      } else {
        this.removeBodyClass(BODY_FIXED_BOTTOM_CLASS);
        this.removeBodyClass(BODY_SPACED_FIXED_BOTTOM_CLASS);
      }
    }
  },
  beforeMount: function beforeMount() {
    this.fixedTop && this.setBodyFixedTopClass(true);
    this.fixedBottom && this.setBodyFixedBottomClass(true);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.fixedTop) {
      var className = this.spaced ? BODY_SPACED_FIXED_TOP_CLASS : BODY_FIXED_TOP_CLASS;
      this.removeBodyClass(className);
    } else if (this.fixedBottom) {
      var _className = this.spaced ? BODY_SPACED_FIXED_BOTTOM_CLASS : BODY_FIXED_BOTTOM_CLASS;

      this.removeBodyClass(_className);
    }
  },
  render: function render() {
    return this.genNavbar(h);
  }
};

const render$v = () => {};


script$v.render = render$v;
script$v.__file = "src/components/navbar/Navbar.vue";

var clickableWhiteList = ['div', 'span', 'input'];
var script$u = {
  name: 'BNavbarItem',
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    active: Boolean
  },
  methods: {
    /**
     * Keypress event that is bound to the document
     */
    keyPress: function keyPress(_ref) {
      var key = _ref.key;

      if (key === 'Escape' || key === 'Esc') {
        this.closeMenuRecursive(this, ['NavBar']);
      }
    },

    /**
     * Close parent if clicked outside.
     */
    handleClickEvent: function handleClickEvent(event) {
      var isOnWhiteList = clickableWhiteList.some(function (item) {
        return item === event.target.localName;
      });

      if (!isOnWhiteList) {
        var parent = this.closeMenuRecursive(this, ['NavbarDropdown', 'NavBar']);
        if (parent && parent.$data._isNavbarDropdown) this.closeMenuRecursive(parent, ['NavBar']);
      }
    },

    /**
     * Close parent recursively
     */
    closeMenuRecursive: function closeMenuRecursive(current, targetComponents) {
      if (!current.$parent) return null;
      var foundItem = targetComponents.reduce(function (acc, item) {
        if (current.$parent.$data["_is".concat(item)]) {
          current.$parent.closeMenu();
          return current.$parent;
        }

        return acc;
      }, null);
      return foundItem || this.closeMenuRecursive(current.$parent, targetComponents);
    }
  },
  mounted: function mounted() {
    if (typeof window !== 'undefined') {
      this.$el.addEventListener('click', this.handleClickEvent);
      document.addEventListener('keyup', this.keyPress);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (typeof window !== 'undefined') {
      this.$el.removeEventListener('click', this.handleClickEvent);
      document.removeEventListener('keyup', this.keyPress);
    }
  }
};

function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent($props.tag), mergeProps({
    class: ["navbar-item", {
            'is-active': $props.active
        }]
  }, _ctx.$attrs, toHandlers(_ctx.$listeners)), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 16 /* FULL_PROPS */, ["class"]))
}

script$u.render = render$u;
script$u.__file = "src/components/navbar/NavbarItem.vue";

var script$t = {
  name: 'BNavbarDropdown',
  directives: {
    clickOutside: directive
  },
  props: {
    label: String,
    hoverable: Boolean,
    active: Boolean,
    right: Boolean,
    arrowless: Boolean,
    boxed: Boolean,
    closeOnClick: {
      type: Boolean,
      default: true
    },
    collapsible: Boolean
  },
  data: function data() {
    return {
      newActive: this.active,
      isHoverable: this.hoverable,
      _isNavbarDropdown: true // Used internally by NavbarItem

    };
  },
  watch: {
    active: function active(value) {
      this.newActive = value;
    }
  },
  methods: {
    showMenu: function showMenu() {
      this.newActive = true;
    },

    /**
    * See naming convetion of navbaritem
    */
    closeMenu: function closeMenu() {
      this.newActive = !this.closeOnClick;

      if (this.hoverable && this.closeOnClick) {
        this.isHoverable = false;
      }
    },
    checkHoverable: function checkHoverable() {
      if (this.hoverable) {
        this.isHoverable = true;
      }
    }
  }
};

function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_outside = resolveDirective("click-outside");

  return withDirectives((openBlock(), createBlock("div", {
    class: ["navbar-item has-dropdown", {
            'is-hoverable': $data.isHoverable,
            'is-active': $data.newActive
        }],
    onMouseenter: _cache[2] || (_cache[2] = (...args) => ($options.checkHoverable && $options.checkHoverable(...args)))
  }, [
    createVNode("a", {
      class: ["navbar-link", {
                'is-arrowless': $props.arrowless,
                'is-active': $data.newActive && $props.collapsible
            }],
      role: "menuitem",
      "aria-haspopup": "true",
      href: "#",
      onClick: _cache[1] || (_cache[1] = withModifiers($event => ($data.newActive = !$data.newActive), ["prevent"]))
    }, [
      ($props.label)
        ? (openBlock(), createBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString($props.label), 1 /* TEXT */)
          ], 64 /* STABLE_FRAGMENT */))
        : renderSlot(_ctx.$slots, "label", { key: 1 })
    ], 2 /* CLASS */),
    withDirectives(createVNode("div", {
      class: ["navbar-dropdown", {
                'is-right': $props.right,
                'is-boxed': $props.boxed,
            }]
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2 /* CLASS */), [
      [vShow, !$props.collapsible || ($props.collapsible && $data.newActive)]
    ])
  ], 34 /* CLASS, HYDRATE_EVENTS */)), [
    [_directive_click_outside, $options.closeMenu]
  ])
}

script$t.render = render$t;
script$t.__file = "src/components/navbar/NavbarDropdown.vue";

var Plugin$k = {
  install: function install(Vue) {
    registerComponent(Vue, script$v);
    registerComponent(Vue, script$u);
    registerComponent(Vue, script$t);
  }
};
use(Plugin$k);

var _components$5;
var script$s = {
  name: 'BNumberinput',
  components: (_components$5 = {}, _defineProperty(_components$5, script$11.name, script$11), _defineProperty(_components$5, script$10.name, script$10), _components$5),
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    value: Number,
    min: {
      type: [Number, String]
    },
    max: [Number, String],
    step: [Number, String],
    minStep: [Number, String],
    exponential: [Boolean, Number],
    disabled: Boolean,
    type: {
      type: String,
      default: 'is-primary'
    },
    editable: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: true
    },
    controlsAlignment: {
      type: String,
      default: 'center',
      validator: function validator(value) {
        return ['left', 'right', 'center'].indexOf(value) >= 0;
      }
    },
    controlsRounded: {
      type: Boolean,
      default: false
    },
    controlsPosition: String,
    placeholder: [Number, String]
  },
  data: function data() {
    return {
      newValue: this.value,
      newStep: this.step || 1,
      newMinStep: this.minStep,
      timesPressed: 1,
      _elementRef: 'input'
    };
  },
  computed: {
    computedValue: {
      get: function get() {
        return this.newValue;
      },
      set: function set(value) {
        var newValue = value;

        if (value === '' || value === undefined || value === null) {
          if (this.minNumber !== undefined) {
            newValue = this.minNumber;
          } else {
            newValue = null;
          }
        }

        this.newValue = newValue;

        if (!isNaN(newValue) && newValue !== null && newValue !== '-0') {
          this.$emit('input', Number(newValue));
        }

        !this.isValid && this.$refs.input.checkHtml5Validity();
      }
    },
    controlsLeft: function controlsLeft() {
      if (this.controls && this.controlsAlignment !== 'right') {
        return this.controlsAlignment === 'left' ? ['minus', 'plus'] : ['minus'];
      }

      return [];
    },
    controlsRight: function controlsRight() {
      if (this.controls && this.controlsAlignment !== 'left') {
        return this.controlsAlignment === 'right' ? ['minus', 'plus'] : ['plus'];
      }

      return [];
    },
    fieldClasses: function fieldClasses() {
      return [{
        'has-addons': this.controlsPosition === 'compact'
      }, {
        'is-grouped': this.controlsPosition !== 'compact'
      }, {
        'is-expanded': this.expanded
      }];
    },
    buttonClasses: function buttonClasses() {
      return [this.type, this.size, {
        'is-rounded': this.controlsRounded
      }];
    },
    minNumber: function minNumber() {
      return typeof this.min === 'string' ? parseFloat(this.min) : this.min;
    },
    maxNumber: function maxNumber() {
      return typeof this.max === 'string' ? parseFloat(this.max) : this.max;
    },
    stepNumber: function stepNumber() {
      return typeof this.newStep === 'string' ? parseFloat(this.newStep) : this.newStep;
    },
    minStepNumber: function minStepNumber() {
      var step = typeof this.newMinStep !== 'undefined' ? this.newMinStep : this.newStep;
      return typeof step === 'string' ? parseFloat(step) : step;
    },
    disabledMin: function disabledMin() {
      return this.computedValue - this.stepNumber < this.minNumber;
    },
    disabledMax: function disabledMax() {
      return this.computedValue + this.stepNumber > this.maxNumber;
    },
    stepDecimals: function stepDecimals() {
      var step = this.minStepNumber.toString();
      var index = step.indexOf('.');

      if (index >= 0) {
        return step.substring(index + 1).length;
      }

      return 0;
    }
  },
  watch: {
    /**
     * When v-model is changed:
     *   1. Set internal value.
     */
    value: {
      immediate: true,
      handler: function handler(value) {
        this.newValue = value;
      }
    },
    step: function step(value) {
      this.newStep = value;
    },
    minStep: function minStep(value) {
      this.newMinStep = value;
    }
  },
  methods: {
    decrement: function decrement() {
      if (typeof this.minNumber === 'undefined' || this.computedValue - this.stepNumber >= this.minNumber) {
        if (this.computedValue === null || typeof this.computedValue === 'undefined') {
          if (this.maxNumber) {
            this.computedValue = this.maxNumber;
            return;
          }

          this.computedValue = 0;
        }

        var value = this.computedValue - this.stepNumber;
        this.computedValue = parseFloat(value.toFixed(this.stepDecimals));
      }
    },
    increment: function increment() {
      if (typeof this.maxNumber === 'undefined' || this.computedValue + this.stepNumber <= this.maxNumber) {
        if (this.computedValue === null || typeof this.computedValue === 'undefined') {
          if (this.minNumber) {
            this.computedValue = this.minNumber;
            return;
          }

          this.computedValue = 0;
        }

        var value = this.computedValue + this.stepNumber;
        this.computedValue = parseFloat(value.toFixed(this.stepDecimals));
      }
    },
    onControlClick: function onControlClick(event, inc) {
      // IE 11 -> filter click event
      if (event.detail !== 0 || event.type !== 'click') return;
      if (inc) this.increment();else this.decrement();
    },
    longPressTick: function longPressTick(inc) {
      var _this = this;

      if (inc) this.increment();else this.decrement();
      this._$intervalRef = setTimeout(function () {
        _this.longPressTick(inc);
      }, this.exponential ? 250 / (this.exponential * this.timesPressed++) : 250);
    },
    onStartLongPress: function onStartLongPress(event, inc) {
      if (event.button !== 0 && event.type !== 'touchstart') return;
      clearTimeout(this._$intervalRef);
      this.longPressTick(inc);
    },
    onStopLongPress: function onStopLongPress() {
      if (!this._$intervalRef) return;
      this.timesPressed = 1;
      clearTimeout(this._$intervalRef);
      this._$intervalRef = null;
    }
  }
};

function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  const _component_b_input = resolveComponent("b-input");

  return (openBlock(), createBlock("div", {
    class: ["b-numberinput field", $options.fieldClasses]
  }, [
    (openBlock(true), createBlock(Fragment, null, renderList($options.controlsLeft, (control) => {
      return (openBlock(), createBlock("p", {
        key: control,
        class: ['control', control],
        onMouseup: _cache[1] || (_cache[1] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args))),
        onMouseleave: _cache[2] || (_cache[2] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args))),
        onTouchend: _cache[3] || (_cache[3] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args))),
        onTouchcancel: _cache[4] || (_cache[4] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args)))
      }, [
        createVNode("button", {
          type: "button",
          class: ["button", $options.buttonClasses],
          disabled: ($props.disabled || control === 'plus' ? $options.disabledMax : $options.disabledMin) ? '' : null,
          onMousedown: $event => ($options.onStartLongPress($event, control === 'plus')),
          onTouchstart: withModifiers($event => ($options.onStartLongPress($event, control === 'plus')), ["prevent"]),
          onClick: $event => ($options.onControlClick($event, control === 'plus'))
        }, [
          createVNode(_component_b_icon, {
            both: "",
            icon: control,
            pack: _ctx.iconPack,
            size: _ctx.iconSize
          }, null, 8 /* PROPS */, ["icon", "pack", "size"])
        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled", "onMousedown", "onTouchstart", "onClick"])
      ], 34 /* CLASS, HYDRATE_EVENTS */))
    }), 128 /* KEYED_FRAGMENT */)),
    createVNode(_component_b_input, mergeProps({
      type: "number",
      ref: "input",
      modelValue: $options.computedValue,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ($options.computedValue = $event))
    }, _ctx.$attrs, {
      step: $options.minStepNumber,
      max: $props.max,
      min: $props.min,
      size: _ctx.size,
      disabled: $props.disabled,
      readonly: !$props.editable,
      loading: _ctx.loading,
      rounded: _ctx.rounded,
      icon: _ctx.icon,
      "icon-pack": _ctx.iconPack,
      autocomplete: _ctx.autocomplete,
      expanded: _ctx.expanded,
      placeholder: $props.placeholder,
      "use-html5-validation": _ctx.useHtml5Validation,
      onFocus: _cache[6] || (_cache[6] = $event => (_ctx.$emit('focus', $event))),
      onBlur: _cache[7] || (_cache[7] = $event => (_ctx.$emit('blur', $event)))
    }), null, 16 /* FULL_PROPS */, ["modelValue", "step", "max", "min", "size", "disabled", "readonly", "loading", "rounded", "icon", "icon-pack", "autocomplete", "expanded", "placeholder", "use-html5-validation"]),
    (openBlock(true), createBlock(Fragment, null, renderList($options.controlsRight, (control) => {
      return (openBlock(), createBlock("p", {
        key: control,
        class: ['control', control],
        onMouseup: _cache[8] || (_cache[8] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args))),
        onMouseleave: _cache[9] || (_cache[9] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args))),
        onTouchend: _cache[10] || (_cache[10] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args))),
        onTouchcancel: _cache[11] || (_cache[11] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args)))
      }, [
        createVNode("button", {
          type: "button",
          class: ["button", $options.buttonClasses],
          disabled: ($props.disabled || control === 'plus' ? $options.disabledMax : $options.disabledMin) ? '' : null,
          onMousedown: $event => ($options.onStartLongPress($event, control === 'plus')),
          onTouchstart: withModifiers($event => ($options.onStartLongPress($event, control === 'plus')), ["prevent"]),
          onClick: $event => ($options.onControlClick($event, control === 'plus'))
        }, [
          createVNode(_component_b_icon, {
            both: "",
            icon: control,
            pack: _ctx.iconPack,
            size: _ctx.iconSize
          }, null, 8 /* PROPS */, ["icon", "pack", "size"])
        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled", "onMousedown", "onTouchstart", "onClick"])
      ], 34 /* CLASS, HYDRATE_EVENTS */))
    }), 128 /* KEYED_FRAGMENT */))
  ], 2 /* CLASS */))
}

script$s.render = render$s;
script$s.__file = "src/components/numberinput/Numberinput.vue";

var Plugin$j = {
  install: function install(Vue) {
    registerComponent(Vue, script$s);
  }
};
use(Plugin$j);

var script$r = {
  name: 'BPaginationButton',
  props: {
    page: {
      type: Object,
      required: true
    },
    tag: {
      type: String,
      default: 'a',
      validator: function validator(value) {
        return config.defaultLinkTags.indexOf(value) >= 0;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    href: function href() {
      if (this.tag === 'a') {
        return '#';
      }
    },
    isDisabled: function isDisabled() {
      return this.disabled || this.page.disabled;
    }
  }
};

function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent($props.tag), mergeProps({
    role: "button",
    href: $options.href,
    disabled: $options.isDisabled,
    class: ["pagination-link", { 'is-current': $props.page.isCurrent, [$props.page.class]: true }]
  }, _ctx.$attrs, {
    onClick: withModifiers($props.page.click, ["prevent"]),
    "aria-label": $props.page['aria-label'],
    "aria-current": $props.page.isCurrent
  }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString($props.page.number), 1 /* TEXT */)
      ])
    ]),
    _: 3 /* FORWARDED */
  }, 16 /* FULL_PROPS */, ["href", "disabled", "class", "onClick", "aria-label", "aria-current"]))
}

script$r.render = render$r;
script$r.__file = "src/components/pagination/PaginationButton.vue";

var _components$4;
var script$q = {
  name: 'BPagination',
  components: (_components$4 = {}, _defineProperty(_components$4, script$11.name, script$11), _defineProperty(_components$4, script$r.name, script$r), _components$4),
  // deprecated, to replace with default 'value' in the next breaking change
  model: {
    prop: 'current',
    event: 'update:current'
  },
  props: {
    total: [Number, String],
    perPage: {
      type: [Number, String],
      default: 20
    },
    current: {
      type: [Number, String],
      default: 1
    },
    rangeBefore: {
      type: [Number, String],
      default: 1
    },
    rangeAfter: {
      type: [Number, String],
      default: 1
    },
    size: String,
    simple: Boolean,
    rounded: Boolean,
    order: String,
    iconPack: String,
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
    ariaNextLabel: String,
    ariaPreviousLabel: String,
    ariaPageLabel: String,
    ariaCurrentLabel: String
  },
  computed: {
    rootClasses: function rootClasses() {
      return [this.order, this.size, {
        'is-simple': this.simple,
        'is-rounded': this.rounded
      }];
    },
    beforeCurrent: function beforeCurrent() {
      return parseInt(this.rangeBefore);
    },
    afterCurrent: function afterCurrent() {
      return parseInt(this.rangeAfter);
    },

    /**
    * Total page size (count).
    */
    pageCount: function pageCount() {
      return Math.ceil(this.total / this.perPage);
    },

    /**
    * First item of the page (count).
    */
    firstItem: function firstItem() {
      var firstItem = this.current * this.perPage - this.perPage + 1;
      return firstItem >= 0 ? firstItem : 0;
    },

    /**
    * Check if previous button is available.
    */
    hasPrev: function hasPrev() {
      return this.current > 1;
    },

    /**
    * Check if first page button should be visible.
    */
    hasFirst: function hasFirst() {
      return this.current >= 2 + this.beforeCurrent;
    },

    /**
    * Check if first ellipsis should be visible.
    */
    hasFirstEllipsis: function hasFirstEllipsis() {
      return this.current >= this.beforeCurrent + 4;
    },

    /**
    * Check if last page button should be visible.
    */
    hasLast: function hasLast() {
      return this.current <= this.pageCount - (1 + this.afterCurrent);
    },

    /**
    * Check if last ellipsis should be visible.
    */
    hasLastEllipsis: function hasLastEllipsis() {
      return this.current < this.pageCount - (2 + this.afterCurrent);
    },

    /**
    * Check if next button is available.
    */
    hasNext: function hasNext() {
      return this.current < this.pageCount;
    },

    /**
    * Get near pages, 1 before and 1 after the current.
    * Also add the click event to the array.
    */
    pagesInRange: function pagesInRange() {
      if (this.simple) return;
      var left = Math.max(1, this.current - this.beforeCurrent);

      if (left - 1 === 2) {
        left--; // Do not show the ellipsis if there is only one to hide
      }

      var right = Math.min(this.current + this.afterCurrent, this.pageCount);

      if (this.pageCount - right === 2) {
        right++; // Do not show the ellipsis if there is only one to hide
      }

      var pages = [];

      for (var i = left; i <= right; i++) {
        pages.push(this.getPage(i));
      }

      return pages;
    }
  },
  watch: {
    /**
    * If current page is trying to be greater than page count, set to last.
    */
    pageCount: function pageCount(value) {
      if (this.current > value) this.last();
    }
  },
  methods: {
    /**
    * Previous button click listener.
    */
    prev: function prev(event) {
      this.changePage(this.current - 1, event);
    },

    /**
    * Next button click listener.
    */
    next: function next(event) {
      this.changePage(this.current + 1, event);
    },

    /**
    * First button click listener.
    */
    first: function first(event) {
      this.changePage(1, event);
    },

    /**
    * Last button click listener.
    */
    last: function last(event) {
      this.changePage(this.pageCount, event);
    },
    changePage: function changePage(num, event) {
      if (this.current === num || num < 1 || num > this.pageCount) return;
      this.$emit('update:current', num);
      this.$emit('change', num); // Set focus on element to keep tab order

      if (event && event.target) {
        this.$nextTick(function () {
          return event.target.focus();
        });
      }
    },
    getPage: function getPage(num) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return {
        number: num,
        isCurrent: this.current === num,
        click: function click(event) {
          return _this.changePage(num, event);
        },
        disabled: options.disabled || false,
        class: options.class || '',
        'aria-label': options['aria-label'] || this.getAriaPageLabel(num, this.current === num)
      };
    },

    /**
    * Get text for aria-label according to page number.
    */
    getAriaPageLabel: function getAriaPageLabel(pageNumber, isCurrent) {
      if (this.ariaPageLabel && (!isCurrent || !this.ariaCurrentLabel)) {
        return this.ariaPageLabel + ' ' + pageNumber + '.';
      } else if (this.ariaPageLabel && isCurrent && this.ariaCurrentLabel) {
        return this.ariaCurrentLabel + ', ' + this.ariaPageLabel + ' ' + pageNumber + '.';
      }

      return null;
    }
  }
};

const _hoisted_1$g = {
  key: 4,
  class: "info"
};
const _hoisted_2$7 = {
  key: 5,
  class: "pagination-list"
};
const _hoisted_3$4 = { key: 0 };
const _hoisted_4$4 = { key: 1 };
const _hoisted_5$3 = /*#__PURE__*/createVNode("span", { class: "pagination-ellipsis" }, "…", -1 /* HOISTED */);
const _hoisted_6$2 = { key: 2 };
const _hoisted_7$1 = /*#__PURE__*/createVNode("span", { class: "pagination-ellipsis" }, "…", -1 /* HOISTED */);
const _hoisted_8$1 = { key: 3 };

function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  const _component_BPaginationButton = resolveComponent("BPaginationButton");

  return (openBlock(), createBlock("nav", {
    class: ["pagination", $options.rootClasses]
  }, [
    ((_ctx.$scopedSlots || _ctx.$slots).previous)
      ? renderSlot(_ctx.$slots, "previous", {
          key: 0,
          page: $options.getPage($props.current - 1, {
                disabled: !$options.hasPrev,
                class: 'pagination-previous',
                'aria-label': $props.ariaPreviousLabel
        })
        }, () => [
          createVNode(_component_b_icon, {
            icon: $props.iconPrev,
            pack: $props.iconPack,
            both: "",
            "aria-hidden": "true"
          }, null, 8 /* PROPS */, ["icon", "pack"])
        ])
      : (openBlock(), createBlock(_component_BPaginationButton, {
          key: 1,
          class: "pagination-previous",
          disabled: !$options.hasPrev,
          page: $options.getPage($props.current - 1),
          "aria-label": $props.ariaPreviousLabel
        }, {
          default: withCtx(() => [
            createVNode(_component_b_icon, {
              icon: $props.iconPrev,
              pack: $props.iconPack,
              both: "",
              "aria-hidden": "true"
            }, null, 8 /* PROPS */, ["icon", "pack"])
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["disabled", "page", "aria-label"])),
    ((_ctx.$scopedSlots || _ctx.$slots).next)
      ? renderSlot(_ctx.$slots, "next", {
          key: 2,
          page: $options.getPage($props.current + 1, {
                disabled: !$options.hasNext,
                class: 'pagination-next',
                'aria-label': $props.ariaNextLabel
        })
        }, () => [
          createVNode(_component_b_icon, {
            icon: $props.iconNext,
            pack: $props.iconPack,
            both: "",
            "aria-hidden": "true"
          }, null, 8 /* PROPS */, ["icon", "pack"])
        ])
      : (openBlock(), createBlock(_component_BPaginationButton, {
          key: 3,
          class: "pagination-next",
          disabled: !$options.hasNext,
          page: $options.getPage($props.current + 1),
          "aria-label": $props.ariaNextLabel
        }, {
          default: withCtx(() => [
            createVNode(_component_b_icon, {
              icon: $props.iconNext,
              pack: $props.iconPack,
              both: "",
              "aria-hidden": "true"
            }, null, 8 /* PROPS */, ["icon", "pack"])
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["disabled", "page", "aria-label"])),
    ($props.simple)
      ? (openBlock(), createBlock("small", _hoisted_1$g, [
          ($props.perPage == 1)
            ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString($options.firstItem) + " / " + toDisplayString($props.total), 1 /* TEXT */)
              ], 64 /* STABLE_FRAGMENT */))
            : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString($options.firstItem) + "-" + toDisplayString(Math.min($props.current * $props.perPage, $props.total)) + " / " + toDisplayString($props.total), 1 /* TEXT */)
              ], 64 /* STABLE_FRAGMENT */))
        ]))
      : (openBlock(), createBlock("ul", _hoisted_2$7, [
          createCommentVNode("First"),
          ($options.hasFirst)
            ? (openBlock(), createBlock("li", _hoisted_3$4, [
                ((_ctx.$scopedSlots || _ctx.$slots).default)
                  ? renderSlot(_ctx.$slots, "default", {
                      key: 0,
                      page: $options.getPage(1)
                    })
                  : (openBlock(), createBlock(_component_BPaginationButton, {
                      key: 1,
                      page: $options.getPage(1)
                    }, null, 8 /* PROPS */, ["page"]))
              ]))
            : createCommentVNode("v-if", true),
          ($options.hasFirstEllipsis)
            ? (openBlock(), createBlock("li", _hoisted_4$4, [
                _hoisted_5$3
              ]))
            : createCommentVNode("v-if", true),
          createCommentVNode("Pages"),
          (openBlock(true), createBlock(Fragment, null, renderList($options.pagesInRange, (page) => {
            return (openBlock(), createBlock("li", {
              key: page.number
            }, [
              ((_ctx.$scopedSlots || _ctx.$slots).default)
                ? renderSlot(_ctx.$slots, "default", {
                    key: 0,
                    page: page
                  })
                : (openBlock(), createBlock(_component_BPaginationButton, {
                    key: 1,
                    page: page
                  }, null, 8 /* PROPS */, ["page"]))
            ]))
          }), 128 /* KEYED_FRAGMENT */)),
          createCommentVNode("Last"),
          ($options.hasLastEllipsis)
            ? (openBlock(), createBlock("li", _hoisted_6$2, [
                _hoisted_7$1
              ]))
            : createCommentVNode("v-if", true),
          ($options.hasLast)
            ? (openBlock(), createBlock("li", _hoisted_8$1, [
                ((_ctx.$scopedSlots || _ctx.$slots).default)
                  ? renderSlot(_ctx.$slots, "default", {
                      key: 0,
                      page: $options.getPage($options.pageCount)
                    })
                  : (openBlock(), createBlock(_component_BPaginationButton, {
                      key: 1,
                      page: $options.getPage($options.pageCount)
                    }, null, 8 /* PROPS */, ["page"]))
              ]))
            : createCommentVNode("v-if", true)
        ]))
  ], 2 /* CLASS */))
}

script$q.render = render$q;
script$q.__file = "src/components/pagination/Pagination.vue";

var Plugin$i = {
  install: function install(Vue) {
    registerComponent(Vue, script$q);
    registerComponent(Vue, script$r);
  }
};
use(Plugin$i);

var script$p = {
  name: 'BProgress',
  mixins: [ProviderParentMixin('progress')],
  props: {
    type: {
      type: [String, Object],
      default: 'is-darkgrey'
    },
    size: String,
    value: {
      type: Number,
      default: undefined
    },
    max: {
      type: Number,
      default: 100
    },
    showValue: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: 'raw',
      validator: function validator(value) {
        return ['raw', 'percent'].indexOf(value) >= 0;
      }
    },
    precision: {
      type: Number,
      default: 2
    },
    keepTrailingZeroes: {
      type: Boolean,
      default: false
    },
    locale: {
      type: [String, Array],
      default: function _default() {
        return config.defaultLocale;
      }
    }
  },
  computed: {
    isIndeterminate: function isIndeterminate() {
      return this.value === undefined || this.value === null;
    },
    newType: function newType() {
      return [this.size, this.type, {
        'is-more-than-half': this.value && this.value > this.max / 2
      }];
    },
    newValue: function newValue() {
      return this.calculateValue(this.value);
    },
    isNative: function isNative() {
      return getSlot(this.$slots, 'bar') === undefined;
    },
    wrapperClasses: function wrapperClasses() {
      return _defineProperty({
        'is-not-native': !this.isNative
      }, this.size, !this.isNative);
    }
  },
  watch: {
    /**
     * When value is changed back to undefined, value of native progress get reset to 0.
     * Need to add and remove the value attribute to have the indeterminate or not.
     */
    isIndeterminate: function isIndeterminate(indeterminate) {
      var _this = this;

      this.$nextTick(function () {
        if (_this.$refs.progress) {
          if (indeterminate) {
            _this.$refs.progress.removeAttribute('value');
          } else {
            _this.$refs.progress.setAttribute('value', _this.value);
          }
        }
      });
    }
  },
  methods: {
    calculateValue: function calculateValue(value) {
      if (value === undefined || value === null || isNaN(value)) {
        return undefined;
      }

      var minimumFractionDigits = this.keepTrailingZeroes ? this.precision : 0;
      var maximumFractionDigits = this.precision;

      if (this.format === 'percent') {
        return new Intl.NumberFormat(this.locale, {
          style: 'percent',
          minimumFractionDigits: minimumFractionDigits,
          maximumFractionDigits: maximumFractionDigits
        }).format(value / this.max);
      }

      return new Intl.NumberFormat(this.locale, {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits
      }).format(value);
    }
  }
};

const _hoisted_1$f = {
  key: 2,
  class: "progress-value"
};

function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["progress-wrapper", $options.wrapperClasses]
  }, [
    ($options.isNative)
      ? (openBlock(), createBlock("progress", {
          key: 0,
          ref: "progress",
          class: ["progress", $options.newType],
          max: $props.max,
          value: $props.value
        }, toDisplayString($options.newValue), 11 /* TEXT, CLASS, PROPS */, ["max", "value"]))
      : renderSlot(_ctx.$slots, "bar", { key: 1 }),
    ($options.isNative && $props.showValue)
      ? (openBlock(), createBlock("p", _hoisted_1$f, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString($options.newValue), 1 /* TEXT */)
          ])
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$p.render = render$p;
script$p.__file = "src/components/progress/Progress.vue";

var script$o = {
  name: 'BProgressBar',
  mixins: [InjectedChildMixin('progress')],
  props: {
    type: {
      type: [String, Object],
      default: undefined
    },
    value: {
      type: Number,
      default: undefined
    },
    showValue: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    newType: function newType() {
      return [this.parent.size, this.type || this.parent.type];
    },
    newShowValue: function newShowValue() {
      return this.showValue || this.parent.showValue;
    },
    newValue: function newValue() {
      return this.parent.calculateValue(this.value);
    },
    barWidth: function barWidth() {
      return "".concat(this.value * 100 / this.parent.max, "%");
    }
  }
};

const _hoisted_1$e = {
  key: 0,
  class: "progress-value"
};

function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["progress-bar", $options.newType],
    role: "progressbar",
    "aria-valuenow": $props.value,
    "aria-valuemax": _ctx.parent.max,
    "aria-valuemin": "0",
    style: {width: $options.barWidth}
  }, [
    ($options.newShowValue)
      ? (openBlock(), createBlock("p", _hoisted_1$e, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString($options.newValue), 1 /* TEXT */)
          ])
        ]))
      : createCommentVNode("v-if", true)
  ], 14 /* CLASS, STYLE, PROPS */, ["aria-valuenow", "aria-valuemax"]))
}

script$o.render = render$o;
script$o.__file = "src/components/progress/ProgressBar.vue";

var Plugin$h = {
  install: function install(Vue) {
    registerComponent(Vue, script$p);
    registerComponent(Vue, script$o);
  }
};
use(Plugin$h);

var script$n = {
  name: 'BRadio',
  mixins: [CheckRadioMixin]
};

const _hoisted_1$d = { class: "control-label" };

function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("label", {
    class: ["b-radio radio", [_ctx.size, { 'is-disabled': _ctx.disabled }]],
    ref: "label",
    disabled: _ctx.disabled ? '' : null,
    onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.focus && _ctx.focus(...args))),
    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers($event => (_ctx.$refs.label.click()), ["prevent"]), ["enter"]))
  }, [
    withDirectives(createVNode("input", {
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.computedValue = $event)),
      type: "radio",
      ref: "input",
      onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"])),
      disabled: _ctx.disabled ? '' : null,
      required: _ctx.required,
      name: _ctx.name,
      value: _ctx.nativeValue
    }, null, 8 /* PROPS */, ["disabled", "required", "name", "value"]), [
      [vModelRadio, _ctx.computedValue]
    ]),
    createVNode("span", {
      class: ["check", _ctx.type]
    }, null, 2 /* CLASS */),
    createVNode("span", _hoisted_1$d, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled"]))
}

script$n.render = render$n;
script$n.__file = "src/components/radio/Radio.vue";

var script$m = {
  name: 'BRadioButton',
  mixins: [CheckRadioMixin],
  props: {
    type: {
      type: String,
      default: 'is-primary'
    },
    expanded: Boolean
  },
  data: function data() {
    return {
      isFocused: false
    };
  },
  computed: {
    isSelected: function isSelected() {
      return this.newValue === this.nativeValue;
    },
    labelClass: function labelClass() {
      return [this.isSelected ? this.type : null, this.size, {
        'is-selected': this.isSelected,
        'is-disabled': this.disabled,
        'is-focused': this.isFocused
      }];
    }
  }
};

function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["control", { 'is-expanded': $props.expanded }]
  }, [
    createVNode("label", {
      class: ["b-radio radio button", $options.labelClass],
      ref: "label",
      disabled: _ctx.disabled ? '' : null,
      onClick: _cache[5] || (_cache[5] = (...args) => (_ctx.focus && _ctx.focus(...args))),
      onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers($event => (_ctx.$refs.label.click()), ["prevent"]), ["enter"]))
    }, [
      renderSlot(_ctx.$slots, "default"),
      withDirectives(createVNode("input", {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.computedValue = $event)),
        type: "radio",
        ref: "input",
        onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"])),
        disabled: _ctx.disabled ? '' : null,
        required: _ctx.required,
        name: _ctx.name,
        value: _ctx.nativeValue,
        onFocus: _cache[3] || (_cache[3] = $event => ($data.isFocused = true)),
        onBlur: _cache[4] || (_cache[4] = $event => ($data.isFocused = false))
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["disabled", "required", "name", "value"]), [
        [vModelRadio, _ctx.computedValue]
      ])
    ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled"])
  ], 2 /* CLASS */))
}

script$m.render = render$m;
script$m.__file = "src/components/radio/RadioButton.vue";

var Plugin$g = {
  install: function install(Vue) {
    registerComponent(Vue, script$n);
    registerComponent(Vue, script$m);
  }
};
use(Plugin$g);

var script$l = {
  name: 'BRate',
  components: _defineProperty({}, script$11.name, script$11),
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    icon: {
      type: String,
      default: 'star'
    },
    iconPack: String,
    size: String,
    spaced: Boolean,
    rtl: Boolean,
    disabled: Boolean,
    showScore: Boolean,
    showText: Boolean,
    customText: String,
    texts: Array,
    locale: {
      type: [String, Array],
      default: function _default() {
        return config.defaultLocale;
      }
    }
  },
  data: function data() {
    return {
      newValue: this.value,
      hoverValue: 0
    };
  },
  computed: {
    halfStyle: function halfStyle() {
      return "width:".concat(this.valueDecimal, "%");
    },
    showMe: function showMe() {
      var result = '';

      if (this.showScore) {
        result = this.disabled ? this.value : this.newValue;

        if (result === 0) {
          result = '';
        } else {
          result = new Intl.NumberFormat(this.locale).format(this.value);
        }
      } else if (this.showText) {
        result = this.texts[Math.ceil(this.newValue) - 1];
      }

      return result;
    },
    valueDecimal: function valueDecimal() {
      return this.value * 100 - Math.floor(this.value) * 100;
    }
  },
  watch: {
    // When v-model is changed set the new value.
    value: function value(_value) {
      this.newValue = _value;
    }
  },
  methods: {
    resetNewValue: function resetNewValue() {
      if (this.disabled) return;
      this.hoverValue = 0;
    },
    previewRate: function previewRate(index, event) {
      if (this.disabled) return;
      this.hoverValue = index;
      event.stopPropagation();
    },
    confirmValue: function confirmValue(index) {
      if (this.disabled) return;
      this.newValue = index;
      this.$emit('change', this.newValue);
      this.$emit('input', this.newValue);
    },
    checkHalf: function checkHalf(index) {
      var showWhenDisabled = this.disabled && this.valueDecimal > 0 && index - 1 < this.value && index > this.value;
      return showWhenDisabled;
    },
    rateClass: function rateClass(index) {
      var output = '';
      var currentValue = this.hoverValue !== 0 ? this.hoverValue : this.newValue;

      if (index <= currentValue) {
        output = 'set-on';
      } else if (this.disabled && Math.ceil(this.value) === index) {
        output = 'set-half';
      }

      return output;
    }
  }
};

const _hoisted_1$c = { key: 0 };

function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock("div", {
    class: ["rate", { 'is-disabled': $props.disabled, 'is-spaced': $props.spaced, 'is-rtl': $props.rtl }]
  }, [
    (openBlock(true), createBlock(Fragment, null, renderList($props.max, (item, index) => {
      return (openBlock(), createBlock("div", {
        class: ["rate-item", $options.rateClass(item)],
        key: index,
        onMousemove: $event => ($options.previewRate(item, $event)),
        onMouseleave: _cache[1] || (_cache[1] = (...args) => ($options.resetNewValue && $options.resetNewValue(...args))),
        onClick: withModifiers($event => ($options.confirmValue(item)), ["prevent"])
      }, [
        createVNode(_component_b_icon, {
          pack: $props.iconPack,
          icon: $props.icon,
          size: $props.size
        }, null, 8 /* PROPS */, ["pack", "icon", "size"]),
        ($options.checkHalf(item))
          ? (openBlock(), createBlock(_component_b_icon, {
              key: 0,
              class: "is-half",
              pack: $props.iconPack,
              icon: $props.icon,
              size: $props.size,
              style: $options.halfStyle
            }, null, 8 /* PROPS */, ["pack", "icon", "size", "style"]))
          : createCommentVNode("v-if", true)
      ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["onMousemove", "onClick"]))
    }), 128 /* KEYED_FRAGMENT */)),
    ($props.showText || $props.showScore || $props.customText)
      ? (openBlock(), createBlock("div", {
          key: 0,
          class: ["rate-text", $props.size]
        }, [
          createVNode("span", null, toDisplayString($options.showMe), 1 /* TEXT */),
          ($props.customText && !$props.showText)
            ? (openBlock(), createBlock("span", _hoisted_1$c, toDisplayString($props.customText), 1 /* TEXT */))
            : createCommentVNode("v-if", true)
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$l.render = render$l;
script$l.__file = "src/components/rate/Rate.vue";

var Plugin$f = {
  install: function install(Vue) {
    registerComponent(Vue, script$l);
  }
};
use(Plugin$f);

var Plugin$e = {
  install: function install(Vue) {
    registerComponent(Vue, script$N);
  }
};
use(Plugin$e);

var script$k = {
  name: 'BSkeleton',
  functional: true,
  props: {
    active: {
      type: Boolean,
      default: true
    },
    animated: {
      type: Boolean,
      default: true
    },
    width: [Number, String],
    height: [Number, String],
    circle: Boolean,
    rounded: {
      type: Boolean,
      default: true
    },
    count: {
      type: Number,
      default: 1
    },
    position: {
      type: String,
      default: '',
      validator: function validator(value) {
        return ['', 'is-centered', 'is-right'].indexOf(value) > -1;
      }
    },
    size: String
  },
  render: function render(context) {
    if (!context.props.active) return;
    var items = [];
    var width = context.props.width;
    var height = context.props.height;

    for (var i = 0; i < context.props.count; i++) {
      items.push(h('div', {
        staticClass: 'b-skeleton-item',
        class: {
          'is-rounded': context.props.rounded
        },
        key: i,
        style: {
          height: height === undefined ? null : isNaN(height) ? height : height + 'px',
          width: width === undefined ? null : isNaN(width) ? width : width + 'px',
          borderRadius: context.props.circle ? '50%' : null
        }
      }));
    }

    return h('div', {
      staticClass: 'b-skeleton',
      class: [context.props.size, context.props.position, {
        'is-animated': context.props.animated
      }]
    }, items);
  }
};

const render$k = () => {};


script$k.render = render$k;
script$k.__file = "src/components/skeleton/Skeleton.vue";

var Plugin$d = {
  install: function install(Vue) {
    registerComponent(Vue, script$k);
  }
};
use(Plugin$d);

var script$j = {
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
        return config.defaultModalScroll ? config.defaultModalScroll : 'clip';
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

const _hoisted_1$b = { class: "b-sidebar" };
const _hoisted_2$6 = {
  key: 0,
  class: "sidebar-background"
};

function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$b, [
    ($props.overlay && $data.isOpen)
      ? (openBlock(), createBlock("div", _hoisted_2$6))
      : createCommentVNode("v-if", true),
    createVNode(Transition, {
      name: $data.transitionName,
      onBeforeEnter: $options.beforeEnter,
      onAfterEnter: $options.afterEnter
    }, {
      default: withCtx(() => [
        withDirectives(createVNode("div", {
          ref: "sidebarContent",
          class: ["sidebar-content", $options.rootClasses]
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2 /* CLASS */), [
          [vShow, $data.isOpen]
        ])
      ]),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["name", "onBeforeEnter", "onAfterEnter"])
  ]))
}

script$j.render = render$j;
script$j.__file = "src/components/sidebar/Sidebar.vue";

var Plugin$c = {
  install: function install(Vue) {
    registerComponent(Vue, script$j);
  }
};
use(Plugin$c);

var script$i = {
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

function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("span", {
    ref: "tooltip",
    class: $options.rootClasses
  }, [
    createVNode(Transition, { name: $options.newAnimation }, {
      default: withCtx(() => [
        withDirectives(createVNode("div", {
          ref: "content",
          class: ['tooltip-content', $props.contentClass]
        }, [
          ($props.label)
            ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString($props.label), 1 /* TEXT */)
              ], 64 /* STABLE_FRAGMENT */))
            : (_ctx.$slots.content)
              ? renderSlot(_ctx.$slots, "content", { key: 1 })
              : createCommentVNode("v-if", true)
        ], 2 /* CLASS */), [
          [vShow, $props.active && ($data.isActive || $props.always)]
        ])
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["name"]),
    createVNode("div", {
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
      renderSlot(_ctx.$slots, "default", { ref: "slot" })
    ], 36 /* STYLE, HYDRATE_EVENTS */)
  ], 2 /* CLASS */))
}

script$i.render = render$i;
script$i.__file = "src/components/tooltip/Tooltip.vue";

var script$h = {
  name: 'BSliderThumb',
  components: _defineProperty({}, script$i.name, script$i),
  inheritAttrs: false,
  props: {
    value: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ''
    },
    tooltip: {
      type: Boolean,
      default: true
    },
    indicator: {
      type: Boolean,
      default: false
    },
    customFormatter: Function,
    format: {
      type: String,
      default: 'raw',
      validator: function validator(value) {
        return ['raw', 'percent'].indexOf(value) >= 0;
      }
    },
    locale: {
      type: [String, Array],
      default: function _default() {
        return config.defaultLocale;
      }
    },
    tooltipAlways: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isFocused: false,
      dragging: false,
      startX: 0,
      startPosition: 0,
      newPosition: null,
      oldValue: this.value
    };
  },
  computed: {
    disabled: function disabled() {
      return this.$parent.disabled;
    },
    max: function max() {
      return this.$parent.max;
    },
    min: function min() {
      return this.$parent.min;
    },
    step: function step() {
      return this.$parent.step;
    },
    precision: function precision() {
      return this.$parent.precision;
    },
    currentPosition: function currentPosition() {
      return "".concat((this.value - this.min) / (this.max - this.min) * 100, "%");
    },
    wrapperStyle: function wrapperStyle() {
      return {
        left: this.currentPosition
      };
    },
    formattedValue: function formattedValue() {
      if (typeof this.customFormatter !== 'undefined') {
        return this.customFormatter(this.value);
      }

      if (this.format === 'percent') {
        return new Intl.NumberFormat(this.locale, {
          style: 'percent'
        }).format((this.value - this.min) / (this.max - this.min));
      }

      return new Intl.NumberFormat(this.locale).format(this.value);
    }
  },
  methods: {
    onFocus: function onFocus() {
      this.isFocused = true;
    },
    onBlur: function onBlur() {
      this.isFocused = false;
    },
    onButtonDown: function onButtonDown(event) {
      if (this.disabled) return;
      event.preventDefault();
      this.onDragStart(event);

      if (typeof window !== 'undefined') {
        document.addEventListener('mousemove', this.onDragging);
        document.addEventListener('touchmove', this.onDragging);
        document.addEventListener('mouseup', this.onDragEnd);
        document.addEventListener('touchend', this.onDragEnd);
        document.addEventListener('contextmenu', this.onDragEnd);
      }
    },
    onLeftKeyDown: function onLeftKeyDown() {
      if (this.disabled || this.value === this.min) return;
      this.newPosition = parseFloat(this.currentPosition) - this.step / (this.max - this.min) * 100;
      this.setPosition(this.newPosition);
      this.$parent.emitValue('change');
    },
    onRightKeyDown: function onRightKeyDown() {
      if (this.disabled || this.value === this.max) return;
      this.newPosition = parseFloat(this.currentPosition) + this.step / (this.max - this.min) * 100;
      this.setPosition(this.newPosition);
      this.$parent.emitValue('change');
    },
    onHomeKeyDown: function onHomeKeyDown() {
      if (this.disabled || this.value === this.min) return;
      this.newPosition = 0;
      this.setPosition(this.newPosition);
      this.$parent.emitValue('change');
    },
    onEndKeyDown: function onEndKeyDown() {
      if (this.disabled || this.value === this.max) return;
      this.newPosition = 100;
      this.setPosition(this.newPosition);
      this.$parent.emitValue('change');
    },
    onDragStart: function onDragStart(event) {
      this.dragging = true;
      this.$emit('dragstart');

      if (event.type === 'touchstart') {
        event.clientX = event.touches[0].clientX;
      }

      this.startX = event.clientX;
      this.startPosition = parseFloat(this.currentPosition);
      this.newPosition = this.startPosition;
    },
    onDragging: function onDragging(event) {
      if (this.dragging) {
        if (event.type === 'touchmove') {
          event.clientX = event.touches[0].clientX;
        }

        var diff = (event.clientX - this.startX) / this.$parent.sliderSize() * 100;
        this.newPosition = this.startPosition + diff;
        this.setPosition(this.newPosition);
      }
    },
    onDragEnd: function onDragEnd() {
      this.dragging = false;
      this.$emit('dragend');

      if (this.value !== this.oldValue) {
        this.$parent.emitValue('change');
      }

      this.setPosition(this.newPosition);

      if (typeof window !== 'undefined') {
        document.removeEventListener('mousemove', this.onDragging);
        document.removeEventListener('touchmove', this.onDragging);
        document.removeEventListener('mouseup', this.onDragEnd);
        document.removeEventListener('touchend', this.onDragEnd);
        document.removeEventListener('contextmenu', this.onDragEnd);
      }
    },
    setPosition: function setPosition(percent) {
      if (percent === null || isNaN(percent)) return;

      if (percent < 0) {
        percent = 0;
      } else if (percent > 100) {
        percent = 100;
      }

      var stepLength = 100 / ((this.max - this.min) / this.step);
      var steps = Math.round(percent / stepLength);
      var value = steps * stepLength / 100 * (this.max - this.min) + this.min;
      value = parseFloat(value.toFixed(this.precision));
      this.$emit('input', value);

      if (!this.dragging && value !== this.oldValue) {
        this.oldValue = value;
      }
    }
  }
};

const _hoisted_1$a = { key: 0 };

function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_tooltip = resolveComponent("b-tooltip");

  return (openBlock(), createBlock("div", {
    class: ["b-slider-thumb-wrapper", { 'is-dragging': $data.dragging, 'has-indicator': $props.indicator}],
    style: $options.wrapperStyle
  }, [
    createVNode(_component_b_tooltip, {
      label: $options.formattedValue,
      type: $props.type,
      always: $data.dragging || $data.isFocused || $props.tooltipAlways,
      active: !$options.disabled && $props.tooltip
    }, {
      default: withCtx(() => [
        createVNode("div", mergeProps({
          class: "b-slider-thumb",
          tabindex: $options.disabled ? false : 0
        }, _ctx.$attrs, {
          onMousedown: _cache[1] || (_cache[1] = (...args) => ($options.onButtonDown && $options.onButtonDown(...args))),
          onTouchstart: _cache[2] || (_cache[2] = (...args) => ($options.onButtonDown && $options.onButtonDown(...args))),
          onFocus: _cache[3] || (_cache[3] = (...args) => ($options.onFocus && $options.onFocus(...args))),
          onBlur: _cache[4] || (_cache[4] = (...args) => ($options.onBlur && $options.onBlur(...args))),
          onKeydown: [
            _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => ($options.onLeftKeyDown && $options.onLeftKeyDown(...args)), ["prevent"]), ["left"])),
            _cache[6] || (_cache[6] = withKeys(withModifiers((...args) => ($options.onRightKeyDown && $options.onRightKeyDown(...args)), ["prevent"]), ["right"])),
            _cache[7] || (_cache[7] = withKeys(withModifiers((...args) => ($options.onLeftKeyDown && $options.onLeftKeyDown(...args)), ["prevent"]), ["down"])),
            _cache[8] || (_cache[8] = withKeys(withModifiers((...args) => ($options.onRightKeyDown && $options.onRightKeyDown(...args)), ["prevent"]), ["up"])),
            _cache[9] || (_cache[9] = withKeys(withModifiers((...args) => ($options.onHomeKeyDown && $options.onHomeKeyDown(...args)), ["prevent"]), ["home"])),
            _cache[10] || (_cache[10] = withKeys(withModifiers((...args) => ($options.onEndKeyDown && $options.onEndKeyDown(...args)), ["prevent"]), ["end"]))
          ]
        }), [
          ($props.indicator)
            ? (openBlock(), createBlock("span", _hoisted_1$a, toDisplayString($options.formattedValue), 1 /* TEXT */))
            : createCommentVNode("v-if", true)
        ], 16 /* FULL_PROPS */, ["tabindex"])
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["label", "type", "always", "active"])
  ], 6 /* CLASS, STYLE */))
}

script$h.render = render$h;
script$h.__file = "src/components/slider/SliderThumb.vue";

var script$g = {
  name: 'BSliderTick',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    position: function position() {
      var pos = (this.value - this.$parent.min) / (this.$parent.max - this.$parent.min) * 100;
      return pos >= 0 && pos <= 100 ? pos : 0;
    },
    hidden: function hidden() {
      return this.value === this.$parent.min || this.value === this.$parent.max;
    }
  },
  methods: {
    getTickStyle: function getTickStyle(position) {
      return {
        'left': position + '%'
      };
    }
  },
  created: function created() {
    if (!this.$parent.$data._isSlider) {
      this.$destroy();
      throw new Error('You should wrap bSliderTick on a bSlider');
    }
  }
};

const _hoisted_1$9 = {
  key: 0,
  class: "b-slider-tick-label"
};

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["b-slider-tick", { 'is-tick-hidden': $options.hidden }],
    style: $options.getTickStyle($options.position)
  }, [
    (_ctx.$slots.default)
      ? (openBlock(), createBlock("span", _hoisted_1$9, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 6 /* CLASS, STYLE */))
}

script$g.render = render$g;
script$g.__file = "src/components/slider/SliderTick.vue";

var _components$3;
var script$f = {
  name: 'BSlider',
  components: (_components$3 = {}, _defineProperty(_components$3, script$h.name, script$h), _defineProperty(_components$3, script$g.name, script$g), _components$3),
  props: {
    value: {
      type: [Number, Array],
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: 'is-primary'
    },
    size: String,
    ticks: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: Boolean,
      default: true
    },
    tooltipType: String,
    rounded: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    },
    customFormatter: Function,
    ariaLabel: [String, Array],
    biggerSliderFocus: {
      type: Boolean,
      default: false
    },
    indicator: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: 'raw',
      validator: function validator(value) {
        return ['raw', 'percent'].indexOf(value) >= 0;
      }
    },
    locale: {
      type: [String, Array],
      default: function _default() {
        return config.defaultLocale;
      }
    },
    tooltipAlways: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      value1: null,
      value2: null,
      dragging: false,
      isRange: false,
      _isSlider: true // Used by Thumb and Tick

    };
  },
  computed: {
    newTooltipType: function newTooltipType() {
      return this.tooltipType ? this.tooltipType : this.type;
    },
    tickValues: function tickValues() {
      if (!this.ticks || this.min > this.max || this.step === 0) return [];
      var result = [];

      for (var i = this.min + this.step; i < this.max; i = i + this.step) {
        result.push(i);
      }

      return result;
    },
    minValue: function minValue() {
      return Math.min(this.value1, this.value2);
    },
    maxValue: function maxValue() {
      return Math.max(this.value1, this.value2);
    },
    barSize: function barSize() {
      return this.isRange ? "".concat(100 * (this.maxValue - this.minValue) / (this.max - this.min), "%") : "".concat(100 * (this.value1 - this.min) / (this.max - this.min), "%");
    },
    barStart: function barStart() {
      return this.isRange ? "".concat(100 * (this.minValue - this.min) / (this.max - this.min), "%") : '0%';
    },
    precision: function precision() {
      var precisions = [this.min, this.max, this.step].map(function (item) {
        var decimal = ('' + item).split('.')[1];
        return decimal ? decimal.length : 0;
      });
      return Math.max.apply(Math, _toConsumableArray(precisions));
    },
    barStyle: function barStyle() {
      return {
        width: this.barSize,
        left: this.barStart
      };
    },
    rootClasses: function rootClasses() {
      return {
        'is-rounded': this.rounded,
        'is-dragging': this.dragging,
        'is-disabled': this.disabled,
        'slider-focus': this.biggerSliderFocus
      };
    }
  },
  watch: {
    /**
    * When v-model is changed set the new active step.
    */
    value: function value(_value) {
      this.setValues(_value);
    },
    value1: function value1() {
      this.onInternalValueUpdate();
    },
    value2: function value2() {
      this.onInternalValueUpdate();
    },
    min: function min() {
      this.setValues(this.value);
    },
    max: function max() {
      this.setValues(this.value);
    }
  },
  methods: {
    setValues: function setValues(newValue) {
      if (this.min > this.max) {
        return;
      }

      if (Array.isArray(newValue)) {
        this.isRange = true;
        var smallValue = typeof newValue[0] !== 'number' || isNaN(newValue[0]) ? this.min : bound(newValue[0], this.min, this.max);
        var largeValue = typeof newValue[1] !== 'number' || isNaN(newValue[1]) ? this.max : bound(newValue[1], this.min, this.max);
        this.value1 = this.isThumbReversed ? largeValue : smallValue;
        this.value2 = this.isThumbReversed ? smallValue : largeValue;
      } else {
        this.isRange = false;
        this.value1 = isNaN(newValue) ? this.min : bound(newValue, this.min, this.max);
        this.value2 = null;
      }
    },
    onInternalValueUpdate: function onInternalValueUpdate() {
      if (this.isRange) {
        this.isThumbReversed = this.value1 > this.value2;
      }

      if (!this.lazy || !this.dragging) {
        this.emitValue('input');
      }

      if (this.dragging) {
        this.emitValue('dragging');
      }
    },
    sliderSize: function sliderSize() {
      return this.$refs.slider.getBoundingClientRect().width;
    },
    onSliderClick: function onSliderClick(event) {
      if (this.disabled || this.isTrackClickDisabled) return;
      var sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
      var percent = (event.clientX - sliderOffsetLeft) / this.sliderSize() * 100;
      var targetValue = this.min + percent * (this.max - this.min) / 100;
      var diffFirst = Math.abs(targetValue - this.value1);

      if (!this.isRange) {
        if (diffFirst < this.step / 2) return;
        this.$refs.button1.setPosition(percent);
      } else {
        var diffSecond = Math.abs(targetValue - this.value2);

        if (diffFirst <= diffSecond) {
          if (diffFirst < this.step / 2) return;
          this.$refs['button1'].setPosition(percent);
        } else {
          if (diffSecond < this.step / 2) return;
          this.$refs['button2'].setPosition(percent);
        }
      }

      this.emitValue('change');
    },
    onDragStart: function onDragStart() {
      this.dragging = true;
      this.$emit('dragstart');
    },
    onDragEnd: function onDragEnd() {
      var _this = this;

      this.isTrackClickDisabled = true;
      setTimeout(function () {
        // avoid triggering onSliderClick after dragend
        _this.isTrackClickDisabled = false;
      }, 0);
      this.dragging = false;
      this.$emit('dragend');

      if (this.lazy) {
        this.emitValue('input');
      }
    },
    emitValue: function emitValue(type) {
      this.$emit(type, this.isRange ? [this.minValue, this.maxValue] : this.value1);
    }
  },
  created: function created() {
    this.isThumbReversed = false;
    this.isTrackClickDisabled = false;
    this.setValues(this.value);
  }
};

const _hoisted_1$8 = {
  class: "b-slider-track",
  ref: "slider"
};

function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_slider_tick = resolveComponent("b-slider-tick");
  const _component_b_slider_thumb = resolveComponent("b-slider-thumb");

  return (openBlock(), createBlock("div", {
    class: ["b-slider", [$props.size, $props.type, $options.rootClasses ]],
    onClick: _cache[3] || (_cache[3] = (...args) => ($options.onSliderClick && $options.onSliderClick(...args)))
  }, [
    createVNode("div", _hoisted_1$8, [
      createVNode("div", {
        class: "b-slider-fill",
        style: $options.barStyle
      }, null, 4 /* STYLE */),
      ($props.ticks)
        ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($options.tickValues, (val, key) => {
            return (openBlock(), createBlock(_component_b_slider_tick, {
              key: key,
              value: val
            }, null, 8 /* PROPS */, ["value"]))
          }), 128 /* KEYED_FRAGMENT */))
        : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default"),
      createVNode(_component_b_slider_thumb, {
        "tooltip-always": $props.tooltipAlways,
        modelValue: $data.value1,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.value1 = $event)),
        type: $options.newTooltipType,
        tooltip: $props.tooltip,
        "custom-formatter": $props.customFormatter,
        indicator: $props.indicator,
        format: $props.format,
        locale: $props.locale,
        ref: "button1",
        role: "slider",
        "aria-valuenow": $data.value1,
        "aria-valuemin": $props.min,
        "aria-valuemax": $props.max,
        "aria-orientation": "horizontal",
        "aria-label": Array.isArray($props.ariaLabel) ? $props.ariaLabel[0] : $props.ariaLabel,
        "aria-disabled": $props.disabled,
        onDragstart: $options.onDragStart,
        onDragend: $options.onDragEnd
      }, null, 8 /* PROPS */, ["tooltip-always", "modelValue", "type", "tooltip", "custom-formatter", "indicator", "format", "locale", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-disabled", "onDragstart", "onDragend"]),
      ($data.isRange)
        ? (openBlock(), createBlock(_component_b_slider_thumb, {
            key: 1,
            "tooltip-always": $props.tooltipAlways,
            modelValue: $data.value2,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($data.value2 = $event)),
            type: $options.newTooltipType,
            tooltip: $props.tooltip,
            "custom-formatter": $props.customFormatter,
            indicator: $props.indicator,
            format: $props.format,
            locale: $props.locale,
            ref: "button2",
            role: "slider",
            "aria-valuenow": $data.value2,
            "aria-valuemin": $props.min,
            "aria-valuemax": $props.max,
            "aria-orientation": "horizontal",
            "aria-label": Array.isArray($props.ariaLabel) ? $props.ariaLabel[1] : '',
            "aria-disabled": $props.disabled,
            onDragstart: $options.onDragStart,
            onDragend: $options.onDragEnd
          }, null, 8 /* PROPS */, ["tooltip-always", "modelValue", "type", "tooltip", "custom-formatter", "indicator", "format", "locale", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-disabled", "onDragstart", "onDragend"]))
        : createCommentVNode("v-if", true)
    ], 512 /* NEED_PATCH */)
  ], 2 /* CLASS */))
}

script$f.render = render$f;
script$f.__file = "src/components/slider/Slider.vue";

var Plugin$b = {
  install: function install(Vue) {
    registerComponent(Vue, script$f);
    registerComponent(Vue, script$g);
  }
};
use(Plugin$b);

var script$e = {
  name: 'BSnackbar',
  mixins: [NoticeMixin],
  props: {
    actionText: {
      type: String,
      default: 'OK'
    },
    onAction: {
      type: Function,
      default: function _default() {}
    },
    cancelText: {
      type: String | null,
      default: null
    }
  },
  data: function data() {
    return {
      newDuration: this.duration || config.defaultSnackbarDuration
    };
  },
  methods: {
    /**
    * Click listener.
    * Call action prop before closing (from Mixin).
    */
    action: function action() {
      this.onAction();
      this.close();
    }
  }
};

const _hoisted_1$7 = { class: "button" };
const _hoisted_2$5 = { class: "button" };

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Transition, {
    "enter-active-class": _ctx.transition.enter,
    "leave-active-class": _ctx.transition.leave
  }, {
    default: withCtx(() => [
      withDirectives(createVNode("div", {
        class: ["snackbar", [_ctx.type,_ctx.position]],
        role: $props.actionText ? 'alertdialog' : 'alert'
      }, [
        (_ctx.$slots.default)
          ? renderSlot(_ctx.$slots, "default", { key: 0 })
          : (openBlock(), createBlock("div", {
              key: 1,
              class: "text",
              innerHTML: _ctx.message
            }, null, 8 /* PROPS */, ["innerHTML"])),
        ($props.cancelText)
          ? (openBlock(), createBlock("div", {
              key: 2,
              class: "action is-light is-cancel",
              onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.close && _ctx.close(...args)))
            }, [
              createVNode("button", _hoisted_1$7, toDisplayString($props.cancelText), 1 /* TEXT */)
            ]))
          : createCommentVNode("v-if", true),
        ($props.actionText)
          ? (openBlock(), createBlock("div", {
              key: 3,
              class: ["action", _ctx.type],
              onClick: _cache[2] || (_cache[2] = (...args) => ($options.action && $options.action(...args)))
            }, [
              createVNode("button", _hoisted_2$5, toDisplayString($props.actionText), 1 /* TEXT */)
            ], 2 /* CLASS */))
          : createCommentVNode("v-if", true)
      ], 10 /* CLASS, PROPS */, ["role"]), [
        [vShow, _ctx.isActive]
      ])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["enter-active-class", "leave-active-class"]))
}

script$e.render = render$e;
script$e.__file = "src/components/snackbar/Snackbar.vue";

var localVueInstance$1;
var SnackbarProgrammatic = {
  open: function open(params) {
    var parent;

    if (typeof params === 'string') {
      params = {
        message: params
      };
    }

    var defaultParam = {
      type: 'is-success',
      position: config.defaultSnackbarPosition || 'is-bottom-right'
    };

    if (params.parent) {
      parent = params.parent;
      delete params.parent;
    }

    var slot;

    if (Array.isArray(params.message)) {
      slot = params.message;
      delete params.message;
    }

    var propsData = merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance$1 || VueInstance;
    var SnackbarComponent = vm.extend(script$e);
    var component = new SnackbarComponent({
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
var Plugin$a = {
  install: function install(Vue) {
    localVueInstance$1 = Vue;
    registerComponentProgrammatic(Vue, 'snackbar', SnackbarProgrammatic);
  }
};
use(Plugin$a);

var SlotComponent = {
  name: 'BSlotComponent',
  props: {
    component: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      default: 'default'
    },
    scoped: {
      type: Boolean
    },
    props: {
      type: Object
    },
    tag: {
      type: String,
      default: 'div'
    },
    event: {
      type: String,
      default: 'hook:updated'
    }
  },
  methods: {
    refresh: function refresh() {
      this.$forceUpdate();
    }
  },
  created: function created() {
    if (isVueComponent(this.component)) {
      this.component.$on(this.event, this.refresh);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (isVueComponent(this.component)) {
      this.component.$off(this.event, this.refresh);
    }
  },
  render: function render() {
    if (isVueComponent(this.component)) {
      var scopedSlots = this.component.scoped ? this.component.$scopedSlots | this.component.$slots : this.component.$slots;
      return h(this.tag, {}, getSlot$1(scopedSlots, this.name, this.props));
    }
  }
};

var TabbedMixin = (function (cmp) {
  var _components;

  return {
    mixins: [ProviderParentMixin(cmp, Sorted$1)],
    components: (_components = {}, _defineProperty(_components, script$11.name, script$11), _defineProperty(_components, SlotComponent.name, SlotComponent), _components),
    props: {
      value: {
        type: [String, Number],
        default: undefined
      },
      size: String,
      animated: {
        type: Boolean,
        default: true
      },
      animation: String,
      vertical: {
        type: Boolean,
        default: false
      },
      position: String,
      destroyOnHide: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        activeId: this.value,
        // Internal state
        defaultSlots: [],
        contentHeight: 0,
        isTransitioning: false
      };
    },
    mounted: function mounted() {
      if (typeof this.value === 'number') {
        // Backward compatibility: converts the index value to an id
        var value = bound(this.value, 0, this.items.length - 1);
        this.activeId = this.items[value].value;
      } else {
        this.activeId = this.value;
      }
    },
    computed: {
      activeItem: function activeItem() {
        var _this = this;

        return this.activeId === undefined ? this.items[0] : this.activeId === null ? null : this.childItems.find(function (i) {
          return i.value === _this.activeId;
        });
      },
      items: function items() {
        return this.sortedItems;
      }
    },
    watch: {
      /**
       * When v-model is changed set the new active tab.
       */
      value: function value(_value) {
        if (typeof _value === 'number') {
          // Backward compatibility: converts the index value to an id
          _value = bound(_value, 0, this.items.length - 1);
          this.activeId = this.items[_value].value;
        } else {
          this.activeId = _value;
        }
      },

      /**
       * Sync internal state with external state
       */
      activeId: function activeId(val, oldValue) {
        var oldTab = oldValue !== undefined && oldValue !== null ? this.childItems.find(function (i) {
          return i.value === oldValue;
        }) : null;

        if (oldTab && this.activeItem) {
          oldTab.deactivate(this.activeItem.index);
          this.activeItem.activate(oldTab.index);
        }

        val = this.activeItem ? typeof this.value === 'number' ? this.items.indexOf(this.activeItem) : this.activeItem.value : undefined;

        if (val !== this.value) {
          this.$emit('input', val);
        }
      }
    },
    methods: {
      /**
      * Child click listener, emit input event and change active child.
      */
      childClick: function childClick(child) {
        this.activeId = child.value;
      }
    }
  };
});

var script$d = {
  name: 'BSteps',
  components: _defineProperty({}, script$11.name, script$11),
  mixins: [TabbedMixin('step')],
  props: {
    type: [String, Object],
    iconPack: String,
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
    hasNavigation: {
      type: Boolean,
      default: true
    },
    labelPosition: {
      type: String,
      validator: function validator(value) {
        return ['bottom', 'right', 'left'].indexOf(value) > -1;
      },
      default: 'bottom'
    },
    rounded: {
      type: Boolean,
      default: true
    },
    mobileMode: {
      type: String,
      validator: function validator(value) {
        return ['minimalist', 'compact'].indexOf(value) > -1;
      },
      default: 'minimalist'
    },
    ariaNextLabel: String,
    ariaPreviousLabel: String
  },
  computed: {
    // Override mixin implementation to always have a value
    activeItem: function activeItem() {
      var _this = this;

      return this.childItems.filter(function (i) {
        return i.value === _this.activeId;
      })[0] || this.items[0];
    },
    wrapperClasses: function wrapperClasses() {
      return [this.size, _defineProperty({
        'is-vertical': this.vertical
      }, this.position, this.position && this.vertical)];
    },
    mainClasses: function mainClasses() {
      return [this.type, _defineProperty({
        'has-label-right': this.labelPosition === 'right',
        'has-label-left': this.labelPosition === 'left',
        'is-animated': this.animated,
        'is-rounded': this.rounded
      }, "mobile-".concat(this.mobileMode), this.mobileMode !== null)];
    },

    /**
     * Check if previous button is available.
     */
    hasPrev: function hasPrev() {
      return !!this.prevItem;
    },

    /**
     * Retrieves the next visible item
     */
    nextItem: function nextItem() {
      var nextItem = null;
      var idx = this.activeItem ? this.items.indexOf(this.activeItem) + 1 : 0;

      for (; idx < this.items.length; idx++) {
        if (this.items[idx].visible) {
          nextItem = this.items[idx];
          break;
        }
      }

      return nextItem;
    },

    /**
     * Retrieves the previous visible item
     */
    prevItem: function prevItem() {
      if (!this.activeItem) {
        return null;
      }

      var prevItem = null;

      for (var idx = this.items.indexOf(this.activeItem) - 1; idx >= 0; idx--) {
        if (this.items[idx].visible) {
          prevItem = this.items[idx];
          break;
        }
      }

      return prevItem;
    },

    /**
     * Check if next button is available.
     */
    hasNext: function hasNext() {
      return !!this.nextItem;
    },
    navigationProps: function navigationProps() {
      return {
        previous: {
          disabled: !this.hasPrev,
          action: this.prev
        },
        next: {
          disabled: !this.hasNext,
          action: this.next
        }
      };
    }
  },
  methods: {
    /**
     * Return if the step should be clickable or not.
     */
    isItemClickable: function isItemClickable(stepItem) {
      if (stepItem.clickable === undefined) {
        return stepItem.index < this.activeItem.index;
      }

      return stepItem.clickable;
    },

    /**
     * Previous button click listener.
     */
    prev: function prev() {
      if (this.hasPrev) {
        this.activeId = this.prevItem.value;
      }
    },

    /**
     * Previous button click listener.
     */
    next: function next() {
      if (this.hasNext) {
        this.activeId = this.nextItem.value;
      }
    }
  }
};

const _hoisted_1$6 = { class: "step-items" };
const _hoisted_2$4 = { class: "step-marker" };
const _hoisted_3$3 = { key: 1 };
const _hoisted_4$3 = { class: "step-details" };
const _hoisted_5$2 = { class: "step-title" };
const _hoisted_6$1 = {
  key: 0,
  class: "step-navigation"
};

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock("div", {
    class: ["b-steps", $options.wrapperClasses]
  }, [
    createVNode("nav", {
      class: ["steps", $options.mainClasses]
    }, [
      createVNode("ul", _hoisted_1$6, [
        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (childItem) => {
          return withDirectives((openBlock(), createBlock("li", {
            key: childItem.value,
            class: ["step-item", [childItem.type || $props.type, childItem.headerClass, {
                        'is-active': childItem.isActive,
                        'is-previous': $options.activeItem.index > childItem.index
                }]]
          }, [
            createVNode("a", {
              class: ["step-link", {'is-clickable': $options.isItemClickable(childItem)}],
              onClick: $event => ($options.isItemClickable(childItem) && _ctx.childClick(childItem))
            }, [
              createVNode("div", _hoisted_2$4, [
                (childItem.icon)
                  ? (openBlock(), createBlock(_component_b_icon, {
                      key: 0,
                      icon: childItem.icon,
                      pack: childItem.iconPack,
                      size: _ctx.size
                    }, null, 8 /* PROPS */, ["icon", "pack", "size"]))
                  : (childItem.step)
                    ? (openBlock(), createBlock("span", _hoisted_3$3, toDisplayString(childItem.step), 1 /* TEXT */))
                    : createCommentVNode("v-if", true)
              ]),
              createVNode("div", _hoisted_4$3, [
                createVNode("span", _hoisted_5$2, toDisplayString(childItem.label), 1 /* TEXT */)
              ])
            ], 10 /* CLASS, PROPS */, ["onClick"])
          ], 2 /* CLASS */)), [
            [vShow, childItem.visible]
          ])
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ], 2 /* CLASS */),
    createVNode("section", {
      class: ["step-content", {'is-transitioning': _ctx.isTransitioning}]
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2 /* CLASS */),
    renderSlot(_ctx.$slots, "navigation", {
      previous: $options.navigationProps.previous,
      next: $options.navigationProps.next
    }, () => [
      ($props.hasNavigation)
        ? (openBlock(), createBlock("nav", _hoisted_6$1, [
            createVNode("a", {
              role: "button",
              class: "pagination-previous",
              disabled: $options.navigationProps.previous.disabled ? '' : null,
              onClick: _cache[1] || (_cache[1] = withModifiers((...args) => ($options.navigationProps.previous.action && $options.navigationProps.previous.action(...args)), ["prevent"])),
              "aria-label": $props.ariaPreviousLabel
            }, [
              createVNode(_component_b_icon, {
                icon: $props.iconPrev,
                pack: $props.iconPack,
                both: "",
                "aria-hidden": "true"
              }, null, 8 /* PROPS */, ["icon", "pack"])
            ], 8 /* PROPS */, ["disabled", "aria-label"]),
            createVNode("a", {
              role: "button",
              class: "pagination-next",
              disabled: $options.navigationProps.next.disabled ? '' : null,
              onClick: _cache[2] || (_cache[2] = withModifiers((...args) => ($options.navigationProps.next.action && $options.navigationProps.next.action(...args)), ["prevent"])),
              "aria-label": $props.ariaNextLabel
            }, [
              createVNode(_component_b_icon, {
                icon: $props.iconNext,
                pack: $props.iconPack,
                both: "",
                "aria-hidden": "true"
              }, null, 8 /* PROPS */, ["icon", "pack"])
            ], 8 /* PROPS */, ["disabled", "aria-label"])
          ]))
        : createCommentVNode("v-if", true)
    ])
  ], 2 /* CLASS */))
}

script$d.render = render$d;
script$d.__file = "src/components/steps/Steps.vue";

function render$c(_ctx, _cache) {
  return (_ctx.parent.animated)
    ? (openBlock(), createBlock(Transition, {
        key: 0,
        name: _ctx.parent.animated ? _ctx.parent.animation || _ctx.transitionName : null,
        onBeforeEnter: _cache[1] || (_cache[1] = $event => (_ctx.parent.isTransitioning = true)),
        onAfterEnter: _cache[2] || (_cache[2] = $event => (_ctx.parent.isTransitioning = false))
      }, {
        default: withCtx(() => [
          (_ctx.parent.destroyOnHide ? _ctx.show : true)
            ? withDirectives((openBlock(), createBlock("div", {
                key: 0,
                class: _ctx.elementClass
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2 /* CLASS */)), [
                [vShow, _ctx.show]
              ])
            : createCommentVNode("v-if", true)
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["name"]))
    : (openBlock(), createBlock(Fragment, { key: 1 }, [
        (_ctx.parent.destroyOnHide ? _ctx.show : true)
          ? withDirectives((openBlock(), createBlock("div", {
              key: 0,
              class: _ctx.elementClass
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2 /* CLASS */)), [
              [vShow, _ctx.show]
            ])
          : createCommentVNode("v-if", true)
      ], 64 /* STABLE_FRAGMENT */))
}

const script$c = {};


script$c.render = render$c;
script$c.__file = "src/utils/TabbedChildMixinRender.vue";

var TabbedChildMixin = (function (parentCmp) {
  return defineComponent({
    mixins: [InjectedChildMixin(parentCmp, Sorted), script$c],
    props: {
      label: String,
      icon: String,
      iconPack: String,
      visible: {
        type: Boolean,
        default: true
      },
      value: {
        type: String,
        default: function _default() {
          return Math.random().toString();
        }
      },
      headerClass: {
        type: [String, Array, Object],
        default: null
      }
    },
    data: function data() {
      return {
        transitionName: null,
        elementClass: 'item'
      };
    },
    computed: {
      isActive: function isActive() {
        return this.parent.activeItem === this;
      },
      show: function show() {
        return this.isActive && this.visible;
      }
    },
    methods: {
      /**
       * Activate element, alter animation name based on the index.
       */
      activate: function activate(oldIndex) {
        this.transitionName = this.index < oldIndex ? this.parent.vertical ? 'slide-down' : 'slide-next' : this.parent.vertical ? 'slide-up' : 'slide-prev';
      },

      /**
       * Deactivate element, alter animation name based on the index.
       */
      deactivate: function deactivate(newIndex) {
        this.transitionName = newIndex < this.index ? this.parent.vertical ? 'slide-down' : 'slide-next' : this.parent.vertical ? 'slide-up' : 'slide-prev';
      }
    }
  });
});

var script$b = {
  name: 'BStepItem',
  mixins: [TabbedChildMixin('step')],
  props: {
    step: [String, Number],
    type: [String, Object],
    clickable: {
      type: Boolean,
      default: undefined
    }
  },
  data: function data() {
    return {
      elementClass: 'step-item'
    };
  }
};

const render$b = () => {};


script$b.render = render$b;
script$b.__file = "src/components/steps/StepItem.vue";

var Plugin$9 = {
  install: function install(Vue) {
    registerComponent(Vue, script$d);
    registerComponent(Vue, script$b);
  }
};
use(Plugin$9);

var script$a = {
  name: 'BSwitch',
  props: {
    value: [String, Number, Boolean, Function, Object, Array, Date],
    nativeValue: [String, Number, Boolean, Function, Object, Array, Date],
    disabled: Boolean,
    type: String,
    passiveType: String,
    name: String,
    required: Boolean,
    size: String,
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array, Date],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array, Date],
      default: false
    },
    rounded: {
      type: Boolean,
      default: function _default() {
        return config.defaultSwitchRounded;
      }
    },
    outlined: {
      type: Boolean,
      default: false
    },
    leftLabel: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      newValue: this.value,
      isMouseDown: false
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
    newClass: function newClass() {
      return [this.size, {
        'is-disabled': this.disabled,
        'is-rounded': this.rounded,
        'is-outlined': this.outlined,
        'has-left-label': this.leftLabel
      }];
    },
    checkClasses: function checkClasses() {
      return [{
        'is-elastic': this.isMouseDown && !this.disabled
      }, this.passiveType && "".concat(this.passiveType, "-passive"), this.type];
    }
  },
  watch: {
    /**
    * When v-model change, set internal value.
    */
    value: function value(_value) {
      this.newValue = _value;
    }
  },
  methods: {
    focus: function focus() {
      // MacOS FireFox and Safari do not focus when clicked
      this.$refs.input.focus();
    }
  }
};

const _hoisted_1$5 = { class: "control-label" };

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("label", {
    class: ["switch", $options.newClass],
    ref: "label",
    disabled: $props.disabled ? '' : null,
    onClick: _cache[3] || (_cache[3] = (...args) => ($options.focus && $options.focus(...args))),
    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers($event => (_ctx.$refs.label.click()), ["prevent"]), ["enter"])),
    onMousedown: _cache[5] || (_cache[5] = $event => ($data.isMouseDown = true)),
    onMouseup: _cache[6] || (_cache[6] = $event => ($data.isMouseDown = false)),
    onMouseout: _cache[7] || (_cache[7] = $event => ($data.isMouseDown = false)),
    onBlur: _cache[8] || (_cache[8] = $event => ($data.isMouseDown = false))
  }, [
    withDirectives(createVNode("input", {
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($options.computedValue = $event)),
      type: "checkbox",
      ref: "input",
      onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"])),
      disabled: $props.disabled ? '' : null,
      name: $props.name,
      required: $props.required,
      value: $props.nativeValue,
      "true-value": $props.trueValue,
      "false-value": $props.falseValue
    }, null, 8 /* PROPS */, ["disabled", "name", "required", "value", "true-value", "false-value"]), [
      [vModelCheckbox, $options.computedValue]
    ]),
    createVNode("span", {
      class: ["check", $options.checkClasses]
    }, null, 2 /* CLASS */),
    createVNode("span", _hoisted_1$5, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled"]))
}

script$a.render = render$a;
script$a.__file = "src/components/switch/Switch.vue";

var Plugin$8 = {
  install: function install(Vue) {
    registerComponent(Vue, script$a);
  }
};
use(Plugin$8);

function debounce (func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

var _components$2;
var script$9 = {
  name: 'BTableMobileSort',
  components: (_components$2 = {}, _defineProperty(_components$2, script$N.name, script$N), _defineProperty(_components$2, script$11.name, script$11), _components$2),
  props: {
    currentSortColumn: Object,
    sortMultipleData: Array,
    isAsc: Boolean,
    columns: Array,
    placeholder: String,
    iconPack: String,
    sortIcon: {
      type: String,
      default: 'arrow-up'
    },
    sortIconSize: {
      type: String,
      default: 'is-small'
    },
    sortMultiple: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      sortMultipleSelect: '',
      mobileSort: this.currentSortColumn,
      defaultEvent: {
        shiftKey: true,
        altKey: true,
        ctrlKey: true
      },
      ignoreSort: false
    };
  },
  computed: {
    showPlaceholder: function showPlaceholder() {
      var _this = this;

      return !this.columns || !this.columns.some(function (column) {
        return column === _this.mobileSort;
      });
    }
  },
  watch: {
    sortMultipleSelect: function sortMultipleSelect(column) {
      if (this.ignoreSort) {
        this.ignoreSort = false;
      } else {
        this.$emit('sort', column, this.defaultEvent);
      }
    },
    mobileSort: function mobileSort(column) {
      if (this.currentSortColumn === column) return;
      this.$emit('sort', column, this.defaultEvent);
    },
    currentSortColumn: function currentSortColumn(column) {
      this.mobileSort = column;
    }
  },
  methods: {
    removePriority: function removePriority() {
      var _this2 = this;

      this.$emit('removePriority', this.sortMultipleSelect); // ignore the watcher to sort when we just change whats displayed in the select
      // otherwise the direction will be flipped
      // The sort event is already triggered by the emit

      this.ignoreSort = true; // Select one of the other options when we reset one

      var remainingFields = this.sortMultipleData.filter(function (data) {
        return data.field !== _this2.sortMultipleSelect.field;
      }).map(function (data) {
        return data.field;
      });
      this.sortMultipleSelect = this.columns.filter(function (column) {
        return remainingFields.includes(column.field);
      })[0];
    },
    getSortingObjectOfColumn: function getSortingObjectOfColumn(column) {
      return this.sortMultipleData.filter(function (i) {
        return i.field === column.field;
      })[0];
    },
    columnIsDesc: function columnIsDesc(column) {
      var sortingObject = this.getSortingObjectOfColumn(column);

      if (sortingObject) {
        return !!(sortingObject.order && sortingObject.order === 'desc');
      }

      return true;
    },
    getLabel: function getLabel(column) {
      var sortingObject = this.getSortingObjectOfColumn(column);

      if (sortingObject) {
        return column.label + '(' + (this.sortMultipleData.indexOf(sortingObject) + 1) + ')';
      }

      return column.label;
    },
    sort: function sort() {
      this.$emit('sort', this.sortMultiple ? this.sortMultipleSelect : this.mobileSort, this.defaultEvent);
    }
  }
};

const _hoisted_1$4 = { class: "field table-mobile-sort" };
const _hoisted_2$3 = { class: "field has-addons" };
const _hoisted_3$2 = /*#__PURE__*/createTextVNode(" ↓ ");
const _hoisted_4$2 = /*#__PURE__*/createTextVNode(" ↑ ");
const _hoisted_5$1 = { class: "control" };

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_select = resolveComponent("b-select");
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock("div", _hoisted_1$4, [
    createVNode("div", _hoisted_2$3, [
      ($props.sortMultiple)
        ? (openBlock(), createBlock(_component_b_select, {
            key: 0,
            modelValue: $data.sortMultipleSelect,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.sortMultipleSelect = $event)),
            expanded: ""
          }, {
            default: withCtx(() => [
              (_ctx.column.sortable)
                ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.columns, (column, index) => {
                    return (openBlock(), createBlock("option", {
                      key: index,
                      value: column
                    }, [
                      createTextVNode(toDisplayString($options.getLabel(column)) + " ", 1 /* TEXT */),
                      ($options.getSortingObjectOfColumn(column))
                        ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            ($options.columnIsDesc(column))
                              ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  _hoisted_3$2
                                ], 64 /* STABLE_FRAGMENT */))
                              : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  _hoisted_4$2
                                ], 64 /* STABLE_FRAGMENT */))
                          ], 64 /* STABLE_FRAGMENT */))
                        : createCommentVNode("v-if", true)
                    ], 8 /* PROPS */, ["value"]))
                  }), 128 /* KEYED_FRAGMENT */))
                : createCommentVNode("v-if", true)
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["modelValue"]))
        : (openBlock(), createBlock(_component_b_select, {
            key: 1,
            modelValue: $data.mobileSort,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($data.mobileSort = $event)),
            expanded: ""
          }, {
            default: withCtx(() => [
              ($props.placeholder)
                ? withDirectives((openBlock(), createBlock("option", {
                    key: 0,
                    value: {},
                    selected: "",
                    disabled: "",
                    hidden: ""
                  }, toDisplayString($props.placeholder), 513 /* TEXT, NEED_PATCH */)), [
                    [vShow, $options.showPlaceholder]
                  ])
                : createCommentVNode("v-if", true),
              (_ctx.column.sortable)
                ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList($props.columns, (column, index) => {
                    return (openBlock(), createBlock("option", {
                      key: index,
                      value: column
                    }, toDisplayString(column.label), 9 /* TEXT, PROPS */, ["value"]))
                  }), 128 /* KEYED_FRAGMENT */))
                : createCommentVNode("v-if", true)
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["modelValue"])),
      createVNode("div", _hoisted_5$1, [
        ($props.sortMultiple && $props.sortMultipleData.length > 0)
          ? (openBlock(), createBlock(Fragment, { key: 0 }, [
              createVNode("button", {
                class: "button is-primary",
                onClick: _cache[3] || (_cache[3] = (...args) => ($options.sort && $options.sort(...args)))
              }, [
                createVNode(_component_b_icon, {
                  class: { 'is-desc': $options.columnIsDesc($data.sortMultipleSelect) },
                  icon: $props.sortIcon,
                  pack: $props.iconPack,
                  size: $props.sortIconSize,
                  both: ""
                }, null, 8 /* PROPS */, ["class", "icon", "pack", "size"])
              ]),
              createVNode("button", {
                class: "button is-primary",
                onClick: _cache[4] || (_cache[4] = (...args) => ($options.removePriority && $options.removePriority(...args)))
              }, [
                createVNode(_component_b_icon, {
                  icon: "delete",
                  size: $props.sortIconSize,
                  both: ""
                }, null, 8 /* PROPS */, ["size"])
              ])
            ], 64 /* STABLE_FRAGMENT */))
          : (!$props.sortMultiple)
            ? (openBlock(), createBlock("button", {
                key: 1,
                class: "button is-primary",
                onClick: _cache[5] || (_cache[5] = (...args) => ($options.sort && $options.sort(...args)))
              }, [
                withDirectives(createVNode(_component_b_icon, {
                  class: { 'is-desc': !$props.isAsc },
                  icon: $props.sortIcon,
                  pack: $props.iconPack,
                  size: $props.sortIconSize,
                  both: ""
                }, null, 8 /* PROPS */, ["class", "icon", "pack", "size"]), [
                  [vShow, $props.currentSortColumn === $data.mobileSort]
                ])
              ]))
            : createCommentVNode("v-if", true)
      ])
    ])
  ]))
}

script$9.render = render$9;
script$9.__file = "src/components/table/TableMobileSort.vue";

var script$8 = {
  name: 'BTableColumn',
  inject: {
    $table: {
      name: '$table',
      default: false
    }
  },
  props: {
    label: String,
    customKey: [String, Number],
    field: String,
    meta: [String, Number, Boolean, Function, Object, Array],
    width: [Number, String],
    numeric: Boolean,
    centered: Boolean,
    searchable: Boolean,
    sortable: Boolean,
    visible: {
      type: Boolean,
      default: true
    },
    subheading: [String, Number],
    customSort: Function,
    customSearch: Function,
    sticky: Boolean,
    headerSelectable: Boolean,
    headerClass: String,
    cellClass: String
  },
  data: function data() {
    return {
      newKey: this.customKey || this.label,
      _isTableColumn: true
    };
  },
  computed: {
    rootClasses: function rootClasses() {
      return [this.cellClass, {
        'has-text-right': this.numeric && !this.centered,
        'has-text-centered': this.centered,
        'is-sticky': this.sticky
      }];
    },
    style: function style() {
      return {
        width: toCssWidth(this.width)
      };
    },
    hasDefaultSlot: function hasDefaultSlot() {
      return !!this.$scopedSlots.default;
    },

    /**
     * Return if column header is un-selectable
     */
    isHeaderUnSelectable: function isHeaderUnSelectable() {
      return !this.headerSelectable && this.sortable;
    }
  },
  created: function created() {
    if (!this.$table) {
      this.$destroy();
      throw new Error('You should wrap bTableColumn on a bTable');
    }

    this.$table.refreshSlots();
  },
  render: function render() {
    // renderless
    return null;
  }
};

const render$8 = () => {};


script$8.render = render$8;
script$8.__file = "src/components/table/TableColumn.vue";

var script$7 = {
  name: 'BTablePagination',
  components: _defineProperty({}, script$q.name, script$q),
  props: {
    paginated: Boolean,
    total: [Number, String],
    perPage: [Number, String],
    currentPage: [Number, String],
    paginationSimple: Boolean,
    paginationSize: String,
    rounded: Boolean,
    iconPack: String,
    ariaNextLabel: String,
    ariaPreviousLabel: String,
    ariaPageLabel: String,
    ariaCurrentLabel: String
  },
  data: function data() {
    return {
      newCurrentPage: this.currentPage
    };
  },
  watch: {
    currentPage: function currentPage(newVal) {
      this.newCurrentPage = newVal;
    }
  },
  methods: {
    /**
    * Paginator change listener.
    */
    pageChanged: function pageChanged(page) {
      this.newCurrentPage = page > 0 ? page : 1;
      this.$emit('update:currentPage', this.newCurrentPage);
      this.$emit('page-change', this.newCurrentPage);
    }
  }
};

const _hoisted_1$3 = { class: "top level" };
const _hoisted_2$2 = { class: "level-left" };
const _hoisted_3$1 = { class: "level-right" };
const _hoisted_4$1 = {
  key: 0,
  class: "level-item"
};

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_pagination = resolveComponent("b-pagination");

  return (openBlock(), createBlock("div", _hoisted_1$3, [
    createVNode("div", _hoisted_2$2, [
      renderSlot(_ctx.$slots, "default")
    ]),
    createVNode("div", _hoisted_3$1, [
      ($props.paginated)
        ? (openBlock(), createBlock("div", _hoisted_4$1, [
            createVNode(_component_b_pagination, {
              "icon-pack": $props.iconPack,
              total: $props.total,
              "per-page": $props.perPage,
              simple: $props.paginationSimple,
              size: $props.paginationSize,
              current: $data.newCurrentPage,
              rounded: $props.rounded,
              onChange: $options.pageChanged,
              "aria-next-label": $props.ariaNextLabel,
              "aria-previous-label": $props.ariaPreviousLabel,
              "aria-page-label": $props.ariaPageLabel,
              "aria-current-label": $props.ariaCurrentLabel
            }, null, 8 /* PROPS */, ["icon-pack", "total", "per-page", "simple", "size", "current", "rounded", "onChange", "aria-next-label", "aria-previous-label", "aria-page-label", "aria-current-label"])
          ]))
        : createCommentVNode("v-if", true)
    ])
  ]))
}

script$7.render = render$7;
script$7.__file = "src/components/table/TablePagination.vue";

var _components$1;
var script$6 = {
  name: 'BTable',
  components: (_components$1 = {}, _defineProperty(_components$1, script$W.name, script$W), _defineProperty(_components$1, script$11.name, script$11), _defineProperty(_components$1, script$10.name, script$10), _defineProperty(_components$1, script$D.name, script$D), _defineProperty(_components$1, SlotComponent.name, SlotComponent), _defineProperty(_components$1, script$9.name, script$9), _defineProperty(_components$1, script$8.name, script$8), _defineProperty(_components$1, script$7.name, script$7), _components$1),
  inheritAttrs: false,
  provide: function provide() {
    return {
      $table: this
    };
  },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    bordered: Boolean,
    striped: Boolean,
    narrowed: Boolean,
    hoverable: Boolean,
    loading: Boolean,
    detailed: Boolean,
    checkable: Boolean,
    headerCheckable: {
      type: Boolean,
      default: true
    },
    checkboxPosition: {
      type: String,
      default: 'left',
      validator: function validator(value) {
        return ['left', 'right'].indexOf(value) >= 0;
      }
    },
    stickyCheckbox: {
      type: Boolean,
      default: false
    },
    selected: Object,
    isRowSelectable: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    focusable: Boolean,
    customIsChecked: Function,
    isRowCheckable: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    checkedRows: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    mobileCards: {
      type: Boolean,
      default: true
    },
    defaultSort: [String, Array],
    defaultSortDirection: {
      type: String,
      default: 'asc'
    },
    sortIcon: {
      type: String,
      default: 'arrow-up'
    },
    sortIconSize: {
      type: String,
      default: 'is-small'
    },
    sortMultiple: {
      type: Boolean,
      default: false
    },
    sortMultipleData: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    sortMultipleKey: {
      type: String,
      default: null
    },
    paginated: Boolean,
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: [Number, String],
      default: 20
    },
    showDetailIcon: {
      type: Boolean,
      default: true
    },
    paginationPosition: {
      type: String,
      default: 'bottom',
      validator: function validator(value) {
        return ['bottom', 'top', 'both'].indexOf(value) >= 0;
      }
    },
    paginationRounded: Boolean,
    backendSorting: Boolean,
    backendFiltering: Boolean,
    rowClass: {
      type: Function,
      default: function _default() {
        return '';
      }
    },
    openedDetailed: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    hasDetailedVisible: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    detailKey: {
      type: String,
      default: ''
    },
    detailTransition: {
      type: String,
      default: ''
    },
    customDetailRow: {
      type: Boolean,
      default: false
    },
    backendPagination: Boolean,
    total: {
      type: [Number, String],
      default: 0
    },
    iconPack: String,
    mobileSortPlaceholder: String,
    customRowKey: String,
    draggable: {
      type: Boolean,
      default: false
    },
    scrollable: Boolean,
    ariaNextLabel: String,
    ariaPreviousLabel: String,
    ariaPageLabel: String,
    ariaCurrentLabel: String,
    stickyHeader: Boolean,
    height: [Number, String],
    filtersEvent: {
      type: String,
      default: ''
    },
    cardLayout: Boolean,
    showHeader: {
      type: Boolean,
      default: true
    },
    debounceSearch: Number
  },
  data: function data() {
    return {
      sortMultipleDataLocal: [],
      getValueByPath: getValueByPath,
      visibleDetailRows: this.openedDetailed,
      newData: this.data,
      newDataTotal: this.backendPagination ? this.total : this.data.length,
      newCheckedRows: _toConsumableArray(this.checkedRows),
      lastCheckedRowIndex: null,
      newCurrentPage: this.currentPage,
      currentSortColumn: {},
      isAsc: true,
      filters: {},
      defaultSlots: [],
      firstTimeSort: true,
      // Used by first time initSort
      _isTable: true // Used by TableColumn

    };
  },
  computed: {
    sortMultipleDataComputed: function sortMultipleDataComputed() {
      return this.backendSorting ? this.sortMultipleData : this.sortMultipleDataLocal;
    },
    tableClasses: function tableClasses() {
      return {
        'is-bordered': this.bordered,
        'is-striped': this.striped,
        'is-narrow': this.narrowed,
        'is-hoverable': (this.hoverable || this.focusable) && this.visibleData.length
      };
    },
    tableWrapperClasses: function tableWrapperClasses() {
      return {
        'has-mobile-cards': this.mobileCards,
        'has-sticky-header': this.stickyHeader,
        'is-card-list': this.cardLayout,
        'table-container': this.isScrollable
      };
    },
    tableStyle: function tableStyle() {
      return {
        height: toCssWidth(this.height)
      };
    },

    /**
    * Splitted data based on the pagination.
    */
    visibleData: function visibleData() {
      if (!this.paginated) return this.newData;
      var currentPage = this.newCurrentPage;
      var perPage = this.perPage;

      if (this.newData.length <= perPage) {
        return this.newData;
      } else {
        var start = (currentPage - 1) * perPage;
        var end = parseInt(start, 10) + parseInt(perPage, 10);
        return this.newData.slice(start, end);
      }
    },
    visibleColumns: function visibleColumns() {
      if (!this.newColumns) return this.newColumns;
      return this.newColumns.filter(function (column) {
        return column.visible || column.visible === undefined;
      });
    },

    /**
    * Check if all rows in the page are checked.
    */
    isAllChecked: function isAllChecked() {
      var _this = this;

      var validVisibleData = this.visibleData.filter(function (row) {
        return _this.isRowCheckable(row);
      });
      if (validVisibleData.length === 0) return false;
      var isAllChecked = validVisibleData.some(function (currentVisibleRow) {
        return indexOf(_this.newCheckedRows, currentVisibleRow, _this.customIsChecked) < 0;
      });
      return !isAllChecked;
    },

    /**
    * Check if all rows in the page are checkable.
    */
    isAllUncheckable: function isAllUncheckable() {
      var _this2 = this;

      var validVisibleData = this.visibleData.filter(function (row) {
        return _this2.isRowCheckable(row);
      });
      return validVisibleData.length === 0;
    },

    /**
    * Check if has any sortable column.
    */
    hasSortablenewColumns: function hasSortablenewColumns() {
      return this.newColumns.some(function (column) {
        return column.sortable;
      });
    },

    /**
    * Check if has any searchable column.
    */
    hasSearchablenewColumns: function hasSearchablenewColumns() {
      return this.newColumns.some(function (column) {
        return column.searchable;
      });
    },

    /**
    * Check if has any column using subheading.
    */
    hasCustomSubheadings: function hasCustomSubheadings() {
      if (this.$scopedSlots && this.$scopedSlots.subheading) return true;
      return this.newColumns.some(function (column) {
        return column.subheading || column.$scopedSlots && column.$scopedSlots.subheading;
      });
    },

    /**
    * Return total column count based if it's checkable or expanded
    */
    columnCount: function columnCount() {
      var count = this.visibleColumns.length;
      count += this.checkable ? 1 : 0;
      count += this.detailed && this.showDetailIcon ? 1 : 0;
      return count;
    },

    /**
    * return if detailed row tabled
    * will be with chevron column & icon or not
    */
    showDetailRowIcon: function showDetailRowIcon() {
      return this.detailed && this.showDetailIcon;
    },

    /**
    * return if scrollable table
    */
    isScrollable: function isScrollable() {
      if (this.scrollable) return true;
      if (!this.newColumns) return false;
      return this.newColumns.some(function (column) {
        return column.sticky;
      });
    },
    newColumns: function newColumns() {
      var _this3 = this;

      if (this.columns && this.columns.length) {
        return this.columns.map(function (column) {
          var TableColumnComponent = VueInstance.extend(script$8);
          var component = new TableColumnComponent({
            parent: _this3,
            propsData: column
          });
          component.$scopedSlots = {
            default: function _default(props) {
              var vnode = component.$createElement('span', {
                domProps: {
                  innerHTML: getValueByPath(props.row, column.field)
                }
              });
              return [vnode];
            }
          };
          return component;
        });
      }

      return this.defaultSlots.filter(function (vnode) {
        return vnode.componentInstance && vnode.componentInstance.$data && vnode.componentInstance.$data._isTableColumn;
      }).map(function (vnode) {
        return vnode.componentInstance;
      });
    }
  },
  watch: {
    /**
    * When data prop change:
    *   1. Update internal value.
    *   2. Filter data if it's not backend-filtered.
    *   3. Sort again if it's not backend-sorted.
    *   4. Set new total if it's not backend-paginated.
    */
    data: function data(value) {
      var _this4 = this;

      this.newData = value;

      if (!this.backendFiltering) {
        this.newData = value.filter(function (row) {
          return _this4.isRowFiltered(row);
        });
      }

      if (!this.backendSorting) {
        this.sort(this.currentSortColumn, true);
      }

      if (!this.backendPagination) {
        this.newDataTotal = this.newData.length;
      }
    },

    /**
    * When Pagination total change, update internal total
    * only if it's backend-paginated.
    */
    total: function total(newTotal) {
      if (!this.backendPagination) return;
      this.newDataTotal = newTotal;
    },
    currentPage: function currentPage(newVal) {
      this.newCurrentPage = newVal;
    },
    newCurrentPage: function newCurrentPage(newVal) {
      this.$emit('update:currentPage', newVal);
    },

    /**
    * When checkedRows prop change, update internal value without
    * mutating original data.
    */
    checkedRows: function checkedRows(rows) {
      this.newCheckedRows = _toConsumableArray(rows);
    },

    /*
    newColumns(value) {
        this.checkSort()
    },
    */
    debounceSearch: {
      handler: function handler(value) {
        this.debouncedHandleFiltersChange = debounce(this.handleFiltersChange, value);
      },
      immediate: true
    },
    filters: {
      handler: function handler(value) {
        if (this.debounceSearch) {
          this.debouncedHandleFiltersChange(value);
        } else {
          this.handleFiltersChange(value);
        }
      },
      deep: true
    },

    /**
    * When the user wants to control the detailed rows via props.
    * Or wants to open the details of certain row with the router for example.
    */
    openedDetailed: function openedDetailed(expandedRows) {
      this.visibleDetailRows = expandedRows;
    }
  },
  methods: {
    onFiltersEvent: function onFiltersEvent(event) {
      this.$emit("filters-event-".concat(this.filtersEvent), {
        event: event,
        filters: this.filters
      });
    },
    handleFiltersChange: function handleFiltersChange(value) {
      var _this5 = this;

      if (this.backendFiltering) {
        this.$emit('filters-change', value);
      } else {
        this.newData = this.data.filter(function (row) {
          return _this5.isRowFiltered(row);
        });

        if (!this.backendPagination) {
          this.newDataTotal = this.newData.length;
        }

        if (!this.backendSorting) {
          if (this.sortMultiple && this.sortMultipleDataLocal && this.sortMultipleDataLocal.length > 0) {
            this.doSortMultiColumn();
          } else if (Object.keys(this.currentSortColumn).length > 0) {
            this.doSortSingleColumn(this.currentSortColumn);
          }
        }
      }
    },
    findIndexOfSortData: function findIndexOfSortData(column) {
      var sortObj = this.sortMultipleDataComputed.filter(function (i) {
        return i.field === column.field;
      })[0];
      return this.sortMultipleDataComputed.indexOf(sortObj) + 1;
    },
    removeSortingPriority: function removeSortingPriority(column) {
      if (this.backendSorting) {
        this.$emit('sorting-priority-removed', column.field);
      } else {
        this.sortMultipleDataLocal = this.sortMultipleDataLocal.filter(function (priority) {
          return priority.field !== column.field;
        });
        var formattedSortingPriority = this.sortMultipleDataLocal.map(function (i) {
          return (i.order && i.order === 'desc' ? '-' : '') + i.field;
        });
        this.newData = multiColumnSort(this.newData, formattedSortingPriority);
      }
    },
    resetMultiSorting: function resetMultiSorting() {
      this.sortMultipleDataLocal = [];
      this.currentSortColumn = {};
      this.newData = this.data;
    },

    /**
    * Sort an array by key without mutating original data.
    * Call the user sort function if it was passed.
    */
    sortBy: function sortBy(array, key, fn, isAsc) {
      var sorted = []; // Sorting without mutating original data

      if (fn && typeof fn === 'function') {
        sorted = _toConsumableArray(array).sort(function (a, b) {
          return fn(a, b, isAsc);
        });
      } else {
        sorted = _toConsumableArray(array).sort(function (a, b) {
          // Get nested values from objects
          var newA = getValueByPath(a, key);
          var newB = getValueByPath(b, key); // sort boolean type

          if (typeof newA === 'boolean' && typeof newB === 'boolean') {
            return isAsc ? newA - newB : newB - newA;
          }

          if (!newA && newA !== 0) return 1;
          if (!newB && newB !== 0) return -1;
          if (newA === newB) return 0;
          newA = typeof newA === 'string' ? newA.toUpperCase() : newA;
          newB = typeof newB === 'string' ? newB.toUpperCase() : newB;
          return isAsc ? newA > newB ? 1 : -1 : newA > newB ? -1 : 1;
        });
      }

      return sorted;
    },
    sortMultiColumn: function sortMultiColumn(column) {
      this.currentSortColumn = {};

      if (!this.backendSorting) {
        var existingPriority = this.sortMultipleDataLocal.filter(function (i) {
          return i.field === column.field;
        })[0];

        if (existingPriority) {
          existingPriority.order = existingPriority.order === 'desc' ? 'asc' : 'desc';
        } else {
          this.sortMultipleDataLocal.push({
            field: column.field,
            order: column.isAsc
          });
        }

        this.doSortMultiColumn();
      }
    },
    doSortMultiColumn: function doSortMultiColumn() {
      var formattedSortingPriority = this.sortMultipleDataLocal.map(function (i) {
        return (i.order && i.order === 'desc' ? '-' : '') + i.field;
      });
      this.newData = multiColumnSort(this.newData, formattedSortingPriority);
    },

    /**
    * Sort the column.
    * Toggle current direction on column if it's sortable
    * and not just updating the prop.
    */
    sort: function sort(column) {
      var updatingData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if ( // if backend sorting is enabled, just emit the sort press like usual
      // if the correct key combination isnt pressed, sort like usual
      !this.backendSorting && this.sortMultiple && (this.sortMultipleKey && event[this.sortMultipleKey] || !this.sortMultipleKey)) {
        if (updatingData) {
          this.doSortMultiColumn();
        } else {
          this.sortMultiColumn(column);
        }
      } else {
        if (!column || !column.sortable) return; // sort multiple is enabled but the correct key combination isnt pressed so reset

        if (this.sortMultiple) {
          this.sortMultipleDataLocal = [];
        }

        if (!updatingData) {
          this.isAsc = column === this.currentSortColumn ? !this.isAsc : this.defaultSortDirection.toLowerCase() !== 'desc';
        }

        if (!this.firstTimeSort) {
          this.$emit('sort', column.field, this.isAsc ? 'asc' : 'desc', event);
        }

        if (!this.backendSorting) {
          this.doSortSingleColumn(column);
        }

        this.currentSortColumn = column;
      }
    },
    doSortSingleColumn: function doSortSingleColumn(column) {
      this.newData = this.sortBy(this.newData, column.field, column.customSort, this.isAsc);
    },
    isRowSelected: function isRowSelected(row, selected) {
      if (!selected) {
        return false;
      }

      if (this.customRowKey) {
        return row[this.customRowKey] === selected[this.customRowKey];
      }

      return row === selected;
    },

    /**
    * Check if the row is checked (is added to the array).
    */
    isRowChecked: function isRowChecked(row) {
      return indexOf(this.newCheckedRows, row, this.customIsChecked) >= 0;
    },

    /**
    * Remove a checked row from the array.
    */
    removeCheckedRow: function removeCheckedRow(row) {
      var index = indexOf(this.newCheckedRows, row, this.customIsChecked);

      if (index >= 0) {
        this.newCheckedRows.splice(index, 1);
      }
    },

    /**
    * Header checkbox click listener.
    * Add or remove all rows in current page.
    */
    checkAll: function checkAll() {
      var _this6 = this;

      var isAllChecked = this.isAllChecked;
      this.visibleData.forEach(function (currentRow) {
        if (_this6.isRowCheckable(currentRow)) {
          _this6.removeCheckedRow(currentRow);
        }

        if (!isAllChecked) {
          if (_this6.isRowCheckable(currentRow)) {
            _this6.newCheckedRows.push(currentRow);
          }
        }
      });
      this.$emit('check', this.newCheckedRows);
      this.$emit('check-all', this.newCheckedRows); // Emit checked rows to update user variable

      this.$emit('update:checkedRows', this.newCheckedRows);
    },

    /**
    * Row checkbox click listener.
    */
    checkRow: function checkRow(row, index, event) {
      if (!this.isRowCheckable(row)) return;
      var lastIndex = this.lastCheckedRowIndex;
      this.lastCheckedRowIndex = index;

      if (event.shiftKey && lastIndex !== null && index !== lastIndex) {
        this.shiftCheckRow(row, index, lastIndex);
      } else if (!this.isRowChecked(row)) {
        this.newCheckedRows.push(row);
      } else {
        this.removeCheckedRow(row);
      }

      this.$emit('check', this.newCheckedRows, row); // Emit checked rows to update user variable

      this.$emit('update:checkedRows', this.newCheckedRows);
    },

    /**
     * Check row when shift is pressed.
     */
    shiftCheckRow: function shiftCheckRow(row, index, lastCheckedRowIndex) {
      var _this7 = this;

      // Get the subset of the list between the two indicies
      var subset = this.visibleData.slice(Math.min(index, lastCheckedRowIndex), Math.max(index, lastCheckedRowIndex) + 1); // Determine the operation based on the state of the clicked checkbox

      var shouldCheck = !this.isRowChecked(row);
      subset.forEach(function (item) {
        _this7.removeCheckedRow(item);

        if (shouldCheck && _this7.isRowCheckable(item)) {
          _this7.newCheckedRows.push(item);
        }
      });
    },

    /**
    * Row click listener.
    * Emit all necessary events.
    */
    selectRow: function selectRow(row, index) {
      this.$emit('click', row);
      if (this.selected === row) return;
      if (!this.isRowSelectable(row)) return; // Emit new and old row

      this.$emit('select', row, this.selected); // Emit new row to update user variable

      this.$emit('update:selected', row);
    },

    /**
    * Toggle to show/hide details slot
    */
    toggleDetails: function toggleDetails(obj) {
      var found = this.isVisibleDetailRow(obj);

      if (found) {
        this.closeDetailRow(obj);
        this.$emit('details-close', obj);
      } else {
        this.openDetailRow(obj);
        this.$emit('details-open', obj);
      } // Syncs the detailed rows with the parent component


      this.$emit('update:openedDetailed', this.visibleDetailRows);
    },
    openDetailRow: function openDetailRow(obj) {
      var index = this.handleDetailKey(obj);
      this.visibleDetailRows.push(index);
    },
    closeDetailRow: function closeDetailRow(obj) {
      var index = this.handleDetailKey(obj);
      var i = this.visibleDetailRows.indexOf(index);
      this.visibleDetailRows.splice(i, 1);
    },
    isVisibleDetailRow: function isVisibleDetailRow(obj) {
      var index = this.handleDetailKey(obj);
      var result = this.visibleDetailRows.indexOf(index) >= 0;
      return result;
    },
    isActiveDetailRow: function isActiveDetailRow(row) {
      return this.detailed && !this.customDetailRow && this.isVisibleDetailRow(row);
    },
    isActiveCustomDetailRow: function isActiveCustomDetailRow(row) {
      return this.detailed && this.customDetailRow && this.isVisibleDetailRow(row);
    },
    isRowFiltered: function isRowFiltered(row) {
      var _this8 = this;

      var _loop = function _loop(key) {
        // remove key if empty
        if (!_this8.filters[key]) {
          delete _this8.filters[key];
          return {
            v: true
          };
        }

        var input = _this8.filters[key];

        var column = _this8.newColumns.filter(function (c) {
          return c.field === key;
        })[0];

        if (column && column.customSearch && typeof column.customSearch === 'function') {
          return {
            v: column.customSearch(row, input)
          };
        } else {
          var value = _this8.getValueByPath(row, key);

          if (value == null) return {
            v: false
          };

          if (Number.isInteger(value)) {
            if (value !== Number(input)) return {
              v: false
            };
          } else {
            var re = new RegExp(escapeRegExpChars(input), 'i');
            if (!re.test(value)) return {
              v: false
            };
          }
        }
      };

      for (var key in this.filters) {
        var _ret = _loop(key);

        if (_typeof(_ret) === "object") return _ret.v;
      }

      return true;
    },

    /**
    * When the detailKey is defined we use the object[detailKey] as index.
    * If not, use the object reference by default.
    */
    handleDetailKey: function handleDetailKey(index) {
      var key = this.detailKey;
      return !key.length || !index ? index : index[key];
    },
    checkPredefinedDetailedRows: function checkPredefinedDetailedRows() {
      var defaultExpandedRowsDefined = this.openedDetailed.length > 0;

      if (defaultExpandedRowsDefined && !this.detailKey.length) {
        throw new Error('If you set a predefined opened-detailed, you must provide a unique key using the prop "detail-key"');
      }
    },

    /**
    * Call initSort only first time (For example async data).
    */
    checkSort: function checkSort() {
      if (this.newColumns.length && this.firstTimeSort) {
        this.initSort();
        this.firstTimeSort = false;
      } else if (this.newColumns.length) {
        if (Object.keys(this.currentSortColumn).length > 0) {
          for (var i = 0; i < this.newColumns.length; i++) {
            if (this.newColumns[i].field === this.currentSortColumn.field) {
              this.currentSortColumn = this.newColumns[i];
              break;
            }
          }
        }
      }
    },

    /**
    * Check if footer slot has custom content.
    */
    hasCustomFooterSlot: function hasCustomFooterSlot() {
      if (getSlot$1(this.$slots, 'footer').length > 1) return true;
      var tag = getSlot$1(this.$slots, 'footer')[0].tag;
      if (tag !== 'th' && tag !== 'td') return false;
      return true;
    },

    /**
    * Check if bottom-left slot exists.
    */
    hasBottomLeftSlot: function hasBottomLeftSlot() {
      return typeof getSlot$1(this.$slots, 'bottom-left') !== 'undefined';
    },

    /**
    * Table arrow keys listener, change selection.
    */
    pressedArrow: function pressedArrow(pos) {
      if (!this.visibleData.length) return;
      var index = this.visibleData.indexOf(this.selected) + pos; // Prevent from going up from first and down from last

      index = index < 0 ? 0 : index > this.visibleData.length - 1 ? this.visibleData.length - 1 : index;
      var row = this.visibleData[index];

      if (!this.isRowSelectable(row)) {
        var newIndex = null;

        if (pos > 0) {
          for (var i = index; i < this.visibleData.length && newIndex === null; i++) {
            if (this.isRowSelectable(this.visibleData[i])) newIndex = i;
          }
        } else {
          for (var _i = index; _i >= 0 && newIndex === null; _i--) {
            if (this.isRowSelectable(this.visibleData[_i])) newIndex = _i;
          }
        }

        if (newIndex >= 0) {
          this.selectRow(this.visibleData[newIndex]);
        }
      } else {
        this.selectRow(row);
      }
    },

    /**
    * Focus table element if has selected prop.
    */
    focus: function focus() {
      if (!this.focusable) return;
      this.$el.querySelector('table').focus();
    },

    /**
    * Initial sorted column based on the default-sort prop.
    */
    initSort: function initSort() {
      var _this9 = this;

      if (this.sortMultiple && this.sortMultipleData) {
        this.sortMultipleData.forEach(function (column) {
          _this9.sortMultiColumn(column);
        });
      } else {
        if (!this.defaultSort) return;
        var sortField = '';
        var sortDirection = this.defaultSortDirection;

        if (Array.isArray(this.defaultSort)) {
          sortField = this.defaultSort[0];

          if (this.defaultSort[1]) {
            sortDirection = this.defaultSort[1];
          }
        } else {
          sortField = this.defaultSort;
        }

        var sortColumn = this.newColumns.filter(function (column) {
          return column.field === sortField;
        })[0];

        if (sortColumn) {
          this.isAsc = sortDirection.toLowerCase() !== 'desc';
          this.sort(sortColumn, true);
        }
      }
    },

    /**
    * Emits drag start event
    */
    handleDragStart: function handleDragStart(event, row, index) {
      if (!this.draggable) return;
      this.$emit('dragstart', {
        event: event,
        row: row,
        index: index
      });
    },

    /**
    * Emits drag leave event
    */
    handleDragEnd: function handleDragEnd(event, row, index) {
      if (!this.draggable) return;
      this.$emit('dragend', {
        event: event,
        row: row,
        index: index
      });
    },

    /**
    * Emits drop event
    */
    handleDrop: function handleDrop(event, row, index) {
      if (!this.draggable) return;
      this.$emit('drop', {
        event: event,
        row: row,
        index: index
      });
    },

    /**
    * Emits drag over event
    */
    handleDragOver: function handleDragOver(event, row, index) {
      if (!this.draggable) return;
      this.$emit('dragover', {
        event: event,
        row: row,
        index: index
      });
    },

    /**
    * Emits drag leave event
    */
    handleDragLeave: function handleDragLeave(event, row, index) {
      if (!this.draggable) return;
      this.$emit('dragleave', {
        event: event,
        row: row,
        index: index
      });
    },
    emitEventForRow: function emitEventForRow(eventName, event, row) {
      return this.$listeners[eventName] ? this.$emit(eventName, row, event) : null;
    },
    refreshSlots: function refreshSlots() {
      this.defaultSlots = getSlot$1(this.$slots, 'default') || [];
    },
    getScopedSlots: function getScopedSlots(vm) {
      return vm.$scopedSlots || vm.$slots;
    }
  },
  mounted: function mounted() {
    this.refreshSlots();
    this.checkPredefinedDetailedRows();
    this.checkSort();
  }
};

const _hoisted_1$2 = { class: "b-table" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3 = {
  key: 0,
  width: "40px"
};
const _hoisted_4 = {
  key: 1,
  class: "is-relative"
};
const _hoisted_5 = {
  key: 0,
  class: "is-subheading"
};
const _hoisted_6 = {
  key: 0,
  width: "40px"
};
const _hoisted_7 = { key: 1 };
const _hoisted_8 = { key: 2 };
const _hoisted_9 = { key: 1 };
const _hoisted_10 = {
  key: 0,
  width: "40px"
};
const _hoisted_11 = { key: 1 };
const _hoisted_12 = { class: "th-wrap" };
const _hoisted_13 = { key: 2 };
const _hoisted_14 = {
  key: 0,
  class: "chevron-cell"
};
const _hoisted_15 = { class: "detail-container" };
const _hoisted_16 = {
  key: 0,
  class: "is-empty"
};
const _hoisted_17 = { key: 1 };
const _hoisted_18 = { class: "table-footer" };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_table_mobile_sort = resolveComponent("b-table-mobile-sort");
  const _component_b_table_pagination = resolveComponent("b-table-pagination");
  const _component_b_checkbox = resolveComponent("b-checkbox");
  const _component_b_slot_component = resolveComponent("b-slot-component");
  const _component_b_icon = resolveComponent("b-icon");
  const _component_b_input = resolveComponent("b-input");
  const _component_b_loading = resolveComponent("b-loading");

  return (openBlock(), createBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default"),
    ($props.mobileCards && $options.hasSortablenewColumns)
      ? (openBlock(), createBlock(_component_b_table_mobile_sort, {
          key: 0,
          "current-sort-column": $data.currentSortColumn,
          "sort-multiple": $props.sortMultiple,
          "sort-multiple-data": $options.sortMultipleDataComputed,
          "is-asc": $data.isAsc,
          columns: $options.newColumns,
          placeholder: $props.mobileSortPlaceholder,
          "icon-pack": $props.iconPack,
          "sort-icon": $props.sortIcon,
          "sort-icon-size": $props.sortIconSize,
          onSort: _cache[1] || (_cache[1] = (column, event) => $options.sort(column, null, event)),
          onRemovePriority: _cache[2] || (_cache[2] = (column) => $options.removeSortingPriority(column))
        }, null, 8 /* PROPS */, ["current-sort-column", "sort-multiple", "sort-multiple-data", "is-asc", "columns", "placeholder", "icon-pack", "sort-icon", "sort-icon-size"]))
      : createCommentVNode("v-if", true),
    ($props.paginated && ($props.paginationPosition === 'top' || $props.paginationPosition === 'both'))
      ? renderSlot(_ctx.$slots, "pagination", { key: 1 }, () => [
          createVNode(_component_b_table_pagination, mergeProps(_ctx.$attrs, {
            "per-page": $props.perPage,
            paginated: $props.paginated,
            rounded: $props.paginationRounded,
            "icon-pack": $props.iconPack,
            total: $data.newDataTotal,
            "current-page": $data.newCurrentPage,
            "onUpdate:title": _cache[3] || (_cache[3] = $event => ($data.newCurrentPage = $event)),
            "aria-next-label": $props.ariaNextLabel,
            "aria-previous-label": $props.ariaPreviousLabel,
            "aria-page-label": $props.ariaPageLabel,
            "aria-current-label": $props.ariaCurrentLabel,
            onPageChange: _cache[4] || (_cache[4] = (event) => _ctx.$emit('page-change', event))
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "top-left")
            ]),
            _: 3 /* FORWARDED */
          }, 16 /* FULL_PROPS */, ["per-page", "paginated", "rounded", "icon-pack", "total", "current-page", "aria-next-label", "aria-previous-label", "aria-page-label", "aria-current-label"])
        ])
      : createCommentVNode("v-if", true),
    createVNode("div", {
      class: ["table-wrapper", $options.tableWrapperClasses],
      style: $options.tableStyle
    }, [
      createVNode("table", {
        class: ["table", $options.tableClasses],
        tabindex: !$props.focusable ? false : 0,
        onKeydown: [
          _cache[5] || (_cache[5] = withKeys(withModifiers($event => ($options.pressedArrow(-1)), ["self","prevent"]), ["up"])),
          _cache[6] || (_cache[6] = withKeys(withModifiers($event => ($options.pressedArrow(1)), ["self","prevent"]), ["down"]))
        ]
      }, [
        ($options.newColumns.length && $props.showHeader)
          ? (openBlock(), createBlock("thead", _hoisted_2$1, [
              createVNode("tr", null, [
                ($options.showDetailRowIcon)
                  ? (openBlock(), createBlock("th", _hoisted_3))
                  : createCommentVNode("v-if", true),
                ($props.checkable && $props.checkboxPosition === 'left')
                  ? (openBlock(), createBlock("th", {
                      key: 1,
                      class: ['checkbox-cell', { 'is-sticky': $props.stickyCheckbox } ]
                    }, [
                      ($props.headerCheckable)
                        ? (openBlock(), createBlock(_component_b_checkbox, {
                            key: 0,
                            value: $options.isAllChecked,
                            disabled: $options.isAllUncheckable,
                            onChange: $options.checkAll
                          }, null, 8 /* PROPS */, ["value", "disabled", "onChange"]))
                        : createCommentVNode("v-if", true)
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true),
                (openBlock(true), createBlock(Fragment, null, renderList($options.visibleColumns, (column, index) => {
                  return (openBlock(), createBlock("th", {
                    key: column.newKey + ':' + index + 'header',
                    class: [column.headerClass, {
                                'is-current-sort': !$props.sortMultiple && $data.currentSortColumn === column,
                                'is-sortable': column.sortable,
                                'is-sticky': column.sticky,
                                'is-unselectable': column.isHeaderUnSelectable
                            }],
                    style: column.style,
                    onClick: withModifiers($event => ($options.sort(column, null, $event)), ["stop"])
                  }, [
                    createVNode("div", {
                      class: ["th-wrap", {
                                    'is-numeric': column.numeric,
                                    'is-centered': column.centered
                            }]
                    }, [
                      ($options.getScopedSlots(column).header)
                        ? (openBlock(), createBlock(_component_b_slot_component, {
                            key: 0,
                            component: column,
                            scoped: "",
                            name: "header",
                            tag: "span",
                            props: { column, index }
                          }, null, 8 /* PROPS */, ["component", "props"]))
                        : (openBlock(), createBlock("span", _hoisted_4, [
                            createTextVNode(toDisplayString(column.label) + " ", 1 /* TEXT */),
                            ($props.sortMultiple &&
                                                $options.sortMultipleDataComputed &&
                                                $options.sortMultipleDataComputed.length > 0 &&
                                                $options.sortMultipleDataComputed.filter(i =>
                                            i.field === column.field).length > 0)
                              ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createVNode(_component_b_icon, {
                                    icon: $props.sortIcon,
                                    pack: $props.iconPack,
                                    both: "",
                                    size: $props.sortIconSize,
                                    class: {
                                                    'is-desc': $options.sortMultipleDataComputed.filter(i =>
                                                i.field === column.field)[0].order === 'desc'}
                                  }, null, 8 /* PROPS */, ["icon", "pack", "size", "class"]),
                                  createTextVNode(" " + toDisplayString($options.findIndexOfSortData(column)) + " ", 1 /* TEXT */),
                                  createVNode("button", {
                                    class: "delete is-small multi-sort-cancel-icon",
                                    type: "button",
                                    onClick: withModifiers($event => ($options.removeSortingPriority(column)), ["stop"])
                                  }, null, 8 /* PROPS */, ["onClick"])
                                ], 64 /* STABLE_FRAGMENT */))
                              : (openBlock(), createBlock(_component_b_icon, {
                                  key: 1,
                                  icon: $props.sortIcon,
                                  pack: $props.iconPack,
                                  both: "",
                                  size: $props.sortIconSize,
                                  class: ["sort-icon", {
                                                'is-desc': !$data.isAsc,
                                                'is-invisible': $data.currentSortColumn !== column
                                            }]
                                }, null, 8 /* PROPS */, ["icon", "pack", "size", "class"]))
                          ]))
                    ], 2 /* CLASS */)
                  ], 14 /* CLASS, STYLE, PROPS */, ["onClick"]))
                }), 128 /* KEYED_FRAGMENT */)),
                ($props.checkable && $props.checkboxPosition === 'right')
                  ? (openBlock(), createBlock("th", {
                      key: 2,
                      class: ['checkbox-cell', { 'is-sticky': $props.stickyCheckbox } ]
                    }, [
                      ($props.headerCheckable)
                        ? (openBlock(), createBlock(_component_b_checkbox, {
                            key: 0,
                            value: $options.isAllChecked,
                            disabled: $options.isAllUncheckable,
                            onChange: $options.checkAll
                          }, null, 8 /* PROPS */, ["value", "disabled", "onChange"]))
                        : createCommentVNode("v-if", true)
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true)
              ]),
              ($options.hasCustomSubheadings)
                ? (openBlock(), createBlock("tr", _hoisted_5, [
                    ($options.showDetailRowIcon)
                      ? (openBlock(), createBlock("th", _hoisted_6))
                      : createCommentVNode("v-if", true),
                    ($props.checkable && $props.checkboxPosition === 'left')
                      ? (openBlock(), createBlock("th", _hoisted_7))
                      : createCommentVNode("v-if", true),
                    (openBlock(true), createBlock(Fragment, null, renderList($options.visibleColumns, (column, index) => {
                      return (openBlock(), createBlock("th", {
                        key: column.newKey + ':' + index + 'subheading',
                        style: column.style
                      }, [
                        createVNode("div", {
                          class: ["th-wrap", {
                                    'is-numeric': column.numeric,
                                    'is-centered': column.centered
                            }]
                        }, [
                          ($options.getScopedSlots(column).subheading)
                            ? (openBlock(), createBlock(_component_b_slot_component, {
                                key: 0,
                                component: column,
                                scoped: "",
                                name: "subheading",
                                tag: "span",
                                props: { column, index }
                              }, null, 8 /* PROPS */, ["component", "props"]))
                            : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createTextVNode(toDisplayString(column.subheading), 1 /* TEXT */)
                              ], 64 /* STABLE_FRAGMENT */))
                        ], 2 /* CLASS */)
                      ], 4 /* STYLE */))
                    }), 128 /* KEYED_FRAGMENT */)),
                    ($props.checkable && $props.checkboxPosition === 'right')
                      ? (openBlock(), createBlock("th", _hoisted_8))
                      : createCommentVNode("v-if", true)
                  ]))
                : createCommentVNode("v-if", true),
              ($options.hasSearchablenewColumns)
                ? (openBlock(), createBlock("tr", _hoisted_9, [
                    ($options.showDetailRowIcon)
                      ? (openBlock(), createBlock("th", _hoisted_10))
                      : createCommentVNode("v-if", true),
                    ($props.checkable && $props.checkboxPosition === 'left')
                      ? (openBlock(), createBlock("th", _hoisted_11))
                      : createCommentVNode("v-if", true),
                    (openBlock(true), createBlock(Fragment, null, renderList($options.visibleColumns, (column, index) => {
                      return (openBlock(), createBlock("th", {
                        key: column.newKey + ':' + index + 'searchable',
                        style: column.style,
                        class: {'is-sticky': column.sticky}
                      }, [
                        createVNode("div", _hoisted_12, [
                          (column.searchable)
                            ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                ($options.getScopedSlots(column).searchable)
                                  ? (openBlock(), createBlock(_component_b_slot_component, {
                                      key: 0,
                                      component: column,
                                      scoped: true,
                                      name: "searchable",
                                      tag: "span",
                                      props: { column, filters: $data.filters }
                                    }, null, 8 /* PROPS */, ["component", "props"]))
                                  : (openBlock(), createBlock(_component_b_input, {
                                      key: 1,
                                      [toHandlerKey($props.filtersEvent)]: withKeys($options.onFiltersEvent, ["native"]),
                                      modelValue: $data.filters[column.field],
                                      "onUpdate:modelValue": $event => ($data.filters[column.field] = $event),
                                      type: column.numeric ? 'number' : 'text'
                                    }, null, 16 /* FULL_PROPS */, ["modelValue", "onUpdate:modelValue", "type"]))
                              ], 64 /* STABLE_FRAGMENT */))
                            : createCommentVNode("v-if", true)
                        ])
                      ], 6 /* CLASS, STYLE */))
                    }), 128 /* KEYED_FRAGMENT */)),
                    ($props.checkable && $props.checkboxPosition === 'right')
                      ? (openBlock(), createBlock("th", _hoisted_13))
                      : createCommentVNode("v-if", true)
                  ]))
                : createCommentVNode("v-if", true)
            ]))
          : createCommentVNode("v-if", true),
        createVNode("tbody", null, [
          (openBlock(true), createBlock(Fragment, null, renderList($options.visibleData, (row, index) => {
            return (openBlock(), createBlock(Fragment, {
              key: $props.customRowKey ? row[$props.customRowKey] : index
            }, [
              createVNode("tr", {
                class: [$props.rowClass(row, index), {
                                'is-selected': $options.isRowSelected(row, $props.selected),
                                'is-checked': $options.isRowChecked(row),
                            }],
                onClick: $event => ($options.selectRow(row)),
                onDblclick: $event => (_ctx.$emit('dblclick', row)),
                onMouseenter: $event => ($options.emitEventForRow('mouseenter', $event, row)),
                onMouseleave: $event => ($options.emitEventForRow('mouseleave', $event, row)),
                onContextmenu: $event => (_ctx.$emit('contextmenu', row, $event)),
                draggable: $props.draggable,
                onDragstart: $event => ($options.handleDragStart($event, row, index)),
                onDragend: $event => ($options.handleDragEnd($event, row, index)),
                onDrop: $event => ($options.handleDrop($event, row, index)),
                onDragover: $event => ($options.handleDragOver($event, row, index)),
                onDragleave: $event => ($options.handleDragLeave($event, row, index))
              }, [
                ($options.showDetailRowIcon)
                  ? (openBlock(), createBlock("td", _hoisted_14, [
                      ($props.hasDetailedVisible(row))
                        ? (openBlock(), createBlock("a", {
                            key: 0,
                            role: "button",
                            onClick: withModifiers($event => ($options.toggleDetails(row)), ["stop"])
                          }, [
                            createVNode(_component_b_icon, {
                              icon: "chevron-right",
                              pack: $props.iconPack,
                              both: "",
                              class: {'is-expanded': $options.isVisibleDetailRow(row)}
                            }, null, 8 /* PROPS */, ["pack", "class"])
                          ], 8 /* PROPS */, ["onClick"]))
                        : createCommentVNode("v-if", true)
                    ]))
                  : createCommentVNode("v-if", true),
                ($props.checkable && $props.checkboxPosition === 'left')
                  ? (openBlock(), createBlock("td", {
                      key: 1,
                      class: ['checkbox-cell', { 'is-sticky': $props.stickyCheckbox } ]
                    }, [
                      createVNode(_component_b_checkbox, {
                        disabled: !$props.isRowCheckable(row),
                        value: $options.isRowChecked(row),
                        onClick: withModifiers($event => ($options.checkRow(row, index, $event)), ["prevent","stop"])
                      }, null, 8 /* PROPS */, ["disabled", "value", "onClick"])
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true),
                (openBlock(true), createBlock(Fragment, null, renderList($options.visibleColumns, (column, colindex) => {
                  return (openBlock(), createBlock(Fragment, null, [
                    ($options.getScopedSlots(column).default)
                      ? (openBlock(), createBlock(_component_b_slot_component, {
                          key: column.newKey + ':' + index + ':' + colindex,
                          component: column,
                          scoped: "",
                          name: "default",
                          tag: "td",
                          class: column.rootClasses,
                          "data-label": column.label,
                          props: { row, column, index, colindex, toggleDetails: $options.toggleDetails },
                          onClick: $event => (_ctx.$emit('cellclick',row,column,index,colindex))
                        }, null, 8 /* PROPS */, ["component", "class", "data-label", "props", "onClick"]))
                      : createCommentVNode("v-if", true)
                  ], 64 /* STABLE_FRAGMENT */))
                }), 256 /* UNKEYED_FRAGMENT */)),
                ($props.checkable && $props.checkboxPosition === 'right')
                  ? (openBlock(), createBlock("td", {
                      key: 2,
                      class: ['checkbox-cell', { 'is-sticky': $props.stickyCheckbox } ]
                    }, [
                      createVNode(_component_b_checkbox, {
                        disabled: !$props.isRowCheckable(row),
                        value: $options.isRowChecked(row),
                        onClick: withModifiers($event => ($options.checkRow(row, index, $event)), ["prevent","stop"])
                      }, null, 8 /* PROPS */, ["disabled", "value", "onClick"])
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true)
              ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["onClick", "onDblclick", "onMouseenter", "onMouseleave", "onContextmenu", "draggable", "onDragstart", "onDragend", "onDrop", "onDragover", "onDragleave"]),
              createVNode(Transition, { name: $props.detailTransition }, {
                default: withCtx(() => [
                  ($options.isActiveDetailRow(row))
                    ? (openBlock(), createBlock("tr", {
                        key: ($props.customRowKey ? row[$props.customRowKey] : index),
                        class: "detail"
                      }, [
                        createVNode("td", { colspan: $options.columnCount }, [
                          createVNode("div", _hoisted_15, [
                            renderSlot(_ctx.$slots, "detail", {
                              row: row,
                              index: index
                            })
                          ])
                        ], 8 /* PROPS */, ["colspan"])
                      ]))
                    : createCommentVNode("v-if", true)
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["name"]),
              ($options.isActiveCustomDetailRow(row))
                ? renderSlot(_ctx.$slots, "detail", {
                    key: 0,
                    row: row,
                    index: index
                  })
                : createCommentVNode("v-if", true)
            ], 64 /* STABLE_FRAGMENT */))
          }), 128 /* KEYED_FRAGMENT */)),
          (!$options.visibleData.length)
            ? (openBlock(), createBlock("tr", _hoisted_16, [
                createVNode("td", { colspan: $options.columnCount }, [
                  renderSlot(_ctx.$slots, "empty")
                ], 8 /* PROPS */, ["colspan"])
              ]))
            : createCommentVNode("v-if", true)
        ]),
        (_ctx.$slots.footer !== undefined)
          ? (openBlock(), createBlock("tfoot", _hoisted_17, [
              createVNode("tr", _hoisted_18, [
                ($options.hasCustomFooterSlot())
                  ? renderSlot(_ctx.$slots, "footer", { key: 0 })
                  : (openBlock(), createBlock("th", {
                      key: 1,
                      colspan: $options.columnCount
                    }, [
                      renderSlot(_ctx.$slots, "footer")
                    ], 8 /* PROPS */, ["colspan"]))
              ])
            ]))
          : createCommentVNode("v-if", true)
      ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["tabindex"]),
      ($props.loading)
        ? renderSlot(_ctx.$slots, "loading", { key: 0 }, () => [
            createVNode(_component_b_loading, {
              "is-full-page": false,
              active: $props.loading
            }, null, 8 /* PROPS */, ["active"])
          ])
        : createCommentVNode("v-if", true)
    ], 6 /* CLASS, STYLE */),
    (($props.checkable && $options.hasBottomLeftSlot()) ||
            ($props.paginated && ($props.paginationPosition === 'bottom' || $props.paginationPosition === 'both')))
      ? renderSlot(_ctx.$slots, "pagination", { key: 2 }, () => [
          createVNode(_component_b_table_pagination, mergeProps(_ctx.$attrs, {
            "per-page": $props.perPage,
            paginated: $props.paginated,
            rounded: $props.paginationRounded,
            "icon-pack": $props.iconPack,
            total: $data.newDataTotal,
            "current-page": $data.newCurrentPage,
            "aria-next-label": $props.ariaNextLabel,
            "aria-previous-label": $props.ariaPreviousLabel,
            "aria-page-label": $props.ariaPageLabel,
            "aria-current-label": $props.ariaCurrentLabel,
            onPageChange: _cache[7] || (_cache[7] = (event) => _ctx.$emit('page-change', event))
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "bottom-left")
            ]),
            _: 3 /* FORWARDED */
          }, 16 /* FULL_PROPS */, ["per-page", "paginated", "rounded", "icon-pack", "total", "current-page", "aria-next-label", "aria-previous-label", "aria-page-label", "aria-current-label"])
        ])
      : createCommentVNode("v-if", true)
  ]))
}

script$6.render = render$6;
script$6.__file = "src/components/table/Table.vue";

var Plugin$7 = {
  install: function install(Vue) {
    // individual import + extend method into Table.vue
    if (typeof VueInstance === 'undefined') {
      setVueInstance(Vue);
    }

    registerComponent(Vue, script$6);
    registerComponent(Vue, script$8);
  }
};
use(Plugin$7);

var tabbedMixin = TabbedMixin('tab');
var script$5 = {
  name: 'BTabs',
  mixins: [tabbedMixin],
  props: {
    expanded: {
      type: Boolean,
      default: function _default() {
        return config.defaultTabsExpanded;
      }
    },
    type: {
      type: [String, Object],
      default: function _default() {
        return config.defaultTabsType;
      }
    },
    animated: {
      type: Boolean,
      default: function _default() {
        return config.defaultTabsAnimated;
      }
    },
    multiline: Boolean
  },
  computed: {
    mainClasses: function mainClasses() {
      return _defineProperty({
        'is-fullwidth': this.expanded,
        'is-vertical': this.vertical,
        'is-multiline': this.multiline
      }, this.position, this.position && this.vertical);
    },
    navClasses: function navClasses() {
      var _ref2;

      return [this.type, this.size, (_ref2 = {}, _defineProperty(_ref2, this.position, this.position && !this.vertical), _defineProperty(_ref2, 'is-fullwidth', this.expanded), _defineProperty(_ref2, 'is-toggle-rounded is-toggle', this.type === 'is-toggle-rounded'), _ref2)];
    }
  }
};

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_slot_component = resolveComponent("b-slot-component");
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock("div", {
    class: ["b-tabs", $options.mainClasses]
  }, [
    createVNode("nav", {
      class: ["tabs", $options.navClasses]
    }, [
      createVNode("ul", null, [
        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (childItem) => {
          return withDirectives((openBlock(), createBlock("li", {
            key: childItem.value,
            class: [ childItem.headerClass, { 'is-active': childItem.isActive,
                                                       'is-disabled': childItem.disabled }]
          }, [
            (typeof (childItem.$scopedSlots || childItem.$slots).header === 'function')
              ? (openBlock(), createBlock(_component_b_slot_component, {
                  key: 0,
                  component: childItem,
                  name: "header",
                  tag: "a",
                  onClick: $event => (_ctx.childClick(childItem))
                }, null, 8 /* PROPS */, ["component", "onClick"]))
              : (openBlock(), createBlock("a", {
                  key: 1,
                  onClick: $event => (_ctx.childClick(childItem))
                }, [
                  (childItem.icon)
                    ? (openBlock(), createBlock(_component_b_icon, {
                        key: 0,
                        icon: childItem.icon,
                        pack: childItem.iconPack,
                        size: _ctx.size
                      }, null, 8 /* PROPS */, ["icon", "pack", "size"]))
                    : createCommentVNode("v-if", true),
                  createVNode("span", null, toDisplayString(childItem.label), 1 /* TEXT */)
                ], 8 /* PROPS */, ["onClick"]))
          ], 2 /* CLASS */)), [
            [vShow, childItem.visible]
          ])
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ], 2 /* CLASS */),
    createVNode("section", {
      class: ["tab-content", {'is-transitioning': _ctx.isTransitioning}]
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2 /* CLASS */)
  ], 2 /* CLASS */))
}

script$5.render = render$5;
script$5.__file = "src/components/tabs/Tabs.vue";

var TabItem = {
  name: 'BTabItem',
  mixins: [TabbedChildMixin('tab')],
  props: {
    disabled: Boolean
  },
  data: function data() {
    return {
      elementClass: 'tab-item'
    };
  }
};

var Plugin$6 = {
  install: function install(Vue) {
    registerComponent(Vue, script$5);
    registerComponent(Vue, TabItem);
  }
};
use(Plugin$6);

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

const _hoisted_1$1 = {
  key: 0,
  class: "tags has-addons"
};
const _hoisted_2 = /*#__PURE__*/createVNode("a", null, null, -1 /* HOISTED */);

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return ($props.attached && $props.closable)
    ? (openBlock(), createBlock("div", _hoisted_1$1, [
        createVNode("span", {
          class: ["tag", [$props.type, $props.size, { 'is-rounded': $props.rounded }]]
        }, [
          createVNode("span", {
            class: { 'has-ellipsis': $props.ellipsis }
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2 /* CLASS */)
        ], 2 /* CLASS */),
        createVNode("a", {
          class: ["tag", [$props.size,
                     $props.closeType,
                     {'is-rounded': $props.rounded},
                     $props.closeIcon ? 'has-delete-icon' : 'is-delete']],
          role: "button",
          "aria-label": $props.ariaCloseLabel,
          tabindex: $props.tabstop ? 0 : false,
          disabled: $props.disabled ? '' : null,
          onClick: _cache[1] || (_cache[1] = (...args) => ($options.close && $options.close(...args))),
          onKeyup: _cache[2] || (_cache[2] = withKeys(withModifiers((...args) => ($options.close && $options.close(...args)), ["prevent"]), ["delete"]))
        }, [
          ($props.closeIcon)
            ? (openBlock(), createBlock(_component_b_icon, {
                key: 0,
                "custom-class": "",
                icon: $props.closeIcon,
                size: $props.size,
                type: $props.closeIconType,
                pack: $props.closeIconPack
              }, null, 8 /* PROPS */, ["icon", "size", "type", "pack"]))
            : createCommentVNode("v-if", true),
          _hoisted_2
        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["aria-label", "tabindex", "disabled"])
      ]))
    : (openBlock(), createBlock("span", {
        key: 1,
        class: ["tag", [$props.type, $props.size, { 'is-rounded': $props.rounded }]]
      }, [
        createVNode("span", {
          class: { 'has-ellipsis': $props.ellipsis }
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2 /* CLASS */),
        ($props.closable)
          ? (openBlock(), createBlock("a", {
              key: 0,
              role: "button",
              "aria-label": $props.ariaCloseLabel,
              class: ["delete is-small", $props.closeType],
              disabled: $props.disabled ? '' : null,
              tabindex: $props.tabstop ? 0 : false,
              onClick: _cache[3] || (_cache[3] = (...args) => ($options.close && $options.close(...args))),
              onKeyup: _cache[4] || (_cache[4] = withKeys(withModifiers((...args) => ($options.close && $options.close(...args)), ["prevent"]), ["delete"]))
            }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["aria-label", "disabled", "tabindex"]))
          : createCommentVNode("v-if", true)
      ], 2 /* CLASS */))
}

script$4.render = render$4;
script$4.__file = "src/components/tag/Tag.vue";

var script$3 = {
  name: 'BTaglist',
  props: {
    attached: Boolean
  }
};

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["tags", { 'has-addons': $props.attached }]
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$3.render = render$3;
script$3.__file = "src/components/tag/Taglist.vue";

var Plugin$5 = {
  install: function install(Vue) {
    registerComponent(Vue, script$4);
    registerComponent(Vue, script$3);
  }
};
use(Plugin$5);

var _components;
var script$2 = {
  name: 'BTaginput',
  components: (_components = {}, _defineProperty(_components, script$$.name, script$$), _defineProperty(_components, script$4.name, script$4), _components),
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
      return !!getSlot$1(this.$slots, 'empty');
    },
    hasHeaderSlot: function hasHeaderSlot() {
      return !!getSlot$1(this.$slots, 'header');
    },
    hasFooterSlot: function hasFooterSlot() {
      return !!getSlot$1(this.$slots, 'footer');
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

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_tag = resolveComponent("b-tag");
  const _component_b_autocomplete = resolveComponent("b-autocomplete");

  return (openBlock(), createBlock("div", {
    class: ["taginput control", $options.rootClasses]
  }, [
    createVNode("div", {
      class: ["taginput-container", [_ctx.statusType, _ctx.size, $options.containerClasses]],
      disabled: $props.disabled ? '' : null,
      onClick: _cache[4] || (_cache[4] = $event => ($options.hasInput && _ctx.focus($event)))
    }, [
      renderSlot(_ctx.$slots, "selected", { tags: $data.tags }, () => [
        (openBlock(true), createBlock(Fragment, null, renderList($data.tags, (tag, index) => {
          return (openBlock(), createBlock(_component_b_tag, {
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
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "tag", { tag: tag }, () => [
                createTextVNode(toDisplayString($options.getNormalizedTagText(tag)), 1 /* TEXT */)
              ])
            ]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["type", "close-type", "size", "rounded", "attached", "disabled", "ellipsis", "closable", "aria-close-label", "title", "onClose"]))
        }), 128 /* KEYED_FRAGMENT */))
      ]),
      ($options.hasInput)
        ? (openBlock(), createBlock(_component_b_autocomplete, mergeProps({
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
            onKeydown: withKeys($options.keydown, ["native"]),
            onCompositionstart: _cache[2] || (_cache[2] = $event => ($data.isComposing = true)),
            onCompositionend: _cache[3] || (_cache[3] = $event => ($data.isComposing = false)),
            onSelect: $options.onSelect,
            onInfiniteScroll: $options.emitInfiniteScroll
          }), createSlots({ _: 2 /* DYNAMIC */ }, [
            ($options.hasHeaderSlot)
              ? {
                  name: "header",
                  fn: withCtx(() => [
                    renderSlot(_ctx.$slots, "header")
                  ])
                }
              : undefined,
            ($options.hasDefaultSlot)
              ? {
                  name: "default",
                  fn: withCtx((props) => [
                    renderSlot(_ctx.$slots, "default", {
                      option: props.option,
                      index: props.index
                    })
                  ])
                }
              : undefined,
            ($options.hasEmptySlot)
              ? {
                  name: "empty",
                  fn: withCtx(() => [
                    renderSlot(_ctx.$slots, "empty")
                  ])
                }
              : undefined,
            ($options.hasFooterSlot)
              ? {
                  name: "footer",
                  fn: withCtx(() => [
                    renderSlot(_ctx.$slots, "footer")
                  ])
                }
              : undefined
          ]), 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["modelValue", "data", "field", "icon", "icon-pack", "maxlength", "size", "disabled", "loading", "autocomplete", "open-on-focus", "keep-open", "keep-first", "group-field", "group-options", "use-html5-validation", "check-infinite-scroll", "append-to-body", "confirm-keys", "onTyping", "onFocus", "onBlur", "onKeydown", "onSelect", "onInfiniteScroll"]))
        : createCommentVNode("v-if", true)
    ], 10 /* CLASS, PROPS */, ["disabled"]),
    ($props.hasCounter && ($props.maxtags || _ctx.maxlength))
      ? (openBlock(), createBlock("small", _hoisted_1, [
          (_ctx.maxlength && $options.valueLength > 0)
            ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString($options.valueLength) + " / " + toDisplayString(_ctx.maxlength), 1 /* TEXT */)
              ], 64 /* STABLE_FRAGMENT */))
            : ($props.maxtags)
              ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString($options.tagsLength) + " / " + toDisplayString($props.maxtags), 1 /* TEXT */)
                ], 64 /* STABLE_FRAGMENT */))
              : createCommentVNode("v-if", true)
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$2.render = render$2;
script$2.__file = "src/components/taginput/Taginput.vue";

var Plugin$4 = {
  install: function install(Vue) {
    registerComponent(Vue, script$2);
  }
};
use(Plugin$4);

var Plugin$3 = {
  install: function install(Vue) {
    registerComponent(Vue, script$I);
  }
};
use(Plugin$3);

var script$1 = {
  name: 'BToast',
  mixins: [NoticeMixin],
  data: function data() {
    return {
      newDuration: this.duration || config.defaultToastDuration
    };
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Transition, {
    "enter-active-class": _ctx.transition.enter,
    "leave-active-class": _ctx.transition.leave
  }, {
    default: withCtx(() => [
      withDirectives(createVNode("div", {
        class: ["toast", [_ctx.type, _ctx.position]],
        "aria-hidden": !_ctx.isActive,
        role: "alert"
      }, [
        (_ctx.$slots.default)
          ? renderSlot(_ctx.$slots, "default", { key: 0 })
          : (openBlock(), createBlock("div", {
              key: 1,
              innerHTML: _ctx.message
            }, null, 8 /* PROPS */, ["innerHTML"]))
      ], 10 /* CLASS, PROPS */, ["aria-hidden"]), [
        [vShow, _ctx.isActive]
      ])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["enter-active-class", "leave-active-class"]))
}

script$1.render = render$1;
script$1.__file = "src/components/toast/Toast.vue";

var localVueInstance;
var ToastProgrammatic = {
  open: function open(params) {
    var parent;

    if (typeof params === 'string') {
      params = {
        message: params
      };
    }

    var defaultParam = {
      position: config.defaultToastPosition || 'is-top'
    };

    if (params.parent) {
      parent = params.parent;
      delete params.parent;
    }

    var slot;

    if (Array.isArray(params.message)) {
      slot = params.message;
      delete params.message;
    }

    var propsData = merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance;
    var ToastComponent = vm.extend(script$1);
    var component = new ToastComponent({
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
var Plugin$2 = {
  install: function install(Vue) {
    localVueInstance = Vue;
    registerComponentProgrammatic(Vue, 'toast', ToastProgrammatic);
  }
};
use(Plugin$2);
/**
 * <template>
 *   <b-button @click="Toast.open">click me</button>
 *   <component :is="Toast">
 *     Success!
 *   </component>
 * </template>
 * <script>
 * export default {
 *   setup() {
 *     const Toast = useToast({ type: 'is-success' })
 *
 *     return { Toast }
 *   }
 * }
 * </script>
 */

function useToast(hookProps) {
  var isOpen = ref(false);

  var UseToast = function UseToast(props, context) {
    if (!isOpen.value) return null;
    return h(script$1, merge(hookProps, props), context.slots.default);
  };

  UseToast.open = function () {
    isOpen.value = true;
  };

  return UseToast;
}

var Plugin$1 = {
  install: function install(Vue) {
    registerComponent(Vue, script$i);
  }
};
use(Plugin$1);

var script = {
  name: 'BUpload',
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    value: {
      type: [Object, Function, File, Array]
    },
    multiple: Boolean,
    disabled: Boolean,
    accept: String,
    dragDrop: Boolean,
    type: {
      type: String,
      default: 'is-primary'
    },
    native: {
      type: Boolean,
      default: false
    },
    expanded: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      newValue: this.value,
      dragDropFocus: false,
      _elementRef: 'input'
    };
  },
  watch: {
    /**
     *   When v-model is changed:
     *   1. Set internal value.
     *   2. Reset interna input file value
     *   3. If it's invalid, validate again.
     */
    value: function value(_value) {
      this.newValue = _value;

      if (!_value || Array.isArray(_value) && _value.length === 0) {
        this.$refs.input.value = null;
      }

      !this.isValid && !this.dragDrop && this.checkHtml5Validity();
    }
  },
  methods: {
    /**
    * Listen change event on input type 'file',
    * emit 'input' event and validate
    */
    onFileChange: function onFileChange(event) {
      if (this.disabled || this.loading) return;
      if (this.dragDrop) this.updateDragDropFocus(false);
      var value = event.target.files || event.dataTransfer.files;

      if (value.length === 0) {
        if (!this.newValue) return;
        if (this.native) this.newValue = null;
      } else if (!this.multiple) {
        // only one element in case drag drop mode and isn't multiple
        if (this.dragDrop && value.length !== 1) return;else {
          var file = value[0];
          if (this.checkType(file)) this.newValue = file;else if (this.newValue) this.newValue = null;else return;
        }
      } else {
        // always new values if native or undefined local
        var newValues = false;

        if (this.native || !this.newValue) {
          this.newValue = [];
          newValues = true;
        }

        for (var i = 0; i < value.length; i++) {
          var _file = value[i];

          if (this.checkType(_file)) {
            this.newValue.push(_file);
            newValues = true;
          }
        }

        if (!newValues) return;
      }

      this.$emit('input', this.newValue);
      !this.dragDrop && this.checkHtml5Validity();
    },

    /**
    * Listen drag-drop to update internal variable
    */
    updateDragDropFocus: function updateDragDropFocus(focus) {
      if (!this.disabled && !this.loading) {
        this.dragDropFocus = focus;
      }
    },

    /**
    * Check mime type of file
    */
    checkType: function checkType(file) {
      if (!this.accept) return true;
      var types = this.accept.split(',');
      if (types.length === 0) return true;
      var valid = false;

      for (var i = 0; i < types.length && !valid; i++) {
        var type = types[i].trim();

        if (type) {
          if (type.substring(0, 1) === '.') {
            // check extension
            var extIndex = file.name.lastIndexOf('.');
            var extension = extIndex >= 0 ? file.name.substring(extIndex) : '';

            if (extension.toLowerCase() === type.toLowerCase()) {
              valid = true;
            }
          } else {
            // check mime type
            if (file.type.match(type)) {
              valid = true;
            }
          }
        }
      }

      if (!valid) this.$emit('invalid');
      return valid;
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("label", {
    class: ["upload control", {'is-expanded' : $props.expanded, 'is-rounded' : $props.rounded}]
  }, [
    (!$props.dragDrop)
      ? renderSlot(_ctx.$slots, "default", { key: 0 })
      : (openBlock(), createBlock("div", {
          key: 1,
          class: ["upload-draggable", [$props.type, {
                'is-loading': _ctx.loading,
                'is-disabled': $props.disabled,
                'is-hovered': $data.dragDropFocus,
                'is-expanded': $props.expanded,
            }]],
          onDragover: _cache[1] || (_cache[1] = withModifiers($event => ($options.updateDragDropFocus(true)), ["prevent"])),
          onDragleave: _cache[2] || (_cache[2] = withModifiers($event => ($options.updateDragDropFocus(false)), ["prevent"])),
          onDragenter: _cache[3] || (_cache[3] = withModifiers($event => ($options.updateDragDropFocus(true)), ["prevent"])),
          onDrop: _cache[4] || (_cache[4] = withModifiers((...args) => ($options.onFileChange && $options.onFileChange(...args)), ["prevent"]))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 34 /* CLASS, HYDRATE_EVENTS */)),
    createVNode("input", mergeProps({
      ref: "input",
      type: "file"
    }, _ctx.$attrs, {
      multiple: $props.multiple,
      accept: $props.accept,
      disabled: $props.disabled ? '' : null,
      onChange: _cache[5] || (_cache[5] = (...args) => ($options.onFileChange && $options.onFileChange(...args)))
    }), null, 16 /* FULL_PROPS */, ["multiple", "accept", "disabled"])
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/upload/Upload.vue";

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
  }
};
use(Plugin);

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Autocomplete: Plugin$D,
  Button: Plugin$C,
  Carousel: Plugin$B,
  Checkbox: Plugin$A,
  Clockpicker: Plugin$y,
  Collapse: Plugin$z,
  Datepicker: Plugin$x,
  Datetimepicker: Plugin$w,
  Dialog: Plugin$v,
  Dropdown: Plugin$u,
  Field: Plugin$t,
  Icon: Plugin$s,
  Image: Plugin$r,
  Input: Plugin$q,
  Loading: Plugin$p,
  Menu: Plugin$o,
  Message: Plugin$n,
  Modal: Plugin$m,
  Navbar: Plugin$k,
  Notification: Plugin$l,
  Numberinput: Plugin$j,
  Pagination: Plugin$i,
  Progress: Plugin$h,
  Radio: Plugin$g,
  Rate: Plugin$f,
  Select: Plugin$e,
  Skeleton: Plugin$d,
  Sidebar: Plugin$c,
  Slider: Plugin$b,
  Snackbar: Plugin$a,
  Steps: Plugin$9,
  Switch: Plugin$8,
  Table: Plugin$7,
  Tabs: Plugin$6,
  Tag: Plugin$5,
  Taginput: Plugin$4,
  Timepicker: Plugin$3,
  Toast: Plugin$2,
  Tooltip: Plugin$1,
  Upload: Plugin
});

var ConfigComponent = {
  getOptions: function getOptions() {
    return config;
  },
  setOptions: function setOptions$1(options) {
    setOptions(merge(config, options, true));
  }
};

var Buefy = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    setVueInstance(Vue); // Options

    setOptions(merge(config, options, true)); // Components

    for (var componentKey in components) {
      Vue.use(components[componentKey]);
    } // Config component


    registerComponentProgrammatic(Vue, 'config', ConfigComponent);
  }
};
use(Buefy);

export default Buefy;
export { Plugin$D as Autocomplete, Plugin$C as Button, Plugin$B as Carousel, Plugin$A as Checkbox, Plugin$y as Clockpicker, Plugin$z as Collapse, ConfigComponent as ConfigProgrammatic, Plugin$x as Datepicker, Plugin$w as Datetimepicker, Plugin$v as Dialog, DialogProgrammatic, Plugin$u as Dropdown, Plugin$t as Field, Plugin$s as Icon, Plugin$r as Image, Plugin$q as Input, Plugin$p as Loading, LoadingProgrammatic, Plugin$o as Menu, Plugin$n as Message, Plugin$m as Modal, ModalProgrammatic, Plugin$k as Navbar, Plugin$l as Notification, NotificationProgrammatic, Plugin$j as Numberinput, Plugin$i as Pagination, Plugin$h as Progress, Plugin$g as Radio, Plugin$f as Rate, Plugin$e as Select, Plugin$c as Sidebar, Plugin$d as Skeleton, Plugin$b as Slider, Plugin$a as Snackbar, SnackbarProgrammatic, Plugin$9 as Steps, Plugin$8 as Switch, Plugin$7 as Table, Plugin$6 as Tabs, Plugin$5 as Tag, Plugin$4 as Taginput, Plugin$3 as Timepicker, Plugin$2 as Toast, ToastProgrammatic, Plugin$1 as Tooltip, Plugin as Upload, bound, createAbsoluteElement, createNewEvent, escapeRegExpChars, getMonthNames, getSlot$1 as getSlot, getValueByPath, getWeekdayNames, hasFlag, indexOf, isCustomElement, isDefined, isMobile, isVueComponent, isWebpSupported, matchWithGroups, merge, mod, multiColumnSort, removeElement, sign, toCssWidth, useToast };
