import React, { FC } from "react";

import {
  PanelsContainer,
  TitleText,
  WhiteBGSectionLeft,
  WhiteBGSectionRight,
} from "./ContactCTA.css";

const ContactCTA: FC = () => {
  return (
    <PanelsContainer id="panels-box">
      <WhiteBGSectionLeft id="white-bg-section">
        <TitleText>REACH US</TitleText>
      </WhiteBGSectionLeft>
      <WhiteBGSectionRight>
        <TitleText>VOLUNTEER</TitleText>
      </WhiteBGSectionRight>
    </PanelsContainer>
  );
};

export default ContactCTA;
