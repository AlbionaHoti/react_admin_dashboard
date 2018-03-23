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

var _SegmentGroup = require('./SegmentGroup');

var _SegmentGroup2 = _interopRequireDefault(_SegmentGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A segment is used to create a grouping of related content.
 */
function Segment(props) {
  var attached = props.attached,
      basic = props.basic,
      children = props.children,
      circular = props.circular,
      className = props.className,
      clearing = props.clearing,
      color = props.color,
      compact = props.compact,
      content = props.content,
      disabled = props.disabled,
      floated = props.floated,
      inverted = props.inverted,
      loading = props.loading,
      padded = props.padded,
      piled = props.piled,
      raised = props.raised,
      secondary = props.secondary,
      size = props.size,
      stacked = props.stacked,
      tertiary = props.tertiary,
      textAlign = props.textAlign,
      vertical = props.vertical;


  var classes = (0, _classnames2.default)('ui', color, size, (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(clearing, 'clearing'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(piled, 'piled'), (0, _lib.useKeyOnly)(raised, 'raised'), (0, _lib.useKeyOnly)(secondary, 'secondary'), (0, _lib.useKeyOnly)(stacked, 'stacked'), (0, _lib.useKeyOnly)(tertiary, 'tertiary'), (0, _lib.useKeyOnly)(vertical, 'vertical'), (0, _lib.useKeyOrValueAndKey)(attached, 'attached'), (0, _lib.useKeyOrValueAndKey)(padded, 'padded'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useValueAndKey)(floated, 'floated'), 'segment', className);
  var rest = (0, _lib.getUnhandledProps)(Segment, props);
  var ElementType = (0, _lib.getElementType)(Segment, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

Segment.handledProps = ['as', 'attached', 'basic', 'children', 'circular', 'className', 'clearing', 'color', 'compact', 'content', 'disabled', 'floated', 'inverted', 'loading', 'padded', 'piled', 'raised', 'secondary', 'size', 'stacked', 'tertiary', 'textAlign', 'vertical'];
Segment.Group = _SegmentGroup2.default;

Segment._meta = {
  name: 'Segment',
  type: _lib.META.TYPES.ELEMENT
};

Segment.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Attach segment to other content, like a header. */
  attached: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['top', 'bottom'])]),

  /** A basic segment has no special formatting. */
  basic: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** A segment can be circular. */
  circular: _propTypes2.default.bool,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** A segment can clear floated content. */
  clearing: _propTypes2.default.bool,

  /** Segment can be colored. */
  color: _propTypes2.default.oneOf(_lib.SUI.COLORS),

  /** A segment may take up only as much space as is necessary. */
  compact: _propTypes2.default.bool,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A segment may show its content is disabled. */
  disabled: _propTypes2.default.bool,

  /** Segment content can be floated to the left or right. */
  floated: _propTypes2.default.oneOf(_lib.SUI.FLOATS),

  /** A segment can have its colors inverted for contrast. */
  inverted: _propTypes2.default.bool,

  /** A segment may show its content is being loaded. */
  loading: _propTypes2.default.bool,

  /** A segment can increase its padding. */
  padded: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['very'])]),

  /** Formatted to look like a pile of pages. */
  piled: _propTypes2.default.bool,

  /** A segment may be formatted to raise above the page. */
  raised: _propTypes2.default.bool,

  /** A segment can be formatted to appear less noticeable. */
  secondary: _propTypes2.default.bool,

  /** A segment can have different sizes. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'medium')),

  /** Formatted to show it contains multiple pages. */
  stacked: _propTypes2.default.bool,

  /** A segment can be formatted to appear even less noticeable. */
  tertiary: _propTypes2.default.bool,

  /** Formats content to be aligned as part of a vertical group. */
  textAlign: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.TEXT_ALIGNMENTS, 'justified')),

  /** Formats content to be aligned vertically. */
  vertical: _propTypes2.default.bool
} : {};

exports.default = Segment;