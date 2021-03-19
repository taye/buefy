import { isVueComponent, getSlot } from './helpers.js';
import { h } from 'vue';

var SlotComponent = {
  name: 'BSlotComponent',
  props: {
    component: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      default: 'default'
    },
    scoped: {
      type: Boolean
    },
    props: {
      type: Object
    },
    tag: {
      type: String,
      default: 'div'
    },
    event: {
      type: String,
      default: 'hook:updated'
    }
  },
  methods: {
    refresh: function refresh() {
      this.$forceUpdate();
    }
  },
  created: function created() {
    if (isVueComponent(this.component)) {
      this.component.$on(this.event, this.refresh);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (isVueComponent(this.component)) {
      this.component.$off(this.event, this.refresh);
    }
  },
  render: function render() {
    if (isVueComponent(this.component)) {
      var scopedSlots = this.component.scoped ? this.component.$scopedSlots | this.component.$slots : this.component.$slots;
      return h(this.tag, {}, getSlot(scopedSlots, this.name, this.props));
    }
  }
};

export { SlotComponent as S };
