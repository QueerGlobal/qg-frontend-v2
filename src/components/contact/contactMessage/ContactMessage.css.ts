import styled from 'styled-components';
import colors from '../../../styles/colors';
import Button from "../../common/button/Button";
import { ButtonWrapperProps } from '../../common/button/Button.css';

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


/*
   ***************************************
  *************** PANELS ******************
   ***************************************
*/

export const PanelBox = styled.div`

  /* Layout Properties */
  position: relative;
  display: flex;
  margin-top: 5rem;
  bottom: 8%;
  width: 1640px;
  height: 652px;
  justify-content: center;

  /* UI Properties */
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 20px #00000040;
  opacity: 1;

`;

export const InputContainer = styled.div`
  position: relative;
  margin: 11.3rem -49rem 13.3rem 25rem;
  padding-bottom: 10rem;
  height: 25rem;
  width: 35rem;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;
`;

export const IdentityContainer = styled.div`
  width: 100%;
  height: 25%;
  display: grid;
  grid-template: auto auto / repeat(2, 1fr);
  justify-content: space-between;
`;

export const MessageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: .4fr 6fr / auto;
`;

/*
   *************************************
  *************** TEXT ******************
   *************************************
*/

export const TitleText = styled.h1`
  margin: 4rem -9rem 10rem -1rem;
  font-weight: bold;
  font-size: 50px;
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

/*
   *****************************************
  **************** BUTTONS ******************
   *****************************************
*/

// export const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   /* margin-bottom: 40px; */
//   gap: 5rem;
//   width: 70%;
// `;

export const SendMessageButton = styled.button<ButtonWrapperProps>`

/* Layout Properties */
position: relative;
top: 80%;
margin: 0rem 10rem 0rem 50rem;
width: 300px;
height: 45px;

/* UI Properties */
border: none;
/* background: transparent linear-gradient(90deg, var(--unnamed-color-54c0e8) 0%, var(--unnamed-color-2a7de1) 100%) 0% 0% no-repeat padding-box; */
background: transparent linear-gradient(90deg, #54C0E8 0%, #2A7DE1 100%) 0% 0% no-repeat padding-box;
/* box-shadow: 0px 3px 6px #00000029; */
opacity: 1;

/* Text Properties */
color: ${colors.WHITE};
font-family: 'Work Sans', sans-serif;
font-size: 1rem;
font-weight: bold;
text-transform: uppercase;

`
