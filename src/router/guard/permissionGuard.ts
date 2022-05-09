import type { Router } from 'vue-router'
import { useUserStore } from '../../store/modules/userStore'

const LOGIN_PATH = '/login'

const whitePathList: string[] = [LOGIN_PATH]

export function createPermissionGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    const token = userStore.getToken()

    if (whitePathList.includes(to.path)) {
      if (to.path === LOGIN_PATH && token) {
        next((to.query?.redirect as string) || '/')
        return
      }
      next()
      return
    }

    if (!token) {
      if (to.name !== 'Login') {
        next({ name: 'Login', replace: true })
        return
      }
    }

    next()
  })
}
