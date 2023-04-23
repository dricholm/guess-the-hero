'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import queryClient from 'src/data/query-client';

interface QueryProviderProps {
  children: ReactNode;
}

const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default QueryProvider;
