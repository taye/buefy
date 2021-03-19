import { s as script, a as script$1 } from './Pagination-04927382.js';
export { s as BPagination, a as BPaginationButton } from './Pagination-04927382.js';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './_rollupPluginBabelHelpers-0979e6ce.js';
import './config-63b70aae.js';
import 'vue';
import './Icon-9c398a60.js';
import './helpers.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
    registerComponent(Vue, script$1);
  }
};
use(Plugin);

export default Plugin;
