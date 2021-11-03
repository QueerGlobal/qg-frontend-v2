import React, { FC } from 'react';

import { Container, StyledButton, ButtonText } from './Button.css';

export interface ButtonProps {
  buttonText: string;
  handleClick?: () => void; //optional until we know where it's clicking to
}
const Button: FC<ButtonProps> = ({ buttonText, handleClick }: ButtonProps) => {
  return (
    <Container>
      <StyledButton onClick={handleClick}>
        <ButtonText>{buttonText}</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default Button;
