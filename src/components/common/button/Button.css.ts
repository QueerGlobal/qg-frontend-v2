import styled from 'styled-components';
import colors from '../../../styles/colors';
export interface ButtonWrapperProps {
  label: string;
  active?: string;
  disabled?: boolean;
}

export const StyledButton = styled.button<ButtonWrapperProps>`
  background: ${(props) => {
    if (props.label === 'primary' && !props.disabled) {
      return colors.PRIMARY;
    }
    if (props.label === 'secondary' && !props.disabled) {
      return colors.SECONDARY;
    }
    if (props.label === 'donate' && !props.disabled) {
      return colors.DONATE;
    }
    if (props.label === 'water' && !props.disabled) {
      return colors.WATER;
    }
    if (props.disabled) {
      return colors.DISABLED;
    }
  }};
  border-radius: 3px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  width: 220px;
  height: 50px;
`;

export const ButtonText = styled.div<ButtonWrapperProps>`
  color: ${(props) => {
    if (props.disabled) {
      return colors.DISABLED_TEXT;
    } else {
      return colors.WHITE;
    }
  }};
  font-family: 'Work Sans', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
`;
