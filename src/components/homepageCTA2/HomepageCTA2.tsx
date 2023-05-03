import React, {FC} from 'react';

import Button from '../common/button/Button';
import {
  HomepageCTA2Wrapper,
  Header,
  SubHeader,
  SubHeader1,
  SubHeader2,
  SubHeader3,
  ImageWrapper1,
  ImageWrapper2,
  Image,
  Image1,
  Image2,
  Span,
  ButtonWrapper,
  Content,
} from './HomepageCTA2.css'

const HomepageCTA2: FC = () => {
  return (
    <HomepageCTA2Wrapper>
      <ImageWrapper1>
        <Image>Image goes here</Image>
      </ImageWrapper1>
      <Header>Your face is lovely, <br />
              can we use it?
      </Header>
      <Content>
        We believe every face, every body, and every differently-abled or colored human is beautiful just as they are, and are worthy of representation as such. <br /><br />
      
        For that reason, all the people you see on our site are real Queer Global members. If you'd like to be a face of QG, send us your photo! <br /><br />
        
        We'd be happy to have you!
      </Content>
      <ButtonWrapper>
        <Button label="primary" buttonText='Send us your photo' />
      </ButtonWrapper>
      <SubHeader>A place for</SubHeader>
      <SubHeader1><Span>you</Span>,</SubHeader1>
      <SubHeader2>you beautiful</SubHeader2>
      <SubHeader3>human.</SubHeader3>

      <ImageWrapper2>
        <Image1>Image goes here</Image1>
        <Image2>Image goes here</Image2>
      </ImageWrapper2>
    </HomepageCTA2Wrapper>
  );
}

export default HomepageCTA2;