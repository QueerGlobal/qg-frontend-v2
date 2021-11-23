import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
  }

.dropdown-menu {
	position: absolute !important;
	left: 0 !important;
	width: 100% !important;
	background-color: #4c4695 !important;
	border-radius: 0 !important;
}

.nav-link {
	color: #ffffff !important;
	letter-spacing: 34;
	padding: 0.5rem 0;
}

.offcanvas-body svg {
	width: 1.125rem !important;
	height: 1em;
	margin-left: 20px;
}

a[aria-expanded="true"] {
	background-color: #4c4695;
	width: 100%;
	margin-bottom: 190px !important;
}

.dropdown-toggle::after {
	display: none;
}
`;

export default GlobalStyles;
