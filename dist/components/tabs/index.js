/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Tabs = {}, global.Vue));
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
   * Checks if the flag is set
   * @param val
   * @param flag
   * @returns {boolean}
   */

  function hasFlag(val, flag) {
    return (val & flag) === flag;
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
        return vue.h(this.tag, {}, getSlot(scopedSlots, this.name, this.props));
      }
    }
  };

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

  var TabbedMixin = (function (cmp) {
    var _components;

    return {
      mixins: [ProviderParentMixin(cmp, Sorted$1)],
      components: (_components = {}, _defineProperty(_components, script$2.name, script$2), _defineProperty(_components, SlotComponent.name, SlotComponent), _components),
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

  var tabbedMixin = TabbedMixin('tab');
  var script$1 = {
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

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_b_slot_component = vue.resolveComponent("b-slot-component");
    const _component_b_icon = vue.resolveComponent("b-icon");

    return (vue.openBlock(), vue.createBlock("div", {
      class: ["b-tabs", $options.mainClasses]
    }, [
      vue.createVNode("nav", {
        class: ["tabs", $options.navClasses]
      }, [
        vue.createVNode("ul", null, [
          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.items, (childItem) => {
            return vue.withDirectives((vue.openBlock(), vue.createBlock("li", {
              key: childItem.value,
              class: [ childItem.headerClass, { 'is-active': childItem.isActive,
                                                         'is-disabled': childItem.disabled }]
            }, [
              (typeof (childItem.$scopedSlots || childItem.$slots).header === 'function')
                ? (vue.openBlock(), vue.createBlock(_component_b_slot_component, {
                    key: 0,
                    component: childItem,
                    name: "header",
                    tag: "a",
                    onClick: $event => (_ctx.childClick(childItem))
                  }, null, 8 /* PROPS */, ["component", "onClick"]))
                : (vue.openBlock(), vue.createBlock("a", {
                    key: 1,
                    onClick: $event => (_ctx.childClick(childItem))
                  }, [
                    (childItem.icon)
                      ? (vue.openBlock(), vue.createBlock(_component_b_icon, {
                          key: 0,
                          icon: childItem.icon,
                          pack: childItem.iconPack,
                          size: _ctx.size
                        }, null, 8 /* PROPS */, ["icon", "pack", "size"]))
                      : vue.createCommentVNode("v-if", true),
                    vue.createVNode("span", null, vue.toDisplayString(childItem.label), 1 /* TEXT */)
                  ], 8 /* PROPS */, ["onClick"]))
            ], 2 /* CLASS */)), [
              [vue.vShow, childItem.visible]
            ])
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ], 2 /* CLASS */),
      vue.createVNode("section", {
        class: ["tab-content", {'is-transitioning': _ctx.isTransitioning}]
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2 /* CLASS */)
    ], 2 /* CLASS */))
  }

  script$1.render = render$1;
  script$1.__file = "src/components/tabs/Tabs.vue";

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

  function render(_ctx, _cache) {
    return (_ctx.parent.animated)
      ? (vue.openBlock(), vue.createBlock(vue.Transition, {
          key: 0,
          name: _ctx.parent.animated ? _ctx.parent.animation || _ctx.transitionName : null,
          onBeforeEnter: _cache[1] || (_cache[1] = $event => (_ctx.parent.isTransitioning = true)),
          onAfterEnter: _cache[2] || (_cache[2] = $event => (_ctx.parent.isTransitioning = false))
        }, {
          default: vue.withCtx(() => [
            (_ctx.parent.destroyOnHide ? _ctx.show : true)
              ? vue.withDirectives((vue.openBlock(), vue.createBlock("div", {
                  key: 0,
                  class: _ctx.elementClass
                }, [
                  vue.renderSlot(_ctx.$slots, "default")
                ], 2 /* CLASS */)), [
                  [vue.vShow, _ctx.show]
                ])
              : vue.createCommentVNode("v-if", true)
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["name"]))
      : (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 1 }, [
          (_ctx.parent.destroyOnHide ? _ctx.show : true)
            ? vue.withDirectives((vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: _ctx.elementClass
              }, [
                vue.renderSlot(_ctx.$slots, "default")
              ], 2 /* CLASS */)), [
                [vue.vShow, _ctx.show]
              ])
            : vue.createCommentVNode("v-if", true)
        ], 64 /* STABLE_FRAGMENT */))
  }

  const script = {};


  script.render = render;
  script.__file = "src/utils/TabbedChildMixinRender.vue";

  var TabbedChildMixin = (function (parentCmp) {
    return vue.defineComponent({
      mixins: [InjectedChildMixin(parentCmp, Sorted), script],
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
      registerComponent(Vue, TabItem);
    }
  };
  use(Plugin);

  exports.BTabItem = TabItem;
  exports.BTabs = script$1;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
