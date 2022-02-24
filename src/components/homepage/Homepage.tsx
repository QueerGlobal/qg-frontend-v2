import React, { FC } from 'react';

import { PageWrapper } from './Homepage.css';
import HomepageCTA from '../homepageCTA/HomepageCTA';
import HomepageLinks from '../homepageLinks/HomepageLinks';
import HomepageCTA2 from '../homepageCTA2/HomepageCTA2';
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
