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

var _CardDescription = require('./CardDescription');

var _CardDescription2 = _interopRequireDefault(_CardDescription);

var _CardHeader = require('./CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardMeta = require('./CardMeta');

var _CardMeta2 = _interopRequireDefault(_CardMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A card can contain blocks of content or extra content meant to be formatted separately from the main content.
 */
function CardContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      extra = props.extra,
      header = props.header,
      meta = props.meta,
      textAlign = props.textAlign;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(extra, 'extra'), (0, _lib.useTextAlignProp)(textAlign), 'content', className);
  var rest = (0, _lib.getUnhandledProps)(CardContent, props);
  var ElementType = (0, _lib.getElementType)(CardContent, props);

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
    (0, _lib.createShorthand)(_CardHeader2.default, function (val) {
      return { content: val };
    }, header),
    (0, _lib.createShorthand)(_CardMeta2.default, function (val) {
      return { content: val };
    }, meta),
    (0, _lib.createShorthand)(_CardDescription2.default, function (val) {
      return { content: val };
    }, description)
  );
}

CardContent.handledProps = ['as', 'children', 'className', 'content', 'description', 'extra', 'header', 'meta', 'textAlign'];
CardContent._meta = {
  name: 'CardContent',
  parent: 'Card',
  type: _lib.META.TYPES.VIEW
};

CardContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Shorthand for CardDescription. */
  description: _lib.customPropTypes.itemShorthand,

  /** A card can contain extra content meant to be formatted separately from the main content. */
  extra: _propTypes2.default.bool,

  /** Shorthand for CardHeader. */
  header: _lib.customPropTypes.itemShorthand,

  /** Shorthand for CardMeta. */
  meta: _lib.customPropTypes.itemShorthand,

  /** A card content can adjust its text alignment. */
  textAlign: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.TEXT_ALIGNMENTS, 'justified'))
} : {};

exports.default = CardContent;