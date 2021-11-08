import {
	FooterContainer,
	FooterBar,
	LogoContainer,
	KnowUs,
	Email,
	NavLinksContainer,
	NavLink,
	RightsReserved,
} from "./Footer.css";
import SocialIcons from "../social-icons/SocialIcons";
import icon from "../../../assets/footer/QG-Logo-V3-Gold-Transparent-PNG-1.png";

const Footer = () => {
	return (
		<FooterContainer fluid className="QG-background">
			<FooterBar></FooterBar>
			<LogoContainer>
				<img src={icon} alt="logo" />
			</LogoContainer>
			<KnowUs> get to know us</KnowUs>
			<SocialIcons />
			<Email>Email@queerglobal.com</Email>
			<NavLinksContainer>
				<NavLink href="/blog">Blog</NavLink>
				<NavLink href="/about">About</NavLink>
				<NavLink href="/resources">Resources</NavLink>
				<NavLink href="/donate">Donate</NavLink>
				<NavLink href="/get-involved">Get Involved</NavLink>
				<NavLink href="/contact-us">Contact Us</NavLink>
			</NavLinksContainer>
			<RightsReserved>
				&#169; 2021 Queer Global | All Rights Reserved
			</RightsReserved>
		</FooterContainer>
	);
};

export default Footer;
