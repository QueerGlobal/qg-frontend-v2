import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import HomepageLinks from '../components/homepageLinks/HomepageLinks';

export default {
    title: 'Landing Page Links',
    component: HomepageLinks,
};

const Template: Story<ComponentProps <typeof HomepageLinks>> = (args) => (
    <HomepageLinks {...args} />
);

export const Links = Template.bind({});
Links.args = {};