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

// 判断是否在qiankun环境中运行
let app: any

// 导出qiankun需要的生命周期钩子
export async function bootstrap() {
  console.log('主应用 bootstrap')
}

export async function mount(props: any) {
  app = createApp(App)
  // 注册Element Plus
  app.use(ElementPlus)
  // 注册Element Plus图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  
  app.use(router)
  // 挂载API实例到Vue应用上
  app.config.globalProperties.$api = api
  
  // 在qiankun环境中，挂载到props提供的容器，否则挂载到#app
  const container = props?.container || '#app'
  app.mount(container instanceof Element ? container.querySelector('#app') : container)
}

export async function unmount() {
  if (app) {
    app.unmount()
    app = null
  }
}

// 独立运行时的逻辑
if (!(window as any).__POWERED_BY_QIANKUN__) {
  mount()
}
