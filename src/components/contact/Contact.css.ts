import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContactWrapper = styled.div`
  height: 4418px;
  width: 100%;
  background-color: ${colors.PRIMARY};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  justify-content: end;
  align-items: end;
  margin: 0auto;
`;

export const HeaderImage = styled.image`
  background-image: url("https://via.placeholder.com/750x1410");
  position: absolute;
  top: .1%;
  flex-direction: row;
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
`;
