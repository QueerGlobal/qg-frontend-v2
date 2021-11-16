import styled from "styled-components";
import { Container } from "react-bootstrap";

interface PropsShape {}

export const AboutContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const ColorBlue = styled.div`
	height: 2595px;
	background: #655dc6;
`;

export const Shapes = styled.div<PropsShape>`
	position: absolute;
	left: 20px;
	top: 50px;
	width: 200px;
	height: 300px;
`;

export const MiddleDiv = styled.div`
	position: absolute;
	width: 90%;
	background: #fff;
	color: #000;
	top: 30%;
	border-radius: 7px;
`;

export const Header = styled.h1`
	text-transform: uppercase;
	color: #000;
`;

export const Paragraph = styled.p`
	color: #1f1f1f;
	opacity: 1;
`;

export const TahuFont = styled.span`
	color: #655dc6;
	font-family: "Tahu!", sans-serif;
	font-size: 61px;
	font-weight: 500;
	line-height: 1.2;
	margin-left: 1.5rem;
	margin-bottom: 0.5rem;
	text-transform: lowercase;
`;
