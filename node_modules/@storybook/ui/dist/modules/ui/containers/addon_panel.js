'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapper = mapper;

var _addon_panel = require('../components/addon_panel');

var _addon_panel2 = _interopRequireDefault(_addon_panel);

var _gen_podda_loader = require('../libs/gen_podda_loader');

var _gen_podda_loader2 = _interopRequireDefault(_gen_podda_loader);

var _compose = require('../../../compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapper(state, props, _ref) {
  var context = _ref.context,
      actions = _ref.actions;

  var panels = context().provider.getPanels();
  var actionMap = actions();
  var selectedPanel = state.selectedAddonPanel;

  return {
    panels: panels,
    selectedPanel: selectedPanel,
    onPanelSelect: actionMap.ui.selectAddonPanel
  };
}

exports.default = (0, _compose2.default)((0, _gen_podda_loader2.default)(mapper))(_addon_panel2.default);