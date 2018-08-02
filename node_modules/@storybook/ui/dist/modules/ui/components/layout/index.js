'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _global = require('global');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSplitPane = require('react-split-pane');

var _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);

var _lodash = require('lodash.throttle');

var _lodash2 = _interopRequireDefault(_lodash);

var _usplit = require('./usplit');

var _usplit2 = _interopRequireDefault(_usplit);

var _dimensions = require('./dimensions');

var _dimensions2 = _interopRequireDefault(_dimensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootStyle = {
  height: '100vh',
  backgroundColor: '#F7F7F7'
};

var storiesPanelStyle = function storiesPanelStyle(showStoriesPanel, storiesPanelOnTop) {
  return {
    width: '100%',
    display: showStoriesPanel ? 'flex' : 'none',
    flexDirection: storiesPanelOnTop ? 'column' : 'row',
    alignItems: 'stretch',
    paddingRight: storiesPanelOnTop ? 10 : 0
  };
};

var addonPanelStyle = function addonPanelStyle(showAddonPanel, addonPanelInRight) {
  return {
    display: showAddonPanel ? 'flex' : 'none',
    flexDirection: addonPanelInRight ? 'row' : 'column',
    alignItems: 'stretch',
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: addonPanelInRight ? '5px 10px 10px 0' : '0px 10px 10px 0',
    boxSizing: 'border-box'
  };
};

var resizerCursor = function resizerCursor(isVert) {
  return isVert ? 'col-resize' : 'row-resize';
};

var storiesResizerStyle = function storiesResizerStyle(showStoriesPanel, storiesPanelOnTop) {
  return {
    cursor: showStoriesPanel ? resizerCursor(!storiesPanelOnTop) : undefined,
    height: storiesPanelOnTop ? 10 : 'auto',
    width: storiesPanelOnTop ? '100%' : 10,
    zIndex: 1
  };
};

var addonResizerStyle = function addonResizerStyle(showAddonPanel, addonPanelInRight) {
  return {
    cursor: showAddonPanel ? resizerCursor(addonPanelInRight) : undefined,
    height: addonPanelInRight ? '100%' : 10,
    width: addonPanelInRight ? 10 : '100%',
    zIndex: 1
  };
};

var contentPanelStyle = function contentPanelStyle(addonPanelInRight, storiesPanelOnTop) {
  return {
    position: 'absolute',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    padding: addonPanelInRight ? '10px 2px 10px 0' : '10px 10px 2px 0',
    paddingTop: storiesPanelOnTop ? 0 : 10
  };
};

var normalPreviewStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: '#FFF',
  border: '1px solid #ECECEC',
  borderRadius: 4
};

var fullScreenPreviewStyle = {
  position: 'fixed',
  left: '0px',
  right: '0px',
  top: '0px',
  zIndex: 1,
  backgroundColor: '#FFF',
  height: '100%',
  width: '100%',
  border: 0,
  margin: 0,
  padding: 0,
  WebkitOverflowScrolling: 'touch'
};

var overlayStyle = function overlayStyle(isDragging) {
  return {
    display: isDragging ? 'block' : 'none',
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };
};

var previewPaneStyle = {
  overflow: 'auto'
};

var defaultSizes = {
  addonPanel: {
    down: 200,
    right: 400
  },
  storiesPanel: {
    left: 250,
    top: 400
  }
};

var _saveSizes = function _saveSizes(sizes) {
  try {
    _global.localStorage.setItem('panelSizes', (0, _stringify2.default)(sizes));
    return true;
  } catch (e) {
    return false;
  }
};

var getSavedSizes = function getSavedSizes(sizes) {
  try {
    var panelSizes = _global.localStorage.getItem('panelSizes');
    if (panelSizes) {
      return JSON.parse(panelSizes);
    }
    _saveSizes(sizes);
    return sizes;
  } catch (e) {
    _saveSizes(sizes);
    return sizes;
  }
};

var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

    _this.layerSizes = getSavedSizes(defaultSizes);

    _this.state = {
      previewPanelDimensions: {
        height: 0,
        width: 0
      },
      isDragging: false
    };

    _this.throttledUpdatePreviewPanelState = (0, _lodash2.default)(_this.updatePrevewPanelState.bind(_this), 200);
    _this.throttledSaveSizes = (0, _lodash2.default)(_this.saveSizes, 25);
    _this.onDragStart = _this.onDragStart.bind(_this);
    _this.onDragEnd = _this.onDragEnd.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _global.window.addEventListener('resize', this.throttledUpdatePreviewPanelState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _global.window.removeEventListener('resize', this.throttledUpdatePreviewPanelState);
    }
  }, {
    key: 'onDragStart',
    value: function onDragStart() {
      this.setState({ isDragging: true });
    }
  }, {
    key: 'onDragEnd',
    value: function onDragEnd() {
      this.setState({ isDragging: false });
    }
  }, {
    key: 'onResize',
    value: function onResize(pane, mode, size) {
      this.throttledSaveSizes(pane, mode, size);
      this.throttledUpdatePreviewPanelState();
    }
  }, {
    key: 'saveSizes',
    value: function saveSizes(pane, mode, size) {
      this.layerSizes[pane][mode] = size;
      _saveSizes(this.layerSizes);
    }
  }, {
    key: 'updatePrevewPanelState',
    value: function updatePrevewPanelState() {
      var _previewPanelRef = this.previewPanelRef,
          clientWidth = _previewPanelRef.clientWidth,
          clientHeight = _previewPanelRef.clientHeight;


      this.setState({
        previewPanelDimensions: {
          width: clientWidth,
          height: clientHeight
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          goFullScreen = _props.goFullScreen,
          showStoriesPanel = _props.showStoriesPanel,
          showAddonPanel = _props.showAddonPanel,
          addonPanelInRight = _props.addonPanelInRight,
          addonPanel = _props.addonPanel,
          storiesPanel = _props.storiesPanel,
          preview = _props.preview;
      var previewPanelDimensions = this.state.previewPanelDimensions;


      var storiesPanelOnTop = false;

      var previewStyle = normalPreviewStyle;

      if (goFullScreen) {
        previewStyle = fullScreenPreviewStyle;
      }

      var sizes = getSavedSizes(this.layerSizes);

      var storiesPanelDefaultSize = !storiesPanelOnTop ? sizes.storiesPanel.left : sizes.storiesPanel.top;
      var addonPanelDefaultSize = !addonPanelInRight ? sizes.addonPanel.down : sizes.addonPanel.right;

      var addonSplit = addonPanelInRight ? 'vertical' : 'horizontal';
      var storiesSplit = storiesPanelOnTop ? 'horizontal' : 'vertical';

      return _react2.default.createElement(
        'div',
        { style: rootStyle },
        _react2.default.createElement(
          _reactSplitPane2.default,
          {
            split: storiesSplit,
            allowResize: showStoriesPanel,
            minSize: 150,
            maxSize: -400,
            size: showStoriesPanel ? storiesPanelDefaultSize : 1,
            defaultSize: storiesPanelDefaultSize,
            resizerStyle: storiesResizerStyle(showStoriesPanel, storiesPanelOnTop),
            onDragStarted: this.onDragStart,
            onDragFinished: this.onDragEnd,
            onChange: function onChange(size) {
              return _this2.onResize('storiesPanel', storiesPanelOnTop ? 'top' : 'left', size);
            }
          },
          _react2.default.createElement(
            'div',
            { style: storiesPanelStyle(showStoriesPanel, storiesPanelOnTop) },
            _react2.default.createElement(
              'div',
              { style: { flexGrow: 1, height: '100%', width: '100%' } },
              storiesPanel()
            ),
            _react2.default.createElement(_usplit2.default, { shift: 5, split: storiesSplit })
          ),
          _react2.default.createElement(
            _reactSplitPane2.default,
            {
              split: addonSplit,
              allowResize: showAddonPanel,
              primary: 'second',
              minSize: addonPanelInRight ? 200 : 100,
              maxSize: -200,
              size: showAddonPanel ? addonPanelDefaultSize : 1,
              defaultSize: addonPanelDefaultSize,
              resizerStyle: addonResizerStyle(showAddonPanel, addonPanelInRight),
              onDragStarted: this.onDragStart,
              onDragFinished: this.onDragEnd,
              onChange: function onChange(size) {
                return _this2.onResize('addonPanel', addonPanelInRight ? 'right' : 'down', size);
              },
              pane1Style: previewPaneStyle
            },
            _react2.default.createElement(
              'div',
              { style: contentPanelStyle(addonPanelInRight, storiesPanelOnTop) },
              _react2.default.createElement('div', { style: overlayStyle(this.state.isDragging) }),
              _react2.default.createElement(
                'div',
                {
                  style: previewStyle,
                  ref: function ref(_ref) {
                    _this2.previewPanelRef = _ref;
                  }
                },
                preview()
              ),
              _react2.default.createElement(_dimensions2.default, previewPanelDimensions)
            ),
            _react2.default.createElement(
              'div',
              { style: addonPanelStyle(showAddonPanel, addonPanelInRight) },
              _react2.default.createElement(_usplit2.default, { shift: -5, split: addonSplit }),
              addonPanel()
            )
          )
        )
      );
    }
  }]);
  return Layout;
}(_react2.default.Component);

Layout.propTypes = {
  showStoriesPanel: _propTypes2.default.bool.isRequired,
  showAddonPanel: _propTypes2.default.bool.isRequired,
  goFullScreen: _propTypes2.default.bool.isRequired,
  storiesPanel: _propTypes2.default.func.isRequired,
  preview: _propTypes2.default.func.isRequired,
  addonPanel: _propTypes2.default.func.isRequired,
  addonPanelInRight: _propTypes2.default.bool.isRequired
};

exports.default = Layout;