'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Tooltip = require('./Tooltip-ec4d8839.js');
var plugins = require('./plugins-c99a13c9.js');
require('./_rollupPluginBabelHelpers-a6b1b170.js');
require('./config-1bc87110.js');
require('./helpers.js');
require('vue');

var Plugin = {
  install: function install(Vue) {
    plugins.registerComponent(Vue, Tooltip.script);
  }
};
plugins.use(Plugin);

exports.BTooltip = Tooltip.script;
exports.default = Plugin;
