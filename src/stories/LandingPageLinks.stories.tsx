import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import LandingPageLinks from '../components/landingPageLinks/LandingPageLinks';

export default {
    title: 'Landing Page Links',
    component: LandingPageLinks,
};

const Template: Story<ComponentProps <typeof LandingPageLinks>> = (args) => (
    <LandingPageLinks {...args} />
);

export const Links = Template.bind({});
Links.args = {};