import styled from "styled-components";
import { Nav, NavDropdown, Container } from "react-bootstrap";
import colors from "../../styles/colors";

export const MenuButton = styled.button`
	position: relative;
	right: -350px;
	height: 50px;
	background: ${colors.PRIMARY};
	border: transparent;
	font-size: 25px;
	margin: auto 10px;
	z-index: 1050;	

	&:focus,
	&:active {
		box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
	}
`; // TODO: move all "transparent" color-related styling to colors object

export const CanvasNavbarContainer = styled.div`
	width: 50vw;
	background: ${colors.PRIMARY};
	color: ${colors.WHITE};
	padding: 60px 0 0 60px;
`;

export const NavLink = styled(Nav.Link)`
	color: ${colors.WHITE};
	font-size: 18px;
	letter-spacing: 34;

	&:focus,
	&:active {
		color: ${colors.WHITE};
	}
`;

export const NavDropdownItem = styled(NavDropdown.Item)`
	color: ${colors.WHITE};
	font-size: 18px;
	letter-spacing: 34;
	padding: 0.5rem 0;

	&:focus,
	&:active {
		color: ${colors.WHITE};
	}

	&:before {
		content: "";
		background: ${colors.WHITE};
		position: absolute;
		top: 0;
		left: 0;
		border: .1px solid ${colors.WHITE};
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

export const MessagesContainer = styled.span`
	background-color: ${colors.SUNNY_D};
	width: 15px;
	height: 15px;
	clip-path: circle(50%);
	font-size: 10px;
`;

export const EighteenPXSpan = styled.span`
	font-size: 18px;
`;

export const ProfileThumbCont = styled.img`
	width: 40px;
`;
