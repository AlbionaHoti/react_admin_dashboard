'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POSITIONS = undefined;

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

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _reduce2 = require('lodash/reduce');

var _reduce3 = _interopRequireDefault(_reduce2);

var _assign2 = require('lodash/assign');

var _assign3 = _interopRequireDefault(_assign2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _mapValues2 = require('lodash/mapValues');

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _isNumber2 = require('lodash/isNumber');

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Portal = require('../../addons/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _PopupContent = require('./PopupContent');

var _PopupContent2 = _interopRequireDefault(_PopupContent);

var _PopupHeader = require('./PopupHeader');

var _PopupHeader2 = _interopRequireDefault(_PopupHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var POSITIONS = exports.POSITIONS = ['top left', 'top right', 'bottom right', 'bottom left', 'right center', 'left center', 'top center', 'bottom center'];

/**
 * A Popup displays additional information on top of a page.
 */

var Popup = function (_Component) {
  (0, _inherits3.default)(Popup, _Component);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.hideOnScroll = function (e) {
      _this.setState({ closed: true });

      _lib.eventStack.unsub('scroll', _this.hideOnScroll, { target: window });
      setTimeout(function () {
        return _this.setState({ closed: false });
      }, 50);

      _this.handleClose(e);
    }, _this.handleClose = function (e) {

      (0, _invoke3.default)(_this.props, 'onClose', e, _this.props);
    }, _this.handleOpen = function (e) {
      _this.coords = e.currentTarget.getBoundingClientRect();

      var onOpen = _this.props.onOpen;

      if (onOpen) onOpen(e, _this.props);
    }, _this.handlePortalMount = function (e) {
      var hideOnScroll = _this.props.hideOnScroll;


      if (hideOnScroll) _lib.eventStack.sub('scroll', _this.hideOnScroll, { target: window });
      (0, _invoke3.default)(_this.props, 'onMount', e, _this.props);
    }, _this.handlePortalUnmount = function (e) {
      var hideOnScroll = _this.props.hideOnScroll;


      if (hideOnScroll) _lib.eventStack.unsub('scroll', _this.hideOnScroll, { target: window });
      (0, _invoke3.default)(_this.props, 'onUnmount', e, _this.props);
    }, _this.handlePopupRef = function (popupRef) {
      _this.popupCoords = popupRef ? popupRef.getBoundingClientRect() : null;
      _this.setPopupStyle();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Popup, [{
    key: 'computePopupStyle',
    value: function computePopupStyle(positions) {
      var style = { position: 'absolute'

        // Do not access window/document when server side rendering
      };if (!(0, _lib.isBrowser)()) return style;

      var _props = this.props,
          horizontalOffset = _props.horizontalOffset,
          verticalOffset = _props.verticalOffset;
      var _window = window,
          pageYOffset = _window.pageYOffset,
          pageXOffset = _window.pageXOffset;
      var _document$documentEle = document.documentElement,
          clientWidth = _document$documentEle.clientWidth,
          clientHeight = _document$documentEle.clientHeight;


      if ((0, _includes3.default)(positions, 'right')) {
        style.right = Math.round(clientWidth - (this.coords.right + pageXOffset));
        style.left = 'auto';
      } else if ((0, _includes3.default)(positions, 'left')) {
        style.left = Math.round(this.coords.left + pageXOffset);
        style.right = 'auto';
      } else {
        // if not left nor right, we are horizontally centering the element
        var xOffset = (this.coords.width - this.popupCoords.width) / 2;
        style.left = Math.round(this.coords.left + xOffset + pageXOffset);
        style.right = 'auto';
      }

      if ((0, _includes3.default)(positions, 'top')) {
        style.bottom = Math.round(clientHeight - (this.coords.top + pageYOffset));
        style.top = 'auto';
      } else if ((0, _includes3.default)(positions, 'bottom')) {
        style.top = Math.round(this.coords.bottom + pageYOffset);
        style.bottom = 'auto';
      } else {
        // if not top nor bottom, we are vertically centering the element
        var yOffset = (this.coords.height + this.popupCoords.height) / 2;
        style.top = Math.round(this.coords.bottom + pageYOffset - yOffset);
        style.bottom = 'auto';

        var _xOffset = this.popupCoords.width + 8;
        if ((0, _includes3.default)(positions, 'right')) {
          style.right -= _xOffset;
        } else {
          style.left -= _xOffset;
        }
      }

      if (horizontalOffset) {
        if ((0, _isNumber3.default)(style.right)) {
          style.right -= horizontalOffset;
        } else {
          style.left -= horizontalOffset;
        }
      }

      if (verticalOffset) {
        if ((0, _isNumber3.default)(style.top)) {
          style.top += verticalOffset;
        } else {
          style.bottom += verticalOffset;
        }
      }

      return style;
    }

    // check if the style would display
    // the popup outside of the view port

  }, {
    key: 'isStyleInViewport',
    value: function isStyleInViewport(style) {
      var _window2 = window,
          pageYOffset = _window2.pageYOffset,
          pageXOffset = _window2.pageXOffset;
      var _document$documentEle2 = document.documentElement,
          clientWidth = _document$documentEle2.clientWidth,
          clientHeight = _document$documentEle2.clientHeight;


      var element = {
        top: style.top,
        left: style.left,
        width: this.popupCoords.width,
        height: this.popupCoords.height
      };
      if ((0, _isNumber3.default)(style.right)) {
        element.left = clientWidth - style.right - element.width;
      }
      if ((0, _isNumber3.default)(style.bottom)) {
        element.top = clientHeight - style.bottom - element.height;
      }

      // hidden on top
      if (element.top < pageYOffset) return false;
      // hidden on the bottom
      if (element.top + element.height > pageYOffset + clientHeight) return false;
      // hidden the left
      if (element.left < pageXOffset) return false;
      // hidden on the right
      if (element.left + element.width > pageXOffset + clientWidth) return false;

      return true;
    }
  }, {
    key: 'setPopupStyle',
    value: function setPopupStyle() {
      if (!this.coords || !this.popupCoords) return;
      var position = this.props.position;
      var style = this.computePopupStyle(position);

      // Lets detect if the popup is out of the viewport and adjust
      // the position accordingly
      var positions = (0, _without3.default)(POSITIONS, position).concat([position]);
      for (var i = 0; !this.isStyleInViewport(style) && i < positions.length; i += 1) {
        style = this.computePopupStyle(positions[i]);
        position = positions[i];
      }

      // Append 'px' to every numerical values in the style
      style = (0, _mapValues3.default)(style, function (value) {
        return (0, _isNumber3.default)(value) ? value + 'px' : value;
      });
      this.setState({ style: style, position: position });
    }
  }, {
    key: 'getPortalProps',
    value: function getPortalProps() {
      var portalProps = {};

      var _props2 = this.props,
          on = _props2.on,
          hoverable = _props2.hoverable;

      var normalizedOn = (0, _isArray3.default)(on) ? on : [on];

      if (hoverable) {
        portalProps.closeOnPortalMouseLeave = true;
        portalProps.mouseLeaveDelay = 300;
      }
      if ((0, _includes3.default)(normalizedOn, 'click')) {
        portalProps.openOnTriggerClick = true;
        portalProps.closeOnTriggerClick = true;
        portalProps.closeOnDocumentClick = true;
      }
      if ((0, _includes3.default)(normalizedOn, 'focus')) {
        portalProps.openOnTriggerFocus = true;
        portalProps.closeOnTriggerBlur = true;
      }
      if ((0, _includes3.default)(normalizedOn, 'hover')) {
        portalProps.openOnTriggerMouseEnter = true;
        portalProps.closeOnTriggerMouseLeave = true;
        // Taken from SUI: https://git.io/vPmCm
        portalProps.mouseLeaveDelay = 70;
        portalProps.mouseEnterDelay = 50;
      }

      return portalProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          basic = _props3.basic,
          children = _props3.children,
          className = _props3.className,
          content = _props3.content,
          flowing = _props3.flowing,
          header = _props3.header,
          inverted = _props3.inverted,
          size = _props3.size,
          trigger = _props3.trigger,
          wide = _props3.wide;
      var _state = this.state,
          position = _state.position,
          closed = _state.closed;

      var style = (0, _assign3.default)({}, this.state.style, this.props.style);
      var classes = (0, _classnames2.default)('ui', position, size, (0, _lib.useKeyOrValueAndKey)(wide, 'wide'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(flowing, 'flowing'), (0, _lib.useKeyOnly)(inverted, 'inverted'), 'popup transition visible', className);

      if (closed) return trigger;

      var unhandled = (0, _lib.getUnhandledProps)(Popup, this.props);
      var portalPropNames = _Portal2.default.handledProps;

      var rest = (0, _reduce3.default)(unhandled, function (acc, val, key) {
        if (!(0, _includes3.default)(portalPropNames, key)) acc[key] = val;

        return acc;
      }, {});
      var portalProps = (0, _pick3.default)(unhandled, portalPropNames);
      var ElementType = (0, _lib.getElementType)(Popup, this.props);

      var popupJSX = _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes, style: style, ref: this.handlePopupRef }),
        children,
        _lib.childrenUtils.isNil(children) && _PopupHeader2.default.create(header),
        _lib.childrenUtils.isNil(children) && _PopupContent2.default.create(content)
      );

      var mergedPortalProps = (0, _extends3.default)({}, this.getPortalProps(), portalProps);


      return _react2.default.createElement(
        _Portal2.default,
        (0, _extends3.default)({}, mergedPortalProps, {
          trigger: trigger,
          onClose: this.handleClose,
          onMount: this.handlePortalMount,
          onOpen: this.handleOpen,
          onUnmount: this.handlePortalUnmount
        }),
        popupJSX
      );
    }
  }]);
  return Popup;
}(_react.Component);

Popup.defaultProps = {
  position: 'top left',
  on: 'hover'
};
Popup._meta = {
  name: 'Popup',
  type: _lib.META.TYPES.MODULE
};
Popup.Content = _PopupContent2.default;
Popup.Header = _PopupHeader2.default;
Popup.handledProps = ['as', 'basic', 'children', 'className', 'content', 'flowing', 'header', 'hideOnScroll', 'horizontalOffset', 'hoverable', 'inverted', 'on', 'onClose', 'onMount', 'onOpen', 'onUnmount', 'position', 'size', 'style', 'trigger', 'verticalOffset', 'wide'];
exports.default = Popup;
Popup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Display the popup without the pointing arrow. */
  basic: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Simple text content for the popover. */
  content: _lib.customPropTypes.itemShorthand,

  /** A flowing Popup has no maximum width and continues to flow to fit its content. */
  flowing: _propTypes2.default.bool,

  /** Takes up the entire width of its offset container. */
  // TODO: implement the Popup fluid layout
  // fluid: PropTypes.bool,

  /** Header displayed above the content in bold. */
  header: _lib.customPropTypes.itemShorthand,

  /** Hide the Popup when scrolling the window. */
  hideOnScroll: _propTypes2.default.bool,

  /** Whether the popup should not close on hover. */
  hoverable: _propTypes2.default.bool,

  /** Invert the colors of the Popup. */
  inverted: _propTypes2.default.bool,

  /** Horizontal offset in pixels to be applied to the Popup. */
  horizontalOffset: _propTypes2.default.number,

  /** Vertical offset in pixels to be applied to the Popup. */
  verticalOffset: _propTypes2.default.number,

  /** Events triggering the popup. */
  on: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['hover', 'click', 'focus']), _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['hover', 'click', 'focus']))]),

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: _propTypes2.default.func,

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: _propTypes2.default.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: _propTypes2.default.func,

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: _propTypes2.default.func,

  /** Position for the popover. */
  position: _propTypes2.default.oneOf(POSITIONS),

  /** Popup size. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'medium', 'big', 'massive')),

  /** Custom Popup style. */
  style: _propTypes2.default.object,

  /** Element to be rendered in-place where the popup is defined. */
  trigger: _propTypes2.default.node,

  /** Popup width. */
  wide: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['very'])])
} : {};