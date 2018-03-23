import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _invoke from 'lodash/invoke';
import _get from 'lodash/get';
import cx from 'classnames';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { createShorthandFactory, customPropTypes, META, getUnhandledProps } from '../../lib';

/**
 * A search item sub-component for Dropdown component.
 */

var DropdownSearchInput = function (_Component) {
  _inherits(DropdownSearchInput, _Component);

  function DropdownSearchInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropdownSearchInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownSearchInput.__proto__ || Object.getPrototypeOf(DropdownSearchInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
      var value = _get(e, 'target.value');

      _invoke(_this.props, 'onChange', e, _extends({}, _this.props, { value: value }));
    }, _this.handleRef = function (c) {
      return _invoke(_this.props, 'inputRef', c);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DropdownSearchInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          tabIndex = _props.tabIndex,
          type = _props.type,
          value = _props.value;

      var classes = cx('search', className);
      var rest = getUnhandledProps(DropdownSearchInput, this.props);

      return React.createElement('input', _extends({}, rest, {
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
}(Component);

DropdownSearchInput.defaultProps = {
  type: 'text'
};
DropdownSearchInput._meta = {
  name: 'DropdownSearchInput',
  parent: 'Dropdown',
  type: META.TYPES.MODULE
};
DropdownSearchInput.handledProps = ['as', 'className', 'inputRef', 'tabIndex', 'type', 'value'];
DropdownSearchInput.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  /** A ref handler for input. */
  inputRef: PropTypes.func,

  /** An input can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The HTML input type. */
  type: PropTypes.string,

  /** Stored value. */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
} : {};


DropdownSearchInput.create = createShorthandFactory(DropdownSearchInput, function (type) {
  return { type: type };
});

export default DropdownSearchInput;