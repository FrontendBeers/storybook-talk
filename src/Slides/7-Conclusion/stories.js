import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Text from '../../Components/Text';
import storybookLogo from '../../../assets/storybook.png';
import Image from '../../Components/Image';
import { useBlink } from '../../Utils/CustomHooks';
import COLORS from '../../Utils/Colors';

storiesOf('Slides/Conclusion', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .addDecorator(withKnobs)
  .add('Storybook', () => (
    <Wrapper>
      <Image src={storybookLogo} alt="Storybook" width={160} height={160} />
      <BigTitle style={{ margin: '24px 0' }}>Storybook</BigTitle>
      <Subtitle>
        The playground you need for your UI components!{' '}
        <span role="img" aria-label="tada">
          🎨
        </span>
      </Subtitle>
    </Wrapper>
  ))
  .add('Thanks!', () => (
    <Wrapper>
      <Image src={storybookLogo} alt="Storybook" width={160} height={160} />
      <BigTitle style={{ margin: '24px 0' }} blink={boolean('blink', true)}>
        Thanks!
      </BigTitle>
      <Subtitle style={{ fontSize: '26px' }}>
        Slides{"'"} source code:{' '}
        <a
          href="https://github.com/ReactBeerLille/storybook-talk"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/ReactBeerLille/storybook-talk
        </a>
      </Subtitle>
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

const Subtitle = styled(Text).attrs({ size: '42px', weight: 500 })``;

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
