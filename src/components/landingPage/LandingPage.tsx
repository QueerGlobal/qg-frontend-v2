import React, { FC } from 'react';

import { LandingPageWrapper, PageWrapper } from './LandingPage.css';
import LandingPageCTA from '../landingPageCTA/LandingPageCTA';

const LandingPage: FC = () => {
  return (
    <PageWrapper>
      <LandingPageWrapper>
        <LandingPageCTA />
      </LandingPageWrapper>
    </PageWrapper>
  );
};
export default LandingPage;
