import { createGlobalStyle } from "styled-components";
import colors from './styles/colors';

// TODO - Find out from Jenn about 'MYSTERIO'
const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: "Tahu!";
		src: url('../../assets/fonts/tahu.eot');
		src: url('../../assets/fonts/tahu.eot?#iefix') format('embedded-opentype'),
			url('../../assets/fonts/tahu.woff2') format('woff2'),
			url('../../assets/fonts/tahu.woff') format('woff'),
			url('../../assets/fonts/tahu.ttf')  format('truetype'),
			url('../../assets/fonts/tahu.svg#Tahu!') format('svg');
		font-weight: normal;
		font-style: normal;
	}

	* {
		box-sizing: border-box;
	}

	em {
		font-family: "Tahu!";
		font-weight: 700;
	}

	body {
		margin: 0;
		padding: 0;
	}

	.dropdown-menu {
		position: absolute !important;
		left: 0 !important;
		width: 100% !important;
		background-color: ${colors.MYSTERIO} !important;
		border-radius: 0 !important;
	}

	.nav-link {
		color: ${colors.WHITE} !important;
		letter-spacing: 34;
		padding: 0.5rem 0;
	}

	.offcanvas-body svg {
		width: 1.125rem !important;
		height: 1em;
		margin-left: 20px;
	}

	a[aria-expanded="true"] {
		background-color: ${colors.MYSTERIO};
		width: 100%;
		margin-bottom: 190px !important;
	}

	svg {
		stroke: ${colors.BLUE};
		fill: ${colors.WHITE} !important;
	}
`;

export default GlobalStyles;
