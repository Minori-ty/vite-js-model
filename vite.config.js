import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'
import viteImagemin from 'vite-plugin-imagemin'
import importToCDN from 'vite-plugin-cdn-import'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
        viteCompression({
            //生成压缩包gz
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
        }),
        // 配置CDN
        importToCDN({
            modules: [
                {
                    name: 'vue',
                    var: 'Vue',
                    path: 'https://unpkg.com/vue@next',
                },
                {
                    name: 'element-plus',
                    var: 'ElementPlus',
                    path: `https://unpkg.com/element-plus`,
                    css: 'https://unpkg.com/element-plus/dist/index.css',
                },
            ],
        }),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 50,
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: 'removeViewBox',
                    },
                    {
                        name: 'removeEmptyAttrs',
                        active: false,
                    },
                ],
            },
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
            output: {
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: 'js/[name]-[hash].js',
                assetFileNames: '[ext]/[name]-[hash].[ext]',
            },
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
