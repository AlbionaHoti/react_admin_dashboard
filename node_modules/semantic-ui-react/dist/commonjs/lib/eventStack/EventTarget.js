'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _uniq2 = require('lodash/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _some2 = require('lodash/some');

var _some3 = _interopRequireDefault(_some2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _last2 = require('lodash/last');

var _last3 = _interopRequireDefault(_last2);

var _forEach2 = require('lodash/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventTarget = function EventTarget(target) {
  var _this = this;

  (0, _classCallCheck3.default)(this, EventTarget);
  this._handlers = {};
  this._pools = {};

  this._emit = function (name) {
    return function (event) {
      (0, _forEach3.default)(_this._pools, function (pool, poolName) {
        var handlers = pool[name];


        if (!handlers) return;
        if (poolName === 'default') {
          (0, _forEach3.default)(handlers, function (handler) {
            return handler(event);
          });
          return;
        }
        (0, _last3.default)(handlers)(event);
      });
    };
  };

  this._normalize = function (handlers) {
    return (0, _isArray3.default)(handlers) ? handlers : [handlers];
  };

  this._listen = function (name) {
    if ((0, _has3.default)(_this._handlers, name)) return;
    var handler = _this._emit(name);

    _this.target.addEventListener(name, handler);
    _this._handlers[name] = handler;
  };

  this._unlisten = function (name) {
    if ((0, _some3.default)(_this._pools, name)) return;
    var handler = _this._handlers[name];


    _this.target.removeEventListener(name, handler);
    delete _this._handlers[name];
  };

  this.empty = function () {
    return (0, _isEmpty3.default)(_this._handlers);
  };

  this.sub = function (name, handlers) {
    var pool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

    var events = (0, _uniq3.default)([].concat((0, _toConsumableArray3.default)((0, _get3.default)(_this._pools, pool + '.' + name, [])), (0, _toConsumableArray3.default)(_this._normalize(handlers))));

    _this._listen(name);
    (0, _set3.default)(_this._pools, pool + '.' + name, events);
  };

  this.unsub = function (name, handlers) {
    var pool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

    var events = _without3.default.apply(undefined, [(0, _get3.default)(_this._pools, pool + '.' + name, [])].concat((0, _toConsumableArray3.default)(_this._normalize(handlers))));

    if (events.length > 0) {
      (0, _set3.default)(_this._pools, pool + '.' + name, events);
      return;
    }

    (0, _set3.default)(_this._pools, pool + '.' + name, undefined);
    _this._unlisten(name);
  };

  this.target = target;
}

// ------------------------------------
// Utils
// ------------------------------------

// ------------------------------------
// Listeners handling
// ------------------------------------

// ------------------------------------
// Pub/sub
// ------------------------------------

;

exports.default = EventTarget;