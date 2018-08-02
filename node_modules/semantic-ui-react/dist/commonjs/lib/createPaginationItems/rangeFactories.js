'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComplexRange = exports.createSimpleRange = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _range2 = require('lodash/range');

var _range3 = _interopRequireDefault(_range2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _suffixFactories = require('./suffixFactories');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createSimpleRange = exports.createSimpleRange = function createSimpleRange(start, end, pageFactory) {
  return (0, _map3.default)((0, _range3.default)(start, end + 1), pageFactory);
};

var createComplexRange = exports.createComplexRange = function createComplexRange(options, pageFactory) {
  var activePage = options.activePage,
      boundaryRange = options.boundaryRange,
      siblingRange = options.siblingRange,
      totalPages = options.totalPages;


  var firstGroupEnd = boundaryRange;
  var firstGroup = createSimpleRange(1, firstGroupEnd, pageFactory);

  var lastGroupStart = totalPages + 1 - boundaryRange;
  var lastGroup = createSimpleRange(lastGroupStart, totalPages, pageFactory);

  var innerGroupStart = Math.min(Math.max(activePage - siblingRange, firstGroupEnd + 2), lastGroupStart - 1 - 2 * siblingRange - 1);
  var innerGroupEnd = innerGroupStart + 2 * siblingRange;
  var innerGroup = createSimpleRange(innerGroupStart, innerGroupEnd, pageFactory);

  return [].concat((0, _toConsumableArray3.default)(firstGroup), [(0, _suffixFactories.createInnerPrefix)(firstGroupEnd, innerGroupStart, pageFactory)], (0, _toConsumableArray3.default)(innerGroup), [(0, _suffixFactories.createInnerSuffix)(innerGroupEnd, lastGroupStart, pageFactory)], (0, _toConsumableArray3.default)(lastGroup)).filter(Boolean);
};