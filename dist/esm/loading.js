import { s as script } from './Loading-70cc889f.js';
export { s as BLoading } from './Loading-70cc889f.js';
import { V as VueInstance } from './config-63b70aae.js';
import { merge } from './helpers.js';
import { a as registerComponent, r as registerComponentProgrammatic, u as use } from './plugins-a0a180cf.js';
import './ssr-44a76b0e.js';
import 'vue';
import './_rollupPluginBabelHelpers-0979e6ce.js';

var localVueInstance;
var LoadingProgrammatic = {
  open: function open(params) {
    var defaultParam = {
      programmatic: true
    };
    var propsData = merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance;
    var LoadingComponent = vm.extend(script);
    return new LoadingComponent({
      el: document.createElement('div'),
      propsData: propsData
    });
  }
};
var Plugin = {
  install: function install(Vue) {
    localVueInstance = Vue;
    registerComponent(Vue, script);
    registerComponentProgrammatic(Vue, 'loading', LoadingProgrammatic);
  }
};
use(Plugin);

export default Plugin;
export { LoadingProgrammatic };
