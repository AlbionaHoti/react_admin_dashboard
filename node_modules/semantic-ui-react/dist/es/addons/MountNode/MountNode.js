import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import PropTypes from 'prop-types';
import { Component } from 'react';

import { customPropTypes, META } from '../../lib';
import getNodeFromProps from './lib/getNodeFromProps';
import handleClassNamesChange from './lib/handleClassNamesChange';
import NodeRegistry from './lib/NodeRegistry';

var nodeRegistry = new NodeRegistry();

/**
 * A component that allows to manage classNames on a DOM node in declarative manner.
 */

var MountNode = function (_Component) {
  _inherits(MountNode, _Component);

  function MountNode() {
    _classCallCheck(this, MountNode);

    return _possibleConstructorReturn(this, (MountNode.__proto__ || Object.getPrototypeOf(MountNode)).apply(this, arguments));
  }

  _createClass(MountNode, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref) {
      var nextClassName = _ref.className;
      var currentClassName = this.props.className;


      return nextClassName !== currentClassName;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var node = getNodeFromProps(this.props);

      if (node) {
        nodeRegistry.add(node, this);
        nodeRegistry.emit(node, handleClassNamesChange);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var node = getNodeFromProps(this.props);

      if (node) nodeRegistry.emit(node, handleClassNamesChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = getNodeFromProps(this.props);

      if (node) {
        nodeRegistry.del(node, this);
        nodeRegistry.emit(node, handleClassNamesChange);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return MountNode;
}(Component);

MountNode._meta = {
  name: 'MountNode',
  type: META.TYPES.ADDON
};
MountNode.handledProps = ['className', 'node'];
export default MountNode;
MountNode.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Additional classes. */
  className: PropTypes.string,

  /** The DOM node where we will apply class names. Defaults to document.body. */
  node: customPropTypes.domNode
} : {};