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

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lib = require('../../lib');

var _Ref = require('../Ref');

var _Ref2 = _interopRequireDefault(_Ref);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A component that allows you to render children outside their parent.
 * @see Modal
 * @see Popup
 * @see Dimmer
 * @see Confirm
 */
var Portal = function (_Component) {
  (0, _inherits3.default)(Portal, _Component);

  function Portal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Portal.__proto__ || Object.getPrototypeOf(Portal)).call.apply(_ref, [this].concat(args))), _this), _this.handleDocumentClick = function (e) {
      var _this$props = _this.props,
          closeOnDocumentClick = _this$props.closeOnDocumentClick,
          closeOnRootNodeClick = _this$props.closeOnRootNodeClick;


      if (!_this.rootNode // not mounted
      || !_this.portalNode // no portal
      || (0, _lib.doesNodeContainClick)(_this.triggerNode, e) // event happened in trigger (delegate to trigger handlers)
      || (0, _lib.doesNodeContainClick)(_this.portalNode, e) // event happened in the portal
      ) return; // ignore the click

      var didClickInRootNode = (0, _lib.doesNodeContainClick)(_this.rootNode, e);

      if (closeOnDocumentClick && !didClickInRootNode || closeOnRootNodeClick && didClickInRootNode) {

        _this.close(e);
      }
    }, _this.handleEscape = function (e) {
      if (!_this.props.closeOnEscape) return;
      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Escape) return;

      _this.close(e);
    }, _this.handlePortalMouseLeave = function (e) {
      var _this$props2 = _this.props,
          closeOnPortalMouseLeave = _this$props2.closeOnPortalMouseLeave,
          mouseLeaveDelay = _this$props2.mouseLeaveDelay;


      if (!closeOnPortalMouseLeave) return;

      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    }, _this.handlePortalMouseEnter = function () {
      // In order to enable mousing from the trigger to the portal, we need to
      // clear the mouseleave timer that was set when leaving the trigger.
      var closeOnPortalMouseLeave = _this.props.closeOnPortalMouseLeave;


      if (!closeOnPortalMouseLeave) return;

      clearTimeout(_this.mouseLeaveTimer);
    }, _this.handleTriggerBlur = function (e) {
      for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      var _this$props3 = _this.props,
          trigger = _this$props3.trigger,
          closeOnTriggerBlur = _this$props3.closeOnTriggerBlur;

      // Call original event handler

      _invoke3.default.apply(undefined, [trigger, 'props.onBlur', e].concat(rest));

      // do not close if focus is given to the portal
      var didFocusPortal = (0, _invoke3.default)(_this, 'rootNode.contains', e.relatedTarget);

      if (!closeOnTriggerBlur || didFocusPortal) return;

      _this.close(e);
    }, _this.handleTriggerClick = function (e) {
      for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        rest[_key3 - 1] = arguments[_key3];
      }

      var _this$props4 = _this.props,
          trigger = _this$props4.trigger,
          closeOnTriggerClick = _this$props4.closeOnTriggerClick,
          openOnTriggerClick = _this$props4.openOnTriggerClick;
      var open = _this.state.open;

      // Call original event handler

      _invoke3.default.apply(undefined, [trigger, 'props.onClick', e].concat(rest));

      if (open && closeOnTriggerClick) {

        _this.close(e);
      } else if (!open && openOnTriggerClick) {

        _this.open(e);
      }
    }, _this.handleTriggerFocus = function (e) {
      for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
      }

      var _this$props5 = _this.props,
          trigger = _this$props5.trigger,
          openOnTriggerFocus = _this$props5.openOnTriggerFocus;

      // Call original event handler

      _invoke3.default.apply(undefined, [trigger, 'props.onFocus', e].concat(rest));

      if (!openOnTriggerFocus) return;

      _this.open(e);
    }, _this.handleTriggerMouseLeave = function (e) {
      for (var _len5 = arguments.length, rest = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        rest[_key5 - 1] = arguments[_key5];
      }

      clearTimeout(_this.mouseEnterTimer);

      var _this$props6 = _this.props,
          trigger = _this$props6.trigger,
          closeOnTriggerMouseLeave = _this$props6.closeOnTriggerMouseLeave,
          mouseLeaveDelay = _this$props6.mouseLeaveDelay;

      // Call original event handler

      _invoke3.default.apply(undefined, [trigger, 'props.onMouseLeave', e].concat(rest));

      if (!closeOnTriggerMouseLeave) return;

      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    }, _this.handleTriggerMouseEnter = function (e) {
      for (var _len6 = arguments.length, rest = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        rest[_key6 - 1] = arguments[_key6];
      }

      clearTimeout(_this.mouseLeaveTimer);

      var _this$props7 = _this.props,
          trigger = _this$props7.trigger,
          mouseEnterDelay = _this$props7.mouseEnterDelay,
          openOnTriggerMouseEnter = _this$props7.openOnTriggerMouseEnter;

      // Call original event handler

      _invoke3.default.apply(undefined, [trigger, 'props.onMouseEnter', e].concat(rest));

      if (!openOnTriggerMouseEnter) return;

      _this.mouseEnterTimer = _this.openWithTimeout(e, mouseEnterDelay);
    }, _this.open = function (e) {
      var onOpen = _this.props.onOpen;

      if (onOpen) onOpen(e, _this.props);

      _this.trySetState({ open: true });
    }, _this.openWithTimeout = function (e, delay) {
      // React wipes the entire event object and suggests using e.persist() if
      // you need the event for async access. However, even with e.persist
      // certain required props (e.g. currentTarget) are null so we're forced to clone.
      var eventClone = (0, _extends3.default)({}, e);
      return setTimeout(function () {
        return _this.open(eventClone);
      }, delay || 0);
    }, _this.close = function (e) {
      var onClose = _this.props.onClose;

      if (onClose) onClose(e, _this.props);

      _this.trySetState({ open: false });
    }, _this.closeWithTimeout = function (e, delay) {
      // React wipes the entire event object and suggests using e.persist() if
      // you need the event for async access. However, even with e.persist
      // certain required props (e.g. currentTarget) are null so we're forced to clone.
      var eventClone = (0, _extends3.default)({}, e);
      return setTimeout(function () {
        return _this.close(eventClone);
      }, delay || 0);
    }, _this.attachRenderSubTreeSubscribers = function (eventPool) {
      // Prevent race condition bug
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/2401
      if (!_this.rootNode) return null;

      _this.portalNode = _this.rootNode.firstElementChild;

      _lib.eventStack.sub('mouseleave', _this.handlePortalMouseLeave, { pool: eventPool, target: _this.portalNode });
      _lib.eventStack.sub('mouseenter', _this.handlePortalMouseEnter, { pool: eventPool, target: _this.portalNode });
    }, _this.mountPortal = function () {
      if (!(0, _lib.isBrowser)() || _this.rootNode) return;

      var _this$props8 = _this.props,
          eventPool = _this$props8.eventPool,
          _this$props8$mountNod = _this$props8.mountNode,
          mountNode = _this$props8$mountNod === undefined ? (0, _lib.isBrowser)() ? document.body : null : _this$props8$mountNod,
          prepend = _this$props8.prepend;


      _this.rootNode = document.createElement('div');

      if (prepend) {
        mountNode.insertBefore(_this.rootNode, mountNode.firstElementChild);
      } else {
        mountNode.appendChild(_this.rootNode);
      }

      _lib.eventStack.sub('click', _this.handleDocumentClick, { pool: eventPool });
      _lib.eventStack.sub('keydown', _this.handleEscape, { pool: eventPool });
      (0, _invoke3.default)(_this.props, 'onMount', null, _this.props);
    }, _this.unmountPortal = function () {
      if (!(0, _lib.isBrowser)() || !_this.rootNode) return;

      var eventPool = _this.props.eventPool;


      _reactDom2.default.unmountComponentAtNode(_this.rootNode);
      _this.rootNode.parentNode.removeChild(_this.rootNode);

      _lib.eventStack.unsub('mouseleave', _this.handlePortalMouseLeave, { pool: eventPool, target: _this.portalNode });
      _lib.eventStack.unsub('mouseenter', _this.handlePortalMouseEnter, { pool: eventPool, target: _this.portalNode });

      _this.rootNode = null;
      _this.portalNode = null;

      _lib.eventStack.unsub('click', _this.handleDocumentClick, { pool: eventPool });
      _lib.eventStack.unsub('keydown', _this.handleEscape, { pool: eventPool });
      (0, _invoke3.default)(_this.props, 'onUnmount', null, _this.props);
    }, _this.handleRef = function (c) {
      return _this.triggerNode = c;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // NOTE: Ideally the portal rendering would happen in the render() function
      // but React gives a warning about not being pure and suggests doing it
      // within this method.

      // If the portal is open, render (or re-render) the portal and child.
      this.renderPortal();

      if (prevState.open && !this.state.open) {
        this.unmountPortal();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unmountPortal();

      // Clean up timers
      clearTimeout(this.mouseEnterTimer);
      clearTimeout(this.mouseLeaveTimer);
    }

    // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Component Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Behavior
    // ----------------------------------------

  }, {
    key: 'renderPortal',
    value: function renderPortal() {
      var _this2 = this;

      if (!this.state.open) return;
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          eventPool = _props.eventPool;


      this.mountPortal();

      // Server side rendering
      if (!(0, _lib.isBrowser)()) return null;

      this.rootNode.className = className || '';

      // when re-rendering, first remove listeners before re-adding them to the new node
      if (this.portalNode) {
        _lib.eventStack.unsub('mouseleave', this.handlePortalMouseLeave, { pool: eventPool, target: this.portalNode });
        _lib.eventStack.unsub('mouseenter', this.handlePortalMouseEnter, { pool: eventPool, target: this.portalNode });
      }

      _reactDom2.default.unstable_renderSubtreeIntoContainer(this, _react.Children.only(children), this.rootNode, function () {
        return _this2.attachRenderSubTreeSubscribers(eventPool);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var trigger = this.props.trigger;


      if (!trigger) return null;
      return _react2.default.createElement(
        _Ref2.default,
        { innerRef: this.handleRef },
        (0, _react.cloneElement)(trigger, {
          onBlur: this.handleTriggerBlur,
          onClick: this.handleTriggerClick,
          onFocus: this.handleTriggerFocus,
          onMouseLeave: this.handleTriggerMouseLeave,
          onMouseEnter: this.handleTriggerMouseEnter
        })
      );
    }
  }]);
  return Portal;
}(_lib.AutoControlledComponent);

