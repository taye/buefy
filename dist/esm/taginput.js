import { _ as _defineProperty, b as _typeof } from './_rollupPluginBabelHelpers-0979e6ce.js';
import { getSlot, getValueByPath } from './helpers.js';
import { s as script$2 } from './Tag-c0095963.js';
import { s as script$1 } from './Autocomplete-0fa0eb9a.js';
import { c as config } from './config-63b70aae.js';
import { F as FormElementMixin } from './FormElementMixin-3605f28d.js';
import { resolveComponent, openBlock, createBlock, createVNode, renderSlot, Fragment, renderList, withCtx, createTextVNode, toDisplayString, mergeProps, withKeys, createSlots, createCommentVNode } from 'vue';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './Input-a74a428d.js';
import './Icon-9c398a60.js';

var _components;
var script = {
  name: 'BTaginput',
  components: (_components = {}, _defineProperty(_components, script$1.name, script$1), _defineProperty(_components, script$2.name, script$2), _components),
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    type: String,
    closeType: String,
    rounded: {
      type: Boolean,
      default: false
    },
    attached: {
      type: Boolean,
      default: false
    },
    maxtags: {
      type: [Number, String],
      required: false
    },
    hasCounter: {
      type: Boolean,
      default: function _default() {
        return config.defaultTaginputHasCounter;
      }
    },
    field: {
      type: String,
      default: 'value'
    },
    autocomplete: Boolean,
    groupField: String,
    groupOptions: String,
    nativeAutocomplete: String,
    openOnFocus: Boolean,
    disabled: Boolean,
    ellipsis: Boolean,
    closable: {
      type: Boolean,
      default: true
    },
    ariaCloseLabel: String,
    confirmKeys: {
      type: Array,
      default: function _default() {
        return [',', 'Tab', 'Enter'];
      }
    },
    removeOnKeys: {
      type: Array,
      default: function _default() {
        return ['Backspace'];
      }
    },
    allowNew: Boolean,
    onPasteSeparators: {
      type: Array,
      default: function _default() {
        return [','];
      }
    },
    beforeAdding: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    allowDuplicates: {
      type: Boolean,
      default: false
    },
    checkInfiniteScroll: {
      type: Boolean,
      default: false
    },
    createTag: {
      type: Function,
      default: function _default(tag) {
        return tag;
      }
    },
    appendToBody: Boolean
  },
  data: function data() {
    return {
      tags: Array.isArray(this.value) ? this.value.slice(0) : this.value || [],
      newTag: '',
      isComposing: false,
      _elementRef: 'autocomplete',
      _isTaginput: true
    };
  },
  computed: {
    rootClasses: function rootClasses() {
      return {
        'is-expanded': this.expanded
      };
    },
    containerClasses: function containerClasses() {
      return {
        'is-focused': this.isFocused,
        'is-focusable': this.hasInput
      };
    },
    valueLength: function valueLength() {
      return this.newTag.trim().length;
    },
    hasDefaultSlot: function hasDefaultSlot() {
      return !!(this.$scopedSlots || this.$slots).default;
    },
    hasEmptySlot: function hasEmptySlot() {
      return !!getSlot(this.$slots, 'empty');
    },
    hasHeaderSlot: function hasHeaderSlot() {
      return !!getSlot(this.$slots, 'header');
    },
    hasFooterSlot: function hasFooterSlot() {
      return !!getSlot(this.$slots, 'footer');
    },

    /**
     * Show the input field if a maxtags hasn't been set or reached.
     */
    hasInput: function hasInput() {
      return this.maxtags == null || this.tagsLength < this.maxtags;
    },
    tagsLength: function tagsLength() {
      return this.tags.length;
    },

    /**
     * If Taginput has onPasteSeparators prop,
     * returning new RegExp used to split pasted string.
     */
    separatorsAsRegExp: function separatorsAsRegExp() {
      var sep = this.onPasteSeparators;
      return sep.length ? new RegExp(sep.map(function (s) {
        return s ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') : null;
      }).join('|'), 'g') : null;
    }
  },
  watch: {
    /**
     * When v-model is changed set internal value.
     */
    value: function value(_value) {
      this.tags = Array.isArray(_value) ? _value.slice(0) : _value || [];
    },
    hasInput: function hasInput() {
      if (!this.hasInput) this.onBlur();
    }
  },
  methods: {
    addTag: function addTag(tag) {
      var tagToAdd = tag || this.newTag.trim();

      if (tagToAdd) {
        if (!this.autocomplete) {
          var reg = this.separatorsAsRegExp;

          if (reg && tagToAdd.match(reg)) {
            tagToAdd.split(reg).map(function (t) {
              return t.trim();
            }).filter(function (t) {
              return t.length !== 0;
            }).map(this.addTag);
            return;
          }
        } // Add the tag input if it is not blank
        // or previously added (if not allowDuplicates).


        var add = !this.allowDuplicates ? this.tags.indexOf(tagToAdd) === -1 : true;

        if (add && this.beforeAdding(tagToAdd)) {
          this.tags.push(this.createTag(tagToAdd));
          this.$emit('input', this.tags);
          this.$emit('add', tagToAdd);
        }
      }

      this.newTag = '';
    },
    getNormalizedTagText: function getNormalizedTagText(tag) {
      if (_typeof(tag) === 'object') {
        tag = getValueByPath(tag, this.field);
      }

      return "".concat(tag);
    },
    customOnBlur: function customOnBlur(event) {
      // Add tag on-blur if not select only
      if (!this.autocomplete) this.addTag();
      this.onBlur(event);
    },
    onSelect: function onSelect(option) {
      var _this = this;

      if (!option) return;
      this.addTag(option);
      this.$nextTick(function () {
        _this.newTag = '';
      });
    },
    removeTag: function removeTag(index, event) {
      var tag = this.tags.splice(index, 1)[0];
      this.$emit('input', this.tags);
      this.$emit('remove', tag);
      if (event) event.stopPropagation();

      if (this.openOnFocus && this.$refs.autocomplete) {
        this.$refs.autocomplete.focus();
      }

      return tag;
    },
    removeLastTag: function removeLastTag() {
      if (this.tagsLength > 0) {
        this.removeTag(this.tagsLength - 1);
      }
    },
    keydown: function keydown(event) {
      var key = event.key; // cannot destructure preventDefault (https://stackoverflow.com/a/49616808/2774496)

      if (this.removeOnKeys.indexOf(key) !== -1 && !this.newTag.length) {
        this.removeLastTag();
      } // Stop if is to accept select only


      if (this.autocomplete && !this.allowNew) return;

      if (this.confirmKeys.indexOf(key) >= 0) {
        // Allow Tab to advance to next field regardless
        if (key !== 'Tab') event.preventDefault();
        if (key === 'Enter' && this.isComposing) return;
        this.addTag();
      }
    },
    onTyping: function onTyping(event) {
      this.$emit('typing', event.trim());
    },
    emitInfiniteScroll: function emitInfiniteScroll() {
      this.$emit('infinite-scroll');
    }
  }
};

