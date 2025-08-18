<script setup lang="ts">
import Header from '../components/layout/Header.vue'
import Footer from '../components//layout/Footer.vue'
import Sidebar from '../components//layout/Sidebar.vue'
import BlogList from '../components//blog/BlogList.vue'
</script>

<template>
  <div class="home-container flex flex-col min-h-screen">
    <!-- 头部导航 -->
    <Header />

    <!-- 主要内容区域 -->
    <main class="flex-grow">
      <!-- 英雄区域 -->
      <section class="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2 space-y-6">
              <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                分享技术<br/>
                <span class="text-blue-600">探索未来</span>
              </h1>
              <p class="text-lg text-gray-600 max-w-lg">
                专注于前端开发、全栈技术和软件工程最佳实践。与你一起成长，共同探索技术的无限可能。
              </p>
              <div class="flex flex-wrap gap-4">
                <button class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2">
                  阅读最新文章
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <button class="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  关于博主
                </button>
              </div>
            </div>
            <div class="md:w-1/2 relative">
              <div class="w-full h-64 md:h-80 bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <img src="https://picsum.photos/800/600" alt="代码编辑器" class="w-full h-full object-cover"/>
              </div>
              <div class="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 animate-pulse">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-sm font-medium">持续更新</span>
                <span class="text-xs text-gray-500">每周两篇小文章</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 统计数据区域 -->
      <section class="py-12 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-3 gap-8 text-center">
            <div class="space-y-2">
              <div class="text-3xl md:text-4xl font-bold text-blue-600">150+</div>
              <div class="text-gray-600">技术文章</div>
            </div>
            <div class="space-y-2">
              <div class="text-3xl md:text-4xl font-bold text-blue-600">10K+</div>
              <div class="text-gray-600">月访问量</div>
            </div>
            <div class="space-y-2">
              <div class="text-3xl md:text-4xl font-bold text-blue-600">5</div>
              <div class="text-gray-600">年经验</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 主要内容区域 -->
      <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row gap-8">
            <!-- 博客列表区域 -->
            <div class="flex-grow">
              <!-- <div class="mb-6">
                <h2 class="text-2xl font-bold text-gray-900 mb-2">最新文章</h2>
                <div class="h-1 w-20 bg-blue-500"></div>
              </div> -->
              <BlogList />
            </div>

            <!-- 侧边栏 -->
            <div class="hidden md:block w-64 flex-shrink-0">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
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