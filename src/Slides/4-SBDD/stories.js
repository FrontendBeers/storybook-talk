import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import Text from '../../Components/Text';
import { Highlight } from '../../Utils/Highlight';

storiesOf('Slides/SBDD', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('Isolated environment', () => (
    <Wrapper>
      <Title>
        Now, we can develop <Highlight>fast</Highlight> in isolation
      </Title>
    </Wrapper>
  ))
  .add('API first', () => (
    <Wrapper>
      <Title>
        Now, we think <Highlight>API first</Highlight>
      </Title>
    </Wrapper>
  ))
  .add('Live documentation', () => (
    <Wrapper>
      <Title>
        Now, we have a <Highlight>live documentation</Highlight>
      </Title>
    </Wrapper>
  ))
  .add('Discovery enhanced', () => (
    <Wrapper>
      <Title>
        Now, <Highlight>discovery</Highlight> is enhanced for{' '}
        <Highlight>outside & inside</Highlight>
      </Title>
    </Wrapper>
  ))
  .add('Adopt it!', () => (
    <Wrapper>
      <Title>So, let{"'"}s adopt the...</Title>
      <Title>
        <Highlight>Storybook Driven Development</Highlight>
      </Title>
    </Wrapper>
  ))
  .add("It's not finished", () => (
    <Wrapper>
      <Title>
        But... It{"'"}s <Highlight>not finished!</Highlight>
      </Title>
    </Wrapper>
  ));

const StoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(Text).attrs({ size: '70px', weight: 800 })`
  margin: 0.3em 0;
`;
