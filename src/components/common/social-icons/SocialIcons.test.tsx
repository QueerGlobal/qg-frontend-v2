import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialIcons from './SocialIcons';

describe('SocialIcons Component', () => {
  it('renders without crashing', () => {
    render(<SocialIcons />);
  });

  it('includes a Facebook social link', () => {
    render(<SocialIcons />);
    expect(
      screen.getByRole('link', { name: /facebook/i })
    ).toBeInTheDocument();
  });
});
