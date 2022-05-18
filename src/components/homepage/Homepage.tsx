import React, { FC } from 'react';

import { PageWrapper } from './Homepage.css';
import HomepageCTA from './HomepageCTA';
import HomepageLinks from './HomepageLinks';
import HomepageCTA2 from './HomepageCTA2';

const Homepage: FC = () => {
  return (
    <PageWrapper>
      <HomepageCTA />
      <HomepageLinks />
      <HomepageCTA2 />
    </PageWrapper>
  );
};
export default Homepage;
