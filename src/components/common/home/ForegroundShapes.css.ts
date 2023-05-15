import styled from 'styled-components';
import colors from '../../../styles/colors';

/* PRIMARY: #655DC6 for purple */
/* COTTON_CANDY: #F5ACB8 for pink */
/* #48ADE5 for blue circle on home page */      

export const ForegroundContainer = styled.div`
	position: absolute;
	z-index: 4;
	top: 0;
	left: 0;
`;

export const BlueSemiOpaqueRect = styled.div`
	position: absolute;
	left: -4px;
	top: 480px;
	background-color: ${colors.WATER};
	width: 79px;
	height: 69px;
	opacity: 0.46;
`;

export const PurpleSemiOpaqueRect = styled.div`
	position: absolute;
	left: 415px;
	top: 650px;
	background-color: ${colors.PRIMARY_HOVER};
	width: 77px;
	height: 68px;
	opacity: 0.46;
`;

export const PurpleSemiOpaqueRect2 = styled.div`
	position: absolute;
	left: 350px;
	top: 1469px;
	background-color: ${colors.PRIMARY_HOVER};
	width: 158px;
	height: 68px;
	opacity: 0.46;
`;
