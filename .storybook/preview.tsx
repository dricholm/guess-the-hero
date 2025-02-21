import { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import '../styles/globals.scss';
import { withReactQuery } from './decorators/react-query';

initialize({
  onUnhandledRequest: (req, print) => {
    const url = new URL(req.url);
    if (url.pathname.startsWith('/img/')) return;

    print.warning();
  },
});

const preview: Preview = {
  decorators: [withReactQuery],
  loaders: [mswLoader],
  parameters: {
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
