module.exports = {
    coverageDirectory: '<rootDir>/coverage',
    coverageReporters: ['lcov', 'text', 'text-summary'],
    reporters: ['default', './tools/coverage-total-reporter.js'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testRegex: '\\.(spec|test)\\.ts?$',
    moduleFileExtensions: ['js', 'ts'],
    modulePaths: ['<rootDir>/test/'],
    testEnvironment: 'node',
};
