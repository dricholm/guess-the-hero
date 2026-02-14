import { defineConfig, globalIgnores } from 'eslint/config';

import nextVitals from 'eslint-config-next/core-web-vitals';
import pluginCypress from 'eslint-plugin-cypress';
import pluginJest from 'eslint-plugin-jest';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import storybook from 'eslint-plugin-storybook';

export default defineConfig([
  globalIgnores([
    '.next/**',
    '.storybook',
    '**/.eslintrc.js',
    '**/.next/',
    '**/coverage',
    '**/cypress.config.ts',
    '**/cypress',
    '**/jest.config.js',
    '**/next.config.js',
    '**/next.sitemap.js',
    '**/node_modules/',
    '**/stylelint.config.js',
    'build/**',
    'next-env.d.ts',
    'out/**',
    'public',
    'src/test',
  ]),
  ...nextVitals,
  ...storybook.configs['flat/recommended'],
  {
    files: ['cypress/**/*.js'],
    extends: [pluginCypress.configs.recommended],
    rules: {
      'cypress/no-unnecessary-waiting': 'off',
    },
  },
  {
    // update this to match your test files
    files: ['**/*.spec.js', '**/*.test.js'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
  eslintPluginPrettierRecommended,
]);
