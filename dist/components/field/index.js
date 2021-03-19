/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Field = {}, global.Vue));
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

  function getSlot(slots, name, props) {
    var value = slots[name];
    return typeof value === 'function' ? value(props) : value;
  }

  var script$1 = {
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

  const render$1 = () => {};


  script$1.render = render$1;
  script$1.__file = "src/components/field/FieldBody.vue";

  var script = {
    name: 'BField',
    components: _defineProperty({}, script$1.name, script$1),
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

  const _hoisted_1 = {
    key: 3,
    class: "field-body"
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
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
          ? (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
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

  script.render = render;
  script.__file = "src/components/field/Field.vue";

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

  exports.BField = script;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
