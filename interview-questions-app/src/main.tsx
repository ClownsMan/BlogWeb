import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let root: ReactDOM.Root | null = null

function render(props: any = {}) {
  const { container } = props
  const domElement = container ? container.querySelector('#root') : document.getElementById('root')
  
  if (domElement) {
    root = ReactDOM.createRoot(domElement)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }
}

renderWithQiankun({
  mount(props) {
    console.log('[react18] props from main framework', props)
    render(props)
  },
  bootstrap() {
    console.log('[react18] react app bootstraped')
  },
  unmount() {
    console.log('[react18] react app unmount')
    if (root) {
      root.unmount()
      root = null
    }
  },
  update() {
    console.log('[react18] react app update')
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}