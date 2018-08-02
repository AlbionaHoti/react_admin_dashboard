'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keyCodeEnter = 13;

var MenuItem = function (_React$Component) {
  (0, _inherits3.default)(MenuItem, _React$Component);

  function MenuItem() {
    var _ref;

    (0, _classCallCheck3.default)(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuItem.__proto__ || (0, _getPrototypeOf2.default)(MenuItem)).call.apply(_ref, [this].concat(args)));

    _this.onKeyDown = _this.onKeyDown.bind(_this);
    return _this;
  }

  // Prevent focusing on mousedown


  (0, _createClass3.default)(MenuItem, [{
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      event.preventDefault();
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === keyCodeEnter) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['children']);


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          role: 'menuitem',
          tabIndex: '0',
          onKeyDown: this.onKeyDown,
          onMouseDown: this.onMouseDown
        }, restProps),
        children
      );
    }
  }]);
  return MenuItem;
}(_react2.default.Component);

exports.default = MenuItem;


MenuItem.propTypes = {
  children: _propTypes2.default.node.isRequired,
  onClick: _propTypes2.default.func.isRequired
};