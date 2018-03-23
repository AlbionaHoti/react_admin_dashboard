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

var _SidebarPushable = require('./SidebarPushable');

var _SidebarPushable2 = _interopRequireDefault(_SidebarPushable);

var _SidebarPusher = require('./SidebarPusher');

var _SidebarPusher2 = _interopRequireDefault(_SidebarPusher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A sidebar hides additional content beside a page.
 */
var Sidebar = function (_Component) {
  (0, _inherits3.default)(Sidebar, _Component);

  function Sidebar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Sidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call.apply(_ref, [this].concat(args))), _this), _this.startAnimating = function () {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

      clearTimeout(_this.stopAnimatingTimer);

      _this.setState({ animating: true });

      _this.stopAnimatingTimer = setTimeout(function () {
        return _this.setState({ animating: false });
      }, duration);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Sidebar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.visible !== this.props.visible) {
        this.startAnimating();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          animation = _props.animation,
          className = _props.className,
          children = _props.children,
          content = _props.content,
          direction = _props.direction,
          visible = _props.visible,
          width = _props.width;
      var animating = this.state.animating;


      var classes = (0, _classnames2.default)('ui', animation, direction, width, (0, _lib.useKeyOnly)(animating, 'animating'), (0, _lib.useKeyOnly)(visible, 'visible'), 'sidebar', className);

      var rest = (0, _lib.getUnhandledProps)(Sidebar, this.props);
      var ElementType = (0, _lib.getElementType)(Sidebar, this.props);

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes }),
        _lib.childrenUtils.isNil(children) ? content : children
      );
    }
  }]);
  return Sidebar;
}(_lib.AutoControlledComponent);

Sidebar.defaultProps = {
  direction: 'left'
};
Sidebar.autoControlledProps = ['visible'];
Sidebar._meta = {
  name: 'Sidebar',
  type: _lib.META.TYPES.MODULE
};
Sidebar.Pushable = _SidebarPushable2.default;
Sidebar.Pusher = _SidebarPusher2.default;
Sidebar.handledProps = ['animation', 'as', 'children', 'className', 'content', 'defaultVisible', 'direction', 'visible', 'width'];
Sidebar.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Animation style. */
  animation: _propTypes2.default.oneOf(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Initial value of visible. */
  defaultVisible: _propTypes2.default.bool,

  /** Direction the sidebar should appear on. */
  direction: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),

  /** Controls whether or not the sidebar is visible on the page. */
  visible: _propTypes2.default.bool,

  /** Sidebar width. */
  width: _propTypes2.default.oneOf(['very thin', 'thin', 'wide', 'very wide'])
} : {};
exports.default = Sidebar;