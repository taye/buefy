import Plugin from './autocomplete.js';
export { default as Autocomplete } from './autocomplete.js';
import Plugin$1 from './button.js';
export { default as Button } from './button.js';
import Plugin$2 from './carousel.js';
export { default as Carousel } from './carousel.js';
import Plugin$3 from './checkbox.js';
export { default as Checkbox } from './checkbox.js';
import Plugin$5 from './collapse.js';
export { default as Collapse } from './collapse.js';
import Plugin$4 from './clockpicker.js';
export { default as Clockpicker } from './clockpicker.js';
import Plugin$6 from './datepicker.js';
export { default as Datepicker } from './datepicker.js';
import Plugin$7 from './datetimepicker.js';
export { default as Datetimepicker } from './datetimepicker.js';
import Plugin$8 from './dialog.js';
export { default as Dialog, DialogProgrammatic } from './dialog.js';
import Plugin$9 from './dropdown.js';
export { default as Dropdown } from './dropdown.js';
import Plugin$a from './field.js';
export { default as Field } from './field.js';
import Plugin$b from './icon.js';
export { default as Icon } from './icon.js';
import Plugin$c from './image.js';
export { default as Image } from './image.js';
import Plugin$d from './input.js';
export { default as Input } from './input.js';
import Plugin$e from './loading.js';
export { default as Loading, LoadingProgrammatic } from './loading.js';
import Plugin$f from './menu.js';
export { default as Menu } from './menu.js';
import Plugin$g from './message.js';
export { default as Message } from './message.js';
import Plugin$h from './modal.js';
export { default as Modal, ModalProgrammatic } from './modal.js';
import Plugin$j from './notification.js';
export { default as Notification, NotificationProgrammatic } from './notification.js';
import Plugin$i from './navbar.js';
export { default as Navbar } from './navbar.js';
import Plugin$k from './numberinput.js';
export { default as Numberinput } from './numberinput.js';
import Plugin$l from './pagination.js';
export { default as Pagination } from './pagination.js';
import Plugin$m from './progress.js';
export { default as Progress } from './progress.js';
import Plugin$n from './radio.js';
export { default as Radio } from './radio.js';
import Plugin$o from './rate.js';
export { default as Rate } from './rate.js';
import Plugin$p from './select.js';
export { default as Select } from './select.js';
import Plugin$q from './skeleton.js';
export { default as Skeleton } from './skeleton.js';
import Plugin$r from './sidebar.js';
export { default as Sidebar } from './sidebar.js';
import Plugin$s from './slider.js';
export { default as Slider } from './slider.js';
import Plugin$t from './snackbar.js';
export { default as Snackbar, SnackbarProgrammatic } from './snackbar.js';
import Plugin$u from './steps.js';
export { default as Steps } from './steps.js';
import Plugin$v from './switch.js';
export { default as Switch } from './switch.js';
import Plugin$w from './table.js';
export { default as Table } from './table.js';
import Plugin$x from './tabs.js';
export { default as Tabs } from './tabs.js';
import Plugin$y from './tag.js';
export { default as Tag } from './tag.js';
import Plugin$z from './taginput.js';
export { default as Taginput } from './taginput.js';
import Plugin$A from './timepicker.js';
export { default as Timepicker } from './timepicker.js';
import Plugin$B from './toast.js';
export { default as Toast, ToastProgrammatic } from './toast.js';
import Plugin$C from './tooltip.js';
export { default as Tooltip } from './tooltip.js';
import Plugin$D from './upload.js';
export { default as Upload } from './upload.js';
import { merge } from './helpers.js';
export { bound, createAbsoluteElement, createNewEvent, escapeRegExpChars, getMonthNames, getSlot, getValueByPath, getWeekdayNames, hasFlag, indexOf, isCustomElement, isDefined, isMobile, isVueComponent, isWebpSupported, matchWithGroups, merge, mod, multiColumnSort, removeElement, sign, toCssWidth } from './helpers.js';
import { s as setVueInstance, a as setOptions, c as config } from './config-63b70aae.js';
import { r as registerComponentProgrammatic, u as use } from './plugins-a0a180cf.js';
import ConfigComponent from './config.js';
export { default as ConfigProgrammatic } from './config.js';
import './Autocomplete-0fa0eb9a.js';
import './_rollupPluginBabelHelpers-0979e6ce.js';
import './FormElementMixin-3605f28d.js';
import './Input-a74a428d.js';
import './Icon-9c398a60.js';
import 'vue';
import './InjectedChildMixin-9132fdb9.js';
import './Checkbox-449b40e8.js';
import './CheckRadioMixin-e726a83c.js';
import './TimepickerMixin-dd9933e7.js';
import './DropdownItem-ed80df00.js';
import './trapFocus-d909e804.js';
import './Field-8552a3af.js';
import './Datepicker-6625a83d.js';
import './Select-2baea3c2.js';
import './Timepicker-7175379d.js';
import './Modal-e2b69496.js';
import './Loading-70cc889f.js';
import './ssr-44a76b0e.js';
import './MessageMixin-0e6eb7c0.js';
import './NoticeMixin-a83d413b.js';
import './Pagination-04927382.js';
import './Tooltip-7565cd0f.js';
import './TabbedChildMixin-c3a876bc.js';
import './SlotComponent-07d8e7a2.js';
import './Tag-c0095963.js';

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Autocomplete: Plugin,
    Button: Plugin$1,
    Carousel: Plugin$2,
    Checkbox: Plugin$3,
    Clockpicker: Plugin$4,
    Collapse: Plugin$5,
    Datepicker: Plugin$6,
    Datetimepicker: Plugin$7,
    Dialog: Plugin$8,
    Dropdown: Plugin$9,
    Field: Plugin$a,
    Icon: Plugin$b,
    Image: Plugin$c,
    Input: Plugin$d,
    Loading: Plugin$e,
    Menu: Plugin$f,
    Message: Plugin$g,
    Modal: Plugin$h,
    Navbar: Plugin$i,
    Notification: Plugin$j,
    Numberinput: Plugin$k,
    Pagination: Plugin$l,
    Progress: Plugin$m,
    Radio: Plugin$n,
    Rate: Plugin$o,
    Select: Plugin$p,
    Skeleton: Plugin$q,
    Sidebar: Plugin$r,
    Slider: Plugin$s,
    Snackbar: Plugin$t,
    Steps: Plugin$u,
    Switch: Plugin$v,
    Table: Plugin$w,
    Tabs: Plugin$x,
    Tag: Plugin$y,
    Taginput: Plugin$z,
    Timepicker: Plugin$A,
    Toast: Plugin$B,
    Tooltip: Plugin$C,
    Upload: Plugin$D
});

var Buefy = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    setVueInstance(Vue); // Options

    setOptions(merge(config, options, true)); // Components

    for (var componentKey in components) {
      Vue.use(components[componentKey]);
    } // Config component


    registerComponentProgrammatic(Vue, 'config', ConfigComponent);
  }
};
use(Buefy);

export default Buefy;
