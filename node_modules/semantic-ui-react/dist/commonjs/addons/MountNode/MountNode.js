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

var _lib = require('../../lib');

var _getNodeFromProps = require('./lib/getNodeFromProps');

var _getNodeFromProps2 = _interopRequireDefault(_getNodeFromProps);

var _handleClassNamesChange = require('./lib/handleClassNamesChange');

var _handleClassNamesChange2 = _interopRequireDefault(_handleClassNamesChange);

var _NodeRegistry = require('./lib/NodeRegistry');

var _NodeRegistry2 = _interopRequireDefault(_NodeRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nodeRegistry = new _NodeRegistry2.default();

/**
 * A component that allows to manage classNames on a DOM node in declarative manner.
 */

var MountNode = function (_Component) {
  (0, _inherits3.default)(MountNode, _Component);

  function MountNode() {
    (0, _classCallCheck3.default)(this, MountNode);
    return (0, _possibleConstructorReturn3.default)(this, (MountNode.__proto__ || Object.getPrototypeOf(MountNode)).apply(this, arguments));
  }

  (0, _createClass3.default)(MountNode, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref) {
      var nextClassName = _ref.className;
      var currentClassName = this.props.className;


      return nextClassName !== currentClassName;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var node = (0, _getNodeFromProps2.default)(this.props);

      if (node) {
        nodeRegistry.add(node, this);
        nodeRegistry.emit(node, _handleClassNamesChange2.default);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var node = (0, _getNodeFromProps2.default)(this.props);

      if (node) nodeRegistry.emit(node, _handleClassNamesChange2.default);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = (0, _getNodeFromProps2.default)(this.props);

      if (node) {
        nodeRegistry.del(node, this);
        nodeRegistry.emit(node, _handleClassNamesChange2.default);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return MountNode;
}(_react.Component);

MountNode._meta = {
  name: 'MountNode',
  type: _lib.META.TYPES.ADDON
};
MountNode.handledProps = ['className', 'node'];
exports.default = MountNode;
MountNode.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Additional classes. */
  className: _propTypes2.default.string,

  /** The DOM node where we will apply class names. Defaults to document.body. */
  node: _lib.customPropTypes.domNode
} : {};