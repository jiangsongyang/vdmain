import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

const resolve = path.resolve

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
      {
        find: '@vicons',
        replacement: resolve(__dirname, './node_modules/@vicons'),
      },
    ],
  },
  plugins: [vue()],
})
