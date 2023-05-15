import React, { FC } from "react";
import {
  IdentityContainer,
  InputContainer,
  MessageContainer,
  PanelBox,
  SendMessageButton,
  TitleText,
} from "./ContactMessage.css";
import { ButtonText } from "../../common/button/Button.css";
import { propTypes } from "react-bootstrap/esm/Image";

const ContactMessage: FC = () => {
  return (
    <PanelBox id="panel-box-parent">
      <TitleText>MESSAGE</TitleText>
      <InputContainer id="input-container">
        <IdentityContainer id="identity-container">
          <span>Name</span>
          <span>Email</span>
          <input type="text"></input>
          <input type="text"></input>
          {/* <span>Message</span>
          <textarea></textarea> */}
        </IdentityContainer>
        <MessageContainer id="message-container">
          <span>Message</span>
          <textarea></textarea>
        </MessageContainer>
      </InputContainer>
      <SendMessageButton label="water">Send Message</SendMessageButton>
    </PanelBox>
  );
};

export default ContactMessage;
