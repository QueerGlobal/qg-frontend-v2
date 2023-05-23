/* eslint-disable */
import React, { FC } from 'react';
import Button from '../common/button/Button';
import {
  HomepageContentsWrapper,
  Header,
  SubHeader1,
  SubHeader2,
  PinkSpan,
  SubHeader3,
  ImageWrapper,
  Image,
  Text,
  ButtonWrapper,
} from './HomepageContents.css';
import topLeftImg from '../../assets/home/nathana-reboucas-9ltd8_dh_JM-unsplash.jpg';
import topRightImg from '../../assets/home/GettyImages-1304819195.jpg';
import HomepageLinks from '../homepageLinks/HomepageLinks';
import HomepageContents2 from '../homepageContents2/HomepageContents2';


const HomepageContents: FC = () => {
  return (
    <HomepageContentsWrapper>
      <Header>We're Queer Global.</Header>
      <SubHeader1>We Put</SubHeader1>
      <SubHeader2>People of {' '}
        <PinkSpan>all sizes</PinkSpan>
      </SubHeader2>
      <SubHeader3>First.</SubHeader3>
      <ImageWrapper>
        <Image src={topLeftImg} alt="Smiling Face" />
        <Image src={topRightImg} alt="Smiling and Standing Person" />
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
      <HomepageLinks />
      <HomepageContents2 />
    </HomepageContentsWrapper>
  );
};
export default HomepageContents;
