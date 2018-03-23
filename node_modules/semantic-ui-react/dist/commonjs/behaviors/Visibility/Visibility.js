'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _forEach2 = require('lodash/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Visibility provides a set of callbacks for when a content appears in the viewport.
 */
var Visibility = function (_Component) {
  (0, _inherits3.default)(Visibility, _Component);

  function Visibility() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Visibility);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call.apply(_ref, [this].concat(args))), _this), _this.calculations = {
      bottomPassed: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      offScreen: false,
      onScreen: false,
      topPassed: false,
      topVisible: false
    }, _this.firedCallbacks = [], _this.fire = function (_ref2, value) {
      var callback = _ref2.callback,
          name = _ref2.name;
      var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _this$props = _this.props,
          continuous = _this$props.continuous,
          once = _this$props.once;

      // Heads up! For the execution is required:
      // - current value correspond to the fired direction
      // - `continuous` is true or calculation values are different

      var matchesDirection = _this.calculations[value] !== reverse;
      var executionPossible = continuous || _this.calculations[value] !== _this.oldCalculations[value];

      if (matchesDirection && executionPossible) _this.execute(callback, name);

      // Heads up! We should remove callback from the happened when it's not `once`
      if (!once) _this.firedCallbacks = (0, _without3.default)(_this.firedCallbacks, name);
    }, _this.handleUpdate = function () {
      if (_this.ticking) return;

      _this.ticking = true;
      requestAnimationFrame(_this.update);
    }, _this.update = function () {
      _this.ticking = false;

      _this.oldCalculations = _this.calculations;
      _this.calculations = _this.computeCalculations();
      _this.pageYOffset = window.pageYOffset;

      var _this$props2 = _this.props,
          onBottomPassed = _this$props2.onBottomPassed,
          onBottomPassedReverse = _this$props2.onBottomPassedReverse,
          onBottomVisible = _this$props2.onBottomVisible,
          onBottomVisibleReverse = _this$props2.onBottomVisibleReverse,
          onPassing = _this$props2.onPassing,
          onPassingReverse = _this$props2.onPassingReverse,
          onTopPassed = _this$props2.onTopPassed,
          onTopPassedReverse = _this$props2.onTopPassedReverse,
          onTopVisible = _this$props2.onTopVisible,
          onTopVisibleReverse = _this$props2.onTopVisibleReverse,
          onOffScreen = _this$props2.onOffScreen,
          onOnScreen = _this$props2.onOnScreen;

      var forward = {
        bottomPassed: { callback: onBottomPassed, name: 'onBottomPassed' },
        bottomVisible: { callback: onBottomVisible, name: 'onBottomVisible' },
        passing: { callback: onPassing, name: 'onPassing' },
        offScreen: { callback: onOffScreen, name: 'onOffScreen' },
        onScreen: { callback: onOnScreen, name: 'onOnScreen' },
        topPassed: { callback: onTopPassed, name: 'onTopPassed' },
        topVisible: { callback: onTopVisible, name: 'onTopVisible' }
      };

      var reverse = {
        bottomPassed: { callback: onBottomPassedReverse, name: 'onBottomPassedReverse' },
        bottomVisible: { callback: onBottomVisibleReverse, name: 'onBottomVisibleReverse' },
        passing: { callback: onPassingReverse, name: 'onPassingReverse' },
        topPassed: { callback: onTopPassedReverse, name: 'onTopPassedReverse' },
        topVisible: { callback: onTopVisibleReverse, name: 'onTopVisibleReverse' }
      };

      (0, _invoke3.default)(_this.props, 'onUpdate', null, (0, _extends3.default)({}, _this.props, { calculations: _this.calculations }));
      _this.fireOnPassed();

      // Heads up! Reverse callbacks should be fired first
      (0, _forEach3.default)(reverse, function (data, value) {
        return _this.fire(data, value, true);
      });
      (0, _forEach3.default)(forward, function (data, value) {
        return _this.fire(data, value);
      });
    }, _this.handleRef = function (c) {
      return _this.ref = c;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Visibility, [{
    key: 'componentWillReceiveProps',


    // ----------------------------------------
    // Lifecycle
    // ----------------------------------------

    value: function componentWillReceiveProps(_ref3) {
      var continuous = _ref3.continuous,
          once = _ref3.once,
          context = _ref3.context;

      var cleanHappened = continuous !== this.props.continuous || once !== this.props.once;

      // Heads up! We should clean up array of happened callbacks, if values of these props are changed
      if (cleanHappened) this.firedCallbacks = [];

      if (this.props.context !== context) {
        this.unattachHandlers(this.props.context);
        this.attachHandlers(context);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!(0, _lib.isBrowser)()) return;
      var _props = this.props,
          context = _props.context,
          fireOnMount = _props.fireOnMount;


      this.pageYOffset = window.pageYOffset;
      this.attachHandlers(context);

      if (fireOnMount) this.update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var context = this.props.context;


      this.unattachHandlers(context);
    }
  }, {
    key: 'attachHandlers',
    value: function attachHandlers(context) {
      if (context) {
        _lib.eventStack.sub('resize', this.handleUpdate, { target: context });
        _lib.eventStack.sub('scroll', this.handleUpdate, { target: context });
      }
    }
  }, {
    key: 'unattachHandlers',
    value: function unattachHandlers(context) {
      if (context) {
        _lib.eventStack.unsub('resize', this.handleUpdate, { target: context });
        _lib.eventStack.unsub('scroll', this.handleUpdate, { target: context });
      }
    }

    // ----------------------------------------
    // Callback handling
    // ----------------------------------------

  }, {
    key: 'execute',
    value: function execute(callback, name) {
      var continuous = this.props.continuous;

      if (!callback) return;

      // Heads up! When `continuous` is true, callback will be fired always
      if (!continuous && (0, _includes3.default)(this.firedCallbacks, name)) return;

      callback(null, (0, _extends3.default)({}, this.props, { calculations: this.calculations }));
      this.firedCallbacks.push(name);
    }
  }, {
    key: 'fireOnPassed',
    value: function fireOnPassed() {
      var _this2 = this;

      var _calculations = this.calculations,
          percentagePassed = _calculations.percentagePassed,
          pixelsPassed = _calculations.pixelsPassed;
      var onPassed = this.props.onPassed;


      (0, _forEach3.default)(onPassed, function (callback, passed) {
        var pixelsValue = Number(passed);

        if (pixelsValue && pixelsPassed >= pixelsValue) {
          _this2.execute(callback, passed);
          return;
        }

        var matchPercentage = ('' + passed).match(/^(\d+)%$/);
        if (!matchPercentage) return;

        var percentageValue = Number(matchPercentage[1]) / 100;
        if (percentagePassed >= percentageValue) _this2.execute(callback, passed);
      });
    }
  }, {
    key: 'computeCalculations',


    // ----------------------------------------
    // Helpers
    // ----------------------------------------

    value: function computeCalculations() {
      var offset = this.props.offset;

      var _ref$getBoundingClien = this.ref.getBoundingClientRect(),
          bottom = _ref$getBoundingClien.bottom,
          height = _ref$getBoundingClien.height,
          top = _ref$getBoundingClien.top,
          width = _ref$getBoundingClien.width;

      var _normalizeOffset = (0, _lib.normalizeOffset)(offset),
          _normalizeOffset2 = (0, _slicedToArray3.default)(_normalizeOffset, 2),
          topOffset = _normalizeOffset2[0],
          bottomOffset = _normalizeOffset2[1];

      var direction = window.pageYOffset > this.pageYOffset ? 'down' : 'up';
      var topPassed = top < topOffset;
      var bottomPassed = bottom < bottomOffset;

      var pixelsPassed = bottomPassed ? 0 : Math.max(top * -1, 0);
      var percentagePassed = pixelsPassed / height;

      var bottomVisible = bottom >= bottomOffset && bottom <= window.innerHeight;
      var topVisible = top >= topOffset && top <= window.innerHeight;

      var fits = topVisible && bottomVisible;
      var passing = topPassed && !bottomPassed;

      var onScreen = (topVisible || topPassed) && !bottomPassed;
      var offScreen = !onScreen;

      return {
        bottomPassed: bottomPassed,
        bottomVisible: bottomVisible,
        direction: direction,
        fits: fits,
        height: height,
        passing: passing,
        percentagePassed: percentagePassed,
        pixelsPassed: pixelsPassed,
        offScreen: offScreen,
        onScreen: onScreen,
        topPassed: topPassed,
        topVisible: topVisible,
        width: width
      };
    }

    // ----------------------------------------
    // Refs
    // ----------------------------------------

  }, {
    key: 'render',


    // ----------------------------------------
    // Render
    // ----------------------------------------

    value: function render() {
      var children = this.props.children;

      var ElementType = (0, _lib.getElementType)(Visibility, this.props);
      var rest = (0, _lib.getUnhandledProps)(Visibility, this.props);

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { ref: this.handleRef }),
        children
      );
    }
  }]);
  return Visibility;
}(_react.Component);

