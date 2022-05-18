import styled from 'styled-components';
import colors from '../../styles/colors';

export const LinksWrapperProps = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${colors.WHITE};
  padding: 15px;
  width: 95%;
`;

export const Header = styled.h1`
  grid-column: 1 / 3;
  color: ${colors.BLACK};
  font-size: 1.5rem;
  font-weight: 800;
  padding-top: 16px;
  text-transform: uppercase;
`;

export const ResoucesWrapper = styled.div`
  grid-column: 2 / 3;
  margin: 0 auto;
`;
