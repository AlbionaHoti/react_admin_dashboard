'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHTMLParagraph = exports.createHTMLLabel = exports.createHTMLInput = exports.createHTMLImage = exports.createHTMLIframe = exports.createHTMLDivision = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _uniq2 = require('lodash/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _isNumber2 = require('lodash/isNumber');

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _isBoolean2 = require('lodash/isBoolean');

var _isBoolean3 = _interopRequireDefault(_isBoolean2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

exports.createShorthand = createShorthand;
exports.createShorthandFactory = createShorthandFactory;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ============================================================
// Factories
// ============================================================

/**
 * A more robust React.createElement. It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {Object} [options={}]
 * @param {object} [options.defaultProps={}] Default props object
 * @param {object|function} [options.overrideProps={}] Override props object or function (called with regular props)
 * @returns {object|null}
 */
function createShorthand(Component, mapValueToProps, val) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }
  // short circuit noop values
  if ((0, _isNil3.default)(val) || (0, _isBoolean3.default)(val)) return null;

  var valIsString = (0, _isString3.default)(val);
  var valIsNumber = (0, _isNumber3.default)(val);

  var isReactElement = (0, _react.isValidElement)(val);
  var isPropsObject = (0, _isPlainObject3.default)(val);
  var isPrimitiveValue = valIsString || valIsNumber || (0, _isArray3.default)(val);

  // unhandled type return null
  /* eslint-disable no-console */
  if (!isReactElement && !isPropsObject && !isPrimitiveValue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(['Shorthand value must be a string|number|array|object|ReactElement.', ' Use null|undefined|boolean for none', ' Received ' + (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) + '.'].join(''));
    }
    return null;
  }
  /* eslint-enable no-console */

  // ----------------------------------------
  // Build up props
  // ----------------------------------------
  var _options$defaultProps = options.defaultProps,
      defaultProps = _options$defaultProps === undefined ? {} : _options$defaultProps;

  // User's props

  var usersProps = isReactElement && val.props || isPropsObject && val || isPrimitiveValue && mapValueToProps(val);

  // Override props
  var _options$overrideProp = options.overrideProps,
      overrideProps = _options$overrideProp === undefined ? {} : _options$overrideProp;

  overrideProps = (0, _isFunction3.default)(overrideProps) ? overrideProps((0, _extends3.default)({}, defaultProps, usersProps)) : overrideProps;

  // Merge props
  /* eslint-disable react/prop-types */
  var props = (0, _extends3.default)({}, defaultProps, usersProps, overrideProps);

  // Merge className
  if (defaultProps.className || overrideProps.className || usersProps.className) {
    var mergedClassesNames = (0, _classnames2.default)(defaultProps.className, overrideProps.className, usersProps.className);
    props.className = (0, _uniq3.default)(mergedClassesNames.split(' ')).join(' ');
  }

  // Merge style
  if (defaultProps.style || overrideProps.style || usersProps.style) {
    props.style = (0, _extends3.default)({}, defaultProps.style, usersProps.style, overrideProps.style);
  }

  // ----------------------------------------
  // Get key
  // ----------------------------------------

  // Use key, childKey, or generate key
  if ((0, _isNil3.default)(props.key)) {
    var childKey = props.childKey;


    if (!(0, _isNil3.default)(childKey)) {
      // apply and consume the childKey
      props.key = typeof childKey === 'function' ? childKey(props) : childKey;
      delete props.childKey;
    } else if (valIsString || valIsNumber) {
      // use string/number shorthand values as the key
      props.key = val;
    }
  }
  /* eslint-enable react/prop-types */

  // ----------------------------------------
  // Create Element
  // ----------------------------------------

  // Clone ReactElements
  if (isReactElement) return (0, _react.cloneElement)(val, props);

  // Create ReactElements from built up props
  if (isPrimitiveValue || isPropsObject) return _react2.default.createElement(Component, props);
}

// ============================================================
// Factory Creators
// ============================================================

/**
 * Creates a `createShorthand` function that is waiting for a value and options.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @returns {function} A shorthand factory function waiting for `val` and `defaultProps`.
 */
createShorthand.handledProps = [];
function createShorthandFactory(Component, mapValueToProps) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }

  return function (val, options) {
    return createShorthand(Component, mapValueToProps, val, options);
  };
}

// ============================================================
// HTML Factories
// ============================================================
var createHTMLDivision = exports.createHTMLDivision = createShorthandFactory('div', function (val) {
  return { children: val };
});
var createHTMLIframe = exports.createHTMLIframe = createShorthandFactory('iframe', function (src) {
  return { src: src };
});
var createHTMLImage = exports.createHTMLImage = createShorthandFactory('img', function (val) {
  return { src: val };
});
var createHTMLInput = exports.createHTMLInput = createShorthandFactory('input', function (val) {
  return { type: val };
});
var createHTMLLabel = exports.createHTMLLabel = createShorthandFactory('label', function (val) {
  return { children: val };
});
var createHTMLParagraph = exports.createHTMLParagraph = createShorthandFactory('p', function (val) {
  return { children: val };
});