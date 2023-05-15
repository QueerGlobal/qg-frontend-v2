import styled from 'styled-components';
import colors from '../../styles/colors';

export const HiGreetingContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 0px;
  left: 0px;
`;

export const Greeting = styled.p`
  position: absolute;
  color: ${colors.WHITE};
  left: 57px;
  top: 103px;
  font-style: oblique;
  font-size: 100px;
`;

export const TopImageContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 75px;
  width: 447px;
  height: 300px;

  & img {
    width: 447px;
    height: 300px;
  }
`;
