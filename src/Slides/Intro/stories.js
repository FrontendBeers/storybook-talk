import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

storiesOf('Slides/Intro', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('Storybook', () => (
    <Wrapper>
        <Title>Storybook</Title>
        <Subtitle>The playground you need for your UI components! <span role="img" aria-label="tada">🎨</span></Subtitle>
        <Infos>By Laurent Thiebault @ React Beer Lille <span role="img" aria-label="react">⚛️</span> <span role="img" aria-label="beer">🍺</span></Infos>
    </Wrapper>
  ))
  .add('About me', () => (
    <Wrapper>
        <Title>Laurent Thiebault</Title>
        <Subtitle>Tech Lead at Decathlon <span role="img" aria-label="ball">🏈</span></Subtitle>
    </Wrapper>
  ));

const StoryWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial;
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

const Title = styled.h1`
  font-size: 80px;
  margin: 0.3em 0;
`;

const Subtitle = styled.h2`
  font-size: 40px;
`;

const Infos = styled.h3`
  margin-top: 3em;
  font-size: 24px;
`;
