'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A rail is used to show accompanying content outside the boundaries of the main view of a site.
 */
function Rail(props) {
  var attached = props.attached,
      children = props.children,
      className = props.className,
      close = props.close,
      content = props.content,
      dividing = props.dividing,
      internal = props.internal,
      position = props.position,
      size = props.size;


  var classes = (0, _classnames2.default)('ui', position, size, (0, _lib.useKeyOnly)(attached, 'attached'), (0, _lib.useKeyOnly)(dividing, 'dividing'), (0, _lib.useKeyOnly)(internal, 'internal'), (0, _lib.useKeyOrValueAndKey)(close, 'close'), 'rail', className);
  var rest = (0, _lib.getUnhandledProps)(Rail, props);
  var ElementType = (0, _lib.getElementType)(Rail, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

Rail.handledProps = ['as', 'attached', 'children', 'className', 'close', 'content', 'dividing', 'internal', 'position', 'size'];
Rail._meta = {
  name: 'Rail',
  type: _lib.META.TYPES.ELEMENT
};

Rail.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A rail can appear attached to the main viewport. */
  attached: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** A rail can appear closer to the main viewport. */
  close: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['very'])]),

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A rail can create a division between itself and a container. */
  dividing: _propTypes2.default.bool,

  /** A rail can attach itself to the inside of a container. */
  internal: _propTypes2.default.bool,

  /** A rail can be presented on the left or right side of a container. */
  position: _propTypes2.default.oneOf(_lib.SUI.FLOATS).isRequired,

  /** A rail can have different sizes. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'medium'))
} : {};

exports.default = Rail;