Visibility.defaultProps = {
  context: (0, _lib.isBrowser)() ? window : null,
  continuous: false,
  offset: [0, 0],
  once: true
};
Visibility._meta = {
  name: 'Visibility',
  type: _lib.META.TYPES.BEHAVIOR
};
Visibility.handledProps = ['as', 'children', 'context', 'continuous', 'fireOnMount', 'offset', 'onBottomPassed', 'onBottomPassedReverse', 'onBottomVisible', 'onBottomVisibleReverse', 'onOffScreen', 'onOnScreen', 'onPassed', 'onPassing', 'onPassingReverse', 'onTopPassed', 'onTopPassedReverse', 'onTopVisible', 'onTopVisibleReverse', 'onUpdate', 'once'];
exports.default = Visibility;
Visibility.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Context which visibility should attach onscroll events. */
  context: _propTypes2.default.object,

  /**
   * When set to true a callback will occur anytime an element passes a condition not just immediately after the
   * threshold is met.
   */
  continuous: _propTypes2.default.bool,

  /** Fires callbacks immediately after mount. */
  fireOnMount: _propTypes2.default.bool,

  /**
   * Element's bottom edge has passed top of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomPassed: _propTypes2.default.func,

  /**
   * Element's bottom edge has not passed top of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomPassedReverse: _propTypes2.default.func,

  /**
   * Element's bottom edge has passed bottom of screen
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomVisible: _propTypes2.default.func,

  /**
   * Element's bottom edge has not passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomVisibleReverse: _propTypes2.default.func,

  /**
   * Value that context should be adjusted in pixels. Useful for making content appear below content fixed to the
   * page.
   */
  offset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]))]),

  /** When set to false a callback will occur each time an element passes the threshold for a condition. */
  once: _propTypes2.default.bool,

  /** Element is not visible on the screen. */
  onPassed: _propTypes2.default.object,

  /**
   * Any part of an element is visible on screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onPassing: _propTypes2.default.func,

  /**
   * Element's top has not passed top of screen but bottom has.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onPassingReverse: _propTypes2.default.func,

  /**
   * Element is not visible on the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onOffScreen: _propTypes2.default.func,

  /**
   * Element is visible on the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onOnScreen: _propTypes2.default.func,

  /**
   * Element's top edge has passed top of the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopPassed: _propTypes2.default.func,

  /**
   * Element's top edge has not passed top of the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopPassedReverse: _propTypes2.default.func,

  /**
   * Element's top edge has passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopVisible: _propTypes2.default.func,

  /**
   * Element's top edge has not passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopVisibleReverse: _propTypes2.default.func,

  /**
   * Element's top edge has passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUpdate: _propTypes2.default.func
} : {};