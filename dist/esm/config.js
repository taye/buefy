import { c as config, a as setOptions } from './config-63b70aae.js';
import { merge } from './helpers.js';
import './_rollupPluginBabelHelpers-0979e6ce.js';

var ConfigComponent = {
  getOptions: function getOptions() {
    return config;
  },
  setOptions: function setOptions$1(options) {
    setOptions(merge(config, options, true));
  }
};

export default ConfigComponent;
