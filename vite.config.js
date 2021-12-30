import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'
import viteCompression from 'vite-plugin-compression'
import externalGlobals from 'rollup-plugin-external-globals'
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'
// import viteImagemin from 'vite-plugin-imagemin'
import html from 'vite-plugin-html'

export default defineConfig({
    base: '/',
    resolve: {
        alias: {
            '/images': 'src/assets/images',
            styles: resolve(__dirname, 'src/styles'),
            router: resolve(__dirname, 'src/router'),
            views: resolve(__dirname, 'src/views'),
            components: resolve(__dirname, 'src/components'),
            data: resolve(__dirname, 'src/data'),
            utils: resolve(__dirname, 'src/utils'),
            src: resolve(__dirname, 'src'),
            assets: resolve(__dirname, 'src/assets'),
            mobile: resolve(__dirname, 'src/views/Mobile'),
            PC: resolve(__dirname, 'src/views/PC'),
            '/pic': 'src/assets/images/pic',
        },
    },
    plugins: [
        vue(),
        // 按需引入组件
        // ViteComponents({ customComponentResolvers: [ElementPlusResolver()] }),
        // 按需引入样式
        // styleImport({
        //     libs: [
        //         {
        //             libraryName: 'element-plus',
        //             esModule: true,
        //             resolveStyle: name => `element-plus/lib/theme-chalk/${name}.css`,
        //         },
        //     ],
        // }),
        viteCompression({
            //生成压缩包gz
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
        }),
        // viteImagemin({
        //     gifsicle: {
        //         optimizationLevel: 7,
        //         interlaced: false,
        //     },
        //     optipng: {
        //         optimizationLevel: 7,
        //     },
        //     mozjpeg: {
        //         quality: 50,
        //     },
        //     pngquant: {
        //         quality: [0.8, 0.9],
        //         speed: 4,
        //     },
        //     svgo: {
        //         plugins: [
        //             {
        //                 name: 'removeViewBox',
        //             },
        //             {
        //                 name: 'removeEmptyAttrs',
        //                 active: false,
        //             },
        //         ],
        //     },
        // }),
        html({
            minify: true,
        }),
    ],

    // 引入全局scss文件
    css: {
        preprocessorOptions: {
            // scss: {
            //     additionalData: '@import "./src/styles/variables";',
            // },
        },
    },
    build: {
        terserOptions: {
            compress: {
                //生产环境时移除console
                drop_console: true,
                drop_debugger: true,
            },
        },
        // 取消计算文件大小，加快打包速度
        brotliSize: false,
        sourcemap: true,
        // assetsDir: 'static/img',
        rollupOptions: {
            //     output: {
            //         chunkFileNames: 'static/js/[name]-[hash].js',
            //         entryFileNames: 'static/js/[name]-[hash].js',
            //         // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
            //     },

            //     // 配置CDN
            external: ['element-plus', 'vue'],
            plugins: [
                externalGlobals({
                    vue: 'Vue',
                    'element-plus': 'ElementPlus',
                    'element-plus/dist/index.css': 'foo',
                }),
            ],
        },
    },
    server: {
        // host: '0.0.0.0',
        port: 3001,
    },
})

// package.json:
// "gitHooks": {
//     "pre-push": "lint-staged"
// },
// "lint-staged": {
//     "*.{js,vue}": "eslint",
//     "src/**/*.{vue,css,less}": "stylelint"
// },
