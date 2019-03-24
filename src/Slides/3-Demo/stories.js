import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import Text from '../../Components/Text';

storiesOf('Slides/Demo', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add("It's time for a...", () => (
    <Wrapper>
      <Title>It{"'"}s time for a...</Title>
      <BigTitle style={{ opacity: 0 }}>DEMO!</BigTitle>
    </Wrapper>
  ))
  .add('DEMO!', () => (
    <Wrapper>
      <Title>It{"'"}s time for a...</Title>
      <BigTitle>DEMO!</BigTitle>
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

const Title = styled(Text).attrs({ size: '60px', weight: 800 })`
  margin: 0.3em 0;
`;

const BigTitle = styled(Text).attrs({ size: '120px', weight: 800 })`
  margin: 0.3em 0;
`;
