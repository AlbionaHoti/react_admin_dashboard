'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.highlightNode = highlightNode;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getParts(name, highlight) {
  var nameParts = [];
  var last = 0;

  highlight.forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        start = _ref2[0],
        end = _ref2[1];

    if (last < start) {
      nameParts.push({
        strong: false,
        text: name.substring(last, start)
      });
    }

    nameParts.push({
      strong: true,
      text: name.substring(start, end + 1)
    });

    last = end + 1;
  });

  if (last < name.length) {
    nameParts.push({
      strong: false,
      text: name.substring(last, name.length)
    });
  }

  return nameParts;
}

function highlightNode(node, style) {
  var name = node.name,
      highlight = node.highlight;


  if (!highlight || !highlight.length) {
    return name;
  }

  var nameParts = getParts(name, highlight);

  return nameParts.filter(function (part) {
    return part.text;
  }).map(function (part, index) {
    var key = part.text + '-' + index;

    if (part.strong) {
      return _react2.default.createElement(
        'strong',
        { key: key, style: style.highLightText },
        part.text
      );
    }

    return _react2.default.createElement(
      'span',
      { key: key },
      part.text
    );
  });
}