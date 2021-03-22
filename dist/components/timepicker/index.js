/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Timepicker = {}, global.Vue));
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

  var AM = 'AM';
  var PM = 'PM';
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
            return "((?!=<".concat(part.type, ">)(").concat(vm.amString, "|").concat(vm.pmString, "|").concat(AM, "|").concat(PM, "|").concat(AM.toLowerCase(), "|").concat(PM.toLowerCase(), ")?)");
          }

          return "((?!=<".concat(part.type, ">)\\d+)");
        }).join('');
        var timeGroups = matchWithGroups(formatRegex, timeString); // We do a simple validation for the group.
        // If it is not valid, it will fallback to Date.parse below

        timeGroups.hour = timeGroups.hour ? parseInt(timeGroups.hour, 10) : null;
        timeGroups.minute = timeGroups.minute ? parseInt(timeGroups.minute, 10) : null;
        timeGroups.second = timeGroups.second ? parseInt(timeGroups.second, 10) : null;

        if (timeGroups.hour && timeGroups.hour >= 0 && timeGroups.hour < 24 && timeGroups.minute && timeGroups.minute >= 0 && timeGroups.minute < 59) {
          if (timeGroups.dayPeriod && (timeGroups.dayPeriod.toLowerCase() === vm.pmString.toLowerCase() || timeGroups.dayPeriod.toLowerCase() === PM.toLowerCase()) && timeGroups.hour < 12) {
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
        am = dateString12[1] === vm.amString || dateString12[1] === AM;
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
        AM: AM,
        PM: PM,
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
          if (value === this.pmString || value === PM) {
            this.hoursSelected += 12;
          } else if (value === this.amString || value === AM) {
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
  var script$7 = {
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

  function render$7(_ctx, _cache, $props, $setup, $data, $options) {
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

  script$7.render = render$7;
  script$7.__file = "src/components/dropdown/Dropdown.vue";

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

  var script$6 = {
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

  const _hoisted_1$3 = {
    key: 0,
    class: "dropdown-divider"
  };

  function render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return ($props.separator)
      ? (vue.openBlock(), vue.createBlock("hr", _hoisted_1$3))
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

  script$6.render = render$6;
  script$6.__file = "src/components/dropdown/DropdownItem.vue";

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

  var script$5 = {
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

  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
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

  script$5.render = render$5;
  script$5.__file = "src/components/icon/Icon.vue";

  var script$4 = {
    name: 'BInput',
    components: _defineProperty({}, script$5.name, script$5),
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

  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
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

  script$4.render = render$4;
  script$4.__file = "src/components/input/Input.vue";

  var script$3 = {
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

  const render$3 = () => {};


  script$3.render = render$3;
  script$3.__file = "src/components/field/FieldBody.vue";

  var script$2 = {
    name: 'BField',
    components: _defineProperty({}, script$3.name, script$3),
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

  const _hoisted_1$2 = {
    key: 3,
    class: "field-body"
  };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
          ? (vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [
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

  script$2.render = render$2;
  script$2.__file = "src/components/field/Field.vue";

  var script$1 = {
    name: 'BSelect',
    components: _defineProperty({}, script$5.name, script$5),
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

  const _hoisted_1$1 = {
    key: 0,
    value: null,
    disabled: "",
    hidden: ""
  };

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
                  ? (vue.openBlock(), vue.createBlock("option", _hoisted_1$1, vue.toDisplayString($props.placeholder), 1 /* TEXT */))
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

  script$1.render = render$1;
  script$1.__file = "src/components/select/Select.vue";

  var _components;
  var script = {
    name: 'BTimepicker',
    components: (_components = {}, _defineProperty(_components, script$4.name, script$4), _defineProperty(_components, script$2.name, script$2), _defineProperty(_components, script$1.name, script$1), _defineProperty(_components, script$5.name, script$5), _defineProperty(_components, script$7.name, script$7), _defineProperty(_components, script$6.name, script$6), _components),
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

  const _hoisted_1 = { class: "control is-colon" };
  const _hoisted_2 = { class: "control is-colon" };
  const _hoisted_3 = { class: "control is-colon" };
  const _hoisted_4 = {
    key: 0,
    class: "timepicker-footer"
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
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
                      vue.createVNode("span", _hoisted_1, vue.toDisplayString(_ctx.hourLiteral), 1 /* TEXT */),
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
                            vue.createVNode("span", _hoisted_2, vue.toDisplayString(_ctx.minuteLiteral), 1 /* TEXT */),
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
                            vue.createVNode("span", _hoisted_3, vue.toDisplayString(_ctx.secondLiteral), 1 /* TEXT */)
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
                    ? (vue.openBlock(), vue.createBlock("footer", _hoisted_4, [
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

  script.render = render;
  script.__file = "src/components/timepicker/Timepicker.vue";

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

  exports.BTimepicker = script;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
