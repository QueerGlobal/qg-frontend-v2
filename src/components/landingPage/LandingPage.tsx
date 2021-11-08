import React, { FC } from 'react';

import { PageWrapper } from './LandingPage.css';
import LandingPageCTA from '../landingPageCTA/LandingPageCTA';
import LandingPageLinks from '../landingPageLinks/LandingPageLinks';
const LandingPage: FC = () => {
  return (
    <PageWrapper>
        <LandingPageCTA />
        <LandingPageLinks />
    </PageWrapper>
  );
};
export default LandingPage;
