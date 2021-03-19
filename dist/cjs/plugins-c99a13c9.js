'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a6b1b170.js');

var use = function use(plugin) {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
  }
};
var registerComponent = function registerComponent(VueApp, component) {
  if (!VueApp.prototype) {
    patchHooks(component);
  }

  VueApp.component(component.name, component);
};
var registerComponentProgrammatic = function registerComponentProgrammatic(VueApp, property, component) {
  if (VueApp.prototype) {
    // Vue 2
    if (!VueApp.prototype.$buefy) VueApp.prototype.$buefy = {};
    VueApp.prototype.$buefy[property] = component;
  } else {
    // Vue 3
    patchHooks(component);
    var provided = VueApp.config.globalProperties.$buefy;

    if (!provided) {
      provided = VueApp.config.globalProperties.$buefy = {};
      VueApp.provide('$buefy', provided);
    }

    provided[property] = component;
  }
};

function patchHooks(component) {
  var deprecatedHooks = [['beforeDestroy', 'beforeUnmount'], ['destroyed', 'umounted']];
  deprecatedHooks.forEach(function (_ref) {
    var _ref2 = _rollupPluginBabelHelpers._slicedToArray(_ref, 2),
        v2Name = _ref2[0],
        v3Name = _ref2[1];

    var v2Value = component[v2Name];
    if (!v2Value) return;
    component[v3Name] = v2Value;
    component[v2Name] = undefined;
  });

  if (component.mixins) {
    component.mixins.forEach(function (mixin) {
      return patchHooks(mixin);
    });
  }
}

exports.registerComponent = registerComponent;
exports.registerComponentProgrammatic = registerComponentProgrammatic;
exports.use = use;
