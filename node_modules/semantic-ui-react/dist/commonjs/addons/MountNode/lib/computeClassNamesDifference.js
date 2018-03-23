'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _difference2 = require('lodash/difference');

var _difference3 = _interopRequireDefault(_difference2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var computeClassNamesDifference = function computeClassNamesDifference(prevClassNames, currentClassNames) {
  return [(0, _difference3.default)(currentClassNames, prevClassNames), (0, _difference3.default)(prevClassNames, currentClassNames)];
};

exports.default = computeClassNamesDifference;