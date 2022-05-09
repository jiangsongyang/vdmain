import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/home', component: () => import('@/views/Home/Home.vue') },
  { path: '/login', component: () => import('@/views/Login/Login.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})