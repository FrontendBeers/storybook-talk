import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Text from '../../Components/Text';
import storybookLogo from '../../../assets/storybook.png';
import lauthieb from '../../../assets/lauthieb.jpg';
import pagination from '../../../assets/pagination.png';
import Image from '../../Components/Image';
import Button from '../../Components/Button';

storiesOf('Slides/Intro', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('Storybook', () => (
    <Wrapper>
      <Image src={storybookLogo} alt="Storybook" width={160} height={160} />
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
        <span role="img" aria-label="oh !">
          😱
        </span>{' '}
        Tell me more!{' '}
        <span role="img" aria-label="love">
          😍
        </span>
      </StyledButton>
    </Wrapper>
  ))
  .add('Tell me more!', () => (
    <Wrapper>
      <Title>A component story...</Title>
      <StyledButton onClick={linkTo('Components/Tabs')}>
        <span role="img" aria-label="oh !">
          😱
        </span>{' '}
        Tell me more!{' '}
        <span role="img" aria-label="love">
          😍
        </span>
      </StyledButton>
    </Wrapper>
  ))
  .add('A simple pagination component 1', () => (
    <Wrapper>
      <Title style={{ marginBottom: 60 }}>A simple pagination component</Title>
      <Image
        src={pagination}
        alt="A simple pagination component"
        width={750}
        height={400}
        style={{ opacity: 0 }}
      />
    </Wrapper>
  ))
  .add('A simple pagination component 2', () => (
    <Wrapper>
      <Title style={{ marginBottom: 60 }}>A simple pagination component</Title>
      <Image
        src={pagination}
        alt="A simple pagination component"
        width={750}
        height={400}
      />
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
        width="1000px"
        height="600px"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        style={{ margin: '0 auto' }}
      />
    </Wrapper>
  ))
  .add('Components introduce new challenges 1', () => (
    <Wrapper>
      <Title>Components introduce new challenges</Title>
      <ListItem style={{ opacity: 0 }}>
        <span role="img" aria-label="explosion">
          💥
        </span>{' '}
        Countless situations & states to support
      </ListItem>
      <ListItem style={{ opacity: 0 }}>
        <span role="img" aria-label="hard">
          🤯
        </span>{' '}
        Hundreds of components and use cases
      </ListItem>
      <ListItem style={{ opacity: 0 }}>
        <span role="img" aria-label="bomb">
          💣
        </span>{' '}
        Bugs spread because of dependencies
      </ListItem>
    </Wrapper>
  ))
  .add('Components introduce new challenges 2', () => (
    <Wrapper>
      <Title>Components introduce new challenges</Title>
      <ListItem>
        <span role="img" aria-label="explosion">
          💥
        </span>{' '}
        Countless situations & states to support
      </ListItem>
      <ListItem style={{ opacity: 0 }}>
        <span role="img" aria-label="hard">
          🤯
        </span>{' '}
        Hundreds of components and use cases
      </ListItem>
      <ListItem style={{ opacity: 0 }}>
        <span role="img" aria-label="bomb">
          💣
        </span>{' '}
        Bugs spread because of dependencies
      </ListItem>
    </Wrapper>
  ))
  .add('Components introduce new challenges 3', () => (
    <Wrapper>
      <Title>Components introduce new challenges</Title>
      <ListItem>
        <span role="img" aria-label="explosion">
          💥
        </span>{' '}
        Countless situations & states to support
      </ListItem>
      <ListItem>
        <span role="img" aria-label="hard">
          🤯
        </span>{' '}
        Hundreds of components and use cases
      </ListItem>
      <ListItem style={{ opacity: 0 }}>
        <span role="img" aria-label="bomb">
          💣
        </span>{' '}
        Bugs spread because of dependencies
      </ListItem>
    </Wrapper>
  ))
  .add('Components introduce new challenges 4', () => (
    <Wrapper>
      <Title>Components introduce new challenges</Title>
      <ListItem>
        <span role="img" aria-label="explosion">
          💥
        </span>{' '}
        Countless situations & states to support
      </ListItem>
      <ListItem>
        <span role="img" aria-label="hard">
          🤯
        </span>{' '}
        Hundreds of components and use cases
      </ListItem>
      <ListItem>
        <span role="img" aria-label="bomb">
          💣
        </span>{' '}
        Bugs spread because of dependencies
      </ListItem>
    </Wrapper>
  ))
  .add('Building components is complicated', () => (
    <Wrapper>
      <Title>Building components is complicated</Title>
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

const ListItem = styled(Text).attrs({
  size: '42px',
  weight: 500
})`
  margin-bottom: 0;
`;

const Infos = styled(Text).attrs({ size: '30px' })`
  margin-top: 3.5em;
  font-size: 30px;
  font-weight: 400;
`;

const StyledButton = styled(Button)`
  margin: 0 auto;
  margin-top: 40px;
`;
