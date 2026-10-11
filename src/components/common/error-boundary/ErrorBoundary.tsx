import React, { Component, ErrorInfo, ReactNode } from 'react';
import {
  FallbackContainer,
  FallbackHeading,
  FallbackMessage,
  HomeLink,
} from './ErrorBoundary.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <FallbackContainer>
          <FallbackHeading>Something went wrong</FallbackHeading>
          <FallbackMessage>
            We could not load this page. Please try again or return to the home
            page.
          </FallbackMessage>
          <HomeLink to="/">Return home</HomeLink>
        </FallbackContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
