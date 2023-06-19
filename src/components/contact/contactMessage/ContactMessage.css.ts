import styled from 'styled-components';
import colors from '../../../styles/colors';
import { ButtonWrapperProps } from '../../common/button/Button.css';

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
  position: absolute;
  margin: 11.3rem 0rem 13.3rem 0rem;
  padding-bottom: 10rem;
  width: 60rem;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;
`;

export const IdentityContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  column-gap: 1.5rem;
  grid-template: auto auto / repeat(3, 1fr);
  justify-content: space-between;
`;

export const MessageContainer = styled.div`
  position: relative;
  margin-top: .25rem;
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
  position: relative;
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
`;

export const TextArea = styled.textarea`
  height: 99%;
  width: 99%;
  border: 3px inset;
`;

export const TextInput = styled.input`
  border: 1px solid #B5B5B5;
`

export const SelectInput = styled.select`
  border: 1px solid #B5B5B5;
`

/*
   *****************************************
  **************** BUTTONS ******************
   *****************************************
*/

export const SendMessageButton = styled.button<ButtonWrapperProps>`
/* Layout Properties */
position: relative;
top: 80%;
margin: 0rem 10rem 0rem 50rem;
border-radius: .15rem;
width: 214px;
height: 45px;

/* UI Properties */
border: none;
background: transparent linear-gradient(90deg, #54C0E8 0%, #2A7DE1 100%) 0% 0% no-repeat padding-box;
opacity: 1;

/* Text Properties */
color: ${colors.WHITE};
font-family: 'Work Sans', sans-serif;
font-size: 1rem;
font-weight: bold;
text-transform: uppercase;
`;
