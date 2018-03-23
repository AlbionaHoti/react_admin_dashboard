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

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _reduce2 = require('lodash/reduce');

var _reduce3 = _interopRequireDefault(_reduce2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _MountNode = require('../../addons/MountNode');

var _MountNode2 = _interopRequireDefault(_MountNode);

var _Portal = require('../../addons/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalContent = require('./ModalContent');

var _ModalContent2 = _interopRequireDefault(_ModalContent);

var _ModalActions = require('./ModalActions');

var _ModalActions2 = _interopRequireDefault(_ModalActions);

var _ModalDescription = require('./ModalDescription');

var _ModalDescription2 = _interopRequireDefault(_ModalDescription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A modal displays content that temporarily blocks interactions with the main view of a site.
 * @see Confirm
 * @see Portal
 */
var Modal = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.getMountNode = function () {
      return (0, _lib.isBrowser)() ? _this.props.mountNode || document.body : null;
    }, _this.handleActionsOverrides = function (predefinedProps) {
      return {
        onActionClick: function onActionClick(e, actionProps) {
          (0, _invoke3.default)(predefinedProps, 'onActionClick', e, actionProps);
          (0, _invoke3.default)(_this.props, 'onActionClick', e, _this.props);

          _this.handleClose(e);
        }
      };
    }, _this.handleClose = function (e) {

      (0, _invoke3.default)(_this.props, 'onClose', e, _this.props);
      _this.trySetState({ open: false });
    }, _this.handleIconOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          (0, _invoke3.default)(predefinedProps, 'onClick', e);
          _this.handleClose(e);
        }
      };
    }, _this.handleOpen = function (e) {

      (0, _invoke3.default)(_this.props, 'onOpen', e, _this.props);
      _this.trySetState({ open: true });
    }, _this.handlePortalMount = function (e) {

      _this.setState({ scrolling: false });
      _this.setPositionAndClassNames();

      (0, _invoke3.default)(_this.props, 'onMount', e, _this.props);
    }, _this.handlePortalUnmount = function (e) {

      cancelAnimationFrame(_this.animationRequestId);
      (0, _invoke3.default)(_this.props, 'onUnmount', e, _this.props);
    }, _this.handleRef = function (c) {
      return _this.ref = c;
    }, _this.setPositionAndClassNames = function () {
      var dimmer = _this.props.dimmer;

      var classes = void 0;

      if (dimmer) {
        classes = 'dimmable dimmed';

        if (dimmer === 'blurring') {
          classes += ' blurring';
        }
      }

      var newState = {};

      if (_this.ref) {
        var _this$ref$getBounding = _this.ref.getBoundingClientRect(),
            height = _this$ref$getBounding.height;

        var marginTop = -Math.round(height / 2);
        var scrolling = height >= window.innerHeight;

        if (_this.state.marginTop !== marginTop) {
          newState.marginTop = marginTop;
        }

        if (_this.state.scrolling !== scrolling) {
          newState.scrolling = scrolling;
        }

        if (scrolling) classes += ' scrolling';
      }

      if (_this.state.mountClasses !== classes) newState.mountClasses = classes;
      if (!(0, _isEmpty3.default)(newState)) _this.setState(newState);

      _this.animationRequestId = requestAnimationFrame(_this.setPositionAndClassNames);
    }, _this.renderContent = function (rest) {
      var _this$props = _this.props,
          actions = _this$props.actions,
          basic = _this$props.basic,
          children = _this$props.children,
          className = _this$props.className,
          closeIcon = _this$props.closeIcon,
          content = _this$props.content,
          header = _this$props.header,
          mountNode = _this$props.mountNode,
          size = _this$props.size,
          style = _this$props.style;
      var _this$state = _this.state,
          marginTop = _this$state.marginTop,
          mountClasses = _this$state.mountClasses,
          scrolling = _this$state.scrolling;


      var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(scrolling, 'scrolling'), 'modal transition visible active', className);
      var ElementType = (0, _lib.getElementType)(Modal, _this.props);

      var closeIconName = closeIcon === true ? 'close' : closeIcon;
      var closeIconJSX = _Icon2.default.create(closeIconName, { overrideProps: _this.handleIconOverrides });

      if (!_lib.childrenUtils.isNil(children)) {
        return _react2.default.createElement(
          ElementType,
          (0, _extends3.default)({}, rest, { className: classes, style: (0, _extends3.default)({ marginTop: marginTop }, style), ref: _this.handleRef }),
          _react2.default.createElement(_MountNode2.default, { className: mountClasses, node: mountNode }),
          closeIconJSX,
          children
        );
      }

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes, style: (0, _extends3.default)({ marginTop: marginTop }, style), ref: _this.handleRef }),
        _react2.default.createElement(_MountNode2.default, { className: mountClasses, node: mountNode }),
        closeIconJSX,
        _ModalHeader2.default.create(header),
        _ModalContent2.default.create(content),
        _ModalActions2.default.create(actions, { overrideProps: _this.handleActionsOverrides })
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handlePortalUnmount();
    }

    // Do not access document when server side rendering

  }, {
    key: 'render',
    value: function render() {
      var open = this.state.open;
      var _props = this.props,
          closeOnDimmerClick = _props.closeOnDimmerClick,
          closeOnDocumentClick = _props.closeOnDocumentClick,
          dimmer = _props.dimmer,
          eventPool = _props.eventPool,
          trigger = _props.trigger;

      var mountNode = this.getMountNode();

      // Short circuit when server side rendering
      if (!(0, _lib.isBrowser)()) {
        return (0, _react.isValidElement)(trigger) ? trigger : null;
      }

      var unhandled = (0, _lib.getUnhandledProps)(Modal, this.props);
      var portalPropNames = _Portal2.default.handledProps;

      var rest = (0, _reduce3.default)(unhandled, function (acc, val, key) {
        if (!(0, _includes3.default)(portalPropNames, key)) acc[key] = val;

        return acc;
      }, {});
      var portalProps = (0, _pick3.default)(unhandled, portalPropNames);

      // wrap dimmer modals
      var dimmerClasses = !dimmer ? null : (0, _classnames2.default)('ui', dimmer === 'inverted' && 'inverted', 'page modals dimmer transition visible active');

      // Heads up!
      //
      // The SUI CSS selector to prevent the modal itself from blurring requires an immediate .dimmer child:
      // .blurring.dimmed.dimmable>:not(.dimmer) { ... }
      //
      // The .blurring.dimmed.dimmable is the body, so that all body content inside is blurred.
      // We need the immediate child to be the dimmer to :not() blur the modal itself!
      // Otherwise, the portal div is also blurred, blurring the modal.
      //
      // We cannot them wrap the modalJSX in an actual <Dimmer /> instead, we apply the dimmer classes to the <Portal />.

      return _react2.default.createElement(
        _Portal2.default,
        (0, _extends3.default)({
          closeOnDocumentClick: closeOnDocumentClick,
          closeOnRootNodeClick: closeOnDimmerClick
        }, portalProps, {
          trigger: trigger,
          className: dimmerClasses,
          eventPool: eventPool,
          mountNode: mountNode,
          open: open,
          onClose: this.handleClose,
          onMount: this.handlePortalMount,
          onOpen: this.handleOpen,
          onUnmount: this.handlePortalUnmount
        }),
        this.renderContent(rest)
      );
    }
  }]);
  return Modal;
}(_lib.AutoControlledComponent);

