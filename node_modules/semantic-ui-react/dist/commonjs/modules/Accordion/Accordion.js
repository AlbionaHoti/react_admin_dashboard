'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _AccordionAccordion = require('./AccordionAccordion');

var _AccordionAccordion2 = _interopRequireDefault(_AccordionAccordion);

var _AccordionContent = require('./AccordionContent');

var _AccordionContent2 = _interopRequireDefault(_AccordionContent);

var _AccordionTitle = require('./AccordionTitle');

var _AccordionTitle2 = _interopRequireDefault(_AccordionTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An accordion allows users to toggle the display of sections of content.
 */
function Accordion(props) {
  var className = props.className,
      fluid = props.fluid,
      inverted = props.inverted,
      styled = props.styled;


  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(styled, 'styled'), className);
  var rest = (0, _lib.getUnhandledProps)(Accordion, props);

  return _react2.default.createElement(_AccordionAccordion2.default, (0, _extends3.default)({}, rest, { className: classes }));
}

Accordion.handledProps = ['className', 'fluid', 'inverted', 'styled'];
Accordion._meta = {
  name: 'Accordion',
  type: _lib.META.TYPES.MODULE
};

Accordion.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Format to take up the width of its container. */
  fluid: _propTypes2.default.bool,

  /** Format for dark backgrounds. */
  inverted: _propTypes2.default.bool,

  /** Adds some basic styling to accordion panels. */
  styled: _propTypes2.default.bool
} : {};

Accordion.Accordion = _AccordionAccordion2.default;
Accordion.Content = _AccordionContent2.default;
Accordion.Title = _AccordionTitle2.default;

exports.default = Accordion;