import { createGlobalStyle } from "styled-components";
import colors from './styles/colors';

const GlobalStyles = createGlobalStyle`
<<<<<<< HEAD
  * {
    box-sizing: border-box;
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

// Used to override the react-bootstrap dropdown arrow
.dropdown-toggle::after {
	display: none !important; 
}
// Used to override the react-dropdown arrow

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
=======
	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		padding: 0;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
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
>>>>>>> main
`;

export default GlobalStyles;
