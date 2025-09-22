import { registerMicroApps, start, setDefaultMountApp, runAfterFirstMounted } from 'qiankun'
import type { RegistrableApp } from 'qiankun'

// 微应用的基础配置
const microApps: RegistrableApp[] = [
  {
    name: 'tech-blog', // 微应用名称，必须与子应用的package.json中的name一致
    entry: '//localhost:8081', // 微应用的入口URL
    container: '#micro-app-container', // 微应用的挂载容器
    activeRule: '/subapp-tech-blog', // 微应用的激活规则
    props: {
      // 可以传递给子应用的自定义属性
      message: '来自主应用的消息'
    }
  },
  // 可以在这里注册更多的微应用
  // {
  //   name: 'other-app',
  //   entry: '//localhost:8082',
  //   container: '#micro-app-container',
  //   activeRule: '/subapp-other'
  // }
]

// 注册微应用
registerMicroApps(microApps, {
  beforeLoad: [
    (app) => {
      console.log('[主应用] 开始加载微应用：', app.name)
    }
  ],
  beforeMount: [
    (app) => {
      console.log('[主应用] 开始挂载微应用：', app.name)
    }
  ],
  afterUnmount: [
    (app) => {
      console.log('[主应用] 微应用已卸载：', app.name)
    }
  ]
})

// 设置默认挂载的微应用
setDefaultMountApp('/')

// 在第一个微应用挂载后执行的回调
runAfterFirstMounted(() => {
  console.log('[主应用] 第一个微应用已挂载完成')
})

// 导出qiankun的启动方法
export const startQiankun = () => {
  start({
    sandbox: {
      strictStyleIsolation: true, // 开启严格的样式隔离
      experimentalStyleIsolation: true, // 开启实验性的样式隔离
    },
    prefetch: 'all', // 预加载所有微应用
    singular: true, // 单例模式，同时只能有一个微应用处于激活状态
  })
  console.log('[主应用] qiankun启动成功')
}

export default {
  startQiankun
}