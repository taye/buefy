/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Progress = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

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

  /**
   * Checks if the flag is set
   * @param val
   * @param flag
   * @returns {boolean}
   */

  function hasFlag(val, flag) {
    return (val & flag) === flag;
  }

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

  var script$1 = {
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

  const _hoisted_1$1 = {
    key: 2,
    class: "progress-value"
  };

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", {
      class: ["progress-wrapper", $options.wrapperClasses]
    }, [
      ($options.isNative)
        ? (vue.openBlock(), vue.createBlock("progress", {
            key: 0,
            ref: "progress",
            class: ["progress", $options.newType],
            max: $props.max,
            value: $props.value
          }, vue.toDisplayString($options.newValue), 11 /* TEXT, CLASS, PROPS */, ["max", "value"]))
        : vue.renderSlot(_ctx.$slots, "bar", { key: 1 }),
      ($options.isNative && $props.showValue)
        ? (vue.openBlock(), vue.createBlock("p", _hoisted_1$1, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createTextVNode(vue.toDisplayString($options.newValue), 1 /* TEXT */)
            ])
          ]))
        : vue.createCommentVNode("v-if", true)
    ], 2 /* CLASS */))
  }

  script$1.render = render$1;
  script$1.__file = "src/components/progress/Progress.vue";

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

  var script = {
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

  const _hoisted_1 = {
    key: 0,
    class: "progress-value"
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", {
      class: ["progress-bar", $options.newType],
      role: "progressbar",
      "aria-valuenow": $props.value,
      "aria-valuemax": _ctx.parent.max,
      "aria-valuemin": "0",
      style: {width: $options.barWidth}
    }, [
      ($options.newShowValue)
        ? (vue.openBlock(), vue.createBlock("p", _hoisted_1, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createTextVNode(vue.toDisplayString($options.newValue), 1 /* TEXT */)
            ])
          ]))
        : vue.createCommentVNode("v-if", true)
    ], 14 /* CLASS, STYLE, PROPS */, ["aria-valuenow", "aria-valuemax"]))
  }

  script.render = render;
  script.__file = "src/components/progress/ProgressBar.vue";

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
      registerComponent(Vue, script$1);
      registerComponent(Vue, script);
    }
  };
  use(Plugin);

  exports.BProgress = script$1;
  exports.BProgressBar = script;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
