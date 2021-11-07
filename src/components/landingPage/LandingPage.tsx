import React, { FC } from 'react';

import { PageWrapper } from './LandingPage.css';
import LandingPageCTA from '../landingPageCTA/LandingPageCTA';
import LandingPageLinks from '../landingPageLinks/LandingPageLinks';
import LandingPageCTA2 from '../landingPageCTA2/LandingPageCTA2';

const LandingPage: FC = () => {
  return (
    <PageWrapper>
        <LandingPageCTA />
        <LandingPageLinks />
        <LandingPageCTA2 />
    </PageWrapper>
  );
};
export default LandingPage;
