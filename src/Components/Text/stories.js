import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Text from '../../Components/Text';

storiesOf('Components/Text', module)
    .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
    .addDecorator(withInfo)
    .add('Default', () => <Text>Hello World</Text>);

const StoryWrapper = styled.div`
    padding: 10px;
`;