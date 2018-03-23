import _slicedToArray from 'babel-runtime/helpers/slicedToArray';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _invoke from 'lodash/invoke';
import _isNil from 'lodash/isNil';
import cx from 'classnames';

import PropTypes from 'prop-types';
import React from 'react';

import { AutoControlledComponent as Component, createHTMLLabel, customPropTypes, getElementType, getUnhandledProps, htmlInputAttrs, META, partitionHTMLProps, useKeyOnly } from '../../lib';

/**
 * A checkbox allows a user to select a value from a small set of options, often binary.
 * @see Form
 * @see Radio
 */
var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.canToggle = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          radio = _this$props.radio,
          readOnly = _this$props.readOnly;
      var checked = _this.state.checked;


      return !disabled && !readOnly && !(radio && checked);
    }, _this.computeTabIndex = function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;


      if (!_isNil(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    }, _this.handleContainerClick = function (e) {
      var id = _this.props.id;


      if (_isNil(id)) _this.handleClick(e);
    }, _this.handleInputClick = function (e) {
      var id = _this.props.id;


      if (id) _this.handleClick(e);
    }, _this.handleInputRef = function (c) {
      return _this.inputRef = c;
    }, _this.handleClick = function (e) {
      var _this$state = _this.state,
          checked = _this$state.checked,
          indeterminate = _this$state.indeterminate;


      if (!_this.canToggle()) return;

      _invoke(_this.props, 'onClick', e, _extends({}, _this.props, { checked: !checked, indeterminate: !!indeterminate }));
      _invoke(_this.props, 'onChange', e, _extends({}, _this.props, { checked: !checked, indeterminate: false }));

      _this.trySetState({ checked: !checked, indeterminate: false });
    }, _this.handleMouseDown = function (e) {
      var _this$state2 = _this.state,
          checked = _this$state2.checked,
          indeterminate = _this$state2.indeterminate;


      _invoke(_this.props, 'onMouseDown', e, _extends({}, _this.props, { checked: !!checked, indeterminate: !!indeterminate }));
      _invoke(_this.inputRef, 'focus');

      e.preventDefault();
    }, _this.setIndeterminate = function () {
      var indeterminate = _this.state.indeterminate;


      if (_this.inputRef) _this.inputRef.indeterminate = !!indeterminate;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Checkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setIndeterminate();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setIndeterminate();
    }

    // Note: You can't directly set the indeterminate prop on the input, so we
    // need to maintain a ref to the input and set it manually whenever the
    // component updates.

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          disabled = _props.disabled,
          label = _props.label,
          id = _props.id,
          name = _props.name,
          radio = _props.radio,
          readOnly = _props.readOnly,
          slider = _props.slider,
          toggle = _props.toggle,
          type = _props.type,
          value = _props.value;
      var _state = this.state,
          checked = _state.checked,
          indeterminate = _state.indeterminate;


      var classes = cx('ui', useKeyOnly(checked, 'checked'), useKeyOnly(disabled, 'disabled'), useKeyOnly(indeterminate, 'indeterminate'),
      // auto apply fitted class to compact white space when there is no label
      // https://semantic-ui.com/modules/checkbox.html#fitted
      useKeyOnly(!label, 'fitted'), useKeyOnly(radio, 'radio'), useKeyOnly(readOnly, 'read-only'), useKeyOnly(slider, 'slider'), useKeyOnly(toggle, 'toggle'), 'checkbox', className);
      var unhandled = getUnhandledProps(Checkbox, this.props);
      var ElementType = getElementType(Checkbox, this.props);

      var _partitionHTMLProps = partitionHTMLProps(unhandled, { htmlProps: htmlInputAttrs }),
          _partitionHTMLProps2 = _slicedToArray(_partitionHTMLProps, 2),
          htmlInputProps = _partitionHTMLProps2[0],
          rest = _partitionHTMLProps2[1];

      return React.createElement(
        ElementType,
        _extends({}, rest, {
          className: classes,
          onClick: this.handleContainerClick,
          onChange: this.handleContainerClick,
          onMouseDown: this.handleMouseDown
        }),
        React.createElement('input', _extends({}, htmlInputProps, {
          checked: checked,
          className: 'hidden',
          id: id,
          name: name,
          onClick: this.handleInputClick,
          readOnly: true,
          ref: this.handleInputRef,
          tabIndex: this.computeTabIndex(),
          type: type,
          value: value
        })),
        createHTMLLabel(label, { defaultProps: { htmlFor: id } }) || React.createElement('label', { htmlFor: id })
      );
    }
  }]);

  return Checkbox;
}(Component);

Checkbox.defaultProps = {
  type: 'checkbox'
};
Checkbox.autoControlledProps = ['checked', 'indeterminate'];
Checkbox._meta = {
  name: 'Checkbox',
  type: META.TYPES.MODULE
};
Checkbox.handledProps = ['as', 'checked', 'className', 'defaultChecked', 'defaultIndeterminate', 'disabled', 'fitted', 'id', 'indeterminate', 'label', 'name', 'onChange', 'onClick', 'onMouseDown', 'radio', 'readOnly', 'slider', 'tabIndex', 'toggle', 'type', 'value'];
export default Checkbox;
Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Whether or not checkbox is checked. */
  checked: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** The initial value of checked. */
  defaultChecked: PropTypes.bool,

  /** Whether or not checkbox is indeterminate. */
  defaultIndeterminate: PropTypes.bool,

  /** A checkbox can appear disabled and be unable to change states */
  disabled: PropTypes.bool,

  /** Removes padding for a label. Auto applied when there is no label. */
  fitted: PropTypes.bool,

  /** A unique identifier. */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Whether or not checkbox is indeterminate. */
  indeterminate: PropTypes.bool,

  /** The text of the associated label element. */
  label: customPropTypes.itemShorthand,

  /** The HTML input name. */
  name: PropTypes.string,

  /**
   * Called when the user attempts to change the checked state.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed checked/indeterminate state.
   */
  onChange: PropTypes.func,

  /**
   * Called when the checkbox or label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onClick: PropTypes.func,

  /**
   * Called when the user presses down on the mouse.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onMouseDown: PropTypes.func,

  /** Format as a radio element. This means it is an exclusive option. */
  radio: customPropTypes.every([PropTypes.bool, customPropTypes.disallow(['slider', 'toggle'])]),

  /** A checkbox can be read-only and unable to change states. */
  readOnly: PropTypes.bool,

  /** Format to emphasize the current selection state. */
  slider: customPropTypes.every([PropTypes.bool, customPropTypes.disallow(['radio', 'toggle'])]),

  /** A checkbox can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Format to show an on or off choice. */
  toggle: customPropTypes.every([PropTypes.bool, customPropTypes.disallow(['radio', 'slider'])]),

  /** HTML input type, either checkbox or radio. */
  type: PropTypes.oneOf(['checkbox', 'radio']),

  /** The HTML input value. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
} : {};