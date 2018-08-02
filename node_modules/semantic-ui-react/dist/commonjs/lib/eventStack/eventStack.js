'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _isBrowser = require('../isBrowser');

var _isBrowser2 = _interopRequireDefault(_isBrowser);

var _EventTarget = require('./EventTarget');

var _EventTarget2 = _interopRequireDefault(_EventTarget);

var _normalizeTarget = require('./normalizeTarget');

var _normalizeTarget2 = _interopRequireDefault(_normalizeTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventStack = function EventStack() {
  var _this = this;

  (0, _classCallCheck3.default)(this, EventStack);

  this._find = function (target) {
    var autoCreate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var normalized = (0, _normalizeTarget2.default)(target);

    if (_this._targets.has(normalized)) return _this._targets.get(normalized);
    if (!autoCreate) return;

    var eventTarget = new _EventTarget2.default(normalized);
    _this._targets.set(normalized, eventTarget);

    return eventTarget;
  };

  this._remove = function (target) {
    var normalized = (0, _normalizeTarget2.default)(target);

    _this._targets.delete(normalized);
  };

  this.sub = function (name, handlers) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!(0, _isBrowser2.default)()) return;

    var _options$target = options.target,
        target = _options$target === undefined ? document : _options$target,
        _options$pool = options.pool,
        pool = _options$pool === undefined ? 'default' : _options$pool;

    var eventTarget = _this._find(target);

    eventTarget.sub(name, handlers, pool);
  };

  this.unsub = function (name, handlers) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!(0, _isBrowser2.default)()) return;

    var _options$target2 = options.target,
        target = _options$target2 === undefined ? document : _options$target2,
        _options$pool2 = options.pool,
        pool = _options$pool2 === undefined ? 'default' : _options$pool2;

    var eventTarget = _this._find(target, false);

    if (eventTarget) {
      eventTarget.unsub(name, handlers, pool);
      if (eventTarget.empty()) _this._remove(target);
    }
  };

  this._targets = new Map();
}

// ------------------------------------
// Target utils
// ------------------------------------

// ------------------------------------
// Pub/sub
// ------------------------------------

;

var instance = new EventStack();

exports.default = instance;