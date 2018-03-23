'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactDom = require('react-dom');

var _META = require('../../lib/META');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This component exposes a callback prop that always returns the DOM node of both functional and class component
 * children.
 */
var Ref = function (_Component) {
  (0, _inherits3.default)(Ref, _Component);

  function Ref() {
    (0, _classCallCheck3.default)(this, Ref);
    return (0, _possibleConstructorReturn3.default)(this, (Ref.__proto__ || Object.getPrototypeOf(Ref)).apply(this, arguments));
  }

  (0, _createClass3.default)(Ref, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var innerRef = this.props.innerRef;

      // Heads up! Don't move this condition, it's a short circuit that avoids run of `findDOMNode`
      // if `innerRef` isn't passed
      // eslint-disable-next-line react/no-find-dom-node

      if (innerRef) innerRef((0, _reactDom.findDOMNode)(this));
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return _react.Children.only(children);
    }
  }]);
  return Ref;
}(_react.Component);

Ref._meta = {
  name: 'Ref',
  type: _META.TYPES.ADDON
};
Ref.handledProps = ['children', 'innerRef'];
exports.default = Ref;
Ref.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: _propTypes2.default.element,

  /**
   * Called when componentDidMount.
   *
   * @param {HTMLElement} node - Referred node.
   */
  innerRef: _propTypes2.default.func
} : {};