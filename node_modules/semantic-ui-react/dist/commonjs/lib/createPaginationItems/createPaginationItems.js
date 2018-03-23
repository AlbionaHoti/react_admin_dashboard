'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _itemFactories = require('./itemFactories');

var _rangeFactories = require('./rangeFactories');

var _paginationUtils = require('./paginationUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {object} rawOptions
 * @param {number} rawOptions.activePage
 * @param {number} rawOptions.boundaryRange Number of always visible pages at the beginning and end.
 * @param {number} rawOptions.siblingRange Number of always visible pages before and after the current one.
 * @param {number} rawOptions.totalPages Total number of pages.
 */
var createPaginationItems = function createPaginationItems(rawOptions) {
  var options = (0, _paginationUtils.typifyOptions)(rawOptions);
  var activePage = options.activePage,
      totalPages = options.totalPages;


  var pageFactory = (0, _itemFactories.createPageFactory)(activePage);
  var innerRange = (0, _paginationUtils.isSimplePagination)(options) ? (0, _rangeFactories.createSimpleRange)(1, totalPages, pageFactory) : (0, _rangeFactories.createComplexRange)(options, pageFactory);

  return [(0, _itemFactories.createFirstPage)(), (0, _itemFactories.createPrevItem)(activePage)].concat((0, _toConsumableArray3.default)(innerRange), [(0, _itemFactories.createNextItem)(activePage, totalPages), (0, _itemFactories.createLastItem)(totalPages)]);
};

exports.default = createPaginationItems;