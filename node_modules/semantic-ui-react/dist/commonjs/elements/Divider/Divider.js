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
 * A divider visually segments content into groups.
 */
function Divider(props) {
  var children = props.children,
      className = props.className,
      clearing = props.clearing,
      content = props.content,
      fitted = props.fitted,
      hidden = props.hidden,
      horizontal = props.horizontal,
      inverted = props.inverted,
      section = props.section,
      vertical = props.vertical;


  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(clearing, 'clearing'), (0, _lib.useKeyOnly)(fitted, 'fitted'), (0, _lib.useKeyOnly)(hidden, 'hidden'), (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(section, 'section'), (0, _lib.useKeyOnly)(vertical, 'vertical'), 'divider', className);
  var rest = (0, _lib.getUnhandledProps)(Divider, props);
  var ElementType = (0, _lib.getElementType)(Divider, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

Divider.handledProps = ['as', 'children', 'className', 'clearing', 'content', 'fitted', 'hidden', 'horizontal', 'inverted', 'section', 'vertical'];
Divider._meta = {
  name: 'Divider',
  type: _lib.META.TYPES.ELEMENT
};

Divider.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Divider can clear the content above it. */
  clearing: _propTypes2.default.bool,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Divider can be fitted without any space above or below it. */
  fitted: _propTypes2.default.bool,

  /** Divider can divide content without creating a dividing line. */
  hidden: _propTypes2.default.bool,

  /** Divider can segment content horizontally. */
  horizontal: _propTypes2.default.bool,

  /** Divider can have its colours inverted. */
  inverted: _propTypes2.default.bool,

  /** Divider can provide greater margins to divide sections of content. */
  section: _propTypes2.default.bool,

  /** Divider can segment content vertically. */
  vertical: _propTypes2.default.bool
} : {};

exports.default = Divider;