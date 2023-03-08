import { Decorator } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

const queryClient = new QueryClient();

export const withReactQuery: Decorator = (Story) => (
  <QueryClientProvider client={queryClient}>
    <Story />
    <ReactQueryDevtools />
  </QueryClientProvider>
);
