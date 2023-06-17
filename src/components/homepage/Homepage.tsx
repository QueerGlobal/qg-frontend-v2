import React, { FC } from 'react';
import { InnerContainer, OuterContainer } from './Homepage.css';
import HomepageContents from '../homepageContents/HomepageContents';
import BackgroundShapes from '../common/home/BackgroundShapes';
import ForegroundShapes from '../common/home/ForegroundShapes';
import HiGreeting from './HiGreeting';
import BottomImages from './BottomImages';
import HomepageStyles from "./HomepageMediaQueries.css";

const Homepage: FC = () => {
  return (
      <OuterContainer>
        <InnerContainer>

      <HomepageStyles />
      <HiGreeting />
      <HomepageContents />
      {/* <ForegroundShapes /> */}
      {/* <BottomImages /> */}
        </InnerContainer>
      </OuterContainer>
  );
};

export default Homepage;
