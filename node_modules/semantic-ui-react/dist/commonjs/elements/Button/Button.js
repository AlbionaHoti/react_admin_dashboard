'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Label = require('../Label/Label');

var _Label2 = _interopRequireDefault(_Label);

var _ButtonContent = require('./ButtonContent');

var _ButtonContent2 = _interopRequireDefault(_ButtonContent);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _ButtonOr = require('./ButtonOr');

var _ButtonOr2 = _interopRequireDefault(_ButtonOr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Button indicates a possible user action.
 * @see Form
 * @see Icon
 * @see Label
 */
var Button = function (_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.computeElementType = function () {
      var _this$props = _this.props,
          attached = _this$props.attached,
          label = _this$props.label;


      if (!(0, _isNil3.default)(attached) || !(0, _isNil3.default)(label)) return 'div';
    }, _this.computeTabIndex = function (ElementType) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;


      if (!(0, _isNil3.default)(tabIndex)) return tabIndex;
      if (disabled) return -1;
      if (ElementType === 'div') return 0;
    }, _this.focus = function () {
      return (0, _invoke3.default)(_this.ref, 'focus');
    }, _this.handleClick = function (e) {
      var disabled = _this.props.disabled;


      if (disabled) {
        e.preventDefault();
        return;
      }

      (0, _invoke3.default)(_this.props, 'onClick', e, _this.props);
    }, _this.handleRef = function (c) {
      return _this.ref = c;
    }, _this.hasIconClass = function () {
      var _this$props3 = _this.props,
          labelPosition = _this$props3.labelPosition,
          children = _this$props3.children,
          content = _this$props3.content,
          icon = _this$props3.icon;


      if (icon === true) return true;
      return icon && (labelPosition || _lib.childrenUtils.isNil(children) && (0, _isNil3.default)(content));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          animated = _props.animated,
          attached = _props.attached,
          basic = _props.basic,
          children = _props.children,
          circular = _props.circular,
          className = _props.className,
          color = _props.color,
          compact = _props.compact,
          content = _props.content,
          disabled = _props.disabled,
          floated = _props.floated,
          fluid = _props.fluid,
          icon = _props.icon,
          inverted = _props.inverted,
          label = _props.label,
          labelPosition = _props.labelPosition,
          loading = _props.loading,
          negative = _props.negative,
          positive = _props.positive,
          primary = _props.primary,
          secondary = _props.secondary,
          size = _props.size,
          toggle = _props.toggle;


      var baseClasses = (0, _classnames2.default)(color, size, (0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(this.hasIconClass(), 'icon'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(primary, 'primary'), (0, _lib.useKeyOnly)(secondary, 'secondary'), (0, _lib.useKeyOnly)(toggle, 'toggle'), (0, _lib.useKeyOrValueAndKey)(animated, 'animated'), (0, _lib.useKeyOrValueAndKey)(attached, 'attached'));
      var labeledClasses = (0, _classnames2.default)((0, _lib.useKeyOrValueAndKey)(labelPosition || !!label, 'labeled'));
      var wrapperClasses = (0, _classnames2.default)((0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useValueAndKey)(floated, 'floated'));

      var rest = (0, _lib.getUnhandledProps)(Button, this.props);
      var ElementType = (0, _lib.getElementType)(Button, this.props, this.computeElementType);
      var tabIndex = this.computeTabIndex(ElementType);

      if (!(0, _isNil3.default)(label)) {
        var buttonClasses = (0, _classnames2.default)('ui', baseClasses, 'button', className);
        var containerClasses = (0, _classnames2.default)('ui', labeledClasses, 'button', className, wrapperClasses);
        var labelElement = _Label2.default.create(label, { defaultProps: {
            basic: true,
            pointing: labelPosition === 'left' ? 'right' : 'left'
          } });

        return _react2.default.createElement(
          ElementType,
          (0, _extends3.default)({}, rest, { className: containerClasses, onClick: this.handleClick }),
          labelPosition === 'left' && labelElement,
          _react2.default.createElement(
            'button',
            { className: buttonClasses, disabled: disabled, ref: this.handleRef, tabIndex: tabIndex },
            _Icon2.default.create(icon),
            ' ',
            content
          ),
          (labelPosition === 'right' || !labelPosition) && labelElement
        );
      }

      var classes = (0, _classnames2.default)('ui', baseClasses, wrapperClasses, labeledClasses, 'button', className);
      var hasChildren = !_lib.childrenUtils.isNil(children);

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, {
          className: classes,
          disabled: disabled && ElementType === 'button' || undefined,
          onClick: this.handleClick,
          ref: this.handleRef,
          role: 'button',
          tabIndex: tabIndex
        }),
        hasChildren && children,
        !hasChildren && _Icon2.default.create(icon),
        !hasChildren && content
      );
    }
  }]);
  return Button;
}(_react.Component);

