'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.getUrlState = getUrlState;
exports.changeUrl = changeUrl;
exports.updateStore = updateStore;
exports.handleInitialUrl = handleInitialUrl;

exports.default = function (_ref, actions) {
  var clientStore = _ref.clientStore;

  // handle initial URL
  handleInitialUrl(actions, _global.location);

  var data = clientStore.getAll();
  var prevKind = data.selectedKind;
  var prevStory = data.selectedStory;

  // subscribe to clientStore and change the URL
  clientStore.subscribe(function () {
    var _clientStore$getAll = clientStore.getAll(),
        selectedKind = _clientStore$getAll.selectedKind,
        selectedStory = _clientStore$getAll.selectedStory;
    // use pushState only when a new story is selected


    var usePush = prevKind != null && prevStory != null && (selectedKind !== prevKind || selectedStory !== prevStory);
    changeUrl(clientStore, usePush);
    prevKind = selectedKind;
    prevStory = selectedStory;
  });
  changeUrl(clientStore);

  // handle back button
  _global.window.onpopstate = function () {
    config.insidePopState = true;
    handleInitialUrl(actions, _global.location);
    config.insidePopState = false;
  };
};

var _global = require('global');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = exports.config = {
  insidePopState: false
};

function getUrlState(data) {
  var selectedKind = data.selectedKind,
      selectedStory = data.selectedStory,
      customQueryParams = data.customQueryParams;
  var _data$shortcutOptions = data.shortcutOptions,
      full = _data$shortcutOptions.goFullScreen,
      addons = _data$shortcutOptions.showAddonPanel,
      stories = _data$shortcutOptions.showStoriesPanel,
      panelRight = _data$shortcutOptions.addonPanelInRight;
  var addonPanel = data.selectedAddonPanel;


  var urlObj = (0, _extends3.default)({}, customQueryParams, {
    selectedKind: selectedKind,
    selectedStory: selectedStory,
    full: Number(full),
    addons: Number(addons),
    stories: Number(stories),
    panelRight: Number(panelRight),
    addonPanel: addonPanel
  });

  var url = '?' + _qs2.default.stringify(urlObj);

  return (0, _extends3.default)({}, urlObj, {
    full: full,
    addons: addons,
    stories: stories,
    panelRight: panelRight,
    url: url
  });
}

function changeUrl(clientStore, usePush) {
  // Do not change the URL if we are inside a popState event.
  if (config.insidePopState) return;

  var data = clientStore.getAll();
  if (!data.selectedKind) return;

  var state = getUrlState(data);
  _global.history[usePush ? 'pushState' : 'replaceState'](state, '', state.url);
}

function updateStore(queryParams, actions) {
  var selectedKind = queryParams.selectedKind,
      selectedStory = queryParams.selectedStory,
      _queryParams$full = queryParams.full,
      full = _queryParams$full === undefined ? 0 : _queryParams$full,
      _queryParams$down = queryParams.down,
      down = _queryParams$down === undefined ? 1 : _queryParams$down,
      _queryParams$addons = queryParams.addons,
      addons = _queryParams$addons === undefined ? down : _queryParams$addons,
      _queryParams$left = queryParams.left,
      left = _queryParams$left === undefined ? 1 : _queryParams$left,
      _queryParams$stories = queryParams.stories,
      stories = _queryParams$stories === undefined ? left : _queryParams$stories,
      _queryParams$panelRig = queryParams.panelRight,
      panelRight = _queryParams$panelRig === undefined ? 0 : _queryParams$panelRig,
      downPanel = queryParams.downPanel,
      _queryParams$addonPan = queryParams.addonPanel,
      addonPanel = _queryParams$addonPan === undefined ? downPanel : _queryParams$addonPan,
      customQueryParams = (0, _objectWithoutProperties3.default)(queryParams, ['selectedKind', 'selectedStory', 'full', 'down', 'addons', 'left', 'stories', 'panelRight', 'downPanel', 'addonPanel']);


  if (selectedKind) {
    actions.api.selectStory(selectedKind, selectedStory);
  }

  actions.shortcuts.setOptions({
    goFullScreen: Boolean(Number(full)),
    showAddonPanel: Boolean(Number(addons)),
    showStoriesPanel: Boolean(Number(stories)),
    addonPanelInRight: Boolean(Number(panelRight))
  });

  if (addonPanel) {
    actions.ui.selectAddonPanel(addonPanel);
  }
  actions.api.setQueryParams(customQueryParams);
}

function handleInitialUrl(actions, l) {
  var queryString = l.search.substring(1);
  if (!queryString || queryString === '') return;

  var parsedQs = _qs2.default.parse(queryString);
  updateStore(parsedQs, actions);
}