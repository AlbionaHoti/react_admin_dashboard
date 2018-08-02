'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Button groups can contain conditionals.
 */
function ButtonOr(props) {
  var className = props.className,
      text = props.text;

  var classes = (0, _classnames2.default)('or', className);
  var rest = (0, _lib.getUnhandledProps)(ButtonOr, props);
  var ElementType = (0, _lib.getElementType)(ButtonOr, props);

  return _react2.default.createElement(ElementType, (0, _extends3.default)({}, rest, { className: classes, 'data-text': text }));
}

ButtonOr.handledProps = ['as', 'className', 'text'];
ButtonOr._meta = {
  name: 'ButtonOr',
  parent: 'Button',
  type: _lib.META.TYPES.ELEMENT
};

ButtonOr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
} : {};

exports.default = ButtonOr;