import styled from 'styled-components';
import colors from "../../styles/colors";

import { Container } from "react-bootstrap";

interface PropsShape {
	// shape: string;
	left: string;
	top: string;
	width: string;
	height: string;
}

export const Shape = styled.img<PropsShape>`
	position: absolute;
	left: ${({ left }) => left};
	top: ${({ top }) => top};
	width: ${({ width }) => width};
	height: ${({ height }) => height};
`;

export const AboutContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

/* PRIMARY: #655DC6 for purple */
export const BackgroundColor = styled.div`
	height: 2595px;
	width: 100vw;
	background: ${colors.PRIMARY}; 
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
  position: absolute;
  top: 200px;
`;

export const PurpleSpan = styled.span`
  color: ${colors.PRIMARY};
`;

export const DnDImg = styled.img`
	display: block;
	width: 75%;
	height: auto;
`;

export const UnitedSection = styled.div`
	display: flex;
`;

export const UnitedImgGrid = styled.div`
	width: 50%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
`;

export const UnitedImg = styled.img`
	width: 100%;
`;

export const UnitedDesc = styled.div`
	width: 50%;
`;

export const FamilyImgGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 10px;
`;

export const FamilyImg = styled.img`
	width: 100%;
`;
