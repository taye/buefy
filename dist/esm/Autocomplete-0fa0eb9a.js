import { _ as _defineProperty, b as _typeof, d as _toConsumableArray } from './_rollupPluginBabelHelpers-0979e6ce.js';
import { getValueByPath, getSlot, toCssWidth, isCustomElement, createAbsoluteElement, removeElement } from './helpers.js';
import { F as FormElementMixin } from './FormElementMixin-3605f28d.js';
import { s as script$1 } from './Input-a74a428d.js';
import { resolveComponent, openBlock, createBlock, createVNode, mergeProps, withKeys, withModifiers, Transition, withCtx, withDirectives, renderSlot, createCommentVNode, Fragment, renderList, toDisplayString, vShow } from 'vue';

var script = {
  name: 'BAutocomplete',
  components: _defineProperty({}, script$1.name, script$1),
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    value: [Number, String],
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    field: {
      type: String,
      default: 'value'
    },
    keepFirst: Boolean,
    clearOnSelect: Boolean,
    openOnFocus: Boolean,
    customFormatter: Function,
    checkInfiniteScroll: Boolean,
    keepOpen: Boolean,
    clearable: Boolean,
    maxHeight: [String, Number],
    dropdownPosition: {
      type: String,
      default: 'auto'
    },
    groupField: String,
    groupOptions: String,
    iconRight: String,
    iconRightClickable: Boolean,
    appendToBody: Boolean,
    confirmKeys: {
      type: Array,
      default: function _default() {
        return ['Tab', 'Enter'];
      }
    }
  },
  data: function data() {
    return {
      selected: null,
      hovered: null,
      isActive: false,
      newValue: this.value,
      newAutocomplete: this.autocomplete || 'off',
      isListInViewportVertically: true,
      hasFocus: false,
      style: {},
      _isAutocomplete: true,
      _elementRef: 'input',
      _bodyEl: undefined // Used to append to body

    };
  },
  computed: {
    computedData: function computedData() {
      var _this = this;

      if (this.groupField) {
        if (this.groupOptions) {
          var newData = [];
          this.data.forEach(function (option) {
            var group = getValueByPath(option, _this.groupField);
            var items = getValueByPath(option, _this.groupOptions);
            newData.push({
              group: group,
              items: items
            });
          });
          return newData;
        } else {
          var tmp = {};
          this.data.forEach(function (option) {
            var group = getValueByPath(option, _this.groupField);
            if (!tmp[group]) tmp[group] = [];
            tmp[group].push(option);
          });
          var _newData = [];
          Object.keys(tmp).forEach(function (group) {
            _newData.push({
              group: group,
              items: tmp[group]
            });
          });
          return _newData;
        }
      }

      return [{
        items: this.data
      }];
    },
    isEmpty: function isEmpty() {
      if (!this.computedData) return true;
      return !this.computedData.some(function (element) {
        return element.items && element.items.length;
      });
    },

    /**
     * White-listed items to not close when clicked.
     * Add input, dropdown and all children.
     */
    whiteList: function whiteList() {
      var whiteList = [];
      whiteList.push(this.$refs.input.$el.querySelector('input'));
      whiteList.push(this.$refs.dropdown); // Add all children from dropdown

      if (this.$refs.dropdown !== undefined) {
        var children = this.$refs.dropdown.querySelectorAll('*');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var child = _step.value;
            whiteList.push(child);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      if (this.$parent.$data._isTaginput) {
        // Add taginput container
        whiteList.push(this.$parent.$el); // Add .tag and .delete

        var tagInputChildren = this.$parent.$el.querySelectorAll('*');
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = tagInputChildren[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var tagInputChild = _step2.value;
            whiteList.push(tagInputChild);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      return whiteList;
    },

    /**
     * Check if exists default slot
     */
    hasDefaultSlot: function hasDefaultSlot() {
      return !!this.$scopedSlots.default;
    },

    /**
     * Check if exists group slot
     */
    hasGroupSlot: function hasGroupSlot() {
      return !!this.$scopedSlots.group;
    },

    /**
     * Check if exists "empty" slot
     */
    hasEmptySlot: function hasEmptySlot() {
      return !!getSlot(this.$slots, 'empty');
    },

    /**
     * Check if exists "header" slot
     */
    hasHeaderSlot: function hasHeaderSlot() {
      return !!getSlot(this.$slots, 'header');
    },

    /**
     * Check if exists "footer" slot
     */
    hasFooterSlot: function hasFooterSlot() {
      return !!getSlot(this.$slots, 'footer');
    },

    /**
     * Apply dropdownPosition property
     */
    isOpenedTop: function isOpenedTop() {
      return this.dropdownPosition === 'top' || this.dropdownPosition === 'auto' && !this.isListInViewportVertically;
    },
    newIconRight: function newIconRight() {
      if (this.clearable && this.newValue) {
        return 'close-circle';
      }

      return this.iconRight;
    },
    newIconRightClickable: function newIconRightClickable() {
      if (this.clearable) {
        return true;
      }

      return this.iconRightClickable;
    },
    contentStyle: function contentStyle() {
      return {
        maxHeight: toCssWidth(this.maxHeight)
      };
    }
  },
  watch: {
    /**
     * When dropdown is toggled, check the visibility to know when
     * to open upwards.
     */
    isActive: function isActive(active) {
      var _this2 = this;

      if (this.dropdownPosition === 'auto') {
        if (active) {
          this.calcDropdownInViewportVertical();
        } else {
          // Timeout to wait for the animation to finish before recalculating
          setTimeout(function () {
            _this2.calcDropdownInViewportVertical();
          }, 100);
        }
      }
    },

    /**
     * When updating input's value
     *   1. Emit changes
     *   2. If value isn't the same as selected, set null
     *   3. Close dropdown if value is clear or else open it
     */
    newValue: function newValue(value) {
      this.$emit('input', value); // Check if selected is invalid

      var currentValue = this.getValue(this.selected);

      if (currentValue && currentValue !== value) {
        this.setSelected(null, false);
      } // Close dropdown if input is clear or else open it


      if (this.hasFocus && (!this.openOnFocus || value)) {
        this.isActive = !!value;
      }
    },

    /**
     * When v-model is changed:
     *   1. Update internal value.
     *   2. If it's invalid, validate again.
     */
    value: function value(_value) {
      this.newValue = _value;
    },

    /**
     * Select first option if "keep-first
     */
    data: function data(value) {
      var _this3 = this;

      // Keep first option always pre-selected
      if (this.keepFirst) {
        this.$nextTick(function () {
          if (_this3.isActive) {
            _this3.selectFirstOption(_this3.computedData);
          }
        });
      }
    }
  },
  methods: {
    /**
     * Set which option is currently hovered.
     */
    setHovered: function setHovered(option) {
      if (option === undefined) return;
      this.hovered = option;
    },

    /**
     * Set which option is currently selected, update v-model,
     * update input value and close dropdown.
     */
    setSelected: function setSelected(option) {
      var _this4 = this;

      var closeDropdown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      if (option === undefined) return;
      this.selected = option;
      this.$emit('select', this.selected, event);

      if (this.selected !== null) {
        this.newValue = this.clearOnSelect ? '' : this.getValue(this.selected);
        this.setHovered(null);
      }

      closeDropdown && this.$nextTick(function () {
        _this4.isActive = false;
      });
      this.checkValidity();
    },

    /**
     * Select first option
     */
    selectFirstOption: function selectFirstOption(element) {
      var _this5 = this;

      this.$nextTick(function () {
        if (element.length) {
          // If has visible data or open on focus, keep updating the hovered
          var option = element[0].items[0];

          if (_this5.openOnFocus || _this5.newValue !== '' && _this5.hovered !== option) {
            _this5.setHovered(option);
          }
        } else {
          _this5.setHovered(null);
        }
      });
    },
    keydown: function keydown(event) {
      var key = event.key; // cannot destructure preventDefault (https://stackoverflow.com/a/49616808/2774496)
      // Close dropdown on Tab & no hovered

      this.isActive = key !== 'Tab';
      if (this.hovered === null) return;

      if (this.confirmKeys.indexOf(key) >= 0) {
        // If adding by comma, don't add the comma to the input
        if (key === ',') event.preventDefault(); // Close dropdown on select by Tab

        var closeDropdown = !this.keepOpen || key === 'Tab';
        this.setSelected(this.hovered, closeDropdown, event);
      }
    },

    /**
     * Close dropdown if clicked outside.
     */
    clickedOutside: function clickedOutside(event) {
      var target = isCustomElement(this) ? event.composedPath()[0] : event.target;

      if (!this.hasFocus && this.whiteList.indexOf(target) < 0) {
        if (this.keepFirst && this.hovered) {
          this.setSelected(this.hovered, true);
        } else {
          this.isActive = false;
        }
      }
    },

    /**
     * Return display text for the input.
     * If object, get value from path, or else just the value.
     */
    getValue: function getValue(option) {
      if (option === null) return;

      if (typeof this.customFormatter !== 'undefined') {
        return this.customFormatter(option);
      }

      return _typeof(option) === 'object' ? getValueByPath(option, this.field) : option;
    },

    /**
     * Check if the scroll list inside the dropdown
     * reached it's end.
     */
    checkIfReachedTheEndOfScroll: function checkIfReachedTheEndOfScroll(list) {
      if (list.clientHeight !== list.scrollHeight && list.scrollTop + list.clientHeight >= list.scrollHeight) {
        this.$emit('infinite-scroll');
      }
    },

    /**
     * Calculate if the dropdown is vertically visible when activated,
     * otherwise it is openened upwards.
     */
    calcDropdownInViewportVertical: function calcDropdownInViewportVertical() {
      var _this6 = this;

      this.$nextTick(function () {
        /**
         * this.$refs.dropdown may be undefined
         * when Autocomplete is conditional rendered
         */
        if (_this6.$refs.dropdown === undefined) return;

        var rect = _this6.$refs.dropdown.getBoundingClientRect();

        _this6.isListInViewportVertically = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

        if (_this6.appendToBody) {
          _this6.updateAppendToBody();
        }
      });
    },

    /**
     * Arrows keys listener.
     * If dropdown is active, set hovered option, or else just open.
     */
    keyArrows: function keyArrows(direction) {
      var sum = direction === 'down' ? 1 : -1;

      if (this.isActive) {
        var data = this.computedData.map(function (d) {
          return d.items;
        }).reduce(function (a, b) {
          return [].concat(_toConsumableArray(a), _toConsumableArray(b));
        }, []);
        var index = data.indexOf(this.hovered) + sum;
        index = index > data.length - 1 ? data.length - 1 : index;
        index = index < 0 ? 0 : index;
        this.setHovered(data[index]);
        var list = this.$refs.dropdown.querySelector('.dropdown-content');
        var element = list.querySelectorAll('a.dropdown-item:not(.is-disabled)')[index];
        if (!element) return;
        var visMin = list.scrollTop;
        var visMax = list.scrollTop + list.clientHeight - element.clientHeight;

        if (element.offsetTop < visMin) {
          list.scrollTop = element.offsetTop;
        } else if (element.offsetTop >= visMax) {
          list.scrollTop = element.offsetTop - list.clientHeight + element.clientHeight;
        }
      } else {
        this.isActive = true;
      }
    },

    /**
     * Focus listener.
     * If value is the same as selected, select all text.
     */
    focused: function focused(event) {
      if (this.getValue(this.selected) === this.newValue) {
        this.$el.querySelector('input').select();
      }

      if (this.openOnFocus) {
        this.isActive = true;

        if (this.keepFirst) {
          this.selectFirstOption(this.computedData);
        }
      }

      this.hasFocus = true;
      this.$emit('focus', event);
    },

    /**
     * Blur listener.
     */
    onBlur: function onBlur(event) {
      this.hasFocus = false;
      this.$emit('blur', event);
    },
    onInput: function onInput(event) {
      var currentValue = this.getValue(this.selected);
      if (currentValue && currentValue === this.newValue) return;
      this.$emit('typing', this.newValue);
      this.checkValidity();
    },
    rightIconClick: function rightIconClick(event) {
      if (this.clearable) {
        this.newValue = '';
        this.setSelected(null, false);

        if (this.openOnFocus) {
          this.$refs.input.$el.focus();
        }
      } else {
        this.$emit('icon-right-click', event);
      }
    },
    checkValidity: function checkValidity() {
      var _this7 = this;

      if (this.useHtml5Validation) {
        this.$nextTick(function () {
          _this7.checkHtml5Validity();
        });
      }
    },
    updateAppendToBody: function updateAppendToBody() {
      var dropdownMenu = this.$refs.dropdown;
      var trigger = this.$refs.input.$el;

      if (dropdownMenu && trigger) {
        // update wrapper dropdown
        var root = this.$data._bodyEl;
        root.classList.forEach(function (item) {
          return root.classList.remove(item);
        });
        root.classList.add('autocomplete');
        root.classList.add('control');

        if (this.expandend) {
          root.classList.add('is-expandend');
        }

        var rect = trigger.getBoundingClientRect();
        var top = rect.top + window.scrollY;
        var left = rect.left + window.scrollX;

        if (!this.isOpenedTop) {
          top += trigger.clientHeight;
        } else {
          top -= dropdownMenu.clientHeight;
        }

        this.style = {
          position: 'absolute',
          top: "".concat(top, "px"),
          left: "".concat(left, "px"),
          width: "".concat(trigger.clientWidth, "px"),
          maxWidth: "".concat(trigger.clientWidth, "px"),
          zIndex: '99'
        };
      }
    }
  },
  created: function created() {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', this.clickedOutside);

      if (this.dropdownPosition === 'auto') {
        window.addEventListener('resize', this.calcDropdownInViewportVertical);
      }
    }
  },
  mounted: function mounted() {
    var _this8 = this;

    if (this.checkInfiniteScroll && this.$refs.dropdown && this.$refs.dropdown.querySelector('.dropdown-content')) {
      var list = this.$refs.dropdown.querySelector('.dropdown-content');
      list.addEventListener('scroll', function () {
        return _this8.checkIfReachedTheEndOfScroll(list);
      });
    }

    if (this.appendToBody) {
      this.$data._bodyEl = createAbsoluteElement(this.$refs.dropdown);
      this.updateAppendToBody();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (typeof window !== 'undefined') {
      document.removeEventListener('click', this.clickedOutside);

      if (this.dropdownPosition === 'auto') {
        window.removeEventListener('resize', this.calcDropdownInViewportVertical);
      }
    }

    if (this.checkInfiniteScroll && this.$refs.dropdown && this.$refs.dropdown.querySelector('.dropdown-content')) {
      var list = this.$refs.dropdown.querySelector('.dropdown-content');
      list.removeEventListener('scroll', this.checkIfReachedTheEndOfScroll);
    }

    if (this.appendToBody) {
      removeElement(this.$data._bodyEl);
    }
  }
};

const _hoisted_1 = {
  key: 0,
  class: "dropdown-item"
};
const _hoisted_2 = {
  key: 1,
  class: "has-text-weight-bold"
};
const _hoisted_3 = { key: 1 };
const _hoisted_4 = {
  key: 1,
  class: "dropdown-item is-disabled"
};
const _hoisted_5 = {
  key: 2,
  class: "dropdown-item"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_input = resolveComponent("b-input");

  return (openBlock(), createBlock("div", {
    class: ["autocomplete control", { 'is-expanded': _ctx.expanded }]
  }, [
    createVNode(_component_b_input, mergeProps({
      modelValue: $data.newValue,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.newValue = $event)),
      ref: "input",
      type: "text",
      size: _ctx.size,
      loading: _ctx.loading,
      rounded: _ctx.rounded,
      icon: _ctx.icon,
      "icon-right": $options.newIconRight,
      "icon-right-clickable": $options.newIconRightClickable,
      "icon-pack": _ctx.iconPack,
      maxlength: _ctx.maxlength,
      autocomplete: $data.newAutocomplete,
      "use-html5-validation": false
    }, _ctx.$attrs, {
      onInput: $options.onInput,
      onFocus: $options.focused,
      onBlur: $options.onBlur,
      onKeyup: _cache[2] || (_cache[2] = withKeys(withModifiers($event => ($data.isActive = false), ["prevent"]), ["native","esc"])),
      onKeydown: [
        withKeys($options.keydown, ["native"]),
        _cache[3] || (_cache[3] = withKeys(withModifiers($event => ($options.keyArrows('up')), ["prevent"]), ["native","up"])),
        _cache[4] || (_cache[4] = withKeys(withModifiers($event => ($options.keyArrows('down')), ["prevent"]), ["native","down"]))
      ],
      onIconRightClick: $options.rightIconClick,
      onIconClick: _cache[5] || (_cache[5] = (event) => _ctx.$emit('icon-click', event))
    }), null, 16 /* FULL_PROPS */, ["modelValue", "size", "loading", "rounded", "icon", "icon-right", "icon-right-clickable", "icon-pack", "maxlength", "autocomplete", "onInput", "onFocus", "onBlur", "onKeydown", "onIconRightClick"]),
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        withDirectives(createVNode("div", {
          class: ["dropdown-menu", { 'is-opened-top': $options.isOpenedTop && !$props.appendToBody }],
          style: $data.style,
          ref: "dropdown"
        }, [
          withDirectives(createVNode("div", {
            class: "dropdown-content",
            style: $options.contentStyle
          }, [
            ($options.hasHeaderSlot)
              ? (openBlock(), createBlock("div", _hoisted_1, [
                  renderSlot(_ctx.$slots, "header")
                ]))
              : createCommentVNode("v-if", true),
            (openBlock(true), createBlock(Fragment, null, renderList($options.computedData, (element, groupindex) => {
              return (openBlock(), createBlock(Fragment, null, [
                (element.group)
                  ? (openBlock(), createBlock("div", {
                      key: groupindex + 'group',
                      class: "dropdown-item"
                    }, [
                      ($options.hasGroupSlot)
                        ? renderSlot(_ctx.$slots, "group", {
                            key: 0,
                            group: element.group,
                            index: groupindex
                          })
                        : (openBlock(), createBlock("span", _hoisted_2, toDisplayString(element.group), 1 /* TEXT */))
                    ]))
                  : createCommentVNode("v-if", true),
                (openBlock(true), createBlock(Fragment, null, renderList(element.items, (option, index) => {
                  return (openBlock(), createBlock("a", {
                    key: groupindex + ':' + index,
                    class: ["dropdown-item", { 'is-hovered': option === $data.hovered }],
                    onClick: $event => ($options.setSelected(option, undefined, $event))
                  }, [
                    ($options.hasDefaultSlot)
                      ? renderSlot(_ctx.$slots, "default", {
                          key: 0,
                          option: option,
                          index: index
                        })
                      : (openBlock(), createBlock("span", _hoisted_3, toDisplayString($options.getValue(option, true)), 1 /* TEXT */))
                  ], 10 /* CLASS, PROPS */, ["onClick"]))
                }), 128 /* KEYED_FRAGMENT */))
              ], 64 /* STABLE_FRAGMENT */))
            }), 256 /* UNKEYED_FRAGMENT */)),
            ($options.isEmpty && $options.hasEmptySlot)
              ? (openBlock(), createBlock("div", _hoisted_4, [
                  renderSlot(_ctx.$slots, "empty")
                ]))
              : createCommentVNode("v-if", true),
            ($options.hasFooterSlot)
              ? (openBlock(), createBlock("div", _hoisted_5, [
                  renderSlot(_ctx.$slots, "footer")
                ]))
              : createCommentVNode("v-if", true)
          ], 4 /* STYLE */), [
            [vShow, $data.isActive]
          ])
        ], 6 /* CLASS, STYLE */), [
          [vShow, $data.isActive && (!$options.isEmpty || $options.hasEmptySlot || $options.hasHeaderSlot)]
        ])
      ]),
      _: 1 /* STABLE */
    })
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/autocomplete/Autocomplete.vue";

export { script as s };
