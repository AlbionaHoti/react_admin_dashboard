'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _each2 = require('lodash/each');

var _each3 = _interopRequireDefault(_each2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _AccordionContent = require('./AccordionContent');

var _AccordionContent2 = _interopRequireDefault(_AccordionContent);

var _AccordionTitle = require('./AccordionTitle');

var _AccordionTitle2 = _interopRequireDefault(_AccordionTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An Accordion can contain sub-accordions.
 */
var AccordionAccordion = function (_Component) {
  (0, _inherits3.default)(AccordionAccordion, _Component);

  function AccordionAccordion() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AccordionAccordion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AccordionAccordion.__proto__ || Object.getPrototypeOf(AccordionAccordion)).call.apply(_ref, [this].concat(args))), _this), _this.computeNewIndex = function (index) {
      var exclusive = _this.props.exclusive;
      var activeIndex = _this.state.activeIndex;


      if (exclusive) return index === activeIndex ? -1 : index;
      // check to see if index is in array, and remove it, if not then add it
      return (0, _includes3.default)(activeIndex, index) ? (0, _without3.default)(activeIndex, index) : [].concat((0, _toConsumableArray3.default)(activeIndex), [index]);
    }, _this.handleTitleOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e, titleProps) {
          var index = titleProps.index;

          var activeIndex = _this.computeNewIndex(index);

          _this.trySetState({ activeIndex: activeIndex });

          (0, _invoke3.default)(predefinedProps, 'onClick', e, titleProps);
          (0, _invoke3.default)(_this.props, 'onTitleClick', e, titleProps);
        }
      };
    }, _this.isIndexActive = function (index) {
      var exclusive = _this.props.exclusive;
      var activeIndex = _this.state.activeIndex;


      return exclusive ? activeIndex === index : (0, _includes3.default)(activeIndex, index);
    }, _this.renderPanels = function () {
      var children = [];
      var panels = _this.props.panels;


      (0, _each3.default)(panels, function (panel, index) {
        var content = panel.content,
            title = panel.title;

        var active = _this.isIndexActive(index);

        children.push(_AccordionTitle2.default.create(title, {
          defaultProps: { active: active, index: index },
          overrideProps: _this.handleTitleOverrides
        }));
        children.push(_AccordionContent2.default.create(content, { defaultProps: { active: active } }));
      });

      return children;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AccordionAccordion, [{
    key: 'getInitialAutoControlledState',
    value: function getInitialAutoControlledState(_ref2) {
      var exclusive = _ref2.exclusive;

      return { activeIndex: exclusive ? -1 : [-1] };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;


      var classes = (0, _classnames2.default)('accordion', className);
      var rest = (0, _lib.getUnhandledProps)(AccordionAccordion, this.props);
      var ElementType = (0, _lib.getElementType)(AccordionAccordion, this.props);

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes }),
        (0, _isNil3.default)(children) ? this.renderPanels() : children
      );
    }
  }]);
  return AccordionAccordion;
}(_lib.AutoControlledComponent);

AccordionAccordion.defaultProps = {
  exclusive: true
};
AccordionAccordion.autoControlledProps = ['activeIndex'];
AccordionAccordion._meta = {
  name: 'AccordionAccordion',
  type: _lib.META.TYPES.MODULE,
  parent: 'Accordion'
};
AccordionAccordion.handledProps = ['activeIndex', 'as', 'children', 'className', 'defaultActiveIndex', 'exclusive', 'onTitleClick', 'panels'];
exports.default = AccordionAccordion;
AccordionAccordion.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Index of the currently active panel. */
  activeIndex: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.number), _propTypes2.default.number])]),

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Initial activeIndex value. */
  defaultActiveIndex: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.number), _propTypes2.default.number])]),

  /** Only allow one panel open at a time. */
  exclusive: _propTypes2.default.bool,

  /**
   * Called when a panel title is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onTitleClick: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes2.default.func]),

  /** Shorthand array of props for Accordion. */
  panels: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes2.default.arrayOf(_propTypes2.default.shape({
    content: _lib.customPropTypes.itemShorthand,
    title: _lib.customPropTypes.itemShorthand
  }))])
} : {};


AccordionAccordion.create = (0, _lib.createShorthandFactory)(AccordionAccordion, function (content) {
  return { content: content };
});