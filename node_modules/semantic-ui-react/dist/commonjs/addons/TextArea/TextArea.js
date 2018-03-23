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

var _sum2 = require('lodash/sum');

var _sum3 = _interopRequireDefault(_sum2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A TextArea can be used to allow for extended user input.
 * @see Form
 */
var TextArea = function (_Component) {
  (0, _inherits3.default)(TextArea, _Component);

  function TextArea() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.focus = function () {
      return _this.ref.focus();
    }, _this.handleChange = function (e) {
      var value = (0, _get3.default)(e, 'target.value');

      (0, _invoke3.default)(_this.props, 'onChange', e, (0, _extends3.default)({}, _this.props, { value: value }));
    }, _this.handleInput = function (e) {
      var value = (0, _get3.default)(e, 'target.value');

      (0, _invoke3.default)(_this.props, 'onInput', e, (0, _extends3.default)({}, _this.props, { value: value }));
      _this.updateHeight();
    }, _this.handleRef = function (c) {
      return _this.ref = c;
    }, _this.removeAutoHeightStyles = function () {
      _this.ref.style.height = null;
      _this.ref.style.resize = null;
    }, _this.updateHeight = function () {
      var autoHeight = _this.props.autoHeight;

      if (!_this.ref || !autoHeight) return;

      var _window$getComputedSt = window.getComputedStyle(_this.ref),
          minHeight = _window$getComputedSt.minHeight,
          borderBottomWidth = _window$getComputedSt.borderBottomWidth,
          borderTopWidth = _window$getComputedSt.borderTopWidth;

      var borderHeight = (0, _sum3.default)([borderBottomWidth, borderTopWidth].map(function (x) {
        return parseFloat(x);
      }));

      // Measure the scrollHeight and update the height to match.
      _this.ref.style.height = 'auto';
      _this.ref.style.overflowY = 'hidden';
      _this.ref.style.height = Math.max(parseFloat(minHeight), Math.ceil(_this.ref.scrollHeight + borderHeight)) + 'px';
      _this.ref.style.overflowY = '';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TextArea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateHeight();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // removed autoHeight
      if (!this.props.autoHeight && prevProps.autoHeight) {
        this.removeAutoHeightStyles();
      }
      // added autoHeight or value changed
      if (this.props.autoHeight && !prevProps.autoHeight || prevProps.value !== this.props.value) {
        this.updateHeight();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoHeight = _props.autoHeight,
          rows = _props.rows,
          style = _props.style,
          value = _props.value;

      var rest = (0, _lib.getUnhandledProps)(TextArea, this.props);
      var ElementType = (0, _lib.getElementType)(TextArea, this.props);

      var resize = autoHeight ? 'none' : '';

      return _react2.default.createElement(ElementType, (0, _extends3.default)({}, rest, {
        onChange: this.handleChange,
        onInput: this.handleInput,
        ref: this.handleRef,
        rows: rows,
        style: (0, _extends3.default)({ resize: resize }, style),
        value: value
      }));
    }
  }]);
  return TextArea;
}(_react.Component);

TextArea._meta = {
  name: 'TextArea',
  type: _lib.META.TYPES.ADDON
};
TextArea.defaultProps = {
  as: 'textarea',
  rows: 3
};
TextArea.handledProps = ['as', 'autoHeight', 'onChange', 'onInput', 'rows', 'style', 'value'];
TextArea.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Indicates whether height of the textarea fits the content or not. */
  autoHeight: _propTypes2.default.bool,

  /**
   * Called on change.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange: _propTypes2.default.func,

  /**
   * Called on input.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onInput: _propTypes2.default.func,

  /** Indicates row count for a TextArea. */
  rows: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** Custom TextArea style. */
  style: _propTypes2.default.object,

  /** The value of the textarea. */
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
} : {};
exports.default = TextArea;