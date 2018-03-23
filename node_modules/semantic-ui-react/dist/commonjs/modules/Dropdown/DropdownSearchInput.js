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

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A search item sub-component for Dropdown component.
 */
var DropdownSearchInput = function (_Component) {
  (0, _inherits3.default)(DropdownSearchInput, _Component);

  function DropdownSearchInput() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DropdownSearchInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DropdownSearchInput.__proto__ || Object.getPrototypeOf(DropdownSearchInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
      var value = (0, _get3.default)(e, 'target.value');

      (0, _invoke3.default)(_this.props, 'onChange', e, (0, _extends3.default)({}, _this.props, { value: value }));
    }, _this.handleRef = function (c) {
      return (0, _invoke3.default)(_this.props, 'inputRef', c);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DropdownSearchInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          tabIndex = _props.tabIndex,
          type = _props.type,
          value = _props.value;

      var classes = (0, _classnames2.default)('search', className);
      var rest = (0, _lib.getUnhandledProps)(DropdownSearchInput, this.props);

      return _react2.default.createElement('input', (0, _extends3.default)({}, rest, {
        'aria-autocomplete': 'list',
        autoComplete: 'off',
        className: classes,
        onChange: this.handleChange,
        ref: this.handleRef,
        tabIndex: tabIndex,
        type: type,
        value: value
      }));
    }
  }]);
  return DropdownSearchInput;
}(_react.Component);

DropdownSearchInput.defaultProps = {
  type: 'text'
};
DropdownSearchInput._meta = {
  name: 'DropdownSearchInput',
  parent: 'Dropdown',
  type: _lib.META.TYPES.MODULE
};
DropdownSearchInput.handledProps = ['as', 'className', 'inputRef', 'tabIndex', 'type', 'value'];
DropdownSearchInput.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** A ref handler for input. */
  inputRef: _propTypes2.default.func,

  /** An input can receive focus. */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** The HTML input type. */
  type: _propTypes2.default.string,

  /** Stored value. */
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
} : {};


DropdownSearchInput.create = (0, _lib.createShorthandFactory)(DropdownSearchInput, function (type) {
  return { type: type };
});

exports.default = DropdownSearchInput;