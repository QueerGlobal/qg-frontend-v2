import React, { FC } from "react";
import Navbar from "../../navbar/Navbar";
import {
	TopNavContainer,
	NavLink,
	TopNavLogo,
	SignUpBtn,
	DonateBtn
} from "./TopNav.css";
import icon from "../../../assets/topnav/QG-Logo-V3-White-Transparent-PNG-1.png";

const TopNav: FC<{ windowWidth: boolean }> = ({ windowWidth }) => {
	if (windowWidth) {
		return <Navbar />;
	} else {
		return (
			<TopNavContainer>
				<TopNavLogo>
					<NavLink to="/home">
						<img src={icon} alt="logo" />
					</NavLink>
				</TopNavLogo>
				<nav>
					<NavLink href="/about">ABOUT</NavLink>
					<NavLink href="/resources">RESOURCES</NavLink>  
					<NavLink href="/blog">BLOG</NavLink>
					<NavLink href="/donate">
						<SignUpBtn>DONATE</SignUpBtn>
					</NavLink>
					<NavLink href="/get-involved">
						<DonateBtn>SIGN UP</DonateBtn>
					</NavLink> {/** Correct? */}
				</nav>
			</TopNavContainer>
		);
	}
}

export default TopNav;