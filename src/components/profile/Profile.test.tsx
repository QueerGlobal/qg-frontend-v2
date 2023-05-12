import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('Profile Component', () => {
  it('should render correctly', () => {
    render(<Profile />);
  });
});
