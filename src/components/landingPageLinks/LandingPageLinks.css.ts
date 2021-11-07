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
  font-family: openSans, sans-serif;
  color: ${colors.BLACK};
  font-size: 23px;
  text-transform: uppercase;
  margin: 32px 0 0 -40px;
`;
