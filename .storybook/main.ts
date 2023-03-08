import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  docs: { autodocs: 'tag' },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  stories: [
    '../@(app|src)/**/*.mdx',
    '../@(app|src)/**/*.stories.@(js|jsx|ts|tsx)',
  ],
};

export default config;
