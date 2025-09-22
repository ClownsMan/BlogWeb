import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetUno } from '@unocss/preset-uno'
import { resolve } from 'path'

// 判断是否作为子应用运行
const isSubApp = !!process.env.QIANKUN_ENV

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno()],
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  base: isSubApp ? '/subapp-tech-blog/' : '/', // 子应用的基础路径
  server: {
    port: 8081, // 子应用端口
    headers: {
      'Access-Control-Allow-Origin': '*', // 允许跨域
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
  },
  build: {
    target: 'es2015',
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        format: 'umd',
        name: 'tech-blog', // 子应用名称，必须与主应用中注册的名称一致
        entryFileNames: 'entry.js',
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'chunks/[name].[hash].js',
        manualChunks: undefined,
      },
    },
  },
})
