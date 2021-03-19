'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var autocomplete = require('./autocomplete.js');
var button = require('./button.js');
var carousel = require('./carousel.js');
var checkbox = require('./checkbox.js');
var collapse = require('./collapse.js');
var clockpicker = require('./clockpicker.js');
var datepicker = require('./datepicker.js');
var datetimepicker = require('./datetimepicker.js');
var dialog = require('./dialog.js');
var dropdown = require('./dropdown.js');
var field = require('./field.js');
var icon = require('./icon.js');
var image = require('./image.js');
var input = require('./input.js');
var loading = require('./loading.js');
var menu = require('./menu.js');
var message = require('./message.js');
var modal = require('./modal.js');
var notification = require('./notification.js');
var navbar = require('./navbar.js');
var numberinput = require('./numberinput.js');
var pagination = require('./pagination.js');
var progress = require('./progress.js');
var radio = require('./radio.js');
var rate = require('./rate.js');
var select = require('./select.js');
var skeleton = require('./skeleton.js');
var sidebar = require('./sidebar.js');
var slider = require('./slider.js');
var snackbar = require('./snackbar.js');
var steps = require('./steps.js');
var _switch = require('./switch.js');
var table = require('./table.js');
var tabs = require('./tabs.js');
var tag = require('./tag.js');
var taginput = require('./taginput.js');
var timepicker = require('./timepicker.js');
var toast = require('./toast.js');
var tooltip = require('./tooltip.js');
var upload = require('./upload.js');
var helpers = require('./helpers.js');
var config$1 = require('./config-1bc87110.js');
var plugins = require('./plugins-c99a13c9.js');
var config = require('./config.js');
require('./Autocomplete-ec808d2b.js');
require('./_rollupPluginBabelHelpers-a6b1b170.js');
require('./FormElementMixin-d260225f.js');
require('./Input-045e0369.js');
require('./Icon-59750035.js');
require('vue');
require('./InjectedChildMixin-28e1211a.js');
require('./Checkbox-359364fc.js');
require('./CheckRadioMixin-c910f2ed.js');
require('./TimepickerMixin-78a9766f.js');
require('./DropdownItem-b1e82b61.js');
require('./trapFocus-050ad8e5.js');
require('./Field-3b6d1df1.js');
require('./Datepicker-dd0ef47f.js');
require('./Select-00390185.js');
require('./Timepicker-b193b12b.js');
require('./Modal-3b70cd74.js');
require('./Loading-7d1d34f5.js');
require('./ssr-95fd856b.js');
require('./MessageMixin-a36fe065.js');
require('./NoticeMixin-c28b24dd.js');
require('./Pagination-f4f9be71.js');
require('./Tooltip-ec4d8839.js');
require('./TabbedChildMixin-9aa8bab3.js');
require('./SlotComponent-2eefe90f.js');
require('./Tag-58156fd3.js');

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Autocomplete: autocomplete['default'],
    Button: button['default'],
    Carousel: carousel['default'],
    Checkbox: checkbox['default'],
    Clockpicker: clockpicker['default'],
    Collapse: collapse['default'],
    Datepicker: datepicker['default'],
    Datetimepicker: datetimepicker['default'],
    Dialog: dialog['default'],
    Dropdown: dropdown['default'],
    Field: field['default'],
    Icon: icon['default'],
    Image: image['default'],
    Input: input['default'],
    Loading: loading['default'],
    Menu: menu['default'],
    Message: message['default'],
    Modal: modal['default'],
    Navbar: navbar['default'],
    Notification: notification['default'],
    Numberinput: numberinput['default'],
    Pagination: pagination['default'],
    Progress: progress['default'],
    Radio: radio['default'],
    Rate: rate['default'],
    Select: select['default'],
    Skeleton: skeleton['default'],
    Sidebar: sidebar['default'],
    Slider: slider['default'],
    Snackbar: snackbar['default'],
    Steps: steps['default'],
    Switch: _switch['default'],
    Table: table['default'],
    Tabs: tabs['default'],
    Tag: tag['default'],
    Taginput: taginput['default'],
    Timepicker: timepicker['default'],
    Toast: toast['default'],
    Tooltip: tooltip['default'],
    Upload: upload['default']
});

