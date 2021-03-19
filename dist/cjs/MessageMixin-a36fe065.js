'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a6b1b170.js');
var Icon = require('./Icon-59750035.js');

var MessageMixin = {
  components: _rollupPluginBabelHelpers._defineProperty({}, Icon.script.name, Icon.script),
  // deprecated, to replace with default 'value' in the next breaking change
  model: {
    prop: 'active',
    event: 'update:active'
  },
  props: {
    active: {
      type: Boolean,
      default: true
    },
    title: String,
    closable: {
      type: Boolean,
      default: true
    },
    message: String,
    type: String,
    hasIcon: Boolean,
    size: String,
    icon: String,
    iconPack: String,
    iconSize: String,
    autoClose: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  data: function data() {
    return {
      isActive: this.active
    };
  },
  watch: {
    active: function active(value) {
      this.isActive = value;
    },
    isActive: function isActive(value) {
      if (value) {
        this.setAutoClose();
      } else {
        if (this.timer) {
          clearTimeout(this.timer);
        }
      }
    }
  },
  computed: {
    /**
     * Icon name (MDI) based on type.
     */
    computedIcon: function computedIcon() {
      if (this.icon) {
        return this.icon;
      }

      switch (this.type) {
        case 'is-info':
          return 'information';

        case 'is-success':
          return 'check-circle';

        case 'is-warning':
          return 'alert';

        case 'is-danger':
          return 'alert-circle';

        default:
          return null;
      }
    }
  },
  methods: {
    /**
     * Close the Message and emit events.
     */
    close: function close() {
      this.isActive = false;
      this.$emit('close');
      this.$emit('update:active', false);
    },

    /**
     * Set timer to auto close message
     */
    setAutoClose: function setAutoClose() {
      var _this = this;

      if (this.autoClose) {
        this.timer = setTimeout(function () {
          if (_this.isActive) {
            _this.close();
          }
        }, this.duration);
      }
    }
  },
  mounted: function mounted() {
    this.setAutoClose();
  }
};

exports.MessageMixin = MessageMixin;
