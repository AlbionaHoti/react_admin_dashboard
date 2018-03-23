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
 * Comments can be grouped.
 */
function CommentGroup(props) {
  var className = props.className,
      children = props.children,
      collapsed = props.collapsed,
      content = props.content,
      minimal = props.minimal,
      size = props.size,
      threaded = props.threaded;


  var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(collapsed, 'collapsed'), (0, _lib.useKeyOnly)(minimal, 'minimal'), (0, _lib.useKeyOnly)(threaded, 'threaded'), 'comments', className);
  var rest = (0, _lib.getUnhandledProps)(CommentGroup, props);
  var ElementType = (0, _lib.getElementType)(CommentGroup, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

CommentGroup.handledProps = ['as', 'children', 'className', 'collapsed', 'content', 'minimal', 'size', 'threaded'];
CommentGroup._meta = {
  name: 'CommentGroup',
  parent: 'Comment',
  type: _lib.META.TYPES.VIEW
};

CommentGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Comments can be collapsed, or hidden from view. */
  collapsed: _propTypes2.default.bool,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Comments can hide extra information unless a user shows intent to interact with a comment. */
  minimal: _propTypes2.default.bool,

  /** Comments can have different sizes. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'medium')),

  /** A comment list can be threaded to showing the relationship between conversations. */
  threaded: _propTypes2.default.bool
} : {};

exports.default = CommentGroup;