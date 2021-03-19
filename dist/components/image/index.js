/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Image = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

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
    function getSlot(slots, name, props) {
      var value = slots[name];
      return typeof value === 'function' ? value(props) : value;
    }

    var script = {
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
          return !this.loaded && (getSlot(this.$slots, 'placeholder') || this.placeholder && (this.webpSupportVerified || !this.isPlaceholderWepb));
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
          return getSlot(this.$slots, 'caption') && this.captionFirst;
        },
        isCaptionLast: function isCaptionLast() {
          return getSlot(this.$slots, 'caption') && !this.captionFirst;
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

    exports.BImage = script;
    exports.default = Plugin;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
