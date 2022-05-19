import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import AboutComponent from '../components/about/About';

export default {
    title: 'About',
    component: AboutComponent,
};

const Template: Story<ComponentProps <typeof AboutComponent>> = (args) => (
    <AboutComponent {...args} />
);

export const About = Template.bind({});
About.args = {};