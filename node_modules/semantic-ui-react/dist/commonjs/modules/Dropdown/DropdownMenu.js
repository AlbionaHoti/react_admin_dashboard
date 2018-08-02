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
 * A dropdown menu can contain a menu.
 */
function DropdownMenu(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      direction = props.direction,
      open = props.open,
      scrolling = props.scrolling;

  var classes = (0, _classnames2.default)(direction, (0, _lib.useKeyOnly)(open, 'visible'), (0, _lib.useKeyOnly)(scrolling, 'scrolling'), 'menu transition', className);
  var rest = (0, _lib.getUnhandledProps)(DropdownMenu, props);
  var ElementType = (0, _lib.getElementType)(DropdownMenu, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

DropdownMenu.handledProps = ['as', 'children', 'className', 'content', 'direction', 'open', 'scrolling'];
DropdownMenu._meta = {
  name: 'DropdownMenu',
  parent: 'Dropdown',
  type: _lib.META.TYPES.MODULE
};

DropdownMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A dropdown menu can open to the left or to the right. */
  direction: _propTypes2.default.oneOf(['left', 'right']),

  /** Whether or not the dropdown menu is displayed. */
  open: _propTypes2.default.bool,

  /** A dropdown menu can scroll. */
  scrolling: _propTypes2.default.bool
} : {};

exports.default = DropdownMenu;