import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(
  withInfo({
    header: true, // Global configuration for the info addon across all of your stories.
  })
);

function loadStories() {
  require('../src/stories')

}
configure(loadStories, module);

