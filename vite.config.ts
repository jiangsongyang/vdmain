import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

const resolve = path.resolve

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@vicons': resolve(__dirname, './node_modules/@vicons'),
    },
  },
  plugins: [vue()],
})
