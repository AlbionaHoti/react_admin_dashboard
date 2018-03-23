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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A container limits content to a maximum width.
 */
function Container(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      fluid = props.fluid,
      text = props.text,
      textAlign = props.textAlign;

  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(text, 'text'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useTextAlignProp)(textAlign), 'container', className);
  var rest = (0, _lib.getUnhandledProps)(Container, props);
  var ElementType = (0, _lib.getElementType)(Container, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

Container.handledProps = ['as', 'children', 'className', 'content', 'fluid', 'text', 'textAlign'];
Container._meta = {
  name: 'Container',
  type: _lib.META.TYPES.ELEMENT
};

Container.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Container has no maximum width. */
  fluid: _propTypes2.default.bool,

  /** Reduce maximum width to more naturally accommodate text. */
  text: _propTypes2.default.bool,

  /** Align container text. */
  textAlign: _propTypes2.default.oneOf(_lib.SUI.TEXT_ALIGNMENTS)
} : {};

exports.default = Container;