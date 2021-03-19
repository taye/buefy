'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Autocomplete = require('./Autocomplete-ec808d2b.js');
var plugins = require('./plugins-c99a13c9.js');
require('./_rollupPluginBabelHelpers-a6b1b170.js');
require('./helpers.js');
require('./FormElementMixin-d260225f.js');
require('./config-1bc87110.js');
require('./Input-045e0369.js');
require('./Icon-59750035.js');
require('vue');

var Plugin = {
  install: function install(Vue) {
    plugins.registerComponent(Vue, Autocomplete.script);
  }
};
plugins.use(Plugin);

exports.BAutocomplete = Autocomplete.script;
exports.default = Plugin;
