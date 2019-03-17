import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

storiesOf('Slides/Intro', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('Hello', () => <h1>Hello Storybook <span role="img" aria-label="tada">🎉</span></h1>);

const StoryWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
