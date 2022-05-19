import styled from "styled-components";
import colors from "../../../styles/colors";
import { Nav } from "react-bootstrap";

export const HeaderContainer = styled.header`
  color: ${colors.BLACK};
  font-size: 24px;
  text-transform: uppercase;
`;

export const LogoContainer = styled.div`
	margin: 40px auto;
`;

export const NavLinksContainer = styled.div`
	margin-top: 20px;
	margin-bottom: 40px;
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
