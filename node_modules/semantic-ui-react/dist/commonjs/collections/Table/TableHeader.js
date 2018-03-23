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
 * A table can have a header.
 */
function TableHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      fullWidth = props.fullWidth;

  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(fullWidth, 'full-width'), className);
  var rest = (0, _lib.getUnhandledProps)(TableHeader, props);
  var ElementType = (0, _lib.getElementType)(TableHeader, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

TableHeader.handledProps = ['as', 'children', 'className', 'content', 'fullWidth'];
TableHeader._meta = {
  name: 'TableHeader',
  type: _lib.META.TYPES.COLLECTION,
  parent: 'Table'
};

TableHeader.defaultProps = {
  as: 'thead'
};

TableHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth: _propTypes2.default.bool
} : {};

exports.default = TableHeader;