import { createBaseRequest } from '@/helper/request'
import type { LoginParams, LoginResult } from './model'

const AXIOS_OPTIONS = {}

export const createUserAPI = () => {
  return {
    login: (data: LoginParams) =>
      createBaseRequest(AXIOS_OPTIONS).post< LoginResult>(
        '/login',
        data
      ),
  }
}
