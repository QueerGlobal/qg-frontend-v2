import styled from "styled-components";
import colors from "../../../styles/colors";
import { Nav } from "react-bootstrap";

/* PRIMARY: #655DC6 for purple */
/* COTTON_CANDY: #F5ACB8 for pink */

export const TopNavContainer = styled(Nav)`
	display: flex;
	color: ${colors.WHITE};
	text-transform: uppercase;
	background-color: ${colors.PRIMARY};
	height: 100%;
	max-width: 100%;
	padding: 2% 10%;
`;

export const NavWrapper = styled.nav`
	z-index: 50;
`;

export const NavLink = styled(Nav.Link)`
	color: ${colors.WHITE};
	font-size: 18px;
	text-align: center;
	opacity: 1;
	display: inline;
	margin-left: 10px;

	&:focus,
	&:active {
		color: ${colors.WHITE};
	}
`;

export const TopNavLogo = styled.span`
	text-align: left;
	flex-grow: 1;
	z-index: 50;
`;

export const SignUpBtn = styled.button`
	background-color: ${colors.UNICORN};
	color: ${colors.WHITE};
	border-style: none;
`;

export const DonateBtn = styled.button`
	background-color: ${colors.WHITE};
	color: ${colors.BLACK};
	border-style: none;
`;