import styled from 'styled-components';
import colors from "../../styles/colors";

/* PRIMARY: #655DC6 for purple */
/* COTTON_CANDY: #F5ACB8 for pink */
/* #48ADE5 for blue circle on home page */

export const WhiteBGSection = styled.div`
  background-color: ${colors.WHITE};
`;

export const DarkGreyBGSection = styled.div`
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
`;

export const AboutMain = styled.main`
  display: flex; 
  flex-direction: column; 
  margin: 10%;
`;

export const PurpleSpan = styled.span`
  color: ${colors.PRIMARY};
`;

export const DnDImg = styled.img`
display: block;
width: 75%;
height: auto;
`;