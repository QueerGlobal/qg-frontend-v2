import React, { FC } from "react";
import {
	HeaderContainer,
	LogoContainer,
	NavLinksContainer,
	NavLink,
} from "./Header.css";
import icon from "../../../assets/header/QG-Logo-V3-White-Transparent-PNG-1.png";


const Header: FC = () => {
	return (
      <HeaderContainer>
      <div>
        <NavLink to="/home">
			<LogoContainer>
				<img src={icon} alt="logo" />
			</LogoContainer>
        </NavLink>
      </div>

      <div>
        <NavLinksContainer>
			<NavLink href="/about">ABOUT</NavLink>
			<NavLink href="/resources">RESOURCES</NavLink>
		    <NavLink href="/blog">BLOG</NavLink>
            <NavLink href="/donate"><button>DONATE</button></NavLink>
            <NavLink href="/get-involved"><button>SIGN UP</button></NavLink> {/** Correct? */}
        </NavLinksContainer>
      </div>
    </HeaderContainer>
	);
};

export default Header;