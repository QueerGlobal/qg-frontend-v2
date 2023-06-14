import styled from 'styled-components';
import colors from '../../styles/colors';

interface PropsShape {
	className: string;
}

export const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
`