import { _ as _defineProperty, d as _toConsumableArray, b as _typeof } from './_rollupPluginBabelHelpers-0979e6ce.js';
import { toCssWidth, getValueByPath, indexOf, multiColumnSort, getSlot, escapeRegExpChars } from './helpers.js';
import { V as VueInstance, s as setVueInstance } from './config-63b70aae.js';
import { s as script$7 } from './Checkbox-449b40e8.js';
import { s as script$5 } from './Icon-9c398a60.js';
import { s as script$8 } from './Input-a74a428d.js';
import { s as script$9 } from './Loading-70cc889f.js';
import { S as SlotComponent } from './SlotComponent-07d8e7a2.js';
import { s as script$4 } from './Select-2baea3c2.js';
import { resolveComponent, openBlock, createBlock, createVNode, withCtx, Fragment, renderList, createTextVNode, toDisplayString, createCommentVNode, withDirectives, vShow, renderSlot, mergeProps, withKeys, withModifiers, toHandlerKey, Transition } from 'vue';
import { s as script$6 } from './Pagination-04927382.js';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './CheckRadioMixin-e726a83c.js';
import './FormElementMixin-3605f28d.js';
import './ssr-44a76b0e.js';

function debounce (func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

var _components$1;
var script$3 = {
  name: 'BTableMobileSort',
  components: (_components$1 = {}, _defineProperty(_components$1, script$4.name, script$4), _defineProperty(_components$1, script$5.name, script$5), _components$1),
  props: {
    currentSortColumn: Object,
    sortMultipleData: Array,
    isAsc: Boolean,
    columns: Array,
    placeholder: String,
    iconPack: String,
    sortIcon: {
      type: String,
      default: 'arrow-up'
    },
    sortIconSize: {
      type: String,
      default: 'is-small'
    },
    sortMultiple: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      sortMultipleSelect: '',
      mobileSort: this.currentSortColumn,
      defaultEvent: {
        shiftKey: true,
        altKey: true,
        ctrlKey: true
      },
      ignoreSort: false
    };
  },
  computed: {
    showPlaceholder: function showPlaceholder() {
      var _this = this;

      return !this.columns || !this.columns.some(function (column) {
        return column === _this.mobileSort;
      });
    }
  },
  watch: {
    sortMultipleSelect: function sortMultipleSelect(column) {
      if (this.ignoreSort) {
        this.ignoreSort = false;
      } else {
        this.$emit('sort', column, this.defaultEvent);
      }
    },
    mobileSort: function mobileSort(column) {
      if (this.currentSortColumn === column) return;
      this.$emit('sort', column, this.defaultEvent);
    },
    currentSortColumn: function currentSortColumn(column) {
      this.mobileSort = column;
    }
  },
  methods: {
    removePriority: function removePriority() {
      var _this2 = this;

      this.$emit('removePriority', this.sortMultipleSelect); // ignore the watcher to sort when we just change whats displayed in the select
      // otherwise the direction will be flipped
      // The sort event is already triggered by the emit

      this.ignoreSort = true; // Select one of the other options when we reset one

      var remainingFields = this.sortMultipleData.filter(function (data) {
        return data.field !== _this2.sortMultipleSelect.field;
      }).map(function (data) {
        return data.field;
      });
      this.sortMultipleSelect = this.columns.filter(function (column) {
        return remainingFields.includes(column.field);
      })[0];
    },
    getSortingObjectOfColumn: function getSortingObjectOfColumn(column) {
      return this.sortMultipleData.filter(function (i) {
        return i.field === column.field;
      })[0];
    },
    columnIsDesc: function columnIsDesc(column) {
      var sortingObject = this.getSortingObjectOfColumn(column);

      if (sortingObject) {
        return !!(sortingObject.order && sortingObject.order === 'desc');
      }

      return true;
    },
    getLabel: function getLabel(column) {
      var sortingObject = this.getSortingObjectOfColumn(column);

      if (sortingObject) {
        return column.label + '(' + (this.sortMultipleData.indexOf(sortingObject) + 1) + ')';
      }

      return column.label;
    },
    sort: function sort() {
      this.$emit('sort', this.sortMultiple ? this.sortMultipleSelect : this.mobileSort, this.defaultEvent);
    }
  }
};

const _hoisted_1$2 = { class: "field table-mobile-sort" };
const _hoisted_2$2 = { class: "field has-addons" };
const _hoisted_3$2 = /*#__PURE__*/createTextVNode(" ↓ ");
const _hoisted_4$2 = /*#__PURE__*/createTextVNode(" ↑ ");
const _hoisted_5$1 = { class: "control" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_select = resolveComponent("b-select");
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock("div", _hoisted_1$2, [
    createVNode("div", _hoisted_2$2, [
      ($props.sortMultiple)
        ? (openBlock(), createBlock(_component_b_select, {
            key: 0,
            modelValue: $data.sortMultipleSelect,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.sortMultipleSelect = $event)),
            expanded: ""
          }, {
            default: withCtx(() => [
              (_ctx.column.sortable)
                ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.columns, (column, index) => {
                    return (openBlock(), createBlock("option", {
                      key: index,
                      value: column
                    }, [
                      createTextVNode(toDisplayString($options.getLabel(column)) + " ", 1 /* TEXT */),
                      ($options.getSortingObjectOfColumn(column))
                        ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            ($options.columnIsDesc(column))
                              ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  _hoisted_3$2
                                ], 64 /* STABLE_FRAGMENT */))
                              : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  _hoisted_4$2
                                ], 64 /* STABLE_FRAGMENT */))
                          ], 64 /* STABLE_FRAGMENT */))
                        : createCommentVNode("v-if", true)
                    ], 8 /* PROPS */, ["value"]))
                  }), 128 /* KEYED_FRAGMENT */))
                : createCommentVNode("v-if", true)
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["modelValue"]))
        : (openBlock(), createBlock(_component_b_select, {
            key: 1,
            modelValue: $data.mobileSort,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($data.mobileSort = $event)),
            expanded: ""
          }, {
            default: withCtx(() => [
              ($props.placeholder)
                ? withDirectives((openBlock(), createBlock("option", {
                    key: 0,
                    value: {},
                    selected: "",
                    disabled: "",
                    hidden: ""
                  }, toDisplayString($props.placeholder), 513 /* TEXT, NEED_PATCH */)), [
                    [vShow, $options.showPlaceholder]
                  ])
                : createCommentVNode("v-if", true),
              (_ctx.column.sortable)
                ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList($props.columns, (column, index) => {
                    return (openBlock(), createBlock("option", {
                      key: index,
                      value: column
                    }, toDisplayString(column.label), 9 /* TEXT, PROPS */, ["value"]))
                  }), 128 /* KEYED_FRAGMENT */))
                : createCommentVNode("v-if", true)
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["modelValue"])),
      createVNode("div", _hoisted_5$1, [
        ($props.sortMultiple && $props.sortMultipleData.length > 0)
          ? (openBlock(), createBlock(Fragment, { key: 0 }, [
              createVNode("button", {
                class: "button is-primary",
                onClick: _cache[3] || (_cache[3] = (...args) => ($options.sort && $options.sort(...args)))
              }, [
                createVNode(_component_b_icon, {
                  class: { 'is-desc': $options.columnIsDesc($data.sortMultipleSelect) },
                  icon: $props.sortIcon,
                  pack: $props.iconPack,
                  size: $props.sortIconSize,
                  both: ""
                }, null, 8 /* PROPS */, ["class", "icon", "pack", "size"])
              ]),
              createVNode("button", {
                class: "button is-primary",
                onClick: _cache[4] || (_cache[4] = (...args) => ($options.removePriority && $options.removePriority(...args)))
              }, [
                createVNode(_component_b_icon, {
                  icon: "delete",
                  size: $props.sortIconSize,
                  both: ""
                }, null, 8 /* PROPS */, ["size"])
              ])
            ], 64 /* STABLE_FRAGMENT */))
          : (!$props.sortMultiple)
            ? (openBlock(), createBlock("button", {
                key: 1,
                class: "button is-primary",
                onClick: _cache[5] || (_cache[5] = (...args) => ($options.sort && $options.sort(...args)))
              }, [
                withDirectives(createVNode(_component_b_icon, {
                  class: { 'is-desc': !$props.isAsc },
                  icon: $props.sortIcon,
                  pack: $props.iconPack,
                  size: $props.sortIconSize,
                  both: ""
                }, null, 8 /* PROPS */, ["class", "icon", "pack", "size"]), [
                  [vShow, $props.currentSortColumn === $data.mobileSort]
                ])
              ]))
            : createCommentVNode("v-if", true)
      ])
    ])
  ]))
}

