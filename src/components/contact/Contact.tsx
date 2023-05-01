import React, { FC } from "react";

import Footer from "../common/footer/Footer";
import {
  WhiteBGSectionLeft,
  WhiteBGSectionRight,
  ContactMain,
  TextWrapper,
  TextArea,
  ButtonWrapper,
  PurpleSpan,
  ContactWrapper,
  SendMessageButton,
} from "./Contact.css";
import Button from "../common/button/Button";

const Contact: FC = () => {
  return (
    <>
      <ContactWrapper id="main">
        <WhiteBGSectionLeft id="white-bg-section">
          <h2>
            <PurpleSpan>CONTACT</PurpleSpan> US.
          </h2>
          {/* <TextWrapper id="text-wrapper">
            <TextArea
              placeholder="Tell us what's on your mind..."
              id="text-area"
            />
          </TextWrapper> */}
        </WhiteBGSectionLeft>
        <ButtonWrapper>
          <SendMessageButton
            label="secondary"
            buttonText="Send us your message"
          />
        </ButtonWrapper>
      </ContactWrapper>
      <Footer />
    </>
  );
};

export default Contact;