Button.defaultProps = {
  as: 'button'
};
Button._meta = {
  name: 'Button',
  type: _lib.META.TYPES.ELEMENT
};
Button.Content = _ButtonContent2.default;
Button.Group = _ButtonGroup2.default;
Button.Or = _ButtonOr2.default;
Button.handledProps = ['active', 'animated', 'as', 'attached', 'basic', 'children', 'circular', 'className', 'color', 'compact', 'content', 'disabled', 'floated', 'fluid', 'icon', 'inverted', 'label', 'labelPosition', 'loading', 'negative', 'onClick', 'positive', 'primary', 'secondary', 'size', 'tabIndex', 'toggle'];
Button.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A button can show it is currently the active user selection. */
  active: _propTypes2.default.bool,

  /** A button can animate to show hidden content. */
  animated: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['fade', 'vertical'])]),

  /** A button can be attached to other content. */
  attached: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['left', 'right', 'top', 'bottom'])]),

  /** A basic button is less pronounced. */
  basic: _propTypes2.default.bool,

  /** Primary content. */
  children: _lib.customPropTypes.every([_propTypes2.default.node, _lib.customPropTypes.disallow(['label']), _lib.customPropTypes.givenProps({
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.object.isRequired, _propTypes2.default.element.isRequired])
  }, _lib.customPropTypes.disallow(['icon']))]),

  /** A button can be circular. */
  circular: _propTypes2.default.bool,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** A button can have different colors */
  color: _propTypes2.default.oneOf([].concat((0, _toConsumableArray3.default)(_lib.SUI.COLORS), ['facebook', 'google plus', 'instagram', 'linkedin', 'twitter', 'vk', 'youtube'])),

  /** A button can reduce its padding to fit into tighter spaces. */
  compact: _propTypes2.default.bool,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A button can show it is currently unable to be interacted with. */
  disabled: _propTypes2.default.bool,

  /** A button can be aligned to the left or right of its container. */
  floated: _propTypes2.default.oneOf(_lib.SUI.FLOATS),

  /** A button can take the width of its container. */
  fluid: _propTypes2.default.bool,

  /** Add an Icon by name, props object, or pass an <Icon />. */
  icon: _lib.customPropTypes.some([_propTypes2.default.bool, _propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.element]),

  /** A button can be formatted to appear on dark backgrounds. */
  inverted: _propTypes2.default.bool,

  /** Add a Label by text, props object, or pass a <Label />. */
  label: _lib.customPropTypes.some([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.element]),

  /** A labeled button can format a Label or Icon to appear on the left or right. */
  labelPosition: _propTypes2.default.oneOf(['right', 'left']),

  /** A button can show a loading indicator. */
  loading: _propTypes2.default.bool,

  /** A button can hint towards a negative consequence. */
  negative: _propTypes2.default.bool,

  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes2.default.func,

  /** A button can hint towards a positive consequence. */
  positive: _propTypes2.default.bool,

  /** A button can be formatted to show different levels of emphasis. */
  primary: _propTypes2.default.bool,

  /** A button can be formatted to show different levels of emphasis. */
  secondary: _propTypes2.default.bool,

  /** A button can have different sizes. */
  size: _propTypes2.default.oneOf(_lib.SUI.SIZES),

  /** A button can receive focus. */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** A button can be formatted to toggle on and off. */
  toggle: _propTypes2.default.bool
} : {};


Button.create = (0, _lib.createShorthandFactory)(Button, function (value) {
  return { content: value };
});

exports.default = Button;