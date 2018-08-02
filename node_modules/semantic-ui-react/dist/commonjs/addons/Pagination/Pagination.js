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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Menu = require('../../collections/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _PaginationItem = require('./PaginationItem');

var _PaginationItem2 = _interopRequireDefault(_PaginationItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A component to render a pagination.
 */
var Pagination = function (_Component) {
  (0, _inherits3.default)(Pagination, _Component);

  function Pagination() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Pagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.handleItemClick = function (e, _ref2) {
      var value = _ref2.value;

      _this.trySetState({ activePage: value });
      (0, _invoke3.default)(_this.props, 'onPageChange', e, (0, _extends3.default)({}, _this.props, { activePage: value }));
    }, _this.handleItemOverrides = function (active, type, value) {
      return function (predefinedProps) {
        return {
          active: active,
          type: type,
          key: type + '-' + value,
          onClick: function onClick(e, itemProps) {
            (0, _invoke3.default)(predefinedProps, 'onClick', e, itemProps);
            _this.handleItemClick(e, itemProps);
          }
        };
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Pagination, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          ariaLabel = _props.ariaLabel,
          boundaryRange = _props.boundaryRange,
          siblingRange = _props.siblingRange,
          totalPages = _props.totalPages;
      var activePage = this.state.activePage;


      var items = (0, _lib.createPaginationItems)({ activePage: activePage, boundaryRange: boundaryRange, siblingRange: siblingRange, totalPages: totalPages });
      var rest = (0, _lib.getUnhandledProps)(Pagination, this.props);

      return _react2.default.createElement(
        _Menu2.default,
        (0, _extends3.default)({}, rest, { 'aria-label': ariaLabel, pagination: true, role: 'navigation' }),
        (0, _map3.default)(items, function (_ref3) {
          var active = _ref3.active,
              type = _ref3.type,
              value = _ref3.value;
          return _PaginationItem2.default.create(_this2.props[type], {
            defaultProps: {
              content: value,
              value: value
            },
            overrideProps: _this2.handleItemOverrides(active, type, value)
          });
        })
      );
    }
  }]);
  return Pagination;
}(_lib.AutoControlledComponent);

Pagination.autoControlledProps = ['activePage'];
Pagination.defaultProps = {
  ariaLabel: 'Pagination Navigation',
  boundaryRange: 1,
  ellipsisItem: '...',
  firstItem: {
    ariaLabel: 'First item',
    content: '«'
  },
  lastItem: {
    ariaLabel: 'Last item',
    content: '»'
  },
  nextItem: {
    ariaLabel: 'Next item',
    content: '⟩'
  },
  pageItem: {},
  prevItem: {
    ariaLabel: 'Previous item',
    content: '⟨'
  },
  siblingRange: 1
};
Pagination._meta = {
  name: 'Pagination',
  type: _lib.META.TYPES.ADDON
};
Pagination.Item = _PaginationItem2.default;
Pagination.handledProps = ['activePage', 'ariaLabel', 'boundaryRange', 'defaultActivePage', 'ellipsisItem', 'firstItem', 'lastItem', 'nextItem', 'onPageChange', 'pageItem', 'prevItem', 'siblingRange', 'totalPages'];
exports.default = Pagination;
Pagination.propTypes = process.env.NODE_ENV !== "production" ? {
  /** A pagination item can have an aria label. */
  ariaLabel: _propTypes2.default.string,

  /** Initial activePage value. */
  defaultActivePage: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** Index of the currently active page. */
  activePage: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** Number of always visible pages at the beginning and end. */
  boundaryRange: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** A shorthand for PaginationItem. */
  ellipsisItem: _lib.customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  firstItem: _lib.customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  lastItem: _lib.customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  nextItem: _lib.customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  pageItem: _lib.customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  prevItem: _lib.customPropTypes.itemShorthand,

  /**
   * Called on change of an active page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onPageChange: _propTypes2.default.func,

  /** Number of always visible pages before and after the current one. */
  siblingRange: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** Total number of pages. */
  totalPages: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired
} : {};