import { App } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'

export function registerApp(app: App<Element>): void {
  // 注册全局的内容
  const store = createPinia()
  app.use(store)

  app.use(router)

  // app.use(ElementPlus)
}
