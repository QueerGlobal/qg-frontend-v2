import styled from 'styled-components';
import colors from "../../styles/colors";

import Button from '../common/button/Button';
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
	width: 90%;
	background: ${colors.WHITE};
	text-align: center;
`;

export const Header = styled.h1`
	text-transform: uppercase;
	color: ${colors.BLACK};
`;

export const Paragraph = styled.p`
	color: ${colors.BLACK};
	opacity: 1;
`;

export const H2Element = styled.h2`
	font-size: 3.5em;
	font-weight: 700;
	margin-top: 6%;
`;

export const WhiteBGSection = styled.div`
  background-color: ${colors.WHITE};
  padding: 0 90px 90px;
`;

export const DarkGreyBGSection = styled.div`
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
  padding: 0 90px 90px;
`;

export const AboutMain = styled.main`
  display: flex; 
  flex-direction: column; 
  margin: 10%;
  position: absolute;
  top: 200px;
`;

export const PurpleSpan = styled.em`
  color: ${colors.PRIMARY};
`;

export const DnDImg = styled.img`
	width: 90%;
	height: auto;
`;

export const UnitedSection = styled.div`
	display: flex;
`;

export const UnitedImgGrid = styled.div`
	width: 48%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
	margin-right: 5%;
`;

export const UnitedImg = styled.img`
	width: 100%;
`;

export const UnitedDesc = styled.div`
	width: 45%;
`;

export const FamilyImgGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 10px;
	grid-auto-rows: minmax(100px, auto);
`;

export const FamilyImg = styled.img`
	width: 100%;
`;

export const BottomBtnsDiv = styled.div`
	text-align: center;
	width: 60%;
	margin: 10px auto;
`;

export const AboutBtn = styled(Button)`
	margin: 10px auto 10%;
`;

export const AboutBtn2 = styled(Button)`
	margin: auto;
`;
