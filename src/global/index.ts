// 不管是全局导入还是局部导入，都要引入样式
import 'element-plus/dist/index.css'
// 重置默认css样式
import 'normalize.css'
import '@/assets/css/index.less'

// mock需要引入才能使用
import '@/service/mock/mockServe'

import { App } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import { setupStore } from '@/store/login/login'

export function registerApp(app: App<Element>): void {
  // 注册全局的内容
  const store = createPinia()
  app.use(store)
  // 解决刷新页面跳转到notFond页面的问题
  // 原因：由于路由守卫是后面回调的，开始已经了错误的匹配，导致路由跳转错误
  setupStore()
  app.use(router)
}
