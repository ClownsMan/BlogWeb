<script setup lang="ts">
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'
import Sidebar from './layout/Sidebar.vue'
import BlogList from './blog/BlogList.vue'
</script>

<template>
  <div class="home-container flex flex-col min-h-screen">
    <!-- 头部导航 -->
    <Header />

    <!-- 主要内容区域 -->
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- 博客列表区域 -->
        <div class="flex-grow">
          <div class="mb-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">最新文章</h2>
            <div class="h-1 w-20 bg-blue-500"></div>
          </div>
          <BlogList />
        </div>

        <!-- 侧边栏 -->
        <div class="hidden md:block">
          <Sidebar />
        </div>
      </div>
    </main>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<style scoped>
.home-container {
  background-color: #f5f7fa;
}

/* 移动端适配 */
@media (max-width: 768px) {
  main {
    padding: 15px;
  }

  .mb-6 h2 {
    font-size: 20px;
  }
}
</style>