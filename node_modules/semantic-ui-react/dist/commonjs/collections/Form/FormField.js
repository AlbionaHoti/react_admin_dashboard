'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Checkbox = require('../../modules/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Radio = require('../../addons/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A field is a form element containing a label and an input.
 * @see Form
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Radio
 * @see Select
 * @see Visibility
 */
function FormField(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      control = props.control,
      disabled = props.disabled,
      error = props.error,
      inline = props.inline,
      label = props.label,
      required = props.required,
      type = props.type,
      width = props.width;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(inline, 'inline'), (0, _lib.useKeyOnly)(required, 'required'), (0, _lib.useWidthProp)(width, 'wide'), 'field', className);
  var rest = (0, _lib.getUnhandledProps)(FormField, props);
  var ElementType = (0, _lib.getElementType)(FormField, props);

  // ----------------------------------------
  // No Control
  // ----------------------------------------

  if ((0, _isNil3.default)(control)) {
    if ((0, _isNil3.default)(label)) {
      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes }),
        _lib.childrenUtils.isNil(children) ? content : children
      );
    }

    return _react2.default.createElement(
      ElementType,
      (0, _extends3.default)({}, rest, { className: classes }),
      (0, _lib.createHTMLLabel)(label)
    );
  }

  // ----------------------------------------
  // Checkbox/Radio Control
  // ----------------------------------------
  var controlProps = (0, _extends3.default)({}, rest, { content: content, children: children, disabled: disabled, required: required, type: type

    // wrap HTML checkboxes/radios in the label
  });if (control === 'input' && (type === 'checkbox' || type === 'radio')) {
    return _react2.default.createElement(
      ElementType,
      { className: classes },
      _react2.default.createElement(
        'label',
        null,
        (0, _react.createElement)(control, controlProps),
        ' ',
        label
      )
    );
  }

  // pass label prop to controls that support it
  if (control === _Checkbox2.default || control === _Radio2.default) {
    return _react2.default.createElement(
      ElementType,
      { className: classes },
      (0, _react.createElement)(control, (0, _extends3.default)({}, controlProps, { label: label }))
    );
  }

  // ----------------------------------------
  // Other Control
  // ----------------------------------------

  return _react2.default.createElement(
    ElementType,
    { className: classes },
    (0, _lib.createHTMLLabel)(label, { defaultProps: {
        htmlFor: (0, _get3.default)(controlProps, 'id') }
    }),
    (0, _react.createElement)(control, controlProps)
  );
}

FormField.handledProps = ['as', 'children', 'className', 'content', 'control', 'disabled', 'error', 'inline', 'label', 'required', 'type', 'width'];
FormField._meta = {
  name: 'FormField',
  parent: 'Form',
  type: _lib.META.TYPES.COLLECTION
};

FormField.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: _lib.customPropTypes.some([_propTypes2.default.func, _propTypes2.default.oneOf(['button', 'input', 'select', 'textarea'])]),

  /** Individual fields may be disabled. */
  disabled: _propTypes2.default.bool,

  /** Individual fields may display an error state. */
  error: _propTypes2.default.bool,

  /** A field can have its label next to instead of above it. */
  inline: _propTypes2.default.bool,

  // Heads Up!
  // Do not disallow children with `label` shorthand
  // The `control` might accept a `label` prop and `children`
  /** Mutually exclusive with children. */
  label: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.object]),

  /** A field can show that input is mandatory. */
  required: _propTypes2.default.bool,

  /** Passed to the control component (i.e. <input type='password' />) */
  type: _lib.customPropTypes.every([_lib.customPropTypes.demand(['control'])]
  // don't strictly validate HTML types
  // a control might be passed that uses a `type` prop with unknown values
  // let the control validate if for us
  ),

  /** A field can specify its width in grid columns */
  width: _propTypes2.default.oneOf(_lib.SUI.WIDTHS)
} : {};

exports.default = FormField;