import React, { FC } from 'react';
import { PageWrapper } from './Homepage.css';
import HomepageContents from '../homepageContents/HomepageContents';
import BackgroundShapes from '../common/home/BackgroundShapes';
import ForegroundShapes from '../common/home/ForegroundShapes';
import HiGreeting from './HiGreeting';
import BottomImages from './BottomImages';

const Homepage: FC = () => {
  return (
    <PageWrapper>
      <BackgroundShapes />
      <HiGreeting />
      <HomepageContents />
      <ForegroundShapes />
      <BottomImages />
    </PageWrapper>
  );
};

export default Homepage;
