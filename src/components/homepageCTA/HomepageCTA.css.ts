import styled from 'styled-components';
import colors from '../../styles/colors';

/** TODO - Figure out meaning behind the box-shadow color */
export const HomepageCTAWrapper = styled.div`
  background-color: ${colors.WHITE};
  box-shadow: 0px 0px 10px #00000040;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  padding: 15px;
  width: 95%;
`;

export const Header = styled.h1`
  color: ${colors.PRIMARY};
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const SubHeader1 = styled.h2`
  color: ${colors.BLACK};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: 15px 0 0;
`;

export const SubHeader2 = styled.h2`
  color: ${colors.BLACK};
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  text-decoration: underline ${colors.PRIMARY};
  line-height: 20px;
  padding-top: 15px;
`;

export const SubHeader3 = styled.h2`
  color: ${colors.BLACK};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0auto;
`;

// TODO - Is hotpink supposed to be colors.UNICORN?
export const Image = styled.h2`
  background-color: hotpink;
  flex-direction: row;
  margin: 25px 5px;
  height: 210px;
  width: 45%;
`;


export const Text = styled.p`
  font-size: 14px;
  color: ${colors.BLACK};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
