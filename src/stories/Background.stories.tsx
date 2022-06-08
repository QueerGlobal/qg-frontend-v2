import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import Background from '../components/common/background/Background';

export default {
    title: 'Background',
    component: Background,
};

const Template: Story<ComponentProps <typeof Background>> = (args) => (
    <Background {...args} />
);

export const BG = Template.bind({});
BG.args = {};