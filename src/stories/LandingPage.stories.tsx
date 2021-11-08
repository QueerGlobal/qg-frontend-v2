import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import LandingPage from '../components/landingPage/LandingPage';

export default {
  title: 'Landing Page',
  component: LandingPage,
};

const Template: Story<ComponentProps<typeof LandingPage>> = (args) => (
  <LandingPage {...args} />
);

export const LandingPageMain = Template.bind({});
LandingPageMain.args = {};
