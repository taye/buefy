import { s as script$1 } from './Tag-c0095963.js';
export { s as BTag } from './Tag-c0095963.js';
import { openBlock, createBlock, renderSlot } from 'vue';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './_rollupPluginBabelHelpers-0979e6ce.js';

var script = {
  name: 'BTaglist',
  props: {
    attached: Boolean
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["tags", { 'has-addons': $props.attached }]
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/tag/Taglist.vue";

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script$1);
    registerComponent(Vue, script);
  }
};
use(Plugin);

export default Plugin;
export { script as BTaglist };
