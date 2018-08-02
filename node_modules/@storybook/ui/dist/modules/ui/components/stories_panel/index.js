'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _stories_tree = require('./stories_tree');

var _stories_tree2 = _interopRequireDefault(_stories_tree);

var _text_filter = require('./text_filter');

var _text_filter2 = _interopRequireDefault(_text_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollStyle = {
  height: 'calc(100vh - 105px)',
  marginTop: 10,
  overflow: 'auto'
};

var mainStyle = {
  padding: '10px 0 10px 10px'
};

var storyProps = ['selectedKind', 'selectedHierarchy', 'selectedStory', 'onSelectStory', 'storyFilter', 'sidebarAnimations'];

function hierarchyContainsStories(storiesHierarchy) {
  return storiesHierarchy && storiesHierarchy.map.size > 0;
}

var StoriesPanel = function (_Component) {
  (0, _inherits3.default)(StoriesPanel, _Component);

  function StoriesPanel() {
    (0, _classCallCheck3.default)(this, StoriesPanel);
    return (0, _possibleConstructorReturn3.default)(this, (StoriesPanel.__proto__ || (0, _getPrototypeOf2.default)(StoriesPanel)).apply(this, arguments));
  }

  (0, _createClass3.default)(StoriesPanel, [{
    key: 'renderStories',
    value: function renderStories() {
      var _this2 = this;

      var storiesHierarchies = this.props.storiesHierarchies;


      return storiesHierarchies.map(function (hierarchy) {
        return hierarchyContainsStories(hierarchy) && _react2.default.createElement(_stories_tree2.default, (0, _extends3.default)({
          key: hierarchy.name
        }, (0, _lodash2.default)(_this2.props, storyProps), {
          storiesHierarchy: hierarchy
        }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          onStoryFilter = _props.onStoryFilter,
          openShortcutsHelp = _props.openShortcutsHelp,
          storyFilter = _props.storyFilter,
          url = _props.url;


      return _react2.default.createElement(
        'div',
        { style: mainStyle },
        _react2.default.createElement(_header2.default, { name: name, url: url, openShortcutsHelp: openShortcutsHelp }),
        _react2.default.createElement(_text_filter2.default, {
          text: storyFilter,
          onClear: function onClear() {
            return onStoryFilter('');
          },
          onChange: function onChange(text) {
            return onStoryFilter(text);
          }
        }),
        _react2.default.createElement(
          'div',
          { style: scrollStyle },
          this.renderStories()
        )
      );
    }
  }]);
  return StoriesPanel;
}(_react.Component);

StoriesPanel.defaultProps = {
  storiesHierarchies: [],
  storyFilter: null,
  onStoryFilter: function onStoryFilter() {},
  openShortcutsHelp: null,
  name: '',
  url: ''
};

StoriesPanel.propTypes = {
  storiesHierarchies: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    namespaces: _propTypes2.default.arrayOf(_propTypes2.default.string),
    name: _propTypes2.default.string,
    map: _propTypes2.default.object
  })),
  storyFilter: _propTypes2.default.string,
  onStoryFilter: _propTypes2.default.func,

  openShortcutsHelp: _propTypes2.default.func,
  name: _propTypes2.default.string,
  url: _propTypes2.default.string
};

exports.default = StoriesPanel;