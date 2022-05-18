import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import HomepageCTA2 from '../components/homepage/HomepageCTA2';

export default {
  title: 'Homepage CTA2',
  component: HomepageCTA2,
};

const Template: Story<ComponentProps<typeof HomepageCTA2>> = (args) => (
  <HomepageCTA2 {...args} />
);

export const HomePageCTA2 = Template.bind({});
HomePageCTA2.args = {};
