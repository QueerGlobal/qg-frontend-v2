import styled from "styled-components";
import { Nav, NavDropdown, Container } from "react-bootstrap";

export const NavButtonContainer = styled.div`
	position: fixed;
	width: 100%; /* TODO add break points for desktop screen */
	height: 50px;
	background: #655dc6;
	/* box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25); */
	z-index: 1050;
`;
export const MenuButton = styled.button`
	background: #655dc6;
	border: transparent;
	font-size: 25px;
	margin: auto 10px;
`;
export const CanvasNavbarContainer = styled.div`
	width: 50vw;
	background: #655dc6;
	color: #ffffff;
	padding-top: 60px;
`;

export const NavLink = styled(Nav.Link)`
	color: #ffffff;
	font-size: 18px;
	letter-spacing: 34;

	&:focus,
	&:active {
		color: #ffffff;
	}
`;

export const NavDropdownItem = styled(NavDropdown.Item)`
	color: #ffffff;
	font-size: 18px;
	letter-spacing: 34;
	padding: 0.5rem 0;

	&:focus,
	&:active {
		color: #ffffff;
	}

	&:before {
		content: "";
		background: #fff;
		position: absolute;
		top: 0;
		left: 0;
		border: 1px solid #fff;
		width: 85%;
	}
`;
export const NavDropdownItemContainer = styled(Container)`
	width: 50%;
`;
export const BottomNavLinks = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
`;
