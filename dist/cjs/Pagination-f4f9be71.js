'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a6b1b170.js');
var config = require('./config-1bc87110.js');
var vue = require('vue');
var Icon = require('./Icon-59750035.js');

var script$1 = {
  name: 'BPaginationButton',
  props: {
    page: {
      type: Object,
      required: true
    },
    tag: {
      type: String,
      default: 'a',
      validator: function validator(value) {
        return config.config.defaultLinkTags.indexOf(value) >= 0;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    href: function href() {
      if (this.tag === 'a') {
        return '#';
      }
    },
    isDisabled: function isDisabled() {
      return this.disabled || this.page.disabled;
    }
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.tag), vue.mergeProps({
    role: "button",
    href: $options.href,
    disabled: $options.isDisabled,
    class: ["pagination-link", { 'is-current': $props.page.isCurrent, [$props.page.class]: true }]
  }, _ctx.$attrs, {
    onClick: vue.withModifiers($props.page.click, ["prevent"]),
    "aria-label": $props.page['aria-label'],
    "aria-current": $props.page.isCurrent
  }), {
    default: vue.withCtx(() => [
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        vue.createTextVNode(vue.toDisplayString($props.page.number), 1 /* TEXT */)
      ])
    ]),
    _: 3 /* FORWARDED */
  }, 16 /* FULL_PROPS */, ["href", "disabled", "class", "onClick", "aria-label", "aria-current"]))
}

script$1.render = render$1;
script$1.__file = "src/components/pagination/PaginationButton.vue";

var _components;
var script = {
  name: 'BPagination',
  components: (_components = {}, _rollupPluginBabelHelpers._defineProperty(_components, Icon.script.name, Icon.script), _rollupPluginBabelHelpers._defineProperty(_components, script$1.name, script$1), _components),
  // deprecated, to replace with default 'value' in the next breaking change
  model: {
    prop: 'current',
    event: 'update:current'
  },
  props: {
    total: [Number, String],
    perPage: {
      type: [Number, String],
      default: 20
    },
    current: {
      type: [Number, String],
      default: 1
    },
    rangeBefore: {
      type: [Number, String],
      default: 1
    },
    rangeAfter: {
      type: [Number, String],
      default: 1
    },
    size: String,
    simple: Boolean,
    rounded: Boolean,
    order: String,
    iconPack: String,
    iconPrev: {
      type: String,
      default: function _default() {
        return config.config.defaultIconPrev;
      }
    },
    iconNext: {
      type: String,
      default: function _default() {
        return config.config.defaultIconNext;
      }
    },
    ariaNextLabel: String,
    ariaPreviousLabel: String,
    ariaPageLabel: String,
    ariaCurrentLabel: String
  },
  computed: {
    rootClasses: function rootClasses() {
      return [this.order, this.size, {
        'is-simple': this.simple,
        'is-rounded': this.rounded
      }];
    },
    beforeCurrent: function beforeCurrent() {
      return parseInt(this.rangeBefore);
    },
    afterCurrent: function afterCurrent() {
      return parseInt(this.rangeAfter);
    },

    /**
    * Total page size (count).
    */
    pageCount: function pageCount() {
      return Math.ceil(this.total / this.perPage);
    },

    /**
    * First item of the page (count).
    */
    firstItem: function firstItem() {
      var firstItem = this.current * this.perPage - this.perPage + 1;
      return firstItem >= 0 ? firstItem : 0;
    },

    /**
    * Check if previous button is available.
    */
    hasPrev: function hasPrev() {
      return this.current > 1;
    },

    /**
    * Check if first page button should be visible.
    */
    hasFirst: function hasFirst() {
      return this.current >= 2 + this.beforeCurrent;
    },

    /**
    * Check if first ellipsis should be visible.
    */
    hasFirstEllipsis: function hasFirstEllipsis() {
      return this.current >= this.beforeCurrent + 4;
    },

    /**
    * Check if last page button should be visible.
    */
    hasLast: function hasLast() {
      return this.current <= this.pageCount - (1 + this.afterCurrent);
    },

    /**
    * Check if last ellipsis should be visible.
    */
    hasLastEllipsis: function hasLastEllipsis() {
      return this.current < this.pageCount - (2 + this.afterCurrent);
    },

    /**
    * Check if next button is available.
    */
    hasNext: function hasNext() {
      return this.current < this.pageCount;
    },

    /**
    * Get near pages, 1 before and 1 after the current.
    * Also add the click event to the array.
    */
    pagesInRange: function pagesInRange() {
      if (this.simple) return;
      var left = Math.max(1, this.current - this.beforeCurrent);

      if (left - 1 === 2) {
        left--; // Do not show the ellipsis if there is only one to hide
      }

      var right = Math.min(this.current + this.afterCurrent, this.pageCount);

      if (this.pageCount - right === 2) {
        right++; // Do not show the ellipsis if there is only one to hide
      }

      var pages = [];

      for (var i = left; i <= right; i++) {
        pages.push(this.getPage(i));
      }

      return pages;
    }
  },
  watch: {
    /**
    * If current page is trying to be greater than page count, set to last.
    */
    pageCount: function pageCount(value) {
      if (this.current > value) this.last();
    }
  },
  methods: {
    /**
    * Previous button click listener.
    */
    prev: function prev(event) {
      this.changePage(this.current - 1, event);
    },

    /**
    * Next button click listener.
    */
    next: function next(event) {
      this.changePage(this.current + 1, event);
    },

    /**
    * First button click listener.
    */
    first: function first(event) {
      this.changePage(1, event);
    },

    /**
    * Last button click listener.
    */
    last: function last(event) {
      this.changePage(this.pageCount, event);
    },
    changePage: function changePage(num, event) {
      if (this.current === num || num < 1 || num > this.pageCount) return;
      this.$emit('update:current', num);
      this.$emit('change', num); // Set focus on element to keep tab order

      if (event && event.target) {
        this.$nextTick(function () {
          return event.target.focus();
        });
      }
    },
    getPage: function getPage(num) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return {
        number: num,
        isCurrent: this.current === num,
        click: function click(event) {
          return _this.changePage(num, event);
        },
        disabled: options.disabled || false,
        class: options.class || '',
        'aria-label': options['aria-label'] || this.getAriaPageLabel(num, this.current === num)
      };
    },

    /**
    * Get text for aria-label according to page number.
    */
    getAriaPageLabel: function getAriaPageLabel(pageNumber, isCurrent) {
      if (this.ariaPageLabel && (!isCurrent || !this.ariaCurrentLabel)) {
        return this.ariaPageLabel + ' ' + pageNumber + '.';
      } else if (this.ariaPageLabel && isCurrent && this.ariaCurrentLabel) {
        return this.ariaCurrentLabel + ', ' + this.ariaPageLabel + ' ' + pageNumber + '.';
      }

      return null;
    }
  }
};

