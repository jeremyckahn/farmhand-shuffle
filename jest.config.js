/** @type {import('ts-jest').JestConfigWithTsJest} */

const modules = ['@mui', '@babel'].join('|')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  restoreMocks: true,
  clearMocks: true,
  transformIgnorePatterns: [`node_modules/(?!(${modules})/)`],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
}
