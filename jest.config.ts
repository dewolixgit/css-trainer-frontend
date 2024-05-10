import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  passWithNoTests: true,
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    ['^.+\\.(t|j)sx?$']: 'ts-jest',
  },
  moduleNameMapper: {
    ['^utils/(.*)$']: '<rootDir>/src/utils/$1',
    ['^config/(.*)$']: '<rootDir>/src/config/$1',
    ['^stores/(.*)$']: '<rootDir>/src/stores/$1',
  },
};

export default config;
