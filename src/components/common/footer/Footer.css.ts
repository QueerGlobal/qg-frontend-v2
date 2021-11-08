import styled from "styled-components";
import { Container, Nav } from "react-bootstrap";

export const FooterBar = styled.div`
	height: 22px;
	width: 100%;
	background: transparent
		linear-gradient(244deg, #c69c6d 0%, #754c24 48%, #c69c6d 76%, #754c24 100%)
		0% 0% no-repeat padding-box;
	opacity: 1;
`;
export const FooterContainer = styled(Container)`
	height: 792px;
	padding: 0;
`;

export const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 50px 0;
`;
export const KnowUs = styled.p`
	height: 19px;
	font-size: 14px;
	text-transform: uppercase;
	text-align: center;
	color: #ffffff;
	opacity: 1;
	font-weight: bold;
`;

export const Email = styled.p`
	height: 19px;
	text-align: center;
	color: #ffffff;
	opacity: 1;
	letter-spacing: 0.14px;
	font-weight: bold;
	margin-top: 30px;
`;

export const NavLinksContainer = styled.div`
	margin-top: 80px;
	margin-bottom: 60px;
`;

export const NavLink = styled(Nav.Link)`
	color: #ffffff;
	font-size: 18px;
	text-align: center;
	opacity: 1;

	&:focus,
	&:active {
		color: #ffffff;
	}
`;
export const FooterLinks = styled.p`
	text-align: center;
	color: #ffffff;

	font-size: 18px;
`;
export const RightsReserved = styled.p`
	font-weight: 100;
	height: 17px;
	color: #fff;
	text-align: center;
`;
