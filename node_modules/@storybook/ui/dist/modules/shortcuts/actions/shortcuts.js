'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.keyEventToOptions = keyEventToOptions;

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

var _key_events = require('../../../libs/key_events');

var _actions = require('../../api/actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deprecationMessage = function deprecationMessage(oldName, newName) {
  return 'The ' + oldName + ' option has been renamed to ' + newName + ' and will not be available in the next major Storybook release. Please update your config.';
};

function keyEventToOptions(currentOptions, event) {
  switch (event) {
    case _key_events.features.FULLSCREEN:
      return { goFullScreen: !currentOptions.goFullScreen };
    case _key_events.features.ADDON_PANEL:
      return { showAddonPanel: !currentOptions.showAddonPanel };
    case _key_events.features.STORIES_PANEL:
      return { showStoriesPanel: !currentOptions.showStoriesPanel };
    case _key_events.features.SHOW_SEARCH:
      return { showSearchBox: true };
    case _key_events.features.ADDON_PANEL_IN_RIGHT:
      return { addonPanelInRight: !currentOptions.addonPanelInRight };
    default:
      return {};
  }
}

var renamedOptions = {
  showLeftPanel: 'showStoriesPanel',
  showDownPanel: 'showAddonPanel',
  downPanelInRight: 'addonPanelInRight'
};

exports.default = {
  handleEvent: function handleEvent(context, event) {
    var clientStore = context.clientStore;

    switch (event) {
      case _key_events.features.NEXT_STORY:
        _actions2.default.api.jumpToStory(context, 1);
        break;
      case _key_events.features.PREV_STORY:
        _actions2.default.api.jumpToStory(context, -1);
        break;
      default:
        clientStore.update(function (state) {
          var newOptions = keyEventToOptions(state.shortcutOptions, event);
          var updatedOptions = (0, _extends4.default)({}, state.shortcutOptions, newOptions);

          return {
            shortcutOptions: updatedOptions
          };
        });
    }
  },
  setOptions: function setOptions(_ref, options) {
    var clientStore = _ref.clientStore;

    clientStore.update(function (state) {
      var updatedOptions = (0, _extends4.default)({}, state.shortcutOptions, (0, _lodash2.default)(options, (0, _keys2.default)(state.shortcutOptions)));

      var withNewNames = (0, _keys2.default)(renamedOptions).reduce(function (acc, oldName) {
        var newName = renamedOptions[oldName];

        if (oldName in options && !(newName in options)) {
          if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.warn(deprecationMessage(oldName, newName));
          }

          return (0, _extends4.default)({}, acc, (0, _defineProperty3.default)({}, newName, options[oldName]));
        }

        return acc;
      }, updatedOptions);

      return {
        shortcutOptions: withNewNames
      };
    });
  }
};