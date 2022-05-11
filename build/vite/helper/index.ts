import { isBoolean } from '../../../src/helper/utils'

import { ViteEnv } from '../index'

type TransformENV = (ViteEnv) => ViteEnv

export const transformENV: TransformENV = (env: ViteEnv) => {
  const ret: ViteEnv = {
    VITE_SERVER_PORT: undefined,
    VITE_USE_MOCK: undefined,
    VITE_PUBLIC_PATH: undefined,
  }
  for (const key in env) {
    if (key.startsWith('VITE_') && isBoolean(env[key])) {
      ret[key] = !!env[key]
    }
    ret[key] = env[key]
  }
  return ret
}
