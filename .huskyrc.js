module.exports = {
    husky: {
        hooks: {
            'pre-commit': 'lint-staged --config .lintstagedrc.js',
        },
    },
}
