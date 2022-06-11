import styled from "styled-components";
import { Container, Nav } from "react-bootstrap";
import colors from "../../../styles/colors";

export const FooterContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${colors.BLACK};
	height: 100%;
	max-width: 100%;
`;

export const FooterBar = styled.div`
	height: 22px;
	margin: 0 -20px;
	background: transparent
		linear-gradient(244deg, ${colors.LIGHT_BROWN} 0%, ${colors.DARK_BROWN} 48%, ${colors.LIGHT_BROWN} 76%, ${colors.DARK_BROWN} 100%)
		0% 0% no-repeat;
	opacity: 1;
	align-self: stretch;
`;

export const LogoContainer = styled.div`
	margin: 40px auto;
`;

export const KnowUs = styled.p`
	height: 19px;
	font-size: 14px;
	text-transform: uppercase;
	color: ${colors.WHITE};
	opacity: 1;
	font-weight: bold;
`;

export const Email = styled.p`
	height: 19px;
	text-align: center;
	color: ${colors.WHITE};
	opacity: 1;
	letter-spacing: 0.14px;
	font-weight: bold;
	margin-top: 30px;
`;

export const NavLinksContainer = styled.div`
	margin-top: 20px;
	margin-bottom: 40px;
`;

export const NavLink = styled(Nav.Link)`
	color: ${colors.WHITE};
	font-size: 18px;
	text-align: center;
	opacity: 1;

	&:focus,
	&:active {
		color: ${colors.WHITE};
	}
`;
export const FooterLinks = styled.p`
	text-align: center;
	color: ${colors.WHITE};
	font-size: 18px;
`;
export const RightsReserved = styled.p`
	font-weight: 100;
	height: 17px;
	color: ${colors.WHITE};
	text-align: center;
`;
