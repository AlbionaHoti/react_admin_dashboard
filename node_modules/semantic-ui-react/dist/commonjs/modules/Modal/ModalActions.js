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

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Button = require('../../elements/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A modal can contain a row of actions.
 */
var ModalActions = function (_Component) {
  (0, _inherits3.default)(ModalActions, _Component);

  function ModalActions() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ModalActions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ModalActions.__proto__ || Object.getPrototypeOf(ModalActions)).call.apply(_ref, [this].concat(args))), _this), _this.handleButtonOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          (0, _invoke3.default)(predefinedProps, 'onClick', e, buttonProps);
          (0, _invoke3.default)(_this.props, 'onActionClick', e, buttonProps);
        }
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ModalActions, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          actions = _props.actions,
          children = _props.children,
          className = _props.className,
          content = _props.content;

      var classes = (0, _classnames2.default)('actions', className);
      var rest = (0, _lib.getUnhandledProps)(ModalActions, this.props);
      var ElementType = (0, _lib.getElementType)(ModalActions, this.props);

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
        (0, _map3.default)(actions, function (action) {
          return _Button2.default.create(action, { overrideProps: _this2.handleButtonOverrides });
        })
      );
    }
  }]);
  return ModalActions;
}(_react.Component);

ModalActions._meta = {
  name: 'ModalActions',
  type: _lib.META.TYPES.MODULE,
  parent: 'Modal'
};
ModalActions.handledProps = ['actions', 'as', 'children', 'className', 'content', 'onActionClick'];
exports.default = ModalActions;
ModalActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Array of shorthand buttons. */
  actions: _lib.customPropTypes.collectionShorthand,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props from the clicked action.
   */
  onActionClick: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes2.default.func])
} : {};


ModalActions.create = (0, _lib.createShorthandFactory)(ModalActions, function (actions) {
  return { actions: actions };
});