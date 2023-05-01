import styled from 'styled-components';

/* #655DC6 for purple */
/* #F5ACB8 for pink */
/* #1F1F1F for dark gray bg */
/* #764D25 for brown gradient in footer */
/* #C59B6C for light brown gradient in footer */
/* #48ADE5 for blue circle on home page */

export const ContactMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 10%;
`;

export const WhiteBGSection = styled.div`
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
