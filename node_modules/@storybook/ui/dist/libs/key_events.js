'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.features = undefined;
exports.isModifierPressed = isModifierPressed;
exports.default = handle;
exports.handleKeyboardShortcuts = handleKeyboardShortcuts;

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var features = exports.features = {
  FULLSCREEN: 'FULLSCREEN',
  ADDON_PANEL: 'ADDON_PANEL',
  STORIES_PANEL: 'STORIES_PANEL',
  SHORTCUTS_HELP: 'SHORTCUTS_HELP',
  ESCAPE: 'ESCAPE',
  NEXT_STORY: 'NEXT_STORY',
  PREV_STORY: 'PREV_STORY',
  SHOW_SEARCH: 'SHOW_SEARCH',
  ADDON_PANEL_IN_RIGHT: 'ADDON_PANEL_IN_RIGHT'
}; /* eslint-disable no-fallthrough */
function isModifierPressed(e) {
  return (e.ctrlKey || e.keyCode === 91 || e.metaKey) && e.shiftKey;
}

function focusInInput(e) {
  return (/input|textarea/i.test(e.target.tagName) || e.target.getAttribute('contenteditable') !== null
  );
}

function handle(e) {
  if (e.keyCode === (0, _keycode2.default)('escape')) {
    // We don't need to preventDefault escape.
    // Just getting the event is enough for us.
    return features.ESCAPE;
  }
  if (focusInInput(e)) {
    // if we're focused in an element that accepts input,
    // then we shouldn't perform a shortcut action
    return false;
  }

  if (!isModifierPressed(e)) return false;

  switch (e.keyCode) {
    case (0, _keycode2.default)('F'):
      e.preventDefault();
      return features.FULLSCREEN;
    case (0, _keycode2.default)('C'):
    // backward-compatibility
    case (0, _keycode2.default)('D'):
      e.preventDefault();
      return features.ADDON_PANEL;
    case (0, _keycode2.default)('X'):
    // backward-compatibility
    case (0, _keycode2.default)('L'):
      e.preventDefault();
      return features.STORIES_PANEL;
    case (0, _keycode2.default)('right'):
      e.preventDefault();
      return features.NEXT_STORY;
    case (0, _keycode2.default)('left'):
      e.preventDefault();
      return features.PREV_STORY;
    case (0, _keycode2.default)('O'):
    // backward-compatibility
    case (0, _keycode2.default)('P'):
      e.preventDefault();
      return features.SHOW_SEARCH;
    case (0, _keycode2.default)('G'):
    // backward-compatibility
    case (0, _keycode2.default)('J'):
      e.preventDefault();
      return features.ADDON_PANEL_IN_RIGHT;
    default:
      return false;
  }
}

// window.keydown handler to dispatch a key event to the preview channel
function handleKeyboardShortcuts(channel) {
  return function (event) {
    var parsedEvent = handle(event);
    if (parsedEvent) {
      channel.emit('applyShortcut', { event: parsedEvent });
    }
  };
}