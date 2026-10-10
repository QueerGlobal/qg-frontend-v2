import { render } from '@testing-library/react';
import ForegroundShapes from './ForegroundShapes';

describe('ForegroundShapes', () => {
  it('renders without crashing', () => {
    render(<ForegroundShapes />);
  });

  it('renders decorative shape elements', () => {
    const { container } = render(<ForegroundShapes />);
    expect(container.querySelectorAll('div').length).toBeGreaterThan(0);
  });
});
