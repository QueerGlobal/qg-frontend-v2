import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

const ThrowOnRender = (): JSX.Element => {
  throw new Error('Test render error');
};

describe('ErrorBoundary', () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  test('renders fallback when a child throws during render', () => {
    render(
      <MemoryRouter>
        <ErrorBoundary>
          <ThrowOnRender />
        </ErrorBoundary>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /something went wrong/i })).toBeInTheDocument();
    expect(screen.getByText(/We could not load this page/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /return home/i })).toHaveAttribute('href', '/');
    expect(consoleErrorSpy).toHaveBeenCalled();
  });

  test('renders children when no error occurs', () => {
    render(
      <MemoryRouter>
        <ErrorBoundary>
          <p>Page content</p>
        </ErrorBoundary>
      </MemoryRouter>
    );

    expect(screen.getByText('Page content')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /something went wrong/i })).not.toBeInTheDocument();
  });
});
