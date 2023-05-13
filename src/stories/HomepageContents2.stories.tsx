import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import HomepageContents2 from '../components/homepageContents2/HomepageContents2';

export default {
  title: 'Homepage CTA2',
  component: HomepageContents2,
};

const Template: Story<ComponentProps<typeof HomepageContents2>> = (args) => (
  <HomepageContents2 {...args} />
);

export const HomePageContents2 = Template.bind({});
HomePageContents2.args = {};
