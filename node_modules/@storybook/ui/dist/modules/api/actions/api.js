'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jumpToStory = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.ensureKind = ensureKind;
exports.ensureStory = ensureStory;
exports.ensurePanel = ensurePanel;

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _jumpToStory(storyKinds, selectedKind, selectedStory, direction) {
  var flatteredStories = [];
  var currentIndex = -1;

  storyKinds.forEach(function (_ref) {
    var kind = _ref.kind,
        stories = _ref.stories;

    stories.forEach(function (story) {
      flatteredStories.push({ kind: kind, story: story });
      if (kind === selectedKind && story === selectedStory) {
        currentIndex = flatteredStories.length - 1;
      }
    });
  });

  var jumpedStory = flatteredStories[currentIndex + direction];
  if (!jumpedStory) {
    return { selectedKind: selectedKind, selectedStory: selectedStory };
  }

  return {
    selectedKind: jumpedStory.kind,
    selectedStory: jumpedStory.story
  };
}

exports.jumpToStory = _jumpToStory;
function ensureKind(storyKinds, selectedKind) {
  if (!storyKinds) return selectedKind;

  var found = storyKinds.find(function (item) {
    return item.kind === selectedKind;
  });
  if (found) return found.kind;
  // if the selected kind is non-existant, select the first kind
  var kinds = storyKinds.map(function (item) {
    return item.kind;
  });
  return kinds[0];
}

function ensureStory(storyKinds, selectedKind, selectedStory) {
  if (!storyKinds) return selectedStory;

  var kindInfo = storyKinds.find(function (item) {
    return item.kind === selectedKind;
  });
  if (!kindInfo) return null;

  var found = kindInfo.stories.find(function (item) {
    return item === selectedStory;
  });
  if (found) return found;

  // if the selected story is non-existant, select the first story
  return kindInfo.stories[0];
}

function ensurePanel(panels, selectedPanel, currentPanel) {
  if ((0, _keys2.default)(panels).indexOf(selectedPanel) >= 0) return selectedPanel;
  // if the selected panel is non-existant, select the current panel
  // and output to console all available panels
  var logger = console;
  logger.group('Available Panels ID:');
  (0, _keys2.default)(panels).forEach(function (panelID) {
    return logger.log(panelID + ' (' + panels[panelID].title + ')');
  });
  logger.groupEnd('Available Panels ID:');
  return currentPanel;
}

exports.default = {
  setStories: function setStories(_ref2, stories) {
    var clientStore = _ref2.clientStore;

    clientStore.update(function (state) {
      var selectedKind = ensureKind(stories, state.selectedKind);
      var currentSelectedStory = selectedKind === state.selectedKind ? state.selectedStory : null;
      var selectedStory = ensureStory(stories, selectedKind, currentSelectedStory);

      return {
        stories: stories,
        selectedStory: selectedStory,
        selectedKind: selectedKind
      };
    });
  },
  selectStory: function selectStory(_ref3, kind, story) {
    var clientStore = _ref3.clientStore;

    clientStore.update(function (state) {
      var selectedKind = ensureKind(state.stories, kind);
      var selectedStory = ensureStory(state.stories, selectedKind, story);

      return { selectedKind: selectedKind, selectedStory: selectedStory };
    });
  },
  selectInCurrentKind: function selectInCurrentKind(_ref4, story) {
    var clientStore = _ref4.clientStore;

    clientStore.update(function (state) {
      var selectedStory = ensureStory(state.stories, state.selectedKind, story);

      return { selectedStory: selectedStory };
    });
  },
  jumpToStory: function jumpToStory(_ref5, direction) {
    var clientStore = _ref5.clientStore;

    clientStore.update(function (state) {
      return _jumpToStory(state.stories, state.selectedKind, state.selectedStory, direction);
    });
  },
  setOptions: function setOptions(env, options) {
    var clientStore = env.clientStore,
        provider = env.provider;

    clientStore.update(function (state) {
      var newOptions = (0, _lodash2.default)(options, (0, _keys2.default)(state.uiOptions));
      var updatedUiOptions = (0, _extends3.default)({}, state.uiOptions, newOptions);
      var otherOptions = {};
      if ((0, _keys2.default)((0, _lodash2.default)(options, ['selectedAddonPanel'])).length) {
        otherOptions.selectedAddonPanel = ensurePanel(provider.getPanels(), options.selectedAddonPanel, state.selectedAddonPanel);
      }
      return (0, _extends3.default)({ uiOptions: updatedUiOptions }, otherOptions);
    });
  },
  setQueryParams: function setQueryParams(_ref6, customQueryParams) {
    var clientStore = _ref6.clientStore;

    clientStore.update(function (state) {
      var updatedQueryParams = (0, _extends3.default)({}, state.customQueryParams, customQueryParams);

      (0, _keys2.default)(customQueryParams).forEach(function (key) {
        if (updatedQueryParams[key] === null) {
          delete updatedQueryParams[key];
        }
      });

      return {
        customQueryParams: updatedQueryParams
      };
    });
  }
};