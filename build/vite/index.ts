import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { transformENV } from './helper'
import * as path from 'path'

const resolve = path.resolve

export interface ViteEnv {
  VITE_SERVER_PORT: number
  VITE_USE_MOCK: boolean
  VITE_PUBLIC_PATH: string
}

export const createViteConfig = () =>
  defineConfig(({ mode, command }) => {
    const root = process.cwd()
    const env = loadEnv(mode, root)
    const { VITE_SERVER_PORT } = transformENV(env as unknown as ViteEnv)
    return {
      root,
      resolve: {
        alias: [
          {
            find: '@',
            replacement: resolve(root, 'src'),
          },
          {
            find: '@vicons',
            replacement: resolve(root, './node_modules/@vicons'),
          },
        ],
      },
      server: {
        host: true,
        port: VITE_SERVER_PORT,
        // proxy: createProxy(VITE_PROXY),
      },
      plugins: [vue()],
    }
  })
