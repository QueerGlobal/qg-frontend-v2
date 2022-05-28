import styled from 'styled-components';
import colors from "../../styles/colors";

/* PRIMARY: #655DC6 for purple */
/* COTTON_CANDY: #F5ACB8 for pink */
/* #48ADE5 for blue circle on home page */

interface PropsShape {
	// shape: string;
	left: string;
	top: string;
	width: string;
	height: string;
}

export const HuggingImg = styled.img<PropsShape>`
	position: absolute;
	left: ${({ left }) => left};
	top: ${({ top }) => top};
	width: ${({ width }) => width};
	height: ${({ height }) => height};
`;

export const BackgroundColor = styled.div`
	height: 2595px;
	width: 100vw;
	background: ${colors.PRIMARY};
`;

/* CSS SHAPES */
export const CottonCandyX = styled.div`
	&:before {
		content: "+";
		position: absolute;
		color: ${colors.COTTON_CANDY};
		font-weight: bold;
		font-size: 80px;
		right: 359px;
		top: 36px;
	}
`;

export const WhiteX = styled.div`
	&:before {
		content: "+";
		position: absolute;
		color: ${colors.WHITE};
		font-weight: bold;
		font-size: 80px;
		right: 259px;
		top: 136px;
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);

	}
`;

export const BlackSolidHex = styled.div`
	background-color: ${colors.BLACK};
	width: 420px;
	height: 240px;
	position: absolute;
	left: 15px;
	top: 352px;
	transition: all .7s;
	-webkit-transition: all .7s;
	
	&.bsh1 {
		position: absolute;
		top: 350px;
	}
	
	&.bsh2 {
		position: absolute;
		top: 350px;
		transform: rotate(60deg);
		-webkit-transform: rotate(60deg);
	}
	
	&.bsh3 {
		position: absolute;
		top: 350px;
		transform: rotate(-60deg);
		-webkit-transform: rotate(-60deg);
	}

`;

export const CottonCandySolidHex = styled.div`
	background-color: ${colors.COTTON_CANDY};
	width: 210px;
	height: 120px;
	position: absolute;
	right: 300px;
	top: 482px;
	transition: all .5s;
	-webkit-transition: all .5s;

	&.ccsh1 {
		position: absolute;
		top: 480px;
	}
	
	&.ccsh2 {
		position: absolute;
		top: 480px;
		transform: rotate(60deg);
		-webkit-transform: rotate(60deg);
	}
	
	&.ccsh3 {
		position: absolute;
		top: 480px;
		transform: rotate(-60deg);
		-webkit-transform: rotate(-60deg);
	}
`;
/* END OF CSS SHAPES */
