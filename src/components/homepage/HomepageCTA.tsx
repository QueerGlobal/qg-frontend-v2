import React, { FC } from 'react';

import Button from '../common/button/Button';
import {
  HomepageCTAWrapper,
  Header,
  SubHeader1,
  SubHeader2,
  Span,
  Underline,
  SubHeader3,
  ImageWrapper,
  Image,
  Text,
  ButtonWrapper,
} from './HomepageCTA.css';

const HomepageCTA: FC = () => {
  return (
    <HomepageCTAWrapper>
      <Header>We're Queer Global.</Header>
      <SubHeader1>We Put</SubHeader1>
      <SubHeader2>
        People of <Span>all sizes</Span>
      </SubHeader2>
      <Underline></Underline>
      <SubHeader3>First.</SubHeader3>
      <ImageWrapper>
        <Image>Image goes here</Image>
        <Image>Image goes here</Image>
      </ImageWrapper>
      <Text>
        We support and prioritize the people who are least represented, both
        inside and outside of the rainbow umbrella.
        <br />
        <br />
        We want to give the community a safe, inviting space to confidently be
        themselves, easily find accurate, trusted information, share common
        experiences, and have the ability to support other LGBTQIA+ people and
        businesses in their area.
      </Text>
      <ButtonWrapper>
        <Button label='primary' buttonText='Join our Community' />
      </ButtonWrapper>
    </HomepageCTAWrapper>
  );
};
export default HomepageCTA;