Modal.defaultProps = {
  dimmer: true,
  closeOnDimmerClick: true,
  closeOnDocumentClick: false,
  eventPool: 'Modal'
};
Modal.autoControlledProps = ['open'];
Modal._meta = {
  name: 'Modal',
  type: _lib.META.TYPES.MODULE
};
Modal.Header = _ModalHeader2.default;
Modal.Content = _ModalContent2.default;
Modal.Description = _ModalDescription2.default;
Modal.Actions = _ModalActions2.default;
Modal.handledProps = ['actions', 'as', 'basic', 'children', 'className', 'closeIcon', 'closeOnDimmerClick', 'closeOnDocumentClick', 'content', 'defaultOpen', 'dimmer', 'eventPool', 'header', 'mountNode', 'onActionClick', 'onClose', 'onMount', 'onOpen', 'onUnmount', 'open', 'size', 'style', 'trigger'];
Modal.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: _lib.customPropTypes.itemShorthand,

  /** A modal can reduce its complexity */
  basic: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for the close icon. Closes the modal on click. */
  closeIcon: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.object, _propTypes2.default.bool]),

  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick: _propTypes2.default.bool,

  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick: _propTypes2.default.bool,

  /** Simple text content for the Modal. */
  content: _lib.customPropTypes.itemShorthand,

  /** Initial value of open. */
  defaultOpen: _propTypes2.default.bool,

  /** A Modal can appear in a dimmer. */
  dimmer: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['inverted', 'blurring'])]),

  /** Event pool namespace that is used to handle component events */
  eventPool: _propTypes2.default.string,

  /** Modal displayed above the content in bold. */
  header: _lib.customPropTypes.itemShorthand,

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: _propTypes2.default.any,

  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onActionClick: _propTypes2.default.func,

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

  /** Controls whether or not the Modal is displayed. */
  open: _propTypes2.default.bool,

  /** A modal can vary in size */
  size: _propTypes2.default.oneOf(['fullscreen', 'large', 'mini', 'small', 'tiny']),

  /** Custom styles. */
  style: _propTypes2.default.object,

  /** Element to be rendered in-place where the portal is defined. */
  trigger: _propTypes2.default.node

  /**
   * NOTE: Any unhandled props that are defined in Portal are passed-through
   * to the wrapping Portal.
   */
} : {};
exports.default = Modal;