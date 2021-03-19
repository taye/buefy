'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a6b1b170.js');
var config = require('./config-1bc87110.js');
var helpers = require('./helpers.js');
var vue = require('vue');

var mdiIcons = {
  sizes: {
    'default': 'mdi-24px',
    'is-small': null,
    'is-medium': 'mdi-36px',
    'is-large': 'mdi-48px'
  },
  iconPrefix: 'mdi-'
};

var faIcons = function faIcons() {
  var faIconPrefix = config.config && config.config.defaultIconComponent ? '' : 'fa-';
  return {
    sizes: {
      'default': null,
      'is-small': null,
      'is-medium': faIconPrefix + 'lg',
      'is-large': faIconPrefix + '2x'
    },
    iconPrefix: faIconPrefix,
    internalIcons: {
      'information': 'info-circle',
      'alert': 'exclamation-triangle',
      'alert-circle': 'exclamation-circle',
      'chevron-right': 'angle-right',
      'chevron-left': 'angle-left',
      'chevron-down': 'angle-down',
      'eye-off': 'eye-slash',
      'menu-down': 'caret-down',
      'menu-up': 'caret-up',
      'close-circle': 'times-circle'
    }
  };
};

var getIcons = function getIcons() {
  var icons = {
    mdi: mdiIcons,
    fa: faIcons(),
    fas: faIcons(),
    far: faIcons(),
    fad: faIcons(),
    fab: faIcons(),
    fal: faIcons()
  };

  if (config.config && config.config.customIconPacks) {
    icons = helpers.merge(icons, config.config.customIconPacks, true);
  }

  return icons;
};

var script = {
  name: 'BIcon',
  props: {
    type: [String, Object],
    component: String,
    pack: String,
    icon: String,
    size: String,
    customSize: String,
    customClass: String,
    both: Boolean // This is used internally to show both MDI and FA icon

  },
  computed: {
    iconConfig: function iconConfig() {
      var allIcons = getIcons();
      return allIcons[this.newPack];
    },
    iconPrefix: function iconPrefix() {
      if (this.iconConfig && this.iconConfig.iconPrefix) {
        return this.iconConfig.iconPrefix;
      }

      return '';
    },

    /**
    * Internal icon name based on the pack.
    * If pack is 'fa', gets the equivalent FA icon name of the MDI,
    * internal icons are always MDI.
    */
    newIcon: function newIcon() {
      return "".concat(this.iconPrefix).concat(this.getEquivalentIconOf(this.icon));
    },
    newPack: function newPack() {
      return this.pack || config.config.defaultIconPack;
    },
    newType: function newType() {
      if (!this.type) return;
      var splitType = [];

      if (typeof this.type === 'string') {
        splitType = this.type.split('-');
      } else {
        for (var key in this.type) {
          if (this.type[key]) {
            splitType = key.split('-');
            break;
          }
        }
      }

      if (splitType.length <= 1) return;

      var _splitType = splitType,
          _splitType2 = _rollupPluginBabelHelpers._toArray(_splitType),
          type = _splitType2.slice(1);

      return "has-text-".concat(type.join('-'));
    },
    newCustomSize: function newCustomSize() {
      return this.customSize || this.customSizeByPack;
    },
    customSizeByPack: function customSizeByPack() {
      if (this.iconConfig && this.iconConfig.sizes) {
        if (this.size && this.iconConfig.sizes[this.size] !== undefined) {
          return this.iconConfig.sizes[this.size];
        } else if (this.iconConfig.sizes.default) {
          return this.iconConfig.sizes.default;
        }
      }

      return null;
    },
    useIconComponent: function useIconComponent() {
      return this.component || config.config.defaultIconComponent;
    }
  },
  methods: {
    /**
    * Equivalent icon name of the MDI.
    */
    getEquivalentIconOf: function getEquivalentIconOf(value) {
      // Only transform the class if the both prop is set to true
      if (!this.both) {
        return value;
      }

      if (this.iconConfig && this.iconConfig.internalIcons && this.iconConfig.internalIcons[value]) {
        return this.iconConfig.internalIcons[value];
      }

      return value;
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("span", {
    class: ["icon", [$options.newType, $props.size]]
  }, [
    (!$options.useIconComponent)
      ? (vue.openBlock(), vue.createBlock("i", {
          key: 0,
          class: [$options.newPack, $options.newIcon, $options.newCustomSize, $props.customClass]
        }, null, 2 /* CLASS */))
      : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($options.useIconComponent), {
          key: 1,
          icon: [$options.newPack, $options.newIcon],
          size: $options.newCustomSize,
          class: [$props.customClass]
        }, null, 8 /* PROPS */, ["icon", "size", "class"]))
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/icon/Icon.vue";

exports.script = script;
