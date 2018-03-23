import _extends from 'babel-runtime/helpers/extends';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { childrenUtils, customPropTypes, getElementType, getUnhandledProps, META } from '../../lib';

function LabelDetail(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = cx('detail', className);
  var rest = getUnhandledProps(LabelDetail, props);
  var ElementType = getElementType(LabelDetail, props);

  return React.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    childrenUtils.isNil(children) ? content : children
  );
}

LabelDetail.handledProps = ['as', 'children', 'className', 'content'];
LabelDetail._meta = {
  name: 'LabelDetail',
  parent: 'Label',
  type: META.TYPES.ELEMENT
};

LabelDetail.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand
} : {};

export default LabelDetail;