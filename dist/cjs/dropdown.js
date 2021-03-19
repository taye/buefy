'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DropdownItem = require('./DropdownItem-b1e82b61.js');
var plugins = require('./plugins-c99a13c9.js');
require('./_rollupPluginBabelHelpers-a6b1b170.js');
require('./trapFocus-050ad8e5.js');
require('./config-1bc87110.js');
require('./helpers.js');
require('./InjectedChildMixin-28e1211a.js');
require('vue');

var Plugin = {
  install: function install(Vue) {
    plugins.registerComponent(Vue, DropdownItem.script);
    plugins.registerComponent(Vue, DropdownItem.script$1);
  }
};
plugins.use(Plugin);

exports.BDropdown = DropdownItem.script;
exports.BDropdownItem = DropdownItem.script$1;
exports.default = Plugin;
