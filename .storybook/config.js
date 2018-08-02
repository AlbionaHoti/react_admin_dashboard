import {
  configure
} from '@storybook/react';

function loadStories() {
  import('../src/stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);