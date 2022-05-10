import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { store } from '../core'
import { MOCKLoginAPI } from '../../mock'

export type UserInfo = {
  userId: undefined
}

type UserState = {
  userInfo: UserInfo
  token?: string
  roleList: any
}

export type LoginState = {
  name: string
  password: string
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
    async login(loginState: LoginState) {
      const { data } = await MOCKLoginAPI()
      const { token } = data
      this.setToken(token)
      // to home
      const router = await useRouter()
      router.push('/')
    },
  },
})

export function useUserStore() {
  return createUserStore(store)
}
