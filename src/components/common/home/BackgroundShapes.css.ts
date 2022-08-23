import styled from 'styled-components';
import colors from '../../../styles/colors';

/* PRIMARY: #655DC6 for purple */
/* COTTON_CANDY: #F5ACB8 for pink */
/* #48ADE5 for blue circle on home page */

interface PropsShape {
	className: string;
}

export const HomepageBGCont = styled.div`
	position: absolute;
	z-index: 1;
	top: 0;
	width: 100%;
`;

export const PurpleCircles = styled.div<PropsShape>`
	position: absolute;
	left: -10%;
	top: 91px;
	width: 330px;
	height: 330px;
	border-radius: 50%;
	opacity: 25%;
	background-color: ${colors.PRIMARY_HOVER}
`;

export const PurpleC2 = styled.div`
	position: absolute;
	left: 4.5%; 
	top: 4.5%;
	width: 300px;
	height: 300px;
	border-radius: 50%;
	background-color: ${colors.PRIMARY};
`;

export const PurpleC3 = styled.div`
	position: absolute;
	left: 11%;
	top: 11%;
	width: 255px;
	height: 255px;
	border-radius: 50%;
	background-color: ${colors.PRIMARY_HOVER};
`;

export const PurpleC4 = styled.div`
	position: absolute;
	left: 15.5%;
	top: 15.5%;
	width: 225px;
	height: 225px;
	border-radius: 50%;
	background-color: ${colors.PRIMARY};
`;

export const PurpleC5 = styled.div`
	position: absolute;
	left: 22%; 
	top: 22%;
	width: 185px;
	height: 185px;
	border-radius: 50%;
	background-color: ${colors.PRIMARY_HOVER};
`;

export const PurpleC6 = styled.div`
	position: absolute;
	left: 26.5%; 
	top: 26.5%;
	width: 155px;
	height: 155px;
	border-radius: 50%;
	background-color: ${colors.PRIMARY};
`;

export const PurpleC7 = styled.div`
	position: absolute;
	left: 34%; 
	top: 34%;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: ${colors.PRIMARY_HOVER};
`;

export const PurpleC8 = styled.div`
	position: absolute;
	left: 39%; 
	top: 39%;
	width: 68px;
	height: 68px;
	border-radius: 50%;
	background-color: ${colors.PRIMARY};
`;

export const BlackCirclesHidingRect = styled.div`
	position: absolute;
	right: -8%;
	top: 203px;
	margin-top: 37%;
	background-color: ${colors.PRIMARY};
	width: 240px;
	height: 120px;
	z-index: 1;
`;

export const BlackC2 = styled.div`
	position: absolute;
	right: 8%;
	top: 8%;
	width: 180px;
	height: 180px;
	border-radius: 50%;
	border-style: dotted;
	border-width: 13px;
`;

export const BlackC3 = styled.div`
	position: absolute;
	right: 21%;
	top: 20%;
	width: 125px;
	height: 125px;
	border-radius: 50%;
	border-style: dotted;
	border-width: 13px;
`;

export const BlackC4 = styled.div`
	position: absolute;
	right: 33%;
	top: 30%;
	width: 75px;
	height: 75px;
	border-radius: 50%;
	border-style: dotted;
	border-width: 13px;
`;

export const BlueX = styled.div<PropsShape>`
	&:before {
		content: "+";
		position: absolute;
		color: ${colors.WATER};
		font-weight: 100;
		font-size: 40px;
		left: 18px;
		top: 249px;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	}
`;

export const WhitePlus = styled.div`
	&:before {
		content: "+";
		position: absolute;
		right: 5px;
		top: 247px;
		color: ${colors.WHITE};
		font-size: 50px;
		font-weight: 100;
	}
`;

export const BlackX = styled.div`
	&:before {
		content: "+";
		position: absolute;
		font-size: 40px;
		left: 2px;
		top: 334px;
	}
`;

export const LowerPurpleCircles = styled.div`
	position: absolute;
	left: -110px;
	top: 614px;
	width: 405px;
	height: 405px;
	border-radius: 50%;
	background-color: #5c49b3;
`;

export const LowerPurpleC2 = styled.div`
	position: absolute;
	left: 110px;
    top: 110px;
    width: 190px;
    height: 190px;
    border-radius: 50%;
	background-color: ${colors.PRIMARY};
`;

export const LowerBlackCircles = styled.div`
	position: absolute;
	left: -72px;
	top: 1036px;
	width: 1456px;
	height: 1456px;
	border-radius: 50%;
	background-color: ${colors.BLACK};
`;

export const LowerBlackC2 = styled.div`
	position: absolute;
	left: 442px;
    top: 442px;
    width: 440px;
    height: 440px;
    border-radius: 50%;
	background: linear-gradient(${colors.WATER}, ${colors.WATER_HOVER});
`;

export const BlueSemiOpaqueRect = styled.div`
	position: absolute;
	z-index: 40;
	left: 0px;
	top: 480px;
	background-color: ${colors.WATER};
	width: 79px;
	height: 69px;
	opacity: 0.46;
`;

export const PurpleSemiOpaqueRect = styled.div`
	position: absolute;
	z-index: 40;
	right: 0px;
	top: 650px;
	background-color: ${colors.PRIMARY_HOVER};
	width: 77px;
	height: 68px;
	opacity: 0.46;
`;
/* END OF CSS SHAPES */
