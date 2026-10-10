import { render, screen } from '@testing-library/react';
import HomepageLinks from './HomepageLinks';

describe('HomepageLinks', () => {
  it('renders without crashing', () => {
    render(<HomepageLinks />);
  });

  it('shows the section heading and resource link button', () => {
    render(<HomepageLinks />);
    expect(screen.getByText('Find what you need')).toBeInTheDocument();
    expect(screen.getByText('resources')).toBeInTheDocument();
  });
});
