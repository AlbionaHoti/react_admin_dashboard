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

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A dropdown menu can contain a header.
 */
function DropdownHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon;


  var classes = (0, _classnames2.default)('header', className);
  var rest = (0, _lib.getUnhandledProps)(DropdownHeader, props);
  var ElementType = (0, _lib.getElementType)(DropdownHeader, props);

  if (!_lib.childrenUtils.isNil(children)) return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    children
  );

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _Icon2.default.create(icon),
    content
  );
}

DropdownHeader.handledProps = ['as', 'children', 'className', 'content', 'icon'];
DropdownHeader._meta = {
  name: 'DropdownHeader',
  parent: 'Dropdown',
  type: _lib.META.TYPES.MODULE
};

DropdownHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function) */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Shorthand for Icon. */
  icon: _lib.customPropTypes.itemShorthand
} : {};

DropdownHeader.create = (0, _lib.createShorthandFactory)(DropdownHeader, function (content) {
  return { content: content };
});

exports.default = DropdownHeader;