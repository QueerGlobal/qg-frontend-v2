import React, { FC } from "react";
import {
  IdentityContainer,
  InputContainer,
  MessageContainer,
  PanelBox,
  SendMessageButton,
  TitleText,
} from "./ContactMessage.css";

const ContactMessage: FC = () => {
  return (
    <PanelBox id="panel-box-parent">
      <TitleText>MESSAGE</TitleText>
      <InputContainer id="input-container">
        <IdentityContainer id="identity-container">
          <span>
            <b>Name</b>
          </span>
          <span>
            <b>Email</b>
          </span>
          <input type="text" style={{ border: "1px solid #B5B5B5" }}></input>
          <input type="text" style={{ border: "1px solid #B5B5B5" }}></input>
        </IdentityContainer>
        <MessageContainer id="message-container">
          <span>
            <b>Message</b>
          </span>
          <textarea style={{ borderColor: "#B5B5B5" }}></textarea>
        </MessageContainer>
      </InputContainer>
      <SendMessageButton label="water">Send Message</SendMessageButton>
    </PanelBox>
  );
};

export default ContactMessage;
