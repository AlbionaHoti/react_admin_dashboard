'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Grid = require('../../collections/Grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _GridColumn = require('../../collections/Grid/GridColumn');

var _GridColumn2 = _interopRequireDefault(_GridColumn);

var _Menu = require('../../collections/Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _TabPane = require('./TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Tab is a hidden section of content activated by a Menu.
 * @see Menu
 * @see Segment
 */
var Tab = function (_Component) {
  (0, _inherits3.default)(Tab, _Component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.handleItemClick = function (e, _ref2) {
      var index = _ref2.index;

      (0, _invoke3.default)(_this.props, 'onTabChange', e, (0, _extends3.default)({}, _this.props, { activeIndex: index }));
      _this.trySetState({ activeIndex: index });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tab, [{
    key: 'getInitialAutoControlledState',
    value: function getInitialAutoControlledState() {
      return { activeIndex: 0 };
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _props = this.props,
          panes = _props.panes,
          renderActiveOnly = _props.renderActiveOnly;
      var activeIndex = this.state.activeIndex;


      if (renderActiveOnly) return (0, _invoke3.default)((0, _get3.default)(panes, '[' + activeIndex + ']'), 'render', this.props);
      return (0, _map3.default)(panes, function (_ref3, index) {
        var pane = _ref3.pane;
        return _TabPane2.default.create(pane, {
          overrideProps: {
            active: index === activeIndex
          }
        });
      });
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var _props2 = this.props,
          menu = _props2.menu,
          panes = _props2.panes;
      var activeIndex = this.state.activeIndex;


      return _Menu2.default.create(menu, {
        overrideProps: {
          items: (0, _map3.default)(panes, 'menuItem'),
          onItemClick: this.handleItemClick,
          activeIndex: activeIndex
        }
      });
    }
  }, {
    key: 'renderVertical',
    value: function renderVertical(menu) {
      var grid = this.props.grid;
      var paneWidth = grid.paneWidth,
          tabWidth = grid.tabWidth,
          gridProps = (0, _objectWithoutProperties3.default)(grid, ['paneWidth', 'tabWidth']);


      return _react2.default.createElement(
        _Grid2.default,
        gridProps,
        menu.props.aligned !== 'right' && _GridColumn2.default.create({ width: tabWidth, children: menu }),
        _GridColumn2.default.create({
          width: paneWidth,
          children: this.renderItems(),
          stretched: true
        }),
        menu.props.aligned === 'right' && _GridColumn2.default.create({ width: tabWidth, children: menu })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var menu = this.renderMenu();
      var rest = (0, _lib.getUnhandledProps)(Tab, this.props);
      var ElementType = (0, _lib.getElementType)(Tab, this.props);

      if (menu.props.vertical) {
        return _react2.default.createElement(
          ElementType,
          rest,
          this.renderVertical(menu)
        );
      }

      return _react2.default.createElement(
        ElementType,
        rest,
        menu.props.attached !== 'bottom' && menu,
        this.renderItems(),
        menu.props.attached === 'bottom' && menu
      );
    }
  }]);
  return Tab;
}(_lib.AutoControlledComponent);

Tab.autoControlledProps = ['activeIndex'];
Tab.defaultProps = {
  grid: { paneWidth: 12, tabWidth: 4 },
  menu: { attached: true, tabular: true, aligned: 'left' },
  renderActiveOnly: true
};
Tab._meta = {
  name: 'Tab',
  type: _lib.META.TYPES.MODULE
};
Tab.Pane = _TabPane2.default;
Tab.handledProps = ['activeIndex', 'as', 'defaultActiveIndex', 'grid', 'menu', 'onTabChange', 'panes', 'renderActiveOnly'];
Tab.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** The initial activeIndex. */
  defaultActiveIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** Index of the currently active tab. */
  activeIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** Shorthand props for the Menu. */
  menu: _propTypes2.default.object,

  /** Shorthand props for the Grid. */
  grid: _propTypes2.default.object,

  /**
   * Called on tab change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed new activeIndex.
   * @param {object} data.activeIndex - The new proposed activeIndex.
   */
  onTabChange: _propTypes2.default.func,

  /**
   * Array of objects describing each Menu.Item and Tab.Pane:
   * { menuItem: 'Home', render: () => <Tab.Pane /> }
   * or
   * { menuItem: 'Home', pane: 'Welcome' }
   */
  panes: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    menuItem: _lib.customPropTypes.itemShorthand,
    pane: _lib.customPropTypes.itemShorthand,
    render: _propTypes2.default.func
  })),

  /** A Tab can render only active pane. */
  renderActiveOnly: _propTypes2.default.bool
} : {};
exports.default = Tab;