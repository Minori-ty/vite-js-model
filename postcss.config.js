module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-px-to-viewport')({
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [/\/node_modules\//, /\/src\/components\//, /\/src\/views\//, /\/src\/views\/PC\//],
            include: [/\/src\/mobileComponents\//, /\/src\/views\/PC\//],
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 667,
        }),
    ],
}
