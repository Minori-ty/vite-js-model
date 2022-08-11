module.exports = {
    'src/**/*.{js,ts,vue}': [
        'prettier --cache --write "src/**/*.{ts,tsx,vue}"',
        'eslint --cache "src/**/*.{ts,tsx,vue}"',
    ],
}
