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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A group of segments can be formatted to appear together.
 */
function SegmentGroup(props) {
  var children = props.children,
      className = props.className,
      compact = props.compact,
      content = props.content,
      horizontal = props.horizontal,
      piled = props.piled,
      raised = props.raised,
      size = props.size,
      stacked = props.stacked;


  var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(piled, 'piled'), (0, _lib.useKeyOnly)(raised, 'raised'), (0, _lib.useKeyOnly)(stacked, 'stacked'), 'segments', className);
  var rest = (0, _lib.getUnhandledProps)(SegmentGroup, props);
  var ElementType = (0, _lib.getElementType)(SegmentGroup, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

SegmentGroup.handledProps = ['as', 'children', 'className', 'compact', 'content', 'horizontal', 'piled', 'raised', 'size', 'stacked'];
SegmentGroup._meta = {
  name: 'SegmentGroup',
  parent: 'Segment',
  type: _lib.META.TYPES.ELEMENT
};

SegmentGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** A segment may take up only as much space as is necessary. */
  compact: _propTypes2.default.bool,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Formats content to be aligned horizontally. */
  horizontal: _propTypes2.default.bool,

  /** Formatted to look like a pile of pages. */
  piled: _propTypes2.default.bool,

  /** A segment group may be formatted to raise above the page. */
  raised: _propTypes2.default.bool,

  /** A segment group can have different sizes. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'medium')),

  /** Formatted to show it contains multiple pages. */
  stacked: _propTypes2.default.bool
} : {};

exports.default = SegmentGroup;