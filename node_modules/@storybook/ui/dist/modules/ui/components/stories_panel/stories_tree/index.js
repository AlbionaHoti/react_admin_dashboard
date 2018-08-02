'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends5 = require('babel-runtime/helpers/extends');

var _extends6 = _interopRequireDefault(_extends5);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _reactTreebeard = require('react-treebeard');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _tree_header = require('./tree_header');

var _tree_header2 = _interopRequireDefault(_tree_header);

var _tree_node_type = require('./tree_node_type');

var _tree_node_type2 = _interopRequireDefault(_tree_node_type);

var _tree_decorators = require('./tree_decorators');

var _tree_decorators2 = _interopRequireDefault(_tree_decorators);

var _tree_style = require('./tree_style');

var _tree_style2 = _interopRequireDefault(_tree_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var namespaceSeparator = '@';

function createNodeKey(_ref) {
  var namespaces = _ref.namespaces,
      type = _ref.type;

  return [].concat((0, _toConsumableArray3.default)(namespaces), [[type]]).join(namespaceSeparator);
}

function getSelectedNodes(selectedHierarchy) {
  return selectedHierarchy.reduce(function (nodes, namespace) {
    var node = {};

    node.type = _tree_node_type2.default.NAMESPACE;

    if (!nodes.length) {
      node.namespaces = [namespace];
    } else {
      var lastNode = nodes[nodes.length - 1];
      node.namespaces = [].concat((0, _toConsumableArray3.default)(lastNode.namespaces), [[namespace]]);
    }

    nodes.push(node);

    return nodes;
  }, []).reduce(function (nodesMap, node) {
    return (0, _extends6.default)({}, nodesMap, (0, _defineProperty3.default)({}, createNodeKey(node), true));
  }, {});
}

var Stories = function (_React$Component) {
  (0, _inherits3.default)(Stories, _React$Component);

  function Stories() {
    var _ref2;

    (0, _classCallCheck3.default)(this, Stories);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Stories.__proto__ || (0, _getPrototypeOf2.default)(Stories)).call.apply(_ref2, [this].concat(args)));

    _this.onToggle = _this.onToggle.bind(_this);

    var selectedHierarchy = _this.props.selectedHierarchy;


    _this.state = {
      overriddenFilteredNodes: {},
      nodes: getSelectedNodes(selectedHierarchy)
    };
    return _this;
  }

  (0, _createClass3.default)(Stories, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _nextProps$selectedHi = nextProps.selectedHierarchy,
          nextSelectedHierarchy = _nextProps$selectedHi === undefined ? [] : _nextProps$selectedHi,
          nextStoryFilter = nextProps.storyFilter;
      var _props = this.props,
          _props$selectedHierar = _props.selectedHierarchy,
          currentSelectedHierarchy = _props$selectedHierar === undefined ? [] : _props$selectedHierar,
          currentStoryFilter = _props.storyFilter;


      var shouldClearFilteredNodes = nextStoryFilter !== currentStoryFilter;
      var selectedHierarchyChanged = !(0, _deepEqual2.default)(nextSelectedHierarchy, currentSelectedHierarchy);

      if (selectedHierarchyChanged || shouldClearFilteredNodes) {
        var selectedNodes = getSelectedNodes(nextSelectedHierarchy);

        this.setState(function (prevState) {
          return {
            overriddenFilteredNodes: shouldClearFilteredNodes ? {} : prevState.overriddenFilteredNodes,
            nodes: (0, _extends6.default)({}, prevState.nodes, selectedNodes)
          };
        });
      }
    }
  }, {
    key: 'onToggle',
    value: function onToggle(node, toggled) {
      if (node.story) {
        this.fireOnKindAndStory(node.kind, node.story);
      }

      if (!node.namespaces) {
        return;
      }

      this.setState(function (prevState) {
        return {
          nodes: (0, _extends6.default)({}, prevState.nodes, (0, _defineProperty3.default)({}, node.key, toggled)),
          overriddenFilteredNodes: (0, _extends6.default)({}, prevState.overriddenFilteredNodes, (0, _defineProperty3.default)({}, node.key, !toggled))
        };
      });
    }
  }, {
    key: 'fireOnKindAndStory',
    value: function fireOnKindAndStory(kind, story) {
      var onSelectStory = this.props.onSelectStory;

      if (onSelectStory) onSelectStory(kind, story);
    }
  }, {
    key: 'mapStoriesHierarchy',
    value: function mapStoriesHierarchy(storiesHierarchy) {
      var _this2 = this;

      var treeModel = {
        namespaces: storiesHierarchy.namespaces,
        name: storiesHierarchy.name,
        highlight: storiesHierarchy.highlight,
        children: []
      };

      if (storiesHierarchy.stories && storiesHierarchy.stories.length) {
        var _props2 = this.props,
            selectedStory = _props2.selectedStory,
            selectedKind = _props2.selectedKind;


        storiesHierarchy.stories.map(function (story) {
          return {
            name: story.name,
            story: story.name,
            kind: storiesHierarchy.kind,
            active: selectedStory === story.name && selectedKind === storiesHierarchy.kind,
            type: _tree_node_type2.default.STORY,
            highlight: story.highlight
          };
        }).forEach(function (story) {
          return treeModel.children.push(story);
        });
      }

      if (storiesHierarchy.isNamespace) {
        treeModel.type = _tree_node_type2.default.NAMESPACE;

        if (storiesHierarchy.map.size > 0) {
          storiesHierarchy.map.forEach(function (childItem) {
            return treeModel.children.push(_this2.mapStoriesHierarchy(childItem));
          });
        }
      }

      treeModel.key = createNodeKey(treeModel);
      treeModel.toggled = this.isToggled(treeModel);

      return treeModel;
    }
  }, {
    key: 'isToggled',
    value: function isToggled(treeModel) {
      return this.state.nodes[treeModel.key] || this.isFilteredNode(treeModel.key);
    }
  }, {
    key: 'isFilteredNode',
    value: function isFilteredNode(key) {
      if (!this.props.storyFilter) {
        return false;
      }

      return !this.state.overriddenFilteredNodes[key];
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          storiesHierarchy = _props3.storiesHierarchy,
          sidebarAnimations = _props3.sidebarAnimations;


      var data = this.mapStoriesHierarchy(storiesHierarchy);
      data.toggled = true;
      data.root = true;

      return _react2.default.createElement(
        'div',
        null,
        storiesHierarchy.name && _react2.default.createElement(
          _tree_header2.default,
          null,
          storiesHierarchy.name
        ),
        _react2.default.createElement(_reactTreebeard.Treebeard, {
          style: _tree_style2.default,
          data: data,
          onToggle: this.onToggle,
          animations: sidebarAnimations ? undefined : false,
          decorators: _tree_decorators2.default
        })
      );
    }
  }]);
  return Stories;
}(_react2.default.Component);

Stories.defaultProps = {
  onSelectStory: null,
  storiesHierarchy: null,
  storyFilter: null,
  sidebarAnimations: true
};

Stories.propTypes = {
  storyFilter: _propTypes2.default.string,
  storiesHierarchy: _propTypes2.default.shape({
    namespaces: _propTypes2.default.arrayOf(_propTypes2.default.string),
    name: _propTypes2.default.string,
    map: _propTypes2.default.object
  }),
  selectedHierarchy: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  selectedKind: _propTypes2.default.string.isRequired,
  selectedStory: _propTypes2.default.string.isRequired,
  onSelectStory: _propTypes2.default.func,
  sidebarAnimations: _propTypes2.default.bool
};

exports.default = Stories;