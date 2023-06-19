import React, { FC } from "react";

import {
  DateSpan,
  InfoContainer,
  PanelsContainer,
  ReachSpacer,
  TimeSpan,
  TitleText,
  WhiteBGSectionLeft,
  WhiteBGSectionRight,
} from "./ContactMain.css";

const ContactCTA: FC = () => {
  return (
    <PanelsContainer id="panels-box">
      <WhiteBGSectionLeft id="white-bg-section">
        <TitleText>REACH US</TitleText>
        <InfoContainer id="info-container">
          <h3>
            <b>By Phone</b>
          </h3>
          <h6>(XXX)-XXX-XXXX</h6>
          <ReachSpacer>
            <DateSpan>Monday - Friday</DateSpan>
            <TimeSpan>8 AM - 5 PM EDT</TimeSpan>
          </ReachSpacer>
          <ReachSpacer>
            <DateSpan>Saturday - Sunday</DateSpan>
            <TimeSpan>X AM - X PM EDT</TimeSpan>
          </ReachSpacer>
        </InfoContainer>
        <InfoContainer>
          <h3>
            <b>For general questions or volunteering:</b>
          </h3>
          <a href="mailto:info@queerglobal.com">info@queerglobal.com</a>
        </InfoContainer>
        <InfoContainer>
          <h3>
            <b>For donation-related questions:</b>
          </h3>
          <a href="mailto:contributions@queerglobal.com">
            contributions@queerglobal.com
          </a>
        </InfoContainer>
      </WhiteBGSectionLeft>
      <WhiteBGSectionRight>
        <TitleText>VOLUNTEER</TitleText>
        <InfoContainer>
          <h3>
            <b>We are always looking for volunteers in the following areas:</b>
          </h3>
          <ul>
            <li>Social Media</li>
            <li>Developers</li>
            <li>Fundraising</li>
            <li>Events</li>
          </ul>
        </InfoContainer>
        <InfoContainer>
          <h3>
            <b>If interested please reach out to:</b>
          </h3>
          <a href="mailto:info@queerglobal.com">info@queerglobal.com</a>
        </InfoContainer>
      </WhiteBGSectionRight>
    </PanelsContainer>
  );
};

export default ContactCTA;
