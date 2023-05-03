import React, { FC } from "react";
import { ButtonWrapper, SendMessageButton } from "./ContactMessage.css";

const ContactMessage: FC = () => {
  return (
    <div id="panel-box">
      <ButtonWrapper>
        <SendMessageButton
          label="secondary"
          buttonText="Send us your message"
        />
      </ButtonWrapper>
    </div>
  );
};

export default ContactMessage;
