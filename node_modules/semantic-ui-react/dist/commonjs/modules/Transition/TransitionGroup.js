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

var _values2 = require('lodash/values');

var _values3 = _interopRequireDefault(_values2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _forEach2 = require('lodash/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _mapValues2 = require('lodash/mapValues');

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Transition = require('./Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Transition.Group animates children as they mount and unmount.
 */
var TransitionGroup = function (_React$Component) {
  (0, _inherits3.default)(TransitionGroup, _React$Component);

  function TransitionGroup() {
    var _ref;

    (0, _classCallCheck3.default)(this, TransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = TransitionGroup.__proto__ || Object.getPrototypeOf(TransitionGroup)).call.apply(_ref, [this].concat(args)));

    _initialiseProps.call(_this);

    var children = _this.props.children;

    _this.state = { children: (0, _mapValues3.default)((0, _lib.getChildMapping)(children), function (child) {
        return _this.wrapChild(child);
      }) };
    return _this;
  }

  (0, _createClass3.default)(TransitionGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var prevMapping = this.state.children;

      var nextMapping = (0, _lib.getChildMapping)(nextProps.children);
      var children = (0, _lib.mergeChildMappings)(prevMapping, nextMapping);

      (0, _forEach3.default)(children, function (child, key) {
        var hasPrev = (0, _has3.default)(prevMapping, key);
        var hasNext = (0, _has3.default)(nextMapping, key);
        var prevChild = prevMapping[key];

        var isLeaving = !(0, _get3.default)(prevChild, 'props.visible');

        // Heads up!
        // An item is new (entering), it will be picked from `nextChildren`, so it should be wrapped
        if (hasNext && (!hasPrev || isLeaving)) {
          children[key] = _this2.wrapChild(child, { transitionOnMount: true });
          return;
        }

        // Heads up!
        // An item is old (exiting), it will be picked from `prevChildren`, so it has been already
        // wrapped, so should be only updated
        if (!hasNext && hasPrev && !isLeaving) {
          children[key] = (0, _react.cloneElement)(prevChild, { visible: false });
          return;
        }

        // Heads up!
        // An item item hasn't changed transition states, but it will be picked from `nextChildren`,
        // so we should wrap it again
        var _prevChild$props = prevChild.props,
            visible = _prevChild$props.visible,
            transitionOnMount = _prevChild$props.transitionOnMount;


        children[key] = _this2.wrapChild(child, { transitionOnMount: transitionOnMount, visible: visible });
      });

      this.setState({ children: children });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.state.children;

      var ElementType = (0, _lib.getElementType)(TransitionGroup, this.props);
      var rest = (0, _lib.getUnhandledProps)(TransitionGroup, this.props);

      return _react2.default.createElement(
        ElementType,
        rest,
        (0, _values3.default)(children)
      );
    }
  }]);
  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.defaultProps = {
  animation: 'fade',
  duration: 500
};
TransitionGroup._meta = {
  name: 'TransitionGroup',
  parent: 'Transition',
  type: _lib.META.TYPES.MODULE
};
TransitionGroup.handledProps = ['animation', 'as', 'children', 'duration'];

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleOnHide = function (nothing, childProps) {
    var reactKey = childProps.reactKey;


    _this3.setState(function (state) {
      var children = (0, _extends3.default)({}, state.children);
      delete children[reactKey];

      return { children: children };
    });
  };

  this.wrapChild = function (child) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _props = _this3.props,
        animation = _props.animation,
        duration = _props.duration;
    var key = child.key;
    var _options$visible = options.visible,
        visible = _options$visible === undefined ? true : _options$visible,
        _options$transitionOn = options.transitionOnMount,
        transitionOnMount = _options$transitionOn === undefined ? false : _options$transitionOn;


    return _react2.default.createElement(
      _Transition2.default,
      {
        animation: animation,
        duration: duration,
        key: key,
        onHide: _this3.handleOnHide,
        reactKey: key,
        transitionOnMount: transitionOnMount,
        visible: visible
      },
      child
    );
  };
};

exports.default = TransitionGroup;
TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Named animation event to used. Must be defined in CSS. */
  animation: _propTypes2.default.oneOf(_lib.SUI.TRANSITIONS),

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Duration of the CSS transition animation in milliseconds. */
  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
    hide: _propTypes2.default.number.isRequired,
    show: _propTypes2.default.number.isRequired
  }), _propTypes2.default.string])
} : {};