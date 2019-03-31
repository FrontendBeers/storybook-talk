import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import Text from '../../Components/Text';
import storybookLogo from '../../../assets/storybook.png';
import storybookPresentation from '../../../assets/storybook-presentation.png';
import storybookLife from '../../../assets/storybook-life.png';
import storybookBuildComponents from '../../../assets/storybook-build-components.png';
import storybookStories from '../../../assets/storybook-stories.png';
import storybookAddons from '../../../assets/storybook-addons.png';
import Image from '../../Components/Image';
import { Highlight } from '../../Utils/Highlight';

storiesOf('Slides/Storybook', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('Storybook', () => (
    <Wrapper>
      <Image src={storybookLogo} alt="Storybook" width={220} height={220} />
      <BigTitle>Storybook</BigTitle>
    </Wrapper>
  ))
  .add('Presentation', () => (
    <Wrapper>
      <Image
        src={storybookPresentation}
        alt="Storybook's presentation"
        width={1500}
        height={680}
      />
    </Wrapper>
  ))
  .add('Storybook lives alongside your app', () => (
    <Wrapper>
      <Title>
        Storybook lives <Highlight>alongside</Highlight> your app
      </Title>
      <Image
        src={storybookLife}
        alt="Storybook lives alongside your app"
        width={1300}
        height={410}
        style={{ marginTop: 50 }}
      />
    </Wrapper>
  ))
  .add('Build components and use cases in isolation', () => (
    <Wrapper>
      <Title>
        Build components and use cases in <Highlight>isolation</Highlight>
      </Title>
      <Image
        src={storybookBuildComponents}
        alt="Build components and use cases in isolation"
        width={1300}
        height={610}
        style={{ marginTop: 50 }}
      />
    </Wrapper>
  ))
  .add('Save use cases as stories', () => (
    <Wrapper>
      <Title>
        Save <Highlight>use cases</Highlight> as stories
      </Title>
      <Image
        src={storybookStories}
        alt="Save use cases as stories"
        width={1320}
        height={600}
        style={{ marginTop: 50 }}
      />
    </Wrapper>
  ))
  .add('Customize functionality with addons', () => (
    <Wrapper>
      <Title>
        Customize functionality with <Highlight>addons</Highlight>
      </Title>
      <Image
        src={storybookAddons}
        alt="Customize functionality with addons"
        width={1300}
        height={580}
        style={{ marginTop: 50 }}
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

const BigTitle = styled(Text).attrs({ size: '120px', weight: 800 })`
  margin: 0.3em 0;
`;
