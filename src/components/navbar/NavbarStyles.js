import styled from "styled-components";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const NavButtonContainer = styled.div`
	position: relative;
	width: 100%;
	height: 50px;
	background: #655dc6;
	box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
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
	padding-top: 50px;
`;

export const NavbarContainer = styled(Navbar)`
	position: fixed;
	left: 4%;
	display: flex;
	flex-direction: column;
	align-items: start;
`;

export const NavLink = styled(Nav.Link)`
	color: #ffffff;
	font-size: 14px;
	letter-spacing: 34;

	&:focus,
	&:active {
		color: #ffffff;
	}
`;

export const NavDropdownItem = styled(NavDropdown.Item)`
	color: #ffffff;
	font-size: 14px;
	letter-spacing: 34;
	padding: 0.5rem 0;

	&:focus,
	&:active {
		color: #ffffff;
	}
`;

export const BottomNavLinks = styled.div`
	margin-top: 250px;
`;
