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

var _Statistic = require('./Statistic');

var _Statistic2 = _interopRequireDefault(_Statistic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A group of statistics.
 */
function StatisticGroup(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      content = props.content,
      horizontal = props.horizontal,
      inverted = props.inverted,
      items = props.items,
      size = props.size,
      widths = props.widths;


  var classes = (0, _classnames2.default)('ui', color, size, (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useWidthProp)(widths), 'statistics', className);
  var rest = (0, _lib.getUnhandledProps)(StatisticGroup, props);
  var ElementType = (0, _lib.getElementType)(StatisticGroup, props);

  if (!_lib.childrenUtils.isNil(children)) return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    children
  );
  if (!_lib.childrenUtils.isNil(content)) return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    content
  );

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    (0, _map3.default)(items, function (item) {
      return _Statistic2.default.create(item);
    })
  );
}

StatisticGroup.handledProps = ['as', 'children', 'className', 'color', 'content', 'horizontal', 'inverted', 'items', 'size', 'widths'];
StatisticGroup._meta = {
  name: 'StatisticGroup',
  type: _lib.META.TYPES.VIEW,
  parent: 'Statistic'
};

StatisticGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** A statistic group can be formatted to be different colors. */
  color: _propTypes2.default.oneOf(_lib.SUI.COLORS),

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A statistic group can present its measurement horizontally. */
  horizontal: _propTypes2.default.bool,

  /** A statistic group can be formatted to fit on a dark background. */
  inverted: _propTypes2.default.bool,

  /** Array of props for Statistic. */
  items: _lib.customPropTypes.collectionShorthand,

  /** A statistic group can vary in size. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'big', 'massive', 'medium')),

  /** A statistic group can have its items divided evenly. */
  widths: _propTypes2.default.oneOf(_lib.SUI.WIDTHS)
} : {};

exports.default = StatisticGroup;