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

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A table row can have cells.
 */
function TableCell(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      collapsing = props.collapsing,
      content = props.content,
      disabled = props.disabled,
      error = props.error,
      icon = props.icon,
      negative = props.negative,
      positive = props.positive,
      selectable = props.selectable,
      singleLine = props.singleLine,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      warning = props.warning,
      width = props.width;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(collapsing, 'collapsing'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(selectable, 'selectable'), (0, _lib.useKeyOnly)(singleLine, 'single line'), (0, _lib.useKeyOnly)(warning, 'warning'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useVerticalAlignProp)(verticalAlign), (0, _lib.useWidthProp)(width, 'wide'), className);
  var rest = (0, _lib.getUnhandledProps)(TableCell, props);
  var ElementType = (0, _lib.getElementType)(TableCell, props);

  if (!_lib.childrenUtils.isNil(children)) {
    return _react2.default.createElement(
      ElementType,
      (0, _extends3.default)({}, rest, { className: classes }),
      children
    );
  }

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _Icon2.default.create(icon),
    content
  );
}

TableCell.handledProps = ['active', 'as', 'children', 'className', 'collapsing', 'content', 'disabled', 'error', 'icon', 'negative', 'positive', 'selectable', 'singleLine', 'textAlign', 'verticalAlign', 'warning', 'width'];
TableCell._meta = {
  name: 'TableCell',
  type: _lib.META.TYPES.COLLECTION,
  parent: 'Table'
};

TableCell.defaultProps = {
  as: 'td'
};

TableCell.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A cell can be active or selected by a user. */
  active: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** A cell can be collapsing so that it only uses as much space as required. */
  collapsing: _propTypes2.default.bool,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A cell can be disabled. */
  disabled: _propTypes2.default.bool,

  /** A cell may call attention to an error or a negative value. */
  error: _propTypes2.default.bool,

  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon: _lib.customPropTypes.itemShorthand,

  /** A cell may let a user know whether a value is bad. */
  negative: _propTypes2.default.bool,

  /** A cell may let a user know whether a value is good. */
  positive: _propTypes2.default.bool,

  /** A cell can be selectable. */
  selectable: _propTypes2.default.bool,

  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine: _propTypes2.default.bool,

  /** A table cell can adjust its text alignment. */
  textAlign: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.TEXT_ALIGNMENTS, 'justified')),

  /** A table cell can adjust its text alignment. */
  verticalAlign: _propTypes2.default.oneOf(_lib.SUI.VERTICAL_ALIGNMENTS),

  /** A cell may warn a user. */
  warning: _propTypes2.default.bool,

  /** A table can specify the width of individual columns independently. */
  width: _propTypes2.default.oneOf(_lib.SUI.WIDTHS)
} : {};

TableCell.create = (0, _lib.createShorthandFactory)(TableCell, function (content) {
  return { content: content };
});

exports.default = TableCell;