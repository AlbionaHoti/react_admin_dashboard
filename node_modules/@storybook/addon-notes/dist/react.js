'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithNotes = undefined;

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithNotes = exports.WithNotes = function (_React$Component) {
  (0, _inherits3.default)(WithNotes, _React$Component);

  function WithNotes() {
    (0, _classCallCheck3.default)(this, WithNotes);
    return (0, _possibleConstructorReturn3.default)(this, (WithNotes.__proto__ || (0, _getPrototypeOf2.default)(WithNotes)).apply(this, arguments));
  }

  (0, _createClass3.default)(WithNotes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          notes = _props.notes;

      var channel = _addons2.default.getChannel();

      // send the notes to the channel.
      channel.emit('storybook/notes/add_notes', notes);
      // return children elements.
      return children;
    }
  }]);
  return WithNotes;
}(_react2.default.Component);

WithNotes.propTypes = {
  children: _propTypes2.default.node,
  notes: _propTypes2.default.string
};
WithNotes.defaultProps = {
  children: null,
  notes: ''
};