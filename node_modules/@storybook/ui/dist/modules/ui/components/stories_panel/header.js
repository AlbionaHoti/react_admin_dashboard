'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@storybook/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapperStyle = {
  background: '#F7F7F7',
  marginBottom: 10,
  display: 'flex'
};

var headingStyle = (0, _extends3.default)({}, _components.baseFonts, {
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  fontSize: '12px',
  fontWeight: 'bolder',
  color: '#828282',
  textAlign: 'center',
  cursor: 'pointer',
  padding: '5px',
  margin: 0,
  overflow: 'hidden'
});

var shortcutIconStyle = {
  textTransform: 'uppercase',
  fontSize: 12,
  fontWeight: 'bolder',
  color: 'rgb(130, 130, 130)',
  border: '1px solid rgb(193, 193, 193)',
  textAlign: 'center',
  borderRadius: 2,
  cursor: 'pointer',
  display: 'inlineBlock',
  padding: 0,
  margin: '0 0 0 5px',
  backgroundColor: 'inherit',
  outline: 0,
  width: 30,
  flexShrink: 0
};

var linkStyle = {
  textDecoration: 'none',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid rgb(193, 193, 193)',
  borderRadius: 2
};

var Header = function Header(_ref) {
  var openShortcutsHelp = _ref.openShortcutsHelp,
      name = _ref.name,
      url = _ref.url;
  return _react2.default.createElement(
    'div',
    { style: wrapperStyle },
    _react2.default.createElement(
      'a',
      { style: linkStyle, href: url, target: '_blank', rel: 'noopener noreferrer' },
      _react2.default.createElement(
        'h3',
        { style: headingStyle },
        name
      )
    ),
    _react2.default.createElement(
      'button',
      { style: shortcutIconStyle, onClick: openShortcutsHelp },
      '\u2318'
    )
  );
};

Header.defaultProps = {
  openShortcutsHelp: null,
  name: '',
  url: ''
};

Header.propTypes = {
  openShortcutsHelp: _propTypes2.default.func,
  name: _propTypes2.default.string,
  url: _propTypes2.default.string
};

exports.default = Header;