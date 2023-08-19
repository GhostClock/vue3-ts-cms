import { createApp } from 'vue'
import App from './App.vue'

import { registerApp } from '@/global'

const app = createApp(App)
registerApp(app)
app.mount('#app')
