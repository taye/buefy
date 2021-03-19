'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Timepicker = require('./Timepicker-b193b12b.js');
var plugins = require('./plugins-c99a13c9.js');
require('./_rollupPluginBabelHelpers-a6b1b170.js');
require('./TimepickerMixin-78a9766f.js');
require('./FormElementMixin-d260225f.js');
require('./config-1bc87110.js');
require('./helpers.js');
require('./DropdownItem-b1e82b61.js');
require('./trapFocus-050ad8e5.js');
require('./InjectedChildMixin-28e1211a.js');
require('vue');
require('./Input-045e0369.js');
require('./Icon-59750035.js');
require('./Field-3b6d1df1.js');
require('./Select-00390185.js');

var Plugin = {
  install: function install(Vue) {
    plugins.registerComponent(Vue, Timepicker.script);
  }
};
plugins.use(Plugin);

exports.BTimepicker = Timepicker.script;
exports.default = Plugin;
