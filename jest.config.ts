import type { Config } from 'jest';

const config: Config = {
  coverageDirectory: '/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  preset: 'ts-jest',
  setupFiles: ['jest.setup.ts'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  verbose: true
}

export default config;
