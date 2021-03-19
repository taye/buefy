import { s as script } from './Tooltip-7565cd0f.js';
export { s as BTooltip } from './Tooltip-7565cd0f.js';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './_rollupPluginBabelHelpers-0979e6ce.js';
import './config-63b70aae.js';
import './helpers.js';
import 'vue';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
  }
};
use(Plugin);

export default Plugin;
