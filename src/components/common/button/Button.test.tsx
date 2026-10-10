import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders without crashing', () => {
    render(<Button buttonText="Click me" label="primary" />);
  });

  it('shows the button label text', () => {
    render(<Button buttonText="Click me" label="primary" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
