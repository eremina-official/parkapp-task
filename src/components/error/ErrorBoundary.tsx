import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      return (
        fallback ?? (
          <div className="flex min-h-screen items-center justify-center bg-white p-6 text-center text-(--color-blue-3)">
            <div className="rounded-(--border-radius) border-2 border-(--color-blue-3) p-6">
              <h2 className="mb-2 text-xl font-bold">Coś poszło nie tak</h2>
              <p className="opacity-80">Spróbuj odświeżyć stronę lub wrócić później.</p>
            </div>
          </div>
        )
      );
    }

    return children;
  }
}

export default ErrorBoundary; 