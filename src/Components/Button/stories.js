import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Button from '../../Components/Button';

storiesOf('Components/Button', module)
    .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
    .addDecorator(withInfo)
    .add('Default', () => <Button>Click me</Button>)
    .add('With onClick', () => <Button onClick={action('button-click')}>Click me</Button>);;

const StoryWrapper = styled.div`
    padding: 10px;
`;