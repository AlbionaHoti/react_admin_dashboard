import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _invoke from 'lodash/invoke';
import _isNil from 'lodash/isNil';
import cx from 'classnames';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { childrenUtils, customPropTypes, createShorthandFactory, getElementType, getUnhandledProps, META, SUI, useKeyOnly, useKeyOrValueAndKey, useValueAndKey } from '../../lib';
import Icon from '../Icon/Icon';
import Label from '../Label/Label';
import ButtonContent from './ButtonContent';
import ButtonGroup from './ButtonGroup';
import ButtonOr from './ButtonOr';

/**
 * A Button indicates a possible user action.
 * @see Form
 * @see Icon
 * @see Label
 */

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.computeElementType = function () {
      var _this$props = _this.props,
          attached = _this$props.attached,
          label = _this$props.label;


      if (!_isNil(attached) || !_isNil(label)) return 'div';
    }, _this.computeTabIndex = function (ElementType) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;


      if (!_isNil(tabIndex)) return tabIndex;
      if (disabled) return -1;
      if (ElementType === 'div') return 0;
    }, _this.focus = function () {
      return _invoke(_this.ref, 'focus');
    }, _this.handleClick = function (e) {
      var disabled = _this.props.disabled;


      if (disabled) {
        e.preventDefault();
        return;
      }

      _invoke(_this.props, 'onClick', e, _this.props);
    }, _this.handleRef = function (c) {
      return _this.ref = c;
    }, _this.hasIconClass = function () {
      var _this$props3 = _this.props,
          labelPosition = _this$props3.labelPosition,
          children = _this$props3.children,
          content = _this$props3.content,
          icon = _this$props3.icon;


      if (icon === true) return true;
      return icon && (labelPosition || childrenUtils.isNil(children) && _isNil(content));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
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


      var baseClasses = cx(color, size, useKeyOnly(active, 'active'), useKeyOnly(basic, 'basic'), useKeyOnly(circular, 'circular'), useKeyOnly(compact, 'compact'), useKeyOnly(fluid, 'fluid'), useKeyOnly(this.hasIconClass(), 'icon'), useKeyOnly(inverted, 'inverted'), useKeyOnly(loading, 'loading'), useKeyOnly(negative, 'negative'), useKeyOnly(positive, 'positive'), useKeyOnly(primary, 'primary'), useKeyOnly(secondary, 'secondary'), useKeyOnly(toggle, 'toggle'), useKeyOrValueAndKey(animated, 'animated'), useKeyOrValueAndKey(attached, 'attached'));
      var labeledClasses = cx(useKeyOrValueAndKey(labelPosition || !!label, 'labeled'));
      var wrapperClasses = cx(useKeyOnly(disabled, 'disabled'), useValueAndKey(floated, 'floated'));

      var rest = getUnhandledProps(Button, this.props);
      var ElementType = getElementType(Button, this.props, this.computeElementType);
      var tabIndex = this.computeTabIndex(ElementType);

      if (!_isNil(label)) {
        var buttonClasses = cx('ui', baseClasses, 'button', className);
        var containerClasses = cx('ui', labeledClasses, 'button', className, wrapperClasses);
        var labelElement = Label.create(label, { defaultProps: {
            basic: true,
            pointing: labelPosition === 'left' ? 'right' : 'left'
          } });

        return React.createElement(
          ElementType,
          _extends({}, rest, { className: containerClasses, onClick: this.handleClick }),
          labelPosition === 'left' && labelElement,
          React.createElement(
            'button',
            { className: buttonClasses, disabled: disabled, ref: this.handleRef, tabIndex: tabIndex },
            Icon.create(icon),
            ' ',
            content
          ),
          (labelPosition === 'right' || !labelPosition) && labelElement
        );
      }

      var classes = cx('ui', baseClasses, wrapperClasses, labeledClasses, 'button', className);
      var hasChildren = !childrenUtils.isNil(children);

      return React.createElement(
        ElementType,
        _extends({}, rest, {
          className: classes,
          disabled: disabled && ElementType === 'button' || undefined,
          onClick: this.handleClick,
          ref: this.handleRef,
          role: 'button',
          tabIndex: tabIndex
        }),
        hasChildren && children,
        !hasChildren && Icon.create(icon),
        !hasChildren && content
      );
    }
  }]);

  return Button;
}(Component);

Button.defaultProps = {
  as: 'button'
};
Button._meta = {
  name: 'Button',
  type: META.TYPES.ELEMENT
};
Button.Content = ButtonContent;
Button.Group = ButtonGroup;
Button.Or = ButtonOr;
Button.handledProps = ['active', 'animated', 'as', 'attached', 'basic', 'children', 'circular', 'className', 'color', 'compact', 'content', 'disabled', 'floated', 'fluid', 'icon', 'inverted', 'label', 'labelPosition', 'loading', 'negative', 'onClick', 'positive', 'primary', 'secondary', 'size', 'tabIndex', 'toggle'];
Button.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A button can show it is currently the active user selection. */
  active: PropTypes.bool,

  /** A button can animate to show hidden content. */
  animated: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['fade', 'vertical'])]),

  /** A button can be attached to other content. */
  attached: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['left', 'right', 'top', 'bottom'])]),

  /** A basic button is less pronounced. */
  basic: PropTypes.bool,

  /** Primary content. */
  children: customPropTypes.every([PropTypes.node, customPropTypes.disallow(['label']), customPropTypes.givenProps({
    icon: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired, PropTypes.element.isRequired])
  }, customPropTypes.disallow(['icon']))]),

  /** A button can be circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** A button can have different colors */
  color: PropTypes.oneOf([].concat(_toConsumableArray(SUI.COLORS), ['facebook', 'google plus', 'instagram', 'linkedin', 'twitter', 'vk', 'youtube'])),

  /** A button can reduce its padding to fit into tighter spaces. */
  compact: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A button can show it is currently unable to be interacted with. */
  disabled: PropTypes.bool,

  /** A button can be aligned to the left or right of its container. */
  floated: PropTypes.oneOf(SUI.FLOATS),

  /** A button can take the width of its container. */
  fluid: PropTypes.bool,

  /** Add an Icon by name, props object, or pass an <Icon />. */
  icon: customPropTypes.some([PropTypes.bool, PropTypes.string, PropTypes.object, PropTypes.element]),

  /** A button can be formatted to appear on dark backgrounds. */
  inverted: PropTypes.bool,

  /** Add a Label by text, props object, or pass a <Label />. */
  label: customPropTypes.some([PropTypes.string, PropTypes.object, PropTypes.element]),

  /** A labeled button can format a Label or Icon to appear on the left or right. */
  labelPosition: PropTypes.oneOf(['right', 'left']),

  /** A button can show a loading indicator. */
  loading: PropTypes.bool,

  /** A button can hint towards a negative consequence. */
  negative: PropTypes.bool,

  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /** A button can hint towards a positive consequence. */
  positive: PropTypes.bool,

  /** A button can be formatted to show different levels of emphasis. */
  primary: PropTypes.bool,

  /** A button can be formatted to show different levels of emphasis. */
  secondary: PropTypes.bool,

  /** A button can have different sizes. */
  size: PropTypes.oneOf(SUI.SIZES),

  /** A button can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** A button can be formatted to toggle on and off. */
  toggle: PropTypes.bool
} : {};


Button.create = createShorthandFactory(Button, function (value) {
  return { content: value };
});

export default Button;