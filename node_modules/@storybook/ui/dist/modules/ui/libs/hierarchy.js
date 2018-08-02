'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.createHierarchyRoot = createHierarchyRoot;
exports.createHierarchies = createHierarchies;
exports.resolveStoryHierarchyRoots = resolveStoryHierarchyRoots;
exports.resolveStoryHierarchy = resolveStoryHierarchy;
exports.prepareStoriesForHierarchy = prepareStoriesForHierarchy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findMatches(matches, type, value) {
  if (!matches) {
    return null;
  }

  var matchForType = matches.filter(function (match) {
    return match.key === type;
  }).find(function (match) {
    return match.value === value;
  });

  if (!matchForType) {
    return null;
  }

  return matchForType.indices;
}

function createNamespaceNode(namespace, hierarchy, story) {
  return {
    isNamespace: true,
    name: namespace,
    namespaces: [].concat((0, _toConsumableArray3.default)(hierarchy.namespaces), [namespace]),
    highlight: findMatches(story.matches, 'namespaces', namespace),
    map: new _map2.default()
  };
}

function fillHierarchy(namespaces, hierarchy, story) {
  var namespace = namespaces[0];
  var childHierarchy = hierarchy.map.get(namespace);

  if (!childHierarchy) {
    childHierarchy = createNamespaceNode(namespace, hierarchy, story);
    hierarchy.map.set(namespace, childHierarchy);
  }

  if (namespaces.length === 1) {
    childHierarchy.kind = story.kind;
    childHierarchy.stories = story.stories.map(function (s) {
      return {
        name: s,
        highlight: findMatches(story.matches, 'stories', s)
      };
    });

    return;
  }

  fillHierarchy(namespaces.slice(1), childHierarchy, story);
}

function createHierarchyRoot() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return {
    isNamespace: true,
    namespaces: [],
    name: name,
    map: new _map2.default()
  };
}

function ensureMainRootIsFirst(hierarchies) {
  var mainRoot = hierarchies.find(function (hierarchy) {
    return hierarchy.name === '';
  });
  var mainRootIndex = hierarchies.indexOf(mainRoot);
  if (mainRootIndex === -1 && hierarchies.length === 0) {
    hierarchies.push(createHierarchyRoot());
  } else if (mainRootIndex > 0) {
    hierarchies.unshift.apply(hierarchies, (0, _toConsumableArray3.default)(hierarchies.splice(mainRootIndex, 1)));
  }
  return hierarchies;
}

function createHierarchies(stories) {
  var rootMap = {};

  if (stories) {
    stories.forEach(function (story) {
      var _story$rootName = story.rootName,
          rootName = _story$rootName === undefined ? '' : _story$rootName,
          namespaces = story.namespaces;

      var name = namespaces[namespaces.length - 1];
      var hierarchyRoot = rootMap[rootName] || (rootMap[rootName] = createHierarchyRoot(rootName));

      fillHierarchy(namespaces, hierarchyRoot, (0, _extends3.default)({}, story, { name: name }));
    });
  }

  return ensureMainRootIsFirst((0, _values2.default)(rootMap));
}

function resolveStoryHierarchyRoots() {
  var storyName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var hierarchyRootSeparator = arguments[1];

  if (!hierarchyRootSeparator) {
    return { rootName: '', storyName: storyName };
  }

  var segments = storyName.split(new RegExp(hierarchyRootSeparator));

  switch (segments.length) {
    case 1:
      return { rootName: '', storyName: storyName };
    case 2:
      return { rootName: segments[0], storyName: segments[1] };
    default:
      throw new Error('multiple root separators found in story name: ' + storyName);
  }
}

function resolveStoryHierarchy() {
  var storyName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var hierarchySeparator = arguments[1];

  if (!hierarchySeparator) {
    return [storyName];
  }

  return storyName.split(new RegExp(hierarchySeparator)).filter(function (segment) {
    return !!segment;
  });
}

function prepareStoriesForHierarchy(stories, hierarchySeparator, hierarchyRootSeparator) {
  if (!stories) {
    return null;
  }

  return stories.map(function (story) {
    var _resolveStoryHierarch = resolveStoryHierarchyRoots(story.kind, hierarchyRootSeparator),
        rootName = _resolveStoryHierarch.rootName,
        storyName = _resolveStoryHierarch.storyName;

    var namespaces = resolveStoryHierarchy(storyName, hierarchySeparator);

    return (0, _extends3.default)({}, story, {
      rootName: rootName,
      namespaces: namespaces
    });
  });
}