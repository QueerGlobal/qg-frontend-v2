import React, { FC } from "react";

import Footer from "../common/footer/Footer";
import {
  WhiteBGSection,
  ContactMain,
  TextWrapper,
  TextArea,
  ButtonWrapper,
  PurpleSpan,
} from "./Contact.css";
import Button from "../common/button/Button";

const Contact: FC = () => {
  return (
    <>
      <ContactMain id="main">
        <WhiteBGSection id="white-bg-section">
          <h2>
            <PurpleSpan>CONTACT</PurpleSpan> US.
          </h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <TextWrapper id="text-wrapper">
            <TextArea
              placeholder="Tell us what's on your mind..."
              id="text-area"
            />
          </TextWrapper>
          <ButtonWrapper>
            <Button label="primary" buttonText="Send us your message" />
            <Button label="primary" buttonText="Send us an Email" />
          </ButtonWrapper>
        </WhiteBGSection>
      </ContactMain>
      <Footer />
    </>
  );
};

export default Contact;
