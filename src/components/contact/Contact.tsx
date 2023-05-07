import React, { FC } from "react";

import Footer from "../common/footer/Footer";
import ContactCTA from "./contactCTA/ContactCTA";
import ContactMessage from "./contactMessage/ContactMessage";
import ContactFAQ from "./contactFAQ/ContactFAQ";
import {
  ContactWrapper,
  HeaderPurpleTransparentLeft,
  HeaderPurpleTransparentTop,
  HeaderImageWrapper,
  HeaderImage,
  TitleWrapper,
  Title,
} from "./Contact.css";

const Contact: FC = () => {
  return (
    <>
      {/* <HeaderPurpleTransparentTop /> */}
      <HeaderPurpleTransparentLeft />
      <HeaderImageWrapper id="header-image-wrapper">
        <HeaderImage id="header-image" />
      </HeaderImageWrapper>
      <TitleWrapper>
        <Title>CONTACT US</Title>
      </TitleWrapper>
      <ContactWrapper id="main">
        <ContactCTA />
        <ContactMessage />
        <ContactFAQ />
      </ContactWrapper>
      <Footer />
    </>
  );
};

export default Contact;
