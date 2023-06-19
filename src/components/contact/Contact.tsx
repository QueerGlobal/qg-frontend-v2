import { FC } from "react";

import ContactMain from "./contactMain/ContactMain";
import ContactMessage from "./contactMessage/ContactMessage";
import ContactFAQ from "./contactFAQ/ContactFAQ";
import {
  ContactWrapper,
  HeaderPurpleTransparentLeft,
  // HeaderPurpleTransparentTop, // <-- plan on using this
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
        <ContactMain />
        <ContactMessage />
        <ContactFAQ />
      </ContactWrapper>
    </>
  );
};

export default Contact;
