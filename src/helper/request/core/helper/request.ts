import type { AxiosRequestConfig } from 'axios'
import { useUserStore } from '@/store'

export const addTokenHeader = (config: AxiosRequestConfig) => {
  const userStore = useUserStore()
  const token = userStore.getToken()
  if (token) config.headers!.token = token
}
