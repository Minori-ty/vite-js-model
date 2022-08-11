module.exports = {
    'src/**/*.{js,ts,vue}': [
        'prettier --cache --write "src/**/*.{ts,tsx,vue,less,scss,css}"',
        'eslint --cache "src/**/*.{ts,tsx,vue}"',
    ],
}
