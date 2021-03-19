'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a6b1b170.js');
var trapFocus = require('./trapFocus-050ad8e5.js');
var config = require('./config-1bc87110.js');
var helpers = require('./helpers.js');
var InjectedChildMixin = require('./InjectedChildMixin-28e1211a.js');
var vue = require('vue');

var DEFAULT_CLOSE_OPTIONS = ['escape', 'outside'];
var script$1 = {
  name: 'BDropdown',
  directives: {
    trapFocus: trapFocus.directive
  },
  mixins: [InjectedChildMixin.ProviderParentMixin('dropdown')],
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
        return config.config.defaultDropdownMobileModal;
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
        return config.config.defaultTrapFocus;
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
        maxHeight: this.scrollable ? helpers.toCssWidth(this.maxHeight) : null,
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
            this.selected = [].concat(_rollupPluginBabelHelpers._toConsumableArray(this.selected), [value]);
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
      var target = helpers.isCustomElement(this) ? event.composedPath()[0] : event.target;
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
          if (item && _rollupPluginBabelHelpers._typeof(item) === 'object') {
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
      this.$data._bodyEl = helpers.createAbsoluteElement(this.$refs.dropdownMenu);
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
      helpers.removeElement(this.$data._bodyEl);
    }
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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

script$1.render = render$1;
script$1.__file = "src/components/dropdown/Dropdown.vue";

var script = {
  name: 'BDropdownItem',
  mixins: [InjectedChildMixin.InjectedChildMixin('dropdown')],
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

const _hoisted_1 = {
  key: 0,
  class: "dropdown-divider"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ($props.separator)
    ? (vue.openBlock(), vue.createBlock("hr", _hoisted_1))
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

script.render = render;
script.__file = "src/components/dropdown/DropdownItem.vue";

exports.script = script$1;
exports.script$1 = script;
