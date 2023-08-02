import { createApp } from 'vue'
import App from './App.vue'

import { registerApp } from '@/global'
// 不管是全局导入还是局部导入，都要引入样式
import 'element-plus/dist/index.css'

// 重置默认css样式
import 'normalize.css'
import '@/assets/css/index.less'

const app = createApp(App)
registerApp(app)
app.mount('#app')
