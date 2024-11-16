import type { Config } from 'jest';

const config: Config = {
  testMatch: ['**/*.test.ts'],
  roots: ['<rootDir>/src'],
  clearMocks: true,
  transform: {
    '^.+\\.(t|j)sx?$': '@swc-node/jest',
  },
  extensionsToTreatAsEsm: ['.ts'],
  collectCoverageFrom: ['./src/**'],
};

export default config;
