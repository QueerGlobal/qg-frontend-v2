import styled from 'styled-components';
import colors from '../../styles/colors';

export const LandingPageCTA2Wrapper = styled.div`
  background-color: ${colors.WHITE};
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 15px;
  width: 95%;
`;

export const Header = styled.h1`
  font-family: openSans, sans-serif;
  color: ${colors.BLACK};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const SubHeader = styled.h2`
  font-family: openSans, sans-serif;
  color: ${colors.BLACK};
  font-size: 24px;
  font-weight: 500;
  margin: 20px 0 -45px -50px;
  text-align: center;
`;

export const Span = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Birthstone+Bounce:wght@400;500&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  /* need to fix this scripted font */
  color: ${colors.UNICORN};
  font-family: openSans;
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 0 -80px;
  text-align: center;
  display: inline-block;
`;

export const SubHeader1 = styled.h2`
  color: ${colors.BLACK};
  font-family: openSans;
  font-size: 48px;
  font-weight: 800;
  text-align: center;
`;

export const SubHeader2 = styled.h2`
  font-family: openSans, sans-serif;
  color: ${colors.BLACK};
  font-size: 24px;
  font-weight: 500;
  margin: -35px 0 0 20px;
  text-align: center;
`;

export const SubHeader3 = styled.h2`
  font-family: openSans, sans-serif;
  color: ${colors.BLACK};
  font-size: 24px;
  font-weight: 500;
  margin: 10px 0 40px 40px;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin: 30px 0 25px 0;
  justify-content: center;
`;

export const Image = styled.h2`
  background-color: hotpink;
  flex-direction: row;
  margin: 25px 10px;
  height: 190px;
  width: 280px;
`;

export const Image1 = styled.h2`
  background-color: hotpink;
  flex-direction: row;
  margin: 0 5px 0 -49px;
  height: 160px;
  width: 224px;
`;

export const Image2 = styled.h2`
  background-color: hotpink;
  flex-direction: row;
  margin: 0 -50px 0 5px;
  height: 160px;
  width: 142px;
`;
export const Text = styled.p`
  font-size: 14px;
  color: ${colors.BLACK};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
