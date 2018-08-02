'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortcutsHelp = exports.Shortcuts = exports.Keys = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.getShortcuts = getShortcuts;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commandStyle = {
  backgroundColor: '#eee',
  padding: '2px 7px',
  borderRadius: 2,
  lineHeight: '36px',
  marginRight: '9px'
};

var h4Style = {
  marginTop: 0,
  textAlign: 'center'
};

var modalStyles = {
  content: {
    left: '50%',
    bottom: 'initial',
    right: 'initial',
    width: 440,
    marginLeft: -220,
    border: 'none',
    overflow: 'visible',
    fontFamily: 'sans-serif',
    fontSize: 14
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.74902)',
    zIndex: 1
  }
};

// manage two separate shortcut keys for
// 'mac' & other (windows, linux) platforms
function getShortcuts(platform) {
  // if it is mac platform
  if (platform && platform.indexOf('mac') !== -1) {
    return [{ name: 'Show Search Box', keys: ['⌘ ⇧ O', '⌃ ⇧ O'] }, { name: 'Toggle Addon panel position', keys: ['⌘ ⇧ G', '⌃ ⇧ G'] }, { name: 'Toggle Fullscreen Mode', keys: ['⌘ ⇧ F', '⌃ ⇧ F'] }, { name: 'Toggle Stories Panel', keys: ['⌘ ⇧ X', '⌃ ⇧ X'] }, { name: 'Toggle Addon panel', keys: ['⌘ ⇧ C', '⌃ ⇧ C'] }, { name: 'Next Story', keys: ['⌘ ⇧ →', '⌃ ⇧ →'] }, { name: 'Previous Story', keys: ['⌘ ⇧ ←', '⌃ ⇧ ←'] }];
  }

  return [{ name: 'Show Search Box', keys: ['Ctrl + Shift + O'] }, { name: 'Toggle Addon panel position', keys: ['Ctrl + Shift + G'] }, { name: 'Toggle Fullscreen Mode', keys: ['Ctrl + Shift + F'] }, { name: 'Toggle Stories Panel', keys: ['Ctrl + Shift + X'] }, { name: 'Toggle Addon panel', keys: ['Ctrl + Shift + C'] }, { name: 'Next Story', keys: ['Ctrl + Shift + →'] }, { name: 'Previous Story', keys: ['Ctrl + Shift + ←'] }];
}

var Keys = exports.Keys = function Keys(_ref) {
  var shortcutKeys = _ref.shortcutKeys;

  // if we have only one key combination for a shortcut
  if (shortcutKeys.length === 1) {
    return _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        shortcutKeys[0]
      )
    );
  }

  // if we have multiple key combinations for a shortcut
  var keys = shortcutKeys.map(function (key, index, arr) {
    return _react2.default.createElement(
      'span',
      { key: key },
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        key
      ),
      arr.length - 1 !== index ? _react2.default.createElement(
        'span',
        null,
        '/ \xA0'
      ) : ''
    );
  });

  return _react2.default.createElement(
    'span',
    null,
    keys
  );
};

Keys.propTypes = {
  shortcutKeys: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired
};

var Shortcuts = exports.Shortcuts = function Shortcuts(_ref2) {
  var appShortcuts = _ref2.appShortcuts;

  var shortcuts = appShortcuts.map(function (shortcut) {
    return _react2.default.createElement(
      'div',
      { key: shortcut.name },
      _react2.default.createElement(Keys, { shortcutKeys: shortcut.keys }),
      shortcut.name
    );
  });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      { style: h4Style },
      'Keyboard Shortcuts'
    ),
    shortcuts
  );
};

Shortcuts.propTypes = {
  appShortcuts: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    keys: _propTypes2.default.array
  })).isRequired
};

// eslint-disable-next-line react/prefer-stateless-function

var ShortcutsHelp = exports.ShortcutsHelp = function (_Component) {
  (0, _inherits3.default)(ShortcutsHelp, _Component);

  function ShortcutsHelp() {
    (0, _classCallCheck3.default)(this, ShortcutsHelp);
    return (0, _possibleConstructorReturn3.default)(this, (ShortcutsHelp.__proto__ || (0, _getPrototypeOf2.default)(ShortcutsHelp)).apply(this, arguments));
  }

  (0, _createClass3.default)(ShortcutsHelp, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          onClose = _props.onClose,
          platform = _props.platform;

      return _react2.default.createElement(
        _reactModal2.default,
        {
          isOpen: isOpen,
          onRequestClose: onClose,
          style: modalStyles,
          contentLabel: 'Shortcuts'
        },
        _react2.default.createElement(Shortcuts, { appShortcuts: getShortcuts(platform) })
      );
    }
  }]);
  return ShortcutsHelp;
}(_react.Component);

ShortcutsHelp.propTypes = {
  isOpen: _propTypes2.default.bool,
  onClose: _propTypes2.default.func,
  platform: _propTypes2.default.string.isRequired
};
ShortcutsHelp.defaultProps = {
  isOpen: false,
  onClose: function onClose() {}
};

exports.default = ShortcutsHelp;