const _hoisted_1 = {
  key: 4,
  class: "info"
};
const _hoisted_2 = {
  key: 5,
  class: "pagination-list"
};
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = /*#__PURE__*/vue.createVNode("span", { class: "pagination-ellipsis" }, "…", -1 /* HOISTED */);
const _hoisted_6 = { key: 2 };
const _hoisted_7 = /*#__PURE__*/vue.createVNode("span", { class: "pagination-ellipsis" }, "…", -1 /* HOISTED */);
const _hoisted_8 = { key: 3 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = vue.resolveComponent("b-icon");
  const _component_BPaginationButton = vue.resolveComponent("BPaginationButton");

  return (vue.openBlock(), vue.createBlock("nav", {
    class: ["pagination", $options.rootClasses]
  }, [
    ((_ctx.$scopedSlots || _ctx.$slots).previous)
      ? vue.renderSlot(_ctx.$slots, "previous", {
          key: 0,
          page: $options.getPage($props.current - 1, {
                disabled: !$options.hasPrev,
                class: 'pagination-previous',
                'aria-label': $props.ariaPreviousLabel
        })
        }, () => [
          vue.createVNode(_component_b_icon, {
            icon: $props.iconPrev,
            pack: $props.iconPack,
            both: "",
            "aria-hidden": "true"
          }, null, 8 /* PROPS */, ["icon", "pack"])
        ])
      : (vue.openBlock(), vue.createBlock(_component_BPaginationButton, {
          key: 1,
          class: "pagination-previous",
          disabled: !$options.hasPrev,
          page: $options.getPage($props.current - 1),
          "aria-label": $props.ariaPreviousLabel
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_b_icon, {
              icon: $props.iconPrev,
              pack: $props.iconPack,
              both: "",
              "aria-hidden": "true"
            }, null, 8 /* PROPS */, ["icon", "pack"])
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["disabled", "page", "aria-label"])),
    ((_ctx.$scopedSlots || _ctx.$slots).next)
      ? vue.renderSlot(_ctx.$slots, "next", {
          key: 2,
          page: $options.getPage($props.current + 1, {
                disabled: !$options.hasNext,
                class: 'pagination-next',
                'aria-label': $props.ariaNextLabel
        })
        }, () => [
          vue.createVNode(_component_b_icon, {
            icon: $props.iconNext,
            pack: $props.iconPack,
            both: "",
            "aria-hidden": "true"
          }, null, 8 /* PROPS */, ["icon", "pack"])
        ])
      : (vue.openBlock(), vue.createBlock(_component_BPaginationButton, {
          key: 3,
          class: "pagination-next",
          disabled: !$options.hasNext,
          page: $options.getPage($props.current + 1),
          "aria-label": $props.ariaNextLabel
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_b_icon, {
              icon: $props.iconNext,
              pack: $props.iconPack,
              both: "",
              "aria-hidden": "true"
            }, null, 8 /* PROPS */, ["icon", "pack"])
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["disabled", "page", "aria-label"])),
    ($props.simple)
      ? (vue.openBlock(), vue.createBlock("small", _hoisted_1, [
          ($props.perPage == 1)
            ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                vue.createTextVNode(vue.toDisplayString($options.firstItem) + " / " + vue.toDisplayString($props.total), 1 /* TEXT */)
              ], 64 /* STABLE_FRAGMENT */))
            : (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 1 }, [
                vue.createTextVNode(vue.toDisplayString($options.firstItem) + "-" + vue.toDisplayString(Math.min($props.current * $props.perPage, $props.total)) + " / " + vue.toDisplayString($props.total), 1 /* TEXT */)
              ], 64 /* STABLE_FRAGMENT */))
        ]))
      : (vue.openBlock(), vue.createBlock("ul", _hoisted_2, [
          vue.createCommentVNode("First"),
          ($options.hasFirst)
            ? (vue.openBlock(), vue.createBlock("li", _hoisted_3, [
                ((_ctx.$scopedSlots || _ctx.$slots).default)
                  ? vue.renderSlot(_ctx.$slots, "default", {
                      key: 0,
                      page: $options.getPage(1)
                    })
                  : (vue.openBlock(), vue.createBlock(_component_BPaginationButton, {
                      key: 1,
                      page: $options.getPage(1)
                    }, null, 8 /* PROPS */, ["page"]))
              ]))
            : vue.createCommentVNode("v-if", true),
          ($options.hasFirstEllipsis)
            ? (vue.openBlock(), vue.createBlock("li", _hoisted_4, [
                _hoisted_5
              ]))
            : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode("Pages"),
          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.pagesInRange, (page) => {
            return (vue.openBlock(), vue.createBlock("li", {
              key: page.number
            }, [
              ((_ctx.$scopedSlots || _ctx.$slots).default)
                ? vue.renderSlot(_ctx.$slots, "default", {
                    key: 0,
                    page: page
                  })
                : (vue.openBlock(), vue.createBlock(_component_BPaginationButton, {
                    key: 1,
                    page: page
                  }, null, 8 /* PROPS */, ["page"]))
            ]))
          }), 128 /* KEYED_FRAGMENT */)),
          vue.createCommentVNode("Last"),
          ($options.hasLastEllipsis)
            ? (vue.openBlock(), vue.createBlock("li", _hoisted_6, [
                _hoisted_7
              ]))
            : vue.createCommentVNode("v-if", true),
          ($options.hasLast)
            ? (vue.openBlock(), vue.createBlock("li", _hoisted_8, [
                ((_ctx.$scopedSlots || _ctx.$slots).default)
                  ? vue.renderSlot(_ctx.$slots, "default", {
                      key: 0,
                      page: $options.getPage($options.pageCount)
                    })
                  : (vue.openBlock(), vue.createBlock(_component_BPaginationButton, {
                      key: 1,
                      page: $options.getPage($options.pageCount)
                    }, null, 8 /* PROPS */, ["page"]))
              ]))
            : vue.createCommentVNode("v-if", true)
        ]))
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/pagination/Pagination.vue";

exports.script = script;
exports.script$1 = script$1;