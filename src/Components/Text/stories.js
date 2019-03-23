import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, color } from '@storybook/addon-knobs';
import Text from '../../Components/Text';
import COLORS from '../../Utils/Colors';

storiesOf('Components/Text', module)
    .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add('Default', () => <Text>Hello World</Text>)
    .add('With knobs', () => {
        const label = text('Label', 'Hello World');
        const color = select('Color', COLORS, COLORS.BLACK);
        return <Text color={color} size='80px'>{label}</Text>;
    })
    .add('With color picker', () => <Text color={color('Color', COLORS.BLACK)} size='80px'>Hello World</Text>);

const StoryWrapper = styled.div`
    padding: 20px;
`;