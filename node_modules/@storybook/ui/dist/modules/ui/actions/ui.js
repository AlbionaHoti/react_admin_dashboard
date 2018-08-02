'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  setStoryFilter: function setStoryFilter(_ref, filter) {
    var clientStore = _ref.clientStore;

    clientStore.set('storyFilter', filter);
  },
  toggleShortcutsHelp: function toggleShortcutsHelp(_ref2) {
    var clientStore = _ref2.clientStore;

    clientStore.toggle('showShortcutsHelp');
  },
  selectAddonPanel: function selectAddonPanel(_ref3, panelName) {
    var clientStore = _ref3.clientStore;

    clientStore.set('selectedAddonPanel', panelName);
  }
};