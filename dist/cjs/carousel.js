'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a6b1b170.js');
var config = require('./config-1bc87110.js');
var Icon = require('./Icon-59750035.js');
var InjectedChildMixin = require('./InjectedChildMixin-28e1211a.js');
var helpers = require('./helpers.js');
var vue = require('vue');
var plugins = require('./plugins-c99a13c9.js');

var script$2 = {
  name: 'BCarousel',
  components: _rollupPluginBabelHelpers._defineProperty({}, Icon.script.name, Icon.script),
  mixins: [InjectedChildMixin.ProviderParentMixin('carousel', InjectedChildMixin.Sorted)],
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
        return config.config.defaultIconPrev;
      }
    },
    iconNext: {
      type: String,
      default: function _default() {
        return config.config.defaultIconNext;
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
      }, this.interval || config.config.defaultCarouselInterval);
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
      newIndex = this.repeat ? helpers.mod(newIndex, this.childItems.length) : helpers.bound(newIndex, 0, this.childItems.length - 1);
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

const _hoisted_1$2 = {
  key: 1,
  class: "carousel-pause"
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = vue.resolveComponent("b-icon");

  return (vue.openBlock(), vue.createBlock("div", {
    class: ["carousel", {'is-overlay': $props.overlay}],
    onMouseenter: _cache[5] || (_cache[5] = (...args) => ($options.checkPause && $options.checkPause(...args))),
    onMouseleave: _cache[6] || (_cache[6] = (...args) => ($options.startTimer && $options.startTimer(...args)))
  }, [
    ($props.progress)
      ? (vue.openBlock(), vue.createBlock("progress", {
          key: 0,
          class: ["progress", $props.progressType],
          value: $data.activeChild,
          max: _ctx.childItems.length - 1
        }, vue.toDisplayString(_ctx.childItems.length - 1), 11 /* TEXT, CLASS, PROPS */, ["value", "max"]))
      : vue.createCommentVNode("v-if", true),
    vue.createVNode("div", {
      class: "carousel-items",
      onMousedown: _cache[1] || (_cache[1] = (...args) => ($options.dragStart && $options.dragStart(...args))),
      onMouseup: _cache[2] || (_cache[2] = (...args) => ($options.dragEnd && $options.dragEnd(...args))),
      onTouchstart: _cache[3] || (_cache[3] = vue.withModifiers((...args) => ($options.dragStart && $options.dragStart(...args)), ["stop"])),
      onTouchend: _cache[4] || (_cache[4] = vue.withModifiers((...args) => ($options.dragEnd && $options.dragEnd(...args)), ["stop"]))
    }, [
      vue.renderSlot(_ctx.$slots, "default"),
      ($props.arrow)
        ? (vue.openBlock(), vue.createBlock("div", {
            key: 0,
            class: ["carousel-arrow", {'is-hovered': $props.arrowHover}]
          }, [
            vue.withDirectives(vue.createVNode(_component_b_icon, {
              class: "has-icons-left",
              onClick: $options.prev,
              pack: $props.iconPack,
              icon: $props.iconPrev,
              size: $props.iconSize,
              both: ""
            }, null, 8 /* PROPS */, ["onClick", "pack", "icon", "size"]), [
              [vue.vShow, $options.hasPrev]
            ]),
            vue.withDirectives(vue.createVNode(_component_b_icon, {
              class: "has-icons-right",
              onClick: $options.next,
              pack: $props.iconPack,
              icon: $props.iconNext,
              size: $props.iconSize,
              both: ""
            }, null, 8 /* PROPS */, ["onClick", "pack", "icon", "size"]), [
              [vue.vShow, $options.hasNext]
            ])
          ], 2 /* CLASS */))
        : vue.createCommentVNode("v-if", true)
    ], 32 /* HYDRATE_EVENTS */),
    ($props.autoplay && $props.pauseHover && $props.pauseInfo && $data.isPause)
      ? (vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [
          vue.createVNode("span", {
            class: ["tag", $props.pauseInfoType]
          }, vue.toDisplayString($props.pauseText), 3 /* TEXT, CLASS */)
        ]))
      : vue.createCommentVNode("v-if", true),
    ($props.withCarouselList && !$props.indicator)
      ? vue.renderSlot(_ctx.$slots, "list", {
          key: 2,
          active: $data.activeChild,
          switch: $options.changeActive
        })
      : vue.createCommentVNode("v-if", true),
    ($props.indicator)
      ? (vue.openBlock(), vue.createBlock("div", {
          key: 3,
          class: ["carousel-indicator", $options.indicatorClasses]
        }, [
          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.sortedItems, (item, index) => {
            return (vue.openBlock(), vue.createBlock("a", {
              class: ["indicator-item", {'is-active': item.isActive}],
              onMouseover: $event => ($options.modeChange('hover', index)),
              onClick: $event => ($options.modeChange('click', index)),
              key: item._uid
            }, [
              vue.renderSlot(_ctx.$slots, "indicators", { i: index }, () => [
                vue.createVNode("span", {
                  class: ["indicator-style", $props.indicatorStyle]
                }, null, 2 /* CLASS */)
              ])
            ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["onMouseover", "onClick"]))
          }), 128 /* KEYED_FRAGMENT */))
        ], 2 /* CLASS */))
      : vue.createCommentVNode("v-if", true),
    ($props.overlay)
      ? vue.renderSlot(_ctx.$slots, "overlay", { key: 4 })
      : vue.createCommentVNode("v-if", true)
  ], 34 /* CLASS, HYDRATE_EVENTS */))
}

