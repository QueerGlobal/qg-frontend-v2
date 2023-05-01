import styled from 'styled-components';
import colors from '../../styles/colors';
import Button from "../common/button/Button";

/* #FFFFFF for white panels and CONTACT text */
/* #655DC600 for white gradient 1 */
/* #FFFFFF00 for white gradient 2 */

/* #655DC6 for medium purple */
/* #655DC6CC for light purple */

/* #1F5EA9 for dark blue */
/* #2A7DE1 for medium blue */
/* #54C0E8 for medium cyan/ring */

/* #1F1F1F for dark gray bg */
/* #1F1F1F for dark gray text */
/* #B5B5B5 for gray text boxes */
/* #898C8E for gray text placeholder */
/* #00000029 for gray button borders */
/* #E0E0E0 for gray FAQ vectors */

/* #231F20 for black circle */
/* #000000 for black rings */
/* #161616 for black FAQ text */

/* #E50695 for pink donate button */

export const ContactWrapper = styled.div`
 background-color: ${colors.WHITE};
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 15px;
 width: 95%;
`;

export const ContactMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 10%;
`;

export const WhiteBGSectionLeft = styled.div`
  background-color: white;
  display: grid;
  justify-content: center;
  justify-items: center;
  text-align: center;
`;

export const WhiteBGSectionRight = styled.div`
  background-color: white;
  display: grid;
  justify-content: center;
  justify-items: center;
  text-align: center;
`;

export const PurpleSpan = styled.span`
  color: #655DC6;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 20rem;
  width: 50rem;
  padding: 1rem;
  /* display: grid; */
  /* justify-content: center;
    justify-items: center; */
`;

export const TextArea = styled.textarea`
  height: 99%;
  width: 99%;
  border: 3px inset;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* margin-bottom: 40px; */
  gap: 5rem;
  width: 70%;
`;

export const SendMessageButton = styled(Button)`
/* Layout Properties */
/* top: 2390px;
left: 1086px;
width: 278px;
height: 55px; */
/* UI Properties */
background: transparent linear-gradient(90deg, var(--unnamed-color-54c0e8) 0%, var(--unnamed-color-2a7de1) 100%) 0% 0% no-repeat padding-box;
background: transparent linear-gradient(90deg, #54C0E8 0%, #2A7DE1 100%) 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
opacity: 1;
`
