import styled from 'styled-components';
import colors from '../../styles/colors';

export const HomepageCTAWrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0px 10px #00000040;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  padding: 16px;
  width: 95%;
`;

export const Header = styled.h1`
  color: #655dc6;
  font-size: 1.5rem;
  font-weight: 800;
  padding-top: 16px;
  text-transform: uppercase;
`;
export const SubHeader1 = styled.h2`
  color: #1f1f1f;
  font-weight: 800;
  padding-top: 16px;
  text-transform: uppercase;
  text-align: center;
  margin: 15px 0 0;
`;

export const SubHeader2 = styled.h2`
  color: #1f1f1f;
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  line-height: 20px;
  padding-top: 15px;
`;

export const Underline = styled.hr`
  color: ${colors.PRIMARY};
  margin: 0 auto;
  margin-top: -10px;
  margin-bottom: 10px;
  width: 30ch;
  height: 100px; /*not sure why this doesn't work*/
`;

export const Span = styled.h2`
  color: ${colors.UNICORN};
  font-size: 2rem;
  font-weight: 800;
  display: inline-block;
`;
export const SubHeader3 = styled.h2`
  color: #1f1f1f;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;
`;

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-columns: 50% 50%;
  gap: 10px;
`;

export const Image = styled.h2`
  background-color: hotpink;
  margin: 30px 0;
  height: 210px;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #1f1f1f;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
