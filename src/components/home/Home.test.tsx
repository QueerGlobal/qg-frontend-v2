import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('shows homepage copy', () => {
    render(<Home />);
    expect(
      screen.getByText(/Find what you need/)
    ).toBeInTheDocument();
  });
});
