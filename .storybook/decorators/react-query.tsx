import { Decorator } from '@storybook/nextjs-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export const withReactQuery: Decorator = (Story) => (
  <QueryClientProvider client={queryClient}>
    <Story />
    <ReactQueryDevtools />
  </QueryClientProvider>
);
