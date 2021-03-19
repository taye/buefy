'use strict';

var helpers = require('./helpers.js');
var vue = require('vue');

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
    if (helpers.isVueComponent(this.component)) {
      this.component.$on(this.event, this.refresh);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (helpers.isVueComponent(this.component)) {
      this.component.$off(this.event, this.refresh);
    }
  },
  render: function render() {
    if (helpers.isVueComponent(this.component)) {
      var scopedSlots = this.component.scoped ? this.component.$scopedSlots | this.component.$slots : this.component.$slots;
      return vue.h(this.tag, {}, helpers.getSlot(scopedSlots, this.name, this.props));
    }
  }
};

exports.SlotComponent = SlotComponent;
