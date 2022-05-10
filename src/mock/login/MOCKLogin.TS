import { createBaseRequest } from '../../helper/request'

const MOCK = true

const GLOBAL_CONFIG = {}

export const MOCKLoginAPI = (data: any = {}) => {
  return {
    code: 0,
    data: {
      token: 'test token',
    },
    message: '',
    type: 'success',
  }
}
