import styled from 'styled-components';
import colors from '../../../styles/colors';

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

export const PanelsContainer = styled.div`
  height: 15%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 3rem;
  bottom: 8%;
`;

export const WhiteBGSectionLeft = styled.div`
  background-color: white;
  display: grid;
  justify-content: start;
  text-align: start;
  width: 34%;
`;

export const WhiteBGSectionRight = styled.div`
  background-color: white;
  display: grid;
  justify-content: start;
  text-align: start;
  width: 34%;
`;

/*
   ***********************************
  *************** TEXT ****************
   ***********************************
*/

export const TitleText = styled.h1`
  margin: 4rem;
  font-weight: bold;
  font-size: 50px;
`;
