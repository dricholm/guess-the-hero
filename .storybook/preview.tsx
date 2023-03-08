import { Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import React from 'react';
import '../styles/globals.scss';

initialize();

const queryClient = new QueryClient();

const preview: Preview = {
  decorators: [
    // @ts-expect-error External dependency error
    mswDecorator,
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
        <ReactQueryDevtools />
      </QueryClientProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
