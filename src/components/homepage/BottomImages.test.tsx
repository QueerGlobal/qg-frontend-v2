import { render } from '@testing-library/react';
import BottomImages from './BottomImages';

describe('BottomImages', () => {
  it('renders without crashing', () => {
    render(<BottomImages />);
  });

  it('renders two images', () => {
    const { container } = render(<BottomImages />);
    expect(container.querySelectorAll('img')).toHaveLength(2);
  });
});
