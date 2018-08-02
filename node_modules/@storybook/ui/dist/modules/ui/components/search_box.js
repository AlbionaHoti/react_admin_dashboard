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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _reactFuzzy = require('react-fuzzy');

var _reactFuzzy2 = _interopRequireDefault(_reactFuzzy);

var _components = require('@storybook/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modalStyle = {
  content: (0, _extends3.default)({
    top: '100px',
    right: 'auto',
    bottom: 'auto',
    left: '50%',
    marginLeft: '-215px',
    border: 'none',
    padding: 0,
    overflow: 'visible'
  }, _components.baseFonts),
  overlay: {
    background: 'transparent',
    zIndex: '1'
  }
};

var formatStories = function formatStories(stories) {
  var formattedStories = [];
  var i = 0;
  stories.forEach(function (val) {
    i += 1;
    formattedStories.push({
      type: 'kind',
      value: val.kind,
      id: i
    });

    val.stories.forEach(function (story) {
      i += 1;
      formattedStories.push({
        type: 'story',
        value: story,
        id: i,
        kind: val.kind
      });
    });
  });

  return formattedStories;
};

var suggestionTemplate = function suggestionTemplate(props, state, styles, clickHandler) {
  return state.results.map(function (val, i) {
    var style = state.selectedIndex === i ? styles.selectedResultStyle : styles.resultsStyle;
    return (
      // react-fuzzy has its own keyboard navigation
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      _react2.default.createElement(
        'div',
        {
          tabIndex: 0,
          role: 'option',
          'aria-selected': state.selectedIndex === i,
          key: val.value + '_' + val.id,
          style: (0, _extends3.default)({}, style, { display: 'flex', justifyContent: 'space-between' }),
          onClick: function onClick() {
            return clickHandler(i);
          }
        },
        _react2.default.createElement(
          'p',
          { style: { margin: 0 } },
          val.value
        ),
        _react2.default.createElement(
          'p',
          { style: { opacity: 0.5, margin: 0, paddingLeft: 10, textAlign: 'right' } },
          val.type === 'story' ? 'in ' + val.kind : 'Kind'
        )
      )
    );
  });
};

var SearchBox = function (_React$Component) {
  (0, _inherits3.default)(SearchBox, _React$Component);

  function SearchBox(props) {
    (0, _classCallCheck3.default)(this, SearchBox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchBox.__proto__ || (0, _getPrototypeOf2.default)(SearchBox)).call(this, props));

    _this.onSelect = _this.onSelect.bind(_this);
    _this.fireOnStory = _this.fireOnStory.bind(_this);
    _this.fireOnKind = _this.fireOnKind.bind(_this);
    _this.inputRef = _this.inputRef.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SearchBox, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // focus search box on opening
      if (this.props.showSearchBox && !prevProps.showSearchBox && this.input != null) {
        this.input.focus();
      }
    }
  }, {
    key: 'onSelect',
    value: function onSelect(selected) {
      var onClose = this.props.onClose;

      if (selected.type === 'story') this.fireOnStory(selected.value, selected.kind);else this.fireOnKind(selected.value);
      onClose();
    }
  }, {
    key: 'fireOnKind',
    value: function fireOnKind(kind) {
      var onSelectStory = this.props.onSelectStory;

      if (onSelectStory) onSelectStory(kind, null);
    }
  }, {
    key: 'fireOnStory',
    value: function fireOnStory(story, kind) {
      var onSelectStory = this.props.onSelectStory;

      if (onSelectStory) onSelectStory(kind, story);
    }
  }, {
    key: 'inputRef',
    value: function inputRef(fuzzy) {
      if (fuzzy != null) {
        this.input = fuzzy.refs.searchBox;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactModal2.default,
        {
          isOpen: this.props.showSearchBox,
          onRequestClose: this.props.onClose,
          style: modalStyle,
          contentLabel: 'Search',
          shouldReturnFocusAfterClose: false
        },
        _react2.default.createElement(_reactFuzzy2.default, {
          list: formatStories(this.props.stories),
          onSelect: this.onSelect,
          keys: ['value', 'type'],
          resultsTemplate: suggestionTemplate,
          ref: this.inputRef
        })
      );
    }
  }]);
  return SearchBox;
}(_react2.default.Component);

exports.default = SearchBox;


SearchBox.defaultProps = { stories: [] };

SearchBox.propTypes = {
  showSearchBox: _propTypes2.default.bool.isRequired,
  stories: _propTypes2.default.arrayOf(_propTypes2.default.object),
  onSelectStory: _propTypes2.default.func.isRequired,
  onClose: _propTypes2.default.func.isRequired
};