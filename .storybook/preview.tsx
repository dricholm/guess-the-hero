import { Preview } from '@storybook/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import '../styles/globals.scss';
import { withReactQuery } from './decorators/react-query';

initialize();

const preview: Preview = {
  decorators: [
    // @ts-expect-error External dependency error
    mswDecorator,
    withReactQuery,
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
