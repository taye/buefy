import { s as script } from './Input-a74a428d.js';
export { s as BInput } from './Input-a74a428d.js';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './_rollupPluginBabelHelpers-0979e6ce.js';
import './Icon-9c398a60.js';
import './config-63b70aae.js';
import './helpers.js';
import 'vue';
import './FormElementMixin-3605f28d.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
  }
};
use(Plugin);

export default Plugin;
