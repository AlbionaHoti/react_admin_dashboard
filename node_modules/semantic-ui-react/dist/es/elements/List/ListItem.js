import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _isPlainObject from 'lodash/isPlainObject';
import _invoke from 'lodash/invoke';
import cx from 'classnames';

import PropTypes from 'prop-types';
import React, { Component, isValidElement } from 'react';

import { childrenUtils, createShorthandFactory, customPropTypes, getElementType, getUnhandledProps, META, useKeyOnly } from '../../lib';
import Image from '../../elements/Image';
import ListContent from './ListContent';
import ListDescription from './ListDescription';
import ListHeader from './ListHeader';
import ListIcon from './ListIcon';

/**
 * A list item can contain a set of items.
 */

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var disabled = _this.props.disabled;


      if (!disabled) _invoke(_this.props, 'onClick', e, _this.props);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          content = _props.content,
          description = _props.description,
          disabled = _props.disabled,
          header = _props.header,
          icon = _props.icon,
          image = _props.image,
          value = _props.value;


      var ElementType = getElementType(ListItem, this.props);
      var classes = cx(useKeyOnly(active, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(ElementType !== 'li', 'item'), className);
      var rest = getUnhandledProps(ListItem, this.props);
      var valueProp = ElementType === 'li' ? { value: value } : { 'data-value': value };

      if (!childrenUtils.isNil(children)) {
        return React.createElement(
          ElementType,
          _extends({}, rest, valueProp, { role: 'listitem', className: classes, onClick: this.handleClick }),
          children
        );
      }

      var iconElement = ListIcon.create(icon);
      var imageElement = Image.create(image);

      // See description of `content` prop for explanation about why this is necessary.
      if (!isValidElement(content) && _isPlainObject(content)) {
        return React.createElement(
          ElementType,
          _extends({}, rest, valueProp, { role: 'listitem', className: classes, onClick: this.handleClick }),
          iconElement || imageElement,
          ListContent.create(content, { header: header, description: description })
        );
      }

      var headerElement = ListHeader.create(header);
      var descriptionElement = ListDescription.create(description);
      if (iconElement || imageElement) {
        return React.createElement(
          ElementType,
          _extends({}, rest, valueProp, { role: 'listitem', className: classes, onClick: this.handleClick }),
          iconElement || imageElement,
          (content || headerElement || descriptionElement) && React.createElement(
            ListContent,
            null,
            headerElement,
            descriptionElement,
            content
          )
        );
      }

      return React.createElement(
        ElementType,
        _extends({}, rest, valueProp, { role: 'listitem', className: classes, onClick: this.handleClick }),
        headerElement,
        descriptionElement,
        content
      );
    }
  }]);

  return ListItem;
}(Component);

ListItem._meta = {
  name: 'ListItem',
  parent: 'List',
  type: META.TYPES.ELEMENT
};
ListItem.handledProps = ['active', 'as', 'children', 'className', 'content', 'description', 'disabled', 'header', 'icon', 'image', 'onClick', 'value'];
ListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A list item can active. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /**
   * Shorthand for primary content.
   *
   * Heads up!
   *
   * This is handled slightly differently than the typical `content` prop since
   * the wrapping ListContent is not used when there's no icon or image.
   *
   * If you pass content as:
   * - an element/literal, it's treated as the sibling node to
   * header/description (whether wrapped in Item.Content or not).
   * - a props object, it forces the presence of Item.Content and passes those
   * props to it. If you pass a content prop within that props object, it
   * will be treated as the sibling node to header/description.
   */
  content: customPropTypes.itemShorthand,

  /** Shorthand for ListDescription. */
  description: customPropTypes.itemShorthand,

  /** A list item can disabled. */
  disabled: PropTypes.bool,

  /** Shorthand for ListHeader. */
  header: customPropTypes.itemShorthand,

  /** Shorthand for ListIcon. */
  icon: customPropTypes.every([customPropTypes.disallow(['image']), customPropTypes.itemShorthand]),

  /** Shorthand for Image. */
  image: customPropTypes.every([customPropTypes.disallow(['icon']), customPropTypes.itemShorthand]),

  /** A ListItem can be clicked */
  onClick: PropTypes.func,

  /** A value for an ordered list. */
  value: PropTypes.string
} : {};


ListItem.create = createShorthandFactory(ListItem, function (content) {
  return { content: content };
});

export default ListItem;