import React from 'react';
import { render, } from '@testing-library/react';
import HomepageContents from './HomepageContents';

describe('HomepageContents', () => {
  it('renders without crashing', () => {
    render(<HomepageContents />);
  });
});