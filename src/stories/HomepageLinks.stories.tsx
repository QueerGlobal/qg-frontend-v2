import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import HomepageLinks from '../components/homepage/HomepageLinks';

export default {
  title: 'Landing Page Links',
  component: HomepageLinks,
};

const Template: Story<ComponentProps<typeof HomepageLinks>> = (args) => (
  <HomepageLinks {...args} />
);

export const Links = Template.bind({});
Links.args = {};
