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
 * Several icons can be used together as a group.
 */
function IconGroup(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      size = props.size;

  var classes = (0, _classnames2.default)(size, 'icons', className);
  var rest = (0, _lib.getUnhandledProps)(IconGroup, props);
  var ElementType = (0, _lib.getElementType)(IconGroup, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

IconGroup.handledProps = ['as', 'children', 'className', 'content', 'size'];
IconGroup._meta = {
  name: 'IconGroup',
  parent: 'Icon',
  type: _lib.META.TYPES.ELEMENT
};

IconGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Size of the icon group. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'medium'))
} : {};

IconGroup.defaultProps = {
  as: 'i'
};

exports.default = IconGroup;