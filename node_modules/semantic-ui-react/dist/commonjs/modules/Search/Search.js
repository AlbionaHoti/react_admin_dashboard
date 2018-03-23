'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _get3 = require('babel-runtime/helpers/get');

var _get4 = _interopRequireDefault(_get3);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _partialRight2 = require('lodash/partialRight');

var _partialRight3 = _interopRequireDefault(_partialRight2);

var _inRange2 = require('lodash/inRange');

var _inRange3 = _interopRequireDefault(_inRange2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _get5 = require('lodash/get');

var _get6 = _interopRequireDefault(_get5);

var _reduce2 = require('lodash/reduce');

var _reduce3 = _interopRequireDefault(_reduce2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Input = require('../../elements/Input');

var _Input2 = _interopRequireDefault(_Input);

var _SearchCategory = require('./SearchCategory');

var _SearchCategory2 = _interopRequireDefault(_SearchCategory);

var _SearchResult = require('./SearchResult');

var _SearchResult2 = _interopRequireDefault(_SearchResult);

var _SearchResults = require('./SearchResults');

var _SearchResults2 = _interopRequireDefault(_SearchResults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A search module allows a user to query for results from a selection of data
 */
var Search = function (_Component) {
  (0, _inherits3.default)(Search, _Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.handleResultSelect = function (e, result) {

      (0, _invoke3.default)(_this.props, 'onResultSelect', e, (0, _extends3.default)({}, _this.props, { result: result }));
    }, _this.handleSelectionChange = function (e) {

      var result = _this.getSelectedResult();
      (0, _invoke3.default)(_this.props, 'onSelectionChange', e, (0, _extends3.default)({}, _this.props, { result: result }));
    }, _this.closeOnEscape = function (e) {
      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Escape) return;
      e.preventDefault();
      _this.close();
    }, _this.moveSelectionOnKeyDown = function (e) {
      switch (_lib.keyboardKey.getCode(e)) {
        case _lib.keyboardKey.ArrowDown:
          e.preventDefault();
          _this.moveSelectionBy(e, 1);
          break;
        case _lib.keyboardKey.ArrowUp:
          e.preventDefault();
          _this.moveSelectionBy(e, -1);
          break;
        default:
          break;
      }
    }, _this.selectItemOnEnter = function (e) {
      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Enter) return;

      var result = _this.getSelectedResult();

      // prevent selecting null if there was no selected item value
      if (!result) return;

      e.preventDefault();

      // notify the onResultSelect prop that the user is trying to change value
      _this.setValue(result.title);
      _this.handleResultSelect(e, result);
      _this.close();
    }, _this.closeOnDocumentClick = function (e) {
      _this.close();
    }, _this.handleMouseDown = function (e) {

      _this.isMouseDown = true;
      (0, _invoke3.default)(_this.props, 'onMouseDown', e, _this.props);
      _lib.eventStack.sub('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleDocumentMouseUp = function () {

      _this.isMouseDown = false;
      _lib.eventStack.unsub('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleInputClick = function (e) {

      // prevent closeOnDocumentClick()
      e.nativeEvent.stopImmediatePropagation();

      _this.tryOpen();
    }, _this.handleItemClick = function (e, _ref2) {
      var id = _ref2.id;

      var result = _this.getSelectedResult(id);

      // prevent closeOnDocumentClick()
      e.nativeEvent.stopImmediatePropagation();

      // notify the onResultSelect prop that the user is trying to change value
      _this.setValue(result.title);
      _this.handleResultSelect(e, result);
      _this.close();
    }, _this.handleFocus = function (e) {
      var onFocus = _this.props.onFocus;

      if (onFocus) onFocus(e, _this.props);
      _this.setState({ focus: true });
    }, _this.handleBlur = function (e) {
      var onBlur = _this.props.onBlur;

      if (onBlur) onBlur(e, _this.props);
      _this.setState({ focus: false });
    }, _this.handleSearchChange = function (e) {
      // prevent propagating to this.props.onChange()
      e.stopPropagation();
      var minCharacters = _this.props.minCharacters;
      var open = _this.state.open;

      var newQuery = e.target.value;

      (0, _invoke3.default)(_this.props, 'onSearchChange', e, (0, _extends3.default)({}, _this.props, { value: newQuery }));

      // open search dropdown on search query
      if (newQuery.length < minCharacters) {
        _this.close();
      } else if (!open) {
        _this.tryOpen(newQuery);
      }

      _this.setValue(newQuery);
    }, _this.getFlattenedResults = function () {
      var _this$props = _this.props,
          category = _this$props.category,
          results = _this$props.results;


      return !category ? results : (0, _reduce3.default)(results, function (memo, categoryData) {
        return memo.concat(categoryData.results);
      }, []);
    }, _this.getSelectedResult = function () {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.selectedIndex;

      var results = _this.getFlattenedResults();
      return (0, _get6.default)(results, index);
    }, _this.setValue = function (value) {
      var selectFirstResult = _this.props.selectFirstResult;


      _this.trySetState({ value: value }, { selectedIndex: selectFirstResult ? 0 : -1 });
    }, _this.moveSelectionBy = function (e, offset) {
      var selectedIndex = _this.state.selectedIndex;


      var results = _this.getFlattenedResults();
      var lastIndex = results.length - 1;

      // next is after last, wrap to beginning
      // next is before first, wrap to end
      var nextIndex = selectedIndex + offset;
      if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      _this.setState({ selectedIndex: nextIndex });
      _this.scrollSelectedItemIntoView();
      _this.handleSelectionChange(e);
    }, _this.scrollSelectedItemIntoView = function () {
      // Do not access document when server side rendering
      if (!(0, _lib.isBrowser)()) return;
      var menu = document.querySelector('.ui.search.active.visible .results.visible');
      var item = menu.querySelector('.result.active');
      if (!item) return;

      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    }, _this.tryOpen = function () {
      var currentValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var minCharacters = _this.props.minCharacters;

      if (currentValue.length < minCharacters) return;

      _this.open();
    }, _this.open = function () {
      _this.trySetState({ open: true });
    }, _this.close = function () {
      _this.trySetState({ open: false });
    }, _this.renderSearchInput = function (rest) {
      var _this$props2 = _this.props,
          icon = _this$props2.icon,
          input = _this$props2.input;
      var value = _this.state.value;


      return _Input2.default.create(input, { defaultProps: (0, _extends3.default)({}, rest, {
          icon: icon,
          input: { className: 'prompt', tabIndex: '0', autoComplete: 'off' },
          onChange: _this.handleSearchChange,
          onClick: _this.handleInputClick,
          value: value
        }) });
    }, _this.renderNoResults = function () {
      var _this$props3 = _this.props,
          noResultsDescription = _this$props3.noResultsDescription,
          noResultsMessage = _this$props3.noResultsMessage;


      return _react2.default.createElement(
        'div',
        { className: 'message empty' },
        _react2.default.createElement(
          'div',
          { className: 'header' },
          noResultsMessage
        ),
        noResultsDescription && _react2.default.createElement(
          'div',
          { className: 'description' },
          noResultsDescription
        )
      );
    }, _this.renderResult = function (_ref3, index, _array) {
      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var childKey = _ref3.childKey,
          result = (0, _objectWithoutProperties3.default)(_ref3, ['childKey']);
      var resultRenderer = _this.props.resultRenderer;
      var selectedIndex = _this.state.selectedIndex;

      var offsetIndex = index + offset;

      return _react2.default.createElement(_SearchResult2.default, (0, _extends3.default)({
        key: childKey || result.title,
        active: selectedIndex === offsetIndex,
        onClick: _this.handleItemClick,
        renderer: resultRenderer
      }, result, {
        id: offsetIndex // Used to lookup the result on item click
      }));
    }, _this.renderResults = function () {
      var results = _this.props.results;


      return (0, _map3.default)(results, _this.renderResult);
    }, _this.renderCategories = function () {
      var _this$props4 = _this.props,
          categoryRenderer = _this$props4.categoryRenderer,
          categories = _this$props4.results;
      var selectedIndex = _this.state.selectedIndex;


      var count = 0;

      return (0, _map3.default)(categories, function (_ref4) {
        var childKey = _ref4.childKey,
            category = (0, _objectWithoutProperties3.default)(_ref4, ['childKey']);

        var categoryProps = (0, _extends3.default)({
          key: childKey || category.name,
          active: (0, _inRange3.default)(selectedIndex, count, count + category.results.length),
          renderer: categoryRenderer
        }, category);
        var renderFn = (0, _partialRight3.default)(_this.renderResult, count);

        count += category.results.length;

        return _react2.default.createElement(
          _SearchCategory2.default,
          categoryProps,
          category.results.map(renderFn)
        );
      });
    }, _this.renderMenuContent = function () {
      var _this$props5 = _this.props,
          category = _this$props5.category,
          showNoResults = _this$props5.showNoResults,
          results = _this$props5.results;


      if ((0, _isEmpty3.default)(results)) {
        return showNoResults ? _this.renderNoResults() : null;
      }

      return category ? _this.renderCategories() : _this.renderResults();
    }, _this.renderResultsMenu = function () {
      var open = _this.state.open;

      var resultsClasses = open ? 'visible' : '';
      var menuContent = _this.renderMenuContent();

      if (!menuContent) return;

      return _react2.default.createElement(
        _SearchResults2.default,
        { className: resultsClasses },
        menuContent
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Search, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _state = this.state,
          open = _state.open,
          value = _state.value;


      this.setValue(value);
      if (open) this.open();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      (0, _get4.default)(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), 'componentWillReceiveProps', this).call(this, nextProps);


      if (!(0, _lib.shallowEqual)(nextProps.value, this.props.value)) {
        this.setValue(nextProps.value);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _lib.shallowEqual)(nextProps, this.props) || !(0, _lib.shallowEqual)(nextState, this.state);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {

      // focused / blurred
      // eslint-disable-line complexity
      if (!prevState.focus && this.state.focus) {
        if (!this.isMouseDown) {
          this.tryOpen();
        }
        if (this.state.open) {
          _lib.eventStack.sub('keydown', [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
        }
      } else if (prevState.focus && !this.state.focus) {
        if (!this.isMouseDown) {
          this.close();
        }
        _lib.eventStack.unsub('keydown', [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
      }

      // opened / closed
      if (!prevState.open && this.state.open) {
        this.open();
        _lib.eventStack.sub('click', this.closeOnDocumentClick);
        _lib.eventStack.sub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
      } else if (prevState.open && !this.state.open) {
        this.close();
        _lib.eventStack.unsub('click', this.closeOnDocumentClick);
        _lib.eventStack.unsub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      _lib.eventStack.unsub('click', this.closeOnDocumentClick);
      _lib.eventStack.unsub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
    }

    // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Component Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Getters
    // ----------------------------------------

    // ----------------------------------------
    // Setters
    // ----------------------------------------

    // ----------------------------------------
    // Behavior
    // ----------------------------------------

    // Open if the current value is greater than the minCharacters prop


    // ----------------------------------------
    // Render
    // ----------------------------------------

    /**
     * Offset is needed for determining the active item for results within a
     * category. Since the index is reset to 0 for each new category, an offset
     * must be passed in.
     */

  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          searchClasses = _state2.searchClasses,
          focus = _state2.focus,
          open = _state2.open;
      var _props = this.props,
          aligned = _props.aligned,
          category = _props.category,
          className = _props.className,
          fluid = _props.fluid,
          loading = _props.loading,
          size = _props.size;

      // Classes

      var classes = (0, _classnames2.default)('ui', open && 'active visible', size, searchClasses, (0, _lib.useKeyOnly)(category, 'category'), (0, _lib.useKeyOnly)(focus, 'focus'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useValueAndKey)(aligned, 'aligned'), 'search', className);
      var unhandled = (0, _lib.getUnhandledProps)(Search, this.props);
      var ElementType = (0, _lib.getElementType)(Search, this.props);

      var _partitionHTMLProps = (0, _lib.partitionHTMLProps)(unhandled, {
        htmlProps: _lib.htmlInputAttrs
      }),
          _partitionHTMLProps2 = (0, _slicedToArray3.default)(_partitionHTMLProps, 2),
          htmlInputProps = _partitionHTMLProps2[0],
          rest = _partitionHTMLProps2[1];

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, {
          className: classes,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onMouseDown: this.handleMouseDown
        }),
        this.renderSearchInput(htmlInputProps),
        this.renderResultsMenu()
      );
    }
  }]);
  return Search;
}(_lib.AutoControlledComponent);

Search.defaultProps = {
  icon: 'search',
  input: 'text',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  showNoResults: true
};
Search.autoControlledProps = ['open', 'value'];
Search._meta = {
  name: 'Search',
  type: _lib.META.TYPES.MODULE
};
Search.Category = _SearchCategory2.default;
Search.Result = _SearchResult2.default;
Search.Results = _SearchResults2.default;
Search.handledProps = ['aligned', 'as', 'category', 'categoryRenderer', 'className', 'defaultOpen', 'defaultValue', 'fluid', 'icon', 'input', 'loading', 'minCharacters', 'noResultsDescription', 'noResultsMessage', 'onBlur', 'onFocus', 'onMouseDown', 'onResultSelect', 'onSearchChange', 'onSelectionChange', 'open', 'resultRenderer', 'results', 'selectFirstResult', 'showNoResults', 'size', 'value'];
exports.default = Search;
Search.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  // ------------------------------------
  // Behavior
  // ------------------------------------

  /** Initial value of open. */
  defaultOpen: _propTypes2.default.bool,

  /** Initial value. */
  defaultValue: _propTypes2.default.string,

  /** Shorthand for Icon. */
  icon: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.object]),

  /** Minimum characters to query for results */
  minCharacters: _propTypes2.default.number,

  /** Additional text for "No Results" message with less emphasis. */
  noResultsDescription: _propTypes2.default.node,

  /** Message to display when there are no results. */
  noResultsMessage: _propTypes2.default.node,

  /** Controls whether or not the results menu is displayed. */
  open: _propTypes2.default.bool,

  /**
   * One of:
   * - array of Search.Result props e.g. `{ title: '', description: '' }` or
   * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
   */
  results: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape(_SearchResult2.default.propTypes)), _propTypes2.default.object]),

  /** Whether the search should automatically select the first result after searching. */
  selectFirstResult: _propTypes2.default.bool,

  /** Whether a "no results" message should be shown if no results are found. */
  showNoResults: _propTypes2.default.bool,

  /** Current value of the search input. Creates a controlled component. */
  value: _propTypes2.default.string,

  // ------------------------------------
  // Rendering
  // ------------------------------------

  /**
   * Renders the SearchCategory contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable SearchCategory contents.
   */
  categoryRenderer: _propTypes2.default.func,

  /**
   * Renders the SearchResult contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable SearchResult contents.
   */
  resultRenderer: _propTypes2.default.func,

  // ------------------------------------
  // Callbacks
  // ------------------------------------

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: _propTypes2.default.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: _propTypes2.default.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: _propTypes2.default.func,

  /**
   * Called when a result is selected.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onResultSelect: _propTypes2.default.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of search input.
   */
  onSearchChange: _propTypes2.default.func,

  /**
   * Called when the active selection index is changed.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onSelectionChange: _propTypes2.default.func,

  // ------------------------------------
  // Style
  // ------------------------------------

  /** A search can have its results aligned to its left or right container edge. */
  aligned: _propTypes2.default.string,

  /** A search can display results from remote content ordered by categories. */
  category: _propTypes2.default.bool,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** A search can have its results take up the width of its container. */
  fluid: _propTypes2.default.bool,

  /** A search input can take up the width of its container. */
  input: _lib.customPropTypes.itemShorthand,

  /** A search can show a loading indicator. */
  loading: _propTypes2.default.bool,

  /** A search can have different sizes. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'medium'))
} : {};