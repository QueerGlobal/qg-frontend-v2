import styled from 'styled-components';
import colors from '../../../styles/colors';

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
	width: 100%;
	height: 1000px;
	background: ${colors.PRIMARY};
`;

/* CSS SHAPES */
// A gradient triangle, light pink to pink
export const GradientPinkTriangle = styled.div`
	position: absolute;
	left: 33%;
	top: 20%;
	width:85px;
	height: 70px;
	background: linear-gradient(#f4a6b7, #f17eae);
	-webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	-webkit-transform: rotate(-62deg);
	transform: rotate(-62deg);
`;

// NineWhitePointsStarDiv and SingleWhitePoint create the nine-pointed white star (empty inner circle)
export const NineWhitePointsStarDiv = styled.div`
	height: 75px;
	width: 75px;
	position: absolute;
	top: 40%;
	left: 20%;
`;

export const SingleWhitePoint = styled.div`
	height: 20px;
	width: 3px;
	background-color: white;
	position: absolute;

	&.SWPT1 {
		top: 28px;
		left: 50px;
	}
	
	&.SWPT2 {
		top: 31px;
		left: 38px;
		-webkit-transform: rotate(-40deg);
		transform: rotate(-40deg);
	}
	
	&.SWPT3 {
		top: 42px;
		left: 31px;
		-webkit-transform: rotate(-80deg);
		transform: rotate(-80deg);
	}
	
	&.SWPT4 {
		top: 56px;
		left: 34px;
		-webkit-transform: rotate(-120deg);
		transform: rotate(-120deg);
	}
	
	&.SWPT5 {
		top: 64px;
		left: 44px;
		-webkit-transform: rotate(-160deg);
		transform: rotate(-160deg);
	}
	
	&.SWPT6 {
		top: 31px;
		left: 61px;
		-webkit-transform: rotate(40deg);
		transform: rotate(40deg);
	}
	
	&.SWPT7 {
		top: 42px;
		left: 68px;
		-webkit-transform: rotate(80deg);
		transform: rotate(80deg);
	}
	
	&.SWPT8 {
		top: 55px;
		left: 66px;
		-webkit-transform: rotate(120deg);
		transform: rotate(120deg);
	}
	
	&.SWPT9 {
		top: 63px;
		left: 58px;
		-webkit-transform: rotate(154deg);
		transform: rotate(154deg);
	}
`;

export const SVGDiv = styled.div`
	-webkit-transform: rotate(-35deg);
	transform: rotate(-35deg);
`;

export const TinyCottonCandyX = styled.div`
	&:before {
		content: "+";
		position: absolute;
		color: ${colors.COTTON_CANDY};
		font-weight: bold;
		left: 109px;
		top: 155px;
		font-size: 15px;
	}
`;

export const LargeCottonCandyX = styled.div`
	&:before {
		content: "+";
		position: absolute;
		color: ${colors.COTTON_CANDY};
		font-weight: bold;
		right: 109px;
		top: 106px;
		font-size: 40px;
	}
`;

export const WhiteX = styled.div`
	&:before {
		content: "+";
		position: absolute;
		color: #FFFFFF;
		font-weight: bold;
		font-size: 45px;
		right: 275px;
		top: 186px;
		-webkit-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
	}
`;

export const BlackSolidHex = styled.div`
	background-color: ${colors.BLACK};
	width: 520px;
	height: 520px;
	position: absolute;
	left: 515px;
	top: 100px;
	-webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
	clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
	-webkit-transform: rotate(15deg);
	transform: rotate(15deg);
`;

				// Unfinished
export const BorderedHex = styled.div`
	display: block;
	margin: 0 auto;
	position: relative;
	width: 320px;
	height: 277.12px; /* width * 0.866 */
	background: red;
	box-sizing: border-box;
	-webkit-clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);
	-moz-clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);

& .hex-background {
	position: absolute;
	background-color: orange; /*color of the main-background*/
	top: 2px; /* equal to border thickness */
	left: 2px; /* equal to border thickness */
	width: 316px; /* container height - (border thickness * 2) */
	height: 273.12px; /* container height - (border thickness * 2) */
	-webkit-clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);
	-moz-clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);
  }
`;

export const WhiteXTwo = styled.div`
	&:before {
		content: "+";
		position: absolute;
		color: ${colors.WHITE};
		font-weight: bold;
		font-size: 40px;
		left: 105px;
		top: 150px;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	}
`;

export const BlackX = styled.div`
	&:before {
		content: "+";
		position: absolute;
		color: ${colors.BLACK};
		font-weight: bold;
		font-size: 40px;
		left: 59px;
		top: 100px;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	}
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
	right: 25%;
	top: 20%;
	width: 50px;
	height: 50px;
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

export const CottonCandySemiOpaqueRect = styled.div`
	background-color: ${colors.COTTON_CANDY};
	width: 300px;
	height: 150px;
	opacity: 0.5;
`;

export const BlackBG = styled.div`
	position: absolute;
	top: 225%;
	height: 400px;
	width: 10%;
	background-color: ${colors.BAHAMAS_HOVER};
`;

export const Cont = styled.div`
	background-image:
         url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1200'%3E%3Cpath fill='black' fill-opacity='1' d='M 0 200 L 150 50 C 150 50 200 0 300 50 L 800 300 L 800 1200 L 0 1200 L 0 200'%3E%3C/path%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%; 
	height: 1200px;
	padding: 25% 0 0 25%;
	margin: auto; 
	color: white;
`;

export const GridOfPics = styled.div`
	display: flex; 
	justify-content: space-evenly;
	width: 40%;
`;

export const Cols = styled.div`
	flex: 1;
`;

export const Blue = styled.div` 
	border: 1px solid blue;
`;	

export const Yellow = styled.div`
	border: 1px solid yellow;
`;	

export const Red = styled.div`
	border: 1px solid red;
`;	

export const Pink = styled.div`
border: 1px solid pink;
`;
/* END OF CSS SHAPES */
