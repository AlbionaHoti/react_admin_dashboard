'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param {number} pageNumber
 * @return {Object}
 */
var createEllipsisItem = exports.createEllipsisItem = function createEllipsisItem(pageNumber) {
  return {
    active: false,
    type: 'ellipsisItem',
    value: pageNumber
  };
};

/**
 * @return {Object}
 */
var createFirstPage = exports.createFirstPage = function createFirstPage() {
  return {
    active: false,
    type: 'firstItem',
    value: 1
  };
};

/**
 * @param {number} activePage
 * @return {Object}
 */
var createPrevItem = exports.createPrevItem = function createPrevItem(activePage) {
  return {
    active: false,
    type: 'prevItem',
    value: Math.max(1, activePage - 1)
  };
};

/**
 * @param {number} activePage
 * @return {function}
 */
var createPageFactory = exports.createPageFactory = function createPageFactory(activePage) {
  return function (pageNumber) {
    return {
      active: activePage === pageNumber,
      type: 'pageItem',
      value: pageNumber
    };
  };
};

/**
 * @param {number} activePage
 * @param {number} totalPages
 * @return {Object}
 */
var createNextItem = exports.createNextItem = function createNextItem(activePage, totalPages) {
  return {
    active: false,
    type: 'nextItem',
    value: Math.min(activePage + 1, totalPages)
  };
};

/**
 * @param {number} totalPages
 * @return {Object}
 */
var createLastItem = exports.createLastItem = function createLastItem(totalPages) {
  return {
    active: false,
    type: 'lastItem',
    value: totalPages
  };
};