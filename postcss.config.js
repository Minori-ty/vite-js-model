module.exports = {
    plugins: [
        require('autoprefixer'),
        // require('postcss-plugin-px2rem')({
        //   rootValue: 50, //换算基数，1rem相当于10px,值为37.5时,1rem为20px,淘宝的flex默认为1rem为10px
        //   propList: ['*'],
        //   // unitPrecision: 5, //允许REM单位增长到的十进制数字。
        //   //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
        //   // propBlackList: ['font-size', 'border'], //黑名单
        //   exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
        //   // selectorBlackList: [], //要忽略并保留为px的选择器
        //   // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
        //   // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
        //   mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
        //   minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
        // }),
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
            exclude: /\/src\/mobile\/phone.vue/,
            include: /\/src\/mobile\/mobile.vue/,
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 667,
        }),
    ],
}
