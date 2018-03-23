import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _has from 'lodash/has';
import _invoke from 'lodash/invoke';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { customPropTypes, getUnhandledProps, META } from '../../lib';
import Button from '../../elements/Button';
import Modal from '../../modules/Modal';

/**
 * A Confirm modal gives the user a choice to confirm or cancel an action/
 * @see Modal
 */

var Confirm = function (_Component) {
  _inherits(Confirm, _Component);

  function Confirm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Confirm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call.apply(_ref, [this].concat(args))), _this), _this.handleCancel = function (e) {
      _invoke(_this.props, 'onCancel', e, _this.props);
    }, _this.handleCancelOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          _invoke(predefinedProps, 'onClick', e, buttonProps);
          _this.handleCancel(e);
        }
      };
    }, _this.handleConfirmOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          _invoke(predefinedProps, 'onClick', e, buttonProps);
          _invoke(_this.props, 'onConfirm', e, _this.props);
        }
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Confirm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cancelButton = _props.cancelButton,
          confirmButton = _props.confirmButton,
          content = _props.content,
          header = _props.header,
          open = _props.open,
          size = _props.size;

      var rest = getUnhandledProps(Confirm, this.props);

      // `open` is auto controlled by the Modal
      // It cannot be present (even undefined) with `defaultOpen`
      // only apply it if the user provided an open prop
      var openProp = {};
      if (_has(this.props, 'open')) openProp.open = open;

      return React.createElement(
        Modal,
        _extends({}, rest, openProp, { size: size, onClose: this.handleCancel }),
        Modal.Header.create(header),
        Modal.Content.create(content),
        React.createElement(
          Modal.Actions,
          null,
          Button.create(cancelButton, { overrideProps: this.handleCancelOverrides }),
          Button.create(confirmButton, {
            defaultProps: { primary: true },
            overrideProps: this.handleConfirmOverrides
          })
        )
      );
    }
  }]);

  return Confirm;
}(Component);

Confirm.defaultProps = {
  cancelButton: 'Cancel',
  confirmButton: 'OK',
  content: 'Are you sure?',
  size: 'small'
};
Confirm._meta = {
  name: 'Confirm',
  type: META.TYPES.ADDON
};
Confirm.handledProps = ['cancelButton', 'confirmButton', 'content', 'header', 'onCancel', 'onConfirm', 'open', 'size'];
Confirm.propTypes = process.env.NODE_ENV !== "production" ? {
  /** The cancel button text. */
  cancelButton: customPropTypes.itemShorthand,

  /** The OK button text. */
  confirmButton: customPropTypes.itemShorthand,

  /** The ModalContent text. */
  content: customPropTypes.itemShorthand,

  /** The ModalHeader text. */
  header: customPropTypes.itemShorthand,

  /**
   * Called when the Modal is closed without clicking confirm.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onCancel: PropTypes.func,

  /**
   * Called when the OK button is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onConfirm: PropTypes.func,

  /** Whether or not the modal is visible. */
  open: PropTypes.bool,

  /** A Confirm can vary in size */
  size: PropTypes.oneOf(['fullscreen', 'large', 'mini', 'small', 'tiny'])
} : {};


export default Confirm;