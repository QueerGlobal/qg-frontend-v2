import React, { FC } from "react";

import { PanelBox } from "./ContactFAQ.css";
import { TitleText } from "../contactCTA/ContactCTA.css";

const ContactFAQ: FC = () => {
  return (
    <PanelBox id="panels-box">
      <TitleText>F.A.Q.</TitleText>
    </PanelBox>
  );
};

export default ContactFAQ;
