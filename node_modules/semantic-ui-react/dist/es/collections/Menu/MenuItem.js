import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _startCase from 'lodash/startCase';
import _invoke from 'lodash/invoke';
import cx from 'classnames';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { childrenUtils, createShorthandFactory, customPropTypes, getElementType, getUnhandledProps, META, SUI, useKeyOnly, useKeyOrValueAndKey } from '../../lib';
import Icon from '../../elements/Icon';

/**
 * A menu can contain an item.
 */

var MenuItem = function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var disabled = _this.props.disabled;


      if (!disabled) _invoke(_this.props, 'onClick', e, _this.props);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          color = _props.color,
          content = _props.content,
          disabled = _props.disabled,
          fitted = _props.fitted,
          header = _props.header,
          icon = _props.icon,
          link = _props.link,
          name = _props.name,
          onClick = _props.onClick,
          position = _props.position;


      var classes = cx(color, position, useKeyOnly(active, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(icon === true || icon && !(name || content), 'icon'), useKeyOnly(header, 'header'), useKeyOnly(link, 'link'), useKeyOrValueAndKey(fitted, 'fitted'), 'item', className);
      var ElementType = getElementType(MenuItem, this.props, function () {
        if (onClick) return 'a';
      });
      var rest = getUnhandledProps(MenuItem, this.props);

      if (!childrenUtils.isNil(children)) {
        return React.createElement(
          ElementType,
          _extends({}, rest, { className: classes, onClick: this.handleClick }),
          children
        );
      }

      return React.createElement(
        ElementType,
        _extends({}, rest, { className: classes, onClick: this.handleClick }),
        Icon.create(icon),
        childrenUtils.isNil(content) ? _startCase(name) : content
      );
    }
  }]);

  return MenuItem;
}(Component);

MenuItem._meta = {
  name: 'MenuItem',
  type: META.TYPES.COLLECTION,
  parent: 'Menu'
};
MenuItem.handledProps = ['active', 'as', 'children', 'className', 'color', 'content', 'disabled', 'fitted', 'header', 'icon', 'index', 'link', 'name', 'onClick', 'position'];
export default MenuItem;
MenuItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A menu item can be active. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Additional colors can be specified. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A menu item can be disabled. */
  disabled: PropTypes.bool,

  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['horizontally', 'vertically'])]),

  /** A menu item may include a header or may itself be a header. */
  header: PropTypes.bool,

  /** MenuItem can be only icon. */
  icon: PropTypes.oneOfType([PropTypes.bool, customPropTypes.itemShorthand]),

  /** MenuItem index inside Menu. */
  index: PropTypes.number,

  /** A menu item can be link. */
  link: PropTypes.bool,

  /** Internal name of the MenuItem. */
  name: PropTypes.string,

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /** A menu item can take left or right position. */
  position: PropTypes.oneOf(['left', 'right'])
} : {};


MenuItem.create = createShorthandFactory(MenuItem, function (val) {
  return { content: val, name: val };
});