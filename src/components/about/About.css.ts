import styled from 'styled-components';
import colors from "../../styles/colors";

/* PRIMARY: #655DC6 for purple */
/* COTTON_CANDY: #F5ACB8 for pink */
/* #48ADE5 for blue circle on home page */
import { Container } from "react-bootstrap";

interface PropsShape {
	// shape: string;
	left: string;
	top: string;
	width: string;
	height: string;
}

export const AboutContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const BackgroundColor = styled.div`
	height: 2595px;
	width: 100vw;
	background: ${colors.PRIMARY};
`;

export const Shape = styled.img<PropsShape>`
	position: absolute;
	left: ${({ left }) => left};
	top: ${({ top }) => top};
	width: ${({ width }) => width};
	height: ${({ height }) => height};
`;

export const MiddleDiv = styled.div`
	position: absolute;
	width: 90%;
	background: ${colors.WHITE};
	color: ${colors.BLACK};
	top: 30%;
	border-radius: 7px;
`;

export const Header = styled.h1`
	text-transform: uppercase;
	color: ${colors.BLACK};
`;

export const Paragraph = styled.p`
	color: ${colors.BLACK};
	opacity: 1;
`;

export const TahuFont = styled.span`
	color: ${colors.PRIMARY};
	font-family: "Tahu!", sans-serif;
	font-size: 61px;
	font-weight: 500;
	line-height: 1.2;
	margin-left: 1.5rem;
	margin-bottom: 0.5rem;
	text-transform: lowercase;
`;

export const WhiteBGSection = styled.div`
  background-color: ${colors.WHITE};
`;

export const DarkGreyBGSection = styled.div`
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
`;

export const AboutMain = styled.main`
  display: flex; 
  flex-direction: column; 
  margin: 10%;
`;

export const PurpleSpan = styled.span`
  color: ${colors.PRIMARY};
`;

export const DnDImg = styled.img`
display: block;
width: 75%;
height: auto;
`;