import React, { FC } from 'react';

import { StyledButton, ButtonText } from './Button.css';

export interface ButtonProps {
  buttonText: string;
  handleClick?: () => any;
  disabled?: boolean;
  label: string;
}
const Button: FC<ButtonProps> = ({
  buttonText,
  handleClick,
  disabled = false,
  label,
}) => {
  return (
    <StyledButton onClick={handleClick} label={label} disabled={disabled}>
      <ButtonText label={label}>{buttonText}</ButtonText>
    </StyledButton>
  );
};

export default Button;