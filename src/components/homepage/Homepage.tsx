import React, { FC } from 'react';
import { PageWrapper } from './Homepage.css';
import HomepageContents from '../homepageContents/HomepageContents';
import BackgroundShapes from '../common/home/BackgroundShapes';
import ForegroundShapes from '../common/home/ForegroundShapes';
import HiGreeting from './HiGreeting';
import BottomImages from './BottomImages';
import HomepageStyles from "./HomepageMediaQueries.css";

const Homepage: FC = () => {
  return (
    <PageWrapper className="pageWrapper">
      <HomepageStyles />
      <BackgroundShapes />
      <HiGreeting />
      <HomepageContents />
      <ForegroundShapes />
      <BottomImages />
    </PageWrapper>
  );
};

export default Homepage;