script$3.render = render$3;
script$3.__file = "src/components/table/TableMobileSort.vue";

var script$2 = {
  name: 'BTableColumn',
  inject: {
    $table: {
      name: '$table',
      default: false
    }
  },
  props: {
    label: String,
    customKey: [String, Number],
    field: String,
    meta: [String, Number, Boolean, Function, Object, Array],
    width: [Number, String],
    numeric: Boolean,
    centered: Boolean,
    searchable: Boolean,
    sortable: Boolean,
    visible: {
      type: Boolean,
      default: true
    },
    subheading: [String, Number],
    customSort: Function,
    customSearch: Function,
    sticky: Boolean,
    headerSelectable: Boolean,
    headerClass: String,
    cellClass: String
  },
  data: function data() {
    return {
      newKey: this.customKey || this.label,
      _isTableColumn: true
    };
  },
  computed: {
    rootClasses: function rootClasses() {
      return [this.cellClass, {
        'has-text-right': this.numeric && !this.centered,
        'has-text-centered': this.centered,
        'is-sticky': this.sticky
      }];
    },
    style: function style() {
      return {
        width: toCssWidth(this.width)
      };
    },
    hasDefaultSlot: function hasDefaultSlot() {
      return !!this.$scopedSlots.default;
    },

    /**
     * Return if column header is un-selectable
     */
    isHeaderUnSelectable: function isHeaderUnSelectable() {
      return !this.headerSelectable && this.sortable;
    }
  },
  created: function created() {
    if (!this.$table) {
      this.$destroy();
      throw new Error('You should wrap bTableColumn on a bTable');
    }

    this.$table.refreshSlots();
  },
  render: function render() {
    // renderless
    return null;
  }
};

const render$2 = () => {};


script$2.render = render$2;
script$2.__file = "src/components/table/TableColumn.vue";

var script$1 = {
  name: 'BTablePagination',
  components: _defineProperty({}, script$6.name, script$6),
  props: {
    paginated: Boolean,
    total: [Number, String],
    perPage: [Number, String],
    currentPage: [Number, String],
    paginationSimple: Boolean,
    paginationSize: String,
    rounded: Boolean,
    iconPack: String,
    ariaNextLabel: String,
    ariaPreviousLabel: String,
    ariaPageLabel: String,
    ariaCurrentLabel: String
  },
  data: function data() {
    return {
      newCurrentPage: this.currentPage
    };
  },
  watch: {
    currentPage: function currentPage(newVal) {
      this.newCurrentPage = newVal;
    }
  },
  methods: {
    /**
    * Paginator change listener.
    */
    pageChanged: function pageChanged(page) {
      this.newCurrentPage = page > 0 ? page : 1;
      this.$emit('update:currentPage', this.newCurrentPage);
      this.$emit('page-change', this.newCurrentPage);
    }
  }
};

const _hoisted_1$1 = { class: "top level" };
const _hoisted_2$1 = { class: "level-left" };
const _hoisted_3$1 = { class: "level-right" };
const _hoisted_4$1 = {
  key: 0,
  class: "level-item"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_pagination = resolveComponent("b-pagination");

  return (openBlock(), createBlock("div", _hoisted_1$1, [
    createVNode("div", _hoisted_2$1, [
      renderSlot(_ctx.$slots, "default")
    ]),
    createVNode("div", _hoisted_3$1, [
      ($props.paginated)
        ? (openBlock(), createBlock("div", _hoisted_4$1, [
            createVNode(_component_b_pagination, {
              "icon-pack": $props.iconPack,
              total: $props.total,
              "per-page": $props.perPage,
              simple: $props.paginationSimple,
              size: $props.paginationSize,
              current: $data.newCurrentPage,
              rounded: $props.rounded,
              onChange: $options.pageChanged,
              "aria-next-label": $props.ariaNextLabel,
              "aria-previous-label": $props.ariaPreviousLabel,
              "aria-page-label": $props.ariaPageLabel,
              "aria-current-label": $props.ariaCurrentLabel
            }, null, 8 /* PROPS */, ["icon-pack", "total", "per-page", "simple", "size", "current", "rounded", "onChange", "aria-next-label", "aria-previous-label", "aria-page-label", "aria-current-label"])
          ]))
        : createCommentVNode("v-if", true)
    ])
  ]))
}

script$1.render = render$1;
script$1.__file = "src/components/table/TablePagination.vue";

