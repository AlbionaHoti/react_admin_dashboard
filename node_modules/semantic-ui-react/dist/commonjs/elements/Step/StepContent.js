'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _StepDescription = require('./StepDescription');

var _StepDescription2 = _interopRequireDefault(_StepDescription);

var _StepTitle = require('./StepTitle');

var _StepTitle2 = _interopRequireDefault(_StepTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A step can contain a content.
 */
function StepContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      title = props.title;

  var classes = (0, _classnames2.default)('content', className);
  var rest = (0, _lib.getUnhandledProps)(StepContent, props);
  var ElementType = (0, _lib.getElementType)(StepContent, props);

  if (!_lib.childrenUtils.isNil(children)) return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    children
  );
  if (!_lib.childrenUtils.isNil(content)) return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    content
  );

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _StepTitle2.default.create(title),
    _StepDescription2.default.create(description)
  );
}

StepContent.handledProps = ['as', 'children', 'className', 'content', 'description', 'title'];
StepContent._meta = {
  name: 'StepContent',
  parent: 'Step',
  type: _lib.META.TYPES.ELEMENT
};

StepContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Shorthand for StepDescription. */
  description: _lib.customPropTypes.itemShorthand,

  /** Shorthand for StepTitle. */
  title: _lib.customPropTypes.itemShorthand
} : {};

StepContent.create = (0, _lib.createShorthandFactory)(StepContent, function (content) {
  return { content: content };
});

exports.default = StepContent;