<script setup lang="ts">
import { RouterLink } from 'vue-router'
const navList = [
  {
    path: '/',
    name: '首页'
  },
  {
    path: '/tech-share',
    name: '技术分享'
  },
  {
    path: '/tools',
    name: '工具'
  },
  // {
  //   path: '/about',
  //   name: '关于'
  // }
]
</script>

<template>
  <header class="header-container">
    <div class="header-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 w-full">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <div class="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center mr-2">
              <span class="font-bold">T</span>
            </div>
            <h1 class="text-xl font-bold text-blue-600">TechBlog</h1>
          </div>
        </div>
        <nav class="hidden md:block">
          <div class="flex space-x-6">
            <div>
              <router-link v-for="item in navList" :key="item.path" :to="item.path" class="pg font-semibold text-gray-700 hover:text-blue-600 px-6 py-2 rounded-md text-base font-medium transition-colors duration-200">{{ item.name }}</router-link>
            </div>
          </div>
        </nav>
        <!-- <div class="flex items-center space-x-4">
          <button class="text-gray-600 hover:text-blue-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button class="text-gray-600 hover:text-blue-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </button>
          <div class="md:hidden">
            <button class="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div> -->
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  width: 100%;
  background-color: transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .header-content {
    height: 56px;
  }
}

.pg {
  font-family: "PingFang SC", "苹方-简", "PingFang", -apple-system, sans-serif;
}
</style>