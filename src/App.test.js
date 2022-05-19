import { render, screen } from '@testing-library/react';
import App from './App';

test('renders support us link', () => {
  render(<App />);
  const linkElement = screen.getByText(/SUPPORT US/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders home page heading', () => {
  render(<App />);
  const homePageText = screen.getByText(/WE'RE QUEER GLOBAL/i);
  expect(homePageText).toBeInTheDocument();
});
