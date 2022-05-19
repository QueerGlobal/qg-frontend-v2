import { render, screen } from '@testing-library/react';
import About from './About';

test('renders about text', () => {
  render(<About />);
  const aboutText = screen.getByText(/ABOUT US/i);
  expect(aboutText).toBeInTheDocument();
});