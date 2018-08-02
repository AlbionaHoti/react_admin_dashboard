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

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A group of cards.
 */
function CardGroup(props) {
  var centered = props.centered,
      children = props.children,
      className = props.className,
      content = props.content,
      doubling = props.doubling,
      items = props.items,
      itemsPerRow = props.itemsPerRow,
      stackable = props.stackable,
      textAlign = props.textAlign;


  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(centered, 'centered'), (0, _lib.useKeyOnly)(doubling, 'doubling'), (0, _lib.useKeyOnly)(stackable, 'stackable'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useWidthProp)(itemsPerRow), 'cards', className);
  var rest = (0, _lib.getUnhandledProps)(CardGroup, props);
  var ElementType = (0, _lib.getElementType)(CardGroup, props);

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

  var itemsJSX = (0, _map3.default)(items, function (item) {
    var key = item.key || [item.header, item.description].join('-');
    return _react2.default.createElement(_Card2.default, (0, _extends3.default)({ key: key }, item));
  });

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    itemsJSX
  );
}

CardGroup.handledProps = ['as', 'centered', 'children', 'className', 'content', 'doubling', 'items', 'itemsPerRow', 'stackable', 'textAlign'];
CardGroup._meta = {
  name: 'CardGroup',
  parent: 'Card',
  type: _lib.META.TYPES.VIEW
};

CardGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A group of cards can center itself inside its container. */
  centered: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A group of cards can double its column width for mobile. */
  doubling: _propTypes2.default.bool,

  /** Shorthand array of props for Card. */
  items: _lib.customPropTypes.collectionShorthand,

  /** A group of cards can set how many cards should exist in a row. */
  itemsPerRow: _propTypes2.default.oneOf(_lib.SUI.WIDTHS),

  /** A group of cards can automatically stack rows to a single columns on mobile devices. */
  stackable: _propTypes2.default.bool,

  /** A card group can adjust its text alignment. */
  textAlign: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.TEXT_ALIGNMENTS, 'justified'))
} : {};

exports.default = CardGroup;