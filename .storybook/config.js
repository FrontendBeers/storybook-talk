import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const reqSlides = require.context('../src/Slides', true, /.stories.js$/);
const reqComponents = require.context('../src/Components', true, /.stories.js$/);
function loadStories() {
  reqSlides.keys().forEach(filename => reqSlides(filename));
  reqComponents.keys().forEach(filename => reqComponents(filename));
}

configure(loadStories, module);