var _components;
var script = {
  name: 'BTable',
  components: (_components = {}, _defineProperty(_components, script$7.name, script$7), _defineProperty(_components, script$5.name, script$5), _defineProperty(_components, script$8.name, script$8), _defineProperty(_components, script$9.name, script$9), _defineProperty(_components, SlotComponent.name, SlotComponent), _defineProperty(_components, script$3.name, script$3), _defineProperty(_components, script$2.name, script$2), _defineProperty(_components, script$1.name, script$1), _components),
  inheritAttrs: false,
  provide: function provide() {
    return {
      $table: this
    };
  },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    bordered: Boolean,
    striped: Boolean,
    narrowed: Boolean,
    hoverable: Boolean,
    loading: Boolean,
    detailed: Boolean,
    checkable: Boolean,
    headerCheckable: {
      type: Boolean,
      default: true
    },
    checkboxPosition: {
      type: String,
      default: 'left',
      validator: function validator(value) {
        return ['left', 'right'].indexOf(value) >= 0;
      }
    },
    stickyCheckbox: {
      type: Boolean,
      default: false
    },
    selected: Object,
    isRowSelectable: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    focusable: Boolean,
    customIsChecked: Function,
    isRowCheckable: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    checkedRows: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    mobileCards: {
      type: Boolean,
      default: true
    },
    defaultSort: [String, Array],
    defaultSortDirection: {
      type: String,
      default: 'asc'
    },
    sortIcon: {
      type: String,
      default: 'arrow-up'
    },
    sortIconSize: {
      type: String,
      default: 'is-small'
    },
    sortMultiple: {
      type: Boolean,
      default: false
    },
    sortMultipleData: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    sortMultipleKey: {
      type: String,
      default: null
    },
    paginated: Boolean,
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: [Number, String],
      default: 20
    },
    showDetailIcon: {
      type: Boolean,
      default: true
    },
    paginationPosition: {
      type: String,
      default: 'bottom',
      validator: function validator(value) {
        return ['bottom', 'top', 'both'].indexOf(value) >= 0;
      }
    },
    paginationRounded: Boolean,
    backendSorting: Boolean,
    backendFiltering: Boolean,
    rowClass: {
      type: Function,
      default: function _default() {
        return '';
      }
    },
    openedDetailed: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    hasDetailedVisible: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    detailKey: {
      type: String,
      default: ''
    },
    detailTransition: {
      type: String,
      default: ''
    },
    customDetailRow: {
      type: Boolean,
      default: false
    },
    backendPagination: Boolean,
    total: {
      type: [Number, String],
      default: 0
    },
    iconPack: String,
    mobileSortPlaceholder: String,
    customRowKey: String,
    draggable: {
      type: Boolean,
      default: false
    },
    scrollable: Boolean,
    ariaNextLabel: String,
    ariaPreviousLabel: String,
    ariaPageLabel: String,
    ariaCurrentLabel: String,
    stickyHeader: Boolean,
    height: [Number, String],
    filtersEvent: {
      type: String,
      default: ''
    },
    cardLayout: Boolean,
    showHeader: {
      type: Boolean,
      default: true
    },
    debounceSearch: Number
  },
  data: function data() {
    return {
      sortMultipleDataLocal: [],
      getValueByPath: getValueByPath,
      visibleDetailRows: this.openedDetailed,
      newData: this.data,
      newDataTotal: this.backendPagination ? this.total : this.data.length,
      newCheckedRows: _toConsumableArray(this.checkedRows),
      lastCheckedRowIndex: null,
      newCurrentPage: this.currentPage,
      currentSortColumn: {},
      isAsc: true,
      filters: {},
      defaultSlots: [],
      firstTimeSort: true,
      // Used by first time initSort
      _isTable: true // Used by TableColumn

    };
  },
  computed: {
    sortMultipleDataComputed: function sortMultipleDataComputed() {
      return this.backendSorting ? this.sortMultipleData : this.sortMultipleDataLocal;
    },
    tableClasses: function tableClasses() {
      return {
        'is-bordered': this.bordered,
        'is-striped': this.striped,
        'is-narrow': this.narrowed,
        'is-hoverable': (this.hoverable || this.focusable) && this.visibleData.length
      };
    },
    tableWrapperClasses: function tableWrapperClasses() {
      return {
        'has-mobile-cards': this.mobileCards,
        'has-sticky-header': this.stickyHeader,
        'is-card-list': this.cardLayout,
        'table-container': this.isScrollable
      };
    },
    tableStyle: function tableStyle() {
      return {
        height: toCssWidth(this.height)
      };
    },

    /**
    * Splitted data based on the pagination.
    */
    visibleData: function visibleData() {
      if (!this.paginated) return this.newData;
      var currentPage = this.newCurrentPage;
      var perPage = this.perPage;

      if (this.newData.length <= perPage) {
        return this.newData;
      } else {
        var start = (currentPage - 1) * perPage;
        var end = parseInt(start, 10) + parseInt(perPage, 10);
        return this.newData.slice(start, end);
      }
    },
    visibleColumns: function visibleColumns() {
      if (!this.newColumns) return this.newColumns;
      return this.newColumns.filter(function (column) {
        return column.visible || column.visible === undefined;
      });
    },

    /**
    * Check if all rows in the page are checked.
    */
    isAllChecked: function isAllChecked() {
      var _this = this;

      var validVisibleData = this.visibleData.filter(function (row) {
        return _this.isRowCheckable(row);
      });
      if (validVisibleData.length === 0) return false;
      var isAllChecked = validVisibleData.some(function (currentVisibleRow) {
        return indexOf(_this.newCheckedRows, currentVisibleRow, _this.customIsChecked) < 0;
      });
      return !isAllChecked;
    },

    /**
    * Check if all rows in the page are checkable.
    */
    isAllUncheckable: function isAllUncheckable() {
      var _this2 = this;

      var validVisibleData = this.visibleData.filter(function (row) {
        return _this2.isRowCheckable(row);
      });
      return validVisibleData.length === 0;
    },

    /**
    * Check if has any sortable column.
    */
    hasSortablenewColumns: function hasSortablenewColumns() {
      return this.newColumns.some(function (column) {
        return column.sortable;
      });
    },

    /**
    * Check if has any searchable column.
    */
    hasSearchablenewColumns: function hasSearchablenewColumns() {
      return this.newColumns.some(function (column) {
        return column.searchable;
      });
    },

    /**
    * Check if has any column using subheading.
    */
    hasCustomSubheadings: function hasCustomSubheadings() {
      if (this.$scopedSlots && this.$scopedSlots.subheading) return true;
      return this.newColumns.some(function (column) {
        return column.subheading || column.$scopedSlots && column.$scopedSlots.subheading;
      });
    },

    /**
    * Return total column count based if it's checkable or expanded
    */
    columnCount: function columnCount() {
      var count = this.visibleColumns.length;
      count += this.checkable ? 1 : 0;
      count += this.detailed && this.showDetailIcon ? 1 : 0;
      return count;
    },

    /**
    * return if detailed row tabled
    * will be with chevron column & icon or not
    */
    showDetailRowIcon: function showDetailRowIcon() {
      return this.detailed && this.showDetailIcon;
    },

    /**
    * return if scrollable table
    */
    isScrollable: function isScrollable() {
      if (this.scrollable) return true;
      if (!this.newColumns) return false;
      return this.newColumns.some(function (column) {
        return column.sticky;
      });
    },
    newColumns: function newColumns() {
      var _this3 = this;

      if (this.columns && this.columns.length) {
        return this.columns.map(function (column) {
          var TableColumnComponent = VueInstance.extend(script$2);
          var component = new TableColumnComponent({
            parent: _this3,
            propsData: column
          });
          component.$scopedSlots = {
            default: function _default(props) {
              var vnode = component.$createElement('span', {
                domProps: {
                  innerHTML: getValueByPath(props.row, column.field)
                }
              });
              return [vnode];
            }
          };
          return component;
        });
      }

      return this.defaultSlots.filter(function (vnode) {
        return vnode.componentInstance && vnode.componentInstance.$data && vnode.componentInstance.$data._isTableColumn;
      }).map(function (vnode) {
        return vnode.componentInstance;
      });
    }
  },
  watch: {
    /**
    * When data prop change:
    *   1. Update internal value.
    *   2. Filter data if it's not backend-filtered.
    *   3. Sort again if it's not backend-sorted.
    *   4. Set new total if it's not backend-paginated.
    */
    data: function data(value) {
      var _this4 = this;

      this.newData = value;

      if (!this.backendFiltering) {
        this.newData = value.filter(function (row) {
          return _this4.isRowFiltered(row);
        });
      }

      if (!this.backendSorting) {
        this.sort(this.currentSortColumn, true);
      }

      if (!this.backendPagination) {
        this.newDataTotal = this.newData.length;
      }
    },

    /**
    * When Pagination total change, update internal total
    * only if it's backend-paginated.
    */
    total: function total(newTotal) {
      if (!this.backendPagination) return;
      this.newDataTotal = newTotal;
    },
    currentPage: function currentPage(newVal) {
      this.newCurrentPage = newVal;
    },
    newCurrentPage: function newCurrentPage(newVal) {
      this.$emit('update:currentPage', newVal);
    },

    /**
    * When checkedRows prop change, update internal value without
    * mutating original data.
    */
    checkedRows: function checkedRows(rows) {
      this.newCheckedRows = _toConsumableArray(rows);
    },

    /*
    newColumns(value) {
        this.checkSort()
    },
    */
    debounceSearch: {
      handler: function handler(value) {
        this.debouncedHandleFiltersChange = debounce(this.handleFiltersChange, value);
      },
      immediate: true
    },
    filters: {
      handler: function handler(value) {
        if (this.debounceSearch) {
          this.debouncedHandleFiltersChange(value);
        } else {
          this.handleFiltersChange(value);
        }
      },
      deep: true
    },

    /**
    * When the user wants to control the detailed rows via props.
    * Or wants to open the details of certain row with the router for example.
    */
    openedDetailed: function openedDetailed(expandedRows) {
      this.visibleDetailRows = expandedRows;
    }
  },
  methods: {
    onFiltersEvent: function onFiltersEvent(event) {
      this.$emit("filters-event-".concat(this.filtersEvent), {
        event: event,
        filters: this.filters
      });
    },
    handleFiltersChange: function handleFiltersChange(value) {
      var _this5 = this;

      if (this.backendFiltering) {
        this.$emit('filters-change', value);
      } else {
        this.newData = this.data.filter(function (row) {
          return _this5.isRowFiltered(row);
        });

        if (!this.backendPagination) {
          this.newDataTotal = this.newData.length;
        }

        if (!this.backendSorting) {
          if (this.sortMultiple && this.sortMultipleDataLocal && this.sortMultipleDataLocal.length > 0) {
            this.doSortMultiColumn();
          } else if (Object.keys(this.currentSortColumn).length > 0) {
            this.doSortSingleColumn(this.currentSortColumn);
          }
        }
      }
    },
    findIndexOfSortData: function findIndexOfSortData(column) {
      var sortObj = this.sortMultipleDataComputed.filter(function (i) {
        return i.field === column.field;
      })[0];
      return this.sortMultipleDataComputed.indexOf(sortObj) + 1;
    },
    removeSortingPriority: function removeSortingPriority(column) {
      if (this.backendSorting) {
        this.$emit('sorting-priority-removed', column.field);
      } else {
        this.sortMultipleDataLocal = this.sortMultipleDataLocal.filter(function (priority) {
          return priority.field !== column.field;
        });
        var formattedSortingPriority = this.sortMultipleDataLocal.map(function (i) {
          return (i.order && i.order === 'desc' ? '-' : '') + i.field;
        });
        this.newData = multiColumnSort(this.newData, formattedSortingPriority);
      }
    },
    resetMultiSorting: function resetMultiSorting() {
      this.sortMultipleDataLocal = [];
      this.currentSortColumn = {};
      this.newData = this.data;
    },

    /**
    * Sort an array by key without mutating original data.
    * Call the user sort function if it was passed.
    */
    sortBy: function sortBy(array, key, fn, isAsc) {
      var sorted = []; // Sorting without mutating original data

      if (fn && typeof fn === 'function') {
        sorted = _toConsumableArray(array).sort(function (a, b) {
          return fn(a, b, isAsc);
        });
      } else {
        sorted = _toConsumableArray(array).sort(function (a, b) {
          // Get nested values from objects
          var newA = getValueByPath(a, key);
          var newB = getValueByPath(b, key); // sort boolean type

          if (typeof newA === 'boolean' && typeof newB === 'boolean') {
            return isAsc ? newA - newB : newB - newA;
          }

          if (!newA && newA !== 0) return 1;
          if (!newB && newB !== 0) return -1;
          if (newA === newB) return 0;
          newA = typeof newA === 'string' ? newA.toUpperCase() : newA;
          newB = typeof newB === 'string' ? newB.toUpperCase() : newB;
          return isAsc ? newA > newB ? 1 : -1 : newA > newB ? -1 : 1;
        });
      }

      return sorted;
    },
    sortMultiColumn: function sortMultiColumn(column) {
      this.currentSortColumn = {};

      if (!this.backendSorting) {
        var existingPriority = this.sortMultipleDataLocal.filter(function (i) {
          return i.field === column.field;
        })[0];

        if (existingPriority) {
          existingPriority.order = existingPriority.order === 'desc' ? 'asc' : 'desc';
        } else {
          this.sortMultipleDataLocal.push({
            field: column.field,
            order: column.isAsc
          });
        }

        this.doSortMultiColumn();
      }
    },
    doSortMultiColumn: function doSortMultiColumn() {
      var formattedSortingPriority = this.sortMultipleDataLocal.map(function (i) {
        return (i.order && i.order === 'desc' ? '-' : '') + i.field;
      });
      this.newData = multiColumnSort(this.newData, formattedSortingPriority);
    },

    /**
    * Sort the column.
    * Toggle current direction on column if it's sortable
    * and not just updating the prop.
    */
    sort: function sort(column) {
      var updatingData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if ( // if backend sorting is enabled, just emit the sort press like usual
      // if the correct key combination isnt pressed, sort like usual
      !this.backendSorting && this.sortMultiple && (this.sortMultipleKey && event[this.sortMultipleKey] || !this.sortMultipleKey)) {
        if (updatingData) {
          this.doSortMultiColumn();
        } else {
          this.sortMultiColumn(column);
        }
      } else {
        if (!column || !column.sortable) return; // sort multiple is enabled but the correct key combination isnt pressed so reset

        if (this.sortMultiple) {
          this.sortMultipleDataLocal = [];
        }

        if (!updatingData) {
          this.isAsc = column === this.currentSortColumn ? !this.isAsc : this.defaultSortDirection.toLowerCase() !== 'desc';
        }

        if (!this.firstTimeSort) {
          this.$emit('sort', column.field, this.isAsc ? 'asc' : 'desc', event);
        }

        if (!this.backendSorting) {
          this.doSortSingleColumn(column);
        }

        this.currentSortColumn = column;
      }
    },
    doSortSingleColumn: function doSortSingleColumn(column) {
      this.newData = this.sortBy(this.newData, column.field, column.customSort, this.isAsc);
    },
    isRowSelected: function isRowSelected(row, selected) {
      if (!selected) {
        return false;
      }

      if (this.customRowKey) {
        return row[this.customRowKey] === selected[this.customRowKey];
      }

      return row === selected;
    },

    /**
    * Check if the row is checked (is added to the array).
    */
    isRowChecked: function isRowChecked(row) {
      return indexOf(this.newCheckedRows, row, this.customIsChecked) >= 0;
    },

    /**
    * Remove a checked row from the array.
    */
    removeCheckedRow: function removeCheckedRow(row) {
      var index = indexOf(this.newCheckedRows, row, this.customIsChecked);

      if (index >= 0) {
        this.newCheckedRows.splice(index, 1);
      }
    },

    /**
    * Header checkbox click listener.
    * Add or remove all rows in current page.
    */
    checkAll: function checkAll() {
      var _this6 = this;

      var isAllChecked = this.isAllChecked;
      this.visibleData.forEach(function (currentRow) {
        if (_this6.isRowCheckable(currentRow)) {
          _this6.removeCheckedRow(currentRow);
        }

        if (!isAllChecked) {
          if (_this6.isRowCheckable(currentRow)) {
            _this6.newCheckedRows.push(currentRow);
          }
        }
      });
      this.$emit('check', this.newCheckedRows);
      this.$emit('check-all', this.newCheckedRows); // Emit checked rows to update user variable

      this.$emit('update:checkedRows', this.newCheckedRows);
    },

    /**
    * Row checkbox click listener.
    */
    checkRow: function checkRow(row, index, event) {
      if (!this.isRowCheckable(row)) return;
      var lastIndex = this.lastCheckedRowIndex;
      this.lastCheckedRowIndex = index;

      if (event.shiftKey && lastIndex !== null && index !== lastIndex) {
        this.shiftCheckRow(row, index, lastIndex);
      } else if (!this.isRowChecked(row)) {
        this.newCheckedRows.push(row);
      } else {
        this.removeCheckedRow(row);
      }

      this.$emit('check', this.newCheckedRows, row); // Emit checked rows to update user variable

      this.$emit('update:checkedRows', this.newCheckedRows);
    },

    /**
     * Check row when shift is pressed.
     */
    shiftCheckRow: function shiftCheckRow(row, index, lastCheckedRowIndex) {
      var _this7 = this;

      // Get the subset of the list between the two indicies
      var subset = this.visibleData.slice(Math.min(index, lastCheckedRowIndex), Math.max(index, lastCheckedRowIndex) + 1); // Determine the operation based on the state of the clicked checkbox

      var shouldCheck = !this.isRowChecked(row);
      subset.forEach(function (item) {
        _this7.removeCheckedRow(item);

        if (shouldCheck && _this7.isRowCheckable(item)) {
          _this7.newCheckedRows.push(item);
        }
      });
    },

    /**
    * Row click listener.
    * Emit all necessary events.
    */
    selectRow: function selectRow(row, index) {
      this.$emit('click', row);
      if (this.selected === row) return;
      if (!this.isRowSelectable(row)) return; // Emit new and old row

      this.$emit('select', row, this.selected); // Emit new row to update user variable

      this.$emit('update:selected', row);
    },

    /**
    * Toggle to show/hide details slot
    */
    toggleDetails: function toggleDetails(obj) {
      var found = this.isVisibleDetailRow(obj);

      if (found) {
        this.closeDetailRow(obj);
        this.$emit('details-close', obj);
      } else {
        this.openDetailRow(obj);
        this.$emit('details-open', obj);
      } // Syncs the detailed rows with the parent component


      this.$emit('update:openedDetailed', this.visibleDetailRows);
    },
    openDetailRow: function openDetailRow(obj) {
      var index = this.handleDetailKey(obj);
      this.visibleDetailRows.push(index);
    },
    closeDetailRow: function closeDetailRow(obj) {
      var index = this.handleDetailKey(obj);
      var i = this.visibleDetailRows.indexOf(index);
      this.visibleDetailRows.splice(i, 1);
    },
    isVisibleDetailRow: function isVisibleDetailRow(obj) {
      var index = this.handleDetailKey(obj);
      var result = this.visibleDetailRows.indexOf(index) >= 0;
      return result;
    },
    isActiveDetailRow: function isActiveDetailRow(row) {
      return this.detailed && !this.customDetailRow && this.isVisibleDetailRow(row);
    },
    isActiveCustomDetailRow: function isActiveCustomDetailRow(row) {
      return this.detailed && this.customDetailRow && this.isVisibleDetailRow(row);
    },
    isRowFiltered: function isRowFiltered(row) {
      var _this8 = this;

      var _loop = function _loop(key) {
        // remove key if empty
        if (!_this8.filters[key]) {
          delete _this8.filters[key];
          return {
            v: true
          };
        }

        var input = _this8.filters[key];

        var column = _this8.newColumns.filter(function (c) {
          return c.field === key;
        })[0];

        if (column && column.customSearch && typeof column.customSearch === 'function') {
          return {
            v: column.customSearch(row, input)
          };
        } else {
          var value = _this8.getValueByPath(row, key);

          if (value == null) return {
            v: false
          };

          if (Number.isInteger(value)) {
            if (value !== Number(input)) return {
              v: false
            };
          } else {
            var re = new RegExp(escapeRegExpChars(input), 'i');
            if (!re.test(value)) return {
              v: false
            };
          }
        }
      };

      for (var key in this.filters) {
        var _ret = _loop(key);

        if (_typeof(_ret) === "object") return _ret.v;
      }

      return true;
    },

    /**
    * When the detailKey is defined we use the object[detailKey] as index.
    * If not, use the object reference by default.
    */
    handleDetailKey: function handleDetailKey(index) {
      var key = this.detailKey;
      return !key.length || !index ? index : index[key];
    },
    checkPredefinedDetailedRows: function checkPredefinedDetailedRows() {
      var defaultExpandedRowsDefined = this.openedDetailed.length > 0;

      if (defaultExpandedRowsDefined && !this.detailKey.length) {
        throw new Error('If you set a predefined opened-detailed, you must provide a unique key using the prop "detail-key"');
      }
    },

    /**
    * Call initSort only first time (For example async data).
    */
    checkSort: function checkSort() {
      if (this.newColumns.length && this.firstTimeSort) {
        this.initSort();
        this.firstTimeSort = false;
      } else if (this.newColumns.length) {
        if (Object.keys(this.currentSortColumn).length > 0) {
          for (var i = 0; i < this.newColumns.length; i++) {
            if (this.newColumns[i].field === this.currentSortColumn.field) {
              this.currentSortColumn = this.newColumns[i];
              break;
            }
          }
        }
      }
    },

    /**
    * Check if footer slot has custom content.
    */
    hasCustomFooterSlot: function hasCustomFooterSlot() {
      if (getSlot(this.$slots, 'footer').length > 1) return true;
      var tag = getSlot(this.$slots, 'footer')[0].tag;
      if (tag !== 'th' && tag !== 'td') return false;
      return true;
    },

    /**
    * Check if bottom-left slot exists.
    */
    hasBottomLeftSlot: function hasBottomLeftSlot() {
      return typeof getSlot(this.$slots, 'bottom-left') !== 'undefined';
    },

    /**
    * Table arrow keys listener, change selection.
    */
    pressedArrow: function pressedArrow(pos) {
      if (!this.visibleData.length) return;
      var index = this.visibleData.indexOf(this.selected) + pos; // Prevent from going up from first and down from last

      index = index < 0 ? 0 : index > this.visibleData.length - 1 ? this.visibleData.length - 1 : index;
      var row = this.visibleData[index];

      if (!this.isRowSelectable(row)) {
        var newIndex = null;

        if (pos > 0) {
          for (var i = index; i < this.visibleData.length && newIndex === null; i++) {
            if (this.isRowSelectable(this.visibleData[i])) newIndex = i;
          }
        } else {
          for (var _i = index; _i >= 0 && newIndex === null; _i--) {
            if (this.isRowSelectable(this.visibleData[_i])) newIndex = _i;
          }
        }

        if (newIndex >= 0) {
          this.selectRow(this.visibleData[newIndex]);
        }
      } else {
        this.selectRow(row);
      }
    },

    /**
    * Focus table element if has selected prop.
    */
    focus: function focus() {
      if (!this.focusable) return;
      this.$el.querySelector('table').focus();
    },

    /**
    * Initial sorted column based on the default-sort prop.
    */
    initSort: function initSort() {
      var _this9 = this;

      if (this.sortMultiple && this.sortMultipleData) {
        this.sortMultipleData.forEach(function (column) {
          _this9.sortMultiColumn(column);
        });
      } else {
        if (!this.defaultSort) return;
        var sortField = '';
        var sortDirection = this.defaultSortDirection;

        if (Array.isArray(this.defaultSort)) {
          sortField = this.defaultSort[0];

          if (this.defaultSort[1]) {
            sortDirection = this.defaultSort[1];
          }
        } else {
          sortField = this.defaultSort;
        }

        var sortColumn = this.newColumns.filter(function (column) {
          return column.field === sortField;
        })[0];

        if (sortColumn) {
          this.isAsc = sortDirection.toLowerCase() !== 'desc';
          this.sort(sortColumn, true);
        }
      }
    },

    /**
    * Emits drag start event
    */
    handleDragStart: function handleDragStart(event, row, index) {
      if (!this.draggable) return;
      this.$emit('dragstart', {
        event: event,
        row: row,
        index: index
      });
    },

    /**
    * Emits drag leave event
    */
    handleDragEnd: function handleDragEnd(event, row, index) {
      if (!this.draggable) return;
      this.$emit('dragend', {
        event: event,
        row: row,
        index: index
      });
    },

    /**
    * Emits drop event
    */
    handleDrop: function handleDrop(event, row, index) {
      if (!this.draggable) return;
      this.$emit('drop', {
        event: event,
        row: row,
        index: index
      });
    },

    /**
    * Emits drag over event
    */
    handleDragOver: function handleDragOver(event, row, index) {
      if (!this.draggable) return;
      this.$emit('dragover', {
        event: event,
        row: row,
        index: index
      });
    },

    /**
    * Emits drag leave event
    */
    handleDragLeave: function handleDragLeave(event, row, index) {
      if (!this.draggable) return;
      this.$emit('dragleave', {
        event: event,
        row: row,
        index: index
      });
    },
    emitEventForRow: function emitEventForRow(eventName, event, row) {
      return this.$listeners[eventName] ? this.$emit(eventName, row, event) : null;
    },
    refreshSlots: function refreshSlots() {
      this.defaultSlots = getSlot(this.$slots, 'default') || [];
    },
    getScopedSlots: function getScopedSlots(vm) {
      return vm.$scopedSlots || vm.$slots;
    }
  },
  mounted: function mounted() {
    this.refreshSlots();
    this.checkPredefinedDetailedRows();
    this.checkSort();
  }
};

