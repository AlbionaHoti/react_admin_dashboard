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

var _CommentAction = require('./CommentAction');

var _CommentAction2 = _interopRequireDefault(_CommentAction);

var _CommentActions = require('./CommentActions');

var _CommentActions2 = _interopRequireDefault(_CommentActions);

var _CommentAuthor = require('./CommentAuthor');

var _CommentAuthor2 = _interopRequireDefault(_CommentAuthor);

var _CommentAvatar = require('./CommentAvatar');

var _CommentAvatar2 = _interopRequireDefault(_CommentAvatar);

var _CommentContent = require('./CommentContent');

var _CommentContent2 = _interopRequireDefault(_CommentContent);

var _CommentGroup = require('./CommentGroup');

var _CommentGroup2 = _interopRequireDefault(_CommentGroup);

var _CommentMetadata = require('./CommentMetadata');

var _CommentMetadata2 = _interopRequireDefault(_CommentMetadata);

var _CommentText = require('./CommentText');

var _CommentText2 = _interopRequireDefault(_CommentText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A comment displays user feedback to site content.
 */
function Comment(props) {
  var className = props.className,
      children = props.children,
      collapsed = props.collapsed,
      content = props.content;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(collapsed, 'collapsed'), 'comment', className);
  var rest = (0, _lib.getUnhandledProps)(Comment, props);
  var ElementType = (0, _lib.getElementType)(Comment, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

Comment.handledProps = ['as', 'children', 'className', 'collapsed', 'content'];
Comment._meta = {
  name: 'Comment',
  type: _lib.META.TYPES.VIEW
};

Comment.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Comment can be collapsed, or hidden from view. */
  collapsed: _propTypes2.default.bool,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand
} : {};

Comment.Author = _CommentAuthor2.default;
Comment.Action = _CommentAction2.default;
Comment.Actions = _CommentActions2.default;
Comment.Avatar = _CommentAvatar2.default;
Comment.Content = _CommentContent2.default;
Comment.Group = _CommentGroup2.default;
Comment.Metadata = _CommentMetadata2.default;
Comment.Text = _CommentText2.default;

exports.default = Comment;