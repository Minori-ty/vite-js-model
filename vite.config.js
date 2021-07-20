import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components'),
      accets: resolve(__dirname, 'src/accets'),
      views: resolve(__dirname, 'src/views'),
      router: resolve(__dirname, 'src/router'),
      utils: resolve(__dirname, 'src/utils'),
      apis: resolve(__dirname, 'src/apis'),
      styles: resolve(__dirname, 'src/styles'),
    }
  },
  // 引入全局scss文件
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variables";'
      }
    }
  },
  build: {
    terserOptions: {
      //生产环境移除console
      compress: {
          drop_console: true,
      },
    },
    // 取消计算文件大小，加快打包速度
    brotliSize: false,
    sourcemap: true,
    rollupOptions: {}
  }
})
