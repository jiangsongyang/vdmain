import { defineStore } from 'pinia'
import { router } from '@/router'
import { useUserAPI, LoginParams } from '@/api'
import type { UserInfoResult } from '@/api'
import { useStorage } from '@/hooks'
import { store } from '../core'

const ID = 'user'

type UserState = {
  userInfo: UserInfoResult | undefined
  token?: string
}

const createUserStore = defineStore(ID, {
  state: (): UserState => ({
    // user info
    userInfo: undefined,
    // token
    token: undefined
  }),
  actions: {
    getToken() {
      return this.token
    },
    getUseInfo() {
      return this.userInfo
    },
    setToken(token: string | undefined) {
      this.token = token
    },
    setUserInfo(userInfo: UserInfoResult | undefined) {
      this.userInfo = userInfo || undefined
    },
    /**
     * @description: login
     */
    async login(loginState: LoginParams) {
      const userAPI = useUserAPI()
      const { data: loginData } = await userAPI.login(loginState)
      this.setToken(loginData.token)
      const { data: userInfo } = await userAPI.getUserInfo()
      this.setUserInfo(userInfo)
      router.push({ name: 'Home' })
    },
    /**
     * @description: logout
     */
    async logout() {
      if (this.token) {
        try {
          // you can do some other things
        } catch {
          console.log('注销Token失败')
        }
      }
      this.cleanStore()
      router.push({ name: 'Login' })
    },
    cleanStore() {
      const { remove } = useStorage()
      this.setToken(undefined)
      this.setUserInfo(undefined)
      remove(ID)
    }
  }
})

export function useUserStore() {
  return createUserStore(store)
}
