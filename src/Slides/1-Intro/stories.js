import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Text from '../../Components/Text';
import storybookLogo from '../../../assets/storybook.png';
import lauthieb from '../../../assets/lauthieb.jpg';
import Image from '../../Components/Image';
import Button from '../../Components/Button';

storiesOf('Slides/Intro', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('Storybook', () => (
    <Wrapper>
      <Image
        src={storybookLogo}
        alt="Laurent Thiebault"
        width={160}
        height={160}
      />
      <Title>Storybook</Title>
      <Subtitle>
        The playground you need for your UI components!{' '}
        <span role="img" aria-label="tada">
          🎨
        </span>
      </Subtitle>
      <Infos>
        React Beer Lille #1{' '}
        <span role="img" aria-label="react">
          ⚛️
        </span>{' '}
        <span role="img" aria-label="beer">
          🍺
        </span>{' '}
        / Laurent Thiebault
      </Infos>
    </Wrapper>
  ))
  .add('About @lauthieb', () => (
    <Wrapper>
      <Image
        src={lauthieb}
        alt="Laurent Thiebault"
        width={300}
        height={300}
        isCircle
      />
      <Title>Laurent Thiebault</Title>
      <Subtitle>
        Tech Lead at Decathlon{' '}
        <span role="img" aria-label="guy with a laptop">
          👨🏻‍💻
        </span>{' '}
        <span role="img" aria-label="ball">
          🏈
        </span>
      </Subtitle>
      <Infos>
        <div>
          <span role="img" aria-label="twitter">
            🐦
          </span>{' '}
          <a
            href="https://twitter.com/lauthieb"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter.com/lauthieb
          </a>
        </div>
        <div>
          <span role="img" aria-label="github">
            😺
          </span>{' '}
          <a
            href="https://github.com/lauthieb"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/lauthieb
          </a>
        </div>
      </Infos>
    </Wrapper>
  ))
  .add('A component story...', () => (
    <Wrapper>
      <Title>A component story...</Title>
      <StyledButton style={{ opacity: 0 }} onClick={linkTo('Components/Tabs')}>
        <Text size="40px">
          <span role="img" aria-label="oh !">
            😱
          </span>{' '}
          Tell me more!{' '}
          <span role="img" aria-label="love">
            😍
          </span>
        </Text>
      </StyledButton>
    </Wrapper>
  ))
  .add('Tell me more!', () => (
    <Wrapper>
      <Title>A component story...</Title>
      <StyledButton onClick={linkTo('Components/Tabs')}>
        <Text size="40px">
          <span role="img" aria-label="oh !">
            😱
          </span>{' '}
          Tell me more!{' '}
          <span role="img" aria-label="love">
            😍
          </span>
        </Text>
      </StyledButton>
    </Wrapper>
  ))
  .add('A lot of combinations...', () => (
    <Wrapper>
      <Title>There is a lot of combinations...</Title>
      <iframe
        title="confused"
        src="https://giphy.com/embed/3o7btPCcdNniyf0ArS"
        width="480"
        height="268"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        style={{ margin: '0 auto', marginTop: '40px' }}
      />
    </Wrapper>
  ))
  .add('What if a new developer arrives?', () => (
    <Wrapper>
      <Title>What if a new developer arrives?</Title>
    </Wrapper>
  ))
  .add('Or if you come back in 6 months?', () => (
    <Wrapper>
      <Title>Or if you come back in 6 months?</Title>
    </Wrapper>
  ))
  .add('Brain explosion & time consuming!', () => (
    <Wrapper>
      <iframe
        title="Brain explosion!"
        src="https://giphy.com/embed/2rqEdFfkMzXmo"
        width="1200"
        height="400"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        style={{ margin: '0 auto' }}
      />
    </Wrapper>
  ))
  .add('We need a solution...', () => (
    <Wrapper>
      <Title>
        We need a solution...{' '}
        <span role="img" aria-label="love">
          🙏
        </span>
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

const Title = styled(Text).attrs({ size: '80px', weight: 800 })`
  margin: 0.3em 0;
`;

const Subtitle = styled(Text).attrs({ size: '42px', weight: 500 })``;

const Infos = styled(Text).attrs({ size: '30px' })`
  margin-top: 3.5em;
  font-size: 30px;
  font-weight: 400;
`;

const StyledButton = styled(Button)`
  width: 400px;
  margin: 0 auto;
  margin-top: 40px;
`;
