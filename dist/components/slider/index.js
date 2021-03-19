/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Slider = {}, global.Vue));
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

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
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
   * Asserts a value is beetween min and max
   * @param val
   * @param min
   * @param max
   * @returns {number}
   */


  function bound(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }
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

  var script$3 = {
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

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("span", {
      ref: "tooltip",
      class: $options.rootClasses
    }, [
      vue.createVNode(vue.Transition, { name: $options.newAnimation }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createVNode("div", {
            ref: "content",
            class: ['tooltip-content', $props.contentClass]
          }, [
            ($props.label)
              ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                  vue.createTextVNode(vue.toDisplayString($props.label), 1 /* TEXT */)
                ], 64 /* STABLE_FRAGMENT */))
              : (_ctx.$slots.content)
                ? vue.renderSlot(_ctx.$slots, "content", { key: 1 })
                : vue.createCommentVNode("v-if", true)
          ], 2 /* CLASS */), [
            [vue.vShow, $props.active && ($data.isActive || $props.always)]
          ])
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["name"]),
      vue.createVNode("div", {
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
        vue.renderSlot(_ctx.$slots, "default", { ref: "slot" })
      ], 36 /* STYLE, HYDRATE_EVENTS */)
    ], 2 /* CLASS */))
  }

  script$3.render = render$3;
  script$3.__file = "src/components/tooltip/Tooltip.vue";

  var script$2 = {
    name: 'BSliderThumb',
    components: _defineProperty({}, script$3.name, script$3),
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

  const _hoisted_1$2 = { key: 0 };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_b_tooltip = vue.resolveComponent("b-tooltip");

    return (vue.openBlock(), vue.createBlock("div", {
      class: ["b-slider-thumb-wrapper", { 'is-dragging': $data.dragging, 'has-indicator': $props.indicator}],
      style: $options.wrapperStyle
    }, [
      vue.createVNode(_component_b_tooltip, {
        label: $options.formattedValue,
        type: $props.type,
        always: $data.dragging || $data.isFocused || $props.tooltipAlways,
        active: !$options.disabled && $props.tooltip
      }, {
        default: vue.withCtx(() => [
          vue.createVNode("div", vue.mergeProps({
            class: "b-slider-thumb",
            tabindex: $options.disabled ? false : 0
          }, _ctx.$attrs, {
            onMousedown: _cache[1] || (_cache[1] = (...args) => ($options.onButtonDown && $options.onButtonDown(...args))),
            onTouchstart: _cache[2] || (_cache[2] = (...args) => ($options.onButtonDown && $options.onButtonDown(...args))),
            onFocus: _cache[3] || (_cache[3] = (...args) => ($options.onFocus && $options.onFocus(...args))),
            onBlur: _cache[4] || (_cache[4] = (...args) => ($options.onBlur && $options.onBlur(...args))),
            onKeydown: [
              _cache[5] || (_cache[5] = vue.withKeys(vue.withModifiers((...args) => ($options.onLeftKeyDown && $options.onLeftKeyDown(...args)), ["prevent"]), ["left"])),
              _cache[6] || (_cache[6] = vue.withKeys(vue.withModifiers((...args) => ($options.onRightKeyDown && $options.onRightKeyDown(...args)), ["prevent"]), ["right"])),
              _cache[7] || (_cache[7] = vue.withKeys(vue.withModifiers((...args) => ($options.onLeftKeyDown && $options.onLeftKeyDown(...args)), ["prevent"]), ["down"])),
              _cache[8] || (_cache[8] = vue.withKeys(vue.withModifiers((...args) => ($options.onRightKeyDown && $options.onRightKeyDown(...args)), ["prevent"]), ["up"])),
              _cache[9] || (_cache[9] = vue.withKeys(vue.withModifiers((...args) => ($options.onHomeKeyDown && $options.onHomeKeyDown(...args)), ["prevent"]), ["home"])),
              _cache[10] || (_cache[10] = vue.withKeys(vue.withModifiers((...args) => ($options.onEndKeyDown && $options.onEndKeyDown(...args)), ["prevent"]), ["end"]))
            ]
          }), [
            ($props.indicator)
              ? (vue.openBlock(), vue.createBlock("span", _hoisted_1$2, vue.toDisplayString($options.formattedValue), 1 /* TEXT */))
              : vue.createCommentVNode("v-if", true)
          ], 16 /* FULL_PROPS */, ["tabindex"])
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["label", "type", "always", "active"])
    ], 6 /* CLASS, STYLE */))
  }

  script$2.render = render$2;
  script$2.__file = "src/components/slider/SliderThumb.vue";

  var script$1 = {
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

  const _hoisted_1$1 = {
    key: 0,
    class: "b-slider-tick-label"
  };

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", {
      class: ["b-slider-tick", { 'is-tick-hidden': $options.hidden }],
      style: $options.getTickStyle($options.position)
    }, [
      (_ctx.$slots.default)
        ? (vue.openBlock(), vue.createBlock("span", _hoisted_1$1, [
            vue.renderSlot(_ctx.$slots, "default")
          ]))
        : vue.createCommentVNode("v-if", true)
    ], 6 /* CLASS, STYLE */))
  }

  script$1.render = render$1;
  script$1.__file = "src/components/slider/SliderTick.vue";

  var _components;
  var script = {
    name: 'BSlider',
    components: (_components = {}, _defineProperty(_components, script$2.name, script$2), _defineProperty(_components, script$1.name, script$1), _components),
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

  const _hoisted_1 = {
    class: "b-slider-track",
    ref: "slider"
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_b_slider_tick = vue.resolveComponent("b-slider-tick");
    const _component_b_slider_thumb = vue.resolveComponent("b-slider-thumb");

    return (vue.openBlock(), vue.createBlock("div", {
      class: ["b-slider", [$props.size, $props.type, $options.rootClasses ]],
      onClick: _cache[3] || (_cache[3] = (...args) => ($options.onSliderClick && $options.onSliderClick(...args)))
    }, [
      vue.createVNode("div", _hoisted_1, [
        vue.createVNode("div", {
          class: "b-slider-fill",
          style: $options.barStyle
        }, null, 4 /* STYLE */),
        ($props.ticks)
          ? (vue.openBlock(true), vue.createBlock(vue.Fragment, { key: 0 }, vue.renderList($options.tickValues, (val, key) => {
              return (vue.openBlock(), vue.createBlock(_component_b_slider_tick, {
                key: key,
                value: val
              }, null, 8 /* PROPS */, ["value"]))
            }), 128 /* KEYED_FRAGMENT */))
          : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "default"),
        vue.createVNode(_component_b_slider_thumb, {
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
          ? (vue.openBlock(), vue.createBlock(_component_b_slider_thumb, {
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
          : vue.createCommentVNode("v-if", true)
      ], 512 /* NEED_PATCH */)
    ], 2 /* CLASS */))
  }

  script.render = render;
  script.__file = "src/components/slider/Slider.vue";

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
      registerComponent(Vue, script$1);
    }
  };
  use(Plugin);

  exports.BSlider = script;
  exports.BSliderTick = script$1;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
