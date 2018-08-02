'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasDocument = (typeof document === 'undefined' ? 'undefined' : (0, _typeof3.default)(document)) === 'object' && document !== null;
var hasWindow = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && window !== null && window.self === window;

// eslint-disable-next-line no-confusing-arrow
var isBrowser = function isBrowser() {
  return !(0, _isNil3.default)(isBrowser.override) ? isBrowser.override : hasDocument && hasWindow;
};

exports.default = isBrowser;