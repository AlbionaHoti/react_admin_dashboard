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

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _FormButton = require('./FormButton');

var _FormButton2 = _interopRequireDefault(_FormButton);

var _FormCheckbox = require('./FormCheckbox');

var _FormCheckbox2 = _interopRequireDefault(_FormCheckbox);

var _FormDropdown = require('./FormDropdown');

var _FormDropdown2 = _interopRequireDefault(_FormDropdown);

var _FormField = require('./FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormInput = require('./FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _FormRadio = require('./FormRadio');

var _FormRadio2 = _interopRequireDefault(_FormRadio);

var _FormSelect = require('./FormSelect');

var _FormSelect2 = _interopRequireDefault(_FormSelect);

var _FormTextArea = require('./FormTextArea');

var _FormTextArea2 = _interopRequireDefault(_FormTextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Form displays a set of related user input fields in a structured way.
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Message
 * @see Radio
 * @see Select
 * @see Visibility
 */
var Form = function (_Component) {
  (0, _inherits3.default)(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Form, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          action = _props.action,
          children = _props.children,
          className = _props.className,
          error = _props.error,
          inverted = _props.inverted,
          loading = _props.loading,
          reply = _props.reply,
          size = _props.size,
          success = _props.success,
          unstackable = _props.unstackable,
          warning = _props.warning,
          widths = _props.widths;


      var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(reply, 'reply'), (0, _lib.useKeyOnly)(success, 'success'), (0, _lib.useKeyOnly)(unstackable, 'unstackable'), (0, _lib.useKeyOnly)(warning, 'warning'), (0, _lib.useWidthProp)(widths, null, true), 'form', className);
      var rest = (0, _lib.getUnhandledProps)(Form, this.props);
      var ElementType = (0, _lib.getElementType)(Form, this.props);

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, {
          action: action,
          className: classes,
          onSubmit: this.handleSubmit
        }),
        children
      );
    }
  }]);
  return Form;
}(_react.Component);

Form.defaultProps = {
  as: 'form'
};
Form._meta = {
  name: 'Form',
  type: _lib.META.TYPES.COLLECTION
};
Form.Field = _FormField2.default;
Form.Button = _FormButton2.default;
Form.Checkbox = _FormCheckbox2.default;
Form.Dropdown = _FormDropdown2.default;
Form.Group = _FormGroup2.default;
Form.Input = _FormInput2.default;
Form.Radio = _FormRadio2.default;
Form.Select = _FormSelect2.default;
Form.TextArea = _FormTextArea2.default;
Form.handledProps = ['action', 'as', 'children', 'className', 'error', 'inverted', 'loading', 'onSubmit', 'reply', 'size', 'success', 'unstackable', 'warning', 'widths'];

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleSubmit = function (e) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var action = _this2.props.action;

    // Heads up! Third party libs can pass own data as first argument, we need to check that it has preventDefault()
    // method.

    if (typeof action !== 'string') (0, _invoke3.default)(e, 'preventDefault');
    _invoke3.default.apply(undefined, [_this2.props, 'onSubmit', e, _this2.props].concat(args));
  };
};

Form.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** The HTML form action */
  action: _propTypes2.default.string,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Automatically show any error Message children. */
  error: _propTypes2.default.bool,

  /** A form can have its color inverted for contrast. */
  inverted: _propTypes2.default.bool,

  /** Automatically show a loading indicator. */
  loading: _propTypes2.default.bool,

  /** The HTML form submit handler. */
  onSubmit: _propTypes2.default.func,

  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
  reply: _propTypes2.default.bool,

  /** A form can vary in size. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'medium')),

  /** Automatically show any success Message children. */
  success: _propTypes2.default.bool,

  /** A form can prevent itself from stacking on mobile. */
  unstackable: _propTypes2.default.bool,

  /** Automatically show any warning Message children. */
  warning: _propTypes2.default.bool,

  /** Forms can automatically divide fields to be equal width. */
  widths: _propTypes2.default.oneOf(['equal'])
} : {};
exports.default = Form;