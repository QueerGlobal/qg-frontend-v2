import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';
import HomepageCTA from '../homepageCTA/HomepageCTA';
import HomepageLinks from '../homepageLinks/HomepageLinks';
import HomepageCTA2 from '../homepageCTA2/HomepageCTA2';

describe('Homepage', () => {
  it('renders without crashing', () => {
    render(<Homepage />);
  });

  it('renders the HomepageCTA copy', () => {
    render(<Homepage />);
    expect(
      screen.getByText(
        /We support and prioritize the people who are least represented/
      )
    ).toBeInTheDocument();
  });

  it('renders the HomepageLinks copy', () => {
    render(<Homepage />);
    expect(
      screen.getByText(
        /Find what you need/
      )
    ).toBeInTheDocument();
  });

  it('renders the HomepageCTA2 copy', () => {
    render(<Homepage />);
    expect(
      screen.getByText(
        /Your face is lovely/
      )
    ).toBeInTheDocument();
  });
});
