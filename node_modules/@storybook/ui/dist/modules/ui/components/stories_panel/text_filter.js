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

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _components = require('@storybook/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTextValue = '';

var mainStyle = (0, _extends3.default)({}, _components.baseFonts, {
  border: '1px solid #ECECEC',
  borderRadius: 2,
  position: 'relative'
});

var textWrapStyle = {
  background: '#F7F7F7'
};

var textStyle = {
  fontSize: 12,
  color: '#828282',
  padding: 5,
  display: 'block',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 0,
  height: 26
};

var clearButtonStyle = {
  position: 'absolute',
  backgroundColor: 'transparent',
  color: '#868686',
  border: 'none',
  width: 25,
  height: 26,
  right: 1,
  top: 0,
  textAlign: 'center',
  cursor: 'pointer',
  lineHeight: '23px',
  fontSize: 20
};

var debounceFilterChangeTimeout = 500;

var TextFilter = function (_React$Component) {
  (0, _inherits3.default)(TextFilter, _React$Component);

  function TextFilter(props) {
    (0, _classCallCheck3.default)(this, TextFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextFilter.__proto__ || (0, _getPrototypeOf2.default)(TextFilter)).call(this, props));

    _this.state = {
      query: props.text
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.fireOnClear = _this.fireOnClear.bind(_this);
    _this.changeFilter = (0, _lodash2.default)(_this.changeFilter, debounceFilterChangeTimeout);
    return _this;
  }

  (0, _createClass3.default)(TextFilter, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.text !== this.state.query) {
        this.setState({
          query: nextProps.text
        });
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      var text = event.target.value;
      this.setState({ query: text });
      this.changeFilter(text);
    }
  }, {
    key: 'fireOnClear',
    value: function fireOnClear() {
      this.setState({ query: defaultTextValue });
      var onClear = this.props.onClear;

      if (onClear) onClear();
    }
  }, {
    key: 'changeFilter',
    value: function changeFilter(text) {
      var onChange = this.props.onChange;

      if (onChange) onChange(text);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: mainStyle },
        _react2.default.createElement(
          'div',
          { style: textWrapStyle },
          _react2.default.createElement('input', {
            style: textStyle,
            type: 'text',
            placeholder: 'Filter',
            name: 'filter-text',
            value: this.state.query || defaultTextValue,
            onChange: this.onChange
          })
        ),
        this.state.query && this.state.query.length && _react2.default.createElement(
          'button',
          { style: clearButtonStyle, onClick: this.fireOnClear, className: 'clear' },
          '\xD7'
        )
      );
    }
  }]);
  return TextFilter;
}(_react2.default.Component);

exports.default = TextFilter;


TextFilter.defaultProps = {
  text: defaultTextValue,
  onChange: null,
  onClear: null
};

TextFilter.propTypes = {
  text: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onClear: _propTypes2.default.func
};