import React, { FC } from 'react';

import { PageWrapper } from './LandingPage.css';
import LandingPageCTA from '../landingPageCTA/LandingPageCTA';

const LandingPage: FC = () => {
  return (
    <PageWrapper>
        <LandingPageCTA />
    </PageWrapper>
  );
};
export default LandingPage;
