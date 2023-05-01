import styled from 'styled-components';
import colors from '../../styles/colors';

export const HomepageCTA2Wrapper = styled.div`
 background-color: ${colors.WHITE};
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 15px;
 width: 95%;
`;

export const Header = styled.h1`
  color: ${colors.BLACK};
  font-size: 20px;
  font-weight: 800;
  line-height: 1.3;
  text-transform: uppercase;
  padding: 10px;
`;

export const SubHeader = styled.h2`
  color: ${colors.BLACK};
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0 -5px -40px;
`;

export const Span = styled.h2`
  color: ${colors.UNICORN};
  font-size: 48px;
  font-weight: 800;
  margin-left: -35%;
  margin-bottom: -5px;
  display: inline-block;
`;

export const SubHeader1 = styled.h2`
  color: ${colors.BLACK};
  font-size: 24px;
  font-weight: bold;
`;

export const SubHeader2 = styled.h2`
  color: ${colors.BLACK};
  font-size: 24px;
  font-weight: bold;
  margin-left: 15%;
`;

export const SubHeader3 = styled.h2`
  color: ${colors.BLACK};
  font-size: 24px;
  font-weight: bold;
  margin-left: 20%;
`;

export const ImageWrapper1 = styled.div`
  max-width: 100%;
  margin-top: 30px;
  margin-bottom: 25px;
`;

export const Image = styled.div`
  background-color: firebrick;
  height: 190px; /*this will change to % once we have the images*/
  width: 300px;
`;

export const Content = styled.p`
  padding: 10px;
`;

export const ImageWrapper2 = styled.div`
  display: grid;
  grid-template-columns: 90% 85% repeat(2, 1fr);
  height: 160px;
  max-width: 100%;
  margin-top: 30px;
  margin-bottom: 25px;
  gap: 10px;
`;

export const Image1 = styled.div`
  background-color: firebrick;
  margin-left: -120px;
  height: 160px; /*this will change to % once we have the images*/
`;

export const Image2 = styled.div`
  background-color: firebrick;
  height: 160px; /*this will change to % once we have the images*/
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${colors.BLACK};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  width: 70%;
`;