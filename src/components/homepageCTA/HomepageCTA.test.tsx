import React from 'react';
import { render, } from '@testing-library/react';
import HomepageCTA from './HomepageCTA';

describe('HomepageCTA', () => {
  it('renders without crashing', () => {
    render(<HomepageCTA />);
  });
});