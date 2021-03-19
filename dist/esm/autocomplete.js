import { s as script } from './Autocomplete-0fa0eb9a.js';
export { s as BAutocomplete } from './Autocomplete-0fa0eb9a.js';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './_rollupPluginBabelHelpers-0979e6ce.js';
import './helpers.js';
import './FormElementMixin-3605f28d.js';
import './config-63b70aae.js';
import './Input-a74a428d.js';
import './Icon-9c398a60.js';
import 'vue';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
  }
};
use(Plugin);

export default Plugin;
