import { getSlot } from './helpers.js';
import { h } from 'vue';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './_rollupPluginBabelHelpers-0979e6ce.js';

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
    var trigger = h('div', {
      staticClass: 'collapse-trigger',
      on: {
        click: this.toggle
      }
    }, (this.$scopedSlots || this.$slots).trigger ? [(this.$scopedSlots || this.$slots).trigger({
      open: this.isOpen
    })] : [getSlot(this.$slots, 'trigger')]);
    var content = h('transition', {
      props: {
        name: this.animation
      }
    }, [h('div', {
      staticClass: 'collapse-content',
      attrs: {
        'id': this.ariaId,
        'aria-expanded': this.isOpen
      },
      directives: [{
        name: 'show',
        value: this.isOpen
      }]
    }, getSlot(this.$slots, 'default'))]);
    return h('div', {
      staticClass: 'collapse'
    }, this.position === 'is-top' ? [trigger, content] : [content, trigger]);
  }
};

const render = () => {};


script.render = render;
script.__file = "src/components/collapse/Collapse.vue";

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
  }
};
use(Plugin);

export default Plugin;
export { script as BCollapse };
