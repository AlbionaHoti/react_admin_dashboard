'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Buttons can be grouped.
 */
function ButtonGroup(props) {
  var attached = props.attached,
      basic = props.basic,
      buttons = props.buttons,
      children = props.children,
      className = props.className,
      color = props.color,
      compact = props.compact,
      content = props.content,
      floated = props.floated,
      fluid = props.fluid,
      icon = props.icon,
      inverted = props.inverted,
      labeled = props.labeled,
      negative = props.negative,
      positive = props.positive,
      primary = props.primary,
      secondary = props.secondary,
      size = props.size,
      toggle = props.toggle,
      vertical = props.vertical,
      widths = props.widths;


  var classes = (0, _classnames2.default)('ui', color, size, (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(icon, 'icon'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(labeled, 'labeled'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(primary, 'primary'), (0, _lib.useKeyOnly)(secondary, 'secondary'), (0, _lib.useKeyOnly)(toggle, 'toggle'), (0, _lib.useKeyOnly)(vertical, 'vertical'), (0, _lib.useKeyOrValueAndKey)(attached, 'attached'), (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useWidthProp)(widths), 'buttons', className);
  var rest = (0, _lib.getUnhandledProps)(ButtonGroup, props);
  var ElementType = (0, _lib.getElementType)(ButtonGroup, props);

  if ((0, _isNil3.default)(buttons)) {
    return _react2.default.createElement(
      ElementType,
      (0, _extends3.default)({}, rest, { className: classes }),
      _lib.childrenUtils.isNil(children) ? content : children
    );
  }

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    (0, _map3.default)(buttons, function (button) {
      return _Button2.default.create(button);
    })
  );
}

ButtonGroup.handledProps = ['as', 'attached', 'basic', 'buttons', 'children', 'className', 'color', 'compact', 'content', 'floated', 'fluid', 'icon', 'inverted', 'labeled', 'negative', 'positive', 'primary', 'secondary', 'size', 'toggle', 'vertical', 'widths'];
ButtonGroup._meta = {
  name: 'ButtonGroup',
  parent: 'Button',
  type: _lib.META.TYPES.ELEMENT
};

ButtonGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Groups can be attached to other content. */
  attached: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['left', 'right', 'top', 'bottom'])]),

  /** Groups can be less pronounced. */
  basic: _propTypes2.default.bool,

  /** Array of shorthand Button values. */
  buttons: _lib.customPropTypes.collectionShorthand,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Groups can have a shared color. */
  color: _propTypes2.default.oneOf(_lib.SUI.COLORS),

  /** Groups can reduce their padding to fit into tighter spaces. */
  compact: _propTypes2.default.bool,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Groups can be aligned to the left or right of its container. */
  floated: _propTypes2.default.oneOf(_lib.SUI.FLOATS),

  /** Groups can take the width of their container. */
  fluid: _propTypes2.default.bool,

  /** Groups can be formatted as icons. */
  icon: _propTypes2.default.bool,

  /** Groups can be formatted to appear on dark backgrounds. */
  inverted: _propTypes2.default.bool,

  /** Groups can be formatted as labeled icon buttons. */
  labeled: _propTypes2.default.bool,

  /** Groups can hint towards a negative consequence. */
  negative: _propTypes2.default.bool,

  /** Groups can hint towards a positive consequence. */
  positive: _propTypes2.default.bool,

  /** Groups can be formatted to show different levels of emphasis. */
  primary: _propTypes2.default.bool,

  /** Groups can be formatted to show different levels of emphasis. */
  secondary: _propTypes2.default.bool,

  /** Groups can have different sizes. */
  size: _propTypes2.default.oneOf(_lib.SUI.SIZES),

  /** Groups can be formatted to toggle on and off. */
  toggle: _propTypes2.default.bool,

  /** Groups can be formatted to appear vertically. */
  vertical: _propTypes2.default.bool,

  /** Groups can have their widths divided evenly. */
  widths: _propTypes2.default.oneOf(_lib.SUI.WIDTHS)
} : {};

exports.default = ButtonGroup;