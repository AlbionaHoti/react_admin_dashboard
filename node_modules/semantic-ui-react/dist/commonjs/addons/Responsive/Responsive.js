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

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Responsive can control visibility of content.
 */
var Responsive = function (_Component) {
  (0, _inherits3.default)(Responsive, _Component);

  function Responsive() {
    var _ref;

    (0, _classCallCheck3.default)(this, Responsive);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Measure the root element dimension to handle gesture transitions on iOS safely
    // https://github.com/Semantic-Org/Semantic-UI-React/pull/2531
    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Responsive.__proto__ || Object.getPrototypeOf(Responsive)).call.apply(_ref, [this].concat(args)));

    _initialiseProps.call(_this);

    _this.state = { width: (0, _lib.isBrowser)() ? document.documentElement.clientWidth : 0 };
    return _this;
  }

  (0, _createClass3.default)(Responsive, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var fireOnMount = this.props.fireOnMount;


      this.mounted = true;

      _lib.eventStack.sub('resize', this.handleResize, { target: 'window' });
      if (fireOnMount) this.handleUpdate();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
      _lib.eventStack.unsub('resize', this.handleResize, { target: 'window' });
    }

    // ----------------------------------------
    // Helpers
    // ----------------------------------------

    // ----------------------------------------
    // Event handlers
    // ----------------------------------------

  }, {
    key: 'render',


    // ----------------------------------------
    // Render
    // ----------------------------------------

    value: function render() {
      var children = this.props.children;


      var ElementType = (0, _lib.getElementType)(Responsive, this.props);
      var rest = (0, _lib.getUnhandledProps)(Responsive, this.props);

      if (this.isVisible()) return _react2.default.createElement(
        ElementType,
        rest,
        children
      );
      return null;
    }
  }]);
  return Responsive;
}(_react.Component);

Responsive._meta = {
  name: 'Responsive',
  type: _lib.META.TYPES.ADDON
};
Responsive.onlyMobile = { minWidth: 320, maxWidth: 767 };
Responsive.onlyTablet = { minWidth: 768, maxWidth: 991 };
Responsive.onlyComputer = { minWidth: 992 };
Responsive.onlyLargeScreen = { minWidth: 1200, maxWidth: 1919 };
Responsive.onlyWidescreen = { minWidth: 1920 };
Responsive.handledProps = ['as', 'children', 'fireOnMount', 'maxWidth', 'minWidth', 'onUpdate'];

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.fitsMaxWidth = function () {
    var maxWidth = _this2.props.maxWidth;
    var width = _this2.state.width;


    return (0, _isNil3.default)(maxWidth) ? true : width <= maxWidth;
  };

  this.fitsMinWidth = function () {
    var minWidth = _this2.props.minWidth;
    var width = _this2.state.width;


    return (0, _isNil3.default)(minWidth) ? true : width >= minWidth;
  };

  this.setSafeState = function () {
    return _this2.mounted && _this2.setState.apply(_this2, arguments);
  };

  this.isVisible = function () {
    return _this2.fitsMinWidth() && _this2.fitsMaxWidth();
  };

  this.handleResize = function (e) {
    if (_this2.ticking) return;

    _this2.ticking = true;
    requestAnimationFrame(function () {
      return _this2.handleUpdate(e);
    });
  };

  this.handleUpdate = function (e) {
    _this2.ticking = false;
    var width = document.documentElement.clientWidth;

    _this2.setSafeState({ width: width });
    (0, _invoke3.default)(_this2.props, 'onUpdate', e, (0, _extends3.default)({}, _this2.props, { width: width }));
  };
};

exports.default = Responsive;
Responsive.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Fires callbacks immediately after mount. */
  fireOnMount: _propTypes2.default.bool,

  /** The maximum width at which content will be displayed. */
  maxWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** The minimum width at which content will be displayed. */
  minWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * Called on update.
   *
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onUpdate: _propTypes2.default.func
} : {};