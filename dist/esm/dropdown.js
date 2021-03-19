import { s as script, a as script$1 } from './DropdownItem-ed80df00.js';
export { s as BDropdown, a as BDropdownItem } from './DropdownItem-ed80df00.js';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './_rollupPluginBabelHelpers-0979e6ce.js';
import './trapFocus-d909e804.js';
import './config-63b70aae.js';
import './helpers.js';
import './InjectedChildMixin-9132fdb9.js';
import 'vue';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
    registerComponent(Vue, script$1);
  }
};
use(Plugin);

export default Plugin;
