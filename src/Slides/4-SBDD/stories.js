import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import Text from '../../Components/Text';

storiesOf('Slides/SBDD', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('Isolated environment', () => (
    <Wrapper>
      <Title>Now, we can develop fast in isolation</Title>
    </Wrapper>
  ))
  .add('API first', () => (
    <Wrapper>
      <Title>Now, we think API first</Title>
    </Wrapper>
  ))
  .add('Live documentation', () => (
    <Wrapper>
      <Title>Now, we have a live documentation</Title>
    </Wrapper>
  ))
  .add('Discovery enhanced', () => (
    <Wrapper>
      <Title>Now, discovery is enhanced for outside & inside</Title>
    </Wrapper>
  ))
  .add('Adopt it!', () => (
    <Wrapper>
      <Title>So, let{"'"}s adopt the...</Title>
      <Title>Storybook Driven Development</Title>
    </Wrapper>
  ))
  .add("It's not finished", () => (
    <Wrapper>
      <Title>But... It{"'"}s not finished!</Title>
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
