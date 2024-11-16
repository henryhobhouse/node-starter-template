import type { Config } from 'jest';
import { createDefaultPreset } from 'ts-jest';

const defaultPreset = createDefaultPreset({ isolatedModules: true });

const config: Config = {
  ...defaultPreset,
  testMatch: ['**/*.test.ts'],
  roots: ['<rootDir>/src'],
  clearMocks: true,
}

export default config;
