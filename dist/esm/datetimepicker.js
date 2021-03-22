import { _ as _defineProperty } from './_rollupPluginBabelHelpers-0979e6ce.js';
import { F as FormElementMixin } from './FormElementMixin-3605f28d.js';
import { isMobile, matchWithGroups } from './helpers.js';
import { c as config } from './config-63b70aae.js';
import { s as script$1 } from './Datepicker-6625a83d.js';
import { s as script$2 } from './Timepicker-7175379d.js';
import { resolveComponent, openBlock, createBlock, mergeProps, withCtx, createVNode, renderSlot, createCommentVNode } from 'vue';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './DropdownItem-ed80df00.js';
import './trapFocus-d909e804.js';
import './InjectedChildMixin-9132fdb9.js';
import './Input-a74a428d.js';
import './Icon-9c398a60.js';
import './Field-8552a3af.js';
import './Select-2baea3c2.js';
import './TimepickerMixin-dd9933e7.js';

var _components;
var AM = 'AM';
var PM = 'PM';
var script = {
  name: 'BDatetimepicker',
  components: (_components = {}, _defineProperty(_components, script$1.name, script$1), _defineProperty(_components, script$2.name, script$2), _components),
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    value: {
      type: Date
    },
    editable: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    horizontalTimePicker: Boolean,
    disabled: Boolean,
    icon: String,
    iconPack: String,
    inline: Boolean,
    openOnFocus: Boolean,
    position: String,
    mobileNative: {
      type: Boolean,
      default: true
    },
    minDatetime: Date,
    maxDatetime: Date,
    datetimeFormatter: {
      type: Function
    },
    datetimeParser: {
      type: Function
    },
    datetimeCreator: {
      type: Function,
      default: function _default(date) {
        if (typeof config.defaultDatetimeCreator === 'function') {
          return config.defaultDatetimeCreator(date);
        } else {
          return date;
        }
      }
    },
    datepicker: Object,
    timepicker: Object,
    tzOffset: {
      type: Number,
      default: 0
    },
    focusable: {
      type: Boolean,
      default: true
    },
    appendToBody: Boolean
  },
  data: function data() {
    return {
      newValue: this.adjustValue(this.value)
    };
  },
  computed: {
    computedValue: {
      get: function get() {
        return this.newValue;
      },
      set: function set(value) {
        if (value) {
          var val = new Date(value.getTime());

          if (this.newValue) {
            // restore time part
            if ((value.getDate() !== this.newValue.getDate() || value.getMonth() !== this.newValue.getMonth() || value.getFullYear() !== this.newValue.getFullYear()) && value.getHours() === 0 && value.getMinutes() === 0 && value.getSeconds() === 0) {
              val.setHours(this.newValue.getHours(), this.newValue.getMinutes(), this.newValue.getSeconds(), 0);
            }
          } else {
            val = this.datetimeCreator(value);
          } // check min and max range


          if (this.minDatetime && val < this.adjustValue(this.minDatetime)) {
            val = this.adjustValue(this.minDatetime);
          } else if (this.maxDatetime && val > this.adjustValue(this.maxDatetime)) {
            val = this.adjustValue(this.maxDatetime);
          }

          this.newValue = new Date(val.getTime());
        } else {
          this.newValue = this.adjustValue(this.value);
        }

        var adjustedValue = this.adjustValue(this.newValue, true); // reverse adjust

        this.$emit('input', adjustedValue);
      }
    },
    localeOptions: function localeOptions() {
      return new Intl.DateTimeFormat(this.locale, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: this.enableSeconds() ? 'numeric' : undefined
      }).resolvedOptions();
    },
    dtf: function dtf() {
      return new Intl.DateTimeFormat(this.locale, {
        year: this.localeOptions.year || 'numeric',
        month: this.localeOptions.month || 'numeric',
        day: this.localeOptions.day || 'numeric',
        hour: this.localeOptions.hour || 'numeric',
        minute: this.localeOptions.minute || 'numeric',
        second: this.enableSeconds() ? this.localeOptions.second || 'numeric' : undefined,
        hour12: !this.isHourFormat24(),
        timeZone: 'UTC'
      });
    },
    isMobileNative: function isMobileNative() {
      return this.mobileNative && this.tzOffset === 0;
    },
    isMobile: function isMobile$1() {
      return this.isMobileNative && isMobile.any();
    },
    minDate: function minDate() {
      if (!this.minDatetime) {
        return this.datepicker ? this.adjustValue(this.datepicker.minDate) : null;
      }

      var adjMinDatetime = this.adjustValue(this.minDatetime);
      return new Date(adjMinDatetime.getFullYear(), adjMinDatetime.getMonth(), adjMinDatetime.getDate(), 0, 0, 0, 0);
    },
    maxDate: function maxDate() {
      if (!this.maxDatetime) {
        return this.datepicker ? this.adjustValue(this.datepicker.maxDate) : null;
      }

      var adjMaxDatetime = this.adjustValue(this.maxDatetime);
      return new Date(adjMaxDatetime.getFullYear(), adjMaxDatetime.getMonth(), adjMaxDatetime.getDate(), 0, 0, 0, 0);
    },
    minTime: function minTime() {
      if (!this.minDatetime || this.newValue === null || typeof this.newValue === 'undefined') {
        return this.timepicker ? this.adjustValue(this.timepicker.minTime) : null;
      }

      var adjMinDatetime = this.adjustValue(this.minDatetime);

      if (adjMinDatetime.getFullYear() === this.newValue.getFullYear() && adjMinDatetime.getMonth() === this.newValue.getMonth() && adjMinDatetime.getDate() === this.newValue.getDate()) {
        return adjMinDatetime;
      }
    },
    maxTime: function maxTime() {
      if (!this.maxDatetime || this.newValue === null || typeof this.newValue === 'undefined') {
        return this.timepicker ? this.adjustValue(this.timepicker.maxTime) : null;
      }

      var adjMaxDatetime = this.adjustValue(this.maxDatetime);

      if (adjMaxDatetime.getFullYear() === this.newValue.getFullYear() && adjMaxDatetime.getMonth() === this.newValue.getMonth() && adjMaxDatetime.getDate() === this.newValue.getDate()) {
        return adjMaxDatetime;
      }
    },
    datepickerSize: function datepickerSize() {
      return this.datepicker && this.datepicker.size ? this.datepicker.size : this.size;
    },
    timepickerSize: function timepickerSize() {
      return this.timepicker && this.timepicker.size ? this.timepicker.size : this.size;
    },
    timepickerDisabled: function timepickerDisabled() {
      return this.timepicker && this.timepicker.disabled ? this.timepicker.disabled : this.disabled;
    }
  },
  watch: {
    value: function value(val) {
      this.newValue = this.adjustValue(this.value);
    },
    tzOffset: function tzOffset(val) {
      this.newValue = this.adjustValue(this.value);
    }
  },
  methods: {
    enableSeconds: function enableSeconds() {
      if (this.$refs.timepicker) {
        return this.$refs.timepicker.enableSeconds;
      }

      return false;
    },
    isHourFormat24: function isHourFormat24() {
      if (this.$refs.timepicker) {
        return this.$refs.timepicker.isHourFormat24;
      }

      return !this.localeOptions.hour12;
    },
    adjustValue: function adjustValue(value) {
      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!value) return value;

      if (reverse) {
        return new Date(value.getTime() - this.tzOffset * 60000);
      } else {
        return new Date(value.getTime() + this.tzOffset * 60000);
      }
    },
    defaultDatetimeParser: function defaultDatetimeParser(date) {
      if (typeof this.datetimeParser === 'function') {
        return this.datetimeParser(date);
      } else if (typeof config.defaultDatetimeParser === 'function') {
        return config.defaultDatetimeParser(date);
      } else {
        if (this.dtf.formatToParts && typeof this.dtf.formatToParts === 'function') {
          var dayPeriods = [AM, PM, AM.toLowerCase(), PM.toLowerCase()];

          if (this.$refs.timepicker) {
            dayPeriods.push(this.$refs.timepicker.amString);
            dayPeriods.push(this.$refs.timepicker.pmString);
          }

          var parts = this.dtf.formatToParts(new Date());
          var formatRegex = parts.map(function (part, idx) {
            if (part.type === 'literal') {
              if (idx + 1 < parts.length && parts[idx + 1].type === 'hour') {
                return "[^\\d]+";
              }

              return part.value.replace(/ /g, '\\s?');
            } else if (part.type === 'dayPeriod') {
              return "((?!=<".concat(part.type, ">)(").concat(dayPeriods.join('|'), ")?)");
            }

            return "((?!=<".concat(part.type, ">)\\d+)");
          }).join('');
          var datetimeGroups = matchWithGroups(formatRegex, date); // We do a simple validation for the group.
          // If it is not valid, it will fallback to Date.parse below

          if (datetimeGroups.year && datetimeGroups.year.length === 4 && datetimeGroups.month && datetimeGroups.month <= 12 && datetimeGroups.day && datetimeGroups.day <= 31 && datetimeGroups.hour && datetimeGroups.hour >= 0 && datetimeGroups.hour < 24 && datetimeGroups.minute && datetimeGroups.minute >= 0 && datetimeGroups.minute < 59) {
            var d = new Date(datetimeGroups.year, datetimeGroups.month - 1, datetimeGroups.day, datetimeGroups.hour, datetimeGroups.minute, datetimeGroups.second || 0);
            return d;
          }
        }

        return new Date(Date.parse(date));
      }
    },
    defaultDatetimeFormatter: function defaultDatetimeFormatter(date) {
      if (typeof this.datetimeFormatter === 'function') {
        return this.datetimeFormatter(date);
      } else if (typeof config.defaultDatetimeFormatter === 'function') {
        return config.defaultDatetimeFormatter(date);
      } else {
        return this.dtf.format(date);
      }
    },

    /*
    * Parse date from string
    */
    onChangeNativePicker: function onChangeNativePicker(event) {
      var date = event.target.value;
      var s = date ? date.split(/\D/) : [];

      if (s.length >= 5) {
        var year = parseInt(s[0], 10);
        var month = parseInt(s[1], 10) - 1;
        var day = parseInt(s[2], 10);
        var hours = parseInt(s[3], 10);
        var minutes = parseInt(s[4], 10); // Seconds are omitted intentionally; they are unsupported by input
        // type=datetime-local and cause the control to fail native validation

        this.computedValue = new Date(year, month, day, hours, minutes);
      } else {
        this.computedValue = null;
      }
    },
    formatNative: function formatNative(value) {
      var date = new Date(value);

      if (value && !isNaN(date)) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        return year + '-' + ((month < 10 ? '0' : '') + month) + '-' + ((day < 10 ? '0' : '') + day) + 'T' + ((hours < 10 ? '0' : '') + hours) + ':' + ((minutes < 10 ? '0' : '') + minutes) + ':' + ((seconds < 10 ? '0' : '') + seconds);
      }

      return '';
    },
    toggle: function toggle() {
      this.$refs.datepicker.toggle();
    }
  },
  mounted: function mounted() {
    if (!this.isMobile || this.inline) {
      // $refs attached, it's time to refresh datepicker (input)
      if (this.newValue) {
        this.$refs.datepicker.$forceUpdate();
      }
    }
  }
};

const _hoisted_1 = { class: "level is-mobile" };
const _hoisted_2 = {
  key: 0,
  class: "level-item has-text-centered"
};
const _hoisted_3 = { class: "level-item has-text-centered" };
const _hoisted_4 = {
  key: 1,
  class: "level-item has-text-centered"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_timepicker = resolveComponent("b-timepicker");
  const _component_b_datepicker = resolveComponent("b-datepicker");
  const _component_b_input = resolveComponent("b-input");

  return (!$options.isMobile || $props.inline)
    ? (openBlock(), createBlock(_component_b_datepicker, mergeProps({
        key: 0,
        ref: "datepicker",
        modelValue: $options.computedValue,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($options.computedValue = $event))
      }, $props.datepicker, {
        rounded: _ctx.rounded,
        "open-on-focus": $props.openOnFocus,
        position: $props.position,
        loading: _ctx.loading,
        inline: $props.inline,
        editable: $props.editable,
        expanded: _ctx.expanded,
        "close-on-click": false,
        "date-formatter": $options.defaultDatetimeFormatter,
        "date-parser": $options.defaultDatetimeParser,
        "min-date": $options.minDate,
        "max-date": $options.maxDate,
        icon: $props.icon,
        "icon-pack": $props.iconPack,
        size: $options.datepickerSize,
        placeholder: $props.placeholder,
        "horizontal-time-picker": $props.horizontalTimePicker,
        range: false,
        disabled: $props.disabled,
        "mobile-native": $options.isMobileNative,
        locale: _ctx.locale,
        focusable: $props.focusable,
        "append-to-body": $props.appendToBody,
        onFocus: _ctx.onFocus,
        onBlur: _ctx.onBlur,
        onChangeMonth: _cache[3] || (_cache[3] = $event => (_ctx.$emit('change-month', $event))),
        onChangeYear: _cache[4] || (_cache[4] = $event => (_ctx.$emit('change-year', $event)))
      }), {
        default: withCtx(() => [
          createVNode("nav", _hoisted_1, [
            (_ctx.$slots.left !== undefined)
              ? (openBlock(), createBlock("div", _hoisted_2, [
                  renderSlot(_ctx.$slots, "left")
                ]))
              : createCommentVNode("v-if", true),
            createVNode("div", _hoisted_3, [
              createVNode(_component_b_timepicker, mergeProps({ ref: "timepicker" }, $props.timepicker, {
                modelValue: $options.computedValue,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($options.computedValue = $event)),
                inline: "",
                editable: $props.editable,
                "min-time": $options.minTime,
                "max-time": $options.maxTime,
                size: $options.timepickerSize,
                disabled: $options.timepickerDisabled,
                focusable: $props.focusable,
                "mobile-native": $options.isMobileNative,
                locale: _ctx.locale
              }), null, 16 /* FULL_PROPS */, ["modelValue", "editable", "min-time", "max-time", "size", "disabled", "focusable", "mobile-native", "locale"])
            ]),
            (_ctx.$slots.right !== undefined)
              ? (openBlock(), createBlock("div", _hoisted_4, [
                  renderSlot(_ctx.$slots, "right")
                ]))
              : createCommentVNode("v-if", true)
          ])
        ]),
        _: 1 /* STABLE */
      }, 16 /* FULL_PROPS */, ["modelValue", "rounded", "open-on-focus", "position", "loading", "inline", "editable", "expanded", "date-formatter", "date-parser", "min-date", "max-date", "icon", "icon-pack", "size", "placeholder", "horizontal-time-picker", "disabled", "mobile-native", "locale", "focusable", "append-to-body", "onFocus", "onBlur"]))
    : (openBlock(), createBlock(_component_b_input, mergeProps({
        key: 1,
        ref: "input",
        type: "datetime-local",
        autocomplete: "off",
        value: $options.formatNative($options.computedValue),
        placeholder: $props.placeholder,
        size: _ctx.size,
        icon: $props.icon,
        "icon-pack": $props.iconPack,
        rounded: _ctx.rounded,
        loading: _ctx.loading,
        max: $options.formatNative($options.maxDate),
        min: $options.formatNative($options.minDate),
        disabled: $props.disabled,
        readonly: false
      }, _ctx.$attrs, {
        "use-html5-validation": _ctx.useHtml5Validation,
        onChange: $options.onChangeNativePicker,
        onFocus: _ctx.onFocus,
        onBlur: _ctx.onBlur
      }), null, 16 /* FULL_PROPS */, ["value", "placeholder", "size", "icon", "icon-pack", "rounded", "loading", "max", "min", "disabled", "use-html5-validation", "onChange", "onFocus", "onBlur"]))
}

script.render = render;
script.__file = "src/components/datetimepicker/Datetimepicker.vue";

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
  }
};
use(Plugin);

export default Plugin;
export { script as BDatetimepicker };