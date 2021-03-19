'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Input = require('./Input-045e0369.js');
var plugins = require('./plugins-c99a13c9.js');
require('./_rollupPluginBabelHelpers-a6b1b170.js');
require('./Icon-59750035.js');
require('./config-1bc87110.js');
require('./helpers.js');
require('vue');
require('./FormElementMixin-d260225f.js');

var Plugin = {
  install: function install(Vue) {
    plugins.registerComponent(Vue, Input.script);
  }
};
plugins.use(Plugin);

exports.BInput = Input.script;
exports.default = Plugin;
