import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import ErrorBoundary from './components/error/ErrorBoundary';

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  basepath: 'parkapp-task',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function AppWithQueryClient() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default AppWithQueryClient;
