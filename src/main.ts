import { createApp } from 'vue'

import App from './App.vue'

import { registerApp } from '@/global'
// 不管是全局导入还是局部导入，都要引入样式
import 'element-plus/dist/index.css'

// 重置默认css样式
import 'normalize.css'
import '@/assets/css/index.less'

// import '@/service/axio_demo'
import Request from './service'

const app = createApp(App)
registerApp(app)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

interface DataType {
  data: unknown // 未知类型
  returnCode: string
  success: boolean
}
Request.get<DataType>({
  url: '/home/multidata',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求拦截器：请求成功拦截')
      return config
    },
    responseInterceptor: (config) => {
      console.log('请求拦截器：响应成功拦截')
      return config
    }
  },
  showLoading: false
})
  .then((response) => {
    console.log(response.data)
    console.log(response.returnCode)
    console.log(response.success)
  })
  .catch((error) => {
    console.log(error)
  })
