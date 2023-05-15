import React from 'react';
import { render, } from '@testing-library/react';
import HomepageContents2 from './HomepageContents2';

describe('HomepageContents2', () => {
  it('renders without crashing', () => {
    render(<HomepageContents2 />);
  });
});