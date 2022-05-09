import type { Router } from 'vue-router'
import { useUserStore } from '../../store/modules/userStore'

const LOGIN_PATH = '/login'

export function createPermissionGuard(router: Router) {
  const userStore = useUserStore()

  router.beforeEach((to, from, next) => {
    const token = userStore.getToken()
    console.log(token)
    const redirectData: {
      path: string
      replace: boolean
    } = {
      path: LOGIN_PATH,
      replace: true,
    }
    console.log(to, from)

    next(redirectData)
  })
}
