import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

storiesOf('Slides/Intro', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('Storybook', () => (
    <div>
      <h1>Storybook</h1>
      <h1>The playground you need for your UI components! <span role="img" aria-label="tada">🎨</span></h1>
    </div>
  ));

const StoryWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

const Title = styled.div`
  
`;