var Buefy = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    config$1.setVueInstance(Vue); // Options

    config$1.setOptions(helpers.merge(config$1.config, options, true)); // Components

    for (var componentKey in components) {
      Vue.use(components[componentKey]);
    } // Config component


    plugins.registerComponentProgrammatic(Vue, 'config', config['default']);
  }
};
plugins.use(Buefy);

exports.Autocomplete = autocomplete['default'];
exports.Button = button['default'];
exports.Carousel = carousel['default'];
exports.Checkbox = checkbox['default'];
exports.Collapse = collapse['default'];
exports.Clockpicker = clockpicker['default'];
exports.Datepicker = datepicker['default'];
exports.Datetimepicker = datetimepicker['default'];
exports.Dialog = dialog['default'];
exports.DialogProgrammatic = dialog.DialogProgrammatic;
exports.Dropdown = dropdown['default'];
exports.Field = field['default'];
exports.Icon = icon['default'];
exports.Image = image['default'];
exports.Input = input['default'];
exports.Loading = loading['default'];
exports.LoadingProgrammatic = loading.LoadingProgrammatic;
exports.Menu = menu['default'];
exports.Message = message['default'];
exports.Modal = modal['default'];
exports.ModalProgrammatic = modal.ModalProgrammatic;
exports.Notification = notification['default'];
exports.NotificationProgrammatic = notification.NotificationProgrammatic;
exports.Navbar = navbar['default'];
exports.Numberinput = numberinput['default'];
exports.Pagination = pagination['default'];
exports.Progress = progress['default'];
exports.Radio = radio['default'];
exports.Rate = rate['default'];
exports.Select = select['default'];
exports.Skeleton = skeleton['default'];
exports.Sidebar = sidebar['default'];
exports.Slider = slider['default'];
exports.Snackbar = snackbar['default'];
exports.SnackbarProgrammatic = snackbar.SnackbarProgrammatic;
exports.Steps = steps['default'];
exports.Switch = _switch['default'];
exports.Table = table['default'];
exports.Tabs = tabs['default'];
exports.Tag = tag['default'];
exports.Taginput = taginput['default'];
exports.Timepicker = timepicker['default'];
exports.Toast = toast['default'];
exports.ToastProgrammatic = toast.ToastProgrammatic;
exports.Tooltip = tooltip['default'];
exports.Upload = upload['default'];
exports.bound = helpers.bound;
exports.createAbsoluteElement = helpers.createAbsoluteElement;
exports.createNewEvent = helpers.createNewEvent;
exports.escapeRegExpChars = helpers.escapeRegExpChars;
exports.getMonthNames = helpers.getMonthNames;
exports.getSlot = helpers.getSlot;
exports.getValueByPath = helpers.getValueByPath;
exports.getWeekdayNames = helpers.getWeekdayNames;
exports.hasFlag = helpers.hasFlag;
exports.indexOf = helpers.indexOf;
exports.isCustomElement = helpers.isCustomElement;
exports.isDefined = helpers.isDefined;
exports.isMobile = helpers.isMobile;
exports.isVueComponent = helpers.isVueComponent;
exports.isWebpSupported = helpers.isWebpSupported;
exports.matchWithGroups = helpers.matchWithGroups;
exports.merge = helpers.merge;
exports.mod = helpers.mod;
exports.multiColumnSort = helpers.multiColumnSort;
exports.removeElement = helpers.removeElement;
exports.sign = helpers.sign;
exports.toCssWidth = helpers.toCssWidth;
exports.ConfigProgrammatic = config['default'];
exports.default = Buefy;
