import { createGlobalStyle } from "styled-components";

const HomepageStyles = createGlobalStyle`
	@media screen and (min-width: 501px) {
		// Homepage
		.pageWrapper {
			height: 2674px;
		}

		// Homepage background visuals
		.purpleCircles {
			top: 165px;
			left: 2%;
		}

		.blueX {
			&:before {
				font-size: 80px;
				top: 450px;
			}
		}
	}
`;

export default HomepageStyles;
