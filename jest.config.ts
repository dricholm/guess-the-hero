import { Config } from 'jest';

const config: Config = {
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    'src/**/*.{ts,tsx}',
    '!**/*.stories.tsx',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  modulePaths: ['<rootDir>'],
  preset: 'ts-jest',
  restoreMocks: true,
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/src/test/jest-setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/node_modules/',
  ],
  transform: {
    '^.+\\.(j|t)sx?$': ['ts-jest', { tsconfig: 'tsconfig.spec.json' }],
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

export default config;
