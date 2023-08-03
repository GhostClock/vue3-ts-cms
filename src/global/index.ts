import { App } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import { setupStore } from '@/store/login/login'

export function registerApp(app: App<Element>): void {
  // 注册全局的内容
  const store = createPinia()
  app.use(store)
  app.use(router)
  setupStore()
}
