import styled from 'styled-components';
import colors from '../../styles/colors';

export const LinksWrapperProps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.WHITE};
  padding: 15px;
  width: 95%;
`;

export const Header = styled.h1`
  color: ${colors.BLACK};
  font-size: 24px;
  text-transform: uppercase;
`;
