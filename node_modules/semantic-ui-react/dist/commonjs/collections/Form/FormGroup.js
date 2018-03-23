'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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
 * A set of fields can appear grouped together.
 * @see Form
 */
function FormGroup(props) {
  var children = props.children,
      className = props.className,
      grouped = props.grouped,
      inline = props.inline,
      unstackable = props.unstackable,
      widths = props.widths;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(grouped, 'grouped'), (0, _lib.useKeyOnly)(inline, 'inline'), (0, _lib.useKeyOnly)(unstackable, 'unstackable'), (0, _lib.useWidthProp)(widths, null, true), 'fields', className);
  var rest = (0, _lib.getUnhandledProps)(FormGroup, props);
  var ElementType = (0, _lib.getElementType)(FormGroup, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    children
  );
}

FormGroup.handledProps = ['as', 'children', 'className', 'grouped', 'inline', 'unstackable', 'widths'];
FormGroup._meta = {
  name: 'FormGroup',
  parent: 'Form',
  type: _lib.META.TYPES.COLLECTION
};

FormGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Fields can show related choices. */
  grouped: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['inline']), _propTypes2.default.bool]),

  /** Multiple fields may be inline in a row. */
  inline: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['grouped']), _propTypes2.default.bool]),

  /** A form group can prevent itself from stacking on mobile. */
  unstackable: _propTypes2.default.bool,

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: _propTypes2.default.oneOf([].concat((0, _toConsumableArray3.default)(_lib.SUI.WIDTHS), ['equal']))
} : {};

exports.default = FormGroup;