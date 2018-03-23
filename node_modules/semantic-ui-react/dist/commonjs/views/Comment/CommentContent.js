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
 * A comment can contain content.
 */
function CommentContent(props) {
  var className = props.className,
      children = props.children,
      content = props.content;

  var classes = (0, _classnames2.default)(className, 'content');
  var rest = (0, _lib.getUnhandledProps)(CommentContent, props);
  var ElementType = (0, _lib.getElementType)(CommentContent, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

CommentContent.handledProps = ['as', 'children', 'className', 'content'];
CommentContent._meta = {
  name: 'CommentContent',
  parent: 'Comment',
  type: _lib.META.TYPES.VIEW
};

CommentContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand
} : {};

exports.default = CommentContent;