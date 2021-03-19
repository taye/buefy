import { s as script } from './Select-2baea3c2.js';
export { s as BSelect } from './Select-2baea3c2.js';
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
