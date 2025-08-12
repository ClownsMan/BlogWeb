<script setup lang="ts">
import BlogList from './components/BlogList.vue'
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <h1>我的博客</h1>
    </header>
    <main class="app-main">
      <BlogList />
    </main>
    <footer class="app-footer">
      <p>© 2023 我的博客. 保留所有权利.</p>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background-color: #4096ff;
  color: white;
  padding: 20px;
  text-align: center;
}

.app-main {
  flex: 1;
  padding: 20px;
}

.app-footer {
  background-color: #f0f0f0;
  padding: 15px;
  text-align: center;
  font-size: 14px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .app-header {
    padding: 15px;
  }

  .app-header h1 {
    font-size: 24px;
  }

  .app-main {
    padding: 10px;
  }
}
</style>
