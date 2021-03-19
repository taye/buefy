'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Modal = require('./Modal-3b70cd74.js');
var config = require('./config-1bc87110.js');
var helpers = require('./helpers.js');
var plugins = require('./plugins-c99a13c9.js');
require('./trapFocus-050ad8e5.js');
require('vue');
require('./_rollupPluginBabelHelpers-a6b1b170.js');

var localVueInstance;
var ModalProgrammatic = {
  open: function open(params) {
    var parent;

    if (typeof params === 'string') {
      params = {
        content: params
      };
    }

    var defaultParam = {
      programmatic: true
    };

    if (params.parent) {
      parent = params.parent;
      delete params.parent;
    }

    var slot;

    if (Array.isArray(params.content)) {
      slot = params.content;
      delete params.content;
    }

    var propsData = helpers.merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || config.VueInstance;
    var ModalComponent = (vm.extend || vm.component)(Modal.script);
    var component = new ModalComponent({
      parent: parent,
      el: document.createElement('div'),
      propsData: propsData
    });

    if (slot) {
      component.$slots.default = slot;
      component.$forceUpdate();
    }

    return component;
  }
};
var Plugin = {
  install: function install(Vue) {
    localVueInstance = Vue;
    plugins.registerComponent(Vue, Modal.script);
    plugins.registerComponentProgrammatic(Vue, 'modal', ModalProgrammatic);
  }
};
plugins.use(Plugin);

exports.BModal = Modal.script;
exports.ModalProgrammatic = ModalProgrammatic;
exports.default = Plugin;
