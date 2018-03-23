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

var _StatisticGroup = require('./StatisticGroup');

var _StatisticGroup2 = _interopRequireDefault(_StatisticGroup);

var _StatisticLabel = require('./StatisticLabel');

var _StatisticLabel2 = _interopRequireDefault(_StatisticLabel);

var _StatisticValue = require('./StatisticValue');

var _StatisticValue2 = _interopRequireDefault(_StatisticValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A statistic emphasizes the current value of an attribute.
 */
function Statistic(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      content = props.content,
      floated = props.floated,
      horizontal = props.horizontal,
      inverted = props.inverted,
      label = props.label,
      size = props.size,
      text = props.text,
      value = props.value;


  var classes = (0, _classnames2.default)('ui', color, size, (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(inverted, 'inverted'), 'statistic', className);
  var rest = (0, _lib.getUnhandledProps)(Statistic, props);
  var ElementType = (0, _lib.getElementType)(Statistic, props);

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
    _StatisticValue2.default.create(value, {
      defaultProps: { text: text }
    }),
    _StatisticLabel2.default.create(label)
  );
}

Statistic.handledProps = ['as', 'children', 'className', 'color', 'content', 'floated', 'horizontal', 'inverted', 'label', 'size', 'text', 'value'];
Statistic._meta = {
  name: 'Statistic',
  type: _lib.META.TYPES.VIEW
};

Statistic.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** A statistic can be formatted to be different colors. */
  color: _propTypes2.default.oneOf(_lib.SUI.COLORS),

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A statistic can sit to the left or right of other content. */
  floated: _propTypes2.default.oneOf(_lib.SUI.FLOATS),

  /** A statistic can present its measurement horizontally. */
  horizontal: _propTypes2.default.bool,

  /** A statistic can be formatted to fit on a dark background. */
  inverted: _propTypes2.default.bool,

  /** Label content of the Statistic. */
  label: _lib.customPropTypes.contentShorthand,

  /** A statistic can vary in size. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'big', 'massive', 'medium')),

  /** Format the StatisticValue with smaller font size to fit nicely beside number values. */
  text: _propTypes2.default.bool,

  /** Value content of the Statistic. */
  value: _lib.customPropTypes.contentShorthand
} : {};

Statistic.Group = _StatisticGroup2.default;
Statistic.Label = _StatisticLabel2.default;
Statistic.Value = _StatisticValue2.default;

Statistic.create = (0, _lib.createShorthandFactory)(Statistic, function (content) {
  return { content: content };
});

exports.default = Statistic;