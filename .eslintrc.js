/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: [
    '.eslintrc.js',
    '.next/',
    'coverage',
    'cypress.config.ts',
    'cypress',
    'jest.config.js',
    'next.config.js',
    'next.sitemap.js',
    'node_modules/',
    'src/test',
    'stylelint.config.js',
  ],
  overrides: [
    {
      extends: ['plugin:jest/recommended'],
      files: ['*.spec.ts', '*.spec.tsx'],
      plugins: ['jest'],
      parserOptions: {
        project: './tsconfig.spec.json',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'typescript-sort-keys'],
  rules: {
    '@typescript-eslint/array-type': [2],
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
    '@typescript-eslint/no-unnecessary-condition': 2,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/prefer-nullish-coalescing': 2,
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    '@typescript-eslint/restrict-plus-operands': 2,
    'arrow-body-style': [2],
    'no-console': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'sort-keys': [2, 'asc', { natural: true }],
  },
};
