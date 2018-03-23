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

var _ListContent = require('./ListContent');

var _ListContent2 = _interopRequireDefault(_ListContent);

var _ListDescription = require('./ListDescription');

var _ListDescription2 = _interopRequireDefault(_ListDescription);

var _ListHeader = require('./ListHeader');

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _ListIcon = require('./ListIcon');

var _ListIcon2 = _interopRequireDefault(_ListIcon);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListList = require('./ListList');

var _ListList2 = _interopRequireDefault(_ListList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A list groups related content.
 */
var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.handleItemOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e, itemProps) {
          (0, _invoke3.default)(predefinedProps, 'onClick', e, itemProps);
          (0, _invoke3.default)(_this.props, 'onItemClick', e, itemProps);
        }
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          animated = _props.animated,
          bulleted = _props.bulleted,
          celled = _props.celled,
          children = _props.children,
          className = _props.className,
          content = _props.content,
          divided = _props.divided,
          floated = _props.floated,
          horizontal = _props.horizontal,
          inverted = _props.inverted,
          items = _props.items,
          link = _props.link,
          ordered = _props.ordered,
          relaxed = _props.relaxed,
          selection = _props.selection,
          size = _props.size,
          verticalAlign = _props.verticalAlign;


      var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(animated, 'animated'), (0, _lib.useKeyOnly)(bulleted, 'bulleted'), (0, _lib.useKeyOnly)(celled, 'celled'), (0, _lib.useKeyOnly)(divided, 'divided'), (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(link, 'link'), (0, _lib.useKeyOnly)(ordered, 'ordered'), (0, _lib.useKeyOnly)(selection, 'selection'), (0, _lib.useKeyOrValueAndKey)(relaxed, 'relaxed'), (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useVerticalAlignProp)(verticalAlign), 'list', className);
      var rest = (0, _lib.getUnhandledProps)(List, this.props);
      var ElementType = (0, _lib.getElementType)(List, this.props);

      if (!_lib.childrenUtils.isNil(children)) {
        return _react2.default.createElement(
          ElementType,
          (0, _extends3.default)({}, rest, { role: 'list', className: classes }),
          children
        );
      }

      if (!_lib.childrenUtils.isNil(content)) {
        return _react2.default.createElement(
          ElementType,
          (0, _extends3.default)({}, rest, { role: 'list', className: classes }),
          content
        );
      }

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { role: 'list', className: classes }),
        (0, _map3.default)(items, function (item) {
          return _ListItem2.default.create(item, { overrideProps: _this2.handleItemOverrides });
        })
      );
    }
  }]);
  return List;
}(_react.Component);

List._meta = {
  name: 'List',
  type: _lib.META.TYPES.ELEMENT
};
List.Content = _ListContent2.default;
List.Description = _ListDescription2.default;
List.Header = _ListHeader2.default;
List.Icon = _ListIcon2.default;
List.Item = _ListItem2.default;
List.List = _ListList2.default;
List.handledProps = ['animated', 'as', 'bulleted', 'celled', 'children', 'className', 'content', 'divided', 'floated', 'horizontal', 'inverted', 'items', 'link', 'onItemClick', 'ordered', 'relaxed', 'selection', 'size', 'verticalAlign'];
List.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A list can animate to set the current item apart from the list. */
  animated: _propTypes2.default.bool,

  /** A list can mark items with a bullet. */
  bulleted: _propTypes2.default.bool,

  /** A list can divide its items into cells. */
  celled: _propTypes2.default.bool,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A list can show divisions between content. */
  divided: _propTypes2.default.bool,

  /** An list can be floated left or right. */
  floated: _propTypes2.default.oneOf(_lib.SUI.FLOATS),

  /** A list can be formatted to have items appear horizontally. */
  horizontal: _propTypes2.default.bool,

  /** A list can be inverted to appear on a dark background. */
  inverted: _propTypes2.default.bool,

  /** Shorthand array of props for ListItem. */
  items: _lib.customPropTypes.collectionShorthand,

  /** A list can be specially formatted for navigation links. */
  link: _propTypes2.default.bool,

  /**
   * onClick handler for ListItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes2.default.func]),

  /** A list can be ordered numerically. */
  ordered: _propTypes2.default.bool,

  /** A list can relax its padding to provide more negative space. */
  relaxed: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['very'])]),

  /** A selection list formats list items as possible choices. */
  selection: _propTypes2.default.bool,

  /** A list can vary in size. */
  size: _propTypes2.default.oneOf(_lib.SUI.SIZES),

  /** An element inside a list can be vertically aligned. */
  verticalAlign: _propTypes2.default.oneOf(_lib.SUI.VERTICAL_ALIGNMENTS)
} : {};
exports.default = List;