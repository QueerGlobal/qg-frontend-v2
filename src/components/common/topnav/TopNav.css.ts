import styled from "styled-components";
import colors from "../../../styles/colors";
import { Nav } from "react-bootstrap";

/* PRIMARY: #655DC6 for purple */
/* COTTON_CANDY: #F5ACB8 for pink */

export const HeaderContainer = styled.header`
	display: flex;
	color: ${colors.WHITE};
	text-transform: uppercase;
	background-color: ${colors.PRIMARY};
	height: 100%;
	max-width: 100%;
	padding: 2% 10%;
`;

export const NavLink = styled(Nav.Link)`
	color: #ffffff;
	font-size: 18px;
	text-align: center;
	opacity: 1;
	display: inline;
	margin-left: 10px;
	&:focus,
	&:active {
		color: #ffffff;
	}
`;

export const HeaderLogo = styled.span`
	text-align: left;
	flex-grow: 1;
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