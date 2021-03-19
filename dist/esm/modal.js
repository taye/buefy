import { s as script } from './Modal-e2b69496.js';
export { s as BModal } from './Modal-e2b69496.js';
import { V as VueInstance } from './config-63b70aae.js';
import { merge } from './helpers.js';
import { a as registerComponent, r as registerComponentProgrammatic, u as use } from './plugins-a0a180cf.js';
import './trapFocus-d909e804.js';
import 'vue';
import './_rollupPluginBabelHelpers-0979e6ce.js';

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

    var propsData = merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance;
    var ModalComponent = (vm.extend || vm.component)(script);
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
    registerComponent(Vue, script);
    registerComponentProgrammatic(Vue, 'modal', ModalProgrammatic);
  }
};
use(Plugin);

export default Plugin;
export { ModalProgrammatic };
