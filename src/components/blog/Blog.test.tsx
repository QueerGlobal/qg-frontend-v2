import { render, screen } from '@testing-library/react';
import Blog from './Blog';

describe('Blog', () => {
  it('renders without crashing', () => {
    render(<Blog />);
  });

  it('shows the blog heading', () => {
    render(<Blog />);
    expect(screen.getByRole('heading', { name: /blog/i })).toBeInTheDocument();
  });
});
