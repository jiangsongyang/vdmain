import { router } from '@/router'
import { defineStore } from 'pinia'
import { store } from '../core'
import { useUserAPI, LoginParams } from '@/api'

export type UserInfo = {
  userId: undefined
}

type UserState = {
  userInfo: UserInfo
  token?: string
  roleList: any
}

const createUserStore = defineStore('user', {
  state: (): UserState => ({
    // user info
    userInfo: {
      userId: undefined,
    },
    // token
    token: undefined,
    // roleList
    roleList: [],
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo
    },
  },
  actions: {
    getToken() {
      return this.token
    },

    setToken(info: string | undefined) {
      this.token = info ? info : ''
    },
    /**
     * @description: login
     */
    async login(loginState: LoginParams) {
      const userAPI = useUserAPI()
      const { data } = await userAPI.login(loginState)
      this.setToken(data.token)
      router.push('/')
    },
  },
})

export function useUserStore() {
  return createUserStore(store)
}
