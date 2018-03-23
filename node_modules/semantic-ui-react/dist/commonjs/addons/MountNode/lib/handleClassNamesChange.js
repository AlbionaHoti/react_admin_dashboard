'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _forEach2 = require('lodash/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _computeClassNames = require('./computeClassNames');

var _computeClassNames2 = _interopRequireDefault(_computeClassNames);

var _computeClassNamesDifference = require('./computeClassNamesDifference');

var _computeClassNamesDifference2 = _interopRequireDefault(_computeClassNamesDifference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prevClassNames = new Map();

var handleClassNamesChange = function handleClassNamesChange(node, components) {
  var currentClassNames = (0, _computeClassNames2.default)(components);

  var _computeClassNamesDif = (0, _computeClassNamesDifference2.default)(prevClassNames.get(node), currentClassNames),
      _computeClassNamesDif2 = (0, _slicedToArray3.default)(_computeClassNamesDif, 2),
      forAdd = _computeClassNamesDif2[0],
      forRemoval = _computeClassNamesDif2[1];

  (0, _forEach3.default)(forAdd, function (className) {
    return node.classList.add(className);
  });
  (0, _forEach3.default)(forRemoval, function (className) {
    return node.classList.remove(className);
  });

  prevClassNames.set(node, currentClassNames);
};

exports.default = handleClassNamesChange;