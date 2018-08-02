'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uniq2 = require('lodash/fp/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

var _identity2 = require('lodash/fp/identity');

var _identity3 = _interopRequireDefault(_identity2);

var _filter2 = require('lodash/fp/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _split2 = require('lodash/fp/split');

var _split3 = _interopRequireDefault(_split2);

var _flatMap2 = require('lodash/fp/flatMap');

var _flatMap3 = _interopRequireDefault(_flatMap2);

var _map2 = require('lodash/fp/map');

var _map3 = _interopRequireDefault(_map2);

var _toArray2 = require('lodash/fp/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

var _flow2 = require('lodash/fp/flow');

var _flow3 = _interopRequireDefault(_flow2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var computeClassNames = (0, _flow3.default)(_toArray3.default, (0, _map3.default)('props.className'), (0, _flatMap3.default)((0, _split3.default)(/\s+/)), (0, _filter3.default)(_identity3.default), _uniq3.default);

exports.default = computeClassNames;