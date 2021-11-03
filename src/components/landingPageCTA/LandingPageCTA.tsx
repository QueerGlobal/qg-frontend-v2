import React, { FC } from 'react';

import {
  LandingPageWrapperCTA,
  Header,
  PageWrapper,
} from './LandingPageCTA.css';

const LandingPageCTA: FC = () => {
  return (
    <PageWrapper>
      <LandingPageWrapperCTA>
        <Header>We're Queer Global.</Header>
      </LandingPageWrapperCTA>
    </PageWrapper>
  );
};
export default LandingPageCTA;
