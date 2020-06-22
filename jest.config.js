module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testRegex: '.test.(j|t)sx?$',
  moduleNameMapper: {
    '\\.(png|gif|csv|jpg)$': '<rootDir>/src/test/config/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['<rootDir>/src/test/config/setup.ts'],
  transform: {
    '^.+.tsx?$': 'ts-jest',
    '^.+.svg$': '<rootDir>/src/test/config/textLoader.js',
    '^.+.jsx?$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsConfig: 'tsconfig.json',
    },
  },
};
