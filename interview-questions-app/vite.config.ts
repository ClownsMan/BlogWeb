import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'
import { name } from './package.json'

// useDevMode 开启时与热更新插件冲突,使用变量切换
const useDevMode = true
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    qiankun(name, {
      useDevMode
    }),
    ...(
      useDevMode ? [] : [
        // reactRefresh()
      ]
    ),
  ],
  base: '/',
  server: {
    port: 8083,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
    host: '0.0.0.0'
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  build: {
    target: 'es2015',
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        format: 'umd',
        name: 'interviewQuestionsApp',
        entryFileNames: 'entry.js',
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'chunks/[name].[hash].js',
        manualChunks: undefined
      }
    }
  }
})