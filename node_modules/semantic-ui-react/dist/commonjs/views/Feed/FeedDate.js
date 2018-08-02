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
 * An event or an event summary can contain a date.
 */
function FeedDate(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = (0, _classnames2.default)('date', className);
  var rest = (0, _lib.getUnhandledProps)(FeedDate, props);
  var ElementType = (0, _lib.getElementType)(FeedDate, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

FeedDate.handledProps = ['as', 'children', 'className', 'content'];
FeedDate._meta = {
  name: 'FeedDate',
  parent: 'Feed',
  type: _lib.META.TYPES.VIEW
};

FeedDate.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand
} : {};

exports.default = FeedDate;