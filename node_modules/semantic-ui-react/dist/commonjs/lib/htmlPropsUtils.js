'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionHTMLProps = exports.htmlInputProps = exports.htmlInputEvents = exports.htmlInputAttrs = undefined;

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _forEach2 = require('lodash/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var htmlInputAttrs = exports.htmlInputAttrs = [
// REACT
'selected', 'defaultValue', 'defaultChecked',

// LIMITED HTML PROPS
'autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFocus', 'checked', 'disabled', 'form', 'id', 'list', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'step', 'type', 'value'];

var htmlInputEvents = exports.htmlInputEvents = [
// EVENTS
// keyboard
'onKeyDown', 'onKeyPress', 'onKeyUp',

// focus
'onFocus', 'onBlur',

// form
'onChange', 'onInput',

// mouse
'onClick', 'onContextMenu', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp',

// selection
'onSelect',

// touch
'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart'];

var htmlInputProps = exports.htmlInputProps = [].concat(htmlInputAttrs, htmlInputEvents);

/**
 * Returns an array of objects consisting of: props of html input element and rest.
 * @param {object} props A ReactElement props object
 * @param {Object} [options={}]
 * @param {Array} [options.htmlProps] An array of html input props
 * @param {boolean} [options.includeAria] Includes all input props that starts with "aria-"
 * @returns {[{}, {}]} An array of objects
 */
var partitionHTMLProps = exports.partitionHTMLProps = function partitionHTMLProps(props) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$htmlProps = options.htmlProps,
      htmlProps = _options$htmlProps === undefined ? htmlInputProps : _options$htmlProps,
      _options$includeAria = options.includeAria,
      includeAria = _options$includeAria === undefined ? true : _options$includeAria;

  var inputProps = {};
  var rest = {};

  (0, _forEach3.default)(props, function (val, prop) {
    var possibleAria = includeAria && (/^aria-.*$/.test(prop) || prop === 'role');
    var target = (0, _includes3.default)(htmlProps, prop) || possibleAria ? inputProps : rest;
    target[prop] = val;
  });

  return [inputProps, rest];
};