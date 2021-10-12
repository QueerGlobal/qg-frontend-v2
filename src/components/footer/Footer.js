import React from "react";
import { Container } from "react-bootstrap";
import {
	FooterContainer,
	FooterBar,
	KnowUs,
	Email,
	FooterLinks,
	RightsReserved,
} from "./Footer.Styled";
import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
	return (
		<FooterContainer fluid>
			<FooterBar></FooterBar>
			<div>
				<KnowUs> get to know us</KnowUs>
				<div></div>
				<Email>Email@queerglobal.com</Email>
			</div>
			<SocialIcons />
			<div>
				<FooterLinks>Blog</FooterLinks>
				<FooterLinks>About</FooterLinks>
				<FooterLinks>Resources</FooterLinks>
				<FooterLinks>Donate</FooterLinks>
				<FooterLinks>Get Involved</FooterLinks>
				<FooterLinks>Contact Us</FooterLinks>
			</div>
			<RightsReserved>
				&#169; 2021 Queer Global | All Rights Reserved
			</RightsReserved>
		</FooterContainer>
	);
};

export default Footer;
