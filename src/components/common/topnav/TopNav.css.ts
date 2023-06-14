import styled from "styled-components";
import colors from "../../../styles/colors";
import { Nav } from "react-bootstrap";
import icon from '../../../assets/QG-Logo-V3-White-Transparent-PNG-1.png'


/* PRIMARY: #655DC6 for purple */
/* COTTON_CANDY: #F5ACB8 for pink */

export const NavContainer = styled.div`
	position: fixed;
	top: 0;
	z-index: 100;
	width: 100%;
	background-color: transparent;
`

export const NavInner = styled.div`
	display:flex;
	width:100%;
	max-width: 95%;
	display: flex;
	gap: 20px;
	align-items: center;
	justify-content: flex-end;
	margin-top: 30px;

`

export const Button = styled.button<{$position?: string, $color?:string, $shadow?:string, $backgroundColor?:string, $width?: string}>`
	--color: white;
	--background-color: transparent;
	--shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	color: ${props => props.$color || `var(--color)`};
	background-color: ${props => props.$backgroundColor || `var(--background-color)`};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 30px 10px 30px;
	font-weight: 600;
	text-transform: uppercase;
	border: none;
	outline: none;
	font-size: 20px;
	box-shadow: ${props => props.$shadow || `var(--shadow)`};
	width: ${props => props.$width || ''}
`


export const DropdownContainer = styled.div`
	position: relative;
	text-align: left;
`

export const DropdownMenu = styled.div`
	position: absolute;
	top: 50px;
	overflow: auto;
	max-height: 200px;
	background-color: white;
	left: 0px;
	width: 100%;
`

export const DropdownItem = styled.div`
	padding: 10px;
	&:hover {
		background-color: #FF007F;
	}
`

export const Logo = styled.img`
	height: 15%;
	position: absolute;
	top: 50px;
	left: 100px;
`

Logo.defaultProps = {
	src: icon
}





// export const TopNavContainer = styled(Nav)`
// 	display: flex;
// 	color: ${colors.WHITE};
// 	text-transform: uppercase;
// 	background-color: ${colors.PRIMARY};
// 	height: 100%;
// 	max-width: 100%;
// 	padding: 2% 10%;
// `;

// export const NavLink = styled(Nav.Link)`
// 	color: ${colors.WHITE};
// 	font-size: 18px;
// 	text-align: center;
// 	opacity: 1;
// 	display: inline;
// 	margin-left: 10px;

// 	&:focus,
// 	&:active {
// 		color: ${colors.WHITE};
// 	}
// `;

// export const TopNavLogo = styled.span`
// 	text-align: left;
// 	flex-grow: 1;
// `;

// export const SignUpBtn = styled.button`
// 	background-color: ${colors.UNICORN};
// 	color: ${colors.WHITE};
// 	border-style: none;
// `;

// export const DonateBtn = styled.button`
// 	background-color: ${colors.WHITE};
// 	color: ${colors.BLACK};
// 	border-style: none;
// `;