import React, { FC } from 'react';
import Button from '../common/button/Button';
import {
  HomepageCTAWrapper,
  Header,
  SubHeader1,
  SubHeader2,
  PinkSpan,
  SubHeader3,
  ImageWrapper,
  Image,
  Text,
  ButtonWrapper,
} from './HomepageCTA.css';
import placeholder from '../../assets/header/QG-Logo-V3-White-Transparent-PNG-1.png';


const HomepageCTA: FC = () => {
  return (
    <HomepageCTAWrapper>
      <Header>We're Queer Global.</Header>
      <SubHeader1>We Put</SubHeader1>
      <SubHeader2>People of {' '}
        <PinkSpan>all sizes</PinkSpan>
      </SubHeader2>
      <SubHeader3>First.</SubHeader3>
      <ImageWrapper>
        <Image src={placeholder} alt="Smiling Face" />
        <Image src={placeholder} alt="Smiling and Standing Person" />
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
