import _slicedToArray from 'babel-runtime/helpers/slicedToArray';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get2 from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _isEmpty from 'lodash/isEmpty';
import _partialRight from 'lodash/partialRight';
import _inRange from 'lodash/inRange';
import _map from 'lodash/map';
import _get from 'lodash/get';
import _reduce from 'lodash/reduce';
import _invoke from 'lodash/invoke';
import _without from 'lodash/without';
import cx from 'classnames';

import PropTypes from 'prop-types';
import React from 'react';

import { AutoControlledComponent as Component, customPropTypes, eventStack, getElementType, getUnhandledProps, htmlInputAttrs, isBrowser, keyboardKey, META, objectDiff, partitionHTMLProps, shallowEqual, SUI, useKeyOnly, useValueAndKey } from '../../lib';
import Input from '../../elements/Input';
import SearchCategory from './SearchCategory';
import SearchResult from './SearchResult';
import SearchResults from './SearchResults';

/**
 * A search module allows a user to query for results from a selection of data
 */
var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.handleResultSelect = function (e, result) {

      _invoke(_this.props, 'onResultSelect', e, _extends({}, _this.props, { result: result }));
    }, _this.handleSelectionChange = function (e) {

      var result = _this.getSelectedResult();
      _invoke(_this.props, 'onSelectionChange', e, _extends({}, _this.props, { result: result }));
    }, _this.closeOnEscape = function (e) {
      if (keyboardKey.getCode(e) !== keyboardKey.Escape) return;
      e.preventDefault();
      _this.close();
    }, _this.moveSelectionOnKeyDown = function (e) {
      switch (keyboardKey.getCode(e)) {
        case keyboardKey.ArrowDown:
          e.preventDefault();
          _this.moveSelectionBy(e, 1);
          break;
        case keyboardKey.ArrowUp:
          e.preventDefault();
          _this.moveSelectionBy(e, -1);
          break;
        default:
          break;
      }
    }, _this.selectItemOnEnter = function (e) {
      if (keyboardKey.getCode(e) !== keyboardKey.Enter) return;

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
      _invoke(_this.props, 'onMouseDown', e, _this.props);
      eventStack.sub('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleDocumentMouseUp = function () {

      _this.isMouseDown = false;
      eventStack.unsub('mouseup', _this.handleDocumentMouseUp);
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

      _invoke(_this.props, 'onSearchChange', e, _extends({}, _this.props, { value: newQuery }));

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


      return !category ? results : _reduce(results, function (memo, categoryData) {
        return memo.concat(categoryData.results);
      }, []);
    }, _this.getSelectedResult = function () {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.selectedIndex;

      var results = _this.getFlattenedResults();
      return _get(results, index);
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
      if (!isBrowser()) return;
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


      return Input.create(input, { defaultProps: _extends({}, rest, {
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


      return React.createElement(
        'div',
        { className: 'message empty' },
        React.createElement(
          'div',
          { className: 'header' },
          noResultsMessage
        ),
        noResultsDescription && React.createElement(
          'div',
          { className: 'description' },
          noResultsDescription
        )
      );
    }, _this.renderResult = function (_ref3, index, _array) {
      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      var childKey = _ref3.childKey,
          result = _objectWithoutProperties(_ref3, ['childKey']);

      var resultRenderer = _this.props.resultRenderer;
      var selectedIndex = _this.state.selectedIndex;

      var offsetIndex = index + offset;

      return React.createElement(SearchResult, _extends({
        key: childKey || result.title,
        active: selectedIndex === offsetIndex,
        onClick: _this.handleItemClick,
        renderer: resultRenderer
      }, result, {
        id: offsetIndex // Used to lookup the result on item click
      }));
    }, _this.renderResults = function () {
      var results = _this.props.results;


      return _map(results, _this.renderResult);
    }, _this.renderCategories = function () {
      var _this$props4 = _this.props,
          categoryRenderer = _this$props4.categoryRenderer,
          categories = _this$props4.results;
      var selectedIndex = _this.state.selectedIndex;


      var count = 0;

      return _map(categories, function (_ref4) {
        var childKey = _ref4.childKey,
            category = _objectWithoutProperties(_ref4, ['childKey']);

        var categoryProps = _extends({
          key: childKey || category.name,
          active: _inRange(selectedIndex, count, count + category.results.length),
          renderer: categoryRenderer
        }, category);
        var renderFn = _partialRight(_this.renderResult, count);

        count += category.results.length;

        return React.createElement(
          SearchCategory,
          categoryProps,
          category.results.map(renderFn)
        );
      });
    }, _this.renderMenuContent = function () {
      var _this$props5 = _this.props,
          category = _this$props5.category,
          showNoResults = _this$props5.showNoResults,
          results = _this$props5.results;


      if (_isEmpty(results)) {
        return showNoResults ? _this.renderNoResults() : null;
      }

      return category ? _this.renderCategories() : _this.renderResults();
    }, _this.renderResultsMenu = function () {
      var open = _this.state.open;

      var resultsClasses = open ? 'visible' : '';
      var menuContent = _this.renderMenuContent();

      if (!menuContent) return;

      return React.createElement(
        SearchResults,
        { className: resultsClasses },
        menuContent
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
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
      _get2(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), 'componentWillReceiveProps', this).call(this, nextProps);


      if (!shallowEqual(nextProps.value, this.props.value)) {
        this.setValue(nextProps.value);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowEqual(nextProps, this.props) || !shallowEqual(nextState, this.state);
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
          eventStack.sub('keydown', [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
        }
      } else if (prevState.focus && !this.state.focus) {
        if (!this.isMouseDown) {
          this.close();
        }
        eventStack.unsub('keydown', [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
      }

      // opened / closed
      if (!prevState.open && this.state.open) {
        this.open();
        eventStack.sub('click', this.closeOnDocumentClick);
        eventStack.sub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
      } else if (prevState.open && !this.state.open) {
        this.close();
        eventStack.unsub('click', this.closeOnDocumentClick);
        eventStack.unsub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      eventStack.unsub('click', this.closeOnDocumentClick);
      eventStack.unsub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
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

      var classes = cx('ui', open && 'active visible', size, searchClasses, useKeyOnly(category, 'category'), useKeyOnly(focus, 'focus'), useKeyOnly(fluid, 'fluid'), useKeyOnly(loading, 'loading'), useValueAndKey(aligned, 'aligned'), 'search', className);
      var unhandled = getUnhandledProps(Search, this.props);
      var ElementType = getElementType(Search, this.props);

      var _partitionHTMLProps = partitionHTMLProps(unhandled, {
        htmlProps: htmlInputAttrs
      }),
          _partitionHTMLProps2 = _slicedToArray(_partitionHTMLProps, 2),
          htmlInputProps = _partitionHTMLProps2[0],
          rest = _partitionHTMLProps2[1];

      return React.createElement(
        ElementType,
        _extends({}, rest, {
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
}(Component);

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
  type: META.TYPES.MODULE
};
Search.Category = SearchCategory;
Search.Result = SearchResult;
Search.Results = SearchResults;
Search.handledProps = ['aligned', 'as', 'category', 'categoryRenderer', 'className', 'defaultOpen', 'defaultValue', 'fluid', 'icon', 'input', 'loading', 'minCharacters', 'noResultsDescription', 'noResultsMessage', 'onBlur', 'onFocus', 'onMouseDown', 'onResultSelect', 'onSearchChange', 'onSelectionChange', 'open', 'resultRenderer', 'results', 'selectFirstResult', 'showNoResults', 'size', 'value'];
export default Search;
Search.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  // ------------------------------------
  // Behavior
  // ------------------------------------

  /** Initial value of open. */
  defaultOpen: PropTypes.bool,

  /** Initial value. */
  defaultValue: PropTypes.string,

  /** Shorthand for Icon. */
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),

  /** Minimum characters to query for results */
  minCharacters: PropTypes.number,

  /** Additional text for "No Results" message with less emphasis. */
  noResultsDescription: PropTypes.node,

  /** Message to display when there are no results. */
  noResultsMessage: PropTypes.node,

  /** Controls whether or not the results menu is displayed. */
  open: PropTypes.bool,

  /**
   * One of:
   * - array of Search.Result props e.g. `{ title: '', description: '' }` or
   * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
   */
  results: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(SearchResult.propTypes)), PropTypes.object]),

  /** Whether the search should automatically select the first result after searching. */
  selectFirstResult: PropTypes.bool,

  /** Whether a "no results" message should be shown if no results are found. */
  showNoResults: PropTypes.bool,

  /** Current value of the search input. Creates a controlled component. */
  value: PropTypes.string,

  // ------------------------------------
  // Rendering
  // ------------------------------------

  /**
   * Renders the SearchCategory contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable SearchCategory contents.
   */
  categoryRenderer: PropTypes.func,

  /**
   * Renders the SearchResult contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable SearchResult contents.
   */
  resultRenderer: PropTypes.func,

  // ------------------------------------
  // Callbacks
  // ------------------------------------

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: PropTypes.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: PropTypes.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: PropTypes.func,

  /**
   * Called when a result is selected.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onResultSelect: PropTypes.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of search input.
   */
  onSearchChange: PropTypes.func,

  /**
   * Called when the active selection index is changed.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onSelectionChange: PropTypes.func,

  // ------------------------------------
  // Style
  // ------------------------------------

  /** A search can have its results aligned to its left or right container edge. */
  aligned: PropTypes.string,

  /** A search can display results from remote content ordered by categories. */
  category: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** A search can have its results take up the width of its container. */
  fluid: PropTypes.bool,

  /** A search input can take up the width of its container. */
  input: customPropTypes.itemShorthand,

  /** A search can show a loading indicator. */
  loading: PropTypes.bool,

  /** A search can have different sizes. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium'))
} : {};