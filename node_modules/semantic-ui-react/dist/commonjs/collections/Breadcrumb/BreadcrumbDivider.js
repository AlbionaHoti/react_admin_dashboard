'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

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
 * A divider sub-component for Breadcrumb component.
 */
function BreadcrumbDivider(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon;


  var classes = (0, _classnames2.default)('divider', className);
  var rest = (0, _lib.getUnhandledProps)(BreadcrumbDivider, props);
  var ElementType = (0, _lib.getElementType)(BreadcrumbDivider, props);

  if (!(0, _isNil3.default)(icon)) return _Icon2.default.create(icon, { defaultProps: (0, _extends3.default)({}, rest, { className: classes }) });
  if (!(0, _isNil3.default)(content)) return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    content
  );

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? '/' : children
  );
}

BreadcrumbDivider.handledProps = ['as', 'children', 'className', 'content', 'icon'];
BreadcrumbDivider._meta = {
  name: 'BreadcrumbDivider',
  type: _lib.META.TYPES.COLLECTION,
  parent: 'Breadcrumb'
};

BreadcrumbDivider.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon: _lib.customPropTypes.itemShorthand
} : {};

BreadcrumbDivider.create = (0, _lib.createShorthandFactory)(BreadcrumbDivider, function (icon) {
  return { icon: icon };
});

exports.default = BreadcrumbDivider;