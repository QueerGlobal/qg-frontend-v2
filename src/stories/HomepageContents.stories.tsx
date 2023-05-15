import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import HomepageContents from '../components/homepageContents/HomepageContents';

export default {
  title: 'Homepage CTA',
  component: HomepageContents,
};

const Template: Story<ComponentProps<typeof HomepageContents>> = (args) => (
  <HomepageContents {...args} />
);

export const HomePageContents = Template.bind({});
HomePageContents.args = {};
