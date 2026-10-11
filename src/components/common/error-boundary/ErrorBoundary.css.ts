import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../../styles/colors';

export const FallbackContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  margin: 10%;
  text-align: center;
  color: ${colors.BLACK};
`;

export const FallbackHeading = styled.h1`
  color: ${colors.PRIMARY};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const FallbackMessage = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

export const HomeLink = styled(Link)`
  color: ${colors.PRIMARY};
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    color: ${colors.PRIMARY_HOVER};
  }
`;
