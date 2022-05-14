import { defineConfig, loadEnv } from 'vite'
import { createViteAlias, createVitePlugins, createViteServer } from './config'

export const createViteConfig = () =>
  defineConfig(({ mode }) => {
    const root = process.cwd()

    const env = loadEnv(mode, root)
    return {
      root,
      resolve: {
        alias: createViteAlias(root)
      },
      server: createViteServer(env),
      plugins: createVitePlugins(env)
    }
  })
