import { render, screen } from '@testing-library/react';
import HiGreeting from './HiGreeting';

describe('HiGreeting', () => {
  it('renders without crashing', () => {
    render(<HiGreeting />);
  });

  it('shows the Hi greeting', () => {
    render(<HiGreeting />);
    expect(screen.getByText('Hi')).toBeInTheDocument();
  });
});
