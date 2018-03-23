'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A table can have rows.
 */
function TableRow(props) {
  var active = props.active,
      cellAs = props.cellAs,
      cells = props.cells,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      error = props.error,
      negative = props.negative,
      positive = props.positive,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      warning = props.warning;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(warning, 'warning'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useVerticalAlignProp)(verticalAlign), className);
  var rest = (0, _lib.getUnhandledProps)(TableRow, props);
  var ElementType = (0, _lib.getElementType)(TableRow, props);

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
    (0, _map3.default)(cells, function (cell) {
      return _TableCell2.default.create(cell, { defaultProps: { as: cellAs } });
    })
  );
}

TableRow.handledProps = ['active', 'as', 'cellAs', 'cells', 'children', 'className', 'disabled', 'error', 'negative', 'positive', 'textAlign', 'verticalAlign', 'warning'];
TableRow._meta = {
  name: 'TableRow',
  type: _lib.META.TYPES.COLLECTION,
  parent: 'Table'
};

TableRow.defaultProps = {
  as: 'tr',
  cellAs: 'td'
};

TableRow.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A row can be active or selected by a user. */
  active: _propTypes2.default.bool,

  /** An element type to render as (string or function). */
  cellAs: _lib.customPropTypes.as,

  /** Shorthand array of props for TableCell. */
  cells: _lib.customPropTypes.collectionShorthand,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** A row can be disabled. */
  disabled: _propTypes2.default.bool,

  /** A row may call attention to an error or a negative value. */
  error: _propTypes2.default.bool,

  /** A row may let a user know whether a value is bad. */
  negative: _propTypes2.default.bool,

  /** A row may let a user know whether a value is good. */
  positive: _propTypes2.default.bool,

  /** A table row can adjust its text alignment. */
  textAlign: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.TEXT_ALIGNMENTS, 'justified')),

  /** A table row can adjust its vertical alignment. */
  verticalAlign: _propTypes2.default.oneOf(_lib.SUI.VERTICAL_ALIGNMENTS),

  /** A row may warn a user. */
  warning: _propTypes2.default.bool
} : {};

TableRow.create = (0, _lib.createShorthandFactory)(TableRow, function (cells) {
  return { cells: cells };
});

exports.default = TableRow;