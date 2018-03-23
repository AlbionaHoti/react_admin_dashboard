import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _invoke from 'lodash/invoke';
import _without from 'lodash/without';
import cx from 'classnames';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { customPropTypes, getElementType, getUnhandledProps, META, SUI, useKeyOnly, useWidthProp } from '../../lib';
import FormButton from './FormButton';
import FormCheckbox from './FormCheckbox';
import FormDropdown from './FormDropdown';
import FormField from './FormField';
import FormGroup from './FormGroup';
import FormInput from './FormInput';
import FormRadio from './FormRadio';
import FormSelect from './FormSelect';
import FormTextArea from './FormTextArea';

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
  _inherits(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
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


      var classes = cx('ui', size, useKeyOnly(error, 'error'), useKeyOnly(inverted, 'inverted'), useKeyOnly(loading, 'loading'), useKeyOnly(reply, 'reply'), useKeyOnly(success, 'success'), useKeyOnly(unstackable, 'unstackable'), useKeyOnly(warning, 'warning'), useWidthProp(widths, null, true), 'form', className);
      var rest = getUnhandledProps(Form, this.props);
      var ElementType = getElementType(Form, this.props);

      return React.createElement(
        ElementType,
        _extends({}, rest, {
          action: action,
          className: classes,
          onSubmit: this.handleSubmit
        }),
        children
      );
    }
  }]);

  return Form;
}(Component);

Form.defaultProps = {
  as: 'form'
};
Form._meta = {
  name: 'Form',
  type: META.TYPES.COLLECTION
};
Form.Field = FormField;
Form.Button = FormButton;
Form.Checkbox = FormCheckbox;
Form.Dropdown = FormDropdown;
Form.Group = FormGroup;
Form.Input = FormInput;
Form.Radio = FormRadio;
Form.Select = FormSelect;
Form.TextArea = FormTextArea;
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

    if (typeof action !== 'string') _invoke(e, 'preventDefault');
    _invoke.apply(undefined, [_this2.props, 'onSubmit', e, _this2.props].concat(args));
  };
};

Form.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** The HTML form action */
  action: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Automatically show any error Message children. */
  error: PropTypes.bool,

  /** A form can have its color inverted for contrast. */
  inverted: PropTypes.bool,

  /** Automatically show a loading indicator. */
  loading: PropTypes.bool,

  /** The HTML form submit handler. */
  onSubmit: PropTypes.func,

  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
  reply: PropTypes.bool,

  /** A form can vary in size. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium')),

  /** Automatically show any success Message children. */
  success: PropTypes.bool,

  /** A form can prevent itself from stacking on mobile. */
  unstackable: PropTypes.bool,

  /** Automatically show any warning Message children. */
  warning: PropTypes.bool,

  /** Forms can automatically divide fields to be equal width. */
  widths: PropTypes.oneOf(['equal'])
} : {};


export default Form;