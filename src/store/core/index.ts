import { createPinia } from 'pinia'
import type { Pinia } from 'pinia'
import { piniaPlugins } from './plugins'

const installPiniaPlugins = (pinia: Pinia) => {
  piniaPlugins.forEach((plugin) => {
    pinia.use(plugin as any)
  })
}

const createStore = () => {
  const pinia = createPinia()
  installPiniaPlugins(pinia)
  return pinia
}

export const store = createStore()
