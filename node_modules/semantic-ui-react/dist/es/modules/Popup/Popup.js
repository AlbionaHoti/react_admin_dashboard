import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _pick from 'lodash/pick';
import _reduce from 'lodash/reduce';
import _assign from 'lodash/assign';
import _invoke from 'lodash/invoke';
import _isArray from 'lodash/isArray';
import _mapValues from 'lodash/mapValues';
import _isNumber from 'lodash/isNumber';
import _includes from 'lodash/includes';
import _without from 'lodash/without';
import cx from 'classnames';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { eventStack, childrenUtils, customPropTypes, getElementType, getUnhandledProps, isBrowser, META, SUI, useKeyOnly, useKeyOrValueAndKey } from '../../lib';
import Portal from '../../addons/Portal';
import PopupContent from './PopupContent';
import PopupHeader from './PopupHeader';

export var POSITIONS = ['top left', 'top right', 'bottom right', 'bottom left', 'right center', 'left center', 'top center', 'bottom center'];

/**
 * A Popup displays additional information on top of a page.
 */

var Popup = function (_Component) {
  _inherits(Popup, _Component);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.hideOnScroll = function (e) {
      _this.setState({ closed: true });

      eventStack.unsub('scroll', _this.hideOnScroll, { target: window });
      setTimeout(function () {
        return _this.setState({ closed: false });
      }, 50);

      _this.handleClose(e);
    }, _this.handleClose = function (e) {

      _invoke(_this.props, 'onClose', e, _this.props);
    }, _this.handleOpen = function (e) {
      _this.coords = e.currentTarget.getBoundingClientRect();

      var onOpen = _this.props.onOpen;

      if (onOpen) onOpen(e, _this.props);
    }, _this.handlePortalMount = function (e) {
      var hideOnScroll = _this.props.hideOnScroll;


      if (hideOnScroll) eventStack.sub('scroll', _this.hideOnScroll, { target: window });
      _invoke(_this.props, 'onMount', e, _this.props);
    }, _this.handlePortalUnmount = function (e) {
      var hideOnScroll = _this.props.hideOnScroll;


      if (hideOnScroll) eventStack.unsub('scroll', _this.hideOnScroll, { target: window });
      _invoke(_this.props, 'onUnmount', e, _this.props);
    }, _this.handlePopupRef = function (popupRef) {
      _this.popupCoords = popupRef ? popupRef.getBoundingClientRect() : null;
      _this.setPopupStyle();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popup, [{
    key: 'computePopupStyle',
    value: function computePopupStyle(positions) {
      var style = { position: 'absolute'

        // Do not access window/document when server side rendering
      };if (!isBrowser()) return style;

      var _props = this.props,
          horizontalOffset = _props.horizontalOffset,
          verticalOffset = _props.verticalOffset;
      var _window = window,
          pageYOffset = _window.pageYOffset,
          pageXOffset = _window.pageXOffset;
      var _document$documentEle = document.documentElement,
          clientWidth = _document$documentEle.clientWidth,
          clientHeight = _document$documentEle.clientHeight;


      if (_includes(positions, 'right')) {
        style.right = Math.round(clientWidth - (this.coords.right + pageXOffset));
        style.left = 'auto';
      } else if (_includes(positions, 'left')) {
        style.left = Math.round(this.coords.left + pageXOffset);
        style.right = 'auto';
      } else {
        // if not left nor right, we are horizontally centering the element
        var xOffset = (this.coords.width - this.popupCoords.width) / 2;
        style.left = Math.round(this.coords.left + xOffset + pageXOffset);
        style.right = 'auto';
      }

      if (_includes(positions, 'top')) {
        style.bottom = Math.round(clientHeight - (this.coords.top + pageYOffset));
        style.top = 'auto';
      } else if (_includes(positions, 'bottom')) {
        style.top = Math.round(this.coords.bottom + pageYOffset);
        style.bottom = 'auto';
      } else {
        // if not top nor bottom, we are vertically centering the element
        var yOffset = (this.coords.height + this.popupCoords.height) / 2;
        style.top = Math.round(this.coords.bottom + pageYOffset - yOffset);
        style.bottom = 'auto';

        var _xOffset = this.popupCoords.width + 8;
        if (_includes(positions, 'right')) {
          style.right -= _xOffset;
        } else {
          style.left -= _xOffset;
        }
      }

      if (horizontalOffset) {
        if (_isNumber(style.right)) {
          style.right -= horizontalOffset;
        } else {
          style.left -= horizontalOffset;
        }
      }

      if (verticalOffset) {
        if (_isNumber(style.top)) {
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
      if (_isNumber(style.right)) {
        element.left = clientWidth - style.right - element.width;
      }
      if (_isNumber(style.bottom)) {
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
      var positions = _without(POSITIONS, position).concat([position]);
      for (var i = 0; !this.isStyleInViewport(style) && i < positions.length; i += 1) {
        style = this.computePopupStyle(positions[i]);
        position = positions[i];
      }

      // Append 'px' to every numerical values in the style
      style = _mapValues(style, function (value) {
        return _isNumber(value) ? value + 'px' : value;
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

      var normalizedOn = _isArray(on) ? on : [on];

      if (hoverable) {
        portalProps.closeOnPortalMouseLeave = true;
        portalProps.mouseLeaveDelay = 300;
      }
      if (_includes(normalizedOn, 'click')) {
        portalProps.openOnTriggerClick = true;
        portalProps.closeOnTriggerClick = true;
        portalProps.closeOnDocumentClick = true;
      }
      if (_includes(normalizedOn, 'focus')) {
        portalProps.openOnTriggerFocus = true;
        portalProps.closeOnTriggerBlur = true;
      }
      if (_includes(normalizedOn, 'hover')) {
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

      var style = _assign({}, this.state.style, this.props.style);
      var classes = cx('ui', position, size, useKeyOrValueAndKey(wide, 'wide'), useKeyOnly(basic, 'basic'), useKeyOnly(flowing, 'flowing'), useKeyOnly(inverted, 'inverted'), 'popup transition visible', className);

      if (closed) return trigger;

      var unhandled = getUnhandledProps(Popup, this.props);
      var portalPropNames = Portal.handledProps;

      var rest = _reduce(unhandled, function (acc, val, key) {
        if (!_includes(portalPropNames, key)) acc[key] = val;

        return acc;
      }, {});
      var portalProps = _pick(unhandled, portalPropNames);
      var ElementType = getElementType(Popup, this.props);

      var popupJSX = React.createElement(
        ElementType,
        _extends({}, rest, { className: classes, style: style, ref: this.handlePopupRef }),
        children,
        childrenUtils.isNil(children) && PopupHeader.create(header),
        childrenUtils.isNil(children) && PopupContent.create(content)
      );

      var mergedPortalProps = _extends({}, this.getPortalProps(), portalProps);


      return React.createElement(
        Portal,
        _extends({}, mergedPortalProps, {
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
}(Component);

Popup.defaultProps = {
  position: 'top left',
  on: 'hover'
};
Popup._meta = {
  name: 'Popup',
  type: META.TYPES.MODULE
};
Popup.Content = PopupContent;
Popup.Header = PopupHeader;
Popup.handledProps = ['as', 'basic', 'children', 'className', 'content', 'flowing', 'header', 'hideOnScroll', 'horizontalOffset', 'hoverable', 'inverted', 'on', 'onClose', 'onMount', 'onOpen', 'onUnmount', 'position', 'size', 'style', 'trigger', 'verticalOffset', 'wide'];
export default Popup;
Popup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Display the popup without the pointing arrow. */
  basic: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Simple text content for the popover. */
  content: customPropTypes.itemShorthand,

  /** A flowing Popup has no maximum width and continues to flow to fit its content. */
  flowing: PropTypes.bool,

  /** Takes up the entire width of its offset container. */
  // TODO: implement the Popup fluid layout
  // fluid: PropTypes.bool,

  /** Header displayed above the content in bold. */
  header: customPropTypes.itemShorthand,

  /** Hide the Popup when scrolling the window. */
  hideOnScroll: PropTypes.bool,

  /** Whether the popup should not close on hover. */
  hoverable: PropTypes.bool,

  /** Invert the colors of the Popup. */
  inverted: PropTypes.bool,

  /** Horizontal offset in pixels to be applied to the Popup. */
  horizontalOffset: PropTypes.number,

  /** Vertical offset in pixels to be applied to the Popup. */
  verticalOffset: PropTypes.number,

  /** Events triggering the popup. */
  on: PropTypes.oneOfType([PropTypes.oneOf(['hover', 'click', 'focus']), PropTypes.arrayOf(PropTypes.oneOf(['hover', 'click', 'focus']))]),

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: PropTypes.func,

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: PropTypes.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: PropTypes.func,

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: PropTypes.func,

  /** Position for the popover. */
  position: PropTypes.oneOf(POSITIONS),

  /** Popup size. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium', 'big', 'massive')),

  /** Custom Popup style. */
  style: PropTypes.object,

  /** Element to be rendered in-place where the popup is defined. */
  trigger: PropTypes.node,

  /** Popup width. */
  wide: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])])
} : {};