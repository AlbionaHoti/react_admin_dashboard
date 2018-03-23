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
 * A label can be grouped.
 */
function LabelGroup(props) {
  var children = props.children,
      circular = props.circular,
      className = props.className,
      color = props.color,
      content = props.content,
      size = props.size,
      tag = props.tag;


  var classes = (0, _classnames2.default)('ui', color, size, (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(tag, 'tag'), 'labels', className);
  var rest = (0, _lib.getUnhandledProps)(LabelGroup, props);
  var ElementType = (0, _lib.getElementType)(LabelGroup, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

LabelGroup.handledProps = ['as', 'children', 'circular', 'className', 'color', 'content', 'size', 'tag'];
LabelGroup._meta = {
  name: 'LabelGroup',
  parent: 'Label',
  type: _lib.META.TYPES.ELEMENT
};

LabelGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Labels can share shapes. */
  circular: _propTypes2.default.bool,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Label group can share colors together. */
  color: _propTypes2.default.oneOf(_lib.SUI.COLORS),

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Label group can share sizes together. */
  size: _propTypes2.default.oneOf(_lib.SUI.SIZES),

  /** Label group can share tag formatting. */
  tag: _propTypes2.default.bool
} : {};

exports.default = LabelGroup;