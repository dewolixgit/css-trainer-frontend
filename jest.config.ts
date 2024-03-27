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
  },
};

export default config;
