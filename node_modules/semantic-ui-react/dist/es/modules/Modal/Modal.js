import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _pick from 'lodash/pick';
import _includes from 'lodash/includes';
import _reduce from 'lodash/reduce';
import _isEmpty from 'lodash/isEmpty';
import _invoke from 'lodash/invoke';
import cx from 'classnames';

import PropTypes from 'prop-types';
import React, { isValidElement } from 'react';

import { AutoControlledComponent as Component, childrenUtils, customPropTypes, getElementType, getUnhandledProps, isBrowser, META, useKeyOnly } from '../../lib';
import Icon from '../../elements/Icon';
import MountNode from '../../addons/MountNode';
import Portal from '../../addons/Portal';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalActions from './ModalActions';
import ModalDescription from './ModalDescription';

/**
 * A modal displays content that temporarily blocks interactions with the main view of a site.
 * @see Confirm
 * @see Portal
 */
var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.getMountNode = function () {
      return isBrowser() ? _this.props.mountNode || document.body : null;
    }, _this.handleActionsOverrides = function (predefinedProps) {
      return {
        onActionClick: function onActionClick(e, actionProps) {
          _invoke(predefinedProps, 'onActionClick', e, actionProps);
          _invoke(_this.props, 'onActionClick', e, _this.props);

          _this.handleClose(e);
        }
      };
    }, _this.handleClose = function (e) {

      _invoke(_this.props, 'onClose', e, _this.props);
      _this.trySetState({ open: false });
    }, _this.handleIconOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          _invoke(predefinedProps, 'onClick', e);
          _this.handleClose(e);
        }
      };
    }, _this.handleOpen = function (e) {

      _invoke(_this.props, 'onOpen', e, _this.props);
      _this.trySetState({ open: true });
    }, _this.handlePortalMount = function (e) {

      _this.setState({ scrolling: false });
      _this.setPositionAndClassNames();

      _invoke(_this.props, 'onMount', e, _this.props);
    }, _this.handlePortalUnmount = function (e) {

      cancelAnimationFrame(_this.animationRequestId);
      _invoke(_this.props, 'onUnmount', e, _this.props);
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
      if (!_isEmpty(newState)) _this.setState(newState);

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


      var classes = cx('ui', size, useKeyOnly(basic, 'basic'), useKeyOnly(scrolling, 'scrolling'), 'modal transition visible active', className);
      var ElementType = getElementType(Modal, _this.props);

      var closeIconName = closeIcon === true ? 'close' : closeIcon;
      var closeIconJSX = Icon.create(closeIconName, { overrideProps: _this.handleIconOverrides });

      if (!childrenUtils.isNil(children)) {
        return React.createElement(
          ElementType,
          _extends({}, rest, { className: classes, style: _extends({ marginTop: marginTop }, style), ref: _this.handleRef }),
          React.createElement(MountNode, { className: mountClasses, node: mountNode }),
          closeIconJSX,
          children
        );
      }

      return React.createElement(
        ElementType,
        _extends({}, rest, { className: classes, style: _extends({ marginTop: marginTop }, style), ref: _this.handleRef }),
        React.createElement(MountNode, { className: mountClasses, node: mountNode }),
        closeIconJSX,
        ModalHeader.create(header),
        ModalContent.create(content),
        ModalActions.create(actions, { overrideProps: _this.handleActionsOverrides })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
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
      if (!isBrowser()) {
        return isValidElement(trigger) ? trigger : null;
      }

      var unhandled = getUnhandledProps(Modal, this.props);
      var portalPropNames = Portal.handledProps;

      var rest = _reduce(unhandled, function (acc, val, key) {
        if (!_includes(portalPropNames, key)) acc[key] = val;

        return acc;
      }, {});
      var portalProps = _pick(unhandled, portalPropNames);

      // wrap dimmer modals
      var dimmerClasses = !dimmer ? null : cx('ui', dimmer === 'inverted' && 'inverted', 'page modals dimmer transition visible active');

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

      return React.createElement(
        Portal,
        _extends({
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
}(Component);

Modal.defaultProps = {
  dimmer: true,
  closeOnDimmerClick: true,
  closeOnDocumentClick: false,
  eventPool: 'Modal'
};
Modal.autoControlledProps = ['open'];
Modal._meta = {
  name: 'Modal',
  type: META.TYPES.MODULE
};
Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Description = ModalDescription;
Modal.Actions = ModalActions;
Modal.handledProps = ['actions', 'as', 'basic', 'children', 'className', 'closeIcon', 'closeOnDimmerClick', 'closeOnDocumentClick', 'content', 'defaultOpen', 'dimmer', 'eventPool', 'header', 'mountNode', 'onActionClick', 'onClose', 'onMount', 'onOpen', 'onUnmount', 'open', 'size', 'style', 'trigger'];
Modal.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: customPropTypes.itemShorthand,

  /** A modal can reduce its complexity */
  basic: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for the close icon. Closes the modal on click. */
  closeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.bool]),

  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick: PropTypes.bool,

  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick: PropTypes.bool,

  /** Simple text content for the Modal. */
  content: customPropTypes.itemShorthand,

  /** Initial value of open. */
  defaultOpen: PropTypes.bool,

  /** A Modal can appear in a dimmer. */
  dimmer: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['inverted', 'blurring'])]),

  /** Event pool namespace that is used to handle component events */
  eventPool: PropTypes.string,

  /** Modal displayed above the content in bold. */
  header: customPropTypes.itemShorthand,

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: PropTypes.any,

  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onActionClick: PropTypes.func,

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

  /** Controls whether or not the Modal is displayed. */
  open: PropTypes.bool,

  /** A modal can vary in size */
  size: PropTypes.oneOf(['fullscreen', 'large', 'mini', 'small', 'tiny']),

  /** Custom styles. */
  style: PropTypes.object,

  /** Element to be rendered in-place where the portal is defined. */
  trigger: PropTypes.node

  /**
   * NOTE: Any unhandled props that are defined in Portal are passed-through
   * to the wrapping Portal.
   */
} : {};


export default Modal;