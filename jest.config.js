module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node', 'vue'],
    testMatch: ['**/__tests__/**/*.spec.js', '**/tests/**/*.spec.js'],
    moduleNameMapper: {
        '^main(.*)$': '<rootDir>/src$1',
    },
}
