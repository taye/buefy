import { _ as _defineProperty } from './_rollupPluginBabelHelpers-0979e6ce.js';
import { s as script$1 } from './Icon-9c398a60.js';
import { c as config } from './config-63b70aae.js';
import { F as FormElementMixin } from './FormElementMixin-3605f28d.js';
import { resolveComponent, openBlock, createBlock, mergeProps, createCommentVNode, toDisplayString } from 'vue';

var script = {
  name: 'BInput',
  components: _defineProperty({}, script$1.name, script$1),
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    value: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    lazy: {
      type: Boolean,
      default: false
    },
    passwordReveal: Boolean,
    iconClickable: Boolean,
    hasCounter: {
      type: Boolean,
      default: function _default() {
        return config.defaultInputHasCounter;
      }
    },
    customClass: {
      type: String,
      default: ''
    },
    iconRight: String,
    iconRightClickable: Boolean,
    iconRightType: String
  },
  data: function data() {
    return {
      newValue: this.value,
      newType: this.type,
      newAutocomplete: this.autocomplete || config.defaultInputAutocomplete,
      isPasswordVisible: false,
      _elementRef: this.type === 'textarea' ? 'textarea' : 'input'
    };
  },
  computed: {
    computedValue: {
      get: function get() {
        return this.newValue;
      },
      set: function set(value) {
        this.newValue = value;
        this.$emit('input', value);
      }
    },
    rootClasses: function rootClasses() {
      return [this.iconPosition, this.size, {
        'is-expanded': this.expanded,
        'is-loading': this.loading,
        'is-clearfix': !this.hasMessage
      }];
    },
    inputClasses: function inputClasses() {
      return [this.statusType, this.size, {
        'is-rounded': this.rounded
      }];
    },
    hasIconRight: function hasIconRight() {
      return this.passwordReveal || this.loading || this.statusIcon && this.statusTypeIcon || this.iconRight;
    },
    rightIcon: function rightIcon() {
      if (this.passwordReveal) {
        return this.passwordVisibleIcon;
      } else if (this.iconRight) {
        return this.iconRight;
      }

      return this.statusTypeIcon;
    },
    rightIconType: function rightIconType() {
      if (this.passwordReveal) {
        return 'is-primary';
      } else if (this.iconRight) {
        return this.iconRightType || null;
      }

      return this.statusType;
    },

    /**
    * Position of the icon or if it's both sides.
    */
    iconPosition: function iconPosition() {
      var iconClasses = '';

      if (this.icon) {
        iconClasses += 'has-icons-left ';
      }

      if (this.hasIconRight) {
        iconClasses += 'has-icons-right';
      }

      return iconClasses;
    },

    /**
    * Icon name (MDI) based on the type.
    */
    statusTypeIcon: function statusTypeIcon() {
      switch (this.statusType) {
        case 'is-success':
          return 'check';

        case 'is-danger':
          return 'alert-circle';

        case 'is-info':
          return 'information';

        case 'is-warning':
          return 'alert';
      }
    },

    /**
    * Check if have any message prop from parent if it's a Field.
    */
    hasMessage: function hasMessage() {
      return !!this.statusMessage;
    },

    /**
    * Current password-reveal icon name.
    */
    passwordVisibleIcon: function passwordVisibleIcon() {
      return !this.isPasswordVisible ? 'eye' : 'eye-off';
    },

    /**
    * Get value length
    */
    valueLength: function valueLength() {
      if (typeof this.computedValue === 'string') {
        return this.computedValue.length;
      } else if (typeof this.computedValue === 'number') {
        return this.computedValue.toString().length;
      }

      return 0;
    }
  },
  watch: {
    /**
    * When v-model is changed:
    *   1. Set internal value.
    */
    value: function value(_value) {
      this.newValue = _value;
    }
  },
  methods: {
    /**
    * Toggle the visibility of a password-reveal input
    * by changing the type and focus the input right away.
    */
    togglePasswordVisibility: function togglePasswordVisibility() {
      var _this = this;

      this.isPasswordVisible = !this.isPasswordVisible;
      this.newType = this.isPasswordVisible ? 'text' : 'password';
      this.$nextTick(function () {
        _this.focus();
      });
    },
    iconClick: function iconClick(emit, event) {
      var _this2 = this;

      this.$emit(emit, event);
      this.$nextTick(function () {
        _this2.focus();
      });
    },
    rightIconClick: function rightIconClick(event) {
      if (this.passwordReveal) {
        this.togglePasswordVisibility();
      } else if (this.iconRightClickable) {
        this.iconClick('icon-right-click', event);
      }
    },
    onInput: function onInput(event) {
      if (!this.lazy) {
        var value = event.target.value;
        this.updateValue(value);
      }
    },
    onChange: function onChange(event) {
      if (this.lazy) {
        var value = event.target.value;
        this.updateValue(value);
      }
    },
    updateValue: function updateValue(value) {
      this.computedValue = value;
      !this.isValid && this.checkHtml5Validity();
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock("div", {
    class: ["control", $options.rootClasses]
  }, [
    ($props.type !== 'textarea')
      ? (openBlock(), createBlock("input", mergeProps({
          key: 0,
          ref: "input",
          class: ["input", [$options.inputClasses, $props.customClass]],
          type: $data.newType,
          autocomplete: $data.newAutocomplete,
          maxlength: _ctx.maxlength,
          value: $options.computedValue
        }, _ctx.$attrs, {
          onInput: _cache[1] || (_cache[1] = (...args) => ($options.onInput && $options.onInput(...args))),
          onChange: _cache[2] || (_cache[2] = (...args) => ($options.onChange && $options.onChange(...args))),
          onBlur: _cache[3] || (_cache[3] = (...args) => (_ctx.onBlur && _ctx.onBlur(...args))),
          onFocus: _cache[4] || (_cache[4] = (...args) => (_ctx.onFocus && _ctx.onFocus(...args)))
        }), null, 16 /* FULL_PROPS */, ["type", "autocomplete", "maxlength", "value"]))
      : (openBlock(), createBlock("textarea", mergeProps({
          key: 1,
          ref: "textarea",
          class: ["textarea", [$options.inputClasses, $props.customClass]],
          maxlength: _ctx.maxlength,
          value: $options.computedValue
        }, _ctx.$attrs, {
          onInput: _cache[5] || (_cache[5] = (...args) => ($options.onInput && $options.onInput(...args))),
          onChange: _cache[6] || (_cache[6] = (...args) => ($options.onChange && $options.onChange(...args))),
          onBlur: _cache[7] || (_cache[7] = (...args) => (_ctx.onBlur && _ctx.onBlur(...args))),
          onFocus: _cache[8] || (_cache[8] = (...args) => (_ctx.onFocus && _ctx.onFocus(...args)))
        }), null, 16 /* FULL_PROPS */, ["maxlength", "value"])),
    (_ctx.icon)
      ? (openBlock(), createBlock(_component_b_icon, {
          key: 2,
          class: ["is-left", {'is-clickable': $props.iconClickable}],
          icon: _ctx.icon,
          pack: _ctx.iconPack,
          size: _ctx.iconSize,
          onClick: _cache[9] || (_cache[9] = $event => ($options.iconClick('icon-click', $event)))
        }, null, 8 /* PROPS */, ["class", "icon", "pack", "size"]))
      : createCommentVNode("v-if", true),
    (!_ctx.loading && $options.hasIconRight)
      ? (openBlock(), createBlock(_component_b_icon, {
          key: 3,
          class: ["is-right", { 'is-clickable': $props.passwordReveal || $props.iconRightClickable }],
          icon: $options.rightIcon,
          pack: _ctx.iconPack,
          size: _ctx.iconSize,
          type: $options.rightIconType,
          both: "",
          onClick: $options.rightIconClick
        }, null, 8 /* PROPS */, ["class", "icon", "pack", "size", "type", "onClick"]))
      : createCommentVNode("v-if", true),
    (_ctx.maxlength && $props.hasCounter && $props.type !== 'number')
      ? (openBlock(), createBlock("small", {
          key: 4,
          class: ["help counter", { 'is-invisible': !_ctx.isFocused }]
        }, toDisplayString($options.valueLength) + " / " + toDisplayString(_ctx.maxlength), 3 /* TEXT, CLASS */))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/input/Input.vue";

export { script as s };
