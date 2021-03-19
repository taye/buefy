'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var plugins = require('./plugins-c99a13c9.js');
require('./_rollupPluginBabelHelpers-a6b1b170.js');

var script = {
  name: 'BSkeleton',
  functional: true,
  props: {
    active: {
      type: Boolean,
      default: true
    },
    animated: {
      type: Boolean,
      default: true
    },
    width: [Number, String],
    height: [Number, String],
    circle: Boolean,
    rounded: {
      type: Boolean,
      default: true
    },
    count: {
      type: Number,
      default: 1
    },
    position: {
      type: String,
      default: '',
      validator: function validator(value) {
        return ['', 'is-centered', 'is-right'].indexOf(value) > -1;
      }
    },
    size: String
  },
  render: function render(context) {
    if (!context.props.active) return;
    var items = [];
    var width = context.props.width;
    var height = context.props.height;

    for (var i = 0; i < context.props.count; i++) {
      items.push(vue.h('div', {
        staticClass: 'b-skeleton-item',
        class: {
          'is-rounded': context.props.rounded
        },
        key: i,
        style: {
          height: height === undefined ? null : isNaN(height) ? height : height + 'px',
          width: width === undefined ? null : isNaN(width) ? width : width + 'px',
          borderRadius: context.props.circle ? '50%' : null
        }
      }));
    }

    return vue.h('div', {
      staticClass: 'b-skeleton',
      class: [context.props.size, context.props.position, {
        'is-animated': context.props.animated
      }]
    }, items);
  }
};

const render = () => {};


script.render = render;
script.__file = "src/components/skeleton/Skeleton.vue";

var Plugin = {
  install: function install(Vue) {
    plugins.registerComponent(Vue, script);
  }
};
plugins.use(Plugin);

exports.BSkeleton = script;
exports.default = Plugin;
