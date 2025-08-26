import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

function AppWithQueryClient() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export default AppWithQueryClient;
