'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Normalizes the offset value.
 * @param {number|array} value The value to normalize.
 * @returns {number}
 */
exports.default = function (value) {
  return typeof value === 'number' || typeof value === 'string' ? [value, value] : value;
};