import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import PropTypes from 'prop-types';
import { Children, Component } from 'react';
import { findDOMNode } from 'react-dom';

import { TYPES } from '../../lib/META';

/**
 * This component exposes a callback prop that always returns the DOM node of both functional and class component
 * children.
 */

var Ref = function (_Component) {
  _inherits(Ref, _Component);

  function Ref() {
    _classCallCheck(this, Ref);

    return _possibleConstructorReturn(this, (Ref.__proto__ || Object.getPrototypeOf(Ref)).apply(this, arguments));
  }

  _createClass(Ref, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var innerRef = this.props.innerRef;

      // Heads up! Don't move this condition, it's a short circuit that avoids run of `findDOMNode`
      // if `innerRef` isn't passed
      // eslint-disable-next-line react/no-find-dom-node

      if (innerRef) innerRef(findDOMNode(this));
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return Children.only(children);
    }
  }]);

  return Ref;
}(Component);

Ref._meta = {
  name: 'Ref',
  type: TYPES.ADDON
};
Ref.handledProps = ['children', 'innerRef'];
export default Ref;
Ref.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: PropTypes.element,

  /**
   * Called when componentDidMount.
   *
   * @param {HTMLElement} node - Referred node.
   */
  innerRef: PropTypes.func
} : {};