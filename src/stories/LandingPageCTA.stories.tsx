import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import LandingPageCTA from '../components/landingPageCTA/LandingPageCTA';

export default {
  title: 'Landing Page CTA',
  component: LandingPageCTA,
};

const Template: Story<ComponentProps<typeof LandingPageCTA>> = (args) => (
  <LandingPageCTA {...args} />
);

export const CTA = Template.bind({});
CTA.args = {};
