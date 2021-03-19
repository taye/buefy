'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('./helpers.js');
var vue = require('vue');
var plugins = require('./plugins-c99a13c9.js');
require('./_rollupPluginBabelHelpers-a6b1b170.js');

var script = {
  name: 'BCollapse',
  // deprecated, to replace with default 'value' in the next breaking change
  model: {
    prop: 'open',
    event: 'update:open'
  },
  props: {
    open: {
      type: Boolean,
      default: true
    },
    animation: {
      type: String,
      default: 'fade'
    },
    ariaId: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'is-top',
      validator: function validator(value) {
        return ['is-top', 'is-bottom'].indexOf(value) > -1;
      }
    }
  },
  data: function data() {
    return {
      isOpen: this.open
    };
  },
  watch: {
    open: function open(value) {
      this.isOpen = value;
    }
  },
  methods: {
    /**
    * Toggle and emit events
    */
    toggle: function toggle() {
      this.isOpen = !this.isOpen;
      this.$emit('update:open', this.isOpen);
      this.$emit(this.isOpen ? 'open' : 'close');
    }
  },
  render: function render() {
    var trigger = vue.h('div', {
      staticClass: 'collapse-trigger',
      on: {
        click: this.toggle
      }
    }, (this.$scopedSlots || this.$slots).trigger ? [(this.$scopedSlots || this.$slots).trigger({
      open: this.isOpen
    })] : [helpers.getSlot(this.$slots, 'trigger')]);
    var content = vue.h('transition', {
      props: {
        name: this.animation
      }
    }, [vue.h('div', {
      staticClass: 'collapse-content',
      attrs: {
        'id': this.ariaId,
        'aria-expanded': this.isOpen
      },
      directives: [{
        name: 'show',
        value: this.isOpen
      }]
    }, helpers.getSlot(this.$slots, 'default'))]);
    return vue.h('div', {
      staticClass: 'collapse'
    }, this.position === 'is-top' ? [trigger, content] : [content, trigger]);
  }
};

const render = () => {};


script.render = render;
script.__file = "src/components/collapse/Collapse.vue";

var Plugin = {
  install: function install(Vue) {
    plugins.registerComponent(Vue, script);
  }
};
plugins.use(Plugin);

exports.BCollapse = script;
exports.default = Plugin;
