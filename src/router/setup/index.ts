import { router } from '../core'
import { guards } from '../guard'
import type { App } from 'vue'
import type { Router } from 'vue-router'

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export const setupRouterGuard = (router: Router) => {
  guards.forEach((guard) => guard(router))
}
