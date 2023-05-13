import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('should render correctly', () => {
    render(<Navbar />);
  });
});
