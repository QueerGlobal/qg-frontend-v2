import styled from 'styled-components';

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
  grid-template-rows: repeat(4, 1fr);
  justify-content: start;
  width: 34%;
`;

export const WhiteBGSectionRight = styled.div`
  background-color: white;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
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

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  gap: 5px;
  justify-content: center;
  align-content: center;
  padding-left: 4.2rem;
  padding-right: 4rem;
`;

export const ReachSpacer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateSpan = styled.span`
  font-size: smaller;
`;

export const TimeSpan = styled.span`
  font-size: smaller;
`;
