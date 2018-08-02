import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _includes from 'lodash/includes';
import _get from 'lodash/get';
import _invoke from 'lodash/invoke';
import cx from 'classnames';

import PropTypes from 'prop-types';
import { cloneElement, Component } from 'react';

import { META, normalizeTransitionDuration, SUI, useKeyOnly } from '../../lib';
import TransitionGroup from './TransitionGroup';

var TRANSITION_TYPE = {
  ENTERING: 'show',
  EXITING: 'hide'

  /**
   * A transition is an animation usually used to move content in or out of view.
   */
};
var Transition = function (_Component) {
  _inherits(Transition, _Component);

  function Transition() {
    var _ref;

    _classCallCheck(this, Transition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Transition.__proto__ || Object.getPrototypeOf(Transition)).call.apply(_ref, [this].concat(args)));

    _initialiseProps.call(_this);

    var _this$computeInitialS = _this.computeInitialStatuses(),
        status = _this$computeInitialS.initial,
        next = _this$computeInitialS.next;

    _this.nextStatus = next;
    _this.state = { status: status };
    return _this;
  }

  // ----------------------------------------
  // Lifecycle
  // ----------------------------------------

  _createClass(Transition, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.mounted = true;
      this.updateStatus();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _computeStatuses = this.computeStatuses(nextProps),
          status = _computeStatuses.current,
          next = _computeStatuses.next;

      this.nextStatus = next;
      if (status) this.setSafeState({ status: status });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {

      this.updateStatus();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      this.mounted = false;
    }

    // ----------------------------------------
    // Callback handling
    // ----------------------------------------

    // ----------------------------------------
    // Helpers
    // ----------------------------------------

  }, {
    key: 'render',


    // ----------------------------------------
    // Render
    // ----------------------------------------

    value: function render() {
      var children = this.props.children;
      var status = this.state.status;


      if (status === Transition.UNMOUNTED) return null;
      return cloneElement(children, {
        className: this.computeClasses(),
        style: this.computeStyle()
      });
    }
  }]);

  return Transition;
}(Component);

