'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A card can contain a header.
 */
function CardHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      textAlign = props.textAlign;

  var classes = (0, _classnames2.default)((0, _lib.useTextAlignProp)(textAlign), 'header', className);
  var rest = (0, _lib.getUnhandledProps)(CardHeader, props);
  var ElementType = (0, _lib.getElementType)(CardHeader, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

CardHeader.handledProps = ['as', 'children', 'className', 'content', 'textAlign'];
CardHeader._meta = {
  name: 'CardHeader',
  parent: 'Card',
  type: _lib.META.TYPES.VIEW
};

CardHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A card header can adjust its text alignment. */
  textAlign: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.TEXT_ALIGNMENTS, 'justified'))
} : {};

exports.default = CardHeader;