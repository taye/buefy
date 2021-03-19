'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var config = require('./config-1bc87110.js');
var helpers = require('./helpers.js');
var vue = require('vue');
var plugins = require('./plugins-c99a13c9.js');
require('./_rollupPluginBabelHelpers-a6b1b170.js');

var script = {
  name: 'BImage',
  props: {
    src: String,
    alt: String,
    srcFallback: String,
    webpFallback: {
      type: String,
      default: function _default() {
        return config.config.defaultImageWebpFallback;
      }
    },
    lazy: {
      type: Boolean,
      default: function _default() {
        return config.config.defaultImageLazy;
      }
    },
    responsive: {
      type: Boolean,
      default: function _default() {
        return config.config.defaultImageResponsive;
      }
    },
    ratio: {
      type: String,
      default: function _default() {
        return config.config.defaultImageRatio;
      }
    },
    placeholder: String,
    srcset: String,
    srcsetSizes: Array,
    srcsetFormatter: {
      type: Function,
      default: function _default(src, size, vm) {
        if (typeof config.config.defaultImageSrcsetFormatter === 'function') {
          return config.config.defaultImageSrcsetFormatter(src, size);
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
      return !this.loaded && (helpers.getSlot(this.$slots, 'placeholder') || this.placeholder && (this.webpSupportVerified || !this.isPlaceholderWepb));
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
      return helpers.getSlot(this.$slots, 'caption') && this.captionFirst;
    },
    isCaptionLast: function isCaptionLast() {
      return helpers.getSlot(this.$slots, 'caption') && !this.captionFirst;
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
      helpers.isWebpSupported().then(function (supported) {
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

const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("figure", {
    class: ["b-image-wrapper", $options.figureClasses],
    style: $options.figureStyles
  }, [
    ($options.isCaptionFirst)
      ? (vue.openBlock(), vue.createBlock("figcaption", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "caption")
        ]))
      : vue.createCommentVNode("v-if", true),
    vue.createVNode(vue.Transition, { name: "fade" }, {
      default: vue.withCtx(() => [
        ($options.isDisplayed)
          ? (vue.openBlock(), vue.createBlock("img", {
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
          : vue.createCommentVNode("v-if", true)
      ]),
      _: 1 /* STABLE */
    }),
    vue.createVNode(vue.Transition, { name: "fade" }, {
      default: vue.withCtx(() => [
        ($options.isPlaceholderDisplayed)
          ? vue.renderSlot(_ctx.$slots, "placeholder", { key: 0 }, () => [
              vue.createVNode("img", {
                src: $options.computedPlaceholder,
                alt: $props.alt,
                class: [$options.imgClasses, "placeholder"]
              }, null, 10 /* CLASS, PROPS */, ["src", "alt"])
            ])
          : vue.createCommentVNode("v-if", true)
      ]),
      _: 1 /* STABLE */
    }),
    ($options.isCaptionLast)
      ? (vue.openBlock(), vue.createBlock("figcaption", _hoisted_2, [
          vue.renderSlot(_ctx.$slots, "caption")
        ]))
      : vue.createCommentVNode("v-if", true)
  ], 6 /* CLASS, STYLE */))
}

script.render = render;
script.__file = "src/components/image/Image.vue";

var Plugin = {
  install: function install(Vue) {
    plugins.registerComponent(Vue, script);
  }
};
plugins.use(Plugin);

exports.BImage = script;
exports.default = Plugin;
