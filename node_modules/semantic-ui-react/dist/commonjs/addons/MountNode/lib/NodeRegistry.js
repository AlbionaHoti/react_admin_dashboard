"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeRegistry = function NodeRegistry() {
  var _this = this;

  (0, _classCallCheck3.default)(this, NodeRegistry);

  this.add = function (node, component) {
    if (_this.nodes.has(node)) {
      var set = _this.nodes.get(node);

      set.add(component);
      return;
    }

    _this.nodes.set(node, new Set([component]));
  };

  this.del = function (node, component) {
    if (!_this.nodes.has(node)) return;

    var set = _this.nodes.get(node);

    if (set.size === 1) {
      _this.nodes.delete(node);
      return;
    }

    set.delete(component);
  };

  this.emit = function (node, callback) {
    callback(node, _this.nodes.get(node));
  };

  this.nodes = new Map();
};

exports.default = NodeRegistry;