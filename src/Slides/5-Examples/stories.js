import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import airbnb from '../../../assets/airbnb.png';
import salesforce from '../../../assets/salesforce.png';
import auth0 from '../../../assets/auth0.png';
import github from '../../../assets/github.png';
import { Highlight } from '../../Utils/Highlight';

storiesOf('Slides/Examples', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('Deployment', () => (
    <Wrapper>
      <Title>
        We can <Highlight>build</Highlight> it statically &{' '}
        <Highlight>deploy</Highlight> it easily
      </Title>
    </Wrapper>
  ))
  .add('Some great examples', () => (
    <Wrapper>
      <Title style={{ marginBottom: '80px' }}>
        Some great <Highlight>examples</Highlight>
      </Title>
      <FlexWrapper>
        <Link href="https://airbnb.io/react-dates/" target="_blank">
          <Image
            src={airbnb}
            alt="airbnb react-dates"
            width={270}
            height={80}
            style={{ marginTop: 50 }}
          />
        </Link>
        <Link
          href="https://mashmatrix.github.io/react-lightning-design-system/"
          target="_blank"
        >
          <Image
            src={salesforce}
            alt="salesforce react design system"
            width={270}
            height={180}
            style={{ marginTop: 50 }}
          />
        </Link>
        <Link href="https://auth0-cosmos.now.sh/sandbox/" target="_blank">
          <Image
            src={auth0}
            alt="auth0 cosmos"
            width={270}
            height={100}
            style={{ marginTop: 50 }}
          />
        </Link>
        <Link href="https://primer.github.io/storybook/" target="_blank">
          <Image
            src={github}
            alt="github primer"
            width={270}
            height={110}
            style={{ marginTop: 50 }}
          />
        </Link>
      </FlexWrapper>
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

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Link = styled.a`
  transition: all 0.2s ease;
  transition-property: transform;

  &:hover {
    transform: translate(0, -10px);
  }
`;

const Title = styled(Text).attrs({ size: '70px', weight: 800 })`
  margin: 0.3em 0;
`;
