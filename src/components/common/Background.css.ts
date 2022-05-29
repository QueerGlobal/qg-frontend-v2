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
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	}
`;

// Width originally 420			624
export const BlackSolidHex = styled.div`
	background-color: ${colors.BLACK};
	width: 520px;
	height: 520px;
	position: absolute;
	left: 515px;
	top: 250px;
	-webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
	clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
	-webkit-transform: rotate(15deg);
	transform: rotate(15deg);
`;

export const CottonCandySolidHex = styled.div`
	background-color: ${colors.COTTON_CANDY};
	width: 210px;
	height: 120px;
	position: absolute;
	right: 300px;
	top: 482px;

	&.ccsh1 {
		position: absolute;
		top: 480px;
	}
	
	&.ccsh2 {
		position: absolute;
		top: 480px;
		-webkit-transform: rotate(60deg);
		transform: rotate(60deg);
	}
	
	&.ccsh3 {
		position: absolute;
		top: 480px;
		-webkit-transform: rotate(-60deg);
		transform: rotate(-60deg);
	}
`;

export const NineWhiteSpikes = styled.div`
	background-color: ${colors.WHITE};
	width: 210px;
	height: 120px;
	position: absolute;
	left: 22px;
	top: 282px;

	&.nws1 {
		position: absolute;
		top: 282px;
	}
	
	&.nws2 {
		position: absolute;
		top: 282px;
		-webkit-transform: rotate(60deg);
		transform: rotate(60deg);
	}
	
	&.nws3 {
		position: absolute;
		top: 282px;
		-webkit-transform: rotate(-60deg);
		transform: rotate(-60deg);
	}
`;

export const WhiteTriangle = styled.div`
	position: absolute;
	right: 15px;
	top: 50px;
	width:100px;
	height: 100px;
	background: ${colors.WHITE};
	-webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	-webkit-transform: rotate(-45deg);
	transform: rotate(-45deg);
`;

export const CircleShape = styled.div`
	background-color: red;
	height: 20px;
	width: 20px;
	-webkit-clip-path: circle(50%);
	clip-path: circle(50%);
`;
/* END OF CSS SHAPES */
