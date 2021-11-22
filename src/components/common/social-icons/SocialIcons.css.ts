import styled from "styled-components";
import { Container } from "react-bootstrap";

export const SocialContainer = styled(Container)`
	display: flex;
	margin: 0 auto;
`;

export const IconsWrapper = styled.div`
	display: grid;
	grid-template-columns: auto auto auto auto auto;
	grid-column-gap: 20px;
	margin: 7px auto;
	min-width: 85%;
`;

export const Icon = styled.img`
	min-width: 20px;
	min-height: 20px;
	max-width: 44px;
	max-height: 44px;
`;