Portal.defaultProps = {
  closeOnDocumentClick: true,
  closeOnEscape: true,
  eventPool: 'default',
  openOnTriggerClick: true
};
Portal.autoControlledProps = ['open'];
Portal._meta = {
  name: 'Portal',
  type: _lib.META.TYPES.ADDON
};
Portal.handledProps = ['children', 'className', 'closeOnDocumentClick', 'closeOnEscape', 'closeOnPortalMouseLeave', 'closeOnRootNodeClick', 'closeOnTriggerBlur', 'closeOnTriggerClick', 'closeOnTriggerMouseLeave', 'defaultOpen', 'eventPool', 'mountNode', 'mouseEnterDelay', 'mouseLeaveDelay', 'onClose', 'onMount', 'onOpen', 'onUnmount', 'open', 'openOnTriggerClick', 'openOnTriggerFocus', 'openOnTriggerMouseEnter', 'prepend', 'trigger'];
Portal.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: _propTypes2.default.node.isRequired,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Controls whether or not the portal should close when the document is clicked. */
  closeOnDocumentClick: _propTypes2.default.bool,

  /** Controls whether or not the portal should close when escape is pressed is displayed. */
  closeOnEscape: _propTypes2.default.bool,

  /**
   * Controls whether or not the portal should close when mousing out of the portal.
   * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
   * gap from the trigger to the portal.
   */
  closeOnPortalMouseLeave: _propTypes2.default.bool,

  /**
   * Controls whether or not the portal should close on a click on the portal background.
   * NOTE: This differs from closeOnDocumentClick:
   * - DocumentClick - any click not within the portal
   * - RootNodeClick - a click not within the portal but within the portal's wrapper
   */
  closeOnRootNodeClick: _propTypes2.default.bool,

  /** Controls whether or not the portal should close on blur of the trigger. */
  closeOnTriggerBlur: _propTypes2.default.bool,

  /** Controls whether or not the portal should close on click of the trigger. */
  closeOnTriggerClick: _propTypes2.default.bool,

  /** Controls whether or not the portal should close when mousing out of the trigger. */
  closeOnTriggerMouseLeave: _propTypes2.default.bool,

  /** Initial value of open. */
  defaultOpen: _propTypes2.default.bool,

  /** Event pool namespace that is used to handle component events */
  eventPool: _propTypes2.default.string,

  /** The node where the portal should mount. */
  mountNode: _propTypes2.default.any,

  /** Milliseconds to wait before opening on mouse over */
  mouseEnterDelay: _propTypes2.default.number,

  /** Milliseconds to wait before closing on mouse leave */
  mouseLeaveDelay: _propTypes2.default.number,

  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: _propTypes2.default.func,

  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: _propTypes2.default.func,

  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: _propTypes2.default.func,

  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: _propTypes2.default.func,

  /** Controls whether or not the portal is displayed. */
  open: _propTypes2.default.bool,

  /** Controls whether or not the portal should open when the trigger is clicked. */
  openOnTriggerClick: _propTypes2.default.bool,

  /** Controls whether or not the portal should open on focus of the trigger. */
  openOnTriggerFocus: _propTypes2.default.bool,

  /** Controls whether or not the portal should open when mousing over the trigger. */
  openOnTriggerMouseEnter: _propTypes2.default.bool,

  /** Controls whether the portal should be prepended to the mountNode instead of appended. */
  prepend: _propTypes2.default.bool,

  /** Element to be rendered in-place where the portal is defined. */
  trigger: _propTypes2.default.node
} : {};
exports.default = Portal;