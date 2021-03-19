'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a6b1b170.js');
var FormElementMixin = require('./FormElementMixin-d260225f.js');
var helpers = require('./helpers.js');
var config = require('./config-1bc87110.js');
var DropdownItem = require('./DropdownItem-b1e82b61.js');
var Input = require('./Input-045e0369.js');
var Field = require('./Field-3b6d1df1.js');
var Select = require('./Select-00390185.js');
var Icon = require('./Icon-59750035.js');
var vue = require('vue');

var script$3 = {
  name: 'BDatepickerTableRow',
  inject: {
    $datepicker: {
      name: '$datepicker',
      default: false
    }
  },
  props: {
    selectedDate: {
      type: [Date, Array]
    },
    hoveredDateRange: Array,
    day: {
      type: Number
    },
    week: {
      type: Array,
      required: true
    },
    month: {
      type: Number,
      required: true
    },
    minDate: Date,
    maxDate: Date,
    disabled: Boolean,
    unselectableDates: Array,
    unselectableDaysOfWeek: Array,
    selectableDates: Array,
    events: Array,
    indicators: String,
    dateCreator: Function,
    nearbyMonthDays: Boolean,
    nearbySelectableMonthDays: Boolean,
    showWeekNumber: Boolean,
    weekNumberClickable: Boolean,
    range: Boolean,
    multiple: Boolean,
    rulesForFirstWeek: Number,
    firstDayOfWeek: Number
  },
  watch: {
    day: function day(_day) {
      var _this = this;

      var refName = "day-".concat(this.month, "-").concat(_day);
      this.$nextTick(function () {
        if (_this.$refs[refName] && _this.$refs[refName].length > 0) {
          if (_this.$refs[refName][0]) {
            _this.$refs[refName][0].focus();
          }
        }
      }); // $nextTick needed when month is changed
    }
  },
  methods: {
    firstWeekOffset: function firstWeekOffset(year, dow, doy) {
      // first-week day -- which january is always in the first week (4 for iso, 1 for other)
      var fwd = 7 + dow - doy; // first-week day local weekday -- which local weekday is fwd

      var firstJanuary = new Date(year, 0, fwd);
      var fwdlw = (7 + firstJanuary.getDay() - dow) % 7;
      return -fwdlw + fwd - 1;
    },
    daysInYear: function daysInYear(year) {
      return this.isLeapYear(year) ? 366 : 365;
    },
    isLeapYear: function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
    getSetDayOfYear: function getSetDayOfYear(input) {
      return Math.round((input - new Date(input.getFullYear(), 0, 1)) / 864e5) + 1;
    },
    weeksInYear: function weeksInYear(year, dow, doy) {
      var weekOffset = this.firstWeekOffset(year, dow, doy);
      var weekOffsetNext = this.firstWeekOffset(year + 1, dow, doy);
      return (this.daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    },
    getWeekNumber: function getWeekNumber(mom) {
      var dow = this.firstDayOfWeek; // first day of week
      // Rules for the first week : 1 for the 1st January, 4 for the 4th January

      var doy = this.rulesForFirstWeek;
      var weekOffset = this.firstWeekOffset(mom.getFullYear(), dow, doy);
      var week = Math.floor((this.getSetDayOfYear(mom) - weekOffset - 1) / 7) + 1;
      var resWeek;
      var resYear;

      if (week < 1) {
        resYear = mom.getFullYear() - 1;
        resWeek = week + this.weeksInYear(resYear, dow, doy);
      } else if (week > this.weeksInYear(mom.getFullYear(), dow, doy)) {
        resWeek = week - this.weeksInYear(mom.getFullYear(), dow, doy);
        resYear = mom.getFullYear() + 1;
      } else {
        resYear = mom.getFullYear();
        resWeek = week;
      }

      return resWeek;
    },
    clickWeekNumber: function clickWeekNumber(week) {
      if (this.weekNumberClickable) {
        this.$datepicker.$emit('week-number-click', week);
      }
    },

    /*
     * Check that selected day is within earliest/latest params and
     * is within this month
     */
    selectableDate: function selectableDate(day) {
      var validity = [];

      if (this.minDate) {
        validity.push(day >= this.minDate);
      }

      if (this.maxDate) {
        validity.push(day <= this.maxDate);
      }

      if (this.nearbyMonthDays && !this.nearbySelectableMonthDays) {
        validity.push(day.getMonth() === this.month);
      }

      if (this.selectableDates) {
        for (var i = 0; i < this.selectableDates.length; i++) {
          var enabledDate = this.selectableDates[i];

          if (day.getDate() === enabledDate.getDate() && day.getFullYear() === enabledDate.getFullYear() && day.getMonth() === enabledDate.getMonth()) {
            return true;
          } else {
            validity.push(false);
          }
        }
      }

      if (this.unselectableDates) {
        for (var _i = 0; _i < this.unselectableDates.length; _i++) {
          var disabledDate = this.unselectableDates[_i];
          validity.push(day.getDate() !== disabledDate.getDate() || day.getFullYear() !== disabledDate.getFullYear() || day.getMonth() !== disabledDate.getMonth());
        }
      }

      if (this.unselectableDaysOfWeek) {
        for (var _i2 = 0; _i2 < this.unselectableDaysOfWeek.length; _i2++) {
          var dayOfWeek = this.unselectableDaysOfWeek[_i2];
          validity.push(day.getDay() !== dayOfWeek);
        }
      }

      return validity.indexOf(false) < 0;
    },

    /*
    * Emit select event with chosen date as payload
    */
    emitChosenDate: function emitChosenDate(day) {
      if (this.disabled) return;

      if (this.selectableDate(day)) {
        this.$emit('select', day);
      }
    },
    eventsDateMatch: function eventsDateMatch(day) {
      if (!this.events || !this.events.length) return false;
      var dayEvents = [];

      for (var i = 0; i < this.events.length; i++) {
        if (this.events[i].date.getDay() === day.getDay()) {
          dayEvents.push(this.events[i]);
        }
      }

      if (!dayEvents.length) {
        return false;
      }

      return dayEvents;
    },

    /*
    * Build classObject for cell using validations
    */
    classObject: function classObject(day) {
      function dateMatch(dateOne, dateTwo, multiple) {
        // if either date is null or undefined, return false
        // if using multiple flag, return false
        if (!dateOne || !dateTwo || multiple) {
          return false;
        }

        if (Array.isArray(dateTwo)) {
          return dateTwo.some(function (date) {
            return dateOne.getDate() === date.getDate() && dateOne.getFullYear() === date.getFullYear() && dateOne.getMonth() === date.getMonth();
          });
        }

        return dateOne.getDate() === dateTwo.getDate() && dateOne.getFullYear() === dateTwo.getFullYear() && dateOne.getMonth() === dateTwo.getMonth();
      }

      function dateWithin(dateOne, dates, multiple) {
        if (!Array.isArray(dates) || multiple) {
          return false;
        }

        return dateOne > dates[0] && dateOne < dates[1];
      }

      return _rollupPluginBabelHelpers._defineProperty({
        'is-selected': dateMatch(day, this.selectedDate) || dateWithin(day, this.selectedDate, this.multiple),
        'is-first-selected': dateMatch(day, Array.isArray(this.selectedDate) && this.selectedDate[0], this.multiple),
        'is-within-selected': dateWithin(day, this.selectedDate, this.multiple),
        'is-last-selected': dateMatch(day, Array.isArray(this.selectedDate) && this.selectedDate[1], this.multiple),
        'is-within-hovered-range': this.hoveredDateRange && this.hoveredDateRange.length === 2 && (dateMatch(day, this.hoveredDateRange) || dateWithin(day, this.hoveredDateRange)),
        'is-first-hovered': dateMatch(day, Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[0]),
        'is-within-hovered': dateWithin(day, this.hoveredDateRange),
        'is-last-hovered': dateMatch(day, Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[1]),
        'is-today': dateMatch(day, this.dateCreator()),
        'is-selectable': this.selectableDate(day) && !this.disabled,
        'is-unselectable': !this.selectableDate(day) || this.disabled,
        'is-invisible': !this.nearbyMonthDays && day.getMonth() !== this.month,
        'is-nearby': this.nearbySelectableMonthDays && day.getMonth() !== this.month,
        'has-event': this.eventsDateMatch(day)
      }, this.indicators, this.eventsDateMatch(day));
    },
    setRangeHoverEndDate: function setRangeHoverEndDate(day) {
      if (this.range) {
        this.$emit('rangeHoverEndDate', day);
      }
    },
    manageKeydown: function manageKeydown(event, weekDay) {
      // https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent/key/Key_Values#Navigation_keys
      var key = event.key;
      var preventDefault = true;

      switch (key) {
        case 'Tab':
          {
            preventDefault = false;
            break;
          }

        case ' ':
        case 'Space':
        case 'Spacebar':
        case 'Enter':
          {
            this.emitChosenDate(weekDay);
            break;
          }

        case 'ArrowLeft':
        case 'Left':
          {
            this.changeFocus(weekDay, -1);
            break;
          }

        case 'ArrowRight':
        case 'Right':
          {
            this.changeFocus(weekDay, 1);
            break;
          }

        case 'ArrowUp':
        case 'Up':
          {
            this.changeFocus(weekDay, -7);
            break;
          }

        case 'ArrowDown':
        case 'Down':
          {
            this.changeFocus(weekDay, 7);
            break;
          }
      }

      if (preventDefault) {
        event.preventDefault();
      }
    },
    changeFocus: function changeFocus(day, inc) {
      var nextDay = new Date(day.getTime());
      nextDay.setDate(day.getDate() + inc);

      while ((!this.minDate || nextDay > this.minDate) && (!this.maxDate || nextDay < this.maxDate) && !this.selectableDate(nextDay)) {
        nextDay.setDate(day.getDate() + Math.sign(inc));
      }

      this.setRangeHoverEndDate(nextDay);
      this.$emit('change-focus', nextDay);
    }
  }
};

const _hoisted_1$3 = { class: "datepicker-row" };
const _hoisted_2$3 = {
  key: 0,
  class: "events"
};
const _hoisted_3$2 = {
  key: 0,
  class: "events"
};

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", _hoisted_1$3, [
    ($props.showWeekNumber)
      ? (vue.openBlock(), vue.createBlock("a", {
          key: 0,
          class: ["datepicker-cell is-week-number", {'is-clickable': $props.weekNumberClickable }],
          onClick: _cache[1] || (_cache[1] = vue.withModifiers($event => ($options.clickWeekNumber($options.getWeekNumber($props.week[6]))), ["prevent"]))
        }, [
          vue.createVNode("span", null, vue.toDisplayString($options.getWeekNumber($props.week[6])), 1 /* TEXT */)
        ], 2 /* CLASS */))
      : vue.createCommentVNode("v-if", true),
    (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.week, (weekDay, index) => {
      return (vue.openBlock(), vue.createBlock(vue.Fragment, null, [
        ($options.selectableDate(weekDay) && !$props.disabled)
          ? (vue.openBlock(), vue.createBlock("a", {
              ref: `day-${weekDay.getMonth()}-${weekDay.getDate()}`,
              key: index + 'selectable',
              class: [$options.classObject(weekDay), "datepicker-cell"],
              role: "button",
              href: "#",
              disabled: $props.disabled ? '' : null,
              onClick: vue.withModifiers($event => ($options.emitChosenDate(weekDay)), ["prevent"]),
              onMouseenter: $event => ($options.setRangeHoverEndDate(weekDay)),
              onKeydown: $event => ($options.manageKeydown($event, weekDay)),
              tabindex: $props.day === weekDay.getDate() ? null : -1
            }, [
              vue.createVNode("span", null, vue.toDisplayString(weekDay.getDate()), 1 /* TEXT */),
              ($options.eventsDateMatch(weekDay))
                ? (vue.openBlock(), vue.createBlock("div", _hoisted_2$3, [
                    (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.eventsDateMatch(weekDay), (event, index) => {
                      return (vue.openBlock(), vue.createBlock("div", {
                        class: ["event", event.type],
                        key: index
                      }, null, 2 /* CLASS */))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]))
                : vue.createCommentVNode("v-if", true)
            ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled", "onClick", "onMouseenter", "onKeydown", "tabindex"]))
          : (vue.openBlock(), vue.createBlock("div", {
              key: index,
              class: [$options.classObject(weekDay), "datepicker-cell"]
            }, [
              vue.createVNode("span", null, vue.toDisplayString(weekDay.getDate()), 1 /* TEXT */),
              ($options.eventsDateMatch(weekDay))
                ? (vue.openBlock(), vue.createBlock("div", _hoisted_3$2, [
                    (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.eventsDateMatch(weekDay), (event, index) => {
                      return (vue.openBlock(), vue.createBlock("div", {
                        class: ["event", event.type],
                        key: index
                      }, null, 2 /* CLASS */))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]))
                : vue.createCommentVNode("v-if", true)
            ], 2 /* CLASS */))
      ], 64 /* STABLE_FRAGMENT */))
    }), 256 /* UNKEYED_FRAGMENT */))
  ]))
}

script$3.render = render$3;
script$3.__file = "src/components/datepicker/DatepickerTableRow.vue";

var script$2 = {
  name: 'BDatepickerTable',
  components: _rollupPluginBabelHelpers._defineProperty({}, script$3.name, script$3),
  props: {
    value: {
      type: [Date, Array]
    },
    dayNames: Array,
    monthNames: Array,
    firstDayOfWeek: Number,
    events: Array,
    indicators: String,
    minDate: Date,
    maxDate: Date,
    focused: Object,
    disabled: Boolean,
    dateCreator: Function,
    unselectableDates: Array,
    unselectableDaysOfWeek: Array,
    selectableDates: Array,
    nearbyMonthDays: Boolean,
    nearbySelectableMonthDays: Boolean,
    showWeekNumber: Boolean,
    weekNumberClickable: Boolean,
    rulesForFirstWeek: Number,
    range: Boolean,
    multiple: Boolean
  },
  data: function data() {
    return {
      selectedBeginDate: undefined,
      selectedEndDate: undefined,
      hoveredEndDate: undefined
    };
  },
  computed: {
    multipleSelectedDates: {
      get: function get() {
        return this.multiple && this.value ? this.value : [];
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    },
    visibleDayNames: function visibleDayNames() {
      var visibleDayNames = [];
      var index = this.firstDayOfWeek;

      while (visibleDayNames.length < this.dayNames.length) {
        var currentDayName = this.dayNames[index % this.dayNames.length];
        visibleDayNames.push(currentDayName);
        index++;
      }

      if (this.showWeekNumber) visibleDayNames.unshift('');
      return visibleDayNames;
    },
    hasEvents: function hasEvents() {
      return this.events && this.events.length;
    },

    /*
    * Return array of all events in the specified month
    */
    eventsInThisMonth: function eventsInThisMonth() {
      if (!this.events) return [];
      var monthEvents = [];

      for (var i = 0; i < this.events.length; i++) {
        var event = this.events[i];

        if (!event.hasOwnProperty('date')) {
          event = {
            date: event
          };
        }

        if (!event.hasOwnProperty('type')) {
          event.type = 'is-primary';
        }

        if (event.date.getMonth() === this.focused.month && event.date.getFullYear() === this.focused.year) {
          monthEvents.push(event);
        }
      }

      return monthEvents;
    },

    /*
    * Return array of all weeks in the specified month
    */
    weeksInThisMonth: function weeksInThisMonth() {
      this.validateFocusedDay();
      var month = this.focused.month;
      var year = this.focused.year;
      var weeksInThisMonth = [];
      var startingDay = 1;

      while (weeksInThisMonth.length < 6) {
        var newWeek = this.weekBuilder(startingDay, month, year);
        weeksInThisMonth.push(newWeek);
        startingDay += 7;
      }

      return weeksInThisMonth;
    },
    hoveredDateRange: function hoveredDateRange() {
      if (!this.range) {
        return [];
      }

      if (!isNaN(this.selectedEndDate)) {
        return [];
      }

      if (this.hoveredEndDate < this.selectedBeginDate) {
        return [this.hoveredEndDate, this.selectedBeginDate].filter(helpers.isDefined);
      }

      return [this.selectedBeginDate, this.hoveredEndDate].filter(helpers.isDefined);
    }
  },
  methods: {
    /*
    * Emit input event with selected date as payload for v-model in parent
    */
    updateSelectedDate: function updateSelectedDate(date) {
      if (!this.range && !this.multiple) {
        this.$emit('input', date);
      } else if (this.range) {
        this.handleSelectRangeDate(date);
      } else if (this.multiple) {
        this.handleSelectMultipleDates(date);
      }
    },

    /*
    * If both begin and end dates are set, reset the end date and set the begin date.
    * If only begin date is selected, emit an array of the begin date and the new date.
    * If not set, only set the begin date.
    */
    handleSelectRangeDate: function handleSelectRangeDate(date) {
      if (this.selectedBeginDate && this.selectedEndDate) {
        this.selectedBeginDate = date;
        this.selectedEndDate = undefined;
        this.$emit('range-start', date);
      } else if (this.selectedBeginDate && !this.selectedEndDate) {
        if (this.selectedBeginDate > date) {
          this.selectedEndDate = this.selectedBeginDate;
          this.selectedBeginDate = date;
        } else {
          this.selectedEndDate = date;
        }

        this.$emit('range-end', date);
        this.$emit('input', [this.selectedBeginDate, this.selectedEndDate]);
      } else {
        this.selectedBeginDate = date;
        this.$emit('range-start', date);
      }
    },

    /*
    * If selected date already exists list of selected dates, remove it from the list
    * Otherwise, add date to list of selected dates
    */
    handleSelectMultipleDates: function handleSelectMultipleDates(date) {
      var multipleSelect = this.multipleSelectedDates.filter(function (selectedDate) {
        return selectedDate.getDate() === date.getDate() && selectedDate.getFullYear() === date.getFullYear() && selectedDate.getMonth() === date.getMonth();
      });

      if (multipleSelect.length) {
        this.multipleSelectedDates = this.multipleSelectedDates.filter(function (selectedDate) {
          return selectedDate.getDate() !== date.getDate() || selectedDate.getFullYear() !== date.getFullYear() || selectedDate.getMonth() !== date.getMonth();
        });
      } else {
        this.multipleSelectedDates = [].concat(_rollupPluginBabelHelpers._toConsumableArray(this.multipleSelectedDates), [date]);
      }
    },

    /*
     * Return array of all days in the week that the startingDate is within
     */
    weekBuilder: function weekBuilder(startingDate, month, year) {
      var thisMonth = new Date(year, month);
      var thisWeek = [];
      var dayOfWeek = new Date(year, month, startingDate).getDay();
      var end = dayOfWeek >= this.firstDayOfWeek ? dayOfWeek - this.firstDayOfWeek : 7 - this.firstDayOfWeek + dayOfWeek;
      var daysAgo = 1;

      for (var i = 0; i < end; i++) {
        thisWeek.unshift(new Date(thisMonth.getFullYear(), thisMonth.getMonth(), startingDate - daysAgo));
        daysAgo++;
      }

      thisWeek.push(new Date(year, month, startingDate));
      var daysForward = 1;

      while (thisWeek.length < 7) {
        thisWeek.push(new Date(year, month, startingDate + daysForward));
        daysForward++;
      }

      return thisWeek;
    },
    validateFocusedDay: function validateFocusedDay() {
      var focusedDate = new Date(this.focused.year, this.focused.month, this.focused.day);
      if (this.selectableDate(focusedDate)) return;
      var day = 0; // Number of days in the current month

      var monthDays = new Date(this.focused.year, this.focused.month + 1, 0).getDate();
      var firstFocusable = null;

      while (!firstFocusable && ++day < monthDays) {
        var date = new Date(this.focused.year, this.focused.month, day);

        if (this.selectableDate(date)) {
          firstFocusable = focusedDate;
          var focused = {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear()
          };
          this.$emit('update:focused', focused);
        }
      }
    },

    /*
     * Check that selected day is within earliest/latest params and
     * is within this month
     */
    selectableDate: function selectableDate(day) {
      var validity = [];

      if (this.minDate) {
        validity.push(day >= this.minDate);
      }

      if (this.maxDate) {
        validity.push(day <= this.maxDate);
      }

      if (this.nearbyMonthDays && !this.nearbySelectableMonthDays) {
        validity.push(day.getMonth() === this.focused.month);
      }

      if (this.selectableDates) {
        for (var i = 0; i < this.selectableDates.length; i++) {
          var enabledDate = this.selectableDates[i];

          if (day.getDate() === enabledDate.getDate() && day.getFullYear() === enabledDate.getFullYear() && day.getMonth() === enabledDate.getMonth()) {
            return true;
          } else {
            validity.push(false);
          }
        }
      }

      if (this.unselectableDates) {
        for (var _i = 0; _i < this.unselectableDates.length; _i++) {
          var disabledDate = this.unselectableDates[_i];
          validity.push(day.getDate() !== disabledDate.getDate() || day.getFullYear() !== disabledDate.getFullYear() || day.getMonth() !== disabledDate.getMonth());
        }
      }

      if (this.unselectableDaysOfWeek) {
        for (var _i2 = 0; _i2 < this.unselectableDaysOfWeek.length; _i2++) {
          var dayOfWeek = this.unselectableDaysOfWeek[_i2];
          validity.push(day.getDay() !== dayOfWeek);
        }
      }

      return validity.indexOf(false) < 0;
    },
    eventsInThisWeek: function eventsInThisWeek(week) {
      return this.eventsInThisMonth.filter(function (event) {
        var stripped = new Date(Date.parse(event.date));
        stripped.setHours(0, 0, 0, 0);
        var timed = stripped.getTime();
        return week.some(function (weekDate) {
          return weekDate.getTime() === timed;
        });
      });
    },
    setRangeHoverEndDate: function setRangeHoverEndDate(day) {
      this.hoveredEndDate = day;
    },
    changeFocus: function changeFocus(day) {
      var focused = {
        day: day.getDate(),
        month: day.getMonth(),
        year: day.getFullYear()
      };
      this.$emit('update:focused', focused);
    }
  }
};

const _hoisted_1$2 = { class: "datepicker-table" };
const _hoisted_2$2 = { class: "datepicker-header" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_datepicker_table_row = vue.resolveComponent("b-datepicker-table-row");

  return (vue.openBlock(), vue.createBlock("section", _hoisted_1$2, [
    vue.createVNode("header", _hoisted_2$2, [
      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.visibleDayNames, (day, index) => {
        return (vue.openBlock(), vue.createBlock("div", {
          key: index,
          class: "datepicker-cell"
        }, [
          vue.createVNode("span", null, vue.toDisplayString(day), 1 /* TEXT */)
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    vue.createVNode("div", {
      class: ["datepicker-body", {'has-events':$options.hasEvents}]
    }, [
      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.weeksInThisMonth, (week, index) => {
        return (vue.openBlock(), vue.createBlock(_component_b_datepicker_table_row, {
          key: index,
          "selected-date": $props.value,
          day: $props.focused.day,
          week: week,
          month: $props.focused.month,
          "min-date": $props.minDate,
          "max-date": $props.maxDate,
          disabled: $props.disabled,
          "unselectable-dates": $props.unselectableDates,
          "unselectable-days-of-week": $props.unselectableDaysOfWeek,
          "selectable-dates": $props.selectableDates,
          events: $options.eventsInThisWeek(week),
          indicators: $props.indicators,
          "date-creator": $props.dateCreator,
          "nearby-month-days": $props.nearbyMonthDays,
          "nearby-selectable-month-days": $props.nearbySelectableMonthDays,
          "show-week-number": $props.showWeekNumber,
          "week-number-clickable": $props.weekNumberClickable,
          "first-day-of-week": $props.firstDayOfWeek,
          "rules-for-first-week": $props.rulesForFirstWeek,
          range: $props.range,
          "hovered-date-range": $options.hoveredDateRange,
          onSelect: $options.updateSelectedDate,
          onRangeHoverEndDate: $options.setRangeHoverEndDate,
          multiple: $props.multiple,
          onChangeFocus: $options.changeFocus
        }, null, 8 /* PROPS */, ["selected-date", "day", "week", "month", "min-date", "max-date", "disabled", "unselectable-dates", "unselectable-days-of-week", "selectable-dates", "events", "indicators", "date-creator", "nearby-month-days", "nearby-selectable-month-days", "show-week-number", "week-number-clickable", "first-day-of-week", "rules-for-first-week", "range", "hovered-date-range", "onSelect", "onRangeHoverEndDate", "multiple", "onChangeFocus"]))
      }), 128 /* KEYED_FRAGMENT */))
    ], 2 /* CLASS */)
  ]))
}

script$2.render = render$2;
script$2.__file = "src/components/datepicker/DatepickerTable.vue";

var script$1 = {
  name: 'BDatepickerMonth',
  props: {
    value: {
      type: [Date, Array]
    },
    monthNames: Array,
    events: Array,
    indicators: String,
    minDate: Date,
    maxDate: Date,
    focused: Object,
    disabled: Boolean,
    dateCreator: Function,
    unselectableDates: Array,
    unselectableDaysOfWeek: Array,
    selectableDates: Array,
    range: Boolean,
    multiple: Boolean
  },
  data: function data() {
    return {
      selectedBeginDate: undefined,
      selectedEndDate: undefined,
      hoveredEndDate: undefined,
      multipleSelectedDates: this.multiple && this.value ? this.value : []
    };
  },
  computed: {
    hasEvents: function hasEvents() {
      return this.events && this.events.length;
    },

    /*
    * Return array of all events in the specified month
    */
    eventsInThisYear: function eventsInThisYear() {
      if (!this.events) return [];
      var yearEvents = [];

      for (var i = 0; i < this.events.length; i++) {
        var event = this.events[i];

        if (!event.hasOwnProperty('date')) {
          event = {
            date: event
          };
        }

        if (!event.hasOwnProperty('type')) {
          event.type = 'is-primary';
        }

        if (event.date.getFullYear() === this.focused.year) {
          yearEvents.push(event);
        }
      }

      return yearEvents;
    },
    monthDates: function monthDates() {
      var year = this.focused.year;
      var months = [];

      for (var i = 0; i < 12; i++) {
        var d = new Date(year, i, 1);
        d.setHours(0, 0, 0, 0);
        months.push(d);
      }

      return months;
    },
    focusedMonth: function focusedMonth() {
      return this.focused.month;
    },
    hoveredDateRange: function hoveredDateRange() {
      if (!this.range) {
        return [];
      }

      if (!isNaN(this.selectedEndDate)) {
        return [];
      }

      if (this.hoveredEndDate < this.selectedBeginDate) {
        return [this.hoveredEndDate, this.selectedBeginDate].filter(helpers.isDefined);
      }

      return [this.selectedBeginDate, this.hoveredEndDate].filter(helpers.isDefined);
    }
  },
  watch: {
    focusedMonth: function focusedMonth(month) {
      var _this = this;

      var refName = "month-".concat(month);

      if (this.$refs[refName] && this.$refs[refName].length > 0) {
        this.$nextTick(function () {
          if (_this.$refs[refName][0]) {
            _this.$refs[refName][0].focus();
          }
        }); // $nextTick needed when year is changed
      }
    }
  },
  methods: {
    selectMultipleDates: function selectMultipleDates(date) {
      var multipleSelect = this.multipleSelectedDates.filter(function (selectedDate) {
        return selectedDate.getDate() === date.getDate() && selectedDate.getFullYear() === date.getFullYear() && selectedDate.getMonth() === date.getMonth();
      });

      if (multipleSelect.length) {
        this.multipleSelectedDates = this.multipleSelectedDates.filter(function (selectedDate) {
          return selectedDate.getDate() !== date.getDate() || selectedDate.getFullYear() !== date.getFullYear() || selectedDate.getMonth() !== date.getMonth();
        });
      } else {
        this.multipleSelectedDates.push(date);
      }

      this.$emit('input', this.multipleSelectedDates);
    },
    selectableDate: function selectableDate(day) {
      var validity = [];

      if (this.minDate) {
        validity.push(day >= this.minDate);
      }

      if (this.maxDate) {
        validity.push(day <= this.maxDate);
      }

      validity.push(day.getFullYear() === this.focused.year);

      if (this.selectableDates) {
        for (var i = 0; i < this.selectableDates.length; i++) {
          var enabledDate = this.selectableDates[i];

          if (day.getFullYear() === enabledDate.getFullYear() && day.getMonth() === enabledDate.getMonth()) {
            return true;
          } else {
            validity.push(false);
          }
        }
      }

      if (this.unselectableDates) {
        for (var _i = 0; _i < this.unselectableDates.length; _i++) {
          var disabledDate = this.unselectableDates[_i];
          validity.push(day.getFullYear() !== disabledDate.getFullYear() || day.getMonth() !== disabledDate.getMonth());
        }
      }

      if (this.unselectableDaysOfWeek) {
        for (var _i2 = 0; _i2 < this.unselectableDaysOfWeek.length; _i2++) {
          var dayOfWeek = this.unselectableDaysOfWeek[_i2];
          validity.push(day.getDay() !== dayOfWeek);
        }
      }

      return validity.indexOf(false) < 0;
    },
    eventsDateMatch: function eventsDateMatch(day) {
      if (!this.eventsInThisYear.length) return false;
      var monthEvents = [];

      for (var i = 0; i < this.eventsInThisYear.length; i++) {
        if (this.eventsInThisYear[i].date.getMonth() === day.getMonth()) {
          monthEvents.push(this.events[i]);
        }
      }

      if (!monthEvents.length) {
        return false;
      }

      return monthEvents;
    },

    /*
    * Build classObject for cell using validations
    */
    classObject: function classObject(day) {
      function dateMatch(dateOne, dateTwo, multiple) {
        // if either date is null or undefined, return false
        if (!dateOne || !dateTwo || multiple) {
          return false;
        }

        if (Array.isArray(dateTwo)) {
          return dateTwo.some(function (date) {
            return dateOne.getFullYear() === date.getFullYear() && dateOne.getMonth() === date.getMonth();
          });
        }

        return dateOne.getFullYear() === dateTwo.getFullYear() && dateOne.getMonth() === dateTwo.getMonth();
      }

      function dateWithin(dateOne, dates, multiple) {
        if (!Array.isArray(dates) || multiple) {
          return false;
        }

        return dateOne > dates[0] && dateOne < dates[1];
      }

      function dateMultipleSelected(dateOne, dates, multiple) {
        if (!Array.isArray(dates) || !multiple) {
          return false;
        }

        return dates.some(function (date) {
          return dateOne.getDate() === date.getDate() && dateOne.getFullYear() === date.getFullYear() && dateOne.getMonth() === date.getMonth();
        });
      }

      return {
        'is-selected': dateMatch(day, this.value, this.multiple) || dateWithin(day, this.value, this.multiple) || dateMultipleSelected(day, this.multipleSelectedDates, this.multiple),
        'is-first-selected': dateMatch(day, Array.isArray(this.value) && this.value[0], this.multiple),
        'is-within-selected': dateWithin(day, this.value, this.multiple),
        'is-last-selected': dateMatch(day, Array.isArray(this.value) && this.value[1], this.multiple),
        'is-within-hovered-range': this.hoveredDateRange && this.hoveredDateRange.length === 2 && (dateMatch(day, this.hoveredDateRange) || dateWithin(day, this.hoveredDateRange)),
        'is-first-hovered': dateMatch(day, Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[0]),
        'is-within-hovered': dateWithin(day, this.hoveredDateRange),
        'is-last-hovered': dateMatch(day, Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[1]),
        'is-today': dateMatch(day, this.dateCreator()),
        'is-selectable': this.selectableDate(day) && !this.disabled,
        'is-unselectable': !this.selectableDate(day) || this.disabled
      };
    },
    manageKeydown: function manageKeydown(_ref, date) {
      var key = _ref.key;

      // https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent/key/Key_Values#Navigation_keys
      switch (key) {
        case ' ':
        case 'Space':
        case 'Spacebar':
        case 'Enter':
          {
            this.updateSelectedDate(date);
            break;
          }

        case 'ArrowLeft':
        case 'Left':
          {
            this.changeFocus(date, -1);
            break;
          }

        case 'ArrowRight':
        case 'Right':
          {
            this.changeFocus(date, 1);
            break;
          }

        case 'ArrowUp':
        case 'Up':
          {
            this.changeFocus(date, -3);
            break;
          }

        case 'ArrowDown':
        case 'Down':
          {
            this.changeFocus(date, 3);
            break;
          }
      }
    },

    /*
    * Emit input event with selected date as payload for v-model in parent
    */
    updateSelectedDate: function updateSelectedDate(date) {
      if (!this.range && !this.multiple) {
        this.emitChosenDate(date);
      } else if (this.range) {
        this.handleSelectRangeDate(date);
      } else if (this.multiple) {
        this.selectMultipleDates(date);
      }
    },

    /*
     * Emit select event with chosen date as payload
     */
    emitChosenDate: function emitChosenDate(day) {
      if (this.disabled) return;

      if (!this.multiple) {
        if (this.selectableDate(day)) {
          this.$emit('input', day);
        }
      } else {
        this.selectMultipleDates(day);
      }
    },

    /*
    * If both begin and end dates are set, reset the end date and set the begin date.
    * If only begin date is selected, emit an array of the begin date and the new date.
    * If not set, only set the begin date.
    */
    handleSelectRangeDate: function handleSelectRangeDate(date) {
      if (this.disabled) return;

      if (this.selectedBeginDate && this.selectedEndDate) {
        this.selectedBeginDate = date;
        this.selectedEndDate = undefined;
        this.$emit('range-start', date);
      } else if (this.selectedBeginDate && !this.selectedEndDate) {
        if (this.selectedBeginDate > date) {
          this.selectedEndDate = this.selectedBeginDate;
          this.selectedBeginDate = date;
        } else {
          this.selectedEndDate = date;
        }

        this.$emit('range-end', date);
        this.$emit('input', [this.selectedBeginDate, this.selectedEndDate]);
      } else {
        this.selectedBeginDate = date;
        this.$emit('range-start', date);
      }
    },
    setRangeHoverEndDate: function setRangeHoverEndDate(day) {
      if (this.range) {
        this.hoveredEndDate = day;
      }
    },
    changeFocus: function changeFocus(month, inc) {
      var nextMonth = month;
      nextMonth.setMonth(month.getMonth() + inc);
      this.$emit('change-focus', nextMonth);
    }
  }
};

const _hoisted_1$1 = { class: "datepicker-table" };
const _hoisted_2$1 = { class: "datepicker-months" };
const _hoisted_3$1 = {
  key: 0,
  class: "events"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("section", _hoisted_1$1, [
    vue.createVNode("div", {
      class: ["datepicker-body", {'has-events':$options.hasEvents}]
    }, [
      vue.createVNode("div", _hoisted_2$1, [
        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.monthDates, (date, index) => {
          return (vue.openBlock(), vue.createBlock(vue.Fragment, null, [
            ($options.selectableDate(date) && !$props.disabled)
              ? (vue.openBlock(), vue.createBlock("a", {
                  ref: `month-${date.getMonth()}`,
                  key: index + 'selectable',
                  class: [[
                            $options.classObject(date),
                            {'has-event': $options.eventsDateMatch(date)},
                            $props.indicators
                        ], "datepicker-cell"],
                  role: "button",
                  href: "#",
                  disabled: $props.disabled ? '' : null,
                  onClick: vue.withModifiers($event => ($options.updateSelectedDate(date)), ["prevent"]),
                  onMouseenter: $event => ($options.setRangeHoverEndDate(date)),
                  onKeydown: vue.withModifiers($event => ($options.manageKeydown($event, date)), ["prevent"]),
                  tabindex: $props.focused.month === date.getMonth() ? null : -1
                }, [
                  vue.createTextVNode(vue.toDisplayString($props.monthNames[date.getMonth()]) + " ", 1 /* TEXT */),
                  ($options.eventsDateMatch(date))
                    ? (vue.openBlock(), vue.createBlock("div", _hoisted_3$1, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.eventsDateMatch(date), (event, index) => {
                          return (vue.openBlock(), vue.createBlock("div", {
                            class: ["event", event.type],
                            key: index
                          }, null, 2 /* CLASS */))
                        }), 128 /* KEYED_FRAGMENT */))
                      ]))
                    : vue.createCommentVNode("v-if", true)
                ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled", "onClick", "onMouseenter", "onKeydown", "tabindex"]))
              : (vue.openBlock(), vue.createBlock("div", {
                  key: index,
                  class: [$options.classObject(date), "datepicker-cell"]
                }, vue.toDisplayString($props.monthNames[date.getMonth()]), 3 /* TEXT, CLASS */))
          ], 64 /* STABLE_FRAGMENT */))
        }), 256 /* UNKEYED_FRAGMENT */))
      ])
    ], 2 /* CLASS */)
  ]))
}

script$1.render = render$1;
script$1.__file = "src/components/datepicker/DatepickerMonth.vue";

var _components;

var defaultDateFormatter = function defaultDateFormatter(date, vm) {
  var targetDates = Array.isArray(date) ? date : [date];
  var dates = targetDates.map(function (date) {
    var d = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
    return !vm.isTypeMonth ? vm.dtf.format(d) : vm.dtfMonth.format(d);
  });
  return !vm.multiple ? dates.join(' - ') : dates.join(', ');
};

var defaultDateParser = function defaultDateParser(date, vm) {
  if (vm.dtf.formatToParts && typeof vm.dtf.formatToParts === 'function') {
    var formatRegex = (vm.isTypeMonth ? vm.dtfMonth : vm.dtf).formatToParts(new Date(2000, 11, 25)).map(function (part) {
      if (part.type === 'literal') {
        return part.value;
      }

      return "((?!=<".concat(part.type, ">)\\d+)");
    }).join('');
    var dateGroups = helpers.matchWithGroups(formatRegex, date); // We do a simple validation for the group.
    // If it is not valid, it will fallback to Date.parse below

    if (dateGroups.year && dateGroups.year.length === 4 && dateGroups.month && dateGroups.month <= 12) {
      if (vm.isTypeMonth) return new Date(dateGroups.year, dateGroups.month - 1);else if (dateGroups.day && dateGroups.day <= 31) {
        return new Date(dateGroups.year, dateGroups.month - 1, dateGroups.day, 12);
      }
    }
  } // Fallback if formatToParts is not supported or if we were not able to parse a valid date


  if (!vm.isTypeMonth) return new Date(Date.parse(date));

  if (date) {
    var s = date.split('/');
    var year = s[0].length === 4 ? s[0] : s[1];
    var month = s[0].length === 2 ? s[0] : s[1];

    if (year && month) {
      return new Date(parseInt(year, 10), parseInt(month - 1, 10), 1, 0, 0, 0, 0);
    }
  }

  return null;
};

var script = {
  name: 'BDatepicker',
  components: (_components = {}, _rollupPluginBabelHelpers._defineProperty(_components, script$2.name, script$2), _rollupPluginBabelHelpers._defineProperty(_components, script$1.name, script$1), _rollupPluginBabelHelpers._defineProperty(_components, Input.script.name, Input.script), _rollupPluginBabelHelpers._defineProperty(_components, Field.script.name, Field.script), _rollupPluginBabelHelpers._defineProperty(_components, Select.script.name, Select.script), _rollupPluginBabelHelpers._defineProperty(_components, Icon.script.name, Icon.script), _rollupPluginBabelHelpers._defineProperty(_components, DropdownItem.script.name, DropdownItem.script), _rollupPluginBabelHelpers._defineProperty(_components, DropdownItem.script$1.name, DropdownItem.script$1), _components),
  mixins: [FormElementMixin.FormElementMixin],
  inheritAttrs: false,
  provide: function provide() {
    return {
      $datepicker: this
    };
  },
  props: {
    value: {
      type: [Date, Array]
    },
    dayNames: {
      type: Array,
      default: function _default() {
        if (!Array.isArray(config.config.defaultDayNames)) {
          return undefined;
        }

        return config.config.defaultDayNames;
      }
    },
    monthNames: {
      type: Array,
      default: function _default() {
        if (!Array.isArray(config.config.defaultMonthNames)) {
          return undefined;
        }

        return config.config.defaultMonthNames;
      }
    },
    firstDayOfWeek: {
      type: Number,
      default: function _default() {
        if (typeof config.config.defaultFirstDayOfWeek === 'number') {
          return config.config.defaultFirstDayOfWeek;
        } else {
          return 0;
        }
      }
    },
    inline: Boolean,
    minDate: Date,
    maxDate: Date,
    focusedDate: Date,
    placeholder: String,
    editable: Boolean,
    disabled: Boolean,
    horizontalTimePicker: Boolean,
    unselectableDates: Array,
    unselectableDaysOfWeek: {
      type: Array,
      default: function _default() {
        return config.config.defaultUnselectableDaysOfWeek;
      }
    },
    selectableDates: Array,
    dateFormatter: {
      type: Function,
      default: function _default(date, vm) {
        if (typeof config.config.defaultDateFormatter === 'function') {
          return config.config.defaultDateFormatter(date);
        } else {
          return defaultDateFormatter(date, vm);
        }
      }
    },
    dateParser: {
      type: Function,
      default: function _default(date, vm) {
        if (typeof config.config.defaultDateParser === 'function') {
          return config.config.defaultDateParser(date);
        } else {
          return defaultDateParser(date, vm);
        }
      }
    },
    dateCreator: {
      type: Function,
      default: function _default() {
        if (typeof config.config.defaultDateCreator === 'function') {
          return config.config.defaultDateCreator();
        } else {
          return new Date();
        }
      }
    },
    mobileNative: {
      type: Boolean,
      default: function _default() {
        return config.config.defaultDatepickerMobileNative;
      }
    },
    position: String,
    iconRight: String,
    events: Array,
    indicators: {
      type: String,
      default: 'dots'
    },
    openOnFocus: Boolean,
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
    yearsRange: {
      type: Array,
      default: function _default() {
        return config.config.defaultDatepickerYearsRange;
      }
    },
    type: {
      type: String,
      validator: function validator(value) {
        return ['month'].indexOf(value) >= 0;
      }
    },
    nearbyMonthDays: {
      type: Boolean,
      default: function _default() {
        return config.config.defaultDatepickerNearbyMonthDays;
      }
    },
    nearbySelectableMonthDays: {
      type: Boolean,
      default: function _default() {
        return config.config.defaultDatepickerNearbySelectableMonthDays;
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: function _default() {
        return config.config.defaultDatepickerShowWeekNumber;
      }
    },
    weekNumberClickable: {
      type: Boolean,
      default: function _default() {
        return config.config.defaultDatepickerWeekNumberClickable;
      }
    },
    rulesForFirstWeek: {
      type: Number,
      default: function _default() {
        return 4;
      }
    },
    range: {
      type: Boolean,
      default: false
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    mobileModal: {
      type: Boolean,
      default: function _default() {
        return config.config.defaultDatepickerMobileModal;
      }
    },
    focusable: {
      type: Boolean,
      default: true
    },
    trapFocus: {
      type: Boolean,
      default: function _default() {
        return config.config.defaultTrapFocus;
      }
    },
    appendToBody: Boolean,
    ariaNextLabel: String,
    ariaPreviousLabel: String
  },
  data: function data() {
    var focusedDate = (Array.isArray(this.value) ? this.value[0] : this.value) || this.focusedDate || this.dateCreator();

    if (!this.value && this.maxDate && this.maxDate.getFullYear() < focusedDate.getFullYear()) {
      focusedDate.setFullYear(this.maxDate.getFullYear());
    }

    return {
      dateSelected: this.value,
      focusedDateData: {
        day: focusedDate.getDate(),
        month: focusedDate.getMonth(),
        year: focusedDate.getFullYear()
      },
      _elementRef: 'input',
      _isDatepicker: true
    };
  },
  computed: {
    computedValue: {
      get: function get() {
        return this.dateSelected;
      },
      set: function set(value) {
        var _this = this;

        this.updateInternalState(value);
        if (!this.multiple) this.togglePicker(false);
        this.$emit('input', value);

        if (this.useHtml5Validation) {
          this.$nextTick(function () {
            _this.checkHtml5Validity();
          });
        }
      }
    },
    formattedValue: function formattedValue() {
      return this.formatValue(this.computedValue);
    },
    localeOptions: function localeOptions() {
      return new Intl.DateTimeFormat(this.locale, {
        year: 'numeric',
        month: 'numeric'
      }).resolvedOptions();
    },
    dtf: function dtf() {
      return new Intl.DateTimeFormat(this.locale, {
        timeZone: 'UTC'
      });
    },
    dtfMonth: function dtfMonth() {
      return new Intl.DateTimeFormat(this.locale, {
        year: this.localeOptions.year || 'numeric',
        month: this.localeOptions.month || '2-digit',
        timeZone: 'UTC'
      });
    },
    newMonthNames: function newMonthNames() {
      if (Array.isArray(this.monthNames)) {
        return this.monthNames;
      }

      return helpers.getMonthNames(this.locale);
    },
    newDayNames: function newDayNames() {
      if (Array.isArray(this.dayNames)) {
        return this.dayNames;
      }

      return helpers.getWeekdayNames(this.locale);
    },
    listOfMonths: function listOfMonths() {
      var minMonth = 0;
      var maxMonth = 12;

      if (this.minDate && this.focusedDateData.year === this.minDate.getFullYear()) {
        minMonth = this.minDate.getMonth();
      }

      if (this.maxDate && this.focusedDateData.year === this.maxDate.getFullYear()) {
        maxMonth = this.maxDate.getMonth();
      }

      return this.newMonthNames.map(function (name, index) {
        return {
          name: name,
          index: index,
          disabled: index < minMonth || index > maxMonth
        };
      });
    },

    /*
     * Returns an array of years for the year dropdown. If earliest/latest
     * dates are set by props, range of years will fall within those dates.
     */
    listOfYears: function listOfYears() {
      var latestYear = this.focusedDateData.year + this.yearsRange[1];

      if (this.maxDate && this.maxDate.getFullYear() < latestYear) {
        latestYear = Math.max(this.maxDate.getFullYear(), this.focusedDateData.year);
      }

      var earliestYear = this.focusedDateData.year + this.yearsRange[0];

      if (this.minDate && this.minDate.getFullYear() > earliestYear) {
        earliestYear = Math.min(this.minDate.getFullYear(), this.focusedDateData.year);
      }

      var arrayOfYears = [];

      for (var i = earliestYear; i <= latestYear; i++) {
        arrayOfYears.push(i);
      }

      return arrayOfYears.reverse();
    },
    showPrev: function showPrev() {
      if (!this.minDate) return false;

      if (this.isTypeMonth) {
        return this.focusedDateData.year <= this.minDate.getFullYear();
      }

      var dateToCheck = new Date(this.focusedDateData.year, this.focusedDateData.month);
      var date = new Date(this.minDate.getFullYear(), this.minDate.getMonth());
      return dateToCheck <= date;
    },
    showNext: function showNext() {
      if (!this.maxDate) return false;

      if (this.isTypeMonth) {
        return this.focusedDateData.year >= this.maxDate.getFullYear();
      }

      var dateToCheck = new Date(this.focusedDateData.year, this.focusedDateData.month);
      var date = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth());
      return dateToCheck >= date;
    },
    isMobile: function isMobile() {
      return this.mobileNative && helpers.isMobile.any();
    },
    isTypeMonth: function isTypeMonth() {
      return this.type === 'month';
    },
    ariaRole: function ariaRole() {
      if (!this.inline) {
        return 'dialog';
      }
    }
  },
  watch: {
    /**
     * When v-model is changed:
     *   1. Update internal value.
     *   2. If it's invalid, validate again.
     */
    value: function value(_value) {
      this.updateInternalState(_value);
      if (!this.multiple) this.togglePicker(false);
    },
    focusedDate: function focusedDate(value) {
      if (value) {
        this.focusedDateData = {
          day: value.getDate(),
          month: value.getMonth(),
          year: value.getFullYear()
        };
      }
    },

    /*
     * Emit input event on month and/or year change
     */
    'focusedDateData.month': function focusedDateDataMonth(value) {
      this.$emit('change-month', value);
    },
    'focusedDateData.year': function focusedDateDataYear(value) {
      this.$emit('change-year', value);
    }
  },
  methods: {
    /*
     * Parse string into date
     */
    onChange: function onChange(value) {
      var date = this.dateParser(value, this);

      if (date && (!isNaN(date) || Array.isArray(date) && date.length === 2 && !isNaN(date[0]) && !isNaN(date[1]))) {
        this.computedValue = date;
      } else {
        // Force refresh input value when not valid date
        this.computedValue = null;

        if (this.$refs.input) {
          this.$refs.input.newValue = this.computedValue;
        }
      }
    },

    /*
     * Format date into string
     */
    formatValue: function formatValue(value) {
      if (Array.isArray(value)) {
        var isArrayWithValidDates = Array.isArray(value) && value.every(function (v) {
          return !isNaN(v);
        });
        return isArrayWithValidDates ? this.dateFormatter(_rollupPluginBabelHelpers._toConsumableArray(value), this) : null;
      }

      return value && !isNaN(value) ? this.dateFormatter(value, this) : null;
    },

    /*
     * Either decrement month by 1 if not January or decrement year by 1
     * and set month to 11 (December) or decrement year when 'month'
     */
    prev: function prev() {
      if (this.disabled) return;

      if (this.isTypeMonth) {
        this.focusedDateData.year -= 1;
      } else {
        if (this.focusedDateData.month > 0) {
          this.focusedDateData.month -= 1;
        } else {
          this.focusedDateData.month = 11;
          this.focusedDateData.year -= 1;
        }
      }
    },

    /*
     * Either increment month by 1 if not December or increment year by 1
     * and set month to 0 (January) or increment year when 'month'
     */
    next: function next() {
      if (this.disabled) return;

      if (this.isTypeMonth) {
        this.focusedDateData.year += 1;
      } else {
        if (this.focusedDateData.month < 11) {
          this.focusedDateData.month += 1;
        } else {
          this.focusedDateData.month = 0;
          this.focusedDateData.year += 1;
        }
      }
    },
    formatNative: function formatNative(value) {
      return this.isTypeMonth ? this.formatYYYYMM(value) : this.formatYYYYMMDD(value);
    },

    /*
     * Format date into string 'YYYY-MM-DD'
     */
    formatYYYYMMDD: function formatYYYYMMDD(value) {
      var date = new Date(value);

      if (value && !isNaN(date)) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return year + '-' + ((month < 10 ? '0' : '') + month) + '-' + ((day < 10 ? '0' : '') + day);
      }

      return '';
    },

    /*
     * Format date into string 'YYYY-MM'
     */
    formatYYYYMM: function formatYYYYMM(value) {
      var date = new Date(value);

      if (value && !isNaN(date)) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        return year + '-' + ((month < 10 ? '0' : '') + month);
      }

      return '';
    },

    /*
     * Parse date from string
     */
    onChangeNativePicker: function onChangeNativePicker(event) {
      var date = event.target.value;
      var s = date ? date.split('-') : [];

      if (s.length === 3) {
        var year = parseInt(s[0], 10);
        var month = parseInt(s[1]) - 1;
        var day = parseInt(s[2]);
        this.computedValue = new Date(year, month, day);
      } else {
        this.computedValue = null;
      }
    },
    updateInternalState: function updateInternalState(value) {
      var currentDate = Array.isArray(value) ? !value.length ? this.dateCreator() : value[0] : !value ? this.dateCreator() : value;
      this.focusedDateData = {
        day: currentDate.getDate(),
        month: currentDate.getMonth(),
        year: currentDate.getFullYear()
      };
      this.dateSelected = value;
    },

    /*
     * Toggle datepicker
     */
    togglePicker: function togglePicker(active) {
      if (this.$refs.dropdown) {
        if (this.closeOnClick) {
          this.$refs.dropdown.isActive = typeof active === 'boolean' ? active : !this.$refs.dropdown.isActive;
        }
      }
    },

    /*
     * Call default onFocus method and show datepicker
     */
    handleOnFocus: function handleOnFocus(event) {
      this.onFocus(event);

      if (this.openOnFocus) {
        this.togglePicker(true);
      }
    },

    /*
     * Toggle dropdown
     */
    toggle: function toggle() {
      if (this.mobileNative && this.isMobile) {
        var input = this.$refs.input.$refs.input;
        input.focus();
        input.click();
        return;
      }

      this.$refs.dropdown.toggle();
    },

    /*
     * Avoid dropdown toggle when is already visible
     */
    onInputClick: function onInputClick(event) {
      if (this.$refs.dropdown.isActive) {
        event.stopPropagation();
      }
    },

    /**
     * Keypress event that is bound to the document.
     */
    keyPress: function keyPress(_ref) {
      var key = _ref.key;

      if (this.$refs.dropdown && this.$refs.dropdown.isActive && (key === 'Escape' || key === 'Esc')) {
        this.togglePicker(false);
      }
    },

    /**
     * Emit 'blur' event on dropdown is not active (closed)
     */
    onActiveChange: function onActiveChange(value) {
      if (!value) {
        this.onBlur();
      }
    },
    changeFocus: function changeFocus(day) {
      this.focusedDateData = {
        day: day.getDate(),
        month: day.getMonth(),
        year: day.getFullYear()
      };
    }
  },
  created: function created() {
    if (typeof window !== 'undefined') {
      document.addEventListener('keyup', this.keyPress);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (typeof window !== 'undefined') {
      document.removeEventListener('keyup', this.keyPress);
    }
  }
};

const _hoisted_1 = { class: "datepicker-header" };
const _hoisted_2 = { class: "pagination-list" };
const _hoisted_3 = { key: 1 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_input = vue.resolveComponent("b-input");
  const _component_b_icon = vue.resolveComponent("b-icon");
  const _component_b_select = vue.resolveComponent("b-select");
  const _component_b_field = vue.resolveComponent("b-field");
  const _component_b_datepicker_table = vue.resolveComponent("b-datepicker-table");
  const _component_b_datepicker_month = vue.resolveComponent("b-datepicker-month");
  const _component_b_dropdown_item = vue.resolveComponent("b-dropdown-item");
  const _component_b_dropdown = vue.resolveComponent("b-dropdown");

  return (vue.openBlock(), vue.createBlock("div", {
    class: ["datepicker control", [_ctx.size, {'is-expanded': _ctx.expanded}]]
  }, [
    (!$options.isMobile || $props.inline)
      ? (vue.openBlock(), vue.createBlock(_component_b_dropdown, {
          key: 0,
          ref: "dropdown",
          position: $props.position,
          disabled: $props.disabled,
          inline: $props.inline,
          "mobile-modal": $props.mobileModal,
          "trap-focus": $props.trapFocus,
          "aria-role": $options.ariaRole,
          "aria-modal": !$props.inline,
          "append-to-body": $props.appendToBody,
          "append-to-body-copy-parent": "",
          onActiveChange: $options.onActiveChange
        }, vue.createSlots({
          default: vue.withCtx(() => [
            vue.createVNode(_component_b_dropdown_item, {
              disabled: $props.disabled,
              focusable: $props.focusable,
              custom: "",
              class: {'dropdown-horizonal-timepicker': $props.horizontalTimePicker}
            }, {
              default: vue.withCtx(() => [
                vue.createVNode("div", null, [
                  vue.createVNode("header", _hoisted_1, [
                    (_ctx.$slots.header !== undefined && _ctx.$slots.header.length)
                      ? vue.renderSlot(_ctx.$slots, "header", { key: 0 })
                      : (vue.openBlock(), vue.createBlock("div", {
                          key: 1,
                          class: ["pagination field is-centered", _ctx.size]
                        }, [
                          vue.withDirectives(vue.createVNode("a", {
                            class: "pagination-previous",
                            role: "button",
                            href: "#",
                            disabled: $props.disabled ? '' : null,
                            "aria-label": $props.ariaPreviousLabel,
                            onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => ($options.prev && $options.prev(...args)), ["prevent"])),
                            onKeydown: [
                              _cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers((...args) => ($options.prev && $options.prev(...args)), ["prevent"]), ["enter"])),
                              _cache[5] || (_cache[5] = vue.withKeys(vue.withModifiers((...args) => ($options.prev && $options.prev(...args)), ["prevent"]), ["space"]))
                            ]
                          }, [
                            vue.createVNode(_component_b_icon, {
                              icon: $props.iconPrev,
                              pack: _ctx.iconPack,
                              both: "",
                              type: "is-primary is-clickable"
                            }, null, 8 /* PROPS */, ["icon", "pack"])
                          ], 40 /* PROPS, HYDRATE_EVENTS */, ["disabled", "aria-label"]), [
                            [vue.vShow, !$options.showPrev && !$props.disabled]
                          ]),
                          vue.withDirectives(vue.createVNode("a", {
                            class: "pagination-next",
                            role: "button",
                            href: "#",
                            disabled: $props.disabled ? '' : null,
                            "aria-label": $props.ariaNextLabel,
                            onClick: _cache[6] || (_cache[6] = vue.withModifiers((...args) => ($options.next && $options.next(...args)), ["prevent"])),
                            onKeydown: [
                              _cache[7] || (_cache[7] = vue.withKeys(vue.withModifiers((...args) => ($options.next && $options.next(...args)), ["prevent"]), ["enter"])),
                              _cache[8] || (_cache[8] = vue.withKeys(vue.withModifiers((...args) => ($options.next && $options.next(...args)), ["prevent"]), ["space"]))
                            ]
                          }, [
                            vue.createVNode(_component_b_icon, {
                              icon: $props.iconNext,
                              pack: _ctx.iconPack,
                              both: "",
                              type: "is-primary is-clickable"
                            }, null, 8 /* PROPS */, ["icon", "pack"])
                          ], 40 /* PROPS, HYDRATE_EVENTS */, ["disabled", "aria-label"]), [
                            [vue.vShow, !$options.showNext && !$props.disabled]
                          ]),
                          vue.createVNode("div", _hoisted_2, [
                            vue.createVNode(_component_b_field, null, {
                              default: vue.withCtx(() => [
                                (!$options.isTypeMonth)
                                  ? (vue.openBlock(), vue.createBlock(_component_b_select, {
                                      key: 0,
                                      modelValue: $data.focusedDateData.month,
                                      "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => ($data.focusedDateData.month = $event)),
                                      disabled: $props.disabled,
                                      size: _ctx.size
                                    }, {
                                      default: vue.withCtx(() => [
                                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.listOfMonths, (month) => {
                                          return (vue.openBlock(), vue.createBlock("option", {
                                            value: month.index,
                                            key: month.name,
                                            disabled: month.disabled ? '' : null
                                          }, vue.toDisplayString(month.name), 9 /* TEXT, PROPS */, ["value", "disabled"]))
                                        }), 128 /* KEYED_FRAGMENT */))
                                      ]),
                                      _: 1 /* STABLE */
                                    }, 8 /* PROPS */, ["modelValue", "disabled", "size"]))
                                  : vue.createCommentVNode("v-if", true),
                                vue.createVNode(_component_b_select, {
                                  modelValue: $data.focusedDateData.year,
                                  "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => ($data.focusedDateData.year = $event)),
                                  disabled: $props.disabled,
                                  size: _ctx.size
                                }, {
                                  default: vue.withCtx(() => [
                                    (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.listOfYears, (year) => {
                                      return (vue.openBlock(), vue.createBlock("option", {
                                        value: year,
                                        key: year
                                      }, vue.toDisplayString(year), 9 /* TEXT, PROPS */, ["value"]))
                                    }), 128 /* KEYED_FRAGMENT */))
                                  ]),
                                  _: 1 /* STABLE */
                                }, 8 /* PROPS */, ["modelValue", "disabled", "size"])
                              ]),
                              _: 1 /* STABLE */
                            })
                          ])
                        ], 2 /* CLASS */))
                  ]),
                  (!$options.isTypeMonth)
                    ? (vue.openBlock(), vue.createBlock("div", {
                        key: 0,
                        class: ["datepicker-content", {'content-horizonal-timepicker': $props.horizontalTimePicker}]
                      }, [
                        vue.createVNode(_component_b_datepicker_table, {
                          modelValue: $options.computedValue,
                          "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => ($options.computedValue = $event)),
                          "day-names": $options.newDayNames,
                          "month-names": $options.newMonthNames,
                          "first-day-of-week": $props.firstDayOfWeek,
                          "rules-for-first-week": $props.rulesForFirstWeek,
                          "min-date": $props.minDate,
                          "max-date": $props.maxDate,
                          focused: $data.focusedDateData,
                          disabled: $props.disabled,
                          "unselectable-dates": $props.unselectableDates,
                          "unselectable-days-of-week": $props.unselectableDaysOfWeek,
                          "selectable-dates": $props.selectableDates,
                          events: $props.events,
                          indicators: $props.indicators,
                          "date-creator": $props.dateCreator,
                          "type-month": $options.isTypeMonth,
                          "nearby-month-days": $props.nearbyMonthDays,
                          "nearby-selectable-month-days": $props.nearbySelectableMonthDays,
                          "show-week-number": $props.showWeekNumber,
                          "week-number-clickable": $props.weekNumberClickable,
                          range: $props.range,
                          multiple: $props.multiple,
                          onRangeStart: _cache[12] || (_cache[12] = date => _ctx.$emit('range-start', date)),
                          onRangeEnd: _cache[13] || (_cache[13] = date => _ctx.$emit('range-end', date)),
                          onClose: _cache[14] || (_cache[14] = $event => ($options.togglePicker(false))),
                          "onUpdate:focused": _cache[15] || (_cache[15] = $event => ($data.focusedDateData = $event))
                        }, null, 8 /* PROPS */, ["modelValue", "day-names", "month-names", "first-day-of-week", "rules-for-first-week", "min-date", "max-date", "focused", "disabled", "unselectable-dates", "unselectable-days-of-week", "selectable-dates", "events", "indicators", "date-creator", "type-month", "nearby-month-days", "nearby-selectable-month-days", "show-week-number", "week-number-clickable", "range", "multiple"])
                      ], 2 /* CLASS */))
                    : (vue.openBlock(), vue.createBlock("div", _hoisted_3, [
                        vue.createVNode(_component_b_datepicker_month, {
                          modelValue: $options.computedValue,
                          "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => ($options.computedValue = $event)),
                          "month-names": $options.newMonthNames,
                          "min-date": $props.minDate,
                          "max-date": $props.maxDate,
                          focused: $data.focusedDateData,
                          disabled: $props.disabled,
                          "unselectable-dates": $props.unselectableDates,
                          "unselectable-days-of-week": $props.unselectableDaysOfWeek,
                          "selectable-dates": $props.selectableDates,
                          events: $props.events,
                          indicators: $props.indicators,
                          "date-creator": $props.dateCreator,
                          range: $props.range,
                          multiple: $props.multiple,
                          onRangeStart: _cache[17] || (_cache[17] = date => _ctx.$emit('range-start', date)),
                          onRangeEnd: _cache[18] || (_cache[18] = date => _ctx.$emit('range-end', date)),
                          onClose: _cache[19] || (_cache[19] = $event => ($options.togglePicker(false))),
                          onChangeFocus: $options.changeFocus,
                          "onUpdate:focused": _cache[20] || (_cache[20] = $event => ($data.focusedDateData = $event))
                        }, null, 8 /* PROPS */, ["modelValue", "month-names", "min-date", "max-date", "focused", "disabled", "unselectable-dates", "unselectable-days-of-week", "selectable-dates", "events", "indicators", "date-creator", "range", "multiple", "onChangeFocus"])
                      ]))
                ]),
                (_ctx.$slots.default !== undefined && _ctx.$slots.default.length)
                  ? (vue.openBlock(), vue.createBlock("footer", {
                      key: 0,
                      class: ["datepicker-footer", {'footer-horizontal-timepicker': $props.horizontalTimePicker}]
                    }, [
                      vue.renderSlot(_ctx.$slots, "default")
                    ], 2 /* CLASS */))
                  : vue.createCommentVNode("v-if", true)
              ]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["disabled", "focusable", "class"])
          ]),
          _: 2 /* DYNAMIC */
        }, [
          (!$props.inline)
            ? {
                name: "trigger",
                fn: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "trigger", {}, () => [
                    vue.createVNode(_component_b_input, vue.mergeProps({
                      ref: "input",
                      autocomplete: "off",
                      value: $options.formattedValue,
                      placeholder: $props.placeholder,
                      size: _ctx.size,
                      icon: _ctx.icon,
                      "icon-right": $props.iconRight,
                      "icon-pack": _ctx.iconPack,
                      rounded: _ctx.rounded,
                      loading: _ctx.loading,
                      disabled: $props.disabled,
                      readonly: !$props.editable
                    }, _ctx.$attrs, {
                      "use-html5-validation": false,
                      onClick: $options.onInputClick,
                      onKeyup: _cache[1] || (_cache[1] = vue.withKeys($event => ($options.togglePicker(true)), ["native","enter"])),
                      onChange: _cache[2] || (_cache[2] = $event => ($options.onChange($event.target.value))),
                      onFocus: $options.handleOnFocus
                    }), null, 16 /* FULL_PROPS */, ["value", "placeholder", "size", "icon", "icon-right", "icon-pack", "rounded", "loading", "disabled", "readonly", "onClick", "onFocus"])
                  ])
                ])
              }
            : undefined
        ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["position", "disabled", "inline", "mobile-modal", "trap-focus", "aria-role", "aria-modal", "append-to-body", "onActiveChange"]))
      : (vue.openBlock(), vue.createBlock(_component_b_input, vue.mergeProps({
          key: 1,
          ref: "input",
          type: !$options.isTypeMonth ? 'date' : 'month',
          autocomplete: "off",
          value: $options.formatNative($options.computedValue),
          placeholder: $props.placeholder,
          size: _ctx.size,
          icon: _ctx.icon,
          "icon-pack": _ctx.iconPack,
          rounded: _ctx.rounded,
          loading: _ctx.loading,
          max: $options.formatNative($props.maxDate),
          min: $options.formatNative($props.minDate),
          disabled: $props.disabled,
          readonly: false
        }, _ctx.$attrs, {
          "use-html5-validation": false,
          onChange: $options.onChangeNativePicker,
          onFocus: _ctx.onFocus,
          onBlur: _ctx.onBlur
        }), null, 16 /* FULL_PROPS */, ["type", "value", "placeholder", "size", "icon", "icon-pack", "rounded", "loading", "max", "min", "disabled", "onChange", "onFocus", "onBlur"]))
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/datepicker/Datepicker.vue";

exports.script = script;
