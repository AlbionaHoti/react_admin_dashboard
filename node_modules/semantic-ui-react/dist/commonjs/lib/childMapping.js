'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeChildMappings = exports.getChildMapping = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _keys2 = require('lodash/keys');

var _keys3 = _interopRequireDefault(_keys2);

var _forEach2 = require('lodash/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _keyBy2 = require('lodash/keyBy');

var _keyBy3 = _interopRequireDefault(_keyBy2);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {object} children Element's children
 * @return {object} Mapping of key to child
 */
var getChildMapping = exports.getChildMapping = function getChildMapping(children) {
  return (0, _keyBy3.default)((0, _filter3.default)(_react.Children.toArray(children), _react.isValidElement), 'key');
};

var getPendingKeys = function getPendingKeys(prev, next) {
  var nextKeysPending = {};
  var pendingKeys = [];

  (0, _forEach3.default)((0, _keys3.default)(prev), function (prevKey) {
    if (!(0, _has3.default)(next, prevKey)) {
      pendingKeys.push(prevKey);
      return;
    }

    if (pendingKeys.length) {
      nextKeysPending[prevKey] = pendingKeys;
      pendingKeys = [];
    }
  });

  return [nextKeysPending, pendingKeys];
};

var getValue = function getValue(key, prev, next) {
  return (0, _has3.default)(next, key) ? next[key] : prev[key];
};

/**
 * When you're adding or removing children some may be added or removed in the same render pass. We want to show *both*
 * since we want to simultaneously animate elements in and out. This function takes a previous set of keys and a new set
 * of keys and merges them with its best guess of the correct ordering.
 *
 * @param {object} prev Prev children as returned from `getChildMapping()`
 * @param {object} next Next children as returned from `getChildMapping()`
 * @return {object} A key set that contains all keys in `prev` and all keys in `next` in a reasonable order
 */
var mergeChildMappings = exports.mergeChildMappings = function mergeChildMappings() {
  var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var childMapping = {};

  var _getPendingKeys = getPendingKeys(prev, next),
      _getPendingKeys2 = (0, _slicedToArray3.default)(_getPendingKeys, 2),
      nextKeysPending = _getPendingKeys2[0],
      pendingKeys = _getPendingKeys2[1];

  (0, _forEach3.default)((0, _keys3.default)(next), function (nextKey) {
    if ((0, _has3.default)(nextKeysPending, nextKey)) {
      (0, _forEach3.default)(nextKeysPending[nextKey], function (pendingKey) {
        childMapping[pendingKey] = getValue(pendingKey, prev, next);
      });
    }

    childMapping[nextKey] = getValue(nextKey, prev, next);
  });

  (0, _forEach3.default)(pendingKeys, function (pendingKey) {
    childMapping[pendingKey] = getValue(pendingKey, prev, next);
  });

  return childMapping;
};