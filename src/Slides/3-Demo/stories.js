import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import { useBlink } from '../../Utils/CustomHooks';
import inception from '../../../assets/inception.png';
import gettingStarted from '../../../assets/getting-started.png';
import COLORS from '../../Utils/Colors';

storiesOf('Slides/Demo', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add("It's time for a...", () => (
    <Wrapper>
      <Title>Okay, it{"'"}s time for a...</Title>
      <BigTitle style={{ opacity: 0, margin: '0 0.4em' }}>DEMO!</BigTitle>
    </Wrapper>
  ))
  .add('DEMO!', () => (
    <Wrapper>
      <Title>Okay, it{"'"}s time for a...</Title>
      <BigTitle style={{ margin: '0 0.4em' }}>DEMO!</BigTitle>
    </Wrapper>
  ))
  .add('Inception', () => (
    <Wrapper>
      <Image src={inception} alt="Inception" width={780} height={500} />
    </Wrapper>
  ))
  .add('DEMO with blink', () => (
    <Wrapper>
      <BigTitle style={{ margin: '0 0.4em' }} blink>
        DEMO!
      </BigTitle>
    </Wrapper>
  ))
  .add('Getting started', () => (
    <Wrapper>
      <Image
        src={gettingStarted}
        alt="Getting started : npx -p @storybook/cli sb init"
        width={780}
        height={250}
      />
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

const BigTitle = ({ children, blink, ...props }) => (
  <Text
    size="120px"
    weight={800}
    color={blink ? useBlink() : COLORS.BLACK}
    {...props}
  >
    {children}
  </Text>
);
