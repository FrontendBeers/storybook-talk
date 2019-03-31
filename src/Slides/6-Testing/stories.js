import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import Text from '../../Components/Text';

storiesOf('Slides/Testing', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('UI Testing', () => (
    <Wrapper>
      <BigTitle>UI Testing</BigTitle>
    </Wrapper>
  ))
  .add('Why do we need to test? 1', () => (
    <Wrapper>
      <Title>Why do we need to test?</Title>
      <ListItem style={{ opacity: 0 }}>
        <span role="img" aria-label="glass">
          🔍
        </span>{' '}
        To find bugs
      </ListItem>
      <ListItem style={{ opacity: 0 }}>
        <span role="img" aria-label="muscle">
          💪
        </span>{' '}
        To make sure things won’t break between new code commits.
      </ListItem>
      <ListItem style={{ opacity: 0 }}>
        <span role="img" aria-label="documentation">
          📝
        </span>{' '}
        To keep tests as living documentations
      </ListItem>
    </Wrapper>
  ))
  .add('Why do we need to test? 2', () => (
    <Wrapper>
      <Title>Why do we need to test?</Title>
      <ListItem>
        <span role="img" aria-label="glass">
          🔍
        </span>{' '}
        To find bugs
      </ListItem>
      <ListItem style={{ opacity: 0 }}>
        <span role="img" aria-label="muscle">
          💪
        </span>{' '}
        To make sure things won’t break between new code commits.
      </ListItem>
      <ListItem style={{ opacity: 0 }}>
        <span role="img" aria-label="documentation">
          📝
        </span>{' '}
        To keep tests as living documentations
      </ListItem>
    </Wrapper>
  ))
  .add('Why do we need to test? 3', () => (
    <Wrapper>
      <Title>Why do we need to test?</Title>
      <ListItem>
        <span role="img" aria-label="glass">
          🔍
        </span>{' '}
        To find bugs
      </ListItem>
      <ListItem>
        <span role="img" aria-label="muscle">
          💪
        </span>{' '}
        To make sure things won’t break between new code commits.
      </ListItem>
      <ListItem style={{ opacity: 0 }}>
        <span role="img" aria-label="documentation">
          📝
        </span>{' '}
        To keep tests as living documentations
      </ListItem>
    </Wrapper>
  ))
  .add('Why do we need to test? 4', () => (
    <Wrapper>
      <Title>Why do we need to test?</Title>
      <ListItem>
        <span role="img" aria-label="glass">
          🔍
        </span>{' '}
        To find bugs
      </ListItem>
      <ListItem>
        <span role="img" aria-label="muscle">
          💪
        </span>{' '}
        To make sure things won’t break between new code commits.
      </ListItem>
      <ListItem>
        <span role="img" aria-label="documentation">
          📝
        </span>{' '}
        To keep tests as living documentations
      </ListItem>
    </Wrapper>
  ))
  .add('Structural Testing', () => (
    <Wrapper>
      <BigTitle>Structural Testing</BigTitle>
    </Wrapper>
  ))
  .add('Interaction Testing', () => (
    <Wrapper>
      <BigTitle>Interaction Testing</BigTitle>
    </Wrapper>
  ))
  .add('Automated Visual Testing', () => (
    <Wrapper>
      <BigTitle>Automated Visual Testing</BigTitle>
    </Wrapper>
  ))
  .add('Manual Testing', () => (
    <Wrapper>
      <BigTitle>Manual Testing</BigTitle>
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

const ListItem = styled(Text).attrs({
  size: '42px',
  weight: 500
})`
  margin-bottom: 0;
`;

const BigTitle = ({ children, blink, ...props }) => (
  <Text size="120px" weight={800} {...props}>
    {children}
  </Text>
);
