import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'
import viteCompression from 'vite-plugin-compression'
import externalGlobals from 'rollup-plugin-external-globals'
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'

export default defineConfig({
    base: './',
    plugins: [
        vue(),
        // 按需引入组件
        ViteComponents({ customComponentResolvers: [ElementPlusResolver()] }),
        // 按需引入样式
        styleImport({
            libs: [
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    resolveStyle: name => `element-plus/lib/theme-chalk/${name}.css`,
                },
            ],
        }),
        viteCompression({
            //生成压缩包gz
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
        }),
    ],
    resolve: {
        alias: {
            components: resolve(__dirname, 'src/components'),
            assets: resolve(__dirname, 'src/assets'),
            views: resolve(__dirname, 'src/views'),
            router: resolve(__dirname, 'src/router'),
            utils: resolve(__dirname, 'src/utils'),
            apis: resolve(__dirname, 'src/apis'),
            styles: resolve(__dirname, 'src/styles'),
            public: resolve(__dirname, 'public'),
            images: resolve(__dirname, 'src/assets/images'),
        },
    },
    // 引入全局scss文件
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/styles/variables";',
            },
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
        assetsDir: 'static/img/',
        rollupOptions: {
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
            },

            // 配置CDN
            external: ['element-plus', 'vue'],
            plugins: [
                externalGlobals({
                    vue: 'Vue',
                    'element-plus': 'ElementPlus',
                }),
            ],
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3001,
    },
})

// package.json:
// "gitHooks": {
//     "pre-commit": "npm run all",
//     "pre-push": "lint-staged"
// },
// "lint-staged": {
//     "*.{js,vue}": "eslint",
//     "src/**/*.{vue,css,less}": "stylelint"
// },
