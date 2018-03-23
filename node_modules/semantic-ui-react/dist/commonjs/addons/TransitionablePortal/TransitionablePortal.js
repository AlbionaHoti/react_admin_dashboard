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

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Transition = require('../../modules/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A sugar for `Portal` and `Transition`.
 * @see Portal
 * @see Transition
 */
var TransitionablePortal = function (_Component) {
  (0, _inherits3.default)(TransitionablePortal, _Component);

  function TransitionablePortal(props) {
    (0, _classCallCheck3.default)(this, TransitionablePortal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TransitionablePortal.__proto__ || Object.getPrototypeOf(TransitionablePortal)).call(this, props));

    _this.handlePortalClose = function () {

      _this.setState({ portalOpen: false });
    };

    _this.handlePortalOpen = function () {

      _this.setState({ portalOpen: true });
    };

    _this.handleTransitionHide = function (nothing, data) {
      var portalOpen = _this.state.portalOpen;


      _this.setState({ transitionVisible: false });
      (0, _invoke3.default)(_this.props, 'onClose', null, (0, _extends3.default)({}, data, { portalOpen: false, transitionVisible: false }));
      (0, _invoke3.default)(_this.props, 'onHide', null, (0, _extends3.default)({}, data, { portalOpen: portalOpen, transitionVisible: false }));
    };

    _this.handleTransitionStart = function (nothing, data) {
      var portalOpen = _this.state.portalOpen;
      var status = data.status;

      var transitionVisible = status === _Transition2.default.ENTERING;

      (0, _invoke3.default)(_this.props, 'onStart', null, (0, _extends3.default)({}, data, { portalOpen: portalOpen, transitionVisible: transitionVisible }));

      // Heads up! TransitionablePortal fires onOpen callback on the start of transition animation
      if (!transitionVisible) return;

      _this.setState({ transitionVisible: transitionVisible });
      (0, _invoke3.default)(_this.props, 'onOpen', null, (0, _extends3.default)({}, data, { transitionVisible: transitionVisible, portalOpen: true }));
    };

    _this.state = {
      portalOpen: props.open
    };
    return _this;
  }

  // ----------------------------------------
  // Lifecycle
  // ----------------------------------------

  (0, _createClass3.default)(TransitionablePortal, [{
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
      var rest = (0, _lib.getUnhandledProps)(TransitionablePortal, this.props);

      return _react2.default.createElement(
        _Portal2.default,
        (0, _extends3.default)({}, rest, {
          open: open,
          onOpen: this.handlePortalOpen,
          onClose: this.handlePortalClose
        }),
        _react2.default.createElement(
          _Transition2.default,
          (0, _extends3.default)({}, transition, {
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
}(_react.Component);

TransitionablePortal._meta = {
  name: 'TransitionablePortal',
  type: _lib.META.TYPES.ADDON
};
TransitionablePortal.defaultProps = {
  transition: {
    animation: 'scale',
    duration: 400
  }
};
TransitionablePortal.handledProps = ['children', 'onClose', 'onHide', 'onOpen', 'onStart', 'open', 'transition'];
exports.default = TransitionablePortal;
TransitionablePortal.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: _propTypes2.default.node.isRequired,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and internal state.
   */
  onClose: _propTypes2.default.func,

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with transition status and internal state.
   */
  onHide: _propTypes2.default.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and internal state.
   */
  onOpen: _propTypes2.default.func,

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with transition status and internal state.
   */
  onStart: _propTypes2.default.func,

  /** Controls whether or not the portal is displayed. */
  open: _propTypes2.default.bool,

  /** Transition props. */
  transition: _propTypes2.default.object
} : {};