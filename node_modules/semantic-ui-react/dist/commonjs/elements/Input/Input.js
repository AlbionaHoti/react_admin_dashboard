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

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Button = require('../../elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Label = require('../../elements/Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An Input is a field used to elicit a response from a user.
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */
var Input = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.computeIcon = function () {
      var _this$props = _this.props,
          loading = _this$props.loading,
          icon = _this$props.icon;


      if (!(0, _isNil3.default)(icon)) return icon;
      if (loading) return 'spinner';
    }, _this.computeTabIndex = function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;


      if (!(0, _isNil3.default)(tabIndex)) return tabIndex;
      if (disabled) return -1;
    }, _this.focus = function () {
      return _this.inputRef.focus();
    }, _this.handleChange = function (e) {
      var value = (0, _get3.default)(e, 'target.value');

      (0, _invoke3.default)(_this.props, 'onChange', e, (0, _extends3.default)({}, _this.props, { value: value }));
    }, _this.handleChildOverrides = function (child, defaultProps) {
      return (0, _extends3.default)({}, defaultProps, child.props, {
        ref: function ref(c) {
          (0, _invoke3.default)(child, 'ref', c);
          _this.handleInputRef(c);
        }
      });
    }, _this.handleInputRef = function (c) {
      return _this.inputRef = c;
    }, _this.partitionProps = function () {
      var _this$props3 = _this.props,
          disabled = _this$props3.disabled,
          type = _this$props3.type;


      var tabIndex = _this.computeTabIndex();
      var unhandled = (0, _lib.getUnhandledProps)(Input, _this.props);

      var _partitionHTMLProps = (0, _lib.partitionHTMLProps)(unhandled),
          _partitionHTMLProps2 = (0, _slicedToArray3.default)(_partitionHTMLProps, 2),
          htmlInputProps = _partitionHTMLProps2[0],
          rest = _partitionHTMLProps2[1];

      return [(0, _extends3.default)({}, htmlInputProps, {
        disabled: disabled,
        type: type,
        tabIndex: tabIndex,
        onChange: _this.handleChange,
        ref: _this.handleInputRef
      }), rest];
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          action = _props.action,
          actionPosition = _props.actionPosition,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          error = _props.error,
          fluid = _props.fluid,
          focus = _props.focus,
          icon = _props.icon,
          iconPosition = _props.iconPosition,
          input = _props.input,
          inverted = _props.inverted,
          label = _props.label,
          labelPosition = _props.labelPosition,
          loading = _props.loading,
          size = _props.size,
          transparent = _props.transparent,
          type = _props.type;


      var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(focus, 'focus'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(transparent, 'transparent'), (0, _lib.useValueAndKey)(actionPosition, 'action') || (0, _lib.useKeyOnly)(action, 'action'), (0, _lib.useValueAndKey)(iconPosition, 'icon') || (0, _lib.useKeyOnly)(icon || loading, 'icon'), (0, _lib.useValueAndKey)(labelPosition, 'labeled') || (0, _lib.useKeyOnly)(label, 'labeled'), 'input', className);
      var ElementType = (0, _lib.getElementType)(Input, this.props);

      var _partitionProps = this.partitionProps(),
          _partitionProps2 = (0, _slicedToArray3.default)(_partitionProps, 2),
          htmlInputProps = _partitionProps2[0],
          rest = _partitionProps2[1];

      // Render with children
      // ----------------------------------------


      if (!_lib.childrenUtils.isNil(children)) {
        // add htmlInputProps to the `<input />` child
        var childElements = (0, _map3.default)(_react.Children.toArray(children), function (child) {
          if (child.type !== 'input') return child;
          return (0, _react.cloneElement)(child, _this2.handleChildOverrides(child, htmlInputProps));
        });

        return _react2.default.createElement(
          ElementType,
          (0, _extends3.default)({}, rest, { className: classes }),
          childElements
        );
      }

      // Render Shorthand
      // ----------------------------------------
      var actionElement = _Button2.default.create(action);
      var labelElement = _Label2.default.create(label, {
        defaultProps: {
          className: (0, _classnames2.default)('label',
          // add 'left|right corner'
          (0, _includes3.default)(labelPosition, 'corner') && labelPosition)
        }
      });

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes }),
        actionPosition === 'left' && actionElement,
        labelPosition !== 'right' && labelElement,
        (0, _lib.createHTMLInput)(input || type, { defaultProps: htmlInputProps }),
        actionPosition !== 'left' && actionElement,
        _Icon2.default.create(this.computeIcon()),
        labelPosition === 'right' && labelElement
      );
    }
  }]);
  return Input;
}(_react.Component);

Input.defaultProps = {
  type: 'text'
};
Input._meta = {
  name: 'Input',
  type: _lib.META.TYPES.ELEMENT
};
Input.handledProps = ['action', 'actionPosition', 'as', 'children', 'className', 'disabled', 'error', 'fluid', 'focus', 'icon', 'iconPosition', 'input', 'inverted', 'label', 'labelPosition', 'loading', 'onChange', 'size', 'tabIndex', 'transparent', 'type'];
Input.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** An Input can be formatted to alert the user to an action they may perform. */
  action: _propTypes2.default.oneOfType([_propTypes2.default.bool, _lib.customPropTypes.itemShorthand]),

  /** An action can appear along side an Input on the left or right. */
  actionPosition: _propTypes2.default.oneOf(['left']),

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** An Input field can show that it is disabled. */
  disabled: _propTypes2.default.bool,

  /** An Input field can show the data contains errors. */
  error: _propTypes2.default.bool,

  /** Take on the size of its container. */
  fluid: _propTypes2.default.bool,

  /** An Input field can show a user is currently interacting with it. */
  focus: _propTypes2.default.bool,

  /** Optional Icon to display inside the Input. */
  icon: _propTypes2.default.oneOfType([_propTypes2.default.bool, _lib.customPropTypes.itemShorthand]),

  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: _propTypes2.default.oneOf(['left']),

  /** Shorthand for creating the HTML Input. */
  input: _lib.customPropTypes.itemShorthand,

  /** Format to appear on dark backgrounds. */
  inverted: _propTypes2.default.bool,

  /** Optional Label to display along side the Input. */
  label: _lib.customPropTypes.itemShorthand,

  /** A Label can appear outside an Input on the left or right. */
  labelPosition: _propTypes2.default.oneOf(['left', 'right', 'left corner', 'right corner']),

  /** An Icon Input field can show that it is currently loading data. */
  loading: _propTypes2.default.bool,

  /**
   * Called on change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: _propTypes2.default.func,

  /** An Input can vary in size. */
  size: _propTypes2.default.oneOf(_lib.SUI.SIZES),

  /** An Input can receive focus. */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** Transparent Input has no background. */
  transparent: _propTypes2.default.bool,

  /** The HTML input type. */
  type: _propTypes2.default.string
} : {};


Input.create = (0, _lib.createShorthandFactory)(Input, function (type) {
  return { type: type };
});

exports.default = Input;