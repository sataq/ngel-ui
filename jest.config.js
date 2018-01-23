const appConfig = require('./app-config.json');

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  testRegex: './app/.*spec\\.(ts|tsx)$',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  collectCoverageFrom: [
    'app/**/*.(ts|tsx)',
    '!app/**/*spec.(ts|tsx)',
    '!app/index.tsx',
  ],
  mapCoverage: true,
  globals: {
    CONFIG: appConfig['dev'],
  },
};
