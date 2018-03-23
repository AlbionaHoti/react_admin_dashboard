import _slicedToArray from 'babel-runtime/helpers/slicedToArray';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _includes from 'lodash/includes';
import _map from 'lodash/map';
import _invoke from 'lodash/invoke';
import _get from 'lodash/get';
import _isNil from 'lodash/isNil';
import cx from 'classnames';

import PropTypes from 'prop-types';
import React, { Children, cloneElement, Component } from 'react';

import { childrenUtils, createHTMLInput, createShorthandFactory, customPropTypes, getElementType, getUnhandledProps, META, partitionHTMLProps, SUI, useKeyOnly, useValueAndKey } from '../../lib';
import Button from '../../elements/Button';
import Icon from '../../elements/Icon';
import Label from '../../elements/Label';

/**
 * An Input is a field used to elicit a response from a user.
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.computeIcon = function () {
      var _this$props = _this.props,
          loading = _this$props.loading,
          icon = _this$props.icon;


      if (!_isNil(icon)) return icon;
      if (loading) return 'spinner';
    }, _this.computeTabIndex = function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;


      if (!_isNil(tabIndex)) return tabIndex;
      if (disabled) return -1;
    }, _this.focus = function () {
      return _this.inputRef.focus();
    }, _this.handleChange = function (e) {
      var value = _get(e, 'target.value');

      _invoke(_this.props, 'onChange', e, _extends({}, _this.props, { value: value }));
    }, _this.handleChildOverrides = function (child, defaultProps) {
      return _extends({}, defaultProps, child.props, {
        ref: function ref(c) {
          _invoke(child, 'ref', c);
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
      var unhandled = getUnhandledProps(Input, _this.props);

      var _partitionHTMLProps = partitionHTMLProps(unhandled),
          _partitionHTMLProps2 = _slicedToArray(_partitionHTMLProps, 2),
          htmlInputProps = _partitionHTMLProps2[0],
          rest = _partitionHTMLProps2[1];

      return [_extends({}, htmlInputProps, {
        disabled: disabled,
        type: type,
        tabIndex: tabIndex,
        onChange: _this.handleChange,
        ref: _this.handleInputRef
      }), rest];
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
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


      var classes = cx('ui', size, useKeyOnly(disabled, 'disabled'), useKeyOnly(error, 'error'), useKeyOnly(fluid, 'fluid'), useKeyOnly(focus, 'focus'), useKeyOnly(inverted, 'inverted'), useKeyOnly(loading, 'loading'), useKeyOnly(transparent, 'transparent'), useValueAndKey(actionPosition, 'action') || useKeyOnly(action, 'action'), useValueAndKey(iconPosition, 'icon') || useKeyOnly(icon || loading, 'icon'), useValueAndKey(labelPosition, 'labeled') || useKeyOnly(label, 'labeled'), 'input', className);
      var ElementType = getElementType(Input, this.props);

      var _partitionProps = this.partitionProps(),
          _partitionProps2 = _slicedToArray(_partitionProps, 2),
          htmlInputProps = _partitionProps2[0],
          rest = _partitionProps2[1];

      // Render with children
      // ----------------------------------------


      if (!childrenUtils.isNil(children)) {
        // add htmlInputProps to the `<input />` child
        var childElements = _map(Children.toArray(children), function (child) {
          if (child.type !== 'input') return child;
          return cloneElement(child, _this2.handleChildOverrides(child, htmlInputProps));
        });

        return React.createElement(
          ElementType,
          _extends({}, rest, { className: classes }),
          childElements
        );
      }

      // Render Shorthand
      // ----------------------------------------
      var actionElement = Button.create(action);
      var labelElement = Label.create(label, {
        defaultProps: {
          className: cx('label',
          // add 'left|right corner'
          _includes(labelPosition, 'corner') && labelPosition)
        }
      });

      return React.createElement(
        ElementType,
        _extends({}, rest, { className: classes }),
        actionPosition === 'left' && actionElement,
        labelPosition !== 'right' && labelElement,
        createHTMLInput(input || type, { defaultProps: htmlInputProps }),
        actionPosition !== 'left' && actionElement,
        Icon.create(this.computeIcon()),
        labelPosition === 'right' && labelElement
      );
    }
  }]);

  return Input;
}(Component);

Input.defaultProps = {
  type: 'text'
};
Input._meta = {
  name: 'Input',
  type: META.TYPES.ELEMENT
};
Input.handledProps = ['action', 'actionPosition', 'as', 'children', 'className', 'disabled', 'error', 'fluid', 'focus', 'icon', 'iconPosition', 'input', 'inverted', 'label', 'labelPosition', 'loading', 'onChange', 'size', 'tabIndex', 'transparent', 'type'];
Input.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** An Input can be formatted to alert the user to an action they may perform. */
  action: PropTypes.oneOfType([PropTypes.bool, customPropTypes.itemShorthand]),

  /** An action can appear along side an Input on the left or right. */
  actionPosition: PropTypes.oneOf(['left']),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** An Input field can show that it is disabled. */
  disabled: PropTypes.bool,

  /** An Input field can show the data contains errors. */
  error: PropTypes.bool,

  /** Take on the size of its container. */
  fluid: PropTypes.bool,

  /** An Input field can show a user is currently interacting with it. */
  focus: PropTypes.bool,

  /** Optional Icon to display inside the Input. */
  icon: PropTypes.oneOfType([PropTypes.bool, customPropTypes.itemShorthand]),

  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: PropTypes.oneOf(['left']),

  /** Shorthand for creating the HTML Input. */
  input: customPropTypes.itemShorthand,

  /** Format to appear on dark backgrounds. */
  inverted: PropTypes.bool,

  /** Optional Label to display along side the Input. */
  label: customPropTypes.itemShorthand,

  /** A Label can appear outside an Input on the left or right. */
  labelPosition: PropTypes.oneOf(['left', 'right', 'left corner', 'right corner']),

  /** An Icon Input field can show that it is currently loading data. */
  loading: PropTypes.bool,

  /**
   * Called on change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: PropTypes.func,

  /** An Input can vary in size. */
  size: PropTypes.oneOf(SUI.SIZES),

  /** An Input can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Transparent Input has no background. */
  transparent: PropTypes.bool,

  /** The HTML input type. */
  type: PropTypes.string
} : {};


Input.create = createShorthandFactory(Input, function (type) {
  return { type: type };
});

export default Input;