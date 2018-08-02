'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.storyFilter = storyFilter;

var _fuse = require('fuse.js');

var _fuse2 = _interopRequireDefault(_fuse);

var _lodash = require('lodash.sortby');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchOptions = {
  shouldSort: false,
  tokenize: true,
  matchAllTokens: false,
  includeMatches: true,
  findAllMatches: true,
  includeScore: false,
  threshold: 0.2,
  location: 0,
  distance: 200,
  maxPatternLength: 32,
  minMatchCharLength: 2,
  keys: ['namespaces', 'storyName', 'searchHook']
};

function sort(stories, sortStoriesByKind) {
  if (!sortStoriesByKind) return stories;

  return (0, _lodash2.default)(stories, ['kind']);
}

function flattenStories(items) {
  return items.reduce(function (arr, item) {
    var flatten = item.stories.map(function (story) {
      return {
        kind: item.kind,
        rootName: item.rootName,
        namespaces: item.namespaces,
        storyName: story
      };
    });

    return arr.concat(flatten);
  }, []);
}

function applySearchHookForSelectedKind(stories, filter, selectedKind, selectedStory) {
  return stories.map(function (story) {
    if (story.kind === selectedKind && story.storyName === selectedStory) {
      return (0, _extends3.default)({}, story, {
        searchHook: filter
      });
    }

    return story;
  });
}

function getGroupedStoryItem(map, item, matches) {
  var storyItem = map.get(item.kind);

  if (!storyItem) {
    storyItem = {
      kind: item.kind,
      rootName: item.rootName,
      namespaces: item.namespaces,
      stories: [],
      matches: matches.filter(function (match) {
        return match.key === 'namespaces';
      })
    };

    map.set(item.kind, storyItem);
  }

  return storyItem;
}

function appendStoryMatch(item, matches) {
  var storyMatch = matches.find(function (match) {
    return match.key === 'storyName';
  });

  if (storyMatch) {
    item.matches.push({
      indices: storyMatch.indices,
      value: storyMatch.value,
      key: 'stories'
    });
  }
}

function groupStories(matchedItems) {
  var storiesMap = matchedItems.reduce(function (map, matchedItem) {
    var item = matchedItem.item,
        matches = matchedItem.matches;

    var groupedStoryItem = getGroupedStoryItem(map, item, matches);

    groupedStoryItem.stories.push(item.storyName);
    appendStoryMatch(groupedStoryItem, matches);

    return map;
  }, new _map2.default());

  return (0, _from2.default)(storiesMap.values());
}

function storyFilter(stories, filter, selectedKind, selectedStory, sortStoriesByKind) {
  if (!stories) {
    return null;
  }

  var sorted = sort(stories, sortStoriesByKind);

  if (!filter) {
    return sorted;
  }

  var flattened = flattenStories(sorted);

  var storiesWithHook = applySearchHookForSelectedKind(flattened, filter, selectedKind, selectedStory);

  var fuse = new _fuse2.default(storiesWithHook, searchOptions);
  var foundStories = fuse.search(filter);

  return groupStories(foundStories);
}