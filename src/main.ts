import { createApp } from 'vue'
import './style.css'
// 引入UnoCSS样式
import 'virtual:uno.css'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入Element Plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入API实例
import api from './api/index'

const app = createApp(App)
// 注册Element Plus
app.use(ElementPlus)
// 注册Element Plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
// 挂载API实例到Vue应用上
app.config.globalProperties.$api = api
app.mount('#app')
