import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import HomepageCTA from '../components/homepageCTA/HomepageCTA';

export default {
  title: 'Homepage CTA',
  component: HomepageCTA,
};

const Template: Story<ComponentProps<typeof HomepageCTA>> = (args) => (
  <HomepageCTA {...args} />
);

export const HomePageCTA = Template.bind({});
HomePageCTA.args = {};
