import { F as FormElementMixin } from './FormElementMixin-3605f28d.js';
import { F as File } from './ssr-44a76b0e.js';
import { openBlock, createBlock, renderSlot, withModifiers, createVNode, mergeProps } from 'vue';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './config-63b70aae.js';
import './helpers.js';
import './_rollupPluginBabelHelpers-0979e6ce.js';

var script = {
  name: 'BUpload',
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    value: {
      type: [Object, Function, File, Array]
    },
    multiple: Boolean,
    disabled: Boolean,
    accept: String,
    dragDrop: Boolean,
    type: {
      type: String,
      default: 'is-primary'
    },
    native: {
      type: Boolean,
      default: false
    },
    expanded: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      newValue: this.value,
      dragDropFocus: false,
      _elementRef: 'input'
    };
  },
  watch: {
    /**
     *   When v-model is changed:
     *   1. Set internal value.
     *   2. Reset interna input file value
     *   3. If it's invalid, validate again.
     */
    value: function value(_value) {
      this.newValue = _value;

      if (!_value || Array.isArray(_value) && _value.length === 0) {
        this.$refs.input.value = null;
      }

      !this.isValid && !this.dragDrop && this.checkHtml5Validity();
    }
  },
  methods: {
    /**
    * Listen change event on input type 'file',
    * emit 'input' event and validate
    */
    onFileChange: function onFileChange(event) {
      if (this.disabled || this.loading) return;
      if (this.dragDrop) this.updateDragDropFocus(false);
      var value = event.target.files || event.dataTransfer.files;

      if (value.length === 0) {
        if (!this.newValue) return;
        if (this.native) this.newValue = null;
      } else if (!this.multiple) {
        // only one element in case drag drop mode and isn't multiple
        if (this.dragDrop && value.length !== 1) return;else {
          var file = value[0];
          if (this.checkType(file)) this.newValue = file;else if (this.newValue) this.newValue = null;else return;
        }
      } else {
        // always new values if native or undefined local
        var newValues = false;

        if (this.native || !this.newValue) {
          this.newValue = [];
          newValues = true;
        }

        for (var i = 0; i < value.length; i++) {
          var _file = value[i];

          if (this.checkType(_file)) {
            this.newValue.push(_file);
            newValues = true;
          }
        }

        if (!newValues) return;
      }

      this.$emit('input', this.newValue);
      !this.dragDrop && this.checkHtml5Validity();
    },

    /**
    * Listen drag-drop to update internal variable
    */
    updateDragDropFocus: function updateDragDropFocus(focus) {
      if (!this.disabled && !this.loading) {
        this.dragDropFocus = focus;
      }
    },

    /**
    * Check mime type of file
    */
    checkType: function checkType(file) {
      if (!this.accept) return true;
      var types = this.accept.split(',');
      if (types.length === 0) return true;
      var valid = false;

      for (var i = 0; i < types.length && !valid; i++) {
        var type = types[i].trim();

        if (type) {
          if (type.substring(0, 1) === '.') {
            // check extension
            var extIndex = file.name.lastIndexOf('.');
            var extension = extIndex >= 0 ? file.name.substring(extIndex) : '';

            if (extension.toLowerCase() === type.toLowerCase()) {
              valid = true;
            }
          } else {
            // check mime type
            if (file.type.match(type)) {
              valid = true;
            }
          }
        }
      }

      if (!valid) this.$emit('invalid');
      return valid;
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("label", {
    class: ["upload control", {'is-expanded' : $props.expanded, 'is-rounded' : $props.rounded}]
  }, [
    (!$props.dragDrop)
      ? renderSlot(_ctx.$slots, "default", { key: 0 })
      : (openBlock(), createBlock("div", {
          key: 1,
          class: ["upload-draggable", [$props.type, {
                'is-loading': _ctx.loading,
                'is-disabled': $props.disabled,
                'is-hovered': $data.dragDropFocus,
                'is-expanded': $props.expanded,
            }]],
          onDragover: _cache[1] || (_cache[1] = withModifiers($event => ($options.updateDragDropFocus(true)), ["prevent"])),
          onDragleave: _cache[2] || (_cache[2] = withModifiers($event => ($options.updateDragDropFocus(false)), ["prevent"])),
          onDragenter: _cache[3] || (_cache[3] = withModifiers($event => ($options.updateDragDropFocus(true)), ["prevent"])),
          onDrop: _cache[4] || (_cache[4] = withModifiers((...args) => ($options.onFileChange && $options.onFileChange(...args)), ["prevent"]))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 34 /* CLASS, HYDRATE_EVENTS */)),
    createVNode("input", mergeProps({
      ref: "input",
      type: "file"
    }, _ctx.$attrs, {
      multiple: $props.multiple,
      accept: $props.accept,
      disabled: $props.disabled ? '' : null,
      onChange: _cache[5] || (_cache[5] = (...args) => ($options.onFileChange && $options.onFileChange(...args)))
    }), null, 16 /* FULL_PROPS */, ["multiple", "accept", "disabled"])
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/upload/Upload.vue";

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
  }
};
use(Plugin);

export default Plugin;
export { script as BUpload };
