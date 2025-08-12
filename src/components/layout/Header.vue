<script setup lang="ts"></script>

<template>
  <header class="header-container">
    <div class="header-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <h1 class="text-xl font-bold text-white">技术博客</h1>
          </div>
        </div>
        <nav class="hidden md:block">
          <ul class="flex space-x-8">
            <li><a href="#" class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">首页</a></li>
            <li><a href="#" class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">分类</a></li>
            <li><a href="#" class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">标签</a></li>
            <li><a href="#" class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">关于</a></li>
          </ul>
        </nav>
        <div class="md:hidden">
          <button class="text-white hover:text-gray-200 focus:outline-none">
            <Menu />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  background-color: #4096ff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
</style>