script$2.render = render$2;
script$2.__file = "src/components/carousel/Carousel.vue";

var script$1 = {
  name: 'BCarouselItem',
  mixins: [InjectedChildMixin.InjectedChildMixin('carousel', InjectedChildMixin.Sorted$1)],
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

const _hoisted_1$1 = { class: "carousel-item" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock(vue.Transition, { name: $options.transition }, {
    default: vue.withCtx(() => [
      vue.withDirectives(vue.createVNode("div", _hoisted_1$1, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 512 /* NEED_PATCH */), [
        [vue.vShow, $options.isActive]
      ])
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["name"]))
}

script$1.render = render$1;
script$1.__file = "src/components/carousel/CarouselItem.vue";

var script = {
  name: 'BCarouselList',
  components: _rollupPluginBabelHelpers._defineProperty({}, Icon.script.name, Icon.script),
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
        return config.config.defaultIconPrev;
      }
    },
    iconNext: {
      type: String,
      default: function _default() {
        return config.config.defaultIconNext;
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
      return -helpers.bound(this.delta + this.scrollIndex * this.itemWidth, 0, (this.data.length - this.settings.itemsToShow) * this.itemWidth);
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
        return _rollupPluginBabelHelpers._objectSpread2({}, this.$props, {}, this.breakpoints[breakpoint]);
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
        this.activeItem = helpers.bound(_value, 0, this.data.length - 1);
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
        newIndex = helpers.mod(newIndex, this.total + 1);
      }

      newIndex = helpers.bound(newIndex, 0, this.total);
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
        var signCheck = helpers.sign(this.delta);
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

const _hoisted_1 = { class: "image" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = vue.resolveComponent("b-icon");

  return (vue.openBlock(), vue.createBlock("div", {
    class: ["carousel-list", {'has-shadow': $data.scrollIndex > 0}],
    onMousedown: _cache[1] || (_cache[1] = vue.withModifiers((...args) => ($options.dragStart && $options.dragStart(...args)), ["prevent"])),
    onTouchstart: _cache[2] || (_cache[2] = (...args) => ($options.dragStart && $options.dragStart(...args)))
  }, [
    vue.createVNode("div", {
      class: ["carousel-slides", $options.listClass],
      style: 'transform:translateX('+$options.translation+'px)'
    }, [
      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.data, (list, index) => {
        return (vue.openBlock(), vue.createBlock("div", {
          class: ["carousel-slide", {'is-active': $props.asIndicator ? $data.activeItem === index : $data.scrollIndex === index}],
          onMouseup: $event => ($options.checkAsIndicator(index, $event)),
          onTouchend: $event => ($options.checkAsIndicator(index, $event)),
          key: index,
          style: $options.itemStyle
        }, [
          vue.renderSlot(_ctx.$slots, "item", vue.mergeProps({
            index: index,
            active: $data.activeItem,
            scroll: $data.scrollIndex
          }, list, { list: list }), () => [
            vue.createVNode("figure", _hoisted_1, [
              vue.createVNode("img", {
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
      ? (vue.openBlock(), vue.createBlock("div", {
          key: 0,
          class: ["carousel-arrow", {'is-hovered': $options.settings.arrowHover}]
        }, [
          vue.withDirectives(vue.createVNode(_component_b_icon, {
            class: "has-icons-left",
            onClick: vue.withModifiers($options.prev, ["prevent"]),
            pack: $options.settings.iconPack,
            icon: $options.settings.iconPrev,
            size: $options.settings.iconSize,
            both: ""
          }, null, 8 /* PROPS */, ["onClick", "pack", "icon", "size"]), [
            [vue.vShow, $options.hasPrev]
          ]),
          vue.withDirectives(vue.createVNode(_component_b_icon, {
            class: "has-icons-right",
            onClick: vue.withModifiers($options.next, ["prevent"]),
            pack: $options.settings.iconPack,
            icon: $options.settings.iconNext,
            size: $options.settings.iconSize,
            both: ""
          }, null, 8 /* PROPS */, ["onClick", "pack", "icon", "size"]), [
            [vue.vShow, $options.hasNext]
          ])
        ], 2 /* CLASS */))
      : vue.createCommentVNode("v-if", true)
  ], 34 /* CLASS, HYDRATE_EVENTS */))
}

script.render = render;
script.__file = "src/components/carousel/CarouselList.vue";

var Plugin = {
  install: function install(Vue) {
    plugins.registerComponent(Vue, script$2);
    plugins.registerComponent(Vue, script$1);
    plugins.registerComponent(Vue, script);
  }
};
plugins.use(Plugin);

exports.BCarousel = script$2;
exports.BCarouselItem = script$1;
exports.BCarouselList = script;
exports.default = Plugin;
