import { render } from '@testing-library/react';
import BackgroundShapes from './BackgroundShapes';

describe('BackgroundShapes', () => {
  it('renders without crashing', () => {
    render(<BackgroundShapes />);
  });

  it('renders background svg artwork', () => {
    const { container } = render(<BackgroundShapes />);
    expect(container.querySelectorAll('svg').length).toBeGreaterThan(0);
  });
});
