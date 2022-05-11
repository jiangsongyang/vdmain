import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import { shouldMock } from '@/helper/utils'

const createAxiosInstance = (options: AxiosRequestConfig) => {
  const axiosOptions = { ...options }

  const instance = axios.create(axiosOptions)

  return instance
}

const setupRequestInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}

const setupResponseInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error)
    }
  )
}

const createGetRequest =
  (instance: AxiosInstance) =>
  (url: string, data: any, config: any = {}) =>
    new Promise((resolve, reject) => {
      // check mock
      const finalUrl = `/${shouldMock() ? 'mock' : 'api'}` + url
      // send request
      instance.get(finalUrl).then(resolve).catch(reject)
    })

const createPostRequest =
  (instance: AxiosInstance) => (url: string, data: any, config: any) =>
    new Promise((resolve, reject) => {
      instance.post(url, data).then(resolve).catch(reject)
    })

const createRequester = (options: AxiosRequestConfig) => {
  const instance = createAxiosInstance(options)

  setupRequestInterceptors(instance)

  setupResponseInterceptors(instance)

  return {
    get: createGetRequest(instance),
    post: createPostRequest(instance),
  }
}

export const getBaseRequest = (options: AxiosRequestConfig) => {
  return createRequester(options)
}
