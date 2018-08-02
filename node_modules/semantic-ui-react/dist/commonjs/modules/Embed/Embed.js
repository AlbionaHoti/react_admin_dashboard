'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An embed displays content from other websites like YouTube videos or Google Maps.
 */
var Embed = function (_Component) {
  (0, _inherits3.default)(Embed, _Component);

  function Embed() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Embed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Embed.__proto__ || Object.getPrototypeOf(Embed)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      var active = _this.state.active;


      if (onClick) onClick(e, (0, _extends3.default)({}, _this.props, { active: true }));
      if (!active) _this.trySetState({ active: true });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Embed, [{
    key: 'getSrc',
    value: function getSrc() {
      var _props = this.props,
          _props$autoplay = _props.autoplay,
          autoplay = _props$autoplay === undefined ? true : _props$autoplay,
          _props$brandedUI = _props.brandedUI,
          brandedUI = _props$brandedUI === undefined ? false : _props$brandedUI,
          _props$color = _props.color,
          color = _props$color === undefined ? '#444444' : _props$color,
          _props$hd = _props.hd,
          hd = _props$hd === undefined ? true : _props$hd,
          id = _props.id,
          source = _props.source,
          url = _props.url;


      if (source === 'youtube') {
        return ['//www.youtube.com/embed/' + id, '?autohide=true', '&amp;autoplay=' + autoplay, '&amp;color=' + encodeURIComponent(color), '&amp;hq=' + hd, '&amp;jsapi=false', '&amp;modestbranding=' + brandedUI, '&amp;rel=' + (brandedUI ? 0 : 1)].join('');
      }

      if (source === 'vimeo') {
        return ['//player.vimeo.com/video/' + id, '?api=false', '&amp;autoplay=' + autoplay, '&amp;byline=false', '&amp;color=' + encodeURIComponent(color), '&amp;portrait=false', '&amp;title=false'].join('');
      }

      return url;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          aspectRatio = _props2.aspectRatio,
          className = _props2.className,
          icon = _props2.icon,
          placeholder = _props2.placeholder;
      var active = this.state.active;


      var classes = (0, _classnames2.default)('ui', aspectRatio, (0, _lib.useKeyOnly)(active, 'active'), 'embed', className);
      var rest = (0, _lib.getUnhandledProps)(Embed, this.props);
      var ElementType = (0, _lib.getElementType)(Embed, this.props);

      return _react2.default.createElement(
        ElementType,
        (0, _extends3.default)({}, rest, { className: classes, onClick: this.handleClick }),
        _Icon2.default.create(icon),
        placeholder && _react2.default.createElement('img', { className: 'placeholder', src: placeholder }),
        this.renderEmbed()
      );
    }
  }, {
    key: 'renderEmbed',
    value: function renderEmbed() {
      var _props3 = this.props,
          children = _props3.children,
          content = _props3.content,
          iframe = _props3.iframe,
          source = _props3.source;
      var active = this.state.active;


      if (!active) return null;
      if (!_lib.childrenUtils.isNil(children)) return _react2.default.createElement(
        'div',
        { className: 'embed' },
        children
      );
      if (!_lib.childrenUtils.isNil(content)) return _react2.default.createElement(
        'div',
        { className: 'embed' },
        content
      );

      return _react2.default.createElement(
        'div',
        { className: 'embed' },
        (0, _lib.createHTMLIframe)(_lib.childrenUtils.isNil(iframe) ? this.getSrc() : iframe, {
          defaultProps: {
            allowFullScreen: false,
            frameBorder: 0,
            height: '100%',
            scrolling: 'no',
            src: this.getSrc(),
            title: 'Embedded content from ' + source + '.',
            width: '100%'
          }
        })
      );
    }
  }]);
  return Embed;
}(_lib.AutoControlledComponent);

Embed.autoControlledProps = ['active'];
Embed.defaultProps = {
  icon: 'video play'
};
Embed._meta = {
  name: 'Embed',
  type: _lib.META.TYPES.MODULE
};
Embed.handledProps = ['active', 'as', 'aspectRatio', 'autoplay', 'brandedUI', 'children', 'className', 'color', 'content', 'defaultActive', 'hd', 'icon', 'id', 'iframe', 'onClick', 'placeholder', 'source', 'url'];
exports.default = Embed;
Embed.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** An embed can be active. */
  active: _propTypes2.default.bool,

  /** An embed can specify an alternative aspect ratio. */
  aspectRatio: _propTypes2.default.oneOf(['4:3', '16:9', '21:9']),

  /** Setting to true or false will force autoplay. */
  autoplay: _lib.customPropTypes.every([_lib.customPropTypes.demand(['source']), _propTypes2.default.bool]),

  /** Whether to show networks branded UI like title cards, or after video calls to action. */
  brandedUI: _lib.customPropTypes.every([_lib.customPropTypes.demand(['source']), _propTypes2.default.bool]),

  /** Primary content. */
  children: _propTypes2.default.node,

  /** Additional classes. */
  className: _propTypes2.default.string,

  /** Specifies a default chrome color with Vimeo or YouTube. */
  color: _lib.customPropTypes.every([_lib.customPropTypes.demand(['source']), _propTypes2.default.string]),

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Initial value of active. */
  defaultActive: _propTypes2.default.bool,

  /** Whether to prefer HD content. */
  hd: _lib.customPropTypes.every([_lib.customPropTypes.demand(['source']), _propTypes2.default.bool]),

  /** Specifies an icon to use with placeholder content. */
  icon: _lib.customPropTypes.itemShorthand,

  /** Specifies an id for source. */
  id: _lib.customPropTypes.every([_lib.customPropTypes.demand(['source']), _propTypes2.default.string]),

  /** Shorthand for HTML iframe. */
  iframe: _lib.customPropTypes.every([_lib.customPropTypes.demand(['source']), _lib.customPropTypes.itemShorthand]),

  /**
   * Сalled on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onClick: _propTypes2.default.func,

  /** A placeholder image for embed. */
  placeholder: _propTypes2.default.string,

  /** Specifies a source to use. */
  source: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['sourceUrl']), _propTypes2.default.oneOf(['youtube', 'vimeo'])]),

  /** Specifies a url to use for embed. */
  url: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['source']), _propTypes2.default.string])
} : {};