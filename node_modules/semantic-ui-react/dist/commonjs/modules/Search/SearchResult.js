'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Note: You technically only need the 'content' wrapper when there's an
// image. However, optionally wrapping it makes this function a lot more
// complicated and harder to read. Since always wrapping it doesn't affect
// the style in any way let's just do that.
//
// Note: To avoid requiring a wrapping div, we return an array here so to
// prevent rendering issues each node needs a unique key.
var defaultRenderer = function defaultRenderer(_ref) {
  var image = _ref.image,
      price = _ref.price,
      title = _ref.title,
      description = _ref.description;
  return [image && _react2.default.createElement(
    'div',
    { key: 'image', className: 'image' },
    (0, _lib.createHTMLImage)(image)
  ), _react2.default.createElement(
    'div',
    { key: 'content', className: 'content' },
    price && _react2.default.createElement(
      'div',
      { className: 'price' },
      price
    ),
    title && _react2.default.createElement(
      'div',
      { className: 'title' },
      title
    ),
    description && _react2.default.createElement(
      'div',
      { className: 'description' },
      description
    )
  )];
};

defaultRenderer.handledProps = [];

var SearchResult = function (_Component) {
  (0, _inherits3.default)(SearchResult, _Component);

  function SearchResult() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SearchResult);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).call.apply(_ref2, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SearchResult, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          className = _props.className,
          renderer = _props.renderer;


      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), 'result', className);
      var rest = (0, _lib.getUnhandledProps)(SearchResult, this.props);
      var ElementType = (0, _lib.getElementType)(SearchResult, this.props);

      // Note: You technically only need the 'content' wrapper when there's an
      // image. However, optionally wrapping it makes this function a lot more
      // complicated and harder to read. Since always wrapping it doesn't affect
      // the style in any way let's just do that.
      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes, onClick: this.handleClick }),
        renderer(this.props)
      );
    }
  }]);
  return SearchResult;
}(_react.Component);

SearchResult.defaultProps = {
  renderer: defaultRenderer
};
SearchResult._meta = {
  name: 'SearchResult',
  parent: 'Search',
  type: _lib.META.TYPES.MODULE
};
SearchResult.handledProps = ['active', 'as', 'className', 'content', 'description', 'id', 'image', 'onClick', 'price', 'renderer', 'title'];
exports.default = SearchResult;
SearchResult.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** The item currently selected by keyboard shortcut. */
  active: _propTypes2.default.bool,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Additional text with less emphasis. */
  description: _propTypes2.default.string,

  /** A unique identifier. */
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** Add an image to the item. */
  image: _propTypes2.default.string,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes2.default.func,

  /** Customized text for price. */
  price: _propTypes2.default.string,

  /**
   * Renders the result contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable result contents.
   */
  renderer: _propTypes2.default.func,

  /** Display title. */
  title: _propTypes2.default.string
} : {};