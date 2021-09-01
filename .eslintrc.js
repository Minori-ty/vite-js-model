module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        'plugin:vue/vue2-essential',
        'eslint:recommended',
        '@vue/prettier',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': [
            'warn',
            {
                singleQute: true,
                semi: false,
                // trailingComma:'es5',
                endOfLine: 'auto',
            },
        ],
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
            },
        ],
    },
}
