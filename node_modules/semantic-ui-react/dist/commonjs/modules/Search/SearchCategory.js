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

function SearchCategory(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content,
      renderer = props.renderer;

  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), 'category', className);
  var rest = (0, _lib.getUnhandledProps)(SearchCategory, props);
  var ElementType = (0, _lib.getElementType)(SearchCategory, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    _react2.default.createElement(
      'div',
      { className: 'name' },
      renderer(props)
    ),
    _lib.childrenUtils.isNil(children) ? content : children
  );
}

SearchCategory.handledProps = ['active', 'as', 'children', 'className', 'content', 'name', 'renderer', 'results'];
SearchCategory._meta = {
  name: 'SearchCategory',
  parent: 'Search',
  type: _lib.META.TYPES.MODULE
};

SearchCategory.defaultProps = {
  renderer: function renderer(_ref) {
    var name = _ref.name;
    return name;
  }
};

SearchCategory.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** The item currently selected by keyboard shortcut. */
  active: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Display name. */
  name: _propTypes2.default.string,

  /**
   * Renders the category contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable category contents.
   */
  renderer: _propTypes2.default.func,

  /** Array of Search.Result props. */
  results: _propTypes2.default.array
} : {};

exports.default = SearchCategory;