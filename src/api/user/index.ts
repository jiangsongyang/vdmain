import { createBaseRequest } from '@/helper/request'

const AXIOS_OPTIONS = {}

export const createUserAPI = () => {
  return {
    login: (data: any) => {
      const request = createBaseRequest(AXIOS_OPTIONS)
      return new Promise(async () => {
        return await request.get('/login', data)
      })
    },
  }
}
