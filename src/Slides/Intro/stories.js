import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import Text from '../../Components/Text';

storiesOf('Slides/Intro', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('Storybook', () => (
    <Wrapper>
        <Title>Storybook</Title>
        <Subtitle>The playground you need for your UI components! <span role="img" aria-label="tada">🎨</span></Subtitle>
        <Infos>By Laurent Thiebault @ React Beer Lille <span role="img" aria-label="react">⚛️</span> <span role="img" aria-label="beer">🍺</span></Infos>
    </Wrapper>
  ))
  .add('About @lauthieb', () => (
    <Wrapper>
        <Title>Laurent Thiebault</Title>
        <Subtitle>Tech Lead at Decathlon <span role="img" aria-label="guy with a laptop">👨🏻‍💻</span> <span role="img" aria-label="ball">🏈</span></Subtitle>
        <Infos>
          <div><span role="img" aria-label="twitter">🐦</span> <a href="https://twitter.com/lauthieb" target="_blank" rel="noopener noreferrer">twitter.com/lauthieb</a></div>
          <div><span role="img" aria-label="github">😺</span> <a href="https://github.com/lauthieb" target="_blank" rel="noopener noreferrer">github.com/lauthieb</a></div>
        </Infos>
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

const Title = styled(Text).attrs({size: '80px', weight: 800})`
  margin: 0.3em 0;
`;

const Subtitle = styled(Text).attrs({size: '42px', weight: 500})``;

const Infos = styled(Text).attrs({size: '30px'})`
  margin-top: 3.5em;
  font-size: 30px;
  font-weight: 400;
`;
