import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  it('renders without crashing', () => {
    render(<Search />);
  });

  it('shows the search heading', () => {
    render(<Search />);
    expect(screen.getByRole('heading', { name: /search/i })).toBeInTheDocument();
  });
});
