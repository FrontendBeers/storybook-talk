import { configure, addParameters } from '@storybook/react';
import requireContext from 'require-context.macro';
import COLORS from '../src/Utils/Colors';

addParameters({
  backgrounds: [
    { name: 'light', value: COLORS.WHITE, default: true },
    { name: 'dark', value: COLORS.DARK },
    { name: 'twitter', value: COLORS.TWITTER },
    { name: 'facebook', value: COLORS.FACEBOOK }
  ]
});

// automatically import all files ending in *.stories.js
const reqSlides = requireContext('../src/Slides', true, /.stories.js$/);
const reqComponents = requireContext('../src/Components', true, /.stories.js$/);
function loadStories() {
  reqSlides.keys().forEach(filename => reqSlides(filename));
  reqComponents.keys().forEach(filename => reqComponents(filename));
}

configure(loadStories, module);
