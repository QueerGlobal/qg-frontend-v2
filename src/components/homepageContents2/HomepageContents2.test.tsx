import React from 'react';
import { render } from '@testing-library/react';
import HomepageContents2 from './HomepageContents2';

describe('HomepageContents2', () => {
  it('renders without crashing', () => {
    render(<HomepageContents2 />);
  });

  it('does not nest heading elements', () => {
    const { container } = render(<HomepageContents2 />);
    container.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading) => {
      expect(
        heading.querySelector('h1, h2, h3, h4, h5, h6'),
      ).toBeNull();
    });
  });
});