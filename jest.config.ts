import type { Config } from 'jest';

const config: Config = {
  testMatch: ['**/*.test.ts'],
  roots: ['<rootDir>/src'],
  clearMocks: true,
  transform: {
    '^.+\\.(t|j)sx?$': '@swc-node/jest',
  },
};

export default config;
