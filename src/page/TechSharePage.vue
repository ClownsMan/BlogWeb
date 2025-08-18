<script setup lang="ts">
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';

// 模拟数据
const categories = [
  { id: 'frontend', name: '前端开发', count: 45, color: 'bg-blue-500', description: 'React、Vue、TypeScript等前端技术' },
  { id: 'backend', name: '后端开发', count: 32, color: 'bg-green-500', description: 'Node.js、Python、数据库技术' },
  { id: 'fullstack', name: '全栈开发', count: 28, color: 'bg-purple-500', description: '前后端一体化解决方案' },
  { id: 'performance', name: '性能优化', count: 24, color: 'bg-orange-500', description: 'Web性能、加载速度优化' },
  { id: 'engineering', name: '工程化', count: 22, color: 'bg-red-500', description: '构建工具、CI/CD、自动化' },
  { id: 'cloud', name: '云服务', count: 18, color: 'bg-cyan-500', description: 'AWS、Docker、微服务' },
  { id: 'algorithm', name: '算法与数据结构', count: 15, color: 'bg-indigo-500', description: '编程基础、算法优化' },
  { id: 'mobile', name: '移动开发', count: 12, color: 'bg-pink-500', description: 'React Native、Flutter' },
];

const popularTags = [
  'React', 'TypeScript', 'Next.js', 'Vue.js', 'Node.js', 'Python', 'JavaScript',
  'CSS', 'HTML', 'Webpack', 'Vite', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL',
  'GraphQL', 'REST API', 'Redux', 'TailwindCSS', 'Git'
];

const latestArticles = [
  {
    id: 1,
    title: 'React 19 新特性解析：并发渲染与服务端组件',
    excerpt: '探索 React 19 中的最新功能，分析并发渲染机制，服务端组件的实现原理。',
    cover: 'https://images.unsplash.com/photo-1623279911303-a116f3d4a06e?q=80&w=500&auto=format&fit=crop',
    category: 'frontend',
    tags: ['React', 'SSR', '性能优化'],
    author: 'A Tech Blogger',
    date: '2024-01-15',
    readTime: '8分钟'
  },
  {
    id: 2,
    title: 'TypeScript 5.0 高级类型系统：从入门到精通',
    excerpt: '深入学习 TypeScript 5.0 的高级特性，包括模板字面量类型、条件类型等。',
    cover: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=500&auto=format&fit=crop',
    category: 'frontend',
    tags: ['TypeScript', '类型系统', '前端'],
    author: 'A Tech Blogger',
    date: '2024-01-12',
    readTime: '12分钟'
  },
  {
    id: 3,
    title: 'Node.js 微服务架构设计与实现',
    excerpt: '详解如何使用 Node.js 构建可扩展的微服务架构，包括服务发现、负载均衡等。',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop',
    category: 'backend',
    tags: ['Node.js', '微服务', '架构'],
    author: 'A Tech Blogger',
    date: '2024-01-10',
    readTime: '15分钟'
  }
];
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">技术分类</h1>
      <p class="text-gray-600 mb-8">按技术栈和领域浏览文章，快速找到你感兴趣的内容</p>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- 左侧分类筛选 -->
        <div class="lg:w-1/4">
          <div class="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-semibold text-gray-900">分类筛选</h2>
              <button class="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div class="mb-4 py-2 px-3 bg-gray-900 text-white rounded-md font-medium">全部分类</div>

            <ul class="space-y-2">
              <li v-for="category in categories" :key="category.id" class="flex justify-between items-center py-2 px-3 hover:bg-gray-50 rounded-md cursor-pointer transition-colors duration-200">
                <span>{{ category.name }}</span>
                <span class="text-gray-500 text-sm">{{ category.count }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 右侧主内容 -->
        <div class="lg:w-3/4">
          <!-- 分类搜索 -->
          <div class="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div class="relative">
              <input
                type="text"
                placeholder="搜索分类或标签..."
                class="w-full py-2 px-4 pr-10 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
              <button class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- 分类卡片 -->
          <h2 class="text-xl font-bold text-gray-900 mb-4">所有分类</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div v-for="category in categories" :key="category.id" class="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div class="p-6">
                <div class="flex items-center mb-3">
                  <div :class="`${category.color} w-3 h-3 rounded-full mr-2`"></div>
                  <h3 class="font-semibold text-gray-900">{{ category.name }}</h3>
                </div>
                <p class="text-gray-600 text-sm mb-4">{{ category.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-gray-500 text-sm">{{ category.count }} 篇文章</span>
                  <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">点击查看 →</button>
                </div>
              </div>
            </div>
          </div>

          <!-- 热门标签 -->
          <h2 class="text-xl font-bold text-gray-900 mb-4">热门标签</h2>
          <div class="bg-white rounded-lg shadow-sm p-6 mb-10">
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in popularTags" :key="tag" class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors duration-200">{{ tag }}</span>
            </div>
          </div>

          <!-- 最新文章 -->
          <h2 class="text-xl font-bold text-gray-900 mb-4">最新文章</h2>
          <div class="space-y-6">
            <div v-for="article in latestArticles" :key="article.id" class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/3">
                  <img :src="article.cover" alt="文章封面" class="w-full h-full object-cover">
                </div>
                <div class="md:w-2/3 p-6">
                  <h3 class="font-bold text-lg text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors duration-200">{{ article.title }}</h3>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ article.excerpt }}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span v-for="tag in article.tags" :key="tag" class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{{ tag }}</span>
                  </div>
                  <div class="flex justify-between items-center text-xs text-gray-500">
                    <span>{{ article.author }} • {{ article.date }}</span>
                    <span>{{ article.readTime }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* 自定义样式 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>