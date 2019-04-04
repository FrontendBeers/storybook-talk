import initStoryshots from '@storybook/addon-storyshots';

// eslint-disable-next-line
jest.mock('@storybook/addon-info', () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {}
}));

initStoryshots();
