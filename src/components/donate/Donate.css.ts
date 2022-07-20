import styled from "styled-components";
import colors from "../../styles/colors";
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
