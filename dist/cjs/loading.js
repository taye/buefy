'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Loading = require('./Loading-7d1d34f5.js');
var config = require('./config-1bc87110.js');
var helpers = require('./helpers.js');
var plugins = require('./plugins-c99a13c9.js');
require('./ssr-95fd856b.js');
require('vue');
require('./_rollupPluginBabelHelpers-a6b1b170.js');

var localVueInstance;
var LoadingProgrammatic = {
  open: function open(params) {
    var defaultParam = {
      programmatic: true
    };
    var propsData = helpers.merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || config.VueInstance;
    var LoadingComponent = vm.extend(Loading.script);
    return new LoadingComponent({
      el: document.createElement('div'),
      propsData: propsData
    });
  }
};
var Plugin = {
  install: function install(Vue) {
    localVueInstance = Vue;
    plugins.registerComponent(Vue, Loading.script);
    plugins.registerComponentProgrammatic(Vue, 'loading', LoadingProgrammatic);
  }
};
plugins.use(Plugin);

exports.BLoading = Loading.script;
exports.LoadingProgrammatic = LoadingProgrammatic;
exports.default = Plugin;
