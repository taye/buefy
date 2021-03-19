'use strict';

var helpers = require('./helpers.js');
var ssr = require('./ssr-95fd856b.js');
var vue = require('vue');

var script = {
  name: 'BLoading',
  // deprecated, to replace with default 'value' in the next breaking change
  model: {
    prop: 'active',
    event: 'update:active'
  },
  props: {
    active: Boolean,
    programmatic: Boolean,
    container: [Object, Function, ssr.HTMLElement],
    isFullPage: {
      type: Boolean,
      default: true
    },
    animation: {
      type: String,
      default: 'fade'
    },
    canCancel: {
      type: Boolean,
      default: false
    },
    onCancel: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      isActive: this.active || false,
      displayInFullPage: this.isFullPage
    };
  },
  watch: {
    active: function active(value) {
      this.isActive = value;
    },
    isFullPage: function isFullPage(value) {
      this.displayInFullPage = value;
    }
  },
  methods: {
    /**
    * Close the Modal if canCancel.
    */
    cancel: function cancel() {
      if (!this.canCancel || !this.isActive) return;
      this.close();
    },

    /**
    * Emit events, and destroy modal if it's programmatic.
    */
    close: function close() {
      var _this = this;

      this.onCancel.apply(null, arguments);
      this.$emit('close');
      this.$emit('update:active', false); // Timeout for the animation complete before destroying

      if (this.programmatic) {
        this.isActive = false;
        setTimeout(function () {
          _this.$destroy();

          helpers.removeElement(_this.$el);
        }, 150);
      }
    },

    /**
    * Keypress event that is bound to the document.
    */
    keyPress: function keyPress(_ref) {
      var key = _ref.key;
      if (key === 'Escape' || key === 'Esc') this.cancel();
    }
  },
  created: function created() {
    if (typeof window !== 'undefined') {
      document.addEventListener('keyup', this.keyPress);
    }
  },
  beforeMount: function beforeMount() {
    // Insert the Loading component in body tag
    // only if it's programmatic
    if (this.programmatic) {
      if (!this.container) {
        document.body.appendChild(this.$el);
      } else {
        this.displayInFullPage = false;
        this.$emit('update:is-full-page', false);
        this.container.appendChild(this.$el);
      }
    }
  },
  mounted: function mounted() {
    if (this.programmatic) this.isActive = true;
  },
  beforeDestroy: function beforeDestroy() {
    if (typeof window !== 'undefined') {
      document.removeEventListener('keyup', this.keyPress);
    }
  }
};

const _hoisted_1 = /*#__PURE__*/vue.createVNode("div", { class: "loading-icon" }, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock(vue.Transition, { name: $props.animation }, {
    default: vue.withCtx(() => [
      ($data.isActive)
        ? (vue.openBlock(), vue.createBlock("div", {
            key: 0,
            class: ["loading-overlay is-active", { 'is-full-page': $data.displayInFullPage }]
          }, [
            vue.createVNode("div", {
              class: "loading-background",
              onClick: _cache[1] || (_cache[1] = (...args) => ($options.cancel && $options.cancel(...args)))
            }),
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              _hoisted_1
            ])
          ], 2 /* CLASS */))
        : vue.createCommentVNode("v-if", true)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["name"]))
}

script.render = render;
script.__file = "src/components/loading/Loading.vue";

exports.script = script;
