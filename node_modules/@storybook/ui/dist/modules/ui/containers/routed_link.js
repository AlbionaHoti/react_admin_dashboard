'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoutedLink = exports.MenuLink = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.mapper = mapper;

var _components = require('@storybook/components');

var _gen_podda_loader = require('../libs/gen_podda_loader');

var _gen_podda_loader2 = _interopRequireDefault(_gen_podda_loader);

var _handle_routing = require('../configs/handle_routing');

var _compose = require('../../../compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapper(state, props) {
  var _getUrlState = (0, _handle_routing.getUrlState)((0, _extends3.default)({}, state, props.overrideParams)),
      url = _getUrlState.url;

  return {
    href: url
  };
}

var composer = (0, _compose2.default)((0, _gen_podda_loader2.default)(mapper));

var ComposedMenuLink = composer(_components.MenuLink);
exports.MenuLink = ComposedMenuLink;


var ComposedRoutedLink = composer(_components.RoutedLink);
exports.RoutedLink = ComposedRoutedLink;