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

var _GridColumn = require('./GridColumn');

var _GridColumn2 = _interopRequireDefault(_GridColumn);

var _GridRow = require('./GridRow');

var _GridRow2 = _interopRequireDefault(_GridRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A grid is used to harmonize negative space in a layout.
 */
function Grid(props) {
  var celled = props.celled,
      centered = props.centered,
      children = props.children,
      className = props.className,
      columns = props.columns,
      container = props.container,
      divided = props.divided,
      doubling = props.doubling,
      inverted = props.inverted,
      padded = props.padded,
      relaxed = props.relaxed,
      reversed = props.reversed,
      stackable = props.stackable,
      stretched = props.stretched,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign;


  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(centered, 'centered'), (0, _lib.useKeyOnly)(container, 'container'), (0, _lib.useKeyOnly)(doubling, 'doubling'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(stackable, 'stackable'), (0, _lib.useKeyOnly)(stretched, 'stretched'), (0, _lib.useKeyOrValueAndKey)(celled, 'celled'), (0, _lib.useKeyOrValueAndKey)(divided, 'divided'), (0, _lib.useKeyOrValueAndKey)(padded, 'padded'), (0, _lib.useKeyOrValueAndKey)(relaxed, 'relaxed'), (0, _lib.useMultipleProp)(reversed, 'reversed'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useVerticalAlignProp)(verticalAlign), (0, _lib.useWidthProp)(columns, 'column', true), 'grid', className);
  var rest = (0, _lib.getUnhandledProps)(Grid, props);
  var ElementType = (0, _lib.getElementType)(Grid, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    children
  );
}

Grid.handledProps = ['as', 'celled', 'centered', 'children', 'className', 'columns', 'container', 'divided', 'doubling', 'inverted', 'padded', 'relaxed', 'reversed', 'stackable', 'stretched', 'textAlign', 'verticalAlign'];
Grid.Column = _GridColumn2.default;
Grid.Row = _GridRow2.default;

Grid._meta = {
  name: 'Grid',
  type: _lib.META.TYPES.COLLECTION
};

Grid.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A grid can have rows divided into cells. */
  celled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['internally'])]),

  /** A grid can have its columns centered. */
  centered: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Represents column count per row in Grid. */
  columns: _propTypes2.default.oneOf([].concat((0, _toConsumableArray3.default)(_lib.SUI.WIDTHS), ['equal'])),

  /** A grid can be combined with a container to use the available layout and alignment. */
  container: _propTypes2.default.bool,

  /** A grid can have dividers between its columns. */
  divided: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['vertically'])]),

  /** A grid can double its column width on tablet and mobile sizes. */
  doubling: _propTypes2.default.bool,

  /** A grid's colors can be inverted. */
  inverted: _propTypes2.default.bool,

  /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
  padded: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['horizontally', 'vertically'])]),

  /** A grid can increase its gutters to allow for more negative space. */
  relaxed: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['very'])]),

  /** A grid can specify that its columns should reverse order at different device sizes. */
  reversed: _lib.customPropTypes.multipleProp(['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically']),

  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: _propTypes2.default.bool,

  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: _propTypes2.default.bool,

  /** A grid can specify its text alignment. */
  textAlign: _propTypes2.default.oneOf(_lib.SUI.TEXT_ALIGNMENTS),

  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: _propTypes2.default.oneOf(_lib.SUI.VERTICAL_ALIGNMENTS)
} : {};

exports.default = Grid;