const _hoisted_1 = {
  key: 0,
  class: "help counter"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_tag = resolveComponent("b-tag");
  const _component_b_autocomplete = resolveComponent("b-autocomplete");

  return (openBlock(), createBlock("div", {
    class: ["taginput control", $options.rootClasses]
  }, [
    createVNode("div", {
      class: ["taginput-container", [_ctx.statusType, _ctx.size, $options.containerClasses]],
      disabled: $props.disabled ? '' : null,
      onClick: _cache[4] || (_cache[4] = $event => ($options.hasInput && _ctx.focus($event)))
    }, [
      renderSlot(_ctx.$slots, "selected", { tags: $data.tags }, () => [
        (openBlock(true), createBlock(Fragment, null, renderList($data.tags, (tag, index) => {
          return (openBlock(), createBlock(_component_b_tag, {
            key: $options.getNormalizedTagText(tag) + index,
            type: $props.type,
            "close-type": $props.closeType,
            size: _ctx.size,
            rounded: $props.rounded,
            attached: $props.attached,
            tabstop: false,
            disabled: $props.disabled,
            ellipsis: $props.ellipsis,
            closable: $props.closable,
            "aria-close-label": $props.ariaCloseLabel,
            title: $props.ellipsis && $options.getNormalizedTagText(tag),
            onClose: $event => ($options.removeTag(index, $event))
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "tag", { tag: tag }, () => [
                createTextVNode(toDisplayString($options.getNormalizedTagText(tag)), 1 /* TEXT */)
              ])
            ]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["type", "close-type", "size", "rounded", "attached", "disabled", "ellipsis", "closable", "aria-close-label", "title", "onClose"]))
        }), 128 /* KEYED_FRAGMENT */))
      ]),
      ($options.hasInput)
        ? (openBlock(), createBlock(_component_b_autocomplete, mergeProps({
            key: 0,
            ref: "autocomplete",
            modelValue: $data.newTag,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.newTag = $event))
          }, _ctx.$attrs, {
            data: $props.data,
            field: $props.field,
            icon: _ctx.icon,
            "icon-pack": _ctx.iconPack,
            maxlength: _ctx.maxlength,
            "has-counter": false,
            size: _ctx.size,
            disabled: $props.disabled,
            loading: _ctx.loading,
            autocomplete: $props.nativeAutocomplete,
            "open-on-focus": $props.openOnFocus,
            "keep-open": $props.openOnFocus,
            "keep-first": !$props.allowNew,
            "group-field": $props.groupField,
            "group-options": $props.groupOptions,
            "use-html5-validation": _ctx.useHtml5Validation,
            "check-infinite-scroll": $props.checkInfiniteScroll,
            "append-to-body": $props.appendToBody,
            "confirm-keys": $props.confirmKeys,
            onTyping: $options.onTyping,
            onFocus: _ctx.onFocus,
            onBlur: $options.customOnBlur,
            onKeydown: withKeys($options.keydown, ["native"]),
            onCompositionstart: _cache[2] || (_cache[2] = $event => ($data.isComposing = true)),
            onCompositionend: _cache[3] || (_cache[3] = $event => ($data.isComposing = false)),
            onSelect: $options.onSelect,
            onInfiniteScroll: $options.emitInfiniteScroll
          }), createSlots({ _: 2 /* DYNAMIC */ }, [
            ($options.hasHeaderSlot)
              ? {
                  name: "header",
                  fn: withCtx(() => [
                    renderSlot(_ctx.$slots, "header")
                  ])
                }
              : undefined,
            ($options.hasDefaultSlot)
              ? {
                  name: "default",
                  fn: withCtx((props) => [
                    renderSlot(_ctx.$slots, "default", {
                      option: props.option,
                      index: props.index
                    })
                  ])
                }
              : undefined,
            ($options.hasEmptySlot)
              ? {
                  name: "empty",
                  fn: withCtx(() => [
                    renderSlot(_ctx.$slots, "empty")
                  ])
                }
              : undefined,
            ($options.hasFooterSlot)
              ? {
                  name: "footer",
                  fn: withCtx(() => [
                    renderSlot(_ctx.$slots, "footer")
                  ])
                }
              : undefined
          ]), 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["modelValue", "data", "field", "icon", "icon-pack", "maxlength", "size", "disabled", "loading", "autocomplete", "open-on-focus", "keep-open", "keep-first", "group-field", "group-options", "use-html5-validation", "check-infinite-scroll", "append-to-body", "confirm-keys", "onTyping", "onFocus", "onBlur", "onKeydown", "onSelect", "onInfiniteScroll"]))
        : createCommentVNode("v-if", true)
    ], 10 /* CLASS, PROPS */, ["disabled"]),
    ($props.hasCounter && ($props.maxtags || _ctx.maxlength))
      ? (openBlock(), createBlock("small", _hoisted_1, [
          (_ctx.maxlength && $options.valueLength > 0)
            ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString($options.valueLength) + " / " + toDisplayString(_ctx.maxlength), 1 /* TEXT */)
              ], 64 /* STABLE_FRAGMENT */))
            : ($props.maxtags)
              ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString($options.tagsLength) + " / " + toDisplayString($props.maxtags), 1 /* TEXT */)
                ], 64 /* STABLE_FRAGMENT */))
              : createCommentVNode("v-if", true)
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/taginput/Taginput.vue";

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
  }
};
use(Plugin);

export default Plugin;
export { script as BTaginput };
