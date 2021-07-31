module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules',
    '/.next/',
    'stories.tsx',
    '/mock',
    '/pages',
    '/constants',
    '/styles'
  ],
  coveragePathIgnorePatterns: [
    'stories.tsx',
    '/mock',
    '/pages',
    '/constants',
    '/styles'
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}
