import React, { FC } from "react";
import { PanelBox, SendMessageButton } from "./ContactMessage.css";
import { ButtonText } from "../../common/button/Button.css";
import { propTypes } from "react-bootstrap/esm/Image";
import { TitleText } from "../contactCTA/ContactCTA.css";

const ContactMessage: FC = () => {
  return (
    <PanelBox>
      <TitleText>MESSAGE</TitleText>
      <SendMessageButton label="water">Send Message</SendMessageButton>
    </PanelBox>
  );
};

export default ContactMessage;
