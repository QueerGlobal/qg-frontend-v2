import React, { FC } from 'react';

import Button from '../common/button/Button';
import {
  LandingPageCTA2Wrapper,
  Header,
  SubHeader,
  SubHeader1,
  SubHeader2,
  SubHeader3,  
  ImageWrapper,
  Image,
  Image1,
  Image2,
  Span,
  ButtonWrapper,
} from './LandingPageCTA2.css';

const LandingPageCTA2: FC = () => {
  return (
    <LandingPageCTA2Wrapper>
      <ImageWrapper>
        <Image>Image goes here</Image>
      </ImageWrapper>
      <Header>You're face is lovely, <br />
          can we use it?
      </Header>
      
      <ButtonWrapper>
        <Button label='primary' buttonText='send us your photo' />
      </ButtonWrapper>
      <SubHeader>A place for</SubHeader>
      <SubHeader1><Span>you</Span>,</SubHeader1>
      <SubHeader2>you beautiful</SubHeader2>
      <SubHeader3>human.</SubHeader3>

      <ImageWrapper>
        <Image1>Image goes here</Image1>
        <Image2>Image goes here</Image2>
      </ImageWrapper>
    </LandingPageCTA2Wrapper>
  );
};
export default LandingPageCTA2;
