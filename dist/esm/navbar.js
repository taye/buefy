import { b as _typeof, _ as _defineProperty } from './_rollupPluginBabelHelpers-0979e6ce.js';
import { openBlock, createBlock, mergeProps, toHandlers, createVNode, h, resolveDynamicComponent, withCtx, renderSlot, resolveDirective, withDirectives, withModifiers, Fragment, createTextVNode, toDisplayString, vShow } from 'vue';
import { getSlot } from './helpers.js';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';

var script$3 = {
  name: 'NavbarBurger',
  props: {
    isOpened: {
      type: Boolean,
      default: false
    }
  }
};

const _hoisted_1 = /*#__PURE__*/createVNode("span", { "aria-hidden": "true" }, null, -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/createVNode("span", { "aria-hidden": "true" }, null, -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/createVNode("span", { "aria-hidden": "true" }, null, -1 /* HOISTED */);

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("a", mergeProps({
    role: "button",
    class: ["navbar-burger burger", { 'is-active': $props.isOpened }],
    "aria-label": "menu",
    "aria-expanded": $props.isOpened
  }, toHandlers(_ctx.$listeners)), [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3
  ], 16 /* FULL_PROPS */, ["aria-expanded"]))
}

script$3.render = render$3;
script$3.__file = "src/components/navbar/NavbarBurger.vue";

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

var script$2 = {
  name: 'BNavbar',
  components: {
    NavbarBurger: script$3
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
      }, [getSlot(this.$slots, 'brand'), this.genBurgerNode(createElement)]);
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
      }, getSlot(this.$slots, positionName));
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

const render$2 = () => {};


script$2.render = render$2;
script$2.__file = "src/components/navbar/Navbar.vue";

var clickableWhiteList = ['div', 'span', 'input'];
var script$1 = {
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

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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

script$1.render = render$1;
script$1.__file = "src/components/navbar/NavbarItem.vue";

var script = {
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
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

script.render = render;
script.__file = "src/components/navbar/NavbarDropdown.vue";

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script$2);
    registerComponent(Vue, script$1);
    registerComponent(Vue, script);
  }
};
use(Plugin);

export default Plugin;
export { script$2 as BNavbar, script as BNavbarDropdown, script$1 as BNavbarItem };
