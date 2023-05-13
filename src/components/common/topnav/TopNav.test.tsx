import React from 'react';
import { render } from '@testing-library/react';
import TopNav from './TopNav';

describe('TopNav Component', () => {
  it('should render correctly', () => {
    render(<TopNav windowWidth={false}/>);
  });
});
