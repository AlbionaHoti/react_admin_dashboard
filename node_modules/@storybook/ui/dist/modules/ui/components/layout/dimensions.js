'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@storybook/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = {
  position: 'absolute',
  padding: 5,
  bottom: 10,
  right: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.5)'
};

var dimensionStyle = (0, _extends3.default)({
  fontSize: 12
}, _components.baseFonts);

var delimeterStyle = (0, _extends3.default)({
  margin: '0px 5px',
  fontSize: 12
}, _components.baseFonts);

// Same as Chrome's timeout in the developer tools
var DISPLAY_TIMEOUT = 1000;

var Dimensions = function (_React$Component) {
  (0, _inherits3.default)(Dimensions, _React$Component);

  function Dimensions(props) {
    (0, _classCallCheck3.default)(this, Dimensions);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dimensions.__proto__ || (0, _getPrototypeOf2.default)(Dimensions)).call(this, props));

    _this.state = {
      isVisible: false
    };

    _this.hideTimeout = null;
    return _this;
  }

  (0, _createClass3.default)(Dimensions, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var width = _ref.width,
          height = _ref.height;

      if (width !== this.state.width || height !== this.state.height) {
        this.onChange(width, height);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.hideTimeout);
    }
  }, {
    key: 'onChange',
    value: function onChange(width, height) {
      var _this2 = this;

      this.setState({ isVisible: true });

      this.hideTimeout = setTimeout(function () {
        // Ensure the dimensions aren't still changing
        if (width === _this2.props.width && height === _this2.props.height) {
          _this2.setState({ isVisible: false });
        }
      }, DISPLAY_TIMEOUT);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.isVisible) {
        return null;
      }

      var _props = this.props,
          width = _props.width,
          height = _props.height;


      return _react2.default.createElement(
        'div',
        { style: container },
        _react2.default.createElement(
          'span',
          { style: dimensionStyle },
          width + 'px'
        ),
        _react2.default.createElement(
          'span',
          { style: delimeterStyle },
          'x'
        ),
        _react2.default.createElement(
          'span',
          { style: dimensionStyle },
          height + 'px'
        )
      );
    }
  }]);
  return Dimensions;
}(_react2.default.Component);

Dimensions.propTypes = {
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired
};

exports.default = Dimensions;