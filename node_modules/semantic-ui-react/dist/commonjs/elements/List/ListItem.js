'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Image = require('../../elements/Image');

var _Image2 = _interopRequireDefault(_Image);

var _ListContent = require('./ListContent');

var _ListContent2 = _interopRequireDefault(_ListContent);

var _ListDescription = require('./ListDescription');

var _ListDescription2 = _interopRequireDefault(_ListDescription);

var _ListHeader = require('./ListHeader');

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _ListIcon = require('./ListIcon');

var _ListIcon2 = _interopRequireDefault(_ListIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A list item can contain a set of items.
 */
var ListItem = function (_Component) {
  (0, _inherits3.default)(ListItem, _Component);

  function ListItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var disabled = _this.props.disabled;


      if (!disabled) (0, _invoke3.default)(_this.props, 'onClick', e, _this.props);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ListItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          content = _props.content,
          description = _props.description,
          disabled = _props.disabled,
          header = _props.header,
          icon = _props.icon,
          image = _props.image,
          value = _props.value;


      var ElementType = (0, _lib.getElementType)(ListItem, this.props);
      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(ElementType !== 'li', 'item'), className);
      var rest = (0, _lib.getUnhandledProps)(ListItem, this.props);
      var valueProp = ElementType === 'li' ? { value: value } : { 'data-value': value };

      if (!_lib.childrenUtils.isNil(children)) {
        return _react2.default.createElement(
          ElementType,
          (0, _extends3.default)({}, rest, valueProp, { role: 'listitem', className: classes, onClick: this.handleClick }),
          children
        );
      }

      var iconElement = _ListIcon2.default.create(icon);
      var imageElement = _Image2.default.create(image);

      // See description of `content` prop for explanation about why this is necessary.
      if (!(0, _react.isValidElement)(content) && (0, _isPlainObject3.default)(content)) {
        return _react2.default.createElement(
          ElementType,
          (0, _extends3.default)({}, rest, valueProp, { role: 'listitem', className: classes, onClick: this.handleClick }),
          iconElement || imageElement,
          _ListContent2.default.create(content, { header: header, description: description })
        );
      }

      var headerElement = _ListHeader2.default.create(header);
      var descriptionElement = _ListDescription2.default.create(description);
      if (iconElement || imageElement) {
        return _react2.default.createElement(
          ElementType,
          (0, _extends3.default)({}, rest, valueProp, { role: 'listitem', className: classes, onClick: this.handleClick }),
          iconElement || imageElement,
          (content || headerElement || descriptionElement) && _react2.default.createElement(
            _ListContent2.default,
            null,
            headerElement,
            descriptionElement,
            content
          )
        );
      }

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, valueProp, { role: 'listitem', className: classes, onClick: this.handleClick }),
        headerElement,
        descriptionElement,
        content
      );
    }
  }]);
  return ListItem;
}(_react.Component);

ListItem._meta = {
  name: 'ListItem',
  parent: 'List',
  type: _lib.META.TYPES.ELEMENT
};
ListItem.handledProps = ['active', 'as', 'children', 'className', 'content', 'description', 'disabled', 'header', 'icon', 'image', 'onClick', 'value'];
ListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A list item can active. */
  active: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /**
   * Shorthand for primary content.
   *
   * Heads up!
   *
   * This is handled slightly differently than the typical `content` prop since
   * the wrapping ListContent is not used when there's no icon or image.
   *
   * If you pass content as:
   * - an element/literal, it's treated as the sibling node to
   * header/description (whether wrapped in Item.Content or not).
   * - a props object, it forces the presence of Item.Content and passes those
   * props to it. If you pass a content prop within that props object, it
   * will be treated as the sibling node to header/description.
   */
  content: _lib.customPropTypes.itemShorthand,

  /** Shorthand for ListDescription. */
  description: _lib.customPropTypes.itemShorthand,

  /** A list item can disabled. */
  disabled: _propTypes2.default.bool,

  /** Shorthand for ListHeader. */
  header: _lib.customPropTypes.itemShorthand,

  /** Shorthand for ListIcon. */
  icon: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['image']), _lib.customPropTypes.itemShorthand]),

  /** Shorthand for Image. */
  image: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['icon']), _lib.customPropTypes.itemShorthand]),

  /** A ListItem can be clicked */
  onClick: _propTypes2.default.func,

  /** A value for an ordered list. */
  value: _propTypes2.default.string
} : {};


ListItem.create = (0, _lib.createShorthandFactory)(ListItem, function (content) {
  return { content: content };
});

exports.default = ListItem;