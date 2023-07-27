import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'
// import { registerApp } from '@/global'
// 不管是全局导入还是局部导入，都要引入样式
import 'element-plus/dist/index.css'

import '@/service/axio_demo'

const app = createApp(App)
app.use(router)
app.use(store)
// registerApp(app)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
