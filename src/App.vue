<template>
  <div class="app-container">
    <!-- 主应用的内容 -->
    <RouterView />
    
    <!-- 微应用的挂载容器 -->
    <div id="micro-app-container"></div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { startQiankun } from './qiankun/index'

// 判断是否在独立运行模式下
const isStandalone = !(window as any).__POWERED_BY_QIANKUN__

onMounted(() => {
  // 只有在独立运行模式下才启动qiankun（作为主应用）
  if (isStandalone) {
    startQiankun()
  }
})
</script>

<style scoped>
.app-container {
  width: 100%;
  min-height: 100vh;
}
</style>
