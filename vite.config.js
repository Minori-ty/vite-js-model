import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    components: resolve(__dirname, 'src/components'),
    accets: resolve(__dirname, 'src/accets'),
    views: resolve(__dirname, 'src/views'),
    router: resolve(__dirname, 'src/router'),
    utils: resolve(__dirname, 'src/utils'),
    apis: resolve(__dirname, 'src/apis'),
    styles: resolve(__dirname, 'src/styles'),
  },
  plugins: [vue()],
})
