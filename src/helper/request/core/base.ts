import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'

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

const createGetRequest = () => {}

const createPostRequest = () => {}

const createRequester = (options: AxiosRequestConfig) => {
  const instance = createAxiosInstance(options)

  setupRequestInterceptors(instance)

  setupResponseInterceptors(instance)

  return {
    get: createGetRequest(),
    post: createPostRequest(),
  }
}

export const getBaseRequest = (options: AxiosRequestConfig) => {
  return createRequester(options)
}
