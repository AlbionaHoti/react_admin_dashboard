'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _reactTreebeard = require('react-treebeard');

var _chevronRight = require('react-icons/lib/io/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routed_link = require('../../../containers/routed_link');

var _menu_item = require('../../menu_item');

var _menu_item2 = _interopRequireDefault(_menu_item);

var _tree_node_type = require('./tree_node_type');

var _tree_node_type2 = _interopRequireDefault(_tree_node_type);

var _tree_decorators_utils = require('./tree_decorators_utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

function ToggleDecorator(_ref) {
  var style = _ref.style;
  var height = style.height,
      width = style.width,
      arrow = style.arrow;


  return _react2.default.createElement(
    'div',
    { style: style.base },
    _react2.default.createElement(
      'div',
      { style: style.wrapper },
      _react2.default.createElement(_chevronRight2.default, { height: height, width: width, style: arrow })
    )
  );
}

ToggleDecorator.propTypes = {
  style: _propTypes2.default.shape({
    width: _propTypes2.default.number.isRequired,
    height: _propTypes2.default.number.isRequired,
    arrow: _propTypes2.default.object.isRequired
  }).isRequired
};

function ContainerDecorator(props) {
  var node = props.node,
      style = props.style,
      onClick = props.onClick;
  var container = style.container,
      restStyles = (0, _objectWithoutProperties3.default)(style, ['container']);


  if (node.root) {
    return null;
  }

  var containerStyle = container.reduce(function (acc, styles) {
    return (0, _extends3.default)({}, acc, styles);
  }, {});
  var innerContainer = _react2.default.createElement(_reactTreebeard.decorators.Container, (0, _extends3.default)({}, props, { style: restStyles, onClick: noop }));

  if (node.type !== _tree_node_type2.default.STORY) {
    return _react2.default.createElement(
      _menu_item2.default,
      { style: containerStyle, onClick: onClick, 'data-name': node.name },
      innerContainer
    );
  }

  var overrideParams = {
    selectedKind: node.kind,
    selectedStory: node.story
  };

  return _react2.default.createElement(
    _routed_link.MenuLink,
    {
      active: node.active,
      overrideParams: overrideParams,
      onClick: onClick,
      'data-name': node.name
    },
    innerContainer
  );
}

ContainerDecorator.propTypes = {
  style: _propTypes2.default.shape({
    container: _propTypes2.default.array.isRequired
  }).isRequired,
  node: _propTypes2.default.shape({
    root: _propTypes2.default.bool,
    type: _propTypes2.default.oneOf([_tree_node_type2.default.NAMESPACE, _tree_node_type2.default.STORY]).isRequired,
    name: _propTypes2.default.string.isRequired,
    kind: _propTypes2.default.string,
    story: _propTypes2.default.string,
    active: _propTypes2.default.bool
  }).isRequired,
  onClick: _propTypes2.default.func.isRequired
};

function HeaderDecorator(props) {
  var style = props.style,
      node = props.node,
      restProps = (0, _objectWithoutProperties3.default)(props, ['style', 'node']);


  var newStyle = style;

  if (node.type === _tree_node_type2.default.STORY) {
    newStyle = (0, _extends3.default)({}, style, {
      title: null
    });
  }

  var name = (0, _tree_decorators_utils.highlightNode)(node, style);

  var newNode = (0, _extends3.default)({}, node, {
    name: name
  });

  return _react2.default.createElement(_reactTreebeard.decorators.Header, (0, _extends3.default)({ style: newStyle, node: newNode }, restProps));
}

HeaderDecorator.propTypes = {
  style: _propTypes2.default.shape({
    title: _propTypes2.default.object.isRequired,
    base: _propTypes2.default.object.isRequired
  }).isRequired,
  node: _propTypes2.default.shape({
    type: _propTypes2.default.oneOf([_tree_node_type2.default.NAMESPACE, _tree_node_type2.default.STORY]),
    highlight: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.number))
  }).isRequired
};

exports.default = (0, _extends3.default)({}, _reactTreebeard.decorators, {
  Header: HeaderDecorator,
  Container: ContainerDecorator,
  Toggle: ToggleDecorator
});