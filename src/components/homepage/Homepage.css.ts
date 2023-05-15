import styled from 'styled-components';
import colors from '../../styles/colors';

interface PropsShape {
	className: string;
}

export const PageWrapper = styled.div<PropsShape>`
  position: relative;
  background-color: ${colors.PRIMARY};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 20px 0 20px; 
  width: 100%;
  height: 2674px;
`;
