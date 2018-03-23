import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _invoke from 'lodash/invoke';
import _isNil from 'lodash/isNil';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { customPropTypes, eventStack, getElementType, getUnhandledProps, isBrowser, META } from '../../lib';

/**
 * Responsive can control visibility of content.
 */

var Responsive = function (_Component) {
  _inherits(Responsive, _Component);

  function Responsive() {
    var _ref;

    _classCallCheck(this, Responsive);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Measure the root element dimension to handle gesture transitions on iOS safely
    // https://github.com/Semantic-Org/Semantic-UI-React/pull/2531
    var _this = _possibleConstructorReturn(this, (_ref = Responsive.__proto__ || Object.getPrototypeOf(Responsive)).call.apply(_ref, [this].concat(args)));

    _initialiseProps.call(_this);

    _this.state = { width: isBrowser() ? document.documentElement.clientWidth : 0 };
    return _this;
  }

  _createClass(Responsive, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var fireOnMount = this.props.fireOnMount;


      this.mounted = true;

      eventStack.sub('resize', this.handleResize, { target: 'window' });
      if (fireOnMount) this.handleUpdate();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
      eventStack.unsub('resize', this.handleResize, { target: 'window' });
    }

    // ----------------------------------------
    // Helpers
    // ----------------------------------------

    // ----------------------------------------
    // Event handlers
    // ----------------------------------------

  }, {
    key: 'render',


    // ----------------------------------------
    // Render
    // ----------------------------------------

    value: function render() {
      var children = this.props.children;


      var ElementType = getElementType(Responsive, this.props);
      var rest = getUnhandledProps(Responsive, this.props);

      if (this.isVisible()) return React.createElement(
        ElementType,
        rest,
        children
      );
      return null;
    }
  }]);

  return Responsive;
}(Component);

Responsive._meta = {
  name: 'Responsive',
  type: META.TYPES.ADDON
};
Responsive.onlyMobile = { minWidth: 320, maxWidth: 767 };
Responsive.onlyTablet = { minWidth: 768, maxWidth: 991 };
Responsive.onlyComputer = { minWidth: 992 };
Responsive.onlyLargeScreen = { minWidth: 1200, maxWidth: 1919 };
Responsive.onlyWidescreen = { minWidth: 1920 };
Responsive.handledProps = ['as', 'children', 'fireOnMount', 'maxWidth', 'minWidth', 'onUpdate'];

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.fitsMaxWidth = function () {
    var maxWidth = _this2.props.maxWidth;
    var width = _this2.state.width;


    return _isNil(maxWidth) ? true : width <= maxWidth;
  };

  this.fitsMinWidth = function () {
    var minWidth = _this2.props.minWidth;
    var width = _this2.state.width;


    return _isNil(minWidth) ? true : width >= minWidth;
  };

  this.setSafeState = function () {
    return _this2.mounted && _this2.setState.apply(_this2, arguments);
  };

  this.isVisible = function () {
    return _this2.fitsMinWidth() && _this2.fitsMaxWidth();
  };

  this.handleResize = function (e) {
    if (_this2.ticking) return;

    _this2.ticking = true;
    requestAnimationFrame(function () {
      return _this2.handleUpdate(e);
    });
  };

  this.handleUpdate = function (e) {
    _this2.ticking = false;
    var width = document.documentElement.clientWidth;

    _this2.setSafeState({ width: width });
    _invoke(_this2.props, 'onUpdate', e, _extends({}, _this2.props, { width: width }));
  };
};

export default Responsive;
Responsive.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Fires callbacks immediately after mount. */
  fireOnMount: PropTypes.bool,

  /** The maximum width at which content will be displayed. */
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The minimum width at which content will be displayed. */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Called on update.
   *
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onUpdate: PropTypes.func
} : {};