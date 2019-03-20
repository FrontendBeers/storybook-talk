import { configure, addParameters } from '@storybook/react';

addParameters({
  backgrounds: [
    { name: 'light', value: '#fff', default: true },
    { name: 'dark', value: '#222' },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
});

// automatically import all files ending in *.stories.js
const reqSlides = require.context('../src/Slides', true, /.stories.js$/);
const reqComponents = require.context('../src/Components', true, /.stories.js$/);
function loadStories() {
  reqSlides.keys().forEach(filename => reqSlides(filename));
  reqComponents.keys().forEach(filename => reqComponents(filename));
}

configure(loadStories, module);