const _hoisted_1 = { class: "b-table" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = {
  key: 0,
  width: "40px"
};
const _hoisted_4 = {
  key: 1,
  class: "is-relative"
};
const _hoisted_5 = {
  key: 0,
  class: "is-subheading"
};
const _hoisted_6 = {
  key: 0,
  width: "40px"
};
const _hoisted_7 = { key: 1 };
const _hoisted_8 = { key: 2 };
const _hoisted_9 = { key: 1 };
const _hoisted_10 = {
  key: 0,
  width: "40px"
};
const _hoisted_11 = { key: 1 };
const _hoisted_12 = { class: "th-wrap" };
const _hoisted_13 = { key: 2 };
const _hoisted_14 = {
  key: 0,
  class: "chevron-cell"
};
const _hoisted_15 = { class: "detail-container" };
const _hoisted_16 = {
  key: 0,
  class: "is-empty"
};
const _hoisted_17 = { key: 1 };
const _hoisted_18 = { class: "table-footer" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_table_mobile_sort = resolveComponent("b-table-mobile-sort");
  const _component_b_table_pagination = resolveComponent("b-table-pagination");
  const _component_b_checkbox = resolveComponent("b-checkbox");
  const _component_b_slot_component = resolveComponent("b-slot-component");
  const _component_b_icon = resolveComponent("b-icon");
  const _component_b_input = resolveComponent("b-input");
  const _component_b_loading = resolveComponent("b-loading");

  return (openBlock(), createBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default"),
    ($props.mobileCards && $options.hasSortablenewColumns)
      ? (openBlock(), createBlock(_component_b_table_mobile_sort, {
          key: 0,
          "current-sort-column": $data.currentSortColumn,
          "sort-multiple": $props.sortMultiple,
          "sort-multiple-data": $options.sortMultipleDataComputed,
          "is-asc": $data.isAsc,
          columns: $options.newColumns,
          placeholder: $props.mobileSortPlaceholder,
          "icon-pack": $props.iconPack,
          "sort-icon": $props.sortIcon,
          "sort-icon-size": $props.sortIconSize,
          onSort: _cache[1] || (_cache[1] = (column, event) => $options.sort(column, null, event)),
          onRemovePriority: _cache[2] || (_cache[2] = (column) => $options.removeSortingPriority(column))
        }, null, 8 /* PROPS */, ["current-sort-column", "sort-multiple", "sort-multiple-data", "is-asc", "columns", "placeholder", "icon-pack", "sort-icon", "sort-icon-size"]))
      : createCommentVNode("v-if", true),
    ($props.paginated && ($props.paginationPosition === 'top' || $props.paginationPosition === 'both'))
      ? renderSlot(_ctx.$slots, "pagination", { key: 1 }, () => [
          createVNode(_component_b_table_pagination, mergeProps(_ctx.$attrs, {
            "per-page": $props.perPage,
            paginated: $props.paginated,
            rounded: $props.paginationRounded,
            "icon-pack": $props.iconPack,
            total: $data.newDataTotal,
            "current-page": $data.newCurrentPage,
            "onUpdate:title": _cache[3] || (_cache[3] = $event => ($data.newCurrentPage = $event)),
            "aria-next-label": $props.ariaNextLabel,
            "aria-previous-label": $props.ariaPreviousLabel,
            "aria-page-label": $props.ariaPageLabel,
            "aria-current-label": $props.ariaCurrentLabel,
            onPageChange: _cache[4] || (_cache[4] = (event) => _ctx.$emit('page-change', event))
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "top-left")
            ]),
            _: 3 /* FORWARDED */
          }, 16 /* FULL_PROPS */, ["per-page", "paginated", "rounded", "icon-pack", "total", "current-page", "aria-next-label", "aria-previous-label", "aria-page-label", "aria-current-label"])
        ])
      : createCommentVNode("v-if", true),
    createVNode("div", {
      class: ["table-wrapper", $options.tableWrapperClasses],
      style: $options.tableStyle
    }, [
      createVNode("table", {
        class: ["table", $options.tableClasses],
        tabindex: !$props.focusable ? false : 0,
        onKeydown: [
          _cache[5] || (_cache[5] = withKeys(withModifiers($event => ($options.pressedArrow(-1)), ["self","prevent"]), ["up"])),
          _cache[6] || (_cache[6] = withKeys(withModifiers($event => ($options.pressedArrow(1)), ["self","prevent"]), ["down"]))
        ]
      }, [
        ($options.newColumns.length && $props.showHeader)
          ? (openBlock(), createBlock("thead", _hoisted_2, [
              createVNode("tr", null, [
                ($options.showDetailRowIcon)
                  ? (openBlock(), createBlock("th", _hoisted_3))
                  : createCommentVNode("v-if", true),
                ($props.checkable && $props.checkboxPosition === 'left')
                  ? (openBlock(), createBlock("th", {
                      key: 1,
                      class: ['checkbox-cell', { 'is-sticky': $props.stickyCheckbox } ]
                    }, [
                      ($props.headerCheckable)
                        ? (openBlock(), createBlock(_component_b_checkbox, {
                            key: 0,
                            value: $options.isAllChecked,
                            disabled: $options.isAllUncheckable,
                            onChange: $options.checkAll
                          }, null, 8 /* PROPS */, ["value", "disabled", "onChange"]))
                        : createCommentVNode("v-if", true)
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true),
                (openBlock(true), createBlock(Fragment, null, renderList($options.visibleColumns, (column, index) => {
                  return (openBlock(), createBlock("th", {
                    key: column.newKey + ':' + index + 'header',
                    class: [column.headerClass, {
                                'is-current-sort': !$props.sortMultiple && $data.currentSortColumn === column,
                                'is-sortable': column.sortable,
                                'is-sticky': column.sticky,
                                'is-unselectable': column.isHeaderUnSelectable
                            }],
                    style: column.style,
                    onClick: withModifiers($event => ($options.sort(column, null, $event)), ["stop"])
                  }, [
                    createVNode("div", {
                      class: ["th-wrap", {
                                    'is-numeric': column.numeric,
                                    'is-centered': column.centered
                            }]
                    }, [
                      ($options.getScopedSlots(column).header)
                        ? (openBlock(), createBlock(_component_b_slot_component, {
                            key: 0,
                            component: column,
                            scoped: "",
                            name: "header",
                            tag: "span",
                            props: { column, index }
                          }, null, 8 /* PROPS */, ["component", "props"]))
                        : (openBlock(), createBlock("span", _hoisted_4, [
                            createTextVNode(toDisplayString(column.label) + " ", 1 /* TEXT */),
                            ($props.sortMultiple &&
                                                $options.sortMultipleDataComputed &&
                                                $options.sortMultipleDataComputed.length > 0 &&
                                                $options.sortMultipleDataComputed.filter(i =>
                                            i.field === column.field).length > 0)
                              ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createVNode(_component_b_icon, {
                                    icon: $props.sortIcon,
                                    pack: $props.iconPack,
                                    both: "",
                                    size: $props.sortIconSize,
                                    class: {
                                                    'is-desc': $options.sortMultipleDataComputed.filter(i =>
                                                i.field === column.field)[0].order === 'desc'}
                                  }, null, 8 /* PROPS */, ["icon", "pack", "size", "class"]),
                                  createTextVNode(" " + toDisplayString($options.findIndexOfSortData(column)) + " ", 1 /* TEXT */),
                                  createVNode("button", {
                                    class: "delete is-small multi-sort-cancel-icon",
                                    type: "button",
                                    onClick: withModifiers($event => ($options.removeSortingPriority(column)), ["stop"])
                                  }, null, 8 /* PROPS */, ["onClick"])
                                ], 64 /* STABLE_FRAGMENT */))
                              : (openBlock(), createBlock(_component_b_icon, {
                                  key: 1,
                                  icon: $props.sortIcon,
                                  pack: $props.iconPack,
                                  both: "",
                                  size: $props.sortIconSize,
                                  class: ["sort-icon", {
                                                'is-desc': !$data.isAsc,
                                                'is-invisible': $data.currentSortColumn !== column
                                            }]
                                }, null, 8 /* PROPS */, ["icon", "pack", "size", "class"]))
                          ]))
                    ], 2 /* CLASS */)
                  ], 14 /* CLASS, STYLE, PROPS */, ["onClick"]))
                }), 128 /* KEYED_FRAGMENT */)),
                ($props.checkable && $props.checkboxPosition === 'right')
                  ? (openBlock(), createBlock("th", {
                      key: 2,
                      class: ['checkbox-cell', { 'is-sticky': $props.stickyCheckbox } ]
                    }, [
                      ($props.headerCheckable)
                        ? (openBlock(), createBlock(_component_b_checkbox, {
                            key: 0,
                            value: $options.isAllChecked,
                            disabled: $options.isAllUncheckable,
                            onChange: $options.checkAll
                          }, null, 8 /* PROPS */, ["value", "disabled", "onChange"]))
                        : createCommentVNode("v-if", true)
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true)
              ]),
              ($options.hasCustomSubheadings)
                ? (openBlock(), createBlock("tr", _hoisted_5, [
                    ($options.showDetailRowIcon)
                      ? (openBlock(), createBlock("th", _hoisted_6))
                      : createCommentVNode("v-if", true),
                    ($props.checkable && $props.checkboxPosition === 'left')
                      ? (openBlock(), createBlock("th", _hoisted_7))
                      : createCommentVNode("v-if", true),
                    (openBlock(true), createBlock(Fragment, null, renderList($options.visibleColumns, (column, index) => {
                      return (openBlock(), createBlock("th", {
                        key: column.newKey + ':' + index + 'subheading',
                        style: column.style
                      }, [
                        createVNode("div", {
                          class: ["th-wrap", {
                                    'is-numeric': column.numeric,
                                    'is-centered': column.centered
                            }]
                        }, [
                          ($options.getScopedSlots(column).subheading)
                            ? (openBlock(), createBlock(_component_b_slot_component, {
                                key: 0,
                                component: column,
                                scoped: "",
                                name: "subheading",
                                tag: "span",
                                props: { column, index }
                              }, null, 8 /* PROPS */, ["component", "props"]))
                            : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createTextVNode(toDisplayString(column.subheading), 1 /* TEXT */)
                              ], 64 /* STABLE_FRAGMENT */))
                        ], 2 /* CLASS */)
                      ], 4 /* STYLE */))
                    }), 128 /* KEYED_FRAGMENT */)),
                    ($props.checkable && $props.checkboxPosition === 'right')
                      ? (openBlock(), createBlock("th", _hoisted_8))
                      : createCommentVNode("v-if", true)
                  ]))
                : createCommentVNode("v-if", true),
              ($options.hasSearchablenewColumns)
                ? (openBlock(), createBlock("tr", _hoisted_9, [
                    ($options.showDetailRowIcon)
                      ? (openBlock(), createBlock("th", _hoisted_10))
                      : createCommentVNode("v-if", true),
                    ($props.checkable && $props.checkboxPosition === 'left')
                      ? (openBlock(), createBlock("th", _hoisted_11))
                      : createCommentVNode("v-if", true),
                    (openBlock(true), createBlock(Fragment, null, renderList($options.visibleColumns, (column, index) => {
                      return (openBlock(), createBlock("th", {
                        key: column.newKey + ':' + index + 'searchable',
                        style: column.style,
                        class: {'is-sticky': column.sticky}
                      }, [
                        createVNode("div", _hoisted_12, [
                          (column.searchable)
                            ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                ($options.getScopedSlots(column).searchable)
                                  ? (openBlock(), createBlock(_component_b_slot_component, {
                                      key: 0,
                                      component: column,
                                      scoped: true,
                                      name: "searchable",
                                      tag: "span",
                                      props: { column, filters: $data.filters }
                                    }, null, 8 /* PROPS */, ["component", "props"]))
                                  : (openBlock(), createBlock(_component_b_input, {
                                      key: 1,
                                      [toHandlerKey($props.filtersEvent)]: withKeys($options.onFiltersEvent, ["native"]),
                                      modelValue: $data.filters[column.field],
                                      "onUpdate:modelValue": $event => ($data.filters[column.field] = $event),
                                      type: column.numeric ? 'number' : 'text'
                                    }, null, 16 /* FULL_PROPS */, ["modelValue", "onUpdate:modelValue", "type"]))
                              ], 64 /* STABLE_FRAGMENT */))
                            : createCommentVNode("v-if", true)
                        ])
                      ], 6 /* CLASS, STYLE */))
                    }), 128 /* KEYED_FRAGMENT */)),
                    ($props.checkable && $props.checkboxPosition === 'right')
                      ? (openBlock(), createBlock("th", _hoisted_13))
                      : createCommentVNode("v-if", true)
                  ]))
                : createCommentVNode("v-if", true)
            ]))
          : createCommentVNode("v-if", true),
        createVNode("tbody", null, [
          (openBlock(true), createBlock(Fragment, null, renderList($options.visibleData, (row, index) => {
            return (openBlock(), createBlock(Fragment, {
              key: $props.customRowKey ? row[$props.customRowKey] : index
            }, [
              createVNode("tr", {
                class: [$props.rowClass(row, index), {
                                'is-selected': $options.isRowSelected(row, $props.selected),
                                'is-checked': $options.isRowChecked(row),
                            }],
                onClick: $event => ($options.selectRow(row)),
                onDblclick: $event => (_ctx.$emit('dblclick', row)),
                onMouseenter: $event => ($options.emitEventForRow('mouseenter', $event, row)),
                onMouseleave: $event => ($options.emitEventForRow('mouseleave', $event, row)),
                onContextmenu: $event => (_ctx.$emit('contextmenu', row, $event)),
                draggable: $props.draggable,
                onDragstart: $event => ($options.handleDragStart($event, row, index)),
                onDragend: $event => ($options.handleDragEnd($event, row, index)),
                onDrop: $event => ($options.handleDrop($event, row, index)),
                onDragover: $event => ($options.handleDragOver($event, row, index)),
                onDragleave: $event => ($options.handleDragLeave($event, row, index))
              }, [
                ($options.showDetailRowIcon)
                  ? (openBlock(), createBlock("td", _hoisted_14, [
                      ($props.hasDetailedVisible(row))
                        ? (openBlock(), createBlock("a", {
                            key: 0,
                            role: "button",
                            onClick: withModifiers($event => ($options.toggleDetails(row)), ["stop"])
                          }, [
                            createVNode(_component_b_icon, {
                              icon: "chevron-right",
                              pack: $props.iconPack,
                              both: "",
                              class: {'is-expanded': $options.isVisibleDetailRow(row)}
                            }, null, 8 /* PROPS */, ["pack", "class"])
                          ], 8 /* PROPS */, ["onClick"]))
                        : createCommentVNode("v-if", true)
                    ]))
                  : createCommentVNode("v-if", true),
                ($props.checkable && $props.checkboxPosition === 'left')
                  ? (openBlock(), createBlock("td", {
                      key: 1,
                      class: ['checkbox-cell', { 'is-sticky': $props.stickyCheckbox } ]
                    }, [
                      createVNode(_component_b_checkbox, {
                        disabled: !$props.isRowCheckable(row),
                        value: $options.isRowChecked(row),
                        onClick: withModifiers($event => ($options.checkRow(row, index, $event)), ["prevent","stop"])
                      }, null, 8 /* PROPS */, ["disabled", "value", "onClick"])
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true),
                (openBlock(true), createBlock(Fragment, null, renderList($options.visibleColumns, (column, colindex) => {
                  return (openBlock(), createBlock(Fragment, null, [
                    ($options.getScopedSlots(column).default)
                      ? (openBlock(), createBlock(_component_b_slot_component, {
                          key: column.newKey + ':' + index + ':' + colindex,
                          component: column,
                          scoped: "",
                          name: "default",
                          tag: "td",
                          class: column.rootClasses,
                          "data-label": column.label,
                          props: { row, column, index, colindex, toggleDetails: $options.toggleDetails },
                          onClick: $event => (_ctx.$emit('cellclick',row,column,index,colindex))
                        }, null, 8 /* PROPS */, ["component", "class", "data-label", "props", "onClick"]))
                      : createCommentVNode("v-if", true)
                  ], 64 /* STABLE_FRAGMENT */))
                }), 256 /* UNKEYED_FRAGMENT */)),
                ($props.checkable && $props.checkboxPosition === 'right')
                  ? (openBlock(), createBlock("td", {
                      key: 2,
                      class: ['checkbox-cell', { 'is-sticky': $props.stickyCheckbox } ]
                    }, [
                      createVNode(_component_b_checkbox, {
                        disabled: !$props.isRowCheckable(row),
                        value: $options.isRowChecked(row),
                        onClick: withModifiers($event => ($options.checkRow(row, index, $event)), ["prevent","stop"])
                      }, null, 8 /* PROPS */, ["disabled", "value", "onClick"])
                    ], 2 /* CLASS */))
                  : createCommentVNode("v-if", true)
              ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["onClick", "onDblclick", "onMouseenter", "onMouseleave", "onContextmenu", "draggable", "onDragstart", "onDragend", "onDrop", "onDragover", "onDragleave"]),
              createVNode(Transition, { name: $props.detailTransition }, {
                default: withCtx(() => [
                  ($options.isActiveDetailRow(row))
                    ? (openBlock(), createBlock("tr", {
                        key: ($props.customRowKey ? row[$props.customRowKey] : index),
                        class: "detail"
                      }, [
                        createVNode("td", { colspan: $options.columnCount }, [
                          createVNode("div", _hoisted_15, [
                            renderSlot(_ctx.$slots, "detail", {
                              row: row,
                              index: index
                            })
                          ])
                        ], 8 /* PROPS */, ["colspan"])
                      ]))
                    : createCommentVNode("v-if", true)
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["name"]),
              ($options.isActiveCustomDetailRow(row))
                ? renderSlot(_ctx.$slots, "detail", {
                    key: 0,
                    row: row,
                    index: index
                  })
                : createCommentVNode("v-if", true)
            ], 64 /* STABLE_FRAGMENT */))
          }), 128 /* KEYED_FRAGMENT */)),
          (!$options.visibleData.length)
            ? (openBlock(), createBlock("tr", _hoisted_16, [
                createVNode("td", { colspan: $options.columnCount }, [
                  renderSlot(_ctx.$slots, "empty")
                ], 8 /* PROPS */, ["colspan"])
              ]))
            : createCommentVNode("v-if", true)
        ]),
        (_ctx.$slots.footer !== undefined)
          ? (openBlock(), createBlock("tfoot", _hoisted_17, [
              createVNode("tr", _hoisted_18, [
                ($options.hasCustomFooterSlot())
                  ? renderSlot(_ctx.$slots, "footer", { key: 0 })
                  : (openBlock(), createBlock("th", {
                      key: 1,
                      colspan: $options.columnCount
                    }, [
                      renderSlot(_ctx.$slots, "footer")
                    ], 8 /* PROPS */, ["colspan"]))
              ])
            ]))
          : createCommentVNode("v-if", true)
      ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["tabindex"]),
      ($props.loading)
        ? renderSlot(_ctx.$slots, "loading", { key: 0 }, () => [
            createVNode(_component_b_loading, {
              "is-full-page": false,
              active: $props.loading
            }, null, 8 /* PROPS */, ["active"])
          ])
        : createCommentVNode("v-if", true)
    ], 6 /* CLASS, STYLE */),
    (($props.checkable && $options.hasBottomLeftSlot()) ||
            ($props.paginated && ($props.paginationPosition === 'bottom' || $props.paginationPosition === 'both')))
      ? renderSlot(_ctx.$slots, "pagination", { key: 2 }, () => [
          createVNode(_component_b_table_pagination, mergeProps(_ctx.$attrs, {
            "per-page": $props.perPage,
            paginated: $props.paginated,
            rounded: $props.paginationRounded,
            "icon-pack": $props.iconPack,
            total: $data.newDataTotal,
            "current-page": $data.newCurrentPage,
            "aria-next-label": $props.ariaNextLabel,
            "aria-previous-label": $props.ariaPreviousLabel,
            "aria-page-label": $props.ariaPageLabel,
            "aria-current-label": $props.ariaCurrentLabel,
            onPageChange: _cache[7] || (_cache[7] = (event) => _ctx.$emit('page-change', event))
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "bottom-left")
            ]),
            _: 3 /* FORWARDED */
          }, 16 /* FULL_PROPS */, ["per-page", "paginated", "rounded", "icon-pack", "total", "current-page", "aria-next-label", "aria-previous-label", "aria-page-label", "aria-current-label"])
        ])
      : createCommentVNode("v-if", true)
  ]))
}

script.render = render;
script.__file = "src/components/table/Table.vue";

var Plugin = {
  install: function install(Vue) {
    // individual import + extend method into Table.vue
    if (typeof VueInstance === 'undefined') {
      setVueInstance(Vue);
    }

    registerComponent(Vue, script);
    registerComponent(Vue, script$2);
  }
};
use(Plugin);

export default Plugin;
export { script as BTable, script$2 as BTableColumn };
