'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _each2 = require('lodash/each');

var _each3 = _interopRequireDefault(_each2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _BreadcrumbDivider = require('./BreadcrumbDivider');

var _BreadcrumbDivider2 = _interopRequireDefault(_BreadcrumbDivider);

var _BreadcrumbSection = require('./BreadcrumbSection');

var _BreadcrumbSection2 = _interopRequireDefault(_BreadcrumbSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A breadcrumb is used to show hierarchy between content.
 */
function Breadcrumb(props) {
  var children = props.children,
      className = props.className,
      divider = props.divider,
      icon = props.icon,
      sections = props.sections,
      size = props.size;


  var classes = (0, _classnames2.default)('ui', size, 'breadcrumb', className);
  var rest = (0, _lib.getUnhandledProps)(Breadcrumb, props);
  var ElementType = (0, _lib.getElementType)(Breadcrumb, props);

  if (!_lib.childrenUtils.isNil(children)) return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    children
  );

  var childElements = [];

  (0, _each3.default)(sections, function (section, index) {
    // section
    var breadcrumbElement = _BreadcrumbSection2.default.create(section);
    childElements.push(breadcrumbElement);

    // divider
    if (index !== sections.length - 1) {
      var key = breadcrumbElement.key + '_divider' || JSON.stringify(section);
      childElements.push(_BreadcrumbDivider2.default.create({ content: divider, icon: icon, key: key }));
    }
  });

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    childElements
  );
}

Breadcrumb.handledProps = ['as', 'children', 'className', 'divider', 'icon', 'sections', 'size'];
Breadcrumb._meta = {
  name: 'Breadcrumb',
  type: _lib.META.TYPES.COLLECTION
};

Breadcrumb.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Shorthand for primary content of the Breadcrumb.Divider. */
  divider: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['icon']), _lib.customPropTypes.contentShorthand]),

  /** For use with the sections prop. Render as an `Icon` component with `divider` class instead of a `div` in
   *  Breadcrumb.Divider. */
  icon: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['divider']), _lib.customPropTypes.itemShorthand]),

  /** Shorthand array of props for Breadcrumb.Section. */
  sections: _lib.customPropTypes.collectionShorthand,

  /** Size of Breadcrumb. */
  size: _propTypes2.default.oneOf((0, _without3.default)(_lib.SUI.SIZES, 'medium'))
} : {};

Breadcrumb.Divider = _BreadcrumbDivider2.default;
Breadcrumb.Section = _BreadcrumbSection2.default;

exports.default = Breadcrumb;