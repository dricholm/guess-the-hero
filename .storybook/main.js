const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: {
            auto: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        },
        sassLoaderOptions: {
          sassOptions: {
            includePaths: [path.resolve(__dirname, '../styles')],
          },
        },
      },
    },
    'storybook-addon-next-router',
  ],
  core: {
    builder: 'webpack5',
  },
  env: {
    // Until storybook-addon-next-router is not updated for Next.js 13
    // See https://github.com/lifeiscontent/storybook-addon-next-router/issues/68
    __NEXT_NEW_LINK_BEHAVIOR: true,
  },
  staticDirs: ['../public'],
  stories: [
    '../app/**/*.stories.mdx',
    '../app/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  webpackFinal: (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
};
