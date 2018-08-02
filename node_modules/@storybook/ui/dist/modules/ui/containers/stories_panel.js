'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapper = undefined;

var _stories_panel = require('../components/stories_panel');

var _stories_panel2 = _interopRequireDefault(_stories_panel);

var _filters = require('../libs/filters');

var filters = _interopRequireWildcard(_filters);

var _gen_podda_loader = require('../libs/gen_podda_loader');

var _gen_podda_loader2 = _interopRequireDefault(_gen_podda_loader);

var _compose = require('../../../compose');

var _compose2 = _interopRequireDefault(_compose);

var _hierarchy = require('../libs/hierarchy');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapper = exports.mapper = function mapper(state, props, _ref) {
  var actions = _ref.actions;

  var actionMap = actions();

  var stories = state.stories,
      selectedKind = state.selectedKind,
      selectedStory = state.selectedStory,
      uiOptions = state.uiOptions,
      storyFilter = state.storyFilter;
  var name = uiOptions.name,
      url = uiOptions.url,
      sortStoriesByKind = uiOptions.sortStoriesByKind,
      hierarchySeparator = uiOptions.hierarchySeparator,
      hierarchyRootSeparator = uiOptions.hierarchyRootSeparator,
      sidebarAnimations = uiOptions.sidebarAnimations;


  var preparedStories = (0, _hierarchy.prepareStoriesForHierarchy)(stories, hierarchySeparator, hierarchyRootSeparator);

  var filteredStories = filters.storyFilter(preparedStories, storyFilter, selectedKind, selectedStory, sortStoriesByKind);

  var storiesHierarchies = (0, _hierarchy.createHierarchies)(filteredStories);

  var _resolveStoryHierarch = (0, _hierarchy.resolveStoryHierarchyRoots)(selectedKind, hierarchyRootSeparator),
      storyName = _resolveStoryHierarch.storyName;

  var selectedHierarchy = (0, _hierarchy.resolveStoryHierarchy)(storyName, hierarchySeparator);

  return {
    storiesHierarchies: storiesHierarchies,
    selectedKind: selectedKind,
    selectedStory: selectedStory,
    selectedHierarchy: selectedHierarchy,
    onSelectStory: actionMap.api.selectStory,

    storyFilter: storyFilter,
    onStoryFilter: actionMap.ui.setStoryFilter,

    openShortcutsHelp: actionMap.ui.toggleShortcutsHelp,
    sidebarAnimations: sidebarAnimations,
    name: name,
    url: url
  };
};

exports.default = (0, _compose2.default)((0, _gen_podda_loader2.default)(mapper))(_stories_panel2.default);