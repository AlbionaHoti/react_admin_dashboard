import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { AutoControlledComponent as Component, childrenUtils, createHTMLIframe, customPropTypes, getElementType, getUnhandledProps, META, useKeyOnly } from '../../lib';
import Icon from '../../elements/Icon';

/**
 * An embed displays content from other websites like YouTube videos or Google Maps.
 */

var Embed = function (_Component) {
  _inherits(Embed, _Component);

  function Embed() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Embed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Embed.__proto__ || Object.getPrototypeOf(Embed)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      var active = _this.state.active;


      if (onClick) onClick(e, _extends({}, _this.props, { active: true }));
      if (!active) _this.trySetState({ active: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Embed, [{
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


      var classes = cx('ui', aspectRatio, useKeyOnly(active, 'active'), 'embed', className);
      var rest = getUnhandledProps(Embed, this.props);
      var ElementType = getElementType(Embed, this.props);

      return React.createElement(
        ElementType,
        _extends({}, rest, { className: classes, onClick: this.handleClick }),
        Icon.create(icon),
        placeholder && React.createElement('img', { className: 'placeholder', src: placeholder }),
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
      if (!childrenUtils.isNil(children)) return React.createElement(
        'div',
        { className: 'embed' },
        children
      );
      if (!childrenUtils.isNil(content)) return React.createElement(
        'div',
        { className: 'embed' },
        content
      );

      return React.createElement(
        'div',
        { className: 'embed' },
        createHTMLIframe(childrenUtils.isNil(iframe) ? this.getSrc() : iframe, {
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
}(Component);

Embed.autoControlledProps = ['active'];
Embed.defaultProps = {
  icon: 'video play'
};
Embed._meta = {
  name: 'Embed',
  type: META.TYPES.MODULE
};
Embed.handledProps = ['active', 'as', 'aspectRatio', 'autoplay', 'brandedUI', 'children', 'className', 'color', 'content', 'defaultActive', 'hd', 'icon', 'id', 'iframe', 'onClick', 'placeholder', 'source', 'url'];
export default Embed;
Embed.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** An embed can be active. */
  active: PropTypes.bool,

  /** An embed can specify an alternative aspect ratio. */
  aspectRatio: PropTypes.oneOf(['4:3', '16:9', '21:9']),

  /** Setting to true or false will force autoplay. */
  autoplay: customPropTypes.every([customPropTypes.demand(['source']), PropTypes.bool]),

  /** Whether to show networks branded UI like title cards, or after video calls to action. */
  brandedUI: customPropTypes.every([customPropTypes.demand(['source']), PropTypes.bool]),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Specifies a default chrome color with Vimeo or YouTube. */
  color: customPropTypes.every([customPropTypes.demand(['source']), PropTypes.string]),

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Initial value of active. */
  defaultActive: PropTypes.bool,

  /** Whether to prefer HD content. */
  hd: customPropTypes.every([customPropTypes.demand(['source']), PropTypes.bool]),

  /** Specifies an icon to use with placeholder content. */
  icon: customPropTypes.itemShorthand,

  /** Specifies an id for source. */
  id: customPropTypes.every([customPropTypes.demand(['source']), PropTypes.string]),

  /** Shorthand for HTML iframe. */
  iframe: customPropTypes.every([customPropTypes.demand(['source']), customPropTypes.itemShorthand]),

  /**
   * Сalled on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onClick: PropTypes.func,

  /** A placeholder image for embed. */
  placeholder: PropTypes.string,

  /** Specifies a source to use. */
  source: customPropTypes.every([customPropTypes.disallow(['sourceUrl']), PropTypes.oneOf(['youtube', 'vimeo'])]),

  /** Specifies a url to use for embed. */
  url: customPropTypes.every([customPropTypes.disallow(['source']), PropTypes.string])
} : {};