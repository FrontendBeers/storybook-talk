import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import Button from '.';

storiesOf('Components/Button', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .addDecorator(withInfo)
  .addDecorator(withA11y)
  .add('Default', () => <Button>Click me</Button>)
  .add('With onClick', () => (
    <Button onClick={action('button-click')}>Click me</Button>
  ));

const StoryWrapper = styled.div`
  padding: 20px;
`;
