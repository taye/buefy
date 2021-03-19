'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var config = require('./config-1bc87110.js');
var helpers = require('./helpers.js');
require('./_rollupPluginBabelHelpers-a6b1b170.js');

var ConfigComponent = {
  getOptions: function getOptions() {
    return config.config;
  },
  setOptions: function setOptions(options) {
    config.setOptions(helpers.merge(config.config, options, true));
  }
};

exports.default = ConfigComponent;
