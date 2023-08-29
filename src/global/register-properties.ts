import { App } from 'vue'

import { formatUTCDate } from '@/utils/date-format'

export function registerProperties(app: App<Element>) {
  // 注册全局函数
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    formatTime(timer: string) {
      return formatUTCDate(timer)
    }
  }
}
