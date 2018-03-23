import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _invoke from 'lodash/invoke';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Portal from '../Portal';
import Transition from '../../modules/Transition';
import { getUnhandledProps, META } from '../../lib';

/**
 * A sugar for `Portal` and `Transition`.
 * @see Portal
 * @see Transition
 */
var TransitionablePortal = function (_Component) {
  _inherits(TransitionablePortal, _Component);

  function TransitionablePortal(props) {
    _classCallCheck(this, TransitionablePortal);

    var _this = _possibleConstructorReturn(this, (TransitionablePortal.__proto__ || Object.getPrototypeOf(TransitionablePortal)).call(this, props));

    _this.handlePortalClose = function () {

      _this.setState({ portalOpen: false });
    };

    _this.handlePortalOpen = function () {

      _this.setState({ portalOpen: true });
    };

    _this.handleTransitionHide = function (nothing, data) {
      var portalOpen = _this.state.portalOpen;


      _this.setState({ transitionVisible: false });
      _invoke(_this.props, 'onClose', null, _extends({}, data, { portalOpen: false, transitionVisible: false }));
      _invoke(_this.props, 'onHide', null, _extends({}, data, { portalOpen: portalOpen, transitionVisible: false }));
    };

    _this.handleTransitionStart = function (nothing, data) {
      var portalOpen = _this.state.portalOpen;
      var status = data.status;

      var transitionVisible = status === Transition.ENTERING;

      _invoke(_this.props, 'onStart', null, _extends({}, data, { portalOpen: portalOpen, transitionVisible: transitionVisible }));

      // Heads up! TransitionablePortal fires onOpen callback on the start of transition animation
      if (!transitionVisible) return;

      _this.setState({ transitionVisible: transitionVisible });
      _invoke(_this.props, 'onOpen', null, _extends({}, data, { transitionVisible: transitionVisible, portalOpen: true }));
    };

    _this.state = {
      portalOpen: props.open
    };
    return _this;
  }

  // ----------------------------------------
  // Lifecycle
  // ----------------------------------------

  _createClass(TransitionablePortal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var open = _ref.open;


      this.setState({ portalOpen: open });
    }

    // ----------------------------------------
    // Callback handling
    // ----------------------------------------

  }, {
    key: 'render',


    // ----------------------------------------
    // Render
    // ----------------------------------------

    value: function render() {
      var _props = this.props,
          children = _props.children,
          transition = _props.transition;
      var _state = this.state,
          portalOpen = _state.portalOpen,
          transitionVisible = _state.transitionVisible;


      var open = portalOpen || transitionVisible;
      var rest = getUnhandledProps(TransitionablePortal, this.props);

      return React.createElement(
        Portal,
        _extends({}, rest, {
          open: open,
          onOpen: this.handlePortalOpen,
          onClose: this.handlePortalClose
        }),
        React.createElement(
          Transition,
          _extends({}, transition, {
            transitionOnMount: true,
            onStart: this.handleTransitionStart,
            onHide: this.handleTransitionHide,
            visible: portalOpen
          }),
          children
        )
      );
    }
  }]);

  return TransitionablePortal;
}(Component);

TransitionablePortal._meta = {
  name: 'TransitionablePortal',
  type: META.TYPES.ADDON
};
TransitionablePortal.defaultProps = {
  transition: {
    animation: 'scale',
    duration: 400
  }
};
TransitionablePortal.handledProps = ['children', 'onClose', 'onHide', 'onOpen', 'onStart', 'open', 'transition'];
export default TransitionablePortal;
TransitionablePortal.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: PropTypes.node.isRequired,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and internal state.
   */
  onClose: PropTypes.func,

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with transition status and internal state.
   */
  onHide: PropTypes.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and internal state.
   */
  onOpen: PropTypes.func,

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with transition status and internal state.
   */
  onStart: PropTypes.func,

  /** Controls whether or not the portal is displayed. */
  open: PropTypes.bool,

  /** Transition props. */
  transition: PropTypes.object
} : {};