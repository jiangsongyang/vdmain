import { defineStore } from 'pinia'
import { store } from '../core'
export type UserInfo = {
  userId: undefined
}

interface UserState {
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
    token: 'test token',
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
    async login(params: any) {},
  },
})

export function useUserStore() {
  return createUserStore(store)
}
