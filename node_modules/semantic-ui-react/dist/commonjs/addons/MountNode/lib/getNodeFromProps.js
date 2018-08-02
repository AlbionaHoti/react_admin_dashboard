'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _lib = require('../../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given `this.props`, return a `node` value or undefined.
 *
 * @param {object} props Component's props
 * @return {HTMLElement|undefined}
 */
var getNodeFromProps = function getNodeFromProps(props) {
  var node = props.node;


  if ((0, _lib.isBrowser)()) {
    if ((0, _isNil3.default)(node)) return document.body;
    return node;
  }
};

exports.default = getNodeFromProps;