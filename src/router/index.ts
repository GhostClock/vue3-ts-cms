import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    // 非登录页进入时，判断是否有token
    const token = localCache.getCache('token')
    // 如果没有token跳转到登录页
    if (!token) {
      return '/login'
    }
  }
})

export default router
