'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Pagination = require('./Pagination-f4f9be71.js');
var plugins = require('./plugins-c99a13c9.js');
require('./_rollupPluginBabelHelpers-a6b1b170.js');
require('./config-1bc87110.js');
require('vue');
require('./Icon-59750035.js');
require('./helpers.js');

var Plugin = {
  install: function install(Vue) {
    plugins.registerComponent(Vue, Pagination.script);
    plugins.registerComponent(Vue, Pagination.script$1);
  }
};
plugins.use(Plugin);

exports.BPagination = Pagination.script;
exports.BPaginationButton = Pagination.script$1;
exports.default = Plugin;
