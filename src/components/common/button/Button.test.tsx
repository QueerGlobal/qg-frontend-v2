import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('should render correctly', () => {
    render(<Button buttonText={''} label={''} />);
  });
});
