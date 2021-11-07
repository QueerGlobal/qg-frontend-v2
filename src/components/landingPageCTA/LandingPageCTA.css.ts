import styled from 'styled-components';
import colors from '../../styles/colors';

export const LandingPageWrapperCTA = styled.div`
  background-color: ${colors.WHITE};
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 95%;
`;

export const Header = styled.h1`
  color: ${colors.PRIMARY};
  font-family: openSans, sans-serif;
  font-size: 24px;
  text-transform: uppercase;
`;
export const SubHeader1 = styled.h2`
  color: ${colors.BLACK};
  font-family: openSans, sans-serif;
  margin-bottom: -20px;
  text-transform: uppercase;
  text-align: center;
`;

export const SubHeader2 = styled.h2`
  color: ${colors.BLACK};
  font-family: openSans, sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: -5px;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 2px solid ${colors.PRIMARY};
`;

export const SubHeader3 = styled.h2`
  color: ${colors.BLACK};
  font-family: openSans, sans-serif;
  text-transform: uppercase;
  text-align: center;
`;

export const Span = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Birthstone+Bounce:wght@400;500&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  color: ${colors.UNICORN};
  font-family: openSans, sans-serif;
  font-size: 24px;
  font-weight: 800;
  line-height: 20px;
  display: inline-block;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 0auto; */
`;

export const Image = styled.h2`
  background-color: hotpink;
  flex-direction: row;
  margin: 25px 5px;
  height: 210px;
  width: 45%;
`;

export const Text = styled.p`
  font-family: openSans, sans-serif;
  font-size: 15px;
  color: ${colors.BLACK};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
