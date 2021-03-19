/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Menu = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

    var script$3 = {
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

    const _hoisted_1$1 = { class: "menu" };

    function render$3(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [
        vue.renderSlot(_ctx.$slots, "default")
      ]))
    }

    script$3.render = render$3;
    script$3.__file = "src/components/menu/Menu.vue";

    var script$2 = {
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
          vlabel = vue.h('p', {
            attrs: {
              'class': 'menu-label'
            }
          }, context.props.label ? context.props.icon ? [vue.h('b-icon', {
            props: {
              'icon': context.props.icon,
              'pack': context.props.iconPack,
              'size': context.props.size
            }
          }), vue.h('span', {}, context.props.label)] : context.props.label : slots.label);
        }

        var vnode = vue.h('ul', {
          attrs: {
            'class': 'menu-list',
            'role': context.props.ariaRole === 'menu' ? context.props.ariaRole : null
          }
        }, slots.default);
        return vlabel ? [vlabel, vnode] : vnode;
      }
    };

    const render$2 = () => {};


    script$2.render = render$2;
    script$2.__file = "src/components/menu/MenuList.vue";

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

    var script = {
      name: 'BMenuItem',
      components: _defineProperty({}, script$1.name, script$1),
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

    const _hoisted_1 = { key: 1 };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_b_icon = vue.resolveComponent("b-icon");

      return (vue.openBlock(), vue.createBlock("li", { role: $options.ariaRoleMenu }, [
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.tag), vue.mergeProps(_ctx.$attrs, {
          class: {
                    'is-active': $data.newActive,
                    'is-expanded': $data.newExpanded,
                    'is-disabled': $props.disabled,
                    'icon-text': $props.icon,
                },
          onClick: _cache[1] || (_cache[1] = $event => ($options.onClick($event)))
        }, vue.toHandlers(_ctx.$listeners)), {
          default: vue.withCtx(() => [
            ($props.icon)
              ? (vue.openBlock(), vue.createBlock(_component_b_icon, {
                  key: 0,
                  icon: $props.icon,
                  pack: $props.iconPack,
                  size: $props.size
                }, null, 8 /* PROPS */, ["icon", "pack", "size"]))
              : vue.createCommentVNode("v-if", true),
            ($props.label)
              ? (vue.openBlock(), vue.createBlock("span", _hoisted_1, vue.toDisplayString($props.label), 1 /* TEXT */))
              : vue.renderSlot(_ctx.$slots, "label", {
                  key: 2,
                  expanded: $data.newExpanded,
                  active: $data.newActive
                })
          ]),
          _: 1 /* STABLE */
        }, 16 /* FULL_PROPS */, ["class"])),
        vue.createCommentVNode(" sub menu items "),
        (_ctx.$slots.default)
          ? (vue.openBlock(), vue.createBlock(vue.Transition, {
              key: 0,
              name: $props.animation
            }, {
              default: vue.withCtx(() => [
                vue.withDirectives(vue.createVNode("ul", null, [
                  vue.renderSlot(_ctx.$slots, "default")
                ], 512 /* NEED_PATCH */), [
                  [vue.vShow, $data.newExpanded]
                ])
              ]),
              _: 3 /* FORWARDED */
            }, 8 /* PROPS */, ["name"]))
          : vue.createCommentVNode("v-if", true)
      ], 8 /* PROPS */, ["role"]))
    }

    script.render = render;
    script.__file = "src/components/menu/MenuItem.vue";

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
        registerComponent(Vue, script$3);
        registerComponent(Vue, script$2);
        registerComponent(Vue, script);
      }
    };
    use(Plugin);

    exports.BMenu = script$3;
    exports.BMenuItem = script;
    exports.BMenuList = script$2;
    exports.default = Plugin;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