Transition.defaultProps = {
  animation: 'fade',
  duration: 500,
  visible: true,
  mountOnShow: true,
  transitionOnMount: false,
  unmountOnHide: false
};
Transition._meta = {
  name: 'Transition',
  type: META.TYPES.MODULE
};
Transition.ENTERED = 'ENTERED';
Transition.ENTERING = 'ENTERING';
Transition.EXITED = 'EXITED';
Transition.EXITING = 'EXITING';
Transition.UNMOUNTED = 'UNMOUNTED';
Transition.Group = TransitionGroup;
Transition.handledProps = ['animation', 'children', 'duration', 'mountOnShow', 'onComplete', 'onHide', 'onShow', 'onStart', 'reactKey', 'transitionOnMount', 'unmountOnHide', 'visible'];

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleStart = function () {
    var duration = _this2.props.duration;

    var status = _this2.nextStatus;

    _this2.nextStatus = null;
    _this2.setSafeState({ status: status, animating: true }, function () {
      var durationType = TRANSITION_TYPE[status];
      var durationValue = normalizeTransitionDuration(duration, durationType);

      _invoke(_this2.props, 'onStart', null, _extends({}, _this2.props, { status: status }));
      setTimeout(_this2.handleComplete, durationValue);
    });
  };

  this.handleComplete = function () {
    var current = _this2.state.status;


    _invoke(_this2.props, 'onComplete', null, _extends({}, _this2.props, { status: current }));

    if (_this2.nextStatus) {
      _this2.handleStart();
      return;
    }

    var status = _this2.computeCompletedStatus();
    var callback = current === Transition.ENTERING ? 'onShow' : 'onHide';

    _this2.setSafeState({ status: status, animating: false }, function () {
      _invoke(_this2.props, callback, null, _extends({}, _this2.props, { status: status }));
    });
  };

  this.updateStatus = function () {
    var animating = _this2.state.animating;


    if (_this2.nextStatus) {
      _this2.nextStatus = _this2.computeNextStatus();
      if (!animating) _this2.handleStart();
    }
  };

  this.computeClasses = function () {
    var _props = _this2.props,
        animation = _props.animation,
        children = _props.children;
    var _state = _this2.state,
        animating = _state.animating,
        status = _state.status;


    var childClasses = _get(children, 'props.className');
    var directional = _includes(SUI.DIRECTIONAL_TRANSITIONS, animation);

    if (directional) {
      return cx(animation, childClasses, useKeyOnly(animating, 'animating'), useKeyOnly(status === Transition.ENTERING, 'in'), useKeyOnly(status === Transition.EXITING, 'out'), useKeyOnly(status === Transition.EXITED, 'hidden'), useKeyOnly(status !== Transition.EXITED, 'visible'), 'transition');
    }

    return cx(animation, childClasses, useKeyOnly(animating, 'animating transition'));
  };

  this.computeCompletedStatus = function () {
    var unmountOnHide = _this2.props.unmountOnHide;
    var status = _this2.state.status;


    if (status === Transition.ENTERING) return Transition.ENTERED;
    return unmountOnHide ? Transition.UNMOUNTED : Transition.EXITED;
  };

  this.computeInitialStatuses = function () {
    var _props2 = _this2.props,
        visible = _props2.visible,
        mountOnShow = _props2.mountOnShow,
        transitionOnMount = _props2.transitionOnMount,
        unmountOnHide = _props2.unmountOnHide;


    if (visible) {
      if (transitionOnMount) {
        return {
          initial: Transition.EXITED,
          next: Transition.ENTERING
        };
      }
      return { initial: Transition.ENTERED };
    }

    if (mountOnShow || unmountOnHide) return { initial: Transition.UNMOUNTED };
    return { initial: Transition.EXITED };
  };

  this.computeNextStatus = function () {
    var _state2 = _this2.state,
        animating = _state2.animating,
        status = _state2.status;


    if (animating) return status === Transition.ENTERING ? Transition.EXITING : Transition.ENTERING;
    return status === Transition.ENTERED ? Transition.EXITING : Transition.ENTERING;
  };

  this.computeStatuses = function (props) {
    var status = _this2.state.status;
    var visible = props.visible;


    if (visible) {
      return {
        current: status === Transition.UNMOUNTED && Transition.EXITED,
        next: status !== Transition.ENTERING && status !== Transition.ENTERED && Transition.ENTERING
      };
    }

    return {
      next: (status === Transition.ENTERING || status === Transition.ENTERED) && Transition.EXITING
    };
  };

  this.computeStyle = function () {
    var _props3 = _this2.props,
        children = _props3.children,
        duration = _props3.duration;
    var status = _this2.state.status;


    var childStyle = _get(children, 'props.style');
    var type = TRANSITION_TYPE[status];
    var animationDuration = type && normalizeTransitionDuration(duration, type) + 'ms';

    return _extends({}, childStyle, { animationDuration: animationDuration });
  };

  this.setSafeState = function () {
    return _this2.mounted && _this2.setState.apply(_this2, arguments);
  };
};

export default Transition;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Named animation event to used. Must be defined in CSS. */
  animation: PropTypes.oneOf(SUI.TRANSITIONS),

  /** Primary content. */
  children: PropTypes.element.isRequired,

  /** Duration of the CSS transition animation in milliseconds. */
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    hide: PropTypes.number,
    show: PropTypes.number
  }), PropTypes.string]),

  /** Show the component; triggers the enter or exit animation. */
  visible: PropTypes.bool,

  /** Wait until the first "enter" transition to mount the component (add it to the DOM). */
  mountOnShow: PropTypes.bool,

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onComplete: PropTypes.func,

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onHide: PropTypes.func,

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onShow: PropTypes.func,

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onStart: PropTypes.func,

  /** React's key of the element. */
  reactKey: PropTypes.string,

  /** Run the enter animation when the component mounts, if it is initially shown. */
  transitionOnMount: PropTypes.bool,

  /** Unmount the component (remove it from the DOM) when it is not shown. */
  unmountOnHide: PropTypes.bool
} : {};