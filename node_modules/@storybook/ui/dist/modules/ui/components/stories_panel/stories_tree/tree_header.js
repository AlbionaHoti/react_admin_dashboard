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

var headingStyle = (0, _extends3.default)({}, _components.baseFonts, {
  textTransform: 'uppercase',
  letterSpacing: '1.2px',
  fontSize: '12px',
  fontWeight: 'normal',
  color: '#828282',
  textAlign: 'left',
  padding: '5px 13px',
  margin: 0,
  marginTop: 20,
  overflow: 'hidden'
});

var TreeHeader = function TreeHeader(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'h4',
    { style: headingStyle },
    children
  );
};

TreeHeader.propTypes = {
  children: _propTypes2.default.string.isRequired
};

exports.default = TreeHeader;