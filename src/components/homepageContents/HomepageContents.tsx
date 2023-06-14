/* eslint-disable */
import React, { FC } from 'react';
import {
  HomepageContentsWrapper,
  Header1,

  LGBTQIA,
  Header,
  UpperBody,
  Message,
  CommunityBlock,
  BraidedGirl,
  MiddleBody,
} from './HomepageContents.css';
import topLeftImg from '../../assets/home/nathana-reboucas-9ltd8_dh_JM-unsplash.jpg';
import topRightImg from '../../assets/home/GettyImages-1304819195.jpg';
import HomepageLinks from '../homepageLinks/HomepageLinks';
import HomepageContents2 from '../homepageContents2/HomepageContents2';
import braidedGirl from '../../assets/nathana-reboucas-9ltd8_dh_JM-unsplash.jpg'
import { Button } from '../common/topnav/TopNav.css';



const HomepageContents: FC = () => {
  return (
    <HomepageContentsWrapper>
      <Header>


      <Header1>We put </Header1>
        <LGBTQIA>&nbsp;&nbsp;LGBTQIA+&nbsp;&nbsp; </LGBTQIA>
        <Header1>First.</Header1>
      </Header>
      <UpperBody>
        <CommunityBlock>


        <Message>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took <br /><br />
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Message>
        <Button $backgroundColor='#655dc6' $width='400px'>
          Join Our community
        </Button>
        </CommunityBlock>
        <BraidedGirl />
      </UpperBody>
      <MiddleBody>

      </MiddleBody>
    </HomepageContentsWrapper>
  );
};
export default HomepageContents;

{/* <Header>We're Queer Global.</Header>
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
<HomepageContents2 /> */}