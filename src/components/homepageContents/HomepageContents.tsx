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
  StandingMan,
  MiddleContent,
  LowerBody,
  LaughingMan,
} from './HomepageContents.css';
import topLeftImg from '../../assets/home/nathana-reboucas-9ltd8_dh_JM-unsplash.jpg';
import topRightImg from '../../assets/home/GettyImages-1304819195.jpg';
import HomepageLinks from '../homepageLinks/HomepageLinks';
import HomepageContents2 from '../homepageContents2/HomepageContents2';
import braidedGirl from '../../assets/nathana-reboucas-9ltd8_dh_JM-unsplash.jpg'
import { Button } from '../common/topnav/TopNav.css';
import Carousel from '../homepage/Carousel';
import { CarouselImg1, CarouselImg2, CarouselImg3, CarouselImg4, CarouselImg5 } from '../homepage/Carousel.css';
import pic1 from '../../assets/GettyImages-1284545860.jpg'
import pic2 from '../../assets/GettyImages-1304819195.jpg'
import pic3 from '../../assets/nathana-reboucas-9ltd8_dh_JM-unsplash.jpg'
import pic4 from '../../assets/middle_image.jpg'
import pic5 from '../../assets/Mask Group 16.png'



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
        We support and prioritize the people who are least represented, both inside and outside of the rainbow umbrella.<br /><br />
        We want to give the community a safe, inviting space to confidently be themselves, easily find accurate, trusted information, share common experiences, and have the ability to support other LGBTQIA+ people and businesses in their area.
        </Message>
        <Button $backgroundColor='#655dc6' $width='400px'>
          Join Our community
        </Button>
        </CommunityBlock>
        <BraidedGirl />
      </UpperBody>
      <MiddleBody>
        <StandingMan />
        <MiddleContent>
          <h1
          style={{fontSize: '8rem', textTransform: 'uppercase' }}
          >Find what you need</h1>
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>

          <Button $backgroundColor='#655dc6' $width='400px'>Resources</Button>
          <Button $backgroundColor='#655dc6' $width='400px'>Businesses</Button>
          <Button $backgroundColor='#655dc6' $width='400px'>Events</Button>
          <Button style={{textTransform:'uppercase'}} $backgroundColor='#d63384' $width='400px'>Support us</Button>
          </div>
        </MiddleContent>
      </MiddleBody>
      <LowerBody>
          <div
          style={{width: '100%', display: 'flex', gap: '20px'}}
          >
            <div
            style={{display: 'flex', gap: '20px', maxWidth: '45%', flexDirection: 'column'}}
            >
              <h1
              style={{fontSize: '3.9rem', textTransform: 'uppercase'}}
              >
                your face is lovely, can we use it?
              </h1>
              <p
              style={{fontSize: '27px', maxWidth: '80%'}}
              >
              We believe that every face, every body, and every differently-abled or colored human is beautiful just as they are, and are worthy of representation as such.<br/><br/>
              For that reason, all the people you see on our site are real Queer Global members. If you’d like to be a face of QG, send us your photo! We’d be happy to have you!
              </p>
              <Button $backgroundColor='#655dc6' $width='400px'>Send us your photo</Button>

            </div>
            <LaughingMan />
          </div>
          <h1
          style={{textTransform: 'uppercase', fontSize: '3.9rem', textAlign: 'center', marginTop: '50px'}}
          >
            A place for 
            <span
  
  style={{color: '#d63384', fontSize: '6rem', textTransform: 'lowercase', 
  fontFamily: 'Kaushan Script, cursive'
}}
            > you, </span>
            you beautiful human.
          </h1>
      </LowerBody>
      <Carousel speed={20} direction='right'>

        <CarouselImg1 />
        <CarouselImg2 />
        <CarouselImg3 />
        <CarouselImg4 />
        <CarouselImg5 />
        

      </Carousel>
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