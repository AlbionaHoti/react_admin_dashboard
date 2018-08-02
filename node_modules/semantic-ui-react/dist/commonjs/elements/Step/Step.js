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

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _StepContent = require('./StepContent');

var _StepContent2 = _interopRequireDefault(_StepContent);

var _StepDescription = require('./StepDescription');

var _StepDescription2 = _interopRequireDefault(_StepDescription);

var _StepGroup = require('./StepGroup');

var _StepGroup2 = _interopRequireDefault(_StepGroup);

var _StepTitle = require('./StepTitle');

var _StepTitle2 = _interopRequireDefault(_StepTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A step shows the completion status of an activity in a series of activities.
 */
var Step = function (_Component) {
  (0, _inherits3.default)(Step, _Component);

  function Step() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Step);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Step.__proto__ || Object.getPrototypeOf(Step)).call.apply(_ref, [this].concat(args))), _this), _this.computeElementType = function () {
      var onClick = _this.props.onClick;


      if (onClick) return 'a';
    }, _this.handleClick = function (e) {
      var disabled = _this.props.disabled;


      if (!disabled) (0, _invoke3.default)(_this.props, 'onClick', e, _this.props);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Step, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          completed = _props.completed,
          content = _props.content,
          description = _props.description,
          disabled = _props.disabled,
          href = _props.href,
          icon = _props.icon,
          link = _props.link,
          title = _props.title;


      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(completed, 'completed'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(link, 'link'), 'step', className);
      var rest = (0, _lib.getUnhandledProps)(Step, this.props);
      var ElementType = (0, _lib.getElementType)(Step, this.props, this.computeElementType);

      if (!_lib.childrenUtils.isNil(children)) {
        return _react2.default.createElement(
          ElementType,
          (0, _extends3.default)({}, rest, { className: classes, href: href, onClick: this.handleClick }),
          children
        );
      }

      if (!_lib.childrenUtils.isNil(content)) {
        return _react2.default.createElement(
          ElementType,
          (0, _extends3.default)({}, rest, { className: classes, href: href, onClick: this.handleClick }),
          content
        );
      }

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes, href: href, onClick: this.handleClick }),
        _Icon2.default.create(icon),
        _StepContent2.default.create({ description: description, title: title })
      );
    }
  }]);
  return Step;
}(_react.Component);

Step._meta = {
  name: 'Step',
  type: _lib.META.TYPES.ELEMENT
};
Step.Content = _StepContent2.default;
Step.Description = _StepDescription2.default;
Step.Group = _StepGroup2.default;
Step.Title = _StepTitle2.default;
Step.handledProps = ['active', 'as', 'children', 'className', 'completed', 'content', 'description', 'disabled', 'href', 'icon', 'link', 'onClick', 'ordered', 'title'];
Step.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A step can be highlighted as active. */
  active: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** A step can show that a user has completed it. */
  completed: _propTypes2.default.bool,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Shorthand for StepDescription. */
  description: _lib.customPropTypes.itemShorthand,

  /** Show that the Loader is inactive. */
  disabled: _propTypes2.default.bool,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: _propTypes2.default.string,

  /** Shorthand for Icon. */
  icon: _lib.customPropTypes.itemShorthand,

  /** A step can be link. */
  link: _propTypes2.default.bool,

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes2.default.func,

  /** A step can show a ordered sequence of steps. Passed from StepGroup. */
  ordered: _propTypes2.default.bool,

  /** Shorthand for StepTitle. */
  title: _lib.customPropTypes.itemShorthand
} : {};


Step.create = (0, _lib.createShorthandFactory)(Step, function (content) {
  return { content: content };
});

exports.default = Step;