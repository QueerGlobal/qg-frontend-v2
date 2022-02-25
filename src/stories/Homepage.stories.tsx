import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import Homepage from '../components/homepage/Homepage';

export default {
  title: 'Homepage',
  component: Homepage,
};

const Template: Story<ComponentProps<typeof Homepage>> = (args) => (
  <Homepage {...args} />
);

export const HomePage = Template.bind({});
HomePage.args = {};
