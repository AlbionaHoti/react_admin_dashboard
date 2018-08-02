'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gripSize = 1;
var splitSize = 10;

var wrapStyle = {
  vertical: function vertical(shift) {
    return {
      width: splitSize,
      marginLeft: shift - splitSize / 2,
      marginRight: -shift - splitSize / 2,
      position: 'relative'
    };
  },
  horizontal: function horizontal(shift) {
    return {
      height: splitSize,
      marginTop: shift - splitSize / 2,
      marginBottom: -shift - splitSize / 2,
      position: 'relative'
    };
  }
};

var spanStyle = {
  vertical: function vertical() {
    return {
      width: gripSize,
      height: 20,
      left: splitSize / 2 - (gripSize + 2) / 2,
      top: '50%',
      position: 'absolute',
      borderLeft: 'solid 1px rgba(0,0,0,0.1)',
      borderRight: 'solid 1px rgba(0,0,0,0.1)'
    };
  },
  horizontal: function horizontal() {
    return {
      height: gripSize,
      width: 20,
      top: splitSize / 2 - (gripSize + 2) / 2,
      left: '50%',
      position: 'absolute',
      borderTop: 'solid 1px rgba(0,0,0,0.1)',
      borderBottom: 'solid 1px rgba(0,0,0,0.1)'
    };
  }
};

var USplit = function USplit(_ref) {
  var shift = _ref.shift,
      split = _ref.split;
  return _react2.default.createElement(
    'div',
    { style: wrapStyle[split](shift) },
    _react2.default.createElement('span', { style: spanStyle[split]() })
  );
};

USplit.propTypes = {
  shift: _propTypes2.default.number,
  split: _propTypes2.default.oneOf(['vertical', 'horizontal'])
};

USplit.defaultProps = {
  shift: 0,
  split: 'vertical'
};

exports.default = USplit;