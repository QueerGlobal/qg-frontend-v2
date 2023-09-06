import React, { FC } from "react";
import {
  IdentityContainer,
  InputContainer,
  MessageContainer,
  PanelBox,
  SelectInput,
  SendMessageButton,
  TextInput,
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
          <span>
            <b>Interested in?</b>
          </span>
          <TextInput type="text"></TextInput>
          <TextInput type="text"></TextInput>
          <SelectInput name="" id="dropdown">
            <option value="General">
              General
            </option>
            <option value="Volunteering">
              Volunteering
            </option>
            <option value="Donations">
              Donations
            </option>
            <option value="Tech Support">
              Tech Support
            </option>
          </SelectInput>
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
