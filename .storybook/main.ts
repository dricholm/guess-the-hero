import type { StorybookConfig } from '@storybook/nextjs-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  addons: [],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
  stories: [
    '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  viteFinal: (config) =>
    mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            loadPaths: ['./styles'],
          },
        },
      },
    }),
};
export default config;
