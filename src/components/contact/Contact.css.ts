import styled from 'styled-components';
import colors from '../../styles/colors';
// import Button from "../common/button/Button";

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
  height: 4418px;
  width: 100%;
  background-color: ${colors.PRIMARY};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 15px; */
`;

export const ContactMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 10%;
`;

/*
   ***************************************
  *************** PANELS ******************
   ***************************************
*/

export const HeaderPurpleTransparentLeft = styled.div`
  /* Layout Properties */
  position: absolute;
  top: 0px;
  left: -7px;
  width: 976px;
  height: 751px;
  /* UI Properties */
  background: transparent linear-gradient(90deg, var(--unnamed-color-655dc6) 0%, var(--unnamed-color-655dc6) 43%, #655DC600 100%) 0% 0% no-repeat padding-box;
  background: transparent linear-gradient(90deg, #655DC6 0%, #655DC6 43%, #655DC600 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
  z-index: 30;
`;

export const HeaderPurpleTransparentTop = styled.div`
  /* Layout Properties */
  top: 0px;
  left: 409px;
  width: 1504px;
  height: 329px;
  transform: matrix(0, 1, -1, 0, 0, 0);
  /* UI Properties */
  background: transparent linear-gradient(90deg, var(--unnamed-color-655dc6) 0%, #655DC6CC 43%, #655DC600 100%) 0% 0% no-repeat padding-box;
  background: transparent linear-gradient(90deg, #655DC6 0%, #655DC6CC 43%, #655DC600 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
  z-index: 30;
`;

export const HeaderImageWrapper = styled.div`
  background-color: ${colors.PRIMARY};
  display: flex;
  /* height: 939px;
  width: 1540px; */
  justify-content: end;
  align-items: end;
  margin: 0auto;
`;

export const HeaderImage = styled.image`
  background-image: url("https://via.placeholder.com/750x1410");
  position: absolute;
  top: .1%;
  flex-direction: row;
  /* margin: 25px 5px; */
  height: 750px;
  width: 1410px;
  margin-right: 0auto;
  justify-content: end;
  align-items: end;
  z-index: 20;
`;

/*
   *************************************
  *************** TEXT ******************
   *************************************
*/

export const TitleWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 15%;
  top: 25%;
  z-index: 30;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 75px;
  letter-spacing: .25rem;
  color: ${colors.WHITE};
  /* top: 55%; */
`;
