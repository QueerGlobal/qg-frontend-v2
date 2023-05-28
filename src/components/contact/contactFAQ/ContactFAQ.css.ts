import styled from 'styled-components';
// import colors from '../../../styles/colors';

import Accordion from "react-bootstrap/Accordion";


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
  height: 1032px;

  /* UI Properties */
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 20px #00000040;
  opacity: 1;
`;

export const AccordionBox = styled.div`
  position: absolute;
  height: auto;
  width: auto;
  display: grid;
  grid-template-rows: 700px;
  grid-template-columns: 1640px;
  top: 200px;
  /* grid-template-areas: "main"; */
`;

export const StyledAccordion = styled(Accordion)`
  margin-left: 7.5rem;
  margin-right: 7.5rem;
`;
