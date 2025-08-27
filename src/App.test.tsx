import '@testing-library/jest-dom/vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

// Mock Remote component to avoid SVG imports inside it
vi.mock('./features/remotes/components/Remote', () => ({
  default: ({ remoteName }: { remoteName: string }) => (
    <div data-testid="mock-remote">MockRemote: {remoteName}</div>
  ),
}));

// Mock SVG React imports used directly in App
vi.mock('./assets/parkappLogo.svg?react', () => ({ default: () => <div data-testid="logo" /> }));
vi.mock('./assets/arrowLeft.svg?react', () => ({ default: () => <div data-testid="arrow" /> }));
vi.mock('./assets/radio.svg?react', () => ({ default: () => <div data-testid="radio" /> }));
vi.mock('./assets/radioSelected.svg?react', () => ({ default: () => <div data-testid="radio-selected" /> }));

// Mock graphql-request request function
vi.mock('graphql-request', async () => {
  return {
    default: vi.fn(),
  };
});

import App from './App';
import request from 'graphql-request';

function renderWithProviders(ui: React.ReactElement) {
  const qc = new QueryClient();
  return render(<QueryClientProvider client={qc}>{ui}</QueryClientProvider>);
}

describe('App', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders data and remote when posts are returned', async () => {
    (request as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      posts: [
        { id: '1', title: 'Remote 1', body: 'b' },
        { id: '2', title: 'Remote 2', body: 'b' },
      ],
    });

    renderWithProviders(<App />);

    // shows loading first
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // then renders header and mocked remote
    expect(await screen.findByText('Otwórz bramę')).toBeInTheDocument();
    expect(screen.getByTestId('mock-remote')).toHaveTextContent('Remote 1');
  });

  it('shows empty state when no posts', async () => {
    (request as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({ posts: [] });

    renderWithProviders(<App />);

    expect(await screen.findByText('Currently no remotes available')).toBeInTheDocument();
  });

  it('shows error state when request fails', async () => {
    (request as unknown as ReturnType<typeof vi.fn>).mockRejectedValueOnce(new Error('boom'));

    // silence expected error logs from React Query
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    renderWithProviders(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Error:/)).toBeInTheDocument();
    });

    spy.mockRestore();
  });
}); 