import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import LandingPageCTA2 from '../components/landingPageCTA2/LandingPageCTA2';

export default {
  title: 'Landing Page CTA2',
  component: LandingPageCTA2,
};

const Template: Story<ComponentProps<typeof LandingPageCTA2>> = (args) => (
  <LandingPageCTA2 {...args} />
);

export const CTA2 = Template.bind({});
CTA2.args = {};
