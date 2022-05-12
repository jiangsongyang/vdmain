import { useRouter } from 'vue-router'
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
      const res = await userAPI.login(loginState)
      console.log(res);
    },
  },
})

export function useUserStore() {
  return createUserStore(store)
}
