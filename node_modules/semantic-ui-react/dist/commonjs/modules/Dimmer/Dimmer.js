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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Portal = require('../../addons/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _DimmerDimmable = require('./DimmerDimmable');

var _DimmerDimmable2 = _interopRequireDefault(_DimmerDimmable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A dimmer hides distractions to focus attention on particular content.
 */
var Dimmer = function (_Component) {
  (0, _inherits3.default)(Dimmer, _Component);

  function Dimmer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Dimmer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Dimmer.__proto__ || Object.getPrototypeOf(Dimmer)).call.apply(_ref, [this].concat(args))), _this), _this.handlePortalMount = function () {
      if (!(0, _lib.isBrowser)()) return;

      // Heads up, IE doesn't support second argument in add()
      document.body.classList.add('dimmed');
      document.body.classList.add('dimmable');
    }, _this.handlePortalUnmount = function () {
      if (!(0, _lib.isBrowser)()) return;

      // Heads up, IE doesn't support second argument in add()
      document.body.classList.remove('dimmed');
      document.body.classList.remove('dimmable');
    }, _this.handleClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onClickOutside = _this$props.onClickOutside;


      if (onClick) onClick(e, _this.props);
      if (_this.centerRef && _this.centerRef !== e.target && (0, _lib.doesNodeContainClick)(_this.centerRef, e)) return;
      if (onClickOutside) onClickOutside(e, _this.props);
    }, _this.handleCenterRef = function (c) {
      return _this.centerRef = c;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Dimmer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          content = _props.content,
          disabled = _props.disabled,
          inverted = _props.inverted,
          page = _props.page,
          simple = _props.simple;


      var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(active, 'active transition visible'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(page, 'page'), (0, _lib.useKeyOnly)(simple, 'simple'), 'dimmer', className);
      var rest = (0, _lib.getUnhandledProps)(Dimmer, this.props);
      var ElementType = (0, _lib.getElementType)(Dimmer, this.props);

      var childrenContent = _lib.childrenUtils.isNil(children) ? content : children;

      var dimmerElement = _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes, onClick: this.handleClick }),
        childrenContent && _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'center', ref: this.handleCenterRef },
            childrenContent
          )
        )
      );

      if (page) {
        return _react2.default.createElement(
          _Portal2.default,
          {
            closeOnEscape: false,
            closeOnDocumentClick: false,
            onMount: this.handlePortalMount,
            onUnmount: this.handlePortalUnmount,
            open: active,
            openOnTriggerClick: false
          },
          dimmerElement
        );
      }

      return dimmerElement;
    }
  }]);
  return Dimmer;
}(_react.Component);

Dimmer._meta = {
  name: 'Dimmer',
  type: _lib.META.TYPES.MODULE
};
Dimmer.Dimmable = _DimmerDimmable2.default;
Dimmer.handledProps = ['active', 'as', 'children', 'className', 'content', 'disabled', 'inverted', 'onClick', 'onClickOutside', 'page', 'simple'];
exports.default = Dimmer;
Dimmer.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** An active dimmer will dim its parent container. */
  active: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A disabled dimmer cannot be activated */
  disabled: _propTypes2.default.bool,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes2.default.func,

  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: _propTypes2.default.func,

  /** A dimmer can be formatted to have its colors inverted. */
  inverted: _propTypes2.default.bool,

  /** A dimmer can be formatted to be fixed to the page. */
  page: _propTypes2.default.bool,

  /** A dimmer can be controlled with simple prop. */
  simple: _propTypes2.default.bool
} : {};


Dimmer.create = (0, _lib.createShorthandFactory)(Dimmer, function (value) {
  return { content: